  
import React from 'react'
import Head from '../components/Head'
import Header from '../components/Header'
import Layout from '../components/layout'
import Posts from '../components/posts/Posts'

export default ({ data, pageContext }) => {
  const { posts, tagName } = pageContext

  return (
    <Layout>
      <Head />
      <Header user={data.site.siteMetadata.user} />
      <div id="main">
      <h1>Posts about "{tagName}"</h1>
      <Posts data={posts} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
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
  }
`
