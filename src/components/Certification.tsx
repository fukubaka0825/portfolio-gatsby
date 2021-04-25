import React from 'react'

type CertificationProps = {
}

const Certification: React.FC<CertificationProps> = ({ }) => {

    return (
        <section id="Certification">
            <h2>Certification</h2>
            <ul className="alt">
                <li>
                    <h3>2019-03 AWS Certified Solutions Architect Associate</h3>
                </li>
                <li>
                    <h3>2018-11 基本情報技術者</h3>
                </li>
                <li>
                    <h3>2018-04 TOEIC 850</h3>
                </li>
                <li>
                    <h3>2016-04 日商簿記3級</h3>
                </li>
            </ul>
        </section>
    )
}

export default Certification
