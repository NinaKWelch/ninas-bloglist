import React from 'react'
import { Box, Typography } from '@material-ui/core/'
import BlogCommentsForm from './BlogCommentsForm'
import BlogCommentsList from './BlogCommentsList'

const BlogComments = ({ comments, handleCommentCreation }) => (
  <Box>
    <Typography variant="h5" align="center" gutterBottom>
      Comments
    </Typography>

    <BlogCommentsForm handleCommentCreation={handleCommentCreation} />

    <BlogCommentsList comments={comments} />
  </Box>
)

export default BlogComments
