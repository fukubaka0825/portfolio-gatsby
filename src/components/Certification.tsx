import React from 'react'

type CertificationProps = {}

const Certification: React.FC<CertificationProps> = () => {
    const certifications = [
        {
            name: "AWS Certified Machine Learning - Specialty",
            issuer: "Amazon Web Services",
            date: "November 2021",
            level: "Specialty",
            icon: "🤖",
            color: "from-purple-500 to-indigo-500",
            credentialId: "MLS-2021",
            skills: ["Machine Learning", "AWS SageMaker", "Data Science", "MLOps"],
            description: "Advanced machine learning on AWS, covering ML implementations and best practices",
            validUntil: "November 2024",
            category: "Cloud & ML"
        },
        {
            name: "AWS Certified Solutions Architect Associate",
            issuer: "Amazon Web Services",
            date: "March 2019",
            level: "Associate",
            icon: "☁️",
            color: "from-orange-500 to-red-500",
            credentialId: "SAA-2019",
            skills: ["AWS Architecture", "Cloud Design", "Security", "Cost Optimization"],
            description: "Designing distributed systems on AWS with high availability and scalability",
            validUntil: "March 2025",
            category: "Cloud Architecture"
        },
        {
            name: "Fundamental Information Technology Engineer",
            issuer: "Information-technology Promotion Agency, Japan",
            date: "November 2018",
            level: "National Qualification",
            icon: "💻",
            color: "from-blue-500 to-cyan-500",
            credentialId: "FE-2018",
            skills: ["Computer Science", "Programming", "Database", "Network"],
            description: "Fundamental knowledge of information technology and software engineering",
            validUntil: "Lifetime",
            category: "Software Engineering"
        },
        {
            name: "TOEIC Score 850",
            issuer: "Educational Testing Service",
            date: "April 2018",
            level: "Business Level",
            icon: "🌍",
            color: "from-green-500 to-emerald-500",
            credentialId: "TOEIC-850",
            skills: ["English Communication", "Business English", "Reading", "Listening"],
            description: "Business-level English proficiency for international communication",
            validUntil: "April 2026",
            category: "Language"
        },
        {
            name: "Official Business Skill Test in Book-keeping 3rd Grade",
            issuer: "Japan Chamber of Commerce and Industry",
            date: "April 2016",
            level: "Grade 3",
            icon: "📊",
            color: "from-gray-500 to-slate-500",
            credentialId: "BK3-2016",
            skills: ["Accounting", "Financial Analysis", "Business Math", "Documentation"],
            description: "Fundamental accounting principles and business bookkeeping practices",
            validUntil: "Lifetime",
            category: "Business"
        }
    ]

    const getCategoryIcon = (category: string) => {
        const icons = {
            "Cloud & ML": "🤖",
            "Cloud Architecture": "☁️",
            "Software Engineering": "💻",
            "Language": "🌍",
            "Business": "📊"
        }
        return icons[category as keyof typeof icons] || "🎓"
    }

    const getLevelColor = (level: string) => {
        const colors = {
            "Specialty": "bg-purple-600",
            "Associate": "bg-blue-600",
            "National Qualification": "bg-green-600",
            "Business Level": "bg-orange-600",
            "Grade 3": "bg-gray-600"
        }
        return colors[level as keyof typeof colors] || "bg-gray-600"
    }

    const isActive = (validUntil: string) => {
        if (validUntil === "Lifetime") return true
        const currentDate = new Date()
        const expiryDate = new Date(validUntil)
        return currentDate < expiryDate
    }

    const groupedCertifications = certifications.reduce((acc, cert) => {
        if (!acc[cert.category]) {
            acc[cert.category] = []
        }
        acc[cert.category].push(cert)
        return acc
    }, {} as Record<string, typeof certifications>)

    return (
        <section id="Certification" className="section py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="section-title text-5xl font-bold text-gray-900 mb-6">
                        Certifications & <span className="text-gradient bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Credentials</span>
                    </h2>
                    <p className="section-subtitle text-xl text-gray-600 max-w-3xl mx-auto">
                        技術力の証明とキャリア成長を支える認定資格・技能検定
                    </p>
                </div>

                {/* Certification Categories */}
                {Object.entries(groupedCertifications).map(([category, certs], categoryIndex) => (
                    <div key={categoryIndex} className="mb-12">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="text-3xl">{getCategoryIcon(category)}</div>
                            <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
                            <div className="flex-1 h-px bg-gradient-to-r from-primary-200 to-transparent"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certs.map((cert, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                                >
                                    {/* Header with gradient */}
                                    <div className={`bg-gradient-to-r ${cert.color} text-white p-6`}>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="text-4xl">{cert.icon}</div>
                                            <div className="flex flex-col gap-2">
                                                <span className={`px-3 py-1 rounded-full text-white text-xs font-medium ${getLevelColor(cert.level)}`}>
                                                    {cert.level}
                                                </span>
                                                {isActive(cert.validUntil) ? (
                                                    <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-medium">
                                                        Active
                                                    </span>
                                                ) : (
                                                    <span className="px-3 py-1 rounded-full bg-red-500 text-white text-xs font-medium">
                                                        Expired
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <h4 className="text-lg font-bold mb-2 leading-tight">
                                            {cert.name}
                                        </h4>
                                        <p className="text-white/90 text-sm">
                                            {cert.issuer}
                                        </p>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="space-y-4">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Issued:</span>
                                                <span className="font-medium text-gray-900">{cert.date}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Valid Until:</span>
                                                <span className={`font-medium ${isActive(cert.validUntil) ? 'text-green-600' : 'text-red-600'}`}>
                                                    {cert.validUntil}
                                                </span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">ID:</span>
                                                <span className="font-mono text-xs text-gray-700">{cert.credentialId}</span>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                                {cert.description}
                                            </p>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-700 mb-3">Key Skills</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {cert.skills.map((skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md font-medium"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover effect overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Certification Summary */}
                <div className="mt-20">
                    <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8 border border-primary-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            Certification Overview
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-primary-600">{certifications.length}</div>
                                <div className="text-sm text-gray-600">Total Certifications</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-green-500">
                                    {certifications.filter(cert => isActive(cert.validUntil)).length}
                                </div>
                                <div className="text-sm text-gray-600">Active Credentials</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-purple-500">
                                    {Object.keys(groupedCertifications).length}
                                </div>
                                <div className="text-sm text-gray-600">Skill Categories</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-orange-500">2</div>
                                <div className="text-sm text-gray-600">AWS Certifications</div>
                            </div>
                        </div>
                        
                        <div className="mt-8 text-center">
                            <p className="text-gray-600 text-sm">
                                Continuously updating skills through industry-recognized certifications and ongoing learning
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certification