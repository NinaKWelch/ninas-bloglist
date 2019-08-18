import React, { useState, useEffect } from 'react'

import loginService from './services/login'
import blogService from './services/blog'

import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import Blogs from './components/Blogs'

const App = () => {
  const [message, setMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService
      .getAll()
      .then(initialBlogs => {
        setBlogs(initialBlogs)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleMessage = (text, type) => {
    const message = {
      text,
      type
    }

    setMessage(message)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password
      })

      window.localStorage.setItem(
        'loggedBloglistUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      handleMessage(`Logged in as ${user.name}`, 'success')
    } catch (exception) {
      handleMessage('Check username and password', 'error')
    }
  }

  const handleLogout = async () => {
    try {
      await window.localStorage.clear()
      setUser(null)
      handleMessage(`${user.name} logged out`, 'success')
    } catch (exception) {
      handleMessage('Logout error', 'error')
    }
  }

  const addNewBlog = async blog => {
    const currentUser = {
      username: user.username
    }

    try {
      const newBlog = await blogService.create(blog)
      setBlogs(blogs.concat({ ...newBlog, user: currentUser }))
      handleMessage(
        `New Blog '${blog.title}' by ${blog.author} added`, 'success'
      )
    } catch (exception) {
      handleMessage(
        'Blog not added: some information may be missing or incorrect', 'error'
      )
    }
  }

  const deleteBlog = async blog => {
    const id = blog.id
    const confirmRemoveBlog = window.confirm(
      `Remove '${blog.title}?' by ${blog.author}`
    )

    try {
      if (confirmRemoveBlog) {
        await blogService.remove(id)
        handleMessage(`'${blog.title}' has been removed`, 'success')
        setBlogs(blogs.filter(blog => blog.id !== id))
      }
    } catch (exception) {
      handleMessage('Blog not deleted', 'error')
    }
  }

  const updateBlog = async blog => {
    const id = blog.id

    try {
      await blogService.update(id, blog)
      setBlogs(blogs.map(
        blog => blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog)
      )
      handleMessage(`New like added for ${blog.title}`, 'success')
    } catch (exception) {
      handleMessage('Blog update unsuccessful', 'error')
    }
  }

  const appStyle = {
    boxSizing: 'border-box',
    width: '80%',
    margin: '0 auto'
  }

  return (
    <div style={appStyle}>
      <Notification message={message} />

      {user === null ?
        <LoginForm
          username={username}
          password={password}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
          handleSubmit={handleLogin}
        /> :
        <Blogs
          handleLogout={handleLogout}
          blogs={blogs}
          user={user}
          handleBlogCreation={addNewBlog}
          handleBlogUpdate={updateBlog}
          handleBlogDeletion={deleteBlog}
        />
      }
    </div>
  )
}

export default App