/**
 * @fed-prism/server — In-memory state store
 *
 * Single source of truth for runtime data within one server process.
 * Intentionally simple — no persistence, no concurrency primitives.
 * All state lives here; subsystems read/write via exported functions.
 */

import type {
  FederationSnapshot,
  FederationAggregate,
  MfManifest,
  CorrelatedView,
} from '@fed-prism/core'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ManifestEntry {
  url: string
  manifest: MfManifest | null
  fetchedAt: number | null
  error: string | null
}

export interface StoreState {
  /** Latest snapshot per MF instanceName */
  snapshots: Record<string, FederationSnapshot>
  /** Registered remote manifest URLs, keyed by app name */
  manifests: Record<string, ManifestEntry>
  /** Computed correlated view — rebuilt on every snapshot/manifest change */
  correlatedView: CorrelatedView | null
  lastUpdated: number
}

// ─── Singleton Store ──────────────────────────────────────────────────────────

const state: StoreState = {
  snapshots: {},
  manifests: {},
  correlatedView: null,
  lastUpdated: 0,
}

// ─── Snapshot Operations ──────────────────────────────────────────────────────

export function upsertSnapshot(snapshot: FederationSnapshot): void {
  state.snapshots[snapshot.instanceName] = snapshot
  state.lastUpdated = Date.now()
}

export function getSnapshot(instanceName: string): FederationSnapshot | undefined {
  return state.snapshots[instanceName]
}

export function getAllSnapshots(): Record<string, FederationSnapshot> {
  return state.snapshots
}

// ─── Manifest Operations ──────────────────────────────────────────────────────

export function registerManifestUrl(name: string, url: string): void {
  if (!state.manifests[name]) {
    state.manifests[name] = { url, manifest: null, fetchedAt: null, error: null }
  }
}

export function upsertManifest(name: string, manifest: MfManifest, url: string): void {
  state.manifests[name] = { url, manifest, fetchedAt: Date.now(), error: null }
  state.lastUpdated = Date.now()
}

export function setManifestError(name: string, error: string, url: string): void {
  state.manifests[name] = {
    url,
    manifest: state.manifests[name]?.manifest ?? null,
    fetchedAt: state.manifests[name]?.fetchedAt ?? null,
    error,
  }
}

export function getAllManifests(): Record<string, ManifestEntry> {
  return state.manifests
}

// ─── Correlated View ──────────────────────────────────────────────────────────

export function setCorrelatedView(view: CorrelatedView): void {
  state.correlatedView = view
  state.lastUpdated = Date.now()
}

export function getCorrelatedView(): CorrelatedView | null {
  return state.correlatedView
}

// ─── Aggregate Snapshot (sent over SSE) ──────────────────────────────────────

export function buildAggregate(): FederationAggregate {
  return {
    instances: state.snapshots,
    lastUpdated: state.lastUpdated,
    correlatedView: state.correlatedView,
  }
}

export function getState(): Readonly<StoreState> {
  return state
}
