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

async function handlePort(port) {
  const inUse = await isPortInUse(port)
  if (!inUse) return // Free

  console.log(`  ⚡ Port ${port} is in use (likely a stale process). Force killing it...`)
  await new Promise((resolve) => {
    const killer = spawn('npx', ['--yes', 'kill-port', String(port)], {
      stdio: 'pipe', shell: true,
    })
    killer.on('close', resolve)
  })
  console.log(`  ✓ Port ${port} cleared\n`)
}

// Clear all expected ports before starting to ensure a clean launch
await handlePort(7357) // server
await handlePort(3000) // shell
await handlePort(3001) // app-a
await handlePort(3002) // app-b
await handlePort(3003) // app-c

const commands = [
  '"node packages/cli/dist/index.js start"',
  '"pnpm --filter @fed-prism/ui dev"',
  '"pnpm --filter @fed-prism-examples/app-c dev"',
  '"pnpm --filter @fed-prism-examples/app-b dev"',
  '"pnpm --filter @fed-prism-examples/app-a dev"',
  '"pnpm --filter @fed-prism-examples/shell dev"',
]

const names   = 'server,ui,app-c,app-b,app-a,shell'
const colors  = 'blue.bold,cyan.bold,green.bold,yellow.bold,red.bold,magenta.bold'

// On Windows with shell: true, spawn needs the args as a single string
// if they contain spaces and quotes.
const args = [
  '--names', names,
  '--prefix-colors', colors,
  '--kill-others',
  '--kill-others-on-fail',
  '--handle-input',
  ...commands
].join(' ')

const proc = spawn(`npx concurrently ${args}`, { stdio: 'inherit', shell: true, cwd: join(__dirname, '..') })

proc.on('exit', (code) => process.exit(code ?? 0))
process.on('SIGINT', () => proc.kill('SIGINT'))
process.on('SIGTERM', () => proc.kill('SIGTERM'))
