import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import QiitaItems, { Post as QiitaPost } from '../components/QiitaItems'
import Header from '../components/Header'
import BlogPosts, { Post as BlogPost } from '../components/BlogPosts'
import NotePosts, { Post as NotePost } from '../components/NotePosts'
import MediumPosts, { Post as MediumPost } from '../components/MediumPosts'
import DevToPosts, { Post as DevToPost } from '../components/DevToPosts'
import GitHubRepos, { Repo } from '../components/GitHubRepos'
import Head from '../components/Head'
import Works  from '../components/Works'
import Language  from '../components/Language'
import Certification from '../components/Certification'
import Contribution from '../components/Contribution'
import Career from '../components/Career'
import Education from '../components/Education'
import Interest from '../components/Interest'
import Strengths from '../components/Strengths'

type User = {
  name: string
  github: string
  twitter: string
  qiita: string
  speaker_deck: string
  facebook: string
  linkedin: string
}

type Skill = {
  type: string
  level: number
}

type HomeIndexProps = {
  data: {
    allQiitaPost: {
      edges: QiitaPost[]
    }
    allFeedBlogPosts: {
      edges: BlogPost[]
    }
    allFeedNotePosts: {
      edges: NotePost[]
    }
    allFeedMediumPosts: {
      edges: MediumPost[]
    }
    allFeedDevToPosts: {
      edges: DevToPost[]
    }
    allGithubData: {
      edges: [
        {
          node: {
            data: {
              allGithubData: {
                edges: Repo[]
              }
            }
          }
        }
      ]
    }
    site: {
      siteMetadata: {
        user: User
        skills: Skill[]
        blog: {
          url: string
        }
        note: {
          url: string
        }
        medium: {
          url: string
        }
        devto: {
          url: string
        }
      }
    }
  }
}

const HomeIndex: React.FC<HomeIndexProps> = ({ data }) => {
  const qiitaPosts = data.allQiitaPost.edges.filter(function (item, index) {
    return (index <= 9);
  });
  const blogPosts = data.allFeedBlogPosts.edges.filter(function (item, index) {
    return (index <= 4);
  });
  const notePosts = data.allFeedNotePosts.edges.filter(function (item, index) {
    return (index <= 4);
  });
  const mediumPosts = data.allFeedMediumPosts.edges.filter(function (item, index) {
    return (index <= 4);
  });
  const devToPosts = data.allFeedDevToPosts.edges.filter(function (item, index) {
    return (index <= 4);
  });

  const repos = data.allGithubData.edges[0].node.data.allGithubData.edges

  const {user, skills, blog, note , medium, devto} = data.site.siteMetadata

  return (
    <Layout>
      <Head />
      <Header user={user} />
      <div id="main">
        <Interest/>
        <Career/>
        <Strengths/>
        <Contribution/>
        {repos && repos.length > 0 && (
          <GitHubRepos repos={repos} user={user.github} />
        )}
        <Works/>
        <Language/>
        <Education/>
        {devToPosts && devToPosts.length > 0 && (
            <DevToPosts posts={devToPosts} DevToUrl={devto.url} />
        )}
        {mediumPosts && mediumPosts.length > 0 && (
            <MediumPosts posts={mediumPosts} MediumUrl={medium.url} />
        )}
        {blogPosts && blogPosts.length > 0 && (
            <BlogPosts posts={blogPosts} blogUrl={blog.url} />
        )}
        {qiitaPosts && qiitaPosts.length > 0 && (
            <QiitaItems posts={qiitaPosts} user={user.qiita} />
        )}
        {notePosts && notePosts.length > 0 && (
            <NotePosts posts={notePosts} NoteUrl={note.url} />
        )}
        <Certification/>
      </div>
    </Layout>
  )
}

export default HomeIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        skills {
          type
          level
        }
        blog {
          url
        }
        note {
          url
        }
        medium {
          url
        }
        devto {
          url
        }
        user {
          name
          github
          qiita
          speaker_deck
          twitter
          twitter_vr
          facebook
          linkedin
        }
      }
    }
    allQiitaPost{
      edges {
        node{
          id
          title
          url
          created_at
        }
      }
    }
    allFeedBlogPosts {
      edges {
        node {
          id
          title
          link
          pubDate
        }
      }
    }
    allFeedNotePosts {
      edges {
        node {
          id
          title
          link
          pubDate
        }
      }
    }
    allFeedMediumPosts {
      edges {
        node {
          id
          title
          link
          pubDate
        }
      }
    }
    allFeedDevToPosts {
      edges {
        node {
          id
          title
          link
          pubDate
        }
      }
    }
    allGithubData {
      edges {
        node {
          data {
            allGithubData {
              edges {
                node {
                  id
                  name
                  description
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
