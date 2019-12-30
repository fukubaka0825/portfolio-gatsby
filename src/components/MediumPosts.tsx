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

type MediumPostsProps = {
    posts: Post[]
    MediumUrl: string
}

const MediumPosts: React.FC<MediumPostsProps> = ({ posts, MediumUrl }) => {
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
        <section id="Medium">
            <h2>Medium(English)</h2>
            <ul className="alt">{items}</ul>
            <ul className="actions">
                <li>
                    <a href={MediumUrl} className="button">
                        Show More Items
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default MediumPosts
