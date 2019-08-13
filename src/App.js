import React, { useState, useEffect } from 'react'

import loginService from './services/login'
import blogService from './services/blog'

import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import BlogList from './components/BlogList'

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null)
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
    }
  }, [])

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

      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = async event => {
    try {
      window.localStorage.clear()
      setUser(null)
    } catch (exception) {
      setErrorMessage('Logut failed')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const appStyle = {
    boxSizing: 'border-box',
    width: '80%',
    margin: '0 auto'
  }

  return (
    <div style={appStyle}>
      <Notification message={errorMessage} />
      
      {user === null
        ? <LoginForm handleLogin={handleLogin}
                     username={username}
                     password={password}
                     setUsername={setUsername}
                     setPassword={setPassword}
          />
        : <BlogList blogs={blogs}
                    name={user.name}
                    handleLogout={handleLogout}
          />
      }
    </div>
  )
}

export default App