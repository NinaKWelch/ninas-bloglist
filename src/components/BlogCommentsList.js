import React from 'react'

const BlogCommentsList = ({ comments }) => {
  return (
    <ul style={{ paddingLeft: 0 }}>
      {comments.map(comment =>
        <li key={comment.id} style={{ marginLeft: 30 }}>
          {comment.content}
        </li>
      )}
    </ul>
  )
}

export default BlogCommentsList