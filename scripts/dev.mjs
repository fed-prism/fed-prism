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
  if (!inUse) return

  console.log(`  ⚡ Port ${port} is in use. Killing it...`)

  await new Promise((resolve) => {
    // On Windows: netstat finds the PID, taskkill ends it. Far more reliable than kill-port.
    // On Unix: lsof + kill works the same way.
    const cmd = process.platform === 'win32'
      ? `FOR /F "tokens=5" %p IN ('netstat -ano ^| findstr :${port} ^| findstr LISTENING') DO taskkill /F /PID %p`
      : `lsof -ti tcp:${port} | xargs kill -9`
    const killer = spawn(cmd, { stdio: 'pipe', shell: true })
    killer.on('close', resolve)
    killer.on('error', resolve) // don't block if command fails
  })

  // Small pause to let the OS release the port
  await new Promise((r) => setTimeout(r, 300))
  console.log(`  ✓ Port ${port} cleared`)
}

// Clear all expected ports before starting to ensure a clean launch
await handlePort(7357) // server
await handlePort(3000) // shell
await handlePort(3001) // app-a
await handlePort(3002) // app-b
await handlePort(3003) // app-c

// ─── Build TypeScript packages ────────────────────────────────────────────────
// These run from compiled dist/ at runtime, so we always rebuild before starting.
// Order matters: server and runtime-plugin depend on core; cli depends on server.
const buildPkgs = [
  { filter: '@fed-prism/core',           label: 'core' },
  { filter: '@fed-prism/server',         label: 'server' },
  { filter: '@fed-prism/runtime-plugin', label: 'runtime-plugin' },
  { filter: 'fed-prism',                 label: 'cli' },
]

for (const { filter, label } of buildPkgs) {
  process.stdout.write(`  📦 Building ${label}...`)
  const ok = await new Promise((resolve) => {
    const p = spawn('pnpm', ['--filter', filter, 'build'], { stdio: 'pipe', shell: true })
    p.on('close', (code) => resolve(code === 0))
  })
  console.log(ok ? ' ✓' : ' ✗ (continuing anyway)')
}
console.log()

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

// Auto-open the shell and dashboard once the servers are ready.
// We poll port 3000 (shell) and 7357 (FedPrism server) before opening.
// This replaces "you must visit port 3000 manually" — the MF plugin fires
// as soon as a browser loads the shell, which sends WebSocket snapshots.
async function waitForPort(port, maxWaitMs = 30_000) {
  const start = Date.now()
  while (Date.now() - start < maxWaitMs) {
    const ready = await new Promise((resolve) => {
      const req = http.get(`http://localhost:${port}/`, (res) => { res.resume(); resolve(true) })
      req.on('error', () => resolve(false))
      req.setTimeout(500, () => { req.destroy(); resolve(false) })
    })
    if (ready) return true
    await new Promise((r) => setTimeout(r, 500))
  }
  return false
}

// Open in background — don't block or fail the overall process
;(async () => {
  const [shellReady, serverReady] = await Promise.all([
    waitForPort(3000),
    waitForPort(7357),
  ])
  if (shellReady) {
    console.log('\n  🌐 Auto-opening shell (port 3000) and dashboard (port 7358)...\n')
    // Use platform-appropriate open command
    const openCmd = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open'
    spawn(openCmd, ['http://localhost:3000'], { shell: true, stdio: 'ignore', detached: true })
    spawn(openCmd, ['http://localhost:7358'], { shell: true, stdio: 'ignore', detached: true })
  }
})()
