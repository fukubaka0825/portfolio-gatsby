import React from 'react'
import { graphql } from 'gatsby'
import Head from '../components/Head'
import Header from '../components/Header'
import Layout from '../components/layout'
import Posts from '../components/posts/Posts'

type User = {
  name: string
  github: string
  twitter: string
  qiita: string
  facebook: string
  linkedin: string
}

type node = {
  fields: {
    slug: string
  }
  id: string
  frontmatter: {
    title: string
    date: string
    tags: string[]
  }
  excerpt: string
}

type edges={
    node:node
}

type PostsProps = {
  data: {
    allMarkdownRemark: {
      edges: edges[]
    }
    site: {
        siteMetadata: {
          user: User
        }
      }
  }
}


const Blogs: React.FC<PostsProps> = ({ data }) => {

  return (
    <Layout>
      <Head />
      <Header user={data.site.siteMetadata.user} />
      <div id="main">
      <Posts data={data.allMarkdownRemark.edges} />
      </div>
    </Layout>
  )
}

export default Blogs

export const query = graphql`
  query {
    site {
      siteMetadata {
        user {
          name
          github
          twitter
          qiita
          facebook
          linkedin
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          excerpt(pruneLength:100)
        }
      }
    }
  }
`
