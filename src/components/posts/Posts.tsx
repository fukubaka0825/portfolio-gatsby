import React from 'react'
import { Link } from 'gatsby'
import PostTags from './PostTags'

type node = {
    fields:{
        slug:string
    }
    id:string
    frontmatter:{
        title:string
        date:string
        tags:string[]
    }
    excerpt:string
}

type edges={
  node:node
}

type PostsProps = {
  data: edges[]
}

const Posts: React.FC<PostsProps> = ({ data }) => {
  return (
    <section id="blog">
      {data.map(( edges ) => {
        return (
          <div key={edges.node.id}>
            <div className='box'>
             <Link to={edges.node.fields.slug}>
              <h3>{edges.node.frontmatter.title}</h3>
            </Link>
            tags: <PostTags tags={edges.node.frontmatter.tags} />
            <p>{edges.node.excerpt}</p>
            <div >{edges.node.frontmatter.date}{' '}</div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Posts
