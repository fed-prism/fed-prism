import type { FedPrismConfig } from '@fed-prism/core'
import { FEDPRISM_DEFAULT_PORT } from '@fed-prism/core'
import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import fastifyWebsocket from '@fastify/websocket'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export async function createServer(config: FedPrismConfig = {}): Promise<{
  start: () => Promise<string>
  stop: () => Promise<void>
}> {
  const port = config.port ?? FEDPRISM_DEFAULT_PORT

  const app = Fastify({ logger: false })

  await app.register(fastifyWebsocket)
  await app.register(fastifyStatic, {
    root: join(__dirname, '..', 'public'),
    prefix: '/',
  })

  // WebSocket endpoint for runtime plugin connections
  app.register(async (wsApp) => {
    wsApp.get('/ws', { websocket: true }, (socket) => {
      socket.on('message', (raw) => {
        try {
          // TODO: Implement snapshot aggregation
          const _msg = JSON.parse(raw.toString())
          console.info('[FedPrism] received snapshot from runtime plugin')
          void _msg
        } catch {
          // Malformed message — ignore
        }
      })
    })
  })

  // REST API — snapshot
  app.get('/api/snapshot', async (_req, reply) => {
    return reply.send({ message: 'FedPrism server running — data collection in progress' })
  })

  // REST API — CORS proxy for mf-manifest.json
  app.get<{ Querystring: { url: string } }>('/api/manifest', async (req, reply) => {
    const { url } = req.query
    if (!url) return reply.status(400).send({ error: 'url param required' })
    try {
      const res = await fetch(url)
      const json = await res.json()
      return reply.send(json)
    } catch (err) {
      return reply.status(502).send({ error: 'Failed to fetch manifest', detail: String(err) })
    }
  })

  return {
    start: async () => {
      const address = await app.listen({ port, host: '127.0.0.1' })
      return address
    },
    stop: async () => {
      await app.close()
    },
  }
}
