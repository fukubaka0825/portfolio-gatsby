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
            icon: "🤖",
            color: "from-purple-500 to-indigo-500"
        },
        {
            position: "Senior Software Engineer",
            department: "Site Reliability Engineering",
            company: "Match Group (eureka, Inc.)",
            companyUrl: "https://mtch.com/",
            period: "March 2022 〜 June 2022",
            location: "Tokyo, Japan",
            type: "Full-time",
            highlights: [
                "SREチームのVision・Mission・Valuesの再構築",
                "Pairs本体サーバーのAmazon ECS on FARGATEからAmazon EKS on EC2への移行",
                "kubernetesセキュリティ全体設計・gatekeeper/conftestの実装"
            ],
            technologies: ["Kubernetes", "AWS EKS", "ECS", "Terraform", "Gatekeeper", "Conftest"],
            icon: "🛡️",
            color: "from-green-500 to-emerald-500"
        },
        {
            position: "Site Reliability Engineer",
            department: "Infrastructure & Operations",
            company: "Match Group (eureka, Inc.)",
            companyUrl: "https://mtch.com/",
            period: "March 2020 〜 March 2022",
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
            icon: "⚙️",
            color: "from-blue-500 to-cyan-500"
        },
        {
            position: "Backend Engineer",
            department: "Software Development",
            company: "Wano Co.,Ltd.",
            companyUrl: "https://wano.co.jp/",
            period: "February 2019 〜 February 2020",
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
            icon: "🎵",
            color: "from-orange-500 to-red-500"
        },
        {
            position: "System Engineer",
            department: "Financial Systems",
            company: "Mizuho Information & Research Institute, Inc.",
            companyUrl: "https://www.mizuho-ir.co.jp",
            period: "April 2018 〜 January 2019",
            location: "Tokyo, Japan",
            type: "Full-time",
            highlights: [
                "国際決済基幹システム（メインフレーム）の開発",
                "Swiftシステム準拠プロジェクトのプロジェクトリーダー",
                "要件定義・基本設計",
                "定期保守（PL/I、JCL）"
            ],
            technologies: ["PL/I", "JCL", "Mainframe", "Swift", "Financial Systems"],
            icon: "🏦",
            color: "from-gray-500 to-slate-500"
        }
    ]

    return (
        <section id="Career" className="section py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="section-title text-3xl font-light text-gray-800 mb-6">
                        Career Journey
                    </h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-0.5"></div>

                    {careers.map((career, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center mb-16 ${
                                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 shadow-sm flex items-center justify-center text-sm">
                                    {career.icon}
                                </div>
                            </div>

                            {/* Content card */}
                            <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                                <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 border border-gray-100 overflow-hidden">
                                    <div className="p-6">
                                        <div className="mb-4">
                                            <div className="mb-3">
                                                <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-normal">
                                                    {career.type}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-300 mb-1">
                                                {career.position}
                                            </h3>
                                            <p className="text-gray-600 font-normal mb-2 text-sm">
                                                {career.department}
                                            </p>
                                            <a 
                                                href={career.companyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-base font-medium text-gray-800 hover:text-gray-900 transition-colors duration-300"
                                            >
                                                {career.company}
                                            </a>
                                            <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                                                <span>{career.location}</span>
                                                <span>•</span>
                                                <span>{career.period}</span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <h4 className="text-xs font-medium text-gray-600 mb-3 uppercase tracking-wider">Key Responsibilities</h4>
                                            <ul className="space-y-1">
                                                {career.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                                                    <li key={highlightIndex} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                                                        <span className="text-gray-400 mt-1">•</span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-4">
                                            <h4 className="text-xs font-medium text-gray-600 mb-2 uppercase tracking-wider">Technologies</h4>
                                            <div className="flex flex-wrap gap-1">
                                                {career.technologies.slice(0, 6).map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded font-normal"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                    </div>

                                    {/* Hover effect overlay */}
                                    <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Career