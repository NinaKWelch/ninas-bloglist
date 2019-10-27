import React from 'react'

import BlogCommentsForm from './BlogCommentsForm'
import BlogCommentsList from './BlogCommentsList'

const BlogComments = ({ comments, handleCommentCreation }) => {
  return (
    <div>
      <h4>Comments</h4>

      <BlogCommentsForm handleCommentCreation={handleCommentCreation} />

      <BlogCommentsList comments={comments} />
    </div>
  )
}

export default BlogComments