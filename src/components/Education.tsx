import React from 'react'

type EducationProps = {
}

const Education: React.FC<EducationProps> = ({ }) => {

    return (
        <section id="Education">
            <h2>:baby: Education</h2>
            <ul >
                <li>
                  Bachelor of Economics (Mar, 2018)
                  <ul>
                       <li>
                           <a href={`https://www.waseda.jp/fpse/pse/`}>
                              Waseda University
                          </a>
                       </li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export default Education
