  
import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/Head'
import Header from '../components/Header'
import Layout from '../components/layout'

export default ({ data, pageContext }) => {
  return (
    <Layout>
      <Head />
      <Header user={data.site.siteMetadata.user} />
      <div id="main">
      <h1>List of Tags</h1>
      <ul>
        {pageContext.tags.map(tag => {
          const path = `/tags/${tag}`

          return (
            <li key={tag}>
              <Link to={path}>{tag}</Link>
            </li>
          )
        })}
      </ul>
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
