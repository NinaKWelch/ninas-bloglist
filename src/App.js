import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'
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

  const [user, setUser] = useState(null)

  useEffect(() => {
    props.initializeBlogs()
  }, [props])

  const blogs = props.blogs

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value
      })

      window.localStorage.setItem(
        'loggedBloglistUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
      props.setNotification(`Logged in as ${user.name}`)
    } catch (exception) {
      props.setNotification('Check username and password')
    }
  }

  const handleLogout = async () => {
    try {
      setUser(null)
      blogService.destroyToken()
      await window.localStorage.removeItem('loggedBloglistUser')
      props.setNotification(`${user.name} logged out`)
    } catch (exception) {
      props.setNotification('Logout error')
    }
  }

  const addNewBlog = async blog => {
    const currentUser = {
      username: user.username
    }

    try {
      const newBlog = await blogService.create(blog)
      blogs.concat({ ...newBlog, user: currentUser })
      //setBlogs(blogs.concat({ ...newBlog, user: currentUser }))
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

      {user === null ?
        <LoginForm
          username={username}
          password={password}
          handleSubmit={handleLogin}
        /> :
        <Blogs
          handleLogout={handleLogout}
          user={user}
          handleBlogCreation={addNewBlog}
        />
      }
    </div>
  )
}

const mapDispatchToProps = {
  initializeBlogs,
  setNotification
}

export default connect(
  null,
  mapDispatchToProps
)(App)