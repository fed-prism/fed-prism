#!/usr/bin/env node
/**
 * Copies the @fed-prism/ui build output into @fed-prism/server/public
 * so `fed-prism start` can serve the dashboard as static files.
 *
 * Run: node scripts/copyUi.mjs
 * Or via: pnpm --filter fed-prism copyUi
 */

import { cpSync, mkdirSync, existsSync, rmSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const uiDist = join(root, '..', 'ui', 'dist')
const serverPublic = join(root, '..', 'server', 'public')

if (!existsSync(uiDist)) {
  console.error(`❌ UI dist not found at: ${uiDist}`)
  console.error('   Run: pnpm --filter @fed-prism/ui build')
  process.exit(1)
}

// Remove stale public dir then copy fresh
if (existsSync(serverPublic)) {
  rmSync(serverPublic, { recursive: true })
}
mkdirSync(serverPublic, { recursive: true })
cpSync(uiDist, serverPublic, { recursive: true })

console.log(`✅ Copied UI dist → server/public`)
console.log(`   ${uiDist}`)
console.log(`   → ${serverPublic}`)
