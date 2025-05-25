import React from 'react'

type FreelanceInfoProps = {}

const FreelanceInfo: React.FC<FreelanceInfoProps> = () => {
    return (
        <section id="FreelanceInfo" className="freelance-section">
            <h2>業務委託募集</h2>
            
            <div className="expertise-section">
                <h3>得意分野・対応可能業務</h3>
                
                <div className="service-category">
                    <h4>1. SRE/MLOps/LLMOpsプラクティスの導入、改善支援</h4>
                    <div className="service-details">
                        <ul>
                            <li>信頼性とアジリティのギャップ分析、改善提案から実装まで</li>
                            <li>モニタリング・アラート整備、可観測性(o11y)向上</li>
                            <li>インシデントレスポンス最適化</li>
                            <li>リリースエンジニアリング最適化</li>
                            <li>SLI/SLOの設計と導入</li>
                            <li>オンライン/バッチアプリケーション実行基盤の最適化</li>
                            <li>キャパシティプランニング最適化</li>
                            <li>ML基盤（学習、推論）の最適化</li>
                            <li>LLMアプリケーションの評価ドリブンなリリースサイクルの実現</li>
                        </ul>
                        <p>LLM/AIを活用した運用業務の効率化・自動化支援（AIOps）も提供可能</p>
                    </div>
                </div>

                <div className="service-category">
                    <h4>2. クラウドインフラ開発</h4>
                    <p>コスト・セキュリティ・可用性を考慮したクラウドインフラの最適化を提案から実装まで(AWS/Google Cloud with Terraform)</p>
                </div>

                <div className="service-category">
                    <h4>3. アプリケーション開発</h4>
                    <ul>
                        <li>パフォーマンス改善</li>
                        <li>ロギング、エラー修正・エラーハンドリングの改善</li>
                        <li>脆弱性対応</li>
                        <li>リファクタリング</li>
                        <li>スロークエリ修正</li>
                        <li>キャッシュ戦略見直し</li>                        
                        <li>EOL対応</li>
                        <li>Rate limit設計・実装</li>
                        <li>管理画面/API開発</li>
                        <li>機能開発(注釈ご参照)</li>
                    </ul>
                    <p className="note">※新規大型機能開発は平日ミーティング制約により対応困難ですが、平日19時~24時、休日に仕様を擦り合わせられる場合は対応可能です。</p>
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
                                <li>平日 19:00以降</li>
                                <li>土日祝日</li>
                                <li>その他の連絡は非同期対応</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="work-terms">
                    <h4>稼働時間・報酬</h4>
                    <ul>
                        <li>稼働時間: 基本的に、一社あたり月50~60時間程度まで（例外あり）</li>
                        <li>報酬: 時間単価5,500円以上（業務内容により応相談）</li>
                    </ul>
                </div>

                <div className="advisory">
                    <h4>技術顧問/アドバイザリー業務について</h4>
                    <p>技術顧問としての参画依頼でも、実装を伴う業務から開始し、プロダクトやチームへの理解を深めた後にアドバイザリー業務への移行を推奨</p>
                </div>
            </div>

            <div className="contact-section">
                <h3>お問い合わせ</h3>
                <p><a href="https://x.com/fukubaka0825" className="contact-link">Twitter/X DMにてご連絡ください</a></p>
            </div>
        </section>
    )
}

export default FreelanceInfo 