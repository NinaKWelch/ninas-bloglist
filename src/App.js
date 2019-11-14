import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { useField } from './hooks'
import loginService from './services/login'

import { initializeBlogs } from './reducers/blogReducer'
import { initializeUsers } from './reducers/userReducer'
import { initializeUser, loginUser } from './reducers/loginReducer'
import { setNotification } from './reducers/notificationReducer'

import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import BlogApp from './components/BlogApp'

const App = props => {
  const [username] = useField('text')
  const [password] = useField('password')

  const {
    initializeBlogs,
    initializeUsers,
    initializeUser,
    setNotification,
    loginUser,
    user,
    blogs
  } = props

  useEffect(() => {
    initializeBlogs()
  }, [initializeBlogs])

  useEffect(() => {
    initializeUsers()
  }, [initializeUsers, blogs])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')

    if (loggedUserJSON) {
      let user = JSON.parse(loggedUserJSON)
      initializeUser(user)
    }
  }, [initializeUser])

  const login = async event => {
    event.preventDefault()

    try {
      let user = await loginService.login({
        username: username.value,
        password: password.value
      })

      loginUser(user)
      setNotification(`Hi ${user.name}, welcome back!`, 'success')
    } catch (exception) {
      setNotification('Check username and password', 'error')
    }
  }

  return (
    <Router>
      <div>
        <Notification />

        {user === null ?
          <LoginForm
            username={username}
            password={password}
            handleSubmit={login}
          /> :
          <BlogApp />
        }
      </div>
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    blogs: state.blogs
  }
}

const mapDispatchToProps = {
  initializeBlogs,
  initializeUsers,
  initializeUser,
  setNotification,
  loginUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
