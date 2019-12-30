import React from 'react'

type WorksProps = {
}

const Works: React.FC<WorksProps> = ({ }) => {

    return (
        <section id="Works">
            <h2>Works</h2>
            <div className="row">
                <article className="4u 12u$(xsmall) work-item" >
                    <a href={`https://fukubaka.booth.pm/items/1569932`} className="image fit thumb">
                        <img src={`https://booth.pximg.net/c/620x620/ccb90178-4e2b-495c-903b-72a0febaf8cc/i/1569932/db4070f9-ff8f-48cf-8d97-0c14f9275bc2_base_resized.jpg`} alt="" />
                    </a>
                    <a href={`https://fukubaka.booth.pm/items/1569932`} className="slide-title">
                        <h3>GoとAWS CDKで作る本格SlackBot入門</h3>
                    </a>
                    <a href={`https://techbookfest.org/event/tbf07`} className="slide-title">
                        <h3>技術書典7にて頒布(技術同人誌)</h3>
                    </a>
                </article>
            </div>
        </section>
    )
}

export default Works
