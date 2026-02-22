import React from 'react'

export function App() {
  return (
    <div style={{ padding: 24 }}>
      <p style={{ color: '#4a4a7a', fontSize: 12, marginBottom: 16 }}>
        🔮 App C — port 3003 · remote of app-a · consumes app-b/DataService
      </p>
      <h1 style={{ fontSize: 24, marginBottom: 16 }}>App C (Rspack)</h1>
      <p style={{ color: '#666' }}>Exposes Chart and Utils. Used by app-a. Uses DataService from app-b.</p>
    </div>
  )
}
