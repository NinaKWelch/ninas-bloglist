const notificationReducer = (state = null, action) => {
  switch (action.type) {
  case 'SHOW':
    return action.data
  case 'HIDE':
    return null
  default:
    return state
  }
}

export const setNotification = message => {
  return dispatch => {
    dispatch({
      type: 'SHOW',
      data: message
    })
    setTimeout(() => {
      dispatch({
        type: 'HIDE'
      })
    }, 5000)
  }
}

export default notificationReducer