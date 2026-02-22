#!/usr/bin/env node
import { program } from 'commander'
import { createServer } from '@fed-prism/server'
import { FEDPRISM_DEFAULT_PORT, FEDPRISM_VERSION } from '@fed-prism/core'

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
    console.info(`\n  🔮 FedPrism v${FEDPRISM_VERSION}\n`)

    const server = await createServer({ port })
    const address = await server.start()

    console.info(`  ✅ Dashboard:   ${address}`)
    console.info(`  🔌 WebSocket:   ws://localhost:${port}/ws`)
    console.info(`\n  Add @fed-prism/runtime-plugin to your MF 2.0 config to begin.\n`)

    if (options.open) {
      const { default: open } = await import('open')
      await open(address)
    }

    // Keep alive
    process.on('SIGINT', async () => {
      console.info('\n  Shutting down FedPrism...')
      await server.stop()
      process.exit(0)
    })
  })

program.parse()
