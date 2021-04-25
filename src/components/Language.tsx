import React from 'react'

type LanguageProps = {
}

const Language: React.FC<LanguageProps> = ({ }) => {

    return (
        <section id="Language">
            <h2>:speaker: Language</h2>
            <ul className="alt">
                <li>
                    <h3>Japanese: Native level</h3>
                </li>
                <li>
                    <h3>English: Business level</h3>
                </li>
            </ul>
        </section>
    )
}

export default Language
