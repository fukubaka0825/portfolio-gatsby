import React from 'react'

type ContributionProps = {}

const Contribution: React.FC<ContributionProps> = () => {
    const contributions = [
        {
            repository: "terraform-providers/terraform-provider-aws",
            description: "Official AWS Provider for Terraform",
            url: "https://github.com/terraform-providers/terraform-provider-aws/pulls?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+author%3Afukubaka0825+state%3Aclosed+",
            language: "Go",
            stars: "9.5k+",
            type: "Infrastructure as Code",
            contributions: [
                "Bug fixes for AWS resource configurations",
                "Documentation improvements",
                "Test case enhancements"
            ],
            impact: "Improved reliability for AWS infrastructure automation",
            icon: "☁️",
            color: "from-orange-500 to-red-500",
            maintainer: "HashiCorp",
            contributionType: "Code & Documentation"
        },
        {
            repository: "mercari/tfnotify",
            description: "Slack notification for Terraform CI/CD workflows",
            url: "https://github.com/mercari/tfnotify/pulls?q=is%3Apr+author%3Afukubaka0825+is%3Aclosed",
            language: "Go",
            stars: "1.2k+",
            type: "DevOps Tools",
            contributions: [
                "Enhanced notification formatting",
                "Added support for additional CI platforms",
                "Performance optimizations"
            ],
            impact: "Better visibility for Terraform operations in team workflows",
            icon: "🔔",
            color: "from-blue-500 to-indigo-500",
            maintainer: "Mercari",
            contributionType: "Feature Development"
        },
        {
            repository: "evalphobia/aws-sdk-go-wrapper",
            description: "Simplified wrapper for AWS SDK Go",
            url: "https://github.com/evalphobia/aws-sdk-go-wrapper/pulls?q=is%3Apr+author%3Afukubaka0825+is%3Aclosed",
            language: "Go",
            stars: "600+",
            type: "SDK Enhancement",
            contributions: [
                "Added new service wrappers",
                "Error handling improvements",
                "Code simplification"
            ],
            impact: "Easier AWS service integration for Go developers",
            icon: "⚡",
            color: "from-green-500 to-emerald-500",
            maintainer: "evalphobia",
            contributionType: "Library Enhancement"
        }
    ]

    const communityActivities = [
        {
            title: "SRE NEXT Conference Chair",
            description: "Led the organization of SRE NEXT 2022, a major Site Reliability Engineering conference",
            icon: "🎪",
            color: "from-purple-500 to-pink-500",
            impact: "Connected 1000+ SRE professionals across Japan"
        },
        {
            title: "Technical Writing & Blogging",
            description: "Regular contributor to engineering blogs and technical publications",
            icon: "✍️",
            color: "from-blue-500 to-cyan-500",
            impact: "Shared knowledge with 10k+ developers"
        },
        {
            title: "Conference Speaking",
            description: "Speaker at various technical conferences and meetups",
            icon: "🎤",
            color: "from-orange-500 to-red-500",
            impact: "Presented to 500+ engineers"
        },
        {
            title: "Open Source Advocacy",
            description: "Promoting open source adoption and contribution in teams",
            icon: "🌟",
            color: "from-yellow-500 to-orange-500",
            impact: "Encouraged team-wide OSS participation"
        }
    ]

    const getLanguageColor = (language: string) => {
        const colors = {
            "Go": "bg-cyan-500",
            "Python": "bg-yellow-500",
            "TypeScript": "bg-blue-500",
            "JavaScript": "bg-yellow-400"
        }
        return colors[language as keyof typeof colors] || "bg-gray-500"
    }

    return (
        <section id="Contribution" className="section py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="section-title text-5xl font-bold text-gray-900 mb-6">
                        Open Source <span className="text-gradient bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Contributions</span>
                    </h2>
                    <p className="section-subtitle text-xl text-gray-600 max-w-3xl mx-auto">
                        技術コミュニティへの貢献とオープンソースプロジェクトへの積極的な参加
                    </p>
                </div>

                {/* Open Source Contributions */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Code Contributions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {contributions.map((contrib, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                            >
                                {/* Header */}
                                <div className={`bg-gradient-to-r ${contrib.color} text-white p-6`}>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="text-4xl">{contrib.icon}</div>
                                        <div className="flex flex-col gap-2">
                                            <span className={`px-3 py-1 rounded-full text-white text-xs font-medium ${getLanguageColor(contrib.language)}`}>
                                                {contrib.language}
                                            </span>
                                            <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium">
                                                ⭐ {contrib.stars}
                                            </span>
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-bold mb-2 leading-tight">
                                        {contrib.repository}
                                    </h4>
                                    <p className="text-white/90 text-sm mb-3">
                                        {contrib.description}
                                    </p>
                                    <div className="flex items-center gap-4 text-xs">
                                        <span className="bg-white/20 px-2 py-1 rounded">{contrib.type}</span>
                                        <span className="bg-white/20 px-2 py-1 rounded">{contrib.maintainer}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="mb-6">
                                        <h5 className="text-sm font-semibold text-gray-700 mb-3">My Contributions</h5>
                                        <ul className="space-y-2">
                                            {contrib.contributions.map((contribution, contribIndex) => (
                                                <li key={contribIndex} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <span className="text-green-500 mt-1">•</span>
                                                    <span>{contribution}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-6">
                                        <h5 className="text-sm font-semibold text-gray-700 mb-2">Impact</h5>
                                        <p className="text-sm text-gray-600">{contrib.impact}</p>
                                    </div>

                                    <div className="mb-4">
                                        <span className="text-xs text-gray-500 uppercase tracking-wide">
                                            {contrib.contributionType}
                                        </span>
                                    </div>

                                    <a
                                        href={contrib.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors duration-200"
                                    >
                                        View Contributions
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Community Activities */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Community Activities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {communityActivities.map((activity, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
                            >
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${activity.color} flex items-center justify-center text-white text-xl flex-shrink-0`}>
                                            {activity.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                                                {activity.title}
                                            </h4>
                                            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                                                {activity.description}
                                            </p>
                                            <div className="inline-flex items-center gap-2 text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                {activity.impact}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contribution Summary */}
                <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8 border border-primary-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Community Impact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-primary-600">{contributions.length}</div>
                            <div className="text-sm text-gray-600">OSS Projects</div>
                            <div className="text-xs text-gray-500">Contributed</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-500">10+</div>
                            <div className="text-sm text-gray-600">Pull Requests</div>
                            <div className="text-xs text-gray-500">Merged</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-500">1000+</div>
                            <div className="text-sm text-gray-600">Conference Attendees</div>
                            <div className="text-xs text-gray-500">Organized</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-purple-500">10k+</div>
                            <div className="text-sm text-gray-600">Developers Reached</div>
                            <div className="text-xs text-gray-500">Through Content</div>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                        <p className="text-gray-600 text-sm">
                            Active contributor to the developer community through code, knowledge sharing, and event organization
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contribution