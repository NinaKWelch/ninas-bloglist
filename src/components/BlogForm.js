import React from 'react'
import { useField } from '../hooks'
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Button
} from '@material-ui/core'
import { Create as CreateIcon } from '@material-ui/icons'

const BlogForm = ({ handleBlogCreation }) => {
  const [title, titleReset] = useField('text')
  const [author, authorReset] = useField('text')
  const [url, urlReset] = useField('text')

  const addBlog = event => {
    event.preventDefault()

    handleBlogCreation({
      title: title.value,
      author: author.value,
      url: url.value
    })

    titleReset()
    authorReset()
    urlReset()
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Create New
        </Typography>

        <form onSubmit={addBlog} id="new-blog-form">
          <Box mt={2} mx={2} mb={3}>
            <TextField
              {...title}
              name="Title"
              label="Title"
              fullWidth
              required
            />

            <TextField
              {...author}
              name="Author"
              label="Author"
              fullWidth
              required
            />

            <TextField {...url} name="Url" label="Url" fullWidth required />
          </Box>

          <Typography component="div" align="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<CreateIcon />}
            >
              Create
            </Button>
          </Typography>
        </form>
      </CardContent>
    </Card>
  )
}

export default BlogForm
