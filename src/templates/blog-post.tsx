import React from 'react'
import { graphql } from 'gatsby'
import Head from '../components/Head'
import Header from '../components/Header'
import Layout from '../components/layout'
import PostTags from '../components/posts/PostTags'

type User = {
  name: string
  github: string
  twitter: string
  qiita: string
  speaker_deck: string
  facebook: string
  linkedin: string
}

type BlogPostProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        user: User
      }
    }
    markdownRemark: {
      id: string
      excerpt: string
      html: string
      frontmatter: {
        title: string
        date: string
        tags: string[]
      }
    }
  }
  pageContext: {
    previous: any
    next: any
  }
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Head />
      <Header user={data.site.siteMetadata.user} />
      <div id="main">
      <div>
        <span className="datetime">{post.frontmatter.date}</span>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <p>
          <h4>Tags</h4>: <PostTags tags={post.frontmatter.tags} />
        </p>
      </div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        user {
          name
          github
          qiita
          twitter
          facebook
          linkedin
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
      }
    }
  }
`
