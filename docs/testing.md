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

## QA の進め方

見た目や演出を変えたときは、実装者とは別のエージェント（QA エージェント）に Playwright で検証させる。実装者の「動いたつもり」を避けるため。

### 手順

1. 実装者が `npm run ci && npm run test:e2e` を通す
2. QA エージェントを起動する。渡すもの:
   - リポジトリのパスとブランチ
   - 変更の意図（何がどう動くべきか）を箇条書きで
   - 「ソースは編集しない。使い捨てスクリプトは scratchpad に置く」
   - 他と被らないプレビューポート（例 `npx astro preview --port 4400`）
3. QA エージェントが確認すること
   - スクリーンショット: 1440×900 / 1280×720 / 820×1180 / 390×844 / 360×740。撮るだけでなく実際に見る
   - 操作中のキャプチャ: マウス移動・ホバー・クリック中（筆跡の canvas に白いピクセルがあるか、Works のプレビューが出るか、トレースのハイライト）
   - GSAP の `from()` の取り残し（opacity 0 のまま残る要素）
   - 全ページのコンソールエラー、失敗したリクエスト
   - キーボード操作（Tab でフォーカスが見える、スキップリンクが効く）
   - `reducedMotion: 'reduce'` のコンテキストで内容が欠けないか
   - Lighthouse（`npx -y lighthouse@12 <url> --chrome-flags="--headless"`、`CHROME_PATH` に Playwright の Chromium を指定）か、無理なら LCP / CLS / long task を PerformanceObserver で計測
4. QA は P0（壊れている）/ P1（明らかに見える問題）/ P2（磨き込み）で、ページ・幅・再現手順・スクショのパス・直すべきファイルを添えて報告する
5. 実装者が直し、P0/P1 が無くなるまで繰り返す
6. 本人確認用に空きポートでプレビューを立ち上げ（[development.md](development.md)）、OK をもらってから merge

### 困ったとき

実装や設計で詰まったら、上位モデル（Fable 5.1）の subagent に相談する。別観点のセカンドオピニオンとして codex を使ってもよい。
