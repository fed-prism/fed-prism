/**
 * @fed-prism/server — CorrelatedView builder (the core intelligence of FedPrism)
 *
 * Takes the raw store (snapshots + manifests) and builds a CorrelatedView:
 *   - Which apps are online, offline, or manifest-only
 *   - Which shared deps have version conflicts
 *   - The remote topology as a directed graph (edges)
 *   - Cyclic remote detection
 *
 * This runs synchronously on the hot path — keep it fast.
 * All types are from @fed-prism/core.
 */

import type {
  CorrelatedApp,
  CorrelatedSharedDep,
  CorrelatedView,
  EdgeType,
  FederationSnapshot,
  GraphEdge,
  MfManifest,
  SharedActual,
  SharedDeclared,
} from '@fed-prism/core'
import type { StoreState } from './store.js'

// ─── Correlated App Status ─────────────────────────────────────────────────────

function deriveStatus(
  hasManifest: boolean,
  hasSnapshot: boolean,
  snapshotAge: number | null,
): CorrelatedApp['status'] {
  const STALE_THRESHOLD_MS = 30_000
  if (hasManifest && hasSnapshot) {
    if (snapshotAge !== null && snapshotAge > STALE_THRESHOLD_MS) return 'offline'
    return 'online'
  }
  if (hasManifest) return 'manifest-only'
  if (hasSnapshot) return 'runtime-only'
  return 'offline'
}

// ─── Shared Dependencies ───────────────────────────────────────────────────────

function buildSharedDeps(
  snapshots: Record<string, FederationSnapshot>,
  manifests: Record<string, { manifest: MfManifest | null }>,
): CorrelatedSharedDep[] {
  // package → scope → dep
  const depMap = new Map<
    string,
    Map<string, { declared: SharedDeclared[]; actual: SharedActual[] }>
  >()

  function getOrCreate(pkg: string, scope: string) {
    if (!depMap.has(pkg)) depMap.set(pkg, new Map())
    const scopeMap = depMap.get(pkg)!
    if (!scopeMap.has(scope)) scopeMap.set(scope, { declared: [], actual: [] })
    return scopeMap.get(scope)!
  }

  // Map pkg name to a Set of scopes it appeared in at runtime. Default to 'default' if never seen.
  const pkgScopeMap = new Map<string, Set<string>>()

  const seenActuals = new Set<string>()

  // Actual data from runtime snapshots FIRST
  for (const [appName, snapshot] of Object.entries(snapshots)) {
    for (const [scope, packages] of Object.entries(snapshot.shareScope)) {
      for (const [pkg, versions] of Object.entries(packages)) {
        if (!pkgScopeMap.has(pkg)) pkgScopeMap.set(pkg, new Set())
        pkgScopeMap.get(pkg)!.add(scope)
        for (const [version, item] of Object.entries(versions)) {
          const entry = getOrCreate(pkg, scope)
          
          const from = item.from ?? appName
          const loaded = Boolean(item.loaded)
          const eager = Boolean(item.eager)
          
          const existing = entry.actual.find(a => a.from === from && a.version === version && a.scope === scope)
          if (existing) {
            existing.loaded = existing.loaded || loaded
            existing.eager = existing.eager || eager
          } else {
            entry.actual.push({ from, version, scope, loaded, eager })
          }
        }
      }
    }
  }

  // Declared data from runtime snapshots SECOND (Primary source of truth for exact scopes)
  for (const [appName, snapshot] of Object.entries(snapshots)) {
    if (!snapshot.declaredShared) continue
    for (const shared of snapshot.declaredShared) {
      const explicitScope = shared.scope || 'default'
      const entry = getOrCreate(shared.name, explicitScope)
      
      const exists = entry.declared.some(d => d.from === shared.from)
      if (!exists) {
        entry.declared.push({
          from: shared.from,
          version: shared.version,
          requiredVersion: shared.requiredVersion,
          singleton: shared.singleton,
          eager: shared.eager,
          strictVersion: shared.strictVersion,
        })
      }
    }
  }

  // Declared data from manifests THIRD (Fallback for legacy apps without runtime plugin scoping)
  for (const [appName, { manifest }] of Object.entries(manifests)) {
    if (!manifest) continue
    
    // Skip manifest fallback COMPLETELY if the app already provided perfectly scoped declarations at runtime.
    // This prevents "Declaration Bleed" where a package scoped to 'modern-ui' in shell gets 
    // the 'legacy-ui' declarations from app_a if they happen to share the same package name.
    const snapshot = snapshots[appName]
    if (snapshot?.declaredShared && snapshot.declaredShared.length > 0) {
      continue
    }

    for (const shared of manifest.shared) {
      // Manifests lack explicit shareScope. We fall back to whatever runtime scopes the package appeared in.
      // If none, default to 'default'.
      const runtimeScopes = pkgScopeMap.get(shared.name)
      const scopesToAssign = runtimeScopes && runtimeScopes.size > 0 ? Array.from(runtimeScopes) : ['default']

      for (const resolvedScope of scopesToAssign) {
        const entry = getOrCreate(shared.name, resolvedScope)
        
        // Prevent duplicates if runtime snapshot already provided it
        const exists = entry.declared.some(d => d.from === appName)
        if (!exists) {
          entry.declared.push({
            from: appName,
            version: shared.version,
            requiredVersion: shared.requiredVersion,
            singleton: shared.singleton,
            eager: shared.eager,
            strictVersion: shared.strictVersion,
          })
        }
      }
    }
  }

  const result: CorrelatedSharedDep[] = []

  for (const [packageName, scopeMap] of depMap) {
    for (const [scope, { declared, actual }] of scopeMap) {
      // Conflict = more than one unique resolved version loaded
      const loadedVersions = new Set(actual.filter((a) => a.loaded).map((a) => a.version))
      const conflict = loadedVersions.size > 1

      // The resolved winner — the one that was actually loaded (if singleton)
      const resolvedFrom = actual.find((a) => a.loaded)?.from ?? null

      result.push({
        packageName,
        scope,
        declared,
        actual,
        conflict,
        resolvedFrom,
      })
    }
  }

  return result.sort((a, b) => {
    // Sort primarily by scope (asc), then by packageName (asc)
    const scopeCompare = a.scope.localeCompare(b.scope)
    if (scopeCompare !== 0) return scopeCompare
    return a.packageName.localeCompare(b.packageName)
  })
}

// ─── Graph Edges ──────────────────────────────────────────────────────────────

function buildEdges(
  snapshots: Record<string, FederationSnapshot>,
  manifests: Record<string, { manifest: MfManifest | null }>,
): GraphEdge[] {
  const edgeMap = new Map<string, GraphEdge>()

  function upsertEdge(source: string, target: string, type: EdgeType, moduleRef?: string) {
    const key = `${source}→${target}`
    if (!edgeMap.has(key)) {
      edgeMap.set(key, { source, target, type, moduleRefs: [] })
    }
    const edge = edgeMap.get(key)!
    if (moduleRef && !edge.moduleRefs.includes(moduleRef)) {
      edge.moduleRefs.push(moduleRef)
    }
    // Escalate type if needed: transitive → async → static → cyclic
    const priority: EdgeType[] = ['transitive', 'async', 'static', 'cyclic']
    if (priority.indexOf(type) > priority.indexOf(edge.type)) {
      edge.type = type
    }
  }

  // Edges from declared manifest remotes
  for (const [appName, { manifest }] of Object.entries(manifests)) {
    if (!manifest) continue
    for (const remote of manifest.remotes) {
      const target = remote.federationContainerName
      upsertEdge(appName, target, 'static', remote.moduleName)
    }
  }

  // Edges from actual runtime data (remotes the plugin observed)
  for (const [appName, snapshot] of Object.entries(snapshots)) {
    for (const remote of snapshot.remotes) {
      const edgeType: EdgeType = remote.loadType === 'static' ? 'static' : 'async'
      for (const mod of remote.modules) {
        upsertEdge(appName, remote.name, edgeType, mod)
      }
    }
  }

  const edges = Array.from(edgeMap.values())

  // Detect cycles using DFS and mark edges accordingly
  detectAndMarkCycles(edges)

  return edges
}

function detectAndMarkCycles(edges: GraphEdge[]): void {
  // Build adjacency list
  const adj = new Map<string, string[]>()
  for (const edge of edges) {
    if (!adj.has(edge.source)) adj.set(edge.source, [])
    adj.get(edge.source)!.push(edge.target)
  }

  const visited = new Set<string>()
  const inStack = new Set<string>()

  function dfs(node: string, path: string[]): boolean {
    visited.add(node)
    inStack.add(node)
    for (const neighbour of adj.get(node) ?? []) {
      if (!visited.has(neighbour)) {
        if (dfs(neighbour, [...path, neighbour])) return true
      } else if (inStack.has(neighbour)) {
        // Found a cycle — mark the back edge
        for (const edge of edges) {
          if (edge.source === node && edge.target === neighbour) {
            edge.type = 'cyclic'
          }
        }
        return true
      }
    }
    inStack.delete(node)
    return false
  }

  const nodes = new Set([...adj.keys(), ...Array.from(adj.values()).flat()])
  for (const node of nodes) {
    if (!visited.has(node)) dfs(node, [node])
  }
}

// ─── Main Correlate Function ───────────────────────────────────────────────────

export function buildCorrelatedView(state: StoreState): CorrelatedView {
  const now = Date.now()

  // Build CorrelatedApp list — union of all known app names
  const allNames = new Set([
    ...Object.keys(state.snapshots),
    ...Object.keys(state.manifests),
  ])

  const apps: CorrelatedApp[] = Array.from(allNames).map((name) => {
    const snapshot = state.snapshots[name] ?? null
    const manifestEntry = state.manifests[name]
    const manifest = manifestEntry?.manifest ?? null
    const snapshotAge = snapshot ? now - snapshot.timestamp : null

    return {
      name,
      manifest,
      snapshot,
      status: deriveStatus(!!manifest, !!snapshot, snapshotAge),
      lastSeen: snapshot?.timestamp ?? null,
    }
  })

  const sharedDeps = buildSharedDeps(state.snapshots, state.manifests)
  const edges = buildEdges(state.snapshots, state.manifests)

  return { apps, sharedDeps, edges, generatedAt: now }
}
