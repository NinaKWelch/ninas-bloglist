import React from 'react'

const Notification = ({ message }) => {

    if (message === null) {
        return null
    }

    return (
        <div className='error' 
             style={{ border: '1px solid red', color: 'red', padding: 5 }}
        >
          {message}        
        </div>
    )
}

export default Notification