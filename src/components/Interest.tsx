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
                { name: "Site Reliability Engineering" },
                { name: "DevOps, AIOps, CI/CD" },
                { name: "Observability" },
                { name: "Incident Management" }
            ]
        },
        {
            name: "MLOps/LLMOps/Data Engineering",
            icon: "🤖",
            color: "from-purple-500 to-indigo-500",
            description: "Machine Learning Operations and Data Engineering",
            skills: [
                { name: "MLOps Pipeline" },
                { name: "LLMOps/Langfuse" },
                { name: "Data Engineering" },
                { name: "Model Monitoring" }
            ]
        },
        {
            name: "ML/NLP",
            icon: "🧠",
            color: "from-pink-500 to-purple-500",
            description: "Machine Learning and Natural Language Processing",
            skills: [
                { name: "Natural Language Processing" },
                { name: "Text Moderation" },
                { name: "LLM" },
                { name: "Deep Learning" }
            ]
        },
        {
            name: "Programming Languages",
            icon: "💻",
            color: "from-green-500 to-emerald-500",
            description: "Core programming languages and frameworks",
            skills: [
                { name: "Go" },
                { name: "Python" },
                { name: "Shell Script" },
                { name: "TypeScript" }
            ]
        },
        {
            name: "Container & Orchestration",
            icon: "🐳",
            color: "from-blue-500 to-indigo-500",
            description: "Containerization and orchestration platforms",
            skills: [
                { name: "Docker" },
                { name: "Kubernetes" },
                { name: "AWS ECS/EKS" },
                { name: "Container Security" }
            ]
        },
        {
            name: "Cloud Infrastructure",
            icon: "☁️",
            color: "from-orange-500 to-red-500",
            description: "Cloud platforms and infrastructure as code",
            skills: [
                { name: "AWS" },
                { name: "Google Cloud" },
                { name: "Terraform" },
                { name: "Datadog, Sentry" }
            ]
        },
        {
            name: "Application Design",
            icon: "🏗️",
            color: "from-gray-500 to-slate-500",
            description: "Software architecture and design patterns",
            skills: [
                { name: "Object-Oriented Programming" },
                { name: "Domain-Driven Design" },
                { name: "Clean Architecture" },
                { name: "Microservices" }
            ]
        },
        {
            name: "Policy as Code",
            icon: "📋",
            color: "from-teal-500 to-cyan-500",
            description: "Infrastructure and security policy automation",
            skills: [
                { name: "Open Policy Agent (OPA)" },
                { name: "Rego" },
                { name: "Conftest" },
                { name: "Security Policies" }
            ]
        }
    ]


    return (
        <section id="Interest" className="section py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="section-title text-3xl font-light text-gray-800 mb-6">
                        Skills & Expertise
                    </h2>
                </div>

                {/* Skill Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 cursor-pointer border border-gray-100 overflow-hidden ${
                                selectedCategory === category.name ? 'ring-2 ring-primary-500 shadow-strong' : ''
                            }`}
                            onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                        >
                            <div className="p-5 text-center">
                                <div className="text-2xl mb-3">{category.icon}</div>
                                <h3 className="text-base font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-2">
                                    {category.name}
                                </h3>
                                <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                                    {category.description}
                                </p>
                                <div className="flex justify-center">
                                    <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-normal">
                                        {category.skills.length} Skills
                                    </span>
                                </div>
                            </div>

                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Selected Category Detail */}
                {selectedCategory && (
                    <div className="mb-16">
                        {skillCategories
                            .filter(category => category.name === selectedCategory)
                            .map((category, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                                    <div className="bg-gray-50 border-b border-gray-100 p-5">
                                        <div className="flex items-center gap-3">
                                            <div className="text-2xl">{category.icon}</div>
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-800 mb-1">{category.name}</h3>
                                                <p className="text-sm text-gray-600">{category.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {category.skills.map((skill, skillIndex) => (
                                                <div key={skillIndex} className="py-2">
                                                    <div className="flex items-center">
                                                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span>
                                                        <span className="text-sm font-normal text-gray-700">{skill.name}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}

            </div>
        </section>
    )
}

export default Interest