import React from 'react'

type CertificationProps = {}

const Certification: React.FC<CertificationProps> = () => {
    const certifications = [
        {
            date: "2021-11",
            name: "AWS Certified Machine Learning - Specialty"
        },
        {
            date: "2019-03", 
            name: "AWS Certified Solutions Architect Associate"
        },
        {
            date: "2018-11",
            name: "Fundamental Information Technology Engineer Examination(基本情報技術者)"
        },
        {
            date: "2018-04",
            name: "TOEIC 850"
        },
        {
            date: "2016-04",
            name: "The Official Business Skill Test in Book-keeping,3rd grade(日商簿記3級)"
        }
    ]

    return (
        <section id="Certification" className="section py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="section-title text-3xl font-light text-gray-800 mb-6">
                        Certification
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-3">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all duration-500 hover:-translate-y-px"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-base font-medium text-gray-800">
                                        {cert.name}
                                    </h3>
                                    <span className="text-sm text-gray-500 font-normal">
                                        {cert.date}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certification