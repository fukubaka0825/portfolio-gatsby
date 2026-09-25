// Regenerates public/og.png from tools/og.html. Run after changing the role or name: `node tools/og.mjs`.
import { fileURLToPath } from 'node:url'
import { chromium } from '@playwright/test'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await page.goto(new URL('./og.html', import.meta.url).href)
await page.evaluate(() => document.fonts.ready)
await page.screenshot({ path: fileURLToPath(new URL('../public/og.png', import.meta.url)) })
await browser.close()
