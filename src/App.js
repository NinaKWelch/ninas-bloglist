import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'
import { initializeUser, loginUser, logoutUser } from './reducers/loginReducer'
import { setNotification } from './reducers/notificationReducer'

import loginService from './services/login'
import blogService from './services/blogs'

import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import Blogs from './components/Blogs'

import  { useField } from './hooks'

const App = props => {
  const [username] = useField('text')
  const [password] = useField('password')

  useEffect(() => {
    props.initializeBlogs()
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')

    if (loggedUserJSON) {
      let user = JSON.parse(loggedUserJSON)
      props.initializeUser(user)
    }
  }, [])

  console.log(props.user)

  const handleLogin = async event => {
    event.preventDefault()

    try {
      let user = await loginService.login({
        username: username.value,
        password: password.value
      })

      props.loginUser(user)
      props.setNotification(`Logged in as ${user.name}`)
    } catch (exception) {
      props.setNotification('Check username and password')
    }
  }

  const handleLogout = () => {
    props.logoutUser()
    props.setNotification(`${props.user.name} logged out`)
  }

  const addNewBlog = async blog => {
    const currentUser = {
      username: props.user.username
    }

    try {
      const newBlog = await blogService.create(blog)
      props.blogs.concat({ ...newBlog, user: currentUser })
      props.setNotification(`New Blog '${blog.title}' by ${blog.author} added`)
    } catch (exception) {
      props.setNotification('Blog not added: some information may be missing or incorrect')
    }
  }

  const appStyle = {
    boxSizing: 'border-box',
    width: '80%',
    margin: '0 auto'
  }

  return (
    <div style={appStyle}>
      <Notification />

      {props.user === null ?
        <LoginForm
          username={username}
          password={password}
          handleSubmit={handleLogin}
        /> :
        <Blogs
          handleLogout={handleLogout}
          user={props.user}
          handleBlogCreation={addNewBlog}
        />
      }
    </div>
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
  initializeUser,
  loginUser,
  logoutUser,
  setNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)