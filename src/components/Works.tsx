import React from 'react'

type WorksProps = {
}

const Works: React.FC<WorksProps> = ({ }) => {

    return (
        <section id="Works">
            <h2>Works</h2>
            <div className="row">
                <article className="4u 12u$(xsmall) work-item" >
                    <a href={`https://www.youtube.com/channel/UC81PeviLpHz0oH6GhaqxIpQ`} className="image fit thumb">
                        <img src={`https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20210425/20210425215110.png`} alt="" />
                    </a>
                    <a href={`https://www.youtube.com/channel/UC81PeviLpHz0oH6GhaqxIpQ`} className="slide-title">
                        <h3>YouTube Channel(VTuber) wapper/nari 🍔 🍔</h3>
                    </a>
                </article>
                <article className="4u 12u$(xsmall) work-item" >
                    <a href={`https://fukubaka.booth.pm/items/1569932`} className="image fit thumb">
                        <img src={`https://booth.pximg.net/c/620x620/ccb90178-4e2b-495c-903b-72a0febaf8cc/i/1569932/db4070f9-ff8f-48cf-8d97-0c14f9275bc2_base_resized.jpg`} alt="" />
                    </a>
                    <a href={`https://fukubaka.booth.pm/items/1569932`} className="slide-title">
                        <h3>Introduction to SlackBot with Go and AWS CDK(ja)</h3>
                    </a>
                    <a href={`https://techbookfest.org/event/tbf07`} className="slide-title">
                        <h3>Distributed at Gijutsu Shoten 7(ja)</h3>
                    </a>
                </article>
                <article className="4u 12u$(xsmall) work-item" >
                    <a href={`https://shiganai.org/ep/sp78-fukubaka0825`} className="image fit thumb">
                        <img src={`https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20200313/20200313141825.png`} alt="" />
                    </a>
                    <a href={`https://shiganai.org/ep/sp78-fukubaka0825`} className="slide-title">
                        <h3>sp.78【Guest: fukubaka0825】How a band member who got a job at a SIer moved to a startup and became a fun SRE in a year(ja)</h3>
                    </a>
                </article>
            </div>
        </section>
    )
}

export default Works
