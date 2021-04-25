require('dotenv').config()
const querystring = require('querystring')
const path = require('path')

const siteMetadata = {
  title: "Takashi Narikawa - @fukubaka0825 / @wapper0825",
  author: "Takashi Narikawa/wapper",
  description: "Nari/wapper's portfolio site",
  siteUrl: 'https://www.fukubaka0825.dev',
  siteLanguage: 'en',
  shortName: 'nari',
  skills: [
    { type: 'AWS', level: 80 },
    { type: 'Terraform', level: 70 },
    { type: 'Go', level: 70 },
    { type: 'Docker', level: 70 },
    { type: 'ShellScript', level: 70 },
    { type: 'Redis', level: 60 },
    { type: 'Nginx', level: 60 },
    { type: 'Mysql', level: 60 },
    { type: 'Fluentd', level: 50 },
    { type: 'Java', level: 50 },
    { type: 'Elasticsearch', level: 40 },
    { type: 'Ruby', level: 30 },
    { type: 'ROR', level: 30 },
    { type: 'TypeScript', level: 30 },
  ],
  user: {
    name: 'Takashi Narikawa',
    github: 'fukubaka0825',
    qiita: 'fukubaka0825',
    speaker_deck: 'fukubaka0825',
    twitter: 'fukubaka0825',
    twitter_vr: 'wapper0825',
    facebook: 'fukubaka0825',
    linkedin: 'takashi-narikawa-889a51187',
  },
  blog: {
    url: 'https://fukubaka0825.hatenablog.com/',
    feed_url: 'https://fukubaka0825.hatenablog.com/rss',
    article_count: '5'
  },
  medium: {
    url: 'https://medium.com/@fukubaka0825/',
    feed_url: 'https://medium.com/feed/@fukubaka0825',
    article_count: '5'
  },
  note: {
    url: 'https://note.com/fukubaka/',
    feed_url: 'https://note.com/fukubaka/rss',
    article_count: '5'
  },
  github: {
    topic: 'my-portfolio'
  },
  speaker_deck: {
    slides_count: '6'
  }
}

const qs = querystring.stringify({
  rss_url: `https://speakerdeck.com/${siteMetadata.user.speaker_deck}.atom`,
  count: siteMetadata.speaker_deck.slides_count,
  api_key: process.env.RSS2JSON_API_TOKEN
})

module.exports = {
  pathPrefix: `/`,
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: '/',
        background_color: '#08033d',
        theme_color: '#08033d',
        display: 'minimal-ui',
        icon: 'src/assets/images/nari-wapper.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path.join(__dirname, `contents`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          // `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-source-qiita`,
      options: {
        accessToken: process.env.QIITA_API_TOKEN,
        userName: siteMetadata.user.qiita,
        fetchPrivate: false,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: siteMetadata.blog.feed_url,
        name: `BlogPosts`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: siteMetadata.note.feed_url,
        name: `NotePosts`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: siteMetadata.medium.feed_url,
        name: `MediumPosts`,
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: `https://api.rss2json.com/v1/api.json?${qs}`,
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        name: 'Slides'
      }
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_API_TOKEN,
        graphQLQuery: `
        query ($q: String="", $nFirst: Int=0) {
          allGithubData: search(query: $q, type: REPOSITORY, first: $nFirst) {
            edges {
              node {
                ... on Repository {
                  id
                  name
                  description
                  url
                }
              }
            }
          }
        }
        `,
        variables: {
          q: `topic:${siteMetadata.github.topic} user:${siteMetadata.user.github}`,
          nFirst: 10
        }
      }
    },
    `gatsby-plugin-typescript`
  ],
}
