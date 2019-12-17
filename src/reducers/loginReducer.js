import blogService from '../services/blogs'

const reducer = (state = null, action) => {
  console.log('ACTION:', action)

  switch (action.type) {
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return null
    default:
      return state
  }
}

export const initializeUser = user => {
  return dispatch => {
    blogService.setToken(user.token)

    dispatch({
      type: 'LOGIN',
      data: user
    })
  }
}

export const loginUser = user => {
  return dispatch => {
    window.localStorage.setItem('loggedBloglistUser', JSON.stringify(user))
    blogService.setToken(user.token)

    dispatch({
      type: 'LOGIN',
      data: user
    })
  }
}

export const logoutUser = () => {
  return dispatch => {
    window.localStorage.removeItem('loggedBloglistUser')
    blogService.destroyToken()

    dispatch({
      type: 'LOGOUT'
    })
  }
}

export default reducer
