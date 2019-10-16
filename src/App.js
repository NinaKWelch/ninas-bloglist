import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { initializeBlogs, createBlog } from './reducers/blogReducer'
import { initializeUsers } from './reducers/userReducer'
import { initializeUser, loginUser, logoutUser } from './reducers/loginReducer'
import { setNotification } from './reducers/notificationReducer'

import loginService from './services/login'

import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import Blogs from './components/Blogs'
import Blog from './components/Blog'
import Users from './components/Users'
import User from './components/User'

import  { useField } from './hooks'

const App = props => {
  const [username] = useField('text')
  const [password] = useField('password')
  const { initializeBlogs, initializeUsers, initializeUser } = props

  useEffect(() => {
    initializeBlogs()
  }, [initializeBlogs])

  useEffect(() => {
    initializeUsers()
  }, [initializeUsers])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')

    if (loggedUserJSON) {
      let user = JSON.parse(loggedUserJSON)
      initializeUser(user)
    }
  }, [initializeUser])

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

  const addNewBlog = blog => {
    let user = {
      name: props.user.name,
      username: props.user.username
    }

    props.createBlog(blog, user)
    props.setNotification(`New Blog '${blog.title}' by ${blog.author} added`)
  }

  const userById = id => {
    return props.users.find(user => user.id === id)
  }

  const blogById = id => {
    return props.blogs.find(blog => blog.id === id)
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
        <div>
          <h2>Blogs</h2>

          <div>
            {props.user.name} logged in <button onClick={handleLogout}>Logout</button>
          </div>

          <Router>
            <div>
              <Route exact path="/" render={() =>
                <Blogs
                  handleBlogCreation={addNewBlog}
                  blogs={props.blogs}
                />
              } />

              <Route exact path="/users" render={() =>
                <Users users={props.users} />
              } />

              <Route exact path="/users/:id" render={({ match }) =>
                <User user={userById(match.params.id)} />}
              />

              <Route exact path="/blogs/:id" render={({ match }) =>
                <Blog blog={blogById(match.params.id)} user={props.user} />}
              />
            </div>
          </Router>
        </div>
      }
    </div>
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
  createBlog,
  initializeUsers,
  initializeUser,
  loginUser,
  logoutUser,
  setNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)