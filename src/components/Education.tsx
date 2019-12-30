import React from 'react'

type EducationProps = {
}

const Education: React.FC<EducationProps> = ({ }) => {

    return (
        <section id="Education">
            <h2>Education</h2>
            <ul className="alt">
                <li>
                    <h3>Bachelor of Economics (Mar,2018)
                    </h3>
                    <p>
                        <a href={`https://www.waseda.jp/fpse/pse/`}>
                            Waseda University
                        </a>
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default Education
