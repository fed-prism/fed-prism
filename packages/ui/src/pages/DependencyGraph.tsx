import { useEffect, useRef, useState } from 'react'
import type { CorrelatedView, GraphEdge } from '@fed-prism/core'

interface DependencyGraphProps {
  correlatedView: CorrelatedView | null
}

// ─── Colours ──────────────────────────────────────────────────────────────────

const EDGE_COLOURS: Record<string, string> = {
  static: '#6366f1',
  async: '#06b6d4',
  transitive: '#9898b8',
  cyclic: '#ef4444',
}

const STATUS_COLOURS: Record<string, string> = {
  online: '#22c55e',
  offline: '#6064a0',
  'manifest-only': '#f59e0b',
  'runtime-only': '#38bdf8',
}

// ─── Layout ───────────────────────────────────────────────────────────────────

const NODE_W = 140
const NODE_H = 60
const COL_GAP = 220
const ROW_GAP = 90

function layoutNodes(
  apps: CorrelatedView['apps'],
  edges: GraphEdge[],
): Map<string, { x: number; y: number }> {
  // Assign columns by in-degree (topological rank)
  const inDegree = new Map<string, number>(apps.map((a) => [a.name, 0]))
  for (const e of edges) inDegree.set(e.target, (inDegree.get(e.target) ?? 0) + 1)

  const sorted = [...apps].sort((a, b) => (inDegree.get(a.name) ?? 0) - (inDegree.get(b.name) ?? 0))

  const colOf = new Map<string, number>()
  let col = 0
  let prevDeg = -1
  for (const app of sorted) {
    const deg = inDegree.get(app.name) ?? 0
    if (deg !== prevDeg) { col++; prevDeg = deg }
    colOf.set(app.name, col)
  }

  // Group by column, assign Y
  const colNodes = new Map<number, string[]>()
  for (const [name, c] of colOf) {
    if (!colNodes.has(c)) colNodes.set(c, [])
    colNodes.get(c)!.push(name)
  }

  const positions = new Map<string, { x: number; y: number }>()
  for (const [c, nodes] of colNodes) {
    const totalH = nodes.length * NODE_H + (nodes.length - 1) * (ROW_GAP - NODE_H)
    let y = -totalH / 2
    for (const name of nodes) {
      positions.set(name, { x: (c - 1) * COL_GAP, y })
      y += ROW_GAP
    }
  }
  return positions
}

function svgBounds(positions: Map<string, { x: number; y: number }>) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  for (const { x, y } of positions.values()) {
    minX = Math.min(minX, x)
    minY = Math.min(minY, y)
    maxX = Math.max(maxX, x + NODE_W)
    maxY = Math.max(maxY, y + NODE_H)
  }
  const pad = 40
  return { minX: minX - pad, minY: minY - pad, w: maxX - minX + pad * 2, h: maxY - minY + pad * 2 }
}

// ─── Component ────────────────────────────────────────────────────────────────

export function DependencyGraph({ correlatedView }: DependencyGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 800, h: 500 })

  useEffect(() => {
    if (!containerRef.current) return
    const obs = new ResizeObserver(([e]) => {
      setSize({ w: e.contentRect.width, h: e.contentRect.height })
    })
    obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [])

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

  const positions = layoutNodes(correlatedView.apps, correlatedView.edges)
  const bounds = svgBounds(positions)

  // Scale to fit the container
  const scaleX = size.w / bounds.w
  const scaleY = size.h / bounds.h
  const scale = Math.min(scaleX, scaleY, 1)
  const vw = bounds.w
  const vh = bounds.h

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="page-header">
        <h1 className="page-title">Dependency Graph</h1>
        <p className="page-subtitle">
          {correlatedView.apps.length} app{correlatedView.apps.length !== 1 ? 's' : ''}{' '}
          · {correlatedView.edges.length} remote edge{correlatedView.edges.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Legend */}
      <div className="graph-legend">
        {Object.entries(EDGE_COLOURS).map(([type, colour]) => (
          <div key={type} className="graph-legend__item">
            <span className="graph-legend__line" style={{ background: colour }} />
            <span className="graph-legend__label">{type}</span>
          </div>
        ))}
      </div>

      {/* SVG canvas */}
      <div
        ref={containerRef}
        style={{
          flex: 1,
          borderRadius: 8,
          overflow: 'hidden',
          border: '1px solid var(--color-border-subtle)',
          minHeight: 400,
          background: 'var(--color-bg-surface)',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox={`${bounds.minX} ${bounds.minY} ${vw} ${vh}`}
          style={{ display: 'block' }}
        >
          <defs>
            {Object.entries(EDGE_COLOURS).map(([type, colour]) => (
              <marker
                key={type}
                id={`arrow-${type}`}
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L8,3 z" fill={colour} />
              </marker>
            ))}
          </defs>

          {/* Edges */}
          {correlatedView.edges.map((edge, i) => {
            const src = positions.get(edge.source)
            const tgt = positions.get(edge.target)
            if (!src || !tgt) return null
            const colour = EDGE_COLOURS[edge.type] ?? '#9898b8'
            // Connect right-center of source to left-center of target
            const x1 = src.x + NODE_W
            const y1 = src.y + NODE_H / 2
            const x2 = tgt.x
            const y2 = tgt.y + NODE_H / 2
            const cx = (x1 + x2) / 2
            const d = `M${x1},${y1} C${cx},${y1} ${cx},${y2} ${x2},${y2}`
            return (
              <g key={i}>
                <path
                  d={d}
                  fill="none"
                  stroke={colour}
                  strokeWidth={2}
                  markerEnd={`url(#arrow-${edge.type})`}
                  opacity={0.85}
                />
                {/* Edge label at midpoint */}
                <text
                  x={cx}
                  y={(y1 + y2) / 2 - 6}
                  textAnchor="middle"
                  fontSize={10}
                  fill={colour}
                  opacity={0.7}
                >
                  {edge.type}
                </text>
              </g>
            )
          })}

          {/* Nodes */}
          {correlatedView.apps.map((app) => {
            const pos = positions.get(app.name)
            if (!pos) return null
            const statusColor = STATUS_COLOURS[app.status] ?? '#6064a0'
            return (
              <g key={app.name} transform={`translate(${pos.x},${pos.y})`}>
                <rect
                  width={NODE_W}
                  height={NODE_H}
                  rx={8}
                  fill="#1e1e2a"
                  stroke={statusColor}
                  strokeWidth={2}
                />
                <text
                  x={NODE_W / 2}
                  y={NODE_H / 2 - 6}
                  textAnchor="middle"
                  fontSize={14}
                  fontWeight="600"
                  fill="#e8e8f0"
                >
                  {app.name}
                </text>
                <text
                  x={NODE_W / 2}
                  y={NODE_H / 2 + 12}
                  textAnchor="middle"
                  fontSize={10}
                  fill={statusColor}
                >
                  {app.status}
                </text>
                {/* Connection handles (cosmetic) */}
                <circle cx={0} cy={NODE_H / 2} r={4} fill="#1e1e2a" stroke="#4a4a6a" strokeWidth={1.5} />
                <circle cx={NODE_W} cy={NODE_H / 2} r={4} fill="#1e1e2a" stroke="#4a4a6a" strokeWidth={1.5} />
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
