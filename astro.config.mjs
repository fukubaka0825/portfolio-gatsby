// @ts-check
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://www.fukubaka0825.dev',
  // Gatsby emitted `/slug/` directories; keep the same shape so existing links and search results don't 404.
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed', wrap: true },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
