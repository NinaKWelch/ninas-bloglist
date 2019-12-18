import React from 'react'
import { connect } from 'react-redux'

import {
  Container,
  CardActionArea,
  Typography,
  Card,
  CardContent,
  CardActions,
  Fab
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import { FavoriteBorder as FavoriteBorderIcon } from '@material-ui/icons'
import { updateLikes, createComment } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'

import BlogComments from './BlogComments'
import NoMatch from './NoMatch'

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4)
  },
  actions: {
    justifyContent: 'space-between',
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.grey[200]
  },
  button: {
    marginLeft: theme.spacing(2),
    backgroundColor: '#eb928a',
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: '#e64a19'
    }
  }
}))

const Blog = props => {
  const classes = useStyles()
  const { blog } = props

  const addLikes = () => {
    props.updateLikes({
      ...blog,
      user: blog.user.id
    })

    props.setNotification(`New like added for '${blog.title}'`, 'success')
  }

  const addComment = comment => {
    props.createComment(comment, blog.id)

    const num = comment.content.length

    if (num < 2) {
      props.setNotification('Comment too short', 'error')
    }
    props.setNotification(`New comment added for '${blog.title}'`, 'success')
  }

  if (blog === undefined) {
    return <NoMatch />
  }

  return (
    <Container maxWidth="sm">
      <Card className={classes.card}>
        <CardActionArea href={blog.url}>
          <CardContent>
            <Typography variant="h5" component="h3" align="center" gutterBottom>
              {blog.title}
            </Typography>

            <Typography
              variant="subtitle1"
              component="h4"
              color="textSecondary"
              align="center"
            >
              by {blog.author}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className={classes.actions}>
          <Typography variant="body1">
            Added by <strong>{blog.user.name}</strong>
          </Typography>

          <Typography componenet="div">
            {blog.likes} Likes
            <Fab
              onClick={() => addLikes()}
              size="medium"
              aria-label="add like"
              className={classes.button}
            >
              <FavoriteBorderIcon />
            </Fab>
          </Typography>
        </CardActions>
      </Card>

      <BlogComments
        comments={blog.comments}
        handleCommentCreation={addComment}
      />
    </Container>
  )
}

const mapDispatchToProps = {
  updateLikes,
  createComment,
  setNotification
}

export default connect(null, mapDispatchToProps)(Blog)
