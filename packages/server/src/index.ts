/**
 * @fed-prism/server — main entry point
 *
 * Wires together:
 *   - WebSocket endpoint (runtime plugin → server)
 *   - SSE endpoint     (server → dashboard UI)
 *   - REST API         (dashboard UI → server, manifest proxy)
 *   - Static serving   (embedded dashboard build)
 *   - Correlation      (snapshot + manifest → CorrelatedView)
 *   - Manifest polling (background refresh of remote manifests)
 */

import type { FedPrismConfig, WsMessage, RemoteConfig } from '@fed-prism/core'
import { FEDPRISM_DEFAULT_PORT, FEDPRISM_WS_PATH } from '@fed-prism/core'
import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import fastifyWebsocket from '@fastify/websocket'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import { existsSync } from 'fs'

import { upsertSnapshot, getState, buildAggregate, getAllSnapshots, getCorrelatedView, setCorrelatedView } from './store.js'
import { addSSEClient, broadcastSnapshotUpdate, getClientCount } from './sseManager.js'
import { registerRemote, fetchManifestProxied, startManifestPolling } from './manifestCache.js'
import { buildCorrelatedView } from './correlate.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

// ─── Re-correlation (triggered on every state change) ─────────────────────────

let correlateQueued = false

function scheduleCorrelation(): void {
  if (correlateQueued) return
  correlateQueued = true
  // Micro-delay so rapid bursts only trigger one re-correlation
  setImmediate(() => {
    correlateQueued = false
    const state = getState()
    const view = buildCorrelatedView(state)
    setCorrelatedView(view)
    broadcastSnapshotUpdate(buildAggregate())
  })
}

// ─── Server Factory ───────────────────────────────────────────────────────────

export interface CreateServerResult {
  start: () => Promise<string>
  stop: () => Promise<void>
}

export async function createServer(config: FedPrismConfig = {}): Promise<CreateServerResult> {
  const port = config.port ?? FEDPRISM_DEFAULT_PORT
  const remotes: RemoteConfig[] = config.remotes ?? []
  const manifestPollInterval = 60_000

  const app = Fastify({ logger: false })

  await app.register(fastifyWebsocket)

  // ── Static files (embedded UI build) ────────────────────────────────────────
  // In production, the built UI is placed at <package-root>/public by the CLI.
  // During development the UI runs its own Vite dev server on port 7358.
  const publicDir = join(__dirname, '..', 'public')
  if (existsSync(publicDir)) {
    await app.register(fastifyStatic, { root: publicDir, prefix: '/' })
  }

  // ── WebSocket — runtime plugin connections ───────────────────────────────────
  await app.register(async (wsApp) => {
    wsApp.get(FEDPRISM_WS_PATH, { websocket: true }, (socket, _req) => {
      const pingInterval = setInterval(() => {
        if (socket.readyState === 1) {
          socket.send(JSON.stringify({ type: 'ping' }))
        }
      }, 10000)

      console.log(`[Server] New WebSocket connection on ${FEDPRISM_WS_PATH}`)

      socket.on('message', (message: string) => {
        try {
          const msg = JSON.parse(message)
          if (msg.type !== 'ping') {
            console.log(`[Server] WsMessage received: ${msg.type}`, msg.payload?.instanceName)
          }
          if (msg.type === 'snapshot') {
            upsertSnapshot((msg as WsMessage).payload)
            scheduleCorrelation()
          }
        } catch (err) {
          console.error('[Server] Failed to handle WS message', err)
        }
      })

      socket.on('close', () => {
        console.log(`[Server] WebSocket connection closed`)
        clearInterval(pingInterval)
      })

      socket.on('error', () => {
        // Silently handle WebSocket errors to prevent server crash
      })
    })
  })

  // ── SSE — dashboard clients ──────────────────────────────────────────────────
  app.get('/api/events', async (_req, reply) => {
    // Prevent Fastify from closing the response — SSE is long-lived
    reply.hijack()
    const id = addSSEClient(reply)
    // Send current state immediately on connect
    const aggregate = buildAggregate()
    if (Object.keys(aggregate.instances).length > 0 || aggregate.correlatedView) {
      reply.raw.write(`event: snapshot-update\ndata: ${JSON.stringify(aggregate)}\n\n`)
    }
    void id // id tracked internally by sseManager
  })

  // ── REST: current aggregate ──────────────────────────────────────────────────
  app.get('/api/snapshot', async (_req, reply) => {
    return reply.send(buildAggregate())
  })

  // ── REST: correlated view ────────────────────────────────────────────────────
  app.get('/api/correlated', async (_req, reply) => {
    const view = getCorrelatedView()
    if (!view) {
      return reply.status(204).send()
    }
    return reply.send(view)
  })

  // ── REST: raw snapshots ──────────────────────────────────────────────────────
  app.get('/api/instances', async (_req, reply) => {
    return reply.send(getAllSnapshots())
  })

  // ── REST: status ─────────────────────────────────────────────────────────────
  app.get('/api/status', async (_req, reply) => {
    const state = getState()
    return reply.send({
      status: 'ok',
      snapshotCount: Object.keys(state.snapshots).length,
      manifestCount: Object.keys(state.manifests).length,
      sseClients: getClientCount(),
      lastUpdated: state.lastUpdated,
    })
  })

  // ── REST: manifest proxy (CORS-safe fetch for dashboard) ────────────────────
  app.get<{ Querystring: { url: string } }>('/api/manifest', async (req, reply) => {
    const { url } = req.query
    if (!url) return reply.status(400).send({ error: 'url query param required' })
    const manifest = await fetchManifestProxied(url)
    if (!manifest) return reply.status(502).send({ error: 'Failed to fetch manifest' })
    return reply.send(manifest)
  })

  // ── REST: register a remote manifest URL at runtime ─────────────────────────
  app.post<{ Body: { name: string; url: string } }>('/api/remotes', async (req, reply) => {
    const { name, url } = req.body ?? {}
    if (!name || !url) return reply.status(400).send({ error: 'name and url required' })
    await registerRemote(name, url)
    scheduleCorrelation()
    return reply.status(201).send({ registered: true, name, url })
  })

  return {
    start: async () => {
      const address = await app.listen({ port, host: '0.0.0.0' })

      // Seed registered remotes from config
      await Promise.allSettled(remotes.map((r) => registerRemote(r.name, r.manifestUrl)))
      if (remotes.length > 0) scheduleCorrelation()

      // Start background manifest refresh
      startManifestPolling(manifestPollInterval)

      return address
    },
    stop: async () => {
      await app.close()
    },
  }
}
