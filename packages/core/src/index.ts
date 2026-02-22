/**
 * @fed-prism/core
 * Shared TypeScript types, interfaces, and constants for the FedPrism tool.
 * Zero runtime dependencies — pure types and constants.
 */

// ─── Hook Names ──────────────────────────────────────────────────────────────

export type HookName =
  | 'beforeInit'
  | 'init'
  | 'afterResolve'
  | 'initContainer'
  | 'onLoad'
  | 'loadShare'
  | 'beforeLoadShare'

// ─── Share Scope ─────────────────────────────────────────────────────────────

export interface ShareScopeItem {
  version: string
  scope: string
  loaded: boolean
  from: string // MF instance name that provided this version
  eager: boolean
}

/**
 * The SHARE data from globalThis.__FEDERATION__.SHARE
 * Keyed: scope → package → version → item
 */
export type ShareScopeData = Record<string, Record<string, Record<string, ShareScopeItem>>>

// ─── Remotes ─────────────────────────────────────────────────────────────────

export type RemoteLoadType = 'static' | 'async' | 'transitive' | 'unknown'

export interface RemoteData {
  name: string
  entry: string | null
  loadType: RemoteLoadType
  loaded: boolean
  loadedAt: number | null
  modules: string[]
}

// ─── Module Info ─────────────────────────────────────────────────────────────

export interface ModuleInfoEntry {
  name: string
  exposes: string[]
}

export type ModuleInfoData = Record<string, ModuleInfoEntry>

// ─── Federation Snapshot (sent from runtime plugin → server) ─────────────────

export interface FederationSnapshot {
  instanceName: string
  timestamp: number
  trigger: HookName
  shareScope: ShareScopeData
  moduleInfo: ModuleInfoData
  instances: string[]
  remotes: RemoteData[]
}

// ─── mf-manifest.json (MF 2.0 build artifact) ────────────────────────────────

export interface MfManifestRemoteEntry {
  name: string
  path: string
  type: string
}

export interface MfManifestMetaData {
  name: string
  publicPath: string
  type: 'app' | 'remote' | 'host'
  buildInfo: { buildVersion: string; buildName: string }
  remoteEntry: MfManifestRemoteEntry
  ssrRemoteEntry?: MfManifestRemoteEntry
}

export interface MfManifestShared {
  id: string
  name: string
  version: string
  requiredVersion: string
  singleton: boolean
  eager: boolean
  strictVersion: boolean
  loaded?: boolean
}

export interface MfManifestExposes {
  id: string
  name: string
  assets: {
    js: { sync: string[]; async: string[] }
    css: { sync: string[]; async: string[] }
  }
  path: string
}

export interface MfManifestRemote {
  federationContainerName: string
  moduleName: string
  alias: string
  entry: string
}

export interface MfManifest {
  metaData: MfManifestMetaData
  shared: MfManifestShared[]
  exposes: MfManifestExposes[]
  remotes: MfManifestRemote[]
}

// ─── Correlated / Aggregated View ────────────────────────────────────────────

export type AppStatus = 'online' | 'offline' | 'manifest-only' | 'runtime-only'

export interface CorrelatedApp {
  name: string
  manifest: MfManifest | null
  snapshot: FederationSnapshot | null
  status: AppStatus
  lastSeen: number | null
}

export interface SharedDeclared {
  from: string // app name
  version: string
  requiredVersion: string
  singleton: boolean
  eager: boolean
  strictVersion: boolean
}

export interface SharedActual {
  from: string
  version: string
  scope: string
  loaded: boolean
  eager: boolean
}

export interface CorrelatedSharedDep {
  packageName: string
  scope: string
  declared: SharedDeclared[]
  actual: SharedActual[]
  conflict: boolean
  resolvedFrom: string | null
}

export type EdgeType = 'static' | 'async' | 'transitive' | 'cyclic'

export interface GraphEdge {
  source: string
  target: string
  type: EdgeType
  moduleRefs: string[]
}

export interface CorrelatedView {
  apps: CorrelatedApp[]
  sharedDeps: CorrelatedSharedDep[]
  edges: GraphEdge[]
  generatedAt: number
}

export interface FederationAggregate {
  instances: Record<string, FederationSnapshot>
  lastUpdated: number
  correlatedView: CorrelatedView | null
}

// ─── Config ───────────────────────────────────────────────────────────────────

export interface RemoteConfig {
  name: string
  manifestUrl: string
}

export interface FedPrismConfig {
  port?: number
  open?: boolean
  remotes?: RemoteConfig[]
  debounceMs?: number
}

// ─── WebSocket Messages ───────────────────────────────────────────────────────

export interface WsMessage {
  type: 'snapshot'
  payload: FederationSnapshot
}

// ─── SSE Events ───────────────────────────────────────────────────────────────

export type SSEEvent =
  | { type: 'snapshot-update'; data: FederationAggregate }
  | { type: 'manifest-update'; data: { name: string; manifest: MfManifest } }
  | { type: 'connected'; data: { server: string; version: string } }

// ─── Constants ────────────────────────────────────────────────────────────────

export const FEDPRISM_WS_PATH = '/ws' as const
export const FEDPRISM_DEFAULT_PORT = 7357 as const
export const FEDPRISM_SNAPSHOT_DEBOUNCE_MS = 100 as const
export const FEDPRISM_VERSION = '0.0.1' as const
