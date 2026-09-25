import { XMLParser } from 'fast-xml-parser'

export type FeedSource = 'Hatena' | 'Medium' | 'dev.to' | 'Qiita' | 'Speaker Deck'

export type FeedItem = { title: string; url: string; date: string; source: FeedSource }

const FEEDS: { source: FeedSource; url: string; home: string }[] = [
  {
    source: 'Hatena',
    url: 'https://fukubaka0825.hatenablog.com/rss',
    home: 'https://fukubaka0825.hatenablog.com/',
  },
  {
    source: 'Medium',
    url: 'https://medium.com/feed/@fukubaka0825',
    home: 'https://medium.com/@fukubaka0825',
  },
  { source: 'dev.to', url: 'https://dev.to/feed/fukubaka0825', home: 'https://dev.to/fukubaka0825' },
  { source: 'Qiita', url: 'https://qiita.com/fukubaka0825/feed', home: 'https://qiita.com/fukubaka0825' },
  {
    source: 'Speaker Deck',
    url: 'https://speakerdeck.com/fukubaka0825.atom',
    home: 'https://speakerdeck.com/fukubaka0825',
  },
]

export const feedHomes = Object.fromEntries(FEEDS.map((f) => [f.source, f.home])) as Record<
  FeedSource,
  string
>

const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' })

type Node = Record<string, unknown>
const asArray = <T>(v: T | T[] | undefined): T[] => (v === undefined ? [] : Array.isArray(v) ? v : [v])
const text = (v: unknown): string =>
  typeof v === 'string' ? v : v && typeof v === 'object' && '#text' in v ? String((v as Node)['#text']) : ''

const parse = (xml: string, source: FeedSource): FeedItem[] => {
  const doc = parser.parse(xml) as Node
  const rss = (doc.rss as Node | undefined)?.channel as Node | undefined
  if (rss) {
    return asArray(rss.item as Node | Node[]).map((i) => ({
      title: text(i.title),
      url: text(i.link),
      date: new Date(text(i.pubDate)).toISOString(),
      source,
    }))
  }
  const feed = doc.feed as Node | undefined
  return asArray(feed?.entry as Node | Node[]).map((e) => {
    const links = asArray(e.link as Node | Node[])
    const href = links.find((l) => !l.rel || l.rel === 'alternate')?.href ?? links[0]?.href
    return {
      title: text(e.title),
      url: String(href ?? ''),
      date: new Date(text(e.published) || text(e.updated)).toISOString(),
      source,
    }
  })
}

const fetchOne = async (f: (typeof FEEDS)[number]): Promise<FeedItem[]> => {
  try {
    const res = await fetch(f.url, {
      headers: { 'user-agent': 'fukubaka0825.dev build (+https://www.fukubaka0825.dev)' },
      signal: AbortSignal.timeout(10_000),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return parse(await res.text(), f.source).filter(
      (i) => i.title && i.url && !Number.isNaN(Date.parse(i.date)),
    )
  } catch (err) {
    // A flaky third-party feed (Qiita rate limits, Medium 403s) must never break a deploy; the section just shrinks.
    console.warn(`[feeds] skip ${f.source}: ${(err as Error).message}`)
    return []
  }
}

let cache: Promise<FeedItem[]> | undefined

/** Memoised so every page that renders the writing list shares one round of network calls per build. */
export const getFeedItems = (): Promise<FeedItem[]> => {
  if (process.env.SKIP_FEEDS === '1') return Promise.resolve([])
  cache ??= Promise.all(FEEDS.map(fetchOne)).then((all) =>
    all.flat().sort((a, b) => b.date.localeCompare(a.date)),
  )
  return cache
}
