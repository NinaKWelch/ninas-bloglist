import React from 'react'
import { Container, Box, Typography } from '@material-ui/core'
import BlogList from './BlogList'
import NoMatch from './NoMatch'

const User = ({ user }) => {
  if (user === undefined) {
    return <NoMatch />
  }

  return (
    <Container maxWidth="sm">
      <Box mt={4} pt={4}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          color="secondary"
          gutterBottom
        >
          {user.name}
        </Typography>
      </Box>

      <Typography variant="h5" component="h3" align="center" gutterBottom>
        Added Blogs
      </Typography>

      {user.blogs.length === 0 ? (
        <Typography variant="body1" align="center">
          No blogs as yet.
        </Typography>
      ) : (
        <BlogList blogs={user.blogs} variant="selectItems" />
      )}
    </Container>
  )
}

export default User
