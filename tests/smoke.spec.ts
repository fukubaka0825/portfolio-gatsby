import { expect, test } from '@playwright/test'

test.describe('home', () => {
  test('renders without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1, name: 'Takashi Narikawa' })).toBeVisible()
    await page.waitForTimeout(500)
    expect(errors).toEqual([])
  })

  test('career shows every role, with side roles in their own lane', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('[data-role-card]')).toHaveCount(9)
    for (const company of ['PocketSign Inc.', 'CoeFont', 'Recho AI']) {
      const card = page.locator('[data-role-card]', { hasText: company })
      await expect(card).toHaveCount(1)
      await expect(card).toContainText('Part-time')
    }
    await expect(page.locator('[data-bar][data-spill]')).toHaveCount(3)
  })

  test('trace zoom toggles', async ({ page }) => {
    await page.goto('/')
    const zoom = page.getByRole('button', { name: '2025年を拡大' })
    await zoom.scrollIntoViewIfNeeded()
    await zoom.click()
    await expect(zoom).toHaveAttribute('aria-pressed', 'true')
    await expect(page.getByRole('button', { name: '全期間' })).toHaveAttribute('aria-pressed', 'false')
  })

  test('nav jumps to sections', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('navigation', { name: 'メイン' }).getByRole('link', { name: 'Works' }).click()
    await expect(page).toHaveURL(/#works$/)
    await expect(page.locator('#works')).toBeInViewport()
  })

  test('content is complete with reduced motion', async ({ browser }) => {
    const ctx = await browser.newContext({ reducedMotion: 'reduce' })
    const page = await ctx.newPage()
    await page.goto('/')
    await expect(page.locator('[data-stream]')).toHaveText(
      'Senior Software Engineer, LLM Platform & Enablement',
    )
    await ctx.close()
  })
})

test.describe('legacy URLs from the Gatsby site', () => {
  for (const path of [
    '/blog/',
    '/how_to_resolve_the_trouble_occurred_when_i_install_go_into_the_alpine_image/',
    '/manage_eks_aws_auth_config_map_with_terraform/',
    '/tags/',
    '/tags/Go/',
    '/tags/Kubernetes/',
  ]) {
    test(`${path} responds`, async ({ page }) => {
      const res = await page.goto(path)
      expect(res?.status()).toBe(200)
      await expect(page.locator('h1')).toBeVisible()
    })
  }
})

// Compare against visualViewport: on mobile an oversized child widens the layout viewport, so innerWidth grows too.
for (const path of [
  '/',
  '/blog/',
  '/how_to_resolve_the_trouble_occurred_when_i_install_go_into_the_alpine_image/',
  '/manage_eks_aws_auth_config_map_with_terraform/',
]) {
  test(`${path} never scrolls horizontally`, async ({ page }) => {
    await page.goto(path)
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - (window.visualViewport?.width ?? window.innerWidth),
    )
    expect(overflow).toBeLessThanOrEqual(1)
  })
}

test('feeds and seo endpoints exist', async ({ request }) => {
  for (const path of ['/rss.xml', '/sitemap-index.xml', '/robots.txt', '/og.png', '/CNAME']) {
    expect((await request.get(path)).status(), path).toBe(200)
  }
  expect(await (await request.get('/CNAME')).text()).toContain('www.fukubaka0825.dev')
})
