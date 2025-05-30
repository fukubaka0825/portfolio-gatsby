import React from 'react'

type LanguageProps = {}

const Language: React.FC<LanguageProps> = () => {
    const languages = [
        {
            name: "Japanese",
            level: "Native",
            proficiency: 100,
            description: "母語として完全にマスター",
            flag: "🇯🇵",
            certifications: [],
            color: "from-red-500 to-red-600"
        },
        {
            name: "English",
            level: "Business",
            proficiency: 75,
            description: "ビジネスレベルでの円滑なコミュニケーション",
            flag: "🇺🇸",
            certifications: ["TOEIC", "Business Communications"],
            color: "from-blue-500 to-blue-600"
        }
    ]

    const getLevelColor = (level: string) => {
        const colors = {
            "Native": "bg-gradient-to-r from-emerald-500 to-emerald-600",
            "Business": "bg-gradient-to-r from-blue-500 to-blue-600",
            "Conversational": "bg-gradient-to-r from-yellow-500 to-yellow-600",
            "Basic": "bg-gradient-to-r from-gray-500 to-gray-600"
        }
        return colors[level as keyof typeof colors] || "bg-gradient-to-r from-gray-500 to-gray-600"
    }

    const getLevelBadgeText = (level: string) => {
        const badges = {
            "Native": "ネイティブ",
            "Business": "ビジネス",
            "Conversational": "日常会話",
            "Basic": "基礎"
        }
        return badges[level as keyof typeof badges] || level
    }

    return (
        <section id="Language" className="section py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="section-title text-5xl font-bold text-gray-900 mb-6">
                        Language <span className="text-gradient bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
                    </h2>
                    <p className="section-subtitle text-xl text-gray-600 max-w-3xl mx-auto">
                        グローバル環境でのコミュニケーション能力とクロスカルチャーでの協働経験
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {languages.map((language, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100"
                        >
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="text-5xl">{language.flag}</div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                                                {language.name}
                                            </h3>
                                            <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-medium ${getLevelColor(language.level)} mt-2`}>
                                                {getLevelBadgeText(language.level)}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-bold text-primary-600">
                                            {language.proficiency}%
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Proficiency
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                                        <span>Skill Level</span>
                                        <span>{language.proficiency}%</span>
                                    </div>
                                    <div className="skill-bar h-3 bg-gray-200 rounded-full overflow-hidden">
                                        <div 
                                            className={`skill-fill h-full bg-gradient-to-r ${language.color} transition-all duration-1000 ease-out`}
                                            style={{ width: `${language.proficiency}%` }}
                                        />
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {language.description}
                                </p>

                                {language.certifications.length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-700 mb-3">Certifications & Skills</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {language.certifications.map((cert, certIndex) => (
                                                <span
                                                    key={certIndex}
                                                    className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full font-medium"
                                                >
                                                    {cert}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Interactive elements */}
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div className="p-3 bg-gray-50 rounded-lg">
                                            <div className="text-2xl mb-1">💼</div>
                                            <div className="text-xs text-gray-600">Business</div>
                                            <div className="text-sm font-semibold text-gray-800">
                                                {language.level === "Native" ? "Perfect" : language.level === "Business" ? "Fluent" : "Good"}
                                            </div>
                                        </div>
                                        <div className="p-3 bg-gray-50 rounded-lg">
                                            <div className="text-2xl mb-1">🎯</div>
                                            <div className="text-xs text-gray-600">Technical</div>
                                            <div className="text-sm font-semibold text-gray-800">
                                                {language.level === "Native" ? "Expert" : language.level === "Business" ? "Advanced" : "Intermediate"}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Global Experience Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8 border border-primary-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            International Experience
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            グローバル企業での多国籍チームでの協働経験を通じて、
                            技術的なコミュニケーションからビジネス議論まで幅広い場面での
                            英語コミュニケーション能力を実践で身につけています。
                        </p>
                        <div className="flex justify-center gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-primary-600">5+</div>
                                <div className="text-sm text-gray-600">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600">10+</div>
                                <div className="text-sm text-gray-600">Countries Collaborated</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600">100+</div>
                                <div className="text-sm text-gray-600">International Meetings</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Language