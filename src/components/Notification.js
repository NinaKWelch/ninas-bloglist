import React from 'react'

const Notification = ({ message}) => {
    if (message === null) {
        return null
    }

    const messageStyle = message.type !== 'error' 
      ? { border: '1px solid green', color: 'green', padding: 5 }
      : { border: '1px solid red', color: 'red', padding: 5 }


    return (
        <div style={messageStyle}>
          {message.text}        
        </div>
    )
}

export default Notification