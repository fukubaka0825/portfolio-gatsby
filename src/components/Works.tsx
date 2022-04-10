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
                    <a href={`https://hub.vroid.com/characters/3188723872963240740/models/2207386033305627317`} className="image fit thumb">
                        <img src={`https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20211226/20211226005422.png`} alt="" />
                    </a>
                    <a href={`https://hub.vroid.com/characters/3188723872963240740/models/2207386033305627317`} className="slide-title">
                        <h3>VRoid Model wapper 🍔 🍔</h3>
                    </a>
                </article>
                <article className="4u 12u$(xsmall) work-item" >
                    <a href={`https://sre-next.dev/2022/`} className="image fit thumb">
                        <img src={`https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20220206/20220206163754.jpg`} alt="" />
                    </a>
                    <a href={`https://sre-next.dev/2022/`} className="slide-title">
                        <h3>SRE NEXT 2022 Conference Chair</h3>
                    </a>
                </article>
                <article className="4u 12u$(xsmall) work-item" >
                    <a href={`https://e34.fm/16/`} className="image fit thumb">
                        <img src={`https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20220410/20220410175756.png`} alt="" />
                    </a>
                    <a href={`https://e34.fm/16/`} className="slide-title">
                        <h3>16: SRE NEXT 2022 with fukubaka0825(ja)</h3>
                    </a>
                </article>
                <article className="4u 12u$(xsmall) work-item" >
                    <a href={`https://youtu.be/_hfRB_uVqOM?t=401`} className="image fit thumb">
                        <img src={`https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20220410/20220410225617.png`} alt="" />
                    </a>
                    <a href={`https://youtu.be/_hfRB_uVqOM?t=401`} className="slide-title">
                        <h3>SRE Lounge #13「SREの探求」のすゝめ Session(15 minutes,ja)</h3>
                    </a>
                </article>
                <article className="4u 12u$(xsmall) work-item" >
                    <a href={`https://fukubaka.booth.pm/items/1569932`} className="image fit thumb">
                        <img src={`https://booth.pximg.net/c/620x620/ccb90178-4e2b-495c-903b-72a0febaf8cc/i/1569932/db4070f9-ff8f-48cf-8d97-0c14f9275bc2_base_resized.jpg`} alt="" />
                    </a>
                    <a href={`https://fukubaka.booth.pm/items/1569932`} className="slide-title">
                        <h3>Introduction of SlackBot with Go and AWS CDK(ja)</h3>
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
