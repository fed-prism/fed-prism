/**
 * app-a/Button — exposed module consumed by shell.
 * Simple design to demonstrate remote component loading.
 */
import React, { lazy, Suspense, useState } from 'react'
import { create } from 'zustand'
import { Observable } from 'rxjs'
import { motion } from 'framer-motion'
import dayjs from 'dayjs'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { createMachine } from 'xstate'
import { buildSchema } from 'graphql'
import { QueryClient } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import isEmail from 'validator/lib/isEmail'
import { createStore } from 'redux'
// Defeat aggressive tree-shaking
// @ts-ignore
window.__keep_app_a = window.__keep_app_a || []
// @ts-ignore
window.__keep_app_a.push(motion, dayjs, clsx, twMerge, createMachine, buildSchema, QueryClient, BrowserRouter, styled, isEmail, createStore)

const useStore = create(() => ({ initialized: true }))
const dummyObs = new Observable()

interface ButtonProps {
  label?: string
  onClick?: (e: any) => void
}

const RemoteChart = lazy(() => import('app-c/Chart'))

export default function Button({ label = 'Click me', onClick }: ButtonProps) {
  const [showChart, setShowChart] = useState(false)
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <button
        onClick={(e) => {
          if (onClick) onClick(e)
          setShowChart(true)
        }}
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
        {label === 'Click me' ? 'Load app-c Chart' : label}
        <span style={{ marginLeft: 8, fontSize: 10, opacity: 0.7 }}>↗ app-a</span>
      </button>

      {showChart && (
        <Suspense fallback={<div style={{ fontSize: 12, color: '#999' }}>Loading Chart from app-c...</div>}>
          <div style={{ padding: 16, border: '1px dashed #6366f1', borderRadius: 8 }}>
            <RemoteChart />
          </div>
        </Suspense>
      )}
    </div>
  )
}
