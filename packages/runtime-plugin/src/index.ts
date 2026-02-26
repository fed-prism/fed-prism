import type {
  FederationSnapshot,
  FedPrismConfig,
  HookName,
  WsMessage,
} from '@fed-prism/core'
import {
  FEDPRISM_DEFAULT_PORT,
  FEDPRISM_SNAPSHOT_DEBOUNCE_MS,
  FEDPRISM_WS_PATH,
} from '@fed-prism/core'

// ─── Types for the MF 2.0 Runtime Plugin API ─────────────────────────────────

interface MfRuntimePlugin {
  name: string
  afterResolve?: (args: unknown) => unknown
  onLoad?: (args: unknown) => unknown
  loadShare?: (args: unknown) => Promise<boolean | void> | boolean | void
  init?: (args: unknown) => unknown
  errorLoadRemote?: (args: unknown) => void
}

// ─── globalThis.__FEDERATION__ type (minimal) ─────────────────────────────────

interface FederationGlobal {
  SHARE?: Record<string, Record<string, Record<string, unknown>>>
  __SHARE__?: Record<string, Record<string, Record<string, unknown>>>
  moduleInfo?: Record<string, unknown>
  __INSTANCES__?: Array<{ name: string; options?: { shared?: Record<string, any[]> } }>
}

declare global {
  var __FEDERATION__: FederationGlobal | undefined
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Safe browser-compatible debounce. Uses a fixed `(trigger: HookName) => void`
// overload so callers don't need to cast.
function debounce(fn: (trigger: HookName) => void, ms: number): (trigger: HookName) => void {
  let timer: ReturnType<typeof setTimeout> | null = null
  return (trigger: HookName) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(trigger), ms)
  }
}

/** Browser-safe check for production mode — avoids referencing Node's `process`. */
function isProduction(): boolean {
  // Bundlers (Vite, Webpack, Rsbuild) replace import.meta.env.MODE at build time.
  // Fall back to false (i.e. enabled) if the variable is absent.
  try {
    // @ts-expect-error import.meta.env is injected by bundlers; not present in tsc
    return import.meta.env?.MODE === 'production'
  } catch {
    return false
  }
}

function getShareScope(fed: FederationGlobal, instanceName: string): FederationSnapshot['shareScope'] {
  if (fed.__SHARE__) {
    // MF 2.0: __SHARE__[instanceId][scope][pkg][version]
    // We must merge ALL instances (host + remotes) because plugins only run
    // in the host context initially, and the host's __SHARE__ contains all loaded remote scopes.
    const merged: Record<string, any> = {}
    for (const data of Object.values(fed.__SHARE__)) {
      if (!data || typeof data !== 'object') continue
      for (const [scope, pkgs] of Object.entries(data)) {
        if (!merged[scope]) merged[scope] = {}
        for (const [pkg, versions] of Object.entries(pkgs as any)) {
          if (!merged[scope][pkg]) merged[scope][pkg] = {}
          Object.assign(merged[scope][pkg], versions)
        }
      }
    }
    return merged
  }
  
  if (fed.SHARE) {
    // MF 1.0: SHARE[scope][pkg][version]
    return fed.SHARE as FederationSnapshot['shareScope']
  }
  
  return {}
}

function readFederationGlobal(
  instanceName: string,
  staticRemoteNames: Set<string>,
): Partial<FederationSnapshot> {
  if (typeof globalThis.__FEDERATION__ === 'undefined') {
    return {}
  }
  const fed = globalThis.__FEDERATION__
  const rawModuleInfo = (fed.moduleInfo ?? {}) as Record<string, Record<string, unknown>>

  // __FEDERATION__.moduleInfo[instanceName] contains THIS instance's own config,
  // including remotesInfo which lists exactly which remotes it declared.
  // We use this as the filter — the full moduleInfo is shared across the federation
  // so without filtering we'd pick up every other app's remotes too.
  const selfInfo = rawModuleInfo[instanceName] as Record<string, unknown> | undefined
  const ownRemoteNames = new Set(
    Object.keys((selfInfo?.remotesInfo ?? {}) as Record<string, unknown>),
  )

  // Extract remotes from moduleInfo keys shaped "remoteName:http://...manifest.json"
  // Only include names that appear in this instance's own remotesInfo.
  // loadType: 'static' if present at init, 'async' if it appeared later (on-demand).
  const remotes: FederationSnapshot['remotes'] = []
  for (const [key, info] of Object.entries(rawModuleInfo)) {
    const httpIdx = key.indexOf(':http')
    if (httpIdx === -1) continue // skip bare instance names
    const name = key.slice(0, httpIdx)
    if (!ownRemoteNames.has(name)) continue // skip remotes that aren't ours
    const entry = typeof info?.remoteEntry === 'string' ? info.remoteEntry : null
    const remotesInfo = (info?.remotesInfo ?? {}) as Record<string, unknown>
    const loadType = staticRemoteNames.has(name) ? 'static' : 'async'
    remotes.push({
      name,
      entry,
      loadType,
      loaded: true,
      loadedAt: Date.now(),
      modules: Object.keys(remotesInfo),
    })
  }

  const declaredShared: FederationSnapshot['declaredShared'] = []
  for (const instance of fed.__INSTANCES__ ?? []) {
    const sharedObj = instance.options?.shared
    if (!sharedObj || typeof sharedObj !== 'object') continue
    for (const [pkgName, wrappers] of Object.entries(sharedObj)) {
      if (!Array.isArray(wrappers)) continue
      for (const w of wrappers) {
        const conf = w.shareConfig || {}
        declaredShared.push({
          from: instance.name,
          name: pkgName,
          version: w.version || '',
          requiredVersion: conf.requiredVersion || '',
          singleton: !!conf.singleton,
          eager: !!conf.eager,
          strictVersion: !!conf.strictVersion,
        })
      }
    }
  }

  return {
    shareScope: getShareScope(fed, instanceName),
    moduleInfo: rawModuleInfo as unknown as FederationSnapshot['moduleInfo'],
    instances: (fed.__INSTANCES__ ?? []).map((i) => i.name),
    remotes,
    declaredShared,
  }
}

// ─── WebSocket Manager ────────────────────────────────────────────────────────

class FedPrismWebSocket {
  private ws: WebSocket | null = null
  private reconnectAttempts = 0
  private readonly maxReconnectAttempts = 5
  private readonly reconnectDelayMs = 1000
  private readonly url: string
  private pingInterval: ReturnType<typeof setInterval> | null = null

  constructor(port: number) {
    this.url = `ws://localhost:${port}${FEDPRISM_WS_PATH}`
  }

  connect(): void {
    if (typeof WebSocket === 'undefined') return
    try {
      this.ws = new WebSocket(this.url)
      this.ws.onopen = () => {
        this.reconnectAttempts = 0
        this.startPing()
        while (this.messageQueue.length > 0) {
          const msg = this.messageQueue.shift()
          if (msg) this.flush(msg)
        }
      }
      this.ws.onclose = () => {
        this.stopPing()
        this.scheduleReconnect()
      }
      this.ws.onerror = () => {
        // Silent — FedPrism server may not be running, that's fine
      }
    } catch {
      // Silent
    }
  }

  private messageQueue: WsMessage[] = []

  send(snapshot: FederationSnapshot): void {
    const message: WsMessage = { type: 'snapshot', payload: snapshot }
    if (this.ws?.readyState !== WebSocket.OPEN) {
      this.messageQueue.push(message)
      return
    }
    this.flush(message)
  }

  private flush(message: WsMessage): void {
    try {
      this.ws?.send(JSON.stringify(message))
    } catch {
      // Silent
    }
  }

  private scheduleReconnect(): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) return
    this.reconnectAttempts++
    setTimeout(() => this.connect(), this.reconnectDelayMs * this.reconnectAttempts)
  }

  private startPing(): void {
    this.pingInterval = setInterval(() => {
      if (this.ws?.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({ type: 'ping' }))
      }
    }, 30_000)
  }

  private stopPing(): void {
    if (this.pingInterval) {
      clearInterval(this.pingInterval)
      this.pingInterval = null
    }
  }
}

// ─── Plugin Factory ───────────────────────────────────────────────────────────

interface FedPrismPluginOptions {
  port?: number
  debounceMs?: number
  enabled?: boolean
}

export function fedPrismPlugin(options: FedPrismPluginOptions = {}): MfRuntimePlugin {
  console.log('[FedPrism] Plugin factory executing with options:', options)
  
  const {
    port = FEDPRISM_DEFAULT_PORT,
    debounceMs = FEDPRISM_SNAPSHOT_DEBOUNCE_MS,
    enabled = !isProduction(),
  } = options

  console.log('[FedPrism] Plugin enabled?:', enabled, 'port:', port)

  if (!enabled) {
    // Return no-op plugin in production
    return { name: 'fed-prism-plugin' }
  }

  const socket = new FedPrismWebSocket(port)
  socket.connect()

  let instanceName = 'unknown'

  // Track which remotes are present at init time — these are statically loaded.
  // Any remote that appears in a later afterResolve is classified as 'async'.
  const staticRemoteNames = new Set<string>()
  let initDone = false

  const sendSnapshot = debounce((trigger: HookName) => {
    const data = readFederationGlobal(instanceName, staticRemoteNames)
    const snapshot: FederationSnapshot = {
      instanceName,
      timestamp: Date.now(),
      trigger,
      shareScope: data.shareScope ?? {},
      moduleInfo: data.moduleInfo ?? {},
      instances: data.instances ?? [],
      remotes: data.remotes ?? [],
    }
    socket.send(snapshot)
  }, debounceMs)

  console.log('[FedPrism] Returning plugin object object from factory')

  return {
    name: 'fed-prism-plugin',

    init(args: unknown) {
      const typedArgs = args as { options?: { name?: string } } | undefined
      if (typedArgs?.options?.name) {
        instanceName = typedArgs.options.name
      }
      sendSnapshot('init')
      // After init, snapshot whatever remotes are now known — mark them static
      setTimeout(() => {
        if (!initDone) {
          initDone = true
          const data = readFederationGlobal(instanceName, staticRemoteNames)
          for (const r of data.remotes ?? []) staticRemoteNames.add(r.name)
        }
      }, 0)
      return args
    },

    afterResolve(args: unknown) {
      sendSnapshot('afterResolve')
      return args
    },

    onLoad(args: unknown) {
      sendSnapshot('onLoad')
      return args
    },

    loadShare(args: unknown) {
      sendSnapshot('loadShare')
      // BailHook - return void or boolean
    },

    errorLoadRemote(args: unknown) {
      sendSnapshot('onLoad') // capture state at failure point too
      // SyncHook - return void
    },
  }
}


export type { FedPrismPluginOptions, FedPrismConfig, MfRuntimePlugin }
