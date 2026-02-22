/**
 * useSSE — connect to the FedPrism server's SSE endpoint and keep
 * the client-side state in sync.
 *
 * Returns the latest FederationAggregate and connection status.
 */

import { useState, useEffect, useRef, useCallback } from 'react'
import type { FederationAggregate, CorrelatedView, SSEEvent } from '@fed-prism/core'

export type ConnectionStatus = 'connecting' | 'connected' | 'reconnecting' | 'error'

export interface UseSSEResult {
  aggregate: FederationAggregate | null
  correlatedView: CorrelatedView | null
  status: ConnectionStatus
  lastEventAt: number | null
}

const SSE_URL = '/api/events'
const MAX_RECONNECT_DELAY_MS = 30_000

export function useSSE(): UseSSEResult {
  const [aggregate, setAggregate] = useState<FederationAggregate | null>(null)
  const [correlatedView, setCorrelatedView] = useState<CorrelatedView | null>(null)
  const [status, setStatus] = useState<ConnectionStatus>('connecting')
  const [lastEventAt, setLastEventAt] = useState<number | null>(null)

  const esRef = useRef<EventSource | null>(null)
  const reconnectAttempt = useRef(0)
  const reconnectTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const connect = useCallback(() => {
    if (esRef.current) {
      esRef.current.close()
    }

    setStatus(reconnectAttempt.current > 0 ? 'reconnecting' : 'connecting')
    const es = new EventSource(SSE_URL)
    esRef.current = es

    es.addEventListener('connected', () => {
      reconnectAttempt.current = 0
      setStatus('connected')
      setLastEventAt(Date.now())
    })

    es.addEventListener('snapshot-update', (e: MessageEvent) => {
      try {
        const data = JSON.parse(e.data) as FederationAggregate
        setAggregate(data)
        if (data.correlatedView) {
          setCorrelatedView(data.correlatedView)
        }
        setLastEventAt(Date.now())
        setStatus('connected')
      } catch {
        // Malformed SSE data — ignore
      }
    })

    es.addEventListener('manifest-update', (e: MessageEvent) => {
      setLastEventAt(Date.now())
      // Trigger a fresh aggregate fetch to pick up the new manifest data
      void e // the manifest-update itself triggers a re-correlation on the server,
             // which will emit snapshot-update shortly after
    })

    es.onerror = () => {
      es.close()
      esRef.current = null
      setStatus('error')

      // Exponential backoff reconnect
      const delay = Math.min(1000 * 2 ** reconnectAttempt.current, MAX_RECONNECT_DELAY_MS)
      reconnectAttempt.current++
      reconnectTimer.current = setTimeout(connect, delay)
    }
  }, [])

  useEffect(() => {
    connect()
    return () => {
      esRef.current?.close()
      if (reconnectTimer.current) clearTimeout(reconnectTimer.current)
    }
  }, [connect])

  return { aggregate, correlatedView, status, lastEventAt }
}
