#!/usr/bin/env node
/**
 * scripts/dev.mjs — starts the full FedPrism dev stack.
 *
 * 1. Kills any process on port 7357 (stale server from previous run)
 * 2. Runs all 6 processes via concurrently with labelled, coloured output
 *
 * Usage: pnpm dev:all  (or node scripts/dev.mjs)
 */

import { createServer } from 'net'
import { spawn } from 'child_process'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import http from 'http'

const __dirname = dirname(fileURLToPath(import.meta.url))

// ─── Safe Port Handling ───────────────────────────────────────────────────────

function isPortInUse(port) {
  return new Promise((resolve) => {
    const s = createServer()
    s.once('error', () => resolve(true))
    s.once('listening', () => { s.close(); resolve(false) })
    s.listen(port, '127.0.0.1')
  })
}

function checkIsFedPrism(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://127.0.0.1:${port}/api/status`, (res) => {
      let data = ''
      res.on('data', chunk => { data += chunk })
      res.on('end', () => {
        try {
          resolve(JSON.parse(data).status === 'ok')
        } catch {
          resolve(false)
        }
      })
    })
    req.on('error', () => resolve(false))
    req.setTimeout(1000, () => { req.destroy(); resolve(false) })
  })
}

async function handlePort(port) {
  const inUse = await isPortInUse(port)
  if (!inUse) return // Free

  // Port is in use, is it FedPrism?
  const isFedPrism = await checkIsFedPrism(port)
  
  if (isFedPrism) {
    console.log(`  ⚡ Found stale FedPrism server on port ${port} — killing...`)
    await new Promise((resolve) => {
      const killer = spawn('npx', ['--yes', 'kill-port', String(port)], {
        stdio: 'pipe', shell: true,
      })
      killer.on('close', resolve)
    })
    console.log(`  ✓ Port ${port} cleared\n`)
  } else {
    console.error(`\n❌ ERROR: Port ${port} is already in use by another application.`)
    console.error(`   FedPrism needs port ${port} to communicate with example apps.`)
    console.error(`   Please free the port and try again.\n`)
    process.exit(1)
  }
}

await handlePort(7357)

// ─── Start all 6 processes concurrently ──────────────────────────────────────

const commands = [
  'node packages/cli/dist/index.js start --no-open',
  'pnpm --filter @fed-prism/ui dev',
  'pnpm --filter @fed-prism-examples/app-c dev',
  'pnpm --filter @fed-prism-examples/app-b dev',
  'pnpm --filter @fed-prism-examples/app-a dev',
  'pnpm --filter @fed-prism-examples/shell dev',
]

const names   = 'server,ui,app-c,app-b,app-a,shell'
const colors  = 'blue.bold,cyan.bold,green.bold,yellow.bold,red.bold,magenta.bold'

const proc = spawn(
  'npx',
  [
    'concurrently',
    '--names', names,
    '--prefix-colors', colors,
    '--kill-others',
    '--kill-others-on-fail',
    '--handle-input',
    ...commands,
  ],
  { stdio: 'inherit', shell: true, cwd: join(__dirname, '..') }
)

proc.on('exit', (code) => process.exit(code ?? 0))
process.on('SIGINT', () => proc.kill('SIGINT'))
process.on('SIGTERM', () => proc.kill('SIGTERM'))
