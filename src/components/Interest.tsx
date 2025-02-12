import React from 'react'

type InterestProps = {}

const Interest: React.FC<InterestProps> = () => {
    return (
        <section className="content-area">
            <h2 className="section-header">Skill/Interest</h2>
            <div className="skill-interest-section">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="skill-box">SRE/Devops/AIOps</div>
                    <div className="skill-box">MLOps/LLMOps/Data Engineering</div>
                    <div className="skill-box">ML/NLP</div>
                    <div className="skill-box">Go/Python/Shell Script</div>
                    <div className="skill-box">Container(Docker/Kubernetes/AWS ECS)</div>
                    <div className="skill-box">Cloud Infrastructure Design(AWS/GCP/Terraform)</div>
                    <div className="skill-box">Application Design(OOP,DDD)</div>
                    <div className="skill-box">Policy as Code(OPA/Rego/Conftest)</div>
                </div>
            </div>

            <div className="freelance-section">
                <h2>副業募集</h2>
                
                <div className="expertise-section">
                    <h3>得意分野・対応可能業務</h3>
                    
                    <div className="service-category">
                        <h4>1. SRE/MLOps/LLMOpsプラクティスの導入、改善支援</h4>
                        <div className="service-details">
                            <ul>
                                <li>信頼性とアジリティのギャップ分析、改善提案と実装支援</li>
                                <li>モニタリング・アラート整備、可観測性向上</li>
                                <li>インシデントレスポンス最適化</li>
                                <li>リリースエンジニアリング最適化</li>
                                <li>SLI/SLOの設計と導入</li>
                                <li>オンライン/バッチアプリケーション実行基盤の最適化</li>
                                <li>キャパシティプランニング最適化</li>
                            </ul>
                            <p>LLM/AIを活用した運用業務の効率化・自動化支援（AIOps）も提供可能</p>
                        </div>
                    </div>

                    <div className="service-category">
                        <h4>2. クラウドインフラ開発</h4>
                        <p>コスト・セキュリティ・可用性を考慮したクラウドインフラの最適化を提案から実装まで(AWS/GCP with Terraform)</p>
                    </div>

                    <div className="service-category">
                        <h4>3. アプリケーション開発</h4>
                        <ul>
                            <li>パフォーマンス改善</li>
                            <li>ロギング、エラー修正・エラーハンドリングの改善</li>
                            <li>脆弱性対応</li>
                            <li>リファクタリング・モジュールバージョン更新</li>
                        </ul>
                        <p className="note">※新規大型機能開発は平日ミーティング制約により対応困難</p>
                    </div>
                </div>

                <div className="terms-section">
                    <h3>稼働条件</h3>
                    <div className="communication">
                        <h4>コミュニケーションスタイル</h4>
                        <ul>
                            <li>基本: 非同期コミュニケーション</li>
                            <li>同期ミーティング可能時間:
                                <ul>
                                    <li>月曜/木曜/金曜 17:00以降</li>
                                    <li>土日祝日</li>
                                    <li>その他の連絡は非同期対応</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="work-terms">
                        <h4>稼働時間・報酬</h4>
                        <ul>
                            <li>稼働時間: 基本的に、一社あたり月60時間程度まで（例外あり）</li>
                            <li>報酬: 時間単価5,000円以上（業務内容により応相談）</li>
                        </ul>
                    </div>

                    <div className="advisory">
                        <h4>アドバイザー業務について</h4>
                        <p>実装を伴う業務から開始し、プロダクトやチームへの理解を深めた後にアドバイザリー業務への移行を推奨</p>
                    </div>
                </div>

                <div className="contact-section">
                    <h3>お問い合わせ</h3>
                    <p><a href="https://x.com/fukubaka0825" className="contact-link">Twitter/X DMにてご連絡ください</a></p>
                </div>
            </div>
        </section>
    )
}

export default Interest
