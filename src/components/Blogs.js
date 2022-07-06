import React from 'react'
import { Container, Box, Typography } from '@material-ui/core'
import Togglable from './Togglable'
import BlogForm from './BlogForm'
import BlogList from './BlogList'

const Blogs = ({ blogs, handleBlogCreation }) => (
  <Container maxWidth="sm">
    <Box mt={4} mb={3} pt={4}>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        color="primary"
        gutterBottom
      >
        Blogs
      </Typography>
    </Box>

    <Togglable buttonLabel="Add New Blog">
      <BlogForm handleBlogCreation={handleBlogCreation} />
    </Togglable>

    <BlogList blogs={blogs} variant="allItems" />
  </Container>
)

export default Blogs
