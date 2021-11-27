import React from 'react'

type CertificationProps = {
}

const Certification: React.FC<CertificationProps> = ({ }) => {

    return (
        <section id="Certification">
            <h2>Certification</h2>
            <ul className="alt">
                <li>
                    <h3>2021-11 AWS Certified Machine Learning - Specialty</h3>
                </li>
                <li>
                    <h3>2019-03 AWS Certified Solutions Architect Associate</h3>
                </li>
                <li>
                    <h3>2018-11 Fundamental Information Technology Engineer Examination(基本情報技術者)</h3>
                </li>
                <li>
                    <h3>2018-04 TOEIC 850</h3>
                </li>
                <li>
                    <h3>2016-04 The Official Business Skill Test in Book-keeping,3rd grade(日商簿記3級)</h3>
                </li>
            </ul>
        </section>
    )
}

export default Certification
