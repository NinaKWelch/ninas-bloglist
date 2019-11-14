import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { SnackbarContent } from '@material-ui/core'
import { red, green } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[100],
    color: theme.palette.common.black
  },
  error: {
    backgroundColor: red[600],
    fontWeight: 500
  }
}))

const NotificationMessage = ({ message, variant }) => {
  const classes = useStyles()

  return (
    <SnackbarContent
      className={clsx(classes[variant])}
      message={message}
    />
  )
}

export default NotificationMessage