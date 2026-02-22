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
  moduleInfo?: Record<string, unknown>
  __INSTANCES__?: Array<{ name: string }>
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

function readFederationGlobal(): Partial<FederationSnapshot> {
  if (typeof globalThis.__FEDERATION__ === 'undefined') {
    return {}
  }
  const fed = globalThis.__FEDERATION__
  return {
    shareScope: (fed.SHARE ?? {}) as FederationSnapshot['shareScope'],
    moduleInfo: (fed.moduleInfo ?? {}) as FederationSnapshot['moduleInfo'],
    instances: (fed.__INSTANCES__ ?? []).map((i) => i.name),
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

  const sendSnapshot = debounce((trigger: HookName) => {
    console.log('[FedPrism] sendSnapshot called from trigger:', trigger)
    const data = readFederationGlobal()
    const snapshot: FederationSnapshot = {
      instanceName,
      timestamp: Date.now(),
      trigger,
      shareScope: data.shareScope ?? {},
      moduleInfo: data.moduleInfo ?? {},
      instances: data.instances ?? [],
      remotes: [],
    }
    socket.send(snapshot)
  }, debounceMs)

  console.log('[FedPrism] Returning plugin object object from factory')

  return {
    name: 'fed-prism-plugin',

    init(args: unknown) {
      console.log('[FedPrism] HOOK event: init', args)
      const typedArgs = args as { options?: { name?: string } } | undefined
      if (typedArgs?.options?.name) {
        instanceName = typedArgs.options.name
      }
      sendSnapshot('init')
      return args
    },

    afterResolve(args: unknown) {
      console.log('[FedPrism] HOOK event: afterResolve', args)
      sendSnapshot('afterResolve')
      return args
    },

    onLoad(args: unknown) {
      console.log('[FedPrism] HOOK event: onLoad', args)
      sendSnapshot('onLoad')
      return args
    },

    loadShare(args: unknown) {
      console.log('[FedPrism] HOOK event: loadShare', args)
      sendSnapshot('loadShare')
      // BailHook - return void or boolean
    },

    errorLoadRemote(args: unknown) {
      console.log('[FedPrism] HOOK event: errorLoadRemote', args)
      sendSnapshot('onLoad') // capture state at failure point too
      // SyncHook - return void
    },
  }
}


export type { FedPrismPluginOptions, FedPrismConfig, MfRuntimePlugin }
