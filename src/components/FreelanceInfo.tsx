import React from 'react'

type FreelanceInfoProps = {}

const FreelanceInfo: React.FC<FreelanceInfoProps> = () => {
    return (
        <section className="section scroll-mt-header" id="FreelanceInfo">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="section-title">業務委託募集</h2>
                    <p className="section-subtitle">
                        SRE/MLOps/クラウドインフラ/アプリ開発領域での業務委託をお受けしています
                    </p>
                </div>

                {/* Expertise Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">得意分野・対応可能業務</h3>
                    
                    <div className="grid gap-8 md:gap-12">
                        {/* SRE/MLOps/LLMOps */}
                        <div className="freelance-card">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                    <span className="text-primary-600 font-bold text-sm">1</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                        SRE/MLOps/LLMOpsプラクティスの導入、改善支援
                                    </h4>
                                    <div className="space-y-3">
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                信頼性とアジリティのギャップ分析、改善提案から実装まで
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                モニタリング・アラート整備、可観測性(o11y)向上
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                インシデントレスポンス最適化
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                リリースエンジニアリング最適化
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                SLI/SLOの設計と導入
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                オンライン/バッチアプリケーション実行基盤の最適化
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                キャパシティプランニング最適化
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                ML基盤（学習、推論）の最適化
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                LLMアプリケーションの評価ドリブンなリリースサイクルの実現
                                            </li>
                                        </ul>
                                        <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mt-4">
                                            <p className="text-primary-800 text-sm">
                                                <strong>💡 特徴:</strong> LLM/AIを活用した運用業務の効率化・自動化支援（AIOps）も提供可能
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cloud Infrastructure */}
                        <div className="freelance-card">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                    <span className="text-primary-600 font-bold text-sm">2</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                        クラウドインフラ開発
                                    </h4>
                                    <p className="text-gray-700">
                                        コスト・セキュリティ・可用性を考慮したクラウドインフラの最適化を提案から実装まで
                                        <span className="inline-flex items-center gap-1 ml-2 px-2 py-1 bg-gray-100 rounded text-xs font-medium">
                                            AWS/Google Cloud with Terraform
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Application Development */}
                        <div className="freelance-card">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                    <span className="text-primary-600 font-bold text-sm">3</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                        アプリケーション開発
                                    </h4>
                                    <div className="space-y-3">
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                パフォーマンス改善
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                ロギング、エラー修正・エラーハンドリングの改善
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                脆弱性対応
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                リファクタリング
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                スロークエリ修正
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                キャッシュ戦略見直し
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                EOL対応
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                Rate limit設計・実装
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                管理画面/API開発
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                                機能開発(注釈ご参照)
                                            </li>
                                        </ul>
                                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                                            <p className="text-amber-800 text-sm">
                                                <strong>⚠️ 注意:</strong> 新規大型機能開発は平日ミーティング制約により対応困難ですが、平日19時~24時、休日に仕様を擦り合わせられる場合は対応可能です。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Terms Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">稼働条件</h3>
                    
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Communication */}
                        <div className="freelance-card">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">コミュニケーションスタイル</h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                                    <span className="text-gray-700">基本: 非同期コミュニケーション</span>
                                </div>
                                <div>
                                    <div className="flex items-start gap-3 mb-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                                        <span className="text-gray-700 font-medium">同期ミーティング可能時間:</span>
                                    </div>
                                    <ul className="ml-5 space-y-1 text-gray-600 text-sm">
                                        <li>• 平日 19:00以降</li>
                                        <li>• 土日祝日</li>
                                        <li>• その他の連絡は非同期対応</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Work Terms */}
                        <div className="freelance-card">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">稼働時間・報酬</h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2"></span>
                                    <div>
                                        <span className="text-gray-700 font-medium">稼働時間:</span>
                                        <p className="text-gray-600 text-sm mt-1">基本的に、一社あたり月50~60時間程度まで（例外あり）</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                                    <div>
                                        <span className="text-gray-700 font-medium">報酬:</span>
                                        <p className="text-gray-600 text-sm mt-1">時間単価5,500円以上（業務内容により応相談）</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Advisory */}
                        <div className="freelance-card md:col-span-2 lg:col-span-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">技術顧問/アドバイザリー業務について</h4>
                            <p className="text-gray-700 text-sm">
                                技術顧問としての参画依頼でも、実装を伴う業務から開始し、プロダクトやチームへの理解を深めた後にアドバイザリー業務への移行を推奨
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせ</h3>
                    <div className="inline-block">
                        <a 
                            href="https://x.com/fukubaka0825" 
                            className="btn btn-primary group inline-flex items-center gap-3"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                            Twitter/X DMにてご連絡ください
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FreelanceInfo 