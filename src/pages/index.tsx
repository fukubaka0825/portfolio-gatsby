import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import QiitaItems, { Post as QiitaPost } from '../components/QiitaItems'
import Header from '../components/Header'
import BlogPosts, { Post as BlogPost } from '../components/BlogPosts'
import NotePosts, { Post as NotePost } from '../components/NotePosts'
import MediumPosts, { Post as MediumPost } from '../components/MediumPosts'
import DevToPosts, { Post as DevToPost } from '../components/DevToPosts'
import Head from '../components/Head'
import Works  from '../components/Works'
import Language  from '../components/Language'
import Certification from '../components/Certification'
import Contribution from '../components/Contribution'
import Career from '../components/Career'
import Education from '../components/Education'
import Interest from '../components/Interest'
import FreelanceInfo from '../components/FreelanceInfo'

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
    allFeedQiitaPosts?: {
      edges: QiitaPost[]
    }
    allFeedBlogPosts?: {
      edges: BlogPost[]
    }
    allFeedNotePosts?: {
      edges: NotePost[]
    }
    allFeedMediumPosts?: {
      edges: MediumPost[]
    }
    allFeedDevToPosts?: {
      edges: DevToPost[]
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
  const qiitaPosts = data.allFeedQiitaPosts?.edges?.filter(function (item, index) {
    return (index <= 9);
  }) || [];
  const blogPosts = data.allFeedBlogPosts?.edges?.filter(function (item, index) {
    return (index <= 4);
  }) || [];
  const notePosts = data.allFeedNotePosts?.edges?.filter(function (item, index) {
    return (index <= 4);
  }) || [];
  const mediumPosts = data.allFeedMediumPosts?.edges?.filter(function (item, index) {
    return (index <= 4);
  }) || [];
  const devToPosts = data.allFeedDevToPosts?.edges?.filter(function (item, index) {
    return (index <= 4);
  }) || [];

  const {user, skills, blog, note , medium, devto} = data.site.siteMetadata

  return (
    <Layout>
      <Head />
      <Header user={user} />
      <div id="main">
        <Interest/>
        <FreelanceInfo/>
        <Career/>
        <Works/>
        <Contribution/>
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
          facebook
          linkedin
        }
      }
    }
  }
`
