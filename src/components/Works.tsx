import React from 'react'

type WorksProps = {}

const Works: React.FC<WorksProps> = () => {
    const works = [
        {
            title: "[Slide] ペアーズにおける評価ドリブンな AI Agent 開発のご紹介",
            subtitle: "20250508配信AWSウェビナー登壇",
            image: "https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20250508/20250508163215.png",
            url: "https://speakerdeck.com/fukubaka0825/heasuniokeruping-jia-torihunna-ai-agent-kai-fa-nokoshao-jie",
            type: "Slide",
            category: "AI/ML",
            year: "2025",
            tags: ["AI Agent", "AWS", "MLOps"]
        },
        {
            title: "[Slide] ペアーズでの、Langfuseを中心とした評価ドリブンなリリースサイクルのご紹介",
            subtitle: "Langfuse Night #1",
            image: "https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20250212/20250212125705.png",
            url: "https://speakerdeck.com/fukubaka0825/peazudeno-langfusewozhong-xin-tositaping-jia-doribunnaririsusaikurunogoshao-jie",
            type: "Slide",
            category: "LLMOps",
            year: "2025",
            tags: ["Langfuse", "LLM", "Evaluation"]
        },
        {
            title: "[Slide] ペアーズにおけるAmazon Bedrockを⽤いた障害対応⽀援 ⽣成AIツールの導⼊事例",
            subtitle: "20241115配信AWSウェビナー登壇",
            image: "https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20250212/20250212125526.png",
            url: "https://speakerdeck.com/fukubaka0825/peazuniokeruamazon-bedrockwo-itazhang-hai-dui-ying-yuan-cheng-aiturunodao-shi-li-at-20241115pei-xin-awsuebinadeng-tan",
            type: "Slide",
            category: "AIOps",
            year: "2024",
            tags: ["Amazon Bedrock", "AIOps", "Incident Response"]
        },
        {
            title: "[Article] Amazon Bedrock を用いた障害対応報告書とポストモーテム文書自動作成",
            subtitle: "AWS Builders Flash",
            image: "https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20250212/20250212130001.png",
            url: "https://aws.amazon.com/jp/builders-flash/202410/automated-Incident-reports-and-post-mortem/",
            type: "Article",
            category: "AIOps",
            year: "2024",
            tags: ["AWS", "Automation", "Post-mortem"]
        },
        {
            title: "[Slide] SRE NEXT 2022 Steps toward self-service operations in eureka",
            subtitle: "SRE NEXT 2022 Session(20 minutes)",
            image: "https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20230311/20230311221216.png",
            url: "https://sre-next.dev/2022/schedule#jp51",
            type: "Slide",
            category: "SRE",
            year: "2022",
            tags: ["SRE", "Self-Service", "Operations"]
        },
        {
            title: "[Video] SRE Lounge #13「SREの探求」のすゝめ",
            subtitle: "Session(15 minutes)",
            image: "https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20220410/20220410225617.png",
            url: "https://youtu.be/_hfRB_uVqOM?t=401",
            type: "Video",
            category: "SRE",
            year: "2022",
            tags: ["SRE", "Career", "Community"]
        },
        {
            title: "[Slide] SRE NEXT 2022に学ぶこれからのSREキャリア",
            subtitle: "Infra Career Lounge #3 Session(15 minutes)",
            image: "https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20230311/20230311221629.png",
            url: "https://speakerdeck.com/fukubaka0825/sre-next-2022nixue-bukorekarafalsesrekiyaria",
            type: "Slide",
            category: "Career",
            year: "2022",
            tags: ["SRE", "Career", "Learning"]
        },
        {
            title: "[Conference Chair] SRE NEXT 2022",
            subtitle: "Conference Organization",
            image: "https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20220206/20220206163754.jpg",
            url: "https://sre-next.dev/2022/",
            type: "Conference",
            category: "Leadership",
            year: "2022",
            tags: ["Conference", "SRE", "Leadership"]
        },
        {
            title: "[Book] Introduction of SlackBot with Go and AWS CDK",
            subtitle: "Distributed at Gijutsu Shoten 7",
            image: "https://booth.pximg.net/c/620x620/ccb90178-4e2b-495c-903b-72a0febaf8cc/i/1569932/db4070f9-ff8f-48cf-8d97-0c14f9275bc2_base_resized.jpg",
            url: "https://fukubaka.booth.pm/items/1569932",
            type: "Book",
            category: "Development",
            year: "2019",
            tags: ["Go", "AWS CDK", "SlackBot"]
        },
        {
            title: "[Radio] SRE NEXT 2022 with fukubaka0825",
            subtitle: "e34.fm Episode 16",
            image: "https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20220410/20220410175756.png",
            url: "https://e34.fm/16/",
            type: "Radio",
            category: "Interview",
            year: "2022",
            tags: ["Radio", "SRE", "Interview"]
        },
        {
            title: "[Radio] sp.78【Guest: fukubaka0825】How a band member became a fun SRE",
            subtitle: "shiganai.org podcast",
            image: "https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20200313/20200313141825.png",
            url: "https://shiganai.org/ep/sp78-fukubaka0825",
            type: "Radio",
            category: "Interview",
            year: "2020",
            tags: ["Career", "SRE", "Story"]
        },
        {
            title: "[Video] YouTube Channel(VTuber) wapper/nari 🍔 🍔",
            subtitle: "Coming Soon...",
            image: "https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20210425/20210425215110.png",
            url: "https://www.youtube.com/channel/UC81PeviLpHz0oH6GhaqxIpQ",
            type: "Video",
            category: "Entertainment",
            year: "2021",
            tags: ["VTuber", "YouTube", "Fun"]
        },
        {
            title: "[VR Model] VRoid Model wapper 🍔 🍔",
            subtitle: "3D Character Model",
            image: "https://cdn-ak.f.st-hatena.com/images/fotolife/s/st5818129/20211226/20211226005422.png",
            url: "https://hub.vroid.com/characters/3188723872963240740/models/2207386033305627317",
            type: "VR Model",
            category: "3D",
            year: "2021",
            tags: ["VRoid", "3D", "Character"]
        }
    ]

    const getCategoryColor = (category: string) => {
        const colors = {
            "AI/ML": "bg-gradient-to-r from-purple-500 to-pink-500",
            "LLMOps": "bg-gradient-to-r from-indigo-500 to-purple-500",
            "AIOps": "bg-gradient-to-r from-blue-500 to-cyan-500",
            "SRE": "bg-gradient-to-r from-green-500 to-emerald-500",
            "Career": "bg-gradient-to-r from-orange-500 to-red-500",
            "Leadership": "bg-gradient-to-r from-yellow-500 to-orange-500",
            "Development": "bg-gradient-to-r from-gray-500 to-slate-500",
            "Interview": "bg-gradient-to-r from-rose-500 to-pink-500",
            "Entertainment": "bg-gradient-to-r from-violet-500 to-purple-500",
            "3D": "bg-gradient-to-r from-cyan-500 to-blue-500"
        }
        return colors[category as keyof typeof colors] || "bg-gradient-to-r from-gray-500 to-gray-600"
    }

    const getTypeIcon = (type: string) => {
        const icons = {
            "Slide": "📊",
            "Article": "📝",
            "Video": "🎥",
            "Book": "📚",
            "Conference": "🎪",
            "Radio": "🎙️",
            "VR Model": "🥽"
        }
        return icons[type as keyof typeof icons] || "📄"
    }

    return (
        <section id="Works" className="section py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="section-title text-5xl font-bold text-gray-900 mb-6">
                        Featured <span className="text-gradient bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Works</span>
                    </h2>
                    <p className="section-subtitle text-xl text-gray-600 max-w-3xl mx-auto">
                        プロダクション環境での実践、登壇、執筆活動を通じて技術コミュニティに貢献
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {works.map((work, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getCategoryColor(work.category)}`}>
                                        {work.category}
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-white/90 text-gray-800 text-sm font-medium">
                                        {work.year}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 text-2xl">
                                    {getTypeIcon(work.type)}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="mb-3">
                                    <span className="text-primary-600 text-sm font-semibold tracking-wide uppercase">
                                        {work.type}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
                                    {work.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {work.subtitle}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {work.tags.slice(0, 3).map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={work.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors duration-200 group"
                                >
                                    View Details
                                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600">
                        More works available on{' '}
                        <a href="https://speakerdeck.com/fukubaka0825" className="text-primary-600 hover:text-primary-700 font-semibold">Speaker Deck</a>
                        {' '}and{' '}
                        <a href="https://medium.com/@fukubaka0825" className="text-primary-600 hover:text-primary-700 font-semibold">Medium</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Works