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
      return window.__FEDERATION__.__INSTANCES__.map(i => {
        const info = {}
        const wrappers = i.options?.shared?.['color-name']
        if (wrappers && wrappers.length > 0) {
          info.name = i.name
          info.colorNameScopeArray = wrappers[0].scope
          info.colorNameWrapper = {
            version: wrappers[0].version,
            shareScope: wrappers[0].shareScope,
            scope: wrappers[0].scope,
            ...wrappers[0]
          }
        }
        return info
      }).filter(i => i.name)
    })
    console.log('[Browser log] moduleInfo.shared:', shape)
  } catch (err) {
    console.error('Failed to load page:', err)
  }
  
  await browser.close()
}

run().catch(console.error)
