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

  const sortByMostLikes = blogs => {
    blogs.sort((a, b) => b.likes - a.likes)

    return blogs.map(blog => (
      <ListItem
        button
        key={blog.id}
        to={`/blogs/${blog.id}`}
        component={RouterLink}
        className={clsx(classes[variant])}
      >
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <BookmarkBorderIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary={blog.title} />
      </ListItem>
    ))
  }

  return <List>{sortByMostLikes(blogs)}</List>
}

export default BlogList
