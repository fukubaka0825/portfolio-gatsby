# Deploy / CI

## 本番へのリリース手順

`master` に入ったものがそのまま https://www.fukubaka0825.dev に出る。直接 push はせず、必ず PR を経由する。

1. ブランチを切って実装する（`git switch -c feat/xxx`）
2. `npm run ci && npm run test:e2e` を通す（[development.md](development.md)）
3. 見た目を変えたら QA エージェントで検証し、P0/P1 を潰す（[testing.md](testing.md)）
4. 空きポートでプレビューを立ち上げて本人に確認してもらう（`npx astro preview --port <空きポート>`）
5. push して PR を作る

   ```sh
   git push -u origin feat/xxx
   gh pr create --fill
   ```

6. PR の CI（`ci.yml`: lint / 型 / build / Playwright / Lighthouse）が緑になるのを待つ

   ```sh
   gh pr checks --watch
   ```

7. merge する（`gh pr merge --squash --delete-branch`）。これで `deploy.yml` が走る
8. デプロイを見届ける

   ```sh
   gh run watch "$(gh run list --workflow=deploy.yml --limit 1 --json databaseId --jq '.[0].databaseId')"
   ```

   `deploy` ジョブが gh-pages に publish した後、GitHub Pages の反映に1〜2分かかる
9. 本番を確認する
   - https://www.fukubaka0825.dev/ をハードリロード（CDN キャッシュは最大10分程度残ることがある）
   - `curl -sI https://www.fukubaka0825.dev/ | head -1` が 200
   - 本番に対して E2E を流す: `PLAYWRIGHT_BASE_URL=https://www.fukubaka0825.dev npx playwright test`（ローカルサーバーは起動しない）
   - `lighthouse-prod` ジョブの結果（Actions の artifact / 一時公開URL）を見る

### ロールバック

gh-pages は `force_orphan` で履歴を持たないので、**master 側を戻して再デプロイ**する。

```sh
git revert <問題のコミット>   # もしくは revert PR を作って merge
git push origin master        # PR 経由が原則。緊急時のみ
```

緊急でコードを触らず直前の状態に戻したいときは、Actions → Deploy → Run workflow を、戻したいコミットのブランチ/タグを指定して実行する。


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

不要。gh-pages への push は Actions が自動発行する `GITHUB_TOKEN`（deploy ジョブに `contents: write`）で行う。

以前は PAT の `GH_TOKEN` を使っていたが、2026-09 に失効していて publish が認証エラー（`Invalid username or token`）になったため切り替えた。`GH_TOKEN` / `GITHUB_API_TOKEN` / `QIITA_API_TOKEN` / `RSS2JSON_API_TOKEN` はもう使っていない（消してよい）。

## 定期ビルド

外部フィードの新着を反映するため毎日ビルドする。出力が公開中のものと完全に同じなら publish しない（`diff -rq`）。
ビルド成果物は入力が同じなら決定的なので、差分が出るのは実際にフィードかコードが変わったときだけ。

## 手動デプロイ

Actions → Deploy → Run workflow（`workflow_dispatch`）。CI はスキップされ、ビルドと publish だけが走る。

## 切り分け

- **publish が `Authentication failed` で落ちる**: deploy ジョブの `permissions: contents: write` が消えていないか、リポジトリの Settings → Actions → Workflow permissions で書き込みが禁止されていないか
- **デプロイ後にカスタムドメインが外れた**: gh-pages に `CNAME` があるか確認。`public/CNAME` を消していないか
- **Writing が空になった**: Actions のログで `[feeds] skip <媒体>` を探す。レート制限などで一時的に取れないだけならビルドは成功している
- **Lighthouse が落ちた**: PR 側は `lighthouserc.json`（a11y / best-practices / SEO は error）。本番側 `lighthouserc.prod.json` は warn のみ
