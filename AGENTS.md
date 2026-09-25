# AGENTS.md

Takashi Narikawa (@fukubaka0825) のポートフォリオ https://www.fukubaka0825.dev のリポジトリ。
このファイルは目次。詳細は `docs/` に置き、ここには「最初に知るべきこと」だけを書く。

## 30秒で把握

- Astro 7（静的出力）+ Tailwind CSS v4 + TypeScript。演出は GSAP + Lenis。React は使っていない
- `master` へ merge すると GitHub Actions がビルドして `gh-pages` ブランチへ publish（GitHub Pages / CNAME `www.fukubaka0825.dev`）。手順は [docs/deploy.md](docs/deploy.md#本番へのリリース手順)
- 本文データは `src/data/*.ts`、ブログ記事は `src/content/blog/*.md`

## よく使うコマンド

| やりたいこと | コマンド |
| --- | --- |
| 開発サーバー | `npm run dev` |
| 本番ビルド | `npm run build`（外部フィードを取らないなら `SKIP_FEEDS=1`） |
| ビルド結果の確認 | `npm run preview` |
| lint / format | `npm run lint` / `npm run format`（Biome） |
| 型チェック | `npm run check` |
| E2E | `npm run test:e2e`（事前に `npm run build`） |
| OG画像の再生成 | `npm run og` |

PR を出す前に `npm run ci && npm run test:e2e` が通ること。見た目を変えたら QA エージェントの検証 → 本人確認用のローカルプレビュー → merge の順（[docs/testing.md](docs/testing.md)）。

## docs/

- [docs/development.md](docs/development.md) — セットアップ、lint / format / 型チェック、ローカルでの検証手順
- [docs/architecture.md](docs/architecture.md) — ディレクトリ構成、ページとURL、外部フィードの取り込み
- [docs/content.md](docs/content.md) — キャリア・Works・スキル・ブログの更新手順
- [docs/design.md](docs/design.md) — パレット、タイポグラフィ、モーションとアクセシビリティの原則
- [docs/deploy.md](docs/deploy.md) — **本番リリース手順とロールバック**、CI/CD、Secrets、定期ビルド、障害時の切り分け
- [docs/testing.md](docs/testing.md) — Playwright スモークテスト、Lighthouse、QA エージェントによる検証の進め方

## 守ること

- 既存URLを壊さない。記事は `/<slug>/`、タグは `/tags/<tag>/`（Gatsby 時代と同じ）。E2E がこれを検査している
- 副業（`lane: 'side'`）の業務内容は本人が公開してよいと言った内容だけを書く。推測で埋めない
- 演出は `prefers-reduced-motion` で止まり、JS が無くても全文が読めること
- 外部フィードの失敗でビルドを落とさない（`src/lib/feeds.ts` は失敗を握りつぶして warn する設計）
- コメントは what ではなく why を書く
