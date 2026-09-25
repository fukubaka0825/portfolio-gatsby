import type { ImageMetadata } from 'astro'
import aiAgent from '~/assets/works/ai-agent-webinar.png'
import bedrock from '~/assets/works/bedrock-webinar.png'
import buildersFlash from '~/assets/works/builders-flash.png'
import e34 from '~/assets/works/e34fm.png'
import infraCareer from '~/assets/works/infra-career-lounge.png'
import langfuse from '~/assets/works/langfuse-night.png'
import shiganai from '~/assets/works/shiganai.png'
import slackbot from '~/assets/works/slackbot-book.jpg'
import sreLounge from '~/assets/works/sre-lounge.png'
import sreNextChair from '~/assets/works/sre-next-chair.jpg'
import sreNext from '~/assets/works/sre-next-session.png'
import vroid from '~/assets/works/vroid.png'

export type WorkKind = 'Talk' | 'Article' | 'Organizer' | 'Book' | 'Podcast' | 'Video' | '3D'

export type Work = {
  title: string
  venue: string
  year: number
  kind: WorkKind
  url: string
  image: ImageMetadata
}

export const works: Work[] = [
  {
    title: 'ペアーズにおける評価ドリブンな AI Agent 開発のご紹介',
    venue: 'AWS ウェビナー',
    year: 2025,
    kind: 'Talk',
    url: 'https://speakerdeck.com/fukubaka0825/heasuniokeruping-jia-torihunna-ai-agent-kai-fa-nokoshao-jie',
    image: aiAgent,
  },
  {
    title: 'ペアーズでの、Langfuseを中心とした評価ドリブンなリリースサイクルのご紹介',
    venue: 'Langfuse Night #1',
    year: 2025,
    kind: 'Talk',
    url: 'https://speakerdeck.com/fukubaka0825/peazudeno-langfusewozhong-xin-tositaping-jia-doribunnaririsusaikurunogoshao-jie',
    image: langfuse,
  },
  {
    title: 'ペアーズにおけるAmazon Bedrockを用いた障害対応支援 生成AIツールの導入事例',
    venue: 'AWS ウェビナー',
    year: 2024,
    kind: 'Talk',
    url: 'https://speakerdeck.com/fukubaka0825/peazuniokeruamazon-bedrockwo-itazhang-hai-dui-ying-yuan-cheng-aiturunodao-shi-li-at-20241115pei-xin-awsuebinadeng-tan',
    image: bedrock,
  },
  {
    title: 'Amazon Bedrock を用いた障害対応報告書とポストモーテム文書自動作成',
    venue: 'AWS builders.flash',
    year: 2024,
    kind: 'Article',
    url: 'https://aws.amazon.com/jp/builders-flash/202410/automated-Incident-reports-and-post-mortem/',
    image: buildersFlash,
  },
  {
    title: 'Steps toward self-service operations in eureka',
    venue: 'SRE NEXT 2022',
    year: 2022,
    kind: 'Talk',
    url: 'https://sre-next.dev/2022/schedule#jp51',
    image: sreNext,
  },
  {
    title: 'SRE NEXT 2022 の Conference Chair',
    venue: 'SRE NEXT 2022',
    year: 2022,
    kind: 'Organizer',
    url: 'https://sre-next.dev/2022/',
    image: sreNextChair,
  },
  {
    title: '「SREの探求」のすゝめ',
    venue: 'SRE Lounge #13',
    year: 2022,
    kind: 'Video',
    url: 'https://youtu.be/_hfRB_uVqOM?t=401',
    image: sreLounge,
  },
  {
    title: 'SRE NEXT 2022に学ぶこれからのSREキャリア',
    venue: 'Infra Career Lounge #3',
    year: 2022,
    kind: 'Talk',
    url: 'https://speakerdeck.com/fukubaka0825/sre-next-2022nixue-bukorekarafalsesrekiyaria',
    image: infraCareer,
  },
  {
    title: 'SRE NEXT 2022 with fukubaka0825',
    venue: 'e34.fm #16',
    year: 2022,
    kind: 'Podcast',
    url: 'https://e34.fm/16/',
    image: e34,
  },
  {
    title: 'VRoid モデル wapper 🍔',
    venue: 'VRoid Hub',
    year: 2021,
    kind: '3D',
    url: 'https://hub.vroid.com/characters/3188723872963240740/models/2207386033305627317',
    image: vroid,
  },
  {
    title: 'How a band member became a fun SRE',
    venue: 'shiganai.org sp.78',
    year: 2020,
    kind: 'Podcast',
    url: 'https://shiganai.org/ep/sp78-fukubaka0825',
    image: shiganai,
  },
  {
    title: 'Introduction of SlackBot with Go and AWS CDK',
    venue: '技術書典7',
    year: 2019,
    kind: 'Book',
    url: 'https://fukubaka.booth.pm/items/1569932',
    image: slackbot,
  },
]
