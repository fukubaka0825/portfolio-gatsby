# Development

## セットアップ

```sh
nvm use            # .nvmrc = Node 24（Astro 7 は Node >= 22.12）
npm ci
npx playwright install chromium   # E2E を回すなら初回だけ
```

npm 11 の install-scripts 警告（esbuild / sharp など）が出るが、ビルドには影響しない。

## 日常のコマンド

| 目的 | コマンド | 備考 |
| --- | --- | --- |
| 開発サーバー | `npm run dev` | HMR あり。GSAP の演出は再読み込みで確認する |
| lint | `npm run lint` | Biome（`biome check .`）。CI は `biome ci .` |
| format + 安全な自動修正 | `npm run format` | `biome check --write .`。コミット前に1回 |
| 型チェック | `npm run check` | `astro check`（.astro / .ts 両方） |
| 本番ビルド | `npm run build` | 外部フィードを取りに行く。オフラインや高速化は `SKIP_FEEDS=1 npm run build` |
| まとめて | `npm run ci` | `biome ci` → `astro check` → `astro build`。PR 前に必ず通す |
| E2E | `npm run test:e2e` | 事前に `npm run build`。詳細は [testing.md](testing.md) |

Biome の設定は `biome.json`。`.astro` はテンプレート内で使う変数を誤検知するため、未使用変数系のルールを override で切っている。CSS は Tailwind の `@theme` / `@plugin` / `@utility` を解釈させるため `css.parser.tailwindDirectives: true`。

## ローカルでの検証

1. `npm run build`（本番と同じ成果物を作る）
2. 空いているポートを確認してからプレビューを立ち上げる

   ```sh
   lsof -iTCP:7000 -sTCP:LISTEN -n -P || echo free   # 何も出なければ空き
   npx astro preview --port 7000
   ```

   macOS は 7000 / 5000 を AirPlay Receiver が使うことがあるので、必ず空きを確認する。
3. 最低限見るところ
   - ヒーロー: 読み込み時の名前の立ち上がり、肩書きのストリーミング、マウスで筆跡が描けるか
   - キャリア: 「2025年を拡大」、バーのホバーでカードが光るか、スクロールで背骨が伸びるか
   - Works: ホバーで画像がカーソルに追従するか（デスクトップ）、サムネが出るか（モバイル）
   - DevTools で 390px 幅にして横スクロールが出ないか
   - OS の「視差効果を減らす」を ON にして、全文が静止状態で読めるか
4. 見た目を変えたら、本人確認のためにプレビューURLを共有してから merge する

## コミット

- `master` に push すると即デプロイされる。作業はブランチで行い PR を出す
- コメントは what ではなく why を書く
