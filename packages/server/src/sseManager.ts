/**
 * @fed-prism/server — SSE (Server-Sent Events) broadcaster
 *
 * Manages all connected dashboard clients. Sends events when snapshots
 * or manifests change. Uses the SSE text/event-stream protocol.
 */

import type { FastifyReply } from 'fastify'
import type { FederationAggregate, MfManifest, SSEEvent } from '@fed-prism/core'
import { FEDPRISM_VERSION } from '@fed-prism/core'

// ─── Client Registry ──────────────────────────────────────────────────────────

interface SSEClient {
  id: string
  reply: FastifyReply
  connectedAt: number
}

const clients = new Map<string, SSEClient>()
let clientCounter = 0

// ─── SSE Helpers ─────────────────────────────────────────────────────────────

function formatSSEEvent(event: SSEEvent): string {
  return `event: ${event.type}\ndata: ${JSON.stringify(event.data)}\n\n`
}

function sendToClient(client: SSEClient, event: SSEEvent): boolean {
  try {
    client.reply.raw.write(formatSSEEvent(event))
    return true
  } catch {
    // Client disconnected
    return false
  }
}

function broadcastEvent(event: SSEEvent): void {
  const deadClients: string[] = []
  for (const [id, client] of clients) {
    const ok = sendToClient(client, event)
    if (!ok) deadClients.push(id)
  }
  for (const id of deadClients) {
    clients.delete(id)
  }
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Register a new SSE client. Sets the appropriate headers and sends
 * an initial `connected` event. Returns the client ID.
 */
export function addSSEClient(reply: FastifyReply): string {
  const id = `client-${++clientCounter}`

  reply.raw.setHeader('Content-Type', 'text/event-stream')
  reply.raw.setHeader('Cache-Control', 'no-cache')
  reply.raw.setHeader('Connection', 'keep-alive')
  reply.raw.setHeader('X-Accel-Buffering', 'no')
  reply.raw.flushHeaders()

  const client: SSEClient = { id, reply, connectedAt: Date.now() }
  clients.set(id, client)

  // Send initial connection event
  sendToClient(client, {
    type: 'connected',
    data: { server: 'fed-prism', version: FEDPRISM_VERSION },
  })

  // Clean up on disconnect
  reply.raw.on('close', () => {
    clients.delete(id)
  })

  return id
}

/**
 * Broadcast a `snapshot-update` event to all connected dashboard clients.
 */
export function broadcastSnapshotUpdate(aggregate: FederationAggregate): void {
  broadcastEvent({ type: 'snapshot-update', data: aggregate })
}

/**
 * Broadcast a `manifest-update` event to all connected dashboard clients.
 */
export function broadcastManifestUpdate(name: string, manifest: MfManifest): void {
  broadcastEvent({ type: 'manifest-update', data: { name, manifest } })
}

export function getClientCount(): number {
  return clients.size
}
