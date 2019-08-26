import React, { useState, useEffect } from 'react'

import loginService from './services/login'
import blogService from './services/blogs'

import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import Blogs from './components/Blogs'

import  { useField } from './hooks'

const App = () => {
  const [username] = useField('text')
  const [password] = useField('password')

  const [message, setMessage] = useState(null)
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
        username: username.value,
        password: password.value
      })

      window.localStorage.setItem(
        'loggedBloglistUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
      handleMessage(`Logged in as ${user.name}`, 'success')
    } catch (exception) {
      handleMessage('Check username and password', 'error')
    }
  }

  const handleLogout = async () => {
    try {
      setUser(null)
      blogService.destroyToken()
      await window.localStorage.removeItem('loggedBloglistUser')
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
        setBlogs(blogs.filter(blog => blog.id !== id))
        handleMessage(`'${blog.title}' has been removed`, 'success')
      }
    } catch (exception) {
      handleMessage('Blog not deleted', 'error')
    }
  }

  const updateBlog = async blog => {
    const likedBlog = { ...blog, likes: blog.likes + 1 }
    const id = blog.id

    try {
      const updatedBlog = await blogService.update(likedBlog)

      setBlogs(blogs.map(blog => blog.id === id ? updatedBlog : blog))
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