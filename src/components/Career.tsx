import React from 'react'
import { createDateFormat } from '../lib/utils'

export type Post = {
  node: {
    id: string
    pubDate: string
    link: string
    title: string
  }
}

type BlogPostsProps = {
  posts: Post[]
  blogUrl: string
}

const BlogPosts: React.FC<BlogPostsProps> = ({ posts, blogUrl }) => {
  const items = posts.map(post => {
    const { id, pubDate, link, title } = post.node
    const createdAt = createDateFormat(pubDate, 'YYYY-MM-DD')

    return (
      <li key={id}>
        {createdAt}
        <a className="item-title" href={link}>
          {title}
        </a>
      </li>
    )
  })

  return (
    <section id="blog">
      <h2>Career</h2>
      <ul className="alt">
          <li key={id}>
              <a href={url}>{name}</a>
              <br />
              <span>
          <li text={description} />
        </span>
          </li>
      </ul>
      <ul className="actions">
        <li>
          <a href={blogUrl} className="button">
            Show More Items
          </a>
        </li>
      </ul>
    </section>
  )
}

export default BlogPosts
