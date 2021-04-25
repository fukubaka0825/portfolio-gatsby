import React from 'react'
import { Link } from 'gatsby'

type PostsTagsProps = {
    tags:string[]
}
const PostsTags: React.FC<PostsTagsProps> = ({ tags }) => {

    return (
        <>
          {tags.map((tag, index) => {
            let separator = ', '
            if (index + 1 === tags.length) {
              separator = ''
            }
            return (
              <span key={tag}>
                <Link to={`tags/${tag}`}>{tag}</Link>
                {separator}
              </span>
            )
          })}
        </>
      )
}

export default PostsTags