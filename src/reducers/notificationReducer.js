const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SHOW':
      console.log(action.data)
      return action.data
    case 'HIDE':
      return null
    default:
      return state
  }
}

export const setNotification = (message, variant) => {
  const newMessage = { message, variant }

  return dispatch => {
    dispatch({
      type: 'SHOW',
      data: newMessage
    })
    setTimeout(() => {
      dispatch({
        type: 'HIDE'
      })
    }, 5000)
  }
}

export default notificationReducer
