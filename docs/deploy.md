# Deploy / CI

## 全体像

```
PR ──> ci.yml: biome ci → astro check → build(SKIP_FEEDS) → Playwright → Lighthouse(dist)
master push ──> deploy.yml: ci.yml を再利用 → build(フィード取得あり) → gh-pages へ publish → 本番 Lighthouse
毎日 06:17 JST ──> deploy.yml: build → 公開中の gh-pages と diff → 差分があれば publish
```

- 公開先は GitHub Pages（Settings → Pages の Source は **gh-pages ブランチ / root**。Actions 方式ではない）
- publish は `peaceiris/actions-gh-pages`（`force_orphan: true` で gh-pages は常に1コミット）
- `cname: www.fukubaka0825.dev` と `public/CNAME` の両方で CNAME を維持している

## Secrets

| 名前 | 用途 |
| --- | --- |
| `GH_TOKEN` | gh-pages への push に使う PAT（`repo` スコープ）。Gatsby 時代からの構成を踏襲 |

Gatsby 時代の `GITHUB_API_TOKEN` / `QIITA_API_TOKEN` は不要になった（消してよい）。

## 定期ビルド

外部フィードの新着を反映するため毎日ビルドする。出力が公開中のものと完全に同じなら publish しない（`diff -rq`）。
ビルド成果物は入力が同じなら決定的なので、差分が出るのは実際にフィードかコードが変わったときだけ。

## 手動デプロイ

Actions → Deploy → Run workflow（`workflow_dispatch`）。CI はスキップされ、ビルドと publish だけが走る。

## 切り分け

- **デプロイ後にカスタムドメインが外れた**: gh-pages に `CNAME` があるか確認。`public/CNAME` を消していないか
- **Writing が空になった**: Actions のログで `[feeds] skip <媒体>` を探す。レート制限などで一時的に取れないだけならビルドは成功している
- **Lighthouse が落ちた**: PR 側は `lighthouserc.json`（a11y / best-practices / SEO は error）。本番側 `lighthouserc.prod.json` は warn のみ
