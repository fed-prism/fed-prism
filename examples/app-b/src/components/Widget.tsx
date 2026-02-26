/**
 * app-b/Widget — async remote component consumed by shell on demand.
 * Uses lodash@4.17.20 — intentionally different patch from app-a (4.17.21).
 */
import React from 'react'
import chunk from 'lodash/chunk'
import { format } from 'date-fns'
import axios from 'axios'
import dayjs from 'dayjs'
import clsx from 'clsx'
import { v4 } from 'uuid'
import * as R from 'ramda'
import { createMachine } from 'xstate'
import styled from 'styled-components'
import { makeAutoObservable } from 'mobx'
import * as d3 from 'd3'
import ms from 'ms'
// Defeat aggressive tree-shaking
// @ts-ignore
window.__keep_app_b = window.__keep_app_b || []
// @ts-ignore
window.__keep_app_b.push(axios, dayjs, clsx, v4, R, createMachine, styled, makeAutoObservable, d3, ms)

const ITEMS = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta']

export default function Widget() {
  const rows = chunk(ITEMS, 3)
  return (
    <div
      style={{
        padding: 20,
        background: '#0f172a',
        color: '#e2e8f0',
        borderRadius: 10,
        border: '1px solid #334155',
        fontFamily: 'monospace',
        fontSize: 13,
      }}
    >
      <div style={{ marginBottom: 12, color: '#06b6d4', fontWeight: 600 }}>
        Widget ↗ app-b (Webpack 5 · lodash 4.17.20 · {format(new Date(), 'yyyy')})
      </div>
      <div>
        {rows.map((row, i) => (
          <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
            {row.map((item) => (
              <span
                key={item}
                style={{ background: '#1e293b', padding: '4px 10px', borderRadius: 4 }}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
