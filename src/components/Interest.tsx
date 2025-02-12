import React from 'react'

type InterestProps = {
}

const Interest: React.FC<InterestProps> = ({ }) => {

    return (
        <section id="Interest">
            <h2>Skill/Interest</h2>
            <ul >
                <li>SRE/Devops/AIOps</li>
                <li>MLOps/LLMOps/Data Engineering</li>
                <li>ML/NLP</li>
                <li>Go/Python/Shell Script</li>
                <li>Container(Docker/Kubernetes/AWS ECS)</li>
                <li>Cloud Infrastructure Design(AWS/GCP/Terraform)</li>
                <li>Application Design(OOP,DDD)</li>
                <li>Policy as Code(OPA/Rego/Conftest)</li>
            </ul>
            <h2>副業募集</h2>
            <ul>
                <li>得意分野・対応可能業務:
                    <ul>
                        <li>開発運用改善支援、非機能要件の整備・改善
                            <ul>
                                <li>フェーズ・規模・業種に応じたSRE/MLOps/LLMOpsプラクティスの選定と導入提案から実装まで
                                    <ul>
                                        <li>各社の状況に応じた信頼性とアジリティのギャップ分析、改善提案と実装支援</li>
                                        <li>モニタリング・アラート整備、可観測性向上</li>
                                        <li>インシデントレスポンス最適化</li>
                                        <li>リリースエンジニアリング最適化</li>
                                        <li>SLI/SLOの設計と導入</li>
                                        <li>オンライン/バッチアプリケーション実行基盤の最適化</li>
                                        <li>キャパシティプランニング最適化</li>
                                    </ul>
                                </li>
                                <li>LLM/AIを活用した運用業務の効率化・自動化支援（AIOps）</li>
                            </ul>
                        </li>
                        <li>クラウドインフラ開発
                            <ul>
                                <li>コスト・セキュリティ・可用性を考慮したクラウドインフラの最適化を提案から実装まで(AWS/GCP with Terraform)</li>
                            </ul>
                        </li>
                        <li>アプリケーション開発
                            <ul>
                                <li>パフォーマンス改善</li>
                                <li>ロギング、エラー修正・エラーハンドリングの改善</li>
                                <li>脆弱性対応</li>
                                <li>リファクタリング・モジュールバージョン更新</li>
                                <li>※新規大型機能開発は平日ミーティング制約により対応困難</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>コミュニケーションスタイル、稼働時間、報酬について:
                    <ul>
                        <li>基本的に非同期コミュニケーション</li>
                        <li>同期ミーティング可能時間:
                            <ul>
                                <li>月曜/木曜/金曜 17:00以降</li>
                                <li>土日祝日</li>
                                <li>その他の連絡は非同期対応</li>
                            </ul>
                        </li>
                        <li>稼働時間: 基本的に、一社あたり月60時間程度まで（例外あり）</li>
                        <li>報酬: 時間単価5,000円以上（業務内容により応相談）</li>
                        <li>アドバイザー業務について:
                            <ul>
                                <li>実装を伴う業務から開始し、プロダクトやチームへの理解を深めた後にアドバイザリー業務への移行を推奨</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>お問い合わせ:
                    <ul>
                        <li>
                            <a href="https://x.com/fukubaka0825">Twitter/X DMにてご連絡ください</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export default Interest
