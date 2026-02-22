#!/usr/bin/env node
import { program } from 'commander'
import { createServer } from '@fed-prism/server'
import { FEDPRISM_DEFAULT_PORT, FEDPRISM_VERSION } from '@fed-prism/core'
import { existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

program
  .name('fed-prism')
  .description('FedPrism — Module Federation 2.0 runtime inspector')
  .version(FEDPRISM_VERSION)

program
  .command('start')
  .description('Start the FedPrism dashboard server')
  .option('-p, --port <number>', 'Port to run the server on', String(FEDPRISM_DEFAULT_PORT))
  .option('--no-open', 'Do not auto-open the browser')
  .action(async (options: { port: string; open: boolean }) => {
    const port = parseInt(options.port, 10)

    // Detect whether the embedded UI build is present
    const serverPublic = join(__dirname, '..', '..', 'server', 'dist', '..', '..', 'server', 'public')
    const embeddedUi = join(__dirname, '..', '..', 'server', 'public')
    const hasEmbeddedUi = existsSync(embeddedUi)

    console.info(`\n  🔮 FedPrism v${FEDPRISM_VERSION}\n`)

    const server = await createServer({ port })
    const address = await server.start()

    console.info(`  ✅ Server:      ${address}`)
    console.info(`  🔌 WebSocket:   ws://localhost:${port}/ws`)

    if (hasEmbeddedUi) {
      console.info(`  🖥️  Dashboard:   ${address}`)
    } else {
      console.info(`  🖥️  Dashboard:   not bundled — run the UI dev server separately:`)
      console.info(`                  pnpm --filter @fed-prism/ui dev  (http://localhost:7358)`)
      console.info(`                  or: pnpm --filter fed-prism copyUi (embed the built UI)`)
    }

    console.info(`\n  Add @fed-prism/runtime-plugin to your MF 2.0 apps to start streaming data.\n`)

    if (options.open) {
      const openUrl = hasEmbeddedUi ? address : 'http://localhost:7358'
      const { default: open } = await import('open')
      await open(openUrl)
    }

    // Keep alive — handle Ctrl+C gracefully
    process.on('SIGINT', async () => {
      console.info('\n  Shutting down FedPrism...')
      await server.stop()
      process.exit(0)
    })
  })

program
  .command('copy-ui')
  .description('Copy the @fed-prism/ui build into @fed-prism/server/public for embedded serving')
  .action(async () => {
    const { cpSync, mkdirSync, existsSync: fsExists, rmSync } = await import('fs')
    const uiDist = join(__dirname, '..', '..', 'ui', 'dist')
    const serverPublic = join(__dirname, '..', '..', 'server', 'public')

    if (!fsExists(uiDist)) {
      console.error(`❌ UI dist not found at: ${uiDist}`)
      console.error('   Run: pnpm --filter @fed-prism/ui build')
      process.exit(1)
    }

    if (fsExists(serverPublic)) rmSync(serverPublic, { recursive: true })
    mkdirSync(serverPublic, { recursive: true })
    cpSync(uiDist, serverPublic, { recursive: true })
    console.info(`✅ Copied @fed-prism/ui/dist → @fed-prism/server/public`)
  })

program.parse()
