# Architecture

## スタック

| 層 | 採用 | 理由 |
| --- | --- | --- |
| フレームワーク | Astro 7（`output: 'static'` 既定） | ほぼJSゼロの静的HTML。必要な箇所だけ `<script>` で演出を足せる |
| スタイル | Tailwind CSS v4（`@tailwindcss/vite`） | トークンは `src/styles/global.css` の `@theme` に集約 |
| 演出 | GSAP 3（ScrollTrigger）+ Lenis | スクロール連動と慣性スクロール。`src/scripts/` に集約 |
| 画像 | `astro:assets`（sharp） | ビルド時に WebP 化・リサイズ |
| フォント | Fontsource（自己ホスト） | 外部リクエストなし。Bricolage Grotesque Variable + Zen Kaku Gothic New |
| Lint/Format | Biome | ESLint + Prettier の置き換え |
| E2E | Playwright | `tests/` |

2026-09 に Gatsby 5 から移行した。Gatsby 時代の `schedule.yml` は gitignore 済みの `public/` を `git diff` しており、実質一度もデプロイしていなかった。

## ディレクトリ

```
src/
  assets/        画像（profile/ アバター, works/ Works のサムネ）
  components/    ページの各セクション（Hero, Career, Works, Skills, Writing, Also, Footer, Nav, PostList）
  content/blog/  このサイトに直接書くブログ記事（Markdown）
  content.config.ts  blog コレクションのスキーマ
  data/          キャリア・Works・スキルなどの本文データ（ここを編集すれば表示が変わる）
  layouts/       Base（head/SEO/JSON-LD/nav）, Page（下層ページ用の枠）
  lib/           feeds.ts（外部フィード取得）, format.ts（日付・期間）
  pages/         ルーティング
  scripts/       クライアント側の演出（motion, smooth, hero, career, works）
  styles/        global.css（デザイントークン）
public/          そのまま配信（CNAME, favicon, og.png, manifest, robots.txt）
tests/           Playwright
tools/           og.html / og.mjs（OG画像の生成）
```

## ページとURL

| URL | ファイル |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/blog/` | `src/pages/blog/index.astro` |
| `/<slug>/` | `src/pages/[slug].astro`（記事。Gatsby 時代のURLを維持するためルート直下） |
| `/tags/`, `/tags/<tag>/` | `src/pages/tags/` |
| `/rss.xml` | `src/pages/rss.xml.ts` |
| `/sitemap-index.xml` | `@astrojs/sitemap` |

## 外部フィード（Writing セクション）

`src/lib/feeds.ts` がビルド時に はてな / Medium / dev.to / note / Qiita / Speaker Deck の RSS・Atom を取得して新しい順に並べる。

- 1フィード10秒でタイムアウト。失敗したフィードは warn を出してスキップ（ビルドは落とさない）
- 同一ビルド内ではメモ化され、ネットワークは1回だけ
- `SKIP_FEEDS=1` で取得しない（PR の CI はこれ）
- 新しい媒体を足すときは `FEEDS` 配列に1行追加するだけ

新着記事は毎日の定期ビルド（[deploy.md](deploy.md)）で反映される。
