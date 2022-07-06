import React from 'react'
import clsx from 'clsx'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@material-ui/core'
import { BookmarkBorder as BookmarkBorderIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  allItems: {
    '&:hover .MuiAvatar-colorDefault': {
      backgroundColor: theme.palette.primary.main
    }
  },
  selectItems: {
    '&:hover .MuiAvatar-colorDefault': {
      backgroundColor: theme.palette.secondary.main
    }
  },
  avatar: {
    backgroundColor: theme.palette.grey[300]
  }
}))

const BlogList = ({ blogs, variant }) => {
  const classes = useStyles()

  const sortByMostLikes = arr => {
    arr.sort((a, b) => b.likes - a.likes)

    return blogs.map(blog => (
      <li key={blog.id}>
        <ListItem
          component={RouterLink}
          to={`/blogs/${blog.id}`}
          className={clsx(classes[variant])}
          button
        >
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <BookmarkBorderIcon />
            </Avatar>
          </ListItemAvatar>

          <ListItemText primary={blog.title} />
        </ListItem>
      </li>
    ))
  }

  return <List>{sortByMostLikes(blogs)}</List>
}

export default BlogList
