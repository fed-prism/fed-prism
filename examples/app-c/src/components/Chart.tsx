/**
 * app-c/Chart — exposed module consumed by app-a.
 * Uses DataService from app-b — the key cross-remote dependency.
 * This import is what creates the implicit shell → app-a → app-c → app-b chain.
 */
import React, { useEffect, useState } from 'react'

// Dynamic import of DataService from app-b to avoid hard bundling at startup
type DataPoint = { label: string; value: number }

export default function Chart() {
  const [data, setData] = useState<DataPoint[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Dynamic import triggers app-b container load
    import('app-b/DataService')
      .then((mod) => setData(mod.getChartData()))
      .catch(() => setError('Could not reach app-b/DataService'))
  }, [])

  const max = Math.max(...data.map((d) => d.value), 1)

  return (
    <div
      style={{
        padding: 16,
        background: '#0a0a1a',
        borderRadius: 10,
        border: '1px solid #1e1e3a',
        color: '#e2e8f0',
        minWidth: 280,
      }}
    >
      <div style={{ fontSize: 11, color: '#8b5cf6', marginBottom: 12, fontFamily: 'monospace' }}>
        Chart ↗ app-c · data via app-b/DataService
      </div>
      {error ? (
        <p style={{ color: '#f87171', fontSize: 12 }}>{error} — start app-b on port 3002</p>
      ) : data.length === 0 ? (
        <p style={{ color: '#666', fontSize: 12 }}>Loading data from app-b…</p>
      ) : (
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 80 }}>
          {data.map((d) => (
            <div key={d.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div
                style={{
                  width: 28,
                  height: `${(d.value / max) * 64}px`,
                  background: 'linear-gradient(to top, #6366f1, #8b5cf6)',
                  borderRadius: 3,
                  transition: 'height 0.3s ease',
                }}
              />
              <span style={{ fontSize: 9, color: '#64748b' }}>{d.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
