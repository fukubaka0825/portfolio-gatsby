# Testing / QA

## Playwright

```sh
npm run build
npm run test:e2e             # desktop Chrome と Pixel 7 の2プロジェクト
npx playwright test --ui     # デバッグ
```

`tests/smoke.spec.ts` が見ているもの:

- トップがコンソールエラーなしで描画される
- キャリアに全ロールがあり、副業（PocketSign / CoeFont / Recho AI）が Part-time として別レーンにある
- トレースのズーム切替、ナビのセクションジャンプ
- 横スクロールが発生しない
- reduced motion でも肩書きが全文表示される
- Gatsby 時代のURL（記事・タグ・`/blog/`）が 200 を返す
- `rss.xml` / `sitemap-index.xml` / `robots.txt` / `og.png` / `CNAME` が配信される

新しいセクションや URL を足したら、ここにもテストを足す。

## Lighthouse

PR では `dist/` に対して `lighthouserc.json` の予算で実行（performance は warn、それ以外は error）。

## 見た目の確認（QA の進め方）

大きな見た目の変更は、実装者とは別のエージェント（またはレビュアー）が Playwright でスクリーンショットを撮って確認する。

- 幅: 1440 / 1280 / 820 / 390 / 360
- マウス操作中（ヒーローの筆跡、Works のプレビュー、トレースのホバー）もキャプチャする
- reduced motion、キーボード操作（Tab でフォーカスが見えるか）
- 本人確認用に `npx astro preview --port <空いているポート>` で立ち上げてから merge する
