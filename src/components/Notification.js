import React from 'react'
import { connect } from 'react-redux'

const Notification = props => {
  const message = props.notification

  if (message === null) {
    return null
  }

  const messageStyle = {
    border: '1px solid green',
    color: 'green',
    padding: 5
  }

  return (
    <div style={messageStyle}>
      {message}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    notification: state.notification
  }
}

export default connect(
  mapStateToProps
)(Notification)