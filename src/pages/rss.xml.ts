import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { profile } from '~/data/profile'

export async function GET(context: APIContext) {
  const posts = await getCollection('blog')
  return rss({
    title: `${profile.name} blog`,
    description: profile.description,
    site: context.site ?? 'https://www.fukubaka0825.dev',
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((p) => ({
        title: p.data.title,
        pubDate: p.data.date,
        link: `/${p.id}/`,
        categories: p.data.tags,
      })),
  })
}
