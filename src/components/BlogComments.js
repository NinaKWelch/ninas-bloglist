import React from 'react'

const BlogComments = ({ comments }) => {
  return (
    <ul style={{ paddingLeft: 0 }}>
      <h4>Comments</h4>

      {comments.map(comment =>
        <li key={comment.id} style={{ marginLeft: 30 }}>
          {comment.content}
        </li>
      )}
    </ul>
  )
}

export default BlogComments