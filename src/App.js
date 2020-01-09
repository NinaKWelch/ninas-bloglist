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

  const { user, users, blogs } = props

  useEffect(() => {
    props.initializeBlogs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    props.initializeUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogs])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')

    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      props.initializeUser(loggedUser)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const login = async event => {
    event.preventDefault()

    try {
      const newUser = await loginService.login({
        username: username.value,
        password: password.value
      })

      props.loginUser(newUser)
      props.setNotification(`Hi ${newUser.name}, welcome back!`, 'success')
    } catch (exception) {
      props.setNotification('Check username and password', 'error')
    }
  }

  return (
    <Router>
      <div>
        <Notification />

        {user === null ? (
          <LoginForm
            username={username}
            password={password}
            handleSubmit={login}
          />
        ) : (
          <BlogApp user={user} users={users} blogs={blogs} />
        )}
      </div>
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users,
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
