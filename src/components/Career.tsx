import React from 'react'

type CareerProps = {}

const Career: React.FC<CareerProps> = () => {
    const careers = [
        {
            position: "Senior Software Engineer",
            department: "Machine Learning/MLOps/AIOps",
            company: "Match Group (eureka, Inc.)",
            companyUrl: "https://mtch.com/",
            period: "July 2022 〜 Present",
            duration: "2.5+ years",
            location: "Tokyo, Japan",
            type: "Full-time",
            highlights: [
                "オンラインデートサービス（1500万人超、3地域）Pairs（モデレーションシステム）の運営",
                "MLシステムモニタリングの向上（モニタリング指標の再定義・実装）",
                "テキストモデレーション精度・再現率の改善",
                "テキストモデレーションMLモデル・パイプラインの再構築",
                "Langfuseを活用した評価ドリブンリリースサイクルのLLMOps基盤設計・実装",
                "Amazon Bedrockを用いた障害対応報告書・ポストモーテム文書自動作成（AIOps）"
            ],
            technologies: ["Python", "Go", "GCP", "Datadog", "Langfuse", "Amazon Bedrock", "MLOps", "LLMOps"],
            achievements: [
                "エンドポイントレイテンシp99を半分以下に削減",
                "モデレーションシステムの精度向上",
                "LLMOps基盤の設計・実装"
            ],
            icon: "🤖",
            color: "from-purple-500 to-indigo-500"
        },
        {
            position: "Senior Software Engineer",
            department: "Site Reliability Engineering",
            company: "Match Group (eureka, Inc.)",
            companyUrl: "https://mtch.com/",
            period: "March 2022 〜 June 2022",
            duration: "4 months",
            location: "Tokyo, Japan",
            type: "Full-time",
            highlights: [
                "SREチームのVision・Mission・Valuesの再構築",
                "Pairs本体サーバーのAmazon ECS on FARGATEからAmazon EKS on EC2への移行",
                "kubernetesセキュリティ全体設計・gatekeeper/conftestの実装"
            ],
            technologies: ["Kubernetes", "AWS EKS", "ECS", "Terraform", "Gatekeeper", "Conftest"],
            achievements: [
                "SREチームの組織改革",
                "クラウドネイティブへの移行",
                "セキュリティ強化"
            ],
            icon: "🛡️",
            color: "from-green-500 to-emerald-500"
        },
        {
            position: "Site Reliability Engineer",
            department: "Infrastructure & Operations",
            company: "Match Group (eureka, Inc.)",
            companyUrl: "https://mtch.com/",
            period: "March 2020 〜 March 2022",
            duration: "2 years",
            location: "Tokyo, Japan",
            type: "Full-time",
            highlights: [
                "Infra Delivery Processの置き換え（Terraform、Terraform Cloud、Github Actions）",
                "BotOps・CIOpsによるセルフサービス化",
                "ポストモーテムテンプレート・PlayBook（RunBook）の導入",
                "Pairs Engageサーバーの AWS EC2 から FARGATE への移行",
                "ユーザーメッセージデータのRDSからDynamoDBへの移行・暗号化",
                "Data Lifecycle Policy Systemの設計・実装",
                "GPUを用いた画像モデレーション・不正画像検知の導入",
                "GitOpsの導入（Argocd、Github Actions、AWS providerでのOIDC）",
                "Policy as Codeの導入によるterraformコードレビュープロセスの自動化"
            ],
            technologies: ["Go", "AWS", "Terraform", "Kubernetes", "Docker", "ArgoCD", "GitOps", "GPU"],
            achievements: [
                "インフラ運用の自動化・効率化",
                "セキュリティの向上",
                "スケーラビリティの改善"
            ],
            icon: "⚙️",
            color: "from-blue-500 to-cyan-500"
        },
        {
            position: "Backend Engineer",
            department: "Software Development",
            company: "Wano Co.,Ltd.",
            companyUrl: "https://wano.co.jp/",
            period: "February 2019 〜 February 2020",
            duration: "1 year",
            location: "Tokyo, Japan",
            type: "Full-time",
            highlights: [
                "音楽配信システム VideoKicks の開発・運用",
                "APIの開発・運用（Go、Clean Architecture）",
                "GitopsによるCDの導入・啓蒙活動",
                "IaC（AWS、Terraform）の導入・啓蒙活動",
                "ChatOps（Slack）の導入・啓蒙活動",
                "検索基盤の事前調査・設計（Elasticsearch、Kibana）",
                "Shop推薦システムの開発"
            ],
            technologies: ["Go", "Clean Architecture", "AWS", "Terraform", "Elasticsearch", "MySQL", "Redis"],
            achievements: [
                "音楽配信プラットフォームの構築",
                "DevOps文化の推進",
                "アーキテクチャの設計・実装"
            ],
            icon: "🎵",
            color: "from-orange-500 to-red-500"
        },
        {
            position: "System Engineer",
            department: "Financial Systems",
            company: "Mizuho Information & Research Institute, Inc.",
            companyUrl: "https://www.mizuho-ir.co.jp",
            period: "April 2018 〜 January 2019",
            duration: "10 months",
            location: "Tokyo, Japan",
            type: "Full-time",
            highlights: [
                "国際決済基幹システム（メインフレーム）の開発",
                "Swiftシステム準拠プロジェクトのプロジェクトリーダー",
                "要件定義・基本設計",
                "定期保守（PL/I、JCL）"
            ],
            technologies: ["PL/I", "JCL", "Mainframe", "Swift", "Financial Systems"],
            achievements: [
                "大規模金融システムの設計",
                "プロジェクトリーダーシップ",
                "レガシーシステムの保守"
            ],
            icon: "🏦",
            color: "from-gray-500 to-slate-500"
        }
    ]

    return (
        <section id="Career" className="section py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="section-title text-5xl font-bold text-gray-900 mb-6">
                        Career <span className="text-gradient bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
                    </h2>
                    <p className="section-subtitle text-xl text-gray-600 max-w-3xl mx-auto">
                        金融システムからスタートアップ、グローバル企業まで。多様な環境での成長とテクノロジーへの貢献
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600 transform md:-translate-x-0.5"></div>

                    {careers.map((career, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center mb-16 ${
                                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${career.color} shadow-lg flex items-center justify-center text-2xl border-4 border-white`}>
                                    {career.icon}
                                </div>
                            </div>

                            {/* Content card */}
                            <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                                <div className="group bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                                    <div className="p-8">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className={`px-3 py-1 rounded-full text-white text-xs font-medium bg-gradient-to-r ${career.color}`}>
                                                        {career.type}
                                                    </span>
                                                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                                                        {career.duration}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 mb-1">
                                                    {career.position}
                                                </h3>
                                                <p className="text-primary-600 font-semibold mb-2">
                                                    {career.department}
                                                </p>
                                                <a 
                                                    href={career.companyUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-lg font-semibold text-gray-800 hover:text-primary-600 transition-colors duration-200"
                                                >
                                                    {career.company}
                                                </a>
                                                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                                                    <span>📍 {career.location}</span>
                                                    <span>📅 {career.period}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Responsibilities</h4>
                                            <ul className="space-y-2">
                                                {career.highlights.slice(0, 4).map((highlight, highlightIndex) => (
                                                    <li key={highlightIndex} className="flex items-start gap-2 text-sm text-gray-600">
                                                        <span className="text-primary-500 mt-1">•</span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {career.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Achievements</h4>
                                            <div className="space-y-2">
                                                {career.achievements.map((achievement, achievementIndex) => (
                                                    <div key={achievementIndex} className="flex items-center gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                        <span className="text-sm text-gray-600">{achievement}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover effect overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Career Summary */}
                <div className="mt-20">
                    <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8 border border-primary-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            Career Highlights
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-primary-600">6+</div>
                                <div className="text-sm text-gray-600">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600">5</div>
                                <div className="text-sm text-gray-600">Companies</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600">15M+</div>
                                <div className="text-sm text-gray-600">Users Served</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600">3</div>
                                <div className="text-sm text-gray-600">Countries</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Career