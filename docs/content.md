# コンテンツの更新

表示される文章はほぼすべて `src/data/` にある。コンポーネントを触らずに更新できる。

## キャリア — `src/data/career.ts`

`roles` 配列に1件足す。並び順は表示順（新しい順）。

```ts
{
  id: 'example',          // 一意。アンカー #role-example になる
  lane: 'side',           // 'main' = 本業（右レーン・黄色）, 'side' = 副業（左レーン・オレンジ）
  short: 'Example',       // トレースのバーに入る短いラベル
  title: 'MLOps Engineer',
  company: 'Example Inc.',
  url: 'https://example.com', // 任意
  start: '2025-01',       // YYYY-MM
  end: '2025-08',         // 継続中なら null
  employment: 'Part-time',
  location: 'Remote',
  highlights: [],         // 副業は本人が公開OKな内容だけ
  stack: [],
}
```

- 副業カードは、開始月を含む本業の行の左側に自動で配置される
- 重なる副業はトレースで別の行に自動で積まれる
- 期間表記（`8 mos` など）は LinkedIn と同じく開始月・終了月の両端を含めて数える
- 転職などで「現職」が変わったら、`src/data/profile.ts` の `role` と `npm run og` の再実行も忘れずに

## Works — `src/data/works.ts`

1. サムネイルを `src/assets/works/` に置く（外部CDNの直リンクは使わない。ビルド時最適化と、リンク切れ回避のため）
2. `import` して `works` 配列に追加

## スキル — `src/data/skills.ts`

グループ名と項目の配列。

## OSS・資格・学歴・言語 — `src/data/misc.ts`

## ブログ — `src/content/blog/*.md`

```md
---
title: 'タイトル'
date: '2026-10-01'
tags: ['Go']
description: '任意。無ければ本文先頭から自動生成'
---
```

ファイル名がそのまま URL（`/<ファイル名>/`）になる。公開後にファイル名を変えるとURLが変わるので注意。

## プロフィール・SEO — `src/data/profile.ts`

名前、肩書き、ヒーローの一文、SNSリンク、meta keywords。JSON-LD（Person）はここと `career.ts` から生成される。
