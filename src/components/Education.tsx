import React from 'react'

type EducationProps = {
}

const Education: React.FC<EducationProps> = ({ }) => {

    return (
        <section id="Education">
            <h2>Education</h2>
            <ul className="alt">
                <li>
                    <h3>Bachelor of Economics (Mar,2018)</h3>
                    <a href={`https://www.waseda.jp/fpse/pse/`}>
                    &nbsp;&nbsp;・Waseda University
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Education
