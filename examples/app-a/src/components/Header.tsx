/**
 * app-a/Header — exposed module.
 * Uses lodash@4.17.21 (intentional version conflict vs app-b's 4.17.20).
 */
import React from 'react'
import capitalize from 'lodash/capitalize'

interface HeaderProps {
  title?: string
}

export default function Header({ title = 'shell' }: HeaderProps) {
  return (
    <header
      style={{
        padding: '16px 24px',
        background: '#1a1a2e',
        color: '#e2e2f0',
        borderBottom: '1px solid #2a2a4a',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 14,
      }}
    >
      <span>🔮</span>
      <strong>{capitalize(title)} — MF 2.0 Shell</strong>
      <span style={{ marginLeft: 'auto', fontSize: 11, opacity: 0.5 }}>↗ app-a | lodash 4.17.21</span>
    </header>
  )
}
