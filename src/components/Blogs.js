import React from 'react'
import Togglable from './Togglable'
import BlogForm from './BlogForm'
import BlogList from './BlogList'

import { Container, Box, Typography } from '@material-ui/core'

const Blogs = ({ blogs, handleBlogCreation }) => (
  <Container maxWidth='sm'>
    <Box mt={4} mb={3}>
      <Typography
        variant='h3'
        align='center'
        color='primary'
        gutterBottom
      >
        Blogs
      </Typography>
    </Box>

    <Togglable buttonLabel='Add New Blog'>
      <BlogForm handleBlogCreation={handleBlogCreation} />
    </Togglable>

    <BlogList blogs={blogs} variant={'allItems'} />
  </Container>
)

export default Blogs
