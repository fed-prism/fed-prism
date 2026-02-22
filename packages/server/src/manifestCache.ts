/**
 * @fed-prism/server — mf-manifest.json fetcher and cache
 *
 * Periodically re-fetches remote manifests so the server stays in sync
 * with deployed remotes even as the runtime plugin connects and disconnects.
 *
 * Uses a simple TTL cache: if a manifest is < CACHE_TTL_MS old, it is
 * served from memory rather than hitting the network again.
 */

import type { MfManifest } from '@fed-prism/core'
import {
  registerManifestUrl,
  upsertManifest,
  setManifestError,
  getAllManifests,
} from './store.js'
import { broadcastManifestUpdate } from './sseManager.js'

const CACHE_TTL_MS = 30_000 // 30 seconds
const FETCH_TIMEOUT_MS = 5_000

// ─── Fetch Helpers ─────────────────────────────────────────────────────────────

async function fetchWithTimeout(url: string): Promise<Response> {
  const controller = new AbortController()
  const timerId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)
  try {
    const res = await fetch(url, { signal: controller.signal })
    return res
  } finally {
    clearTimeout(timerId)
  }
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Register a remote manifest URL. Will fetch it immediately on registration.
 */
export async function registerRemote(name: string, url: string): Promise<void> {
  registerManifestUrl(name, url)
  await refreshManifest(name, url)
}

/**
 * Fetch (or re-fetch) a single manifest URL, updating the store.
 * Broadcasts `manifest-update` to SSE clients on success.
 */
export async function refreshManifest(name: string, url: string): Promise<MfManifest | null> {
  try {
    const res = await fetchWithTimeout(url)
    if (!res.ok) {
      const error = `HTTP ${res.status} ${res.statusText}`
      setManifestError(name, error, url)
      return null
    }
    const manifest = (await res.json()) as MfManifest
    upsertManifest(name, manifest, url)
    broadcastManifestUpdate(name, manifest)
    return manifest
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err)
    setManifestError(name, error, url)
    return null
  }
}

/**
 * Fetch a manifest on-demand (used by the REST proxy route).
 * Respects the TTL cache — returns the cached version if still fresh.
 */
export async function fetchManifestProxied(url: string): Promise<MfManifest | null> {
  // Check if we already have a fresh cached version for any registered remote
  const manifests = getAllManifests()
  for (const [name, entry] of Object.entries(manifests)) {
    if (entry.url === url && entry.manifest && entry.fetchedAt) {
      const age = Date.now() - entry.fetchedAt
      if (age < CACHE_TTL_MS) {
        return entry.manifest
      }
      // Stale — refresh
      return refreshManifest(name, url)
    }
  }

  // Unknown URL — fetch directly without storing in registered remotes
  try {
    const res = await fetchWithTimeout(url)
    if (!res.ok) return null
    return (await res.json()) as MfManifest
  } catch {
    return null
  }
}

/**
 * Start polling all registered remotes at the given interval.
 * Call once on server startup.
 */
export function startManifestPolling(intervalMs = 60_000): NodeJS.Timeout {
  return setInterval(async () => {
    const manifests = getAllManifests()
    const tasks = Object.entries(manifests).map(([name, entry]) =>
      refreshManifest(name, entry.url),
    )
    await Promise.allSettled(tasks)
  }, intervalMs)
}
