import React from 'react'

type EducationProps = {
}

const Education: React.FC<EducationProps> = ({ }) => {

    return (
        <section id="Education">
            <h2>Education</h2>
            <ul >
                <li>
                    Computer Science (Jan, 2019~)
                    <ul>
                        <li>
                            <a href={`https://www.uopeople.edu/programs/cs/degrees/computer-science-bachelor-degree-2/`}>
                                UoPeople
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
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
