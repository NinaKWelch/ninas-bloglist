import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core/'
import { Comment as CommentIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  avatar: {
    color: theme.palette.grey[400]
  }
}))

const BlogCommentsList = ({ comments }) => {
  const classes = useStyles()

  return (
    <List>
      {comments.map(comment =>
        <ListItem key={comment.id}>
          <ListItemIcon>
            <CommentIcon className={classes.avatar} />
          </ListItemIcon>

          <ListItemText primary={comment.content} />
        </ListItem>
      )}
    </List>
  )
}
export default BlogCommentsList