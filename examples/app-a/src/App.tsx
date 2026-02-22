import React, { lazy, Suspense } from 'react'

const RemoteChart = lazy(() => import('app-c/Chart'))

export function App() {
  return (
    <div style={{ padding: 24 }}>
      <p style={{ color: '#4a4a7a', fontSize: 12, marginBottom: 16 }}>
        🔮 App A — port 3001 · remote of shell · host of app-c
      </p>
      <h1 style={{ fontSize: 24, marginBottom: 16 }}>App A</h1>
      <Suspense fallback={<span>Loading chart from app-c…</span>}>
        <RemoteChart />
      </Suspense>
    </div>
  )
}
