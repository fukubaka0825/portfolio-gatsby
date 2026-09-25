import { expect, test } from '@playwright/test'

test('skip link moves keyboard focus into the main content', async ({ page, isMobile }) => {
  test.skip(isMobile, 'keyboard flow')
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.locator(':focus')).toHaveText('本文へスキップ')
  await page.keyboard.press('Enter')
  await expect(page.locator('#main')).toBeFocused()
})

test('nav links hand focus to the section they scroll to', async ({ page, isMobile }) => {
  test.skip(isMobile, 'keyboard flow')
  await page.goto('/')
  await page.getByRole('navigation', { name: 'メイン' }).getByRole('link', { name: 'Works' }).focus()
  await page.keyboard.press('Enter')
  await expect(page.locator('#works')).toBeFocused()
})

test('zooming the trace keeps the bars inside their tracks', async ({ page }) => {
  await page.goto('/')
  const scroller = page.locator('[data-trace-scroller]')
  await scroller.scrollIntoViewIfNeeded()
  const before = await scroller.evaluate((el) => el.scrollWidth)
  await page.getByRole('button', { name: '2025年を拡大' }).click()
  await page.waitForTimeout(1300)
  // Phones drop the chart's minimum width when zoomed, so it may shrink; it must never grow into empty space.
  expect(await scroller.evaluate((el) => el.scrollWidth)).toBeLessThanOrEqual(before)
  // The long ML span starts far off the left edge when zoomed; its label must still be on screen.
  const label = page.locator('[data-bar][data-role="mg-mlops"] [data-label]')
  const track = page.locator('[data-bar][data-role="mg-mlops"]').locator('..')
  const [l, t] = await Promise.all([label.boundingBox(), track.boundingBox()])
  expect(l && t && l.x >= t.x - 1).toBe(true)
})

test('the phone trace opens on the most recent years', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'only phones scroll the trace')
  await page.goto('/')
  const left = await page.locator('[data-trace-scroller]').evaluate((el) => el.scrollLeft)
  expect(left).toBeGreaterThan(0)
})

test('writing can reveal every collected item', async ({ page }) => {
  await page.goto('/')
  const more = page.locator('[data-more]')
  test.skip(!(await more.isVisible()), 'feeds were skipped for this build')
  const shown = await page.locator('[data-item]:visible').count()
  await more.click()
  expect(await page.locator('[data-item]:visible').count()).toBeGreaterThan(shown)
  await expect(more).toBeHidden()
})

test('post pages light the Blog nav item and ship no GSAP', async ({ page }) => {
  const scripts: string[] = []
  page.on('request', (r) => r.resourceType() === 'script' && scripts.push(r.url()))
  await page.goto('/manage_eks_aws_auth_config_map_with_terraform/')
  await expect(page.locator('[data-nav-link="blog/"]')).toHaveAttribute('aria-current', 'true')
  await page.waitForLoadState('networkidle')
  expect(scripts.some((u) => u.includes('motion'))).toBe(false)
})
