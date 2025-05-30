import React from 'react'

type ContributionProps = {}

const Contribution: React.FC<ContributionProps> = () => {
    const contributions = [
        {
            repository: "terraform-providers/terraform-provider-aws",
            description: "Official AWS Provider for Terraform",
            url: "https://github.com/terraform-providers/terraform-provider-aws/pulls?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+author%3Afukubaka0825+state%3Aclosed+",
            language: "Go",
            icon: "☁️",
            color: "from-orange-500 to-red-500"
        },
        {
            repository: "mercari/tfnotify",
            description: "Slack notification for Terraform CI/CD workflows",
            url: "https://github.com/mercari/tfnotify/pulls?q=is%3Apr+author%3Afukubaka0825+is%3Aclosed",
            language: "Go",
            icon: "🔔",
            color: "from-blue-500 to-indigo-500"
        },
        {
            repository: "evalphobia/aws-sdk-go-wrapper",
            description: "Simplified wrapper for AWS SDK Go",
            url: "https://github.com/evalphobia/aws-sdk-go-wrapper/pulls?q=is%3Apr+author%3Afukubaka0825+is%3Aclosed",
            language: "Go",
            icon: "⚡",
            color: "from-green-500 to-emerald-500"
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
                <div className="text-center mb-12">
                    <h2 className="section-title text-3xl font-light text-gray-800 mb-6">
                        Open Source Contributions
                    </h2>
                </div>

                {/* Open Source Contributions */}
                <div className="mb-20">
                    <h3 className="text-xl font-medium text-gray-700 mb-6 text-center">
                        Code Contributions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {contributions.map((contrib, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 border border-gray-100 overflow-hidden"
                            >
                                {/* Header */}
                                <div className="bg-gray-50 border-b border-gray-100 p-5">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="text-2xl">{contrib.icon}</div>
                                        <span className={`px-2 py-1 rounded-md text-white text-xs font-normal ${getLanguageColor(contrib.language)}`}>
                                            {contrib.language}
                                        </span>
                                    </div>
                                    <h4 className="text-base font-medium text-gray-800 mb-2 leading-tight">
                                        {contrib.repository}
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                                        {contrib.description}
                                    </p>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <a
                                        href={contrib.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 font-normal text-sm transition-colors duration-300"
                                    >
                                        View Contributions
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Contribution