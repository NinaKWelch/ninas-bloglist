import React from 'react'
import { useField } from '../hooks'
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Box,
  Button
} from '@material-ui/core/'

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
      <FormControl fullWidth variant='outlined'>
        <InputLabel htmlFor='comment'>
          Write your comment here...
        </InputLabel>

        <OutlinedInput
          {...comment}
          name='Comment'
          id='comment'
          labelWidth={200}
          multiline
        />
      </FormControl>

      <Box textAlign='center' mt={2}>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='large'
        >
          Add Comment
        </Button>
      </Box>
    </form>
  )
}

export default BlogCommentsForm
