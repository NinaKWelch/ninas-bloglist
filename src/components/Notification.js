import React from 'react'
import { connect } from 'react-redux'
import { Snackbar } from '@material-ui/core'
import NotificationMessage from './NotificationMessage'

const Notification = ({ notification }) => {
  if (notification === null) {
    return null
  }

  return (
    <Snackbar
      open
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
    >
      <NotificationMessage
        message={notification.message}
        variant={notification.variant}
      />
    </Snackbar>
  )
}

const mapStateToProps = state => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Notification)
