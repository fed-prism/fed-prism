import { useCallback, useMemo } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  type Node,
  type Edge,
  type Connection,
  BackgroundVariant,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import type { CorrelatedView, GraphEdge } from '@fed-prism/core'

interface DependencyGraphProps {
  correlatedView: CorrelatedView | null
}

// ─── Edge colour by type ──────────────────────────────────────────────────────
const EDGE_COLOURS: Record<string, string> = {
  static: 'var(--color-edge-static)',
  async: 'var(--color-edge-async)',
  transitive: 'var(--color-edge-transitive)',
  cyclic: 'var(--color-edge-cyclic)',
}

// ─── Layout — simple left-to-right dagre-like positioning ────────────────────

function layoutNodes(
  apps: CorrelatedView['apps'],
  edges: GraphEdge[],
): { id: string; x: number; y: number }[] {
  // Assign rough topological columns using in-degree
  const inDegree = new Map<string, number>()
  for (const app of apps) inDegree.set(app.name, 0)
  for (const edge of edges) {
    inDegree.set(edge.target, (inDegree.get(edge.target) ?? 0) + 1)
  }

  const columns = new Map<string, number>()
  const sorted = [...apps].sort((a, b) => (inDegree.get(a.name) ?? 0) - (inDegree.get(b.name) ?? 0))
  let col = 0
  let prev = -1
  for (const app of sorted) {
    const degree = inDegree.get(app.name) ?? 0
    if (degree !== prev) { col++; prev = degree }
    columns.set(app.name, col)
  }

  // Group nodes by column, assign y positions
  const colNodes = new Map<number, string[]>()
  for (const [name, c] of columns) {
    if (!colNodes.has(c)) colNodes.set(c, [])
    colNodes.get(c)!.push(name)
  }

  const positions: { id: string; x: number; y: number }[] = []
  for (const [c, nodes] of colNodes) {
    const totalH = nodes.length * 80
    let y = -totalH / 2
    for (const name of nodes) {
      positions.push({ id: name, x: (c - 1) * 240, y })
      y += 80
    }
  }
  return positions
}

// ─── Node colours by status ───────────────────────────────────────────────────

const STATUS_COLOURS: Record<string, string> = {
  online: '#22c55e',
  offline: '#6064a0',
  'manifest-only': '#f59e0b',
  'runtime-only': '#38bdf8',
}

// ─── Component ────────────────────────────────────────────────────────────────

export function DependencyGraph({ correlatedView }: DependencyGraphProps) {
  const { rfNodes, rfEdges } = useMemo(() => {
    if (!correlatedView) return { rfNodes: [], rfEdges: [] }

    const positions = layoutNodes(correlatedView.apps, correlatedView.edges)
    const posMap = new Map(positions.map((p) => [p.id, p]))

    const rfNodes: Node[] = correlatedView.apps.map((app) => {
      const pos = posMap.get(app.name) ?? { x: 0, y: 0 }
      const statusColor = STATUS_COLOURS[app.status] ?? '#6064a0'
      return {
        id: app.name,
        position: { x: pos.x, y: pos.y },
        data: {
          label: (
            <div style={{ padding: '4px 8px', textAlign: 'center' }}>
              <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 2 }}>{app.name}</div>
              <div style={{ fontSize: 10, color: statusColor }}>{app.status}</div>
            </div>
          ),
        },
        style: {
          background: 'var(--color-bg-elevated)',
          border: `2px solid ${statusColor}`,
          borderRadius: 8,
          color: 'var(--color-text-primary)',
          fontSize: 12,
          minWidth: 120,
        },
      }
    })

    const rfEdges: Edge[] = correlatedView.edges.map((edge, i) => ({
      id: `edge-${i}`,
      source: edge.source,
      target: edge.target,
      label: edge.type,
      animated: edge.type === 'async',
      style: { stroke: EDGE_COLOURS[edge.type] ?? '#9898b8' },
      labelStyle: { fill: 'var(--color-text-muted)', fontSize: 10 },
      labelBgStyle: { fill: 'var(--color-bg-elevated)' },
    }))

    return { rfNodes, rfEdges }
  }, [correlatedView])

  const [nodes, , onNodesChange] = useNodesState(rfNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(rfEdges)

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  )

  if (!correlatedView || correlatedView.apps.length === 0) {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Dependency Graph</h1>
          <p className="page-subtitle">Remote topology — which apps consume which remotes</p>
        </div>
        <div className="empty-state">
          <div className="empty-state__icon">🕸️</div>
          <h2 className="empty-state__title">No apps connected yet</h2>
          <p className="empty-state__body">
            The graph will appear once your apps connect with <code>@fed-prism/runtime-plugin</code>.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="page-header">
        <h1 className="page-title">Dependency Graph</h1>
        <p className="page-subtitle">
          {correlatedView.apps.length} app{correlatedView.apps.length !== 1 ? 's' : ''}{' '}
          · {correlatedView.edges.length} remote edge{correlatedView.edges.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Edge type legend */}
      <div className="graph-legend">
        {Object.entries(EDGE_COLOURS).map(([type, colour]) => (
          <div key={type} className="graph-legend__item">
            <span className="graph-legend__line" style={{ background: colour }} />
            <span className="graph-legend__label">{type}</span>
          </div>
        ))}
      </div>

      <div style={{ flex: 1, borderRadius: 8, overflow: 'hidden', border: '1px solid var(--color-border-subtle)', minHeight: 500 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          colorMode="dark"
          proOptions={{ hideAttribution: false }}
        >
          <Background variant={BackgroundVariant.Dots} color="var(--color-border-subtle)" size={1} />
          <Controls style={{ background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border-subtle)' }} />
          <MiniMap
            style={{ background: 'var(--color-bg-surface)' }}
            nodeColor={(node) => {
              const app = correlatedView.apps.find((a) => a.name === node.id)
              return STATUS_COLOURS[app?.status ?? 'offline'] ?? '#6064a0'
            }}
          />
        </ReactFlow>
      </div>
    </div>
  )
}
