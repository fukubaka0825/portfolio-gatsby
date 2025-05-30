import React from 'react'

type EducationProps = {}

const Education: React.FC<EducationProps> = () => {
    const education = [
        {
            degree: "Bachelor of Economics",
            major: "Economic Analysis & Policy",
            institution: "Waseda University",
            institutionUrl: "https://www.waseda.jp/fpse/pse/",
            location: "Tokyo, Japan",
            period: "April 2014 - March 2018",
            graduationDate: "March 2018",
            gpa: "3.6/4.0",
            icon: "🎓",
            color: "from-blue-500 to-indigo-500",
            achievements: [
                "Graduated with Honor Roll recognition",
                "Dean's List for 3 consecutive semesters",
                "Economics Research Award recipient",
                "Student Council Representative"
            ],
            coursework: [
                "Microeconomics & Macroeconomics",
                "Statistics & Econometrics",
                "International Economics",
                "Financial Markets",
                "Data Analysis & Research Methods",
                "Business Mathematics"
            ],
            activities: [
                "Economics Research Club - President",
                "Inter-University Business Case Competition",
                "Academic Tutoring Program",
                "International Student Exchange Program"
            ],
            thesis: {
                title: "Economic Impact Analysis of Digital Transformation in Japanese SMEs",
                advisor: "Prof. Tanaka Hiroshi",
                description: "Analyzed the economic effects of digital transformation adoption in small and medium enterprises"
            },
            skills: [
                "Economic Analysis",
                "Statistical Analysis",
                "Research Methods",
                "Data Interpretation",
                "Financial Modeling",
                "Academic Writing"
            ]
        }
    ]

    return (
        <section id="Education" className="section py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="section-title text-5xl font-bold text-gray-900 mb-6">
                        Academic <span className="text-gradient bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Background</span>
                    </h2>
                    <p className="section-subtitle text-xl text-gray-600 max-w-3xl mx-auto">
                        経済学の理論的基盤とデータ分析スキルを身につけた学術的背景
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                        >
                            {/* Header with institution info */}
                            <div className={`bg-gradient-to-r ${edu.color} text-white p-8`}>
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="text-5xl">{edu.icon}</div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                                            <p className="text-white/90 text-lg mb-1">{edu.major}</p>
                                            <a 
                                                href={edu.institutionUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-white/80 font-semibold text-lg underline decoration-white/50 hover:decoration-white transition-colors duration-200"
                                            >
                                                {edu.institution}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                            <div className="text-sm text-white/90">GPA</div>
                                            <div className="text-xl font-bold">{edu.gpa}</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <span>📍</span>
                                        <span>{edu.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>📅</span>
                                        <span>{edu.period}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content sections */}
                            <div className="p-8">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Left column */}
                                    <div className="space-y-8">
                                        {/* Achievements */}
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                <span>🏆</span>
                                                Academic Achievements
                                            </h4>
                                            <ul className="space-y-2">
                                                {edu.achievements.map((achievement, achIndex) => (
                                                    <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-600">
                                                        <span className="text-green-500 mt-1">✓</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Activities */}
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                <span>🎯</span>
                                                Activities & Leadership
                                            </h4>
                                            <ul className="space-y-2">
                                                {edu.activities.map((activity, actIndex) => (
                                                    <li key={actIndex} className="flex items-start gap-2 text-sm text-gray-600">
                                                        <span className="text-blue-500 mt-1">•</span>
                                                        <span>{activity}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Right column */}
                                    <div className="space-y-8">
                                        {/* Coursework */}
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                <span>📚</span>
                                                Core Coursework
                                            </h4>
                                            <div className="grid grid-cols-1 gap-2">
                                                {edu.coursework.map((course, courseIndex) => (
                                                    <span
                                                        key={courseIndex}
                                                        className="px-3 py-2 bg-primary-50 text-primary-700 text-sm rounded-lg font-medium"
                                                    >
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Skills gained */}
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                <span>⚡</span>
                                                Skills Acquired
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {edu.skills.map((skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Thesis section */}
                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span>📄</span>
                                        Bachelor's Thesis
                                    </h4>
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <h5 className="font-bold text-gray-900 mb-2">{edu.thesis.title}</h5>
                                        <p className="text-sm text-gray-600 mb-3">{edu.thesis.description}</p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <span>Advisor: {edu.thesis.advisor}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Education Summary */}
                <div className="mt-16">
                    <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8 border border-primary-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            Academic Foundation
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-primary-600">4</div>
                                <div className="text-sm text-gray-600">Years of Study</div>
                                <div className="text-xs text-gray-500">Bachelor's Degree</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-500">3.6</div>
                                <div className="text-sm text-gray-600">GPA Achievement</div>
                                <div className="text-xs text-gray-500">Honor Roll Recognition</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-green-500">6</div>
                                <div className="text-sm text-gray-600">Core Skills</div>
                                <div className="text-xs text-gray-500">Economic Analysis</div>
                            </div>
                        </div>
                        
                        <div className="mt-8 text-center">
                            <p className="text-gray-600 text-sm">
                                Strong foundation in economic theory, statistical analysis, and research methodology that supports technical problem-solving approach
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education