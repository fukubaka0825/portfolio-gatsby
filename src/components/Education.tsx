import React from 'react'

type EducationProps = {}

const Education: React.FC<EducationProps> = () => {
    return (
        <section id="Education" className="section py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="section-title text-3xl font-light text-gray-800 mb-6">
                        Education
                    </h2>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-500">
                        <div className="bg-gray-50 border-b border-gray-100 p-6">
                            <div className="flex items-center gap-3">
                                <div className="text-2xl">🎓</div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 mb-1">Bachelor of Economics</h3>
                                    <p className="text-gray-600 text-sm">March 2018</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 text-center">
                            <a 
                                href="https://www.waseda.jp/fpse/pse/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-medium text-gray-800 hover:text-gray-900 transition-colors duration-300"
                            >
                                Waseda University
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education