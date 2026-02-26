const { chromium } = require('playwright')

async function run() {
  console.log('Starting Playwright...')
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()
  
  page.on('console', msg => {
    console.log(`[Browser ${msg.type()}] ${msg.text()}`)
  })
  
  page.on('pageerror', err => {
    console.error(`[Browser Error] ${err.message}`)
  })

  console.log('Navigating to http://localhost:3001...')
  
  try {
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle' })
    console.log('Page loaded successfully. Waiting 3 seconds for Federation hooks...')
    await page.waitForTimeout(3000)
    
    const shape = await page.evaluate(() => {
      const instance = window.__FEDERATION__.__INSTANCES__.find(i => i.name === 'app_a')
      return instance ? instance.options.shared.graphql[0].shareConfig : null
    })
    console.log('[Browser log] moduleInfo.shared:', shape)
  } catch (err) {
    console.error('Failed to load page:', err)
  }
  
  await browser.close()
}

run().catch(console.error)
