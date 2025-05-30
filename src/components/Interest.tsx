import React, { useState } from 'react'

type InterestProps = {}

const Interest: React.FC<InterestProps> = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const skillCategories = [
        {
            name: "SRE/DevOps/AIOps",
            icon: "🛡️",
            color: "from-blue-500 to-cyan-500",
            description: "Site Reliability Engineering and DevOps practices",
            skills: [
                { name: "Site Reliability Engineering", level: 90, experience: "5+ years" },
                { name: "DevOps/CI/CD", level: 85, experience: "4+ years" },
                { name: "AIOps/Observability", level: 80, experience: "3+ years" },
                { name: "Incident Management", level: 95, experience: "5+ years" }
            ]
        },
        {
            name: "MLOps/LLMOps/Data Engineering",
            icon: "🤖",
            color: "from-purple-500 to-indigo-500",
            description: "Machine Learning Operations and Data Engineering",
            skills: [
                { name: "MLOps Pipeline", level: 85, experience: "3+ years" },
                { name: "LLMOps/Langfuse", level: 90, experience: "2+ years" },
                { name: "Data Engineering", level: 80, experience: "4+ years" },
                { name: "Model Monitoring", level: 85, experience: "3+ years" }
            ]
        },
        {
            name: "ML/NLP",
            icon: "🧠",
            color: "from-pink-500 to-purple-500",
            description: "Machine Learning and Natural Language Processing",
            skills: [
                { name: "Natural Language Processing", level: 80, experience: "3+ years" },
                { name: "Text Moderation", level: 90, experience: "3+ years" },
                { name: "Machine Learning", level: 75, experience: "3+ years" },
                { name: "Deep Learning", level: 70, experience: "2+ years" }
            ]
        },
        {
            name: "Programming Languages",
            icon: "💻",
            color: "from-green-500 to-emerald-500",
            description: "Core programming languages and frameworks",
            skills: [
                { name: "Go", level: 90, experience: "5+ years" },
                { name: "Python", level: 85, experience: "4+ years" },
                { name: "Shell Script", level: 95, experience: "6+ years" },
                { name: "TypeScript", level: 70, experience: "2+ years" }
            ]
        },
        {
            name: "Container & Orchestration",
            icon: "🐳",
            color: "from-blue-500 to-indigo-500",
            description: "Containerization and orchestration platforms",
            skills: [
                { name: "Docker", level: 90, experience: "5+ years" },
                { name: "Kubernetes", level: 85, experience: "4+ years" },
                { name: "AWS ECS/EKS", level: 85, experience: "4+ years" },
                { name: "Container Security", level: 80, experience: "3+ years" }
            ]
        },
        {
            name: "Cloud Infrastructure",
            icon: "☁️",
            color: "from-orange-500 to-red-500",
            description: "Cloud platforms and infrastructure as code",
            skills: [
                { name: "AWS", level: 90, experience: "5+ years" },
                { name: "Google Cloud", level: 80, experience: "3+ years" },
                { name: "Terraform", level: 85, experience: "4+ years" },
                { name: "Infrastructure Design", level: 90, experience: "5+ years" }
            ]
        },
        {
            name: "Application Design",
            icon: "🏗️",
            color: "from-gray-500 to-slate-500",
            description: "Software architecture and design patterns",
            skills: [
                { name: "Object-Oriented Programming", level: 85, experience: "5+ years" },
                { name: "Domain-Driven Design", level: 80, experience: "3+ years" },
                { name: "Clean Architecture", level: 85, experience: "4+ years" },
                { name: "Microservices", level: 80, experience: "4+ years" }
            ]
        },
        {
            name: "Policy as Code",
            icon: "📋",
            color: "from-teal-500 to-cyan-500",
            description: "Infrastructure and security policy automation",
            skills: [
                { name: "Open Policy Agent (OPA)", level: 85, experience: "3+ years" },
                { name: "Rego", level: 80, experience: "3+ years" },
                { name: "Conftest", level: 85, experience: "3+ years" },
                { name: "Security Policies", level: 80, experience: "3+ years" }
            ]
        }
    ]

    const getSkillLevelColor = (level: number) => {
        if (level >= 90) return "bg-green-500"
        if (level >= 80) return "bg-blue-500"
        if (level >= 70) return "bg-yellow-500"
        return "bg-gray-500"
    }

    const getSkillLevelText = (level: number) => {
        if (level >= 90) return "Expert"
        if (level >= 80) return "Advanced"
        if (level >= 70) return "Intermediate"
        return "Beginner"
    }

    return (
        <section id="Interest" className="section py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="section-title text-5xl font-bold text-gray-900 mb-6">
                        Skills & <span className="text-gradient bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
                    </h2>
                    <p className="section-subtitle text-xl text-gray-600 max-w-3xl mx-auto">
                        プロダクション環境での実戦経験を通じて培った技術スキルとドメイン知識
                    </p>
                </div>

                {/* Skill Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100 overflow-hidden ${
                                selectedCategory === category.name ? 'ring-2 ring-primary-500 shadow-strong' : ''
                            }`}
                            onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                        >
                            <div className="p-6 text-center">
                                <div className="text-4xl mb-4">{category.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 mb-2">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {category.description}
                                </p>
                                <div className="flex justify-center">
                                    <span className={`px-3 py-1 rounded-full text-white text-xs font-medium bg-gradient-to-r ${category.color}`}>
                                        {category.skills.length} Skills
                                    </span>
                                </div>
                            </div>

                            {/* Hover effect overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                        </div>
                    ))}
                </div>

                {/* Selected Category Detail */}
                {selectedCategory && (
                    <div className="mb-16">
                        {skillCategories
                            .filter(category => category.name === selectedCategory)
                            .map((category, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
                                    <div className={`bg-gradient-to-r ${category.color} text-white p-6`}>
                                        <div className="flex items-center gap-4">
                                            <div className="text-4xl">{category.icon}</div>
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                                                <p className="text-white/90">{category.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {category.skills.map((skill, skillIndex) => (
                                                <div key={skillIndex} className="space-y-3">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                                                        <div className="flex items-center gap-2">
                                                            <span className={`px-2 py-1 rounded-full text-white text-xs font-medium ${getSkillLevelColor(skill.level)}`}>
                                                                {getSkillLevelText(skill.level)}
                                                            </span>
                                                            <span className="text-sm text-gray-500">{skill.level}%</span>
                                                        </div>
                                                    </div>
                                                    <div className="skill-bar h-2 bg-gray-200 rounded-full overflow-hidden">
                                                        <div 
                                                            className={`skill-fill h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                                                            style={{ width: `${skill.level}%` }}
                                                        />
                                                    </div>
                                                    <div className="text-sm text-gray-600">
                                                        Experience: {skill.experience}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}

                {/* Overall Skills Summary */}
                <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8 border border-primary-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Technical Proficiency Overview
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-green-500">8</div>
                            <div className="text-sm text-gray-600">Expert Level</div>
                            <div className="text-xs text-gray-500">90%+ Skills</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-500">15</div>
                            <div className="text-sm text-gray-600">Advanced Level</div>
                            <div className="text-xs text-gray-500">80%+ Skills</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-yellow-500">9</div>
                            <div className="text-sm text-gray-600">Intermediate Level</div>
                            <div className="text-xs text-gray-500">70%+ Skills</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary-600">32</div>
                            <div className="text-sm text-gray-600">Total Skills</div>
                            <div className="text-xs text-gray-500">Across 8 Domains</div>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                        <p className="text-gray-600 mb-4">
                            {selectedCategory ? 'Click on other categories to explore more skills' : 'Click on any category above to explore detailed skills'}
                        </p>
                        <div className="flex justify-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span>Expert (90%+)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                <span>Advanced (80%+)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <span>Intermediate (70%+)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Interest