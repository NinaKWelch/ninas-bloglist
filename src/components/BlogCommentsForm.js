import React from 'react'
import { useField } from '../hooks'

const BlogCommentsForm = ({ handleCommentCreation }) => {
  const [comment, commentReset] = useField('text')

  const addComment = event => {
    event.preventDefault()

    handleCommentCreation({
      content: comment.value
    })

    commentReset()
  }

  return (
    <form onSubmit={addComment} id='new-comment-form'>
      <label>
        <input
          {...comment}
          name='Comment'
        />
      </label>

      <button type='submit'>Add Comment</button>
    </form>
  )
}

export default BlogCommentsForm
