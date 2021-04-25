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

type NotePostsProps = {
  posts: Post[]
  NoteUrl: string
}

const NotePosts: React.FC<NotePostsProps> = ({ posts, NoteUrl }) => {
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
    <section id="Note">
      <h2>:postbox: note(Japanese)</h2>
      <ul className="alt">{items}</ul>
      <ul className="actions">
        <li>
          <a href={NoteUrl} className="button">
            Show More Items
          </a>
        </li>
      </ul>
    </section>
  )
}

export default NotePosts
