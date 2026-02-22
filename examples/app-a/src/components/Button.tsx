/**
 * app-a/Button — exposed module consumed by shell.
 * Simple design to demonstrate remote component loading.
 */
import React from 'react'

interface ButtonProps {
  label?: string
  onClick?: () => void
}

export default function Button({ label = 'Click me', onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 24px',
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        color: '#fff',
        border: 'none',
        borderRadius: 8,
        fontSize: 14,
        fontWeight: 600,
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(99, 102, 241, 0.3)',
      }}
    >
      {label}
      <span style={{ marginLeft: 8, fontSize: 10, opacity: 0.7 }}>↗ app-a</span>
    </button>
  )
}
