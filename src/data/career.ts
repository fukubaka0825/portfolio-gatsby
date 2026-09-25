/**
 * Months are `YYYY-MM`. `end: null` means ongoing.
 * `lane` drives the trace view: main = full-time, side = part-time / 副業.
 * Side roles intentionally carry no highlights until there is something public to say about them.
 */
export type Role = {
  id: string
  lane: 'main' | 'side'
  /** Label that fits inside a trace bar. */
  short: string
  title: string
  team?: string
  company: string
  url?: string
  start: string
  end: string | null
  employment: 'Full-time' | 'Part-time'
  location: string
  highlights: string[]
  stack: string[]
}

export const roles: Role[] = [
  {
    id: 'mg-llm-platform',
    short: 'LLM Platform',
    lane: 'main',
    title: 'Senior Software Engineer, LLM Platform & Enablement',
    team: 'GenAI Platform / Company-wide AI Enablement',
    company: 'Match Group (eureka, Inc.)',
    url: 'https://mtch.com/',
    start: '2026-03',
    end: null,
    employment: 'Full-time',
    location: 'Tokyo',
    highlights: [
      '全社向けGenAIプラットフォームと開発者向けツールの設計・運用',
      '従業員全体がAIを業務に取り入れやすくするためのベストプラクティス整備、ワークフロー設計、導入支援',
      '組織横断のハンズオン支援を通じた、全社でのAI活用の定着と業務生産性向上の推進',
    ],
    stack: ['AWS', 'Google Cloud', 'Langfuse', 'Python', 'TypeScript'],
  },
  {
    id: 'mg-mlops',
    short: 'ML / MLOps / AIOps',
    lane: 'main',
    title: 'Senior Software Engineer',
    team: 'Machine Learning / MLOps / AIOps',
    company: 'Match Group (eureka, Inc.)',
    url: 'https://mtch.com/',
    start: '2022-07',
    end: '2026-02',
    employment: 'Full-time',
    location: 'Tokyo',
    highlights: [
      'Pairs（1500万人超・3地域）のモデレーションシステムの運営',
      'MLシステムのモニタリング指標の再定義と実装',
      'テキストモデレーションの精度・再現率改善と、MLモデル・パイプラインの再構築',
      'Langfuseを中心にした評価ドリブンなリリースサイクルのLLMOps基盤を設計・実装',
      'Amazon Bedrockで障害対応報告書・ポストモーテムを自動作成するAIOpsツールを導入',
    ],
    stack: ['Python', 'Go', 'Google Cloud', 'Datadog', 'Langfuse', 'Amazon Bedrock'],
  },
  {
    id: 'pocketsign',
    short: 'PocketSign',
    lane: 'side',
    title: 'Site Reliability Engineer',
    company: 'PocketSign Inc.',
    start: '2025-03',
    end: '2025-08',
    employment: 'Part-time',
    location: 'Remote',
    highlights: [],
    stack: [],
  },
  {
    id: 'recho',
    short: 'Recho AI',
    lane: 'side',
    title: 'MLOps Engineer',
    company: 'Recho AI',
    start: '2025-05',
    end: '2025-07',
    employment: 'Part-time',
    location: 'Remote',
    highlights: [],
    stack: [],
  },
  {
    id: 'coefont',
    short: 'CoeFont',
    lane: 'side',
    title: 'MLOps Engineer',
    company: 'CoeFont',
    start: '2025-01',
    end: '2025-08',
    employment: 'Part-time',
    location: 'Remote',
    highlights: [],
    stack: [],
  },
  {
    id: 'mg-sre-senior',
    short: 'Senior SRE',
    lane: 'main',
    title: 'Senior Software Engineer',
    team: 'Site Reliability Engineering',
    company: 'Match Group (eureka, Inc.)',
    url: 'https://mtch.com/',
    start: '2022-03',
    end: '2022-06',
    employment: 'Full-time',
    location: 'Tokyo',
    highlights: [
      'SREチームのVision・Mission・Valuesを再構築',
      'Pairs本体サーバーをAmazon ECS on FargateからAmazon EKS on EC2へ移行',
      'Kubernetesセキュリティの全体設計とGatekeeper / Conftestの実装',
    ],
    stack: ['Kubernetes', 'Amazon EKS', 'Terraform', 'Gatekeeper', 'Conftest'],
  },
  {
    id: 'mg-sre',
    short: 'SRE',
    lane: 'main',
    title: 'Site Reliability Engineer',
    team: 'Infrastructure & Operations',
    company: 'Match Group (eureka, Inc.)',
    url: 'https://mtch.com/',
    start: '2020-03',
    end: '2022-02',
    employment: 'Full-time',
    location: 'Tokyo',
    highlights: [
      'Terraform Cloud と GitHub Actions でインフラのデリバリープロセスを置き換え',
      'BotOps・CIOpsによる運用のセルフサービス化',
      'ユーザーメッセージデータをRDSからDynamoDBへ移行し暗号化',
      'GPUを用いた画像モデレーション・不正画像検知の導入',
      'Argo CDとOIDCでGitOpsを導入、Policy as CodeでTerraformのレビューを自動化',
    ],
    stack: ['Go', 'AWS', 'Terraform', 'Kubernetes', 'Argo CD', 'OPA'],
  },
  {
    id: 'wano',
    short: 'Wano',
    lane: 'main',
    title: 'Backend Engineer',
    company: 'Wano Co., Ltd.',
    url: 'https://wano.co.jp/',
    start: '2019-02',
    end: '2020-02',
    employment: 'Full-time',
    location: 'Tokyo',
    highlights: [
      '音楽配信システム VideoKicks のAPIを Go と Clean Architecture で開発・運用',
      'GitOpsによるCD、Terraformによる IaC、Slack ChatOps を導入し社内に広めた',
      'Elasticsearchによる検索基盤の調査・設計と、ショップ推薦システムの開発',
    ],
    stack: ['Go', 'AWS', 'Terraform', 'Elasticsearch', 'MySQL', 'Redis'],
  },
  {
    id: 'mizuho',
    short: 'Mizuho',
    lane: 'main',
    title: 'System Engineer',
    company: 'Mizuho Information & Research Institute',
    url: 'https://www.mizuho-rt.co.jp/',
    start: '2018-04',
    end: '2019-01',
    employment: 'Full-time',
    location: 'Tokyo',
    highlights: [
      '国際決済基幹システム（メインフレーム）の開発',
      'SWIFT準拠プロジェクトのプロジェクトリーダーとして要件定義・基本設計を担当',
    ],
    stack: ['PL/I', 'JCL', 'Mainframe'],
  },
]

export const CAREER_START = '2018-04'
