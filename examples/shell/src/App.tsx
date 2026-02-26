import React, { lazy, Suspense, useState } from 'react'
import { create } from 'zustand'
import { motion } from 'framer-motion'
import { z } from 'zod'
import { nanoid } from 'nanoid'
import { QueryClient } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import clsx from 'clsx'
import ms from 'ms'
import colorName from 'color-name'
import * as cookie from 'cookie'
// Defeat aggressive tree-shaking
// @ts-ignore
window.__keep_shell = window.__keep_shell || []
// @ts-ignore
window.__keep_shell.push(motion, z, nanoid, QueryClient, BrowserRouter, createStore, clsx, ms, colorName, cookie)

const useStore = create(() => ({ initialized: true }))

// Static remote — loaded at startup
const RemoteButton = lazy(() => import('app-a/Button'))
// Async remote — loaded on demand
const RemoteWidget = lazy(() => import('app-b/Widget'))

function AppInfo() {
  return (
    <div style={{ padding: '8px 16px', background: '#1a1a2e', color: '#a0a0c0', fontSize: 12, borderRadius: 6, marginBottom: 16 }}>
      🔮 <strong>FedPrism Shell</strong> — port 3000 · static remote: app-a · async remote: app-b
    </div>
  )
}

export function App() {
  const [showWidget, setShowWidget] = useState(false)

  return (
    <div style={{ padding: 32, maxWidth: 800, margin: '0 auto' }}>
      <AppInfo />
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24, color: '#1a1a2e' }}>
        Shell Application
      </h1>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#4a4a7a' }}>
          Static Remote: Button from app-a
        </h2>
        <Suspense fallback={<span style={{ color: '#999' }}>Loading Button…</span>}>
          <RemoteButton onClick={() => alert('Button clicked! Loaded from app-a')} />
        </Suspense>
      </section>

      <section>
        <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#4a4a7a' }}>
          Async Remote: Widget from app-b (loaded on demand)
        </h2>
        {!showWidget ? (
          <button
            onClick={() => setShowWidget(true)}
            style={{
              padding: '8px 20px',
              background: '#6366f1',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
            Load Widget from app-b ▶
          </button>
        ) : (
          <Suspense fallback={<span style={{ color: '#999' }}>Loading Widget…</span>}>
            <RemoteWidget />
          </Suspense>
        )}
      </section>
    </div>
  )
}
