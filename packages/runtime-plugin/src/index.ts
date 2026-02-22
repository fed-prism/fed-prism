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
  afterResolve?: (args: unknown) => void
  onLoad?: (args: unknown) => void
  loadShare?: (args: unknown) => Promise<boolean | void> | boolean | void
  init?: (args: unknown) => void
  errorLoadRemote?: (args: unknown) => void | never
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

function debounce<T extends (...args: unknown[]) => void>(fn: T, ms: number): T {
  let timer: ReturnType<typeof setTimeout> | null = null
  return ((...args: unknown[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }) as T
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

  send(snapshot: FederationSnapshot): void {
    if (this.ws?.readyState !== WebSocket.OPEN) return
    const message: WsMessage = { type: 'snapshot', payload: snapshot }
    try {
      this.ws.send(JSON.stringify(message))
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
  const {
    port = FEDPRISM_DEFAULT_PORT,
    debounceMs = FEDPRISM_SNAPSHOT_DEBOUNCE_MS,
    enabled = process.env['NODE_ENV'] !== 'production',
  } = options

  if (!enabled) {
    // Return no-op plugin in production
    return { name: 'fed-prism-plugin' }
  }

  const socket = new FedPrismWebSocket(port)
  socket.connect()

  let instanceName = 'unknown'

  const sendSnapshot = debounce((trigger: HookName) => {
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

  return {
    name: 'fed-prism-plugin',

    init(args: unknown): void {
      const typedArgs = args as { options?: { name?: string } } | undefined
      if (typedArgs?.options?.name) {
        instanceName = typedArgs.options.name
      }
      sendSnapshot('init')
    },

    afterResolve(): void {
      sendSnapshot('afterResolve')
    },

    onLoad(): void {
      sendSnapshot('onLoad')
    },

    loadShare(): void {
      sendSnapshot('loadShare')
    },

    errorLoadRemote(): void {
      sendSnapshot('onLoad') // capture state at failure point too
    },
  }
}

export type { FedPrismPluginOptions, FedPrismConfig }
