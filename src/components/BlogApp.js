import React from 'react'
import { connect } from 'react-redux'
import {
  Switch,
  Route,
  Link as RouterLink,
  Redirect,
  withRouter
} from 'react-router-dom'
import { Paper, Tabs, Tab } from '@material-ui/core'

import { createBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'

import Header from './Header'
import Blogs from './Blogs'
import Users from './Users'
import Blog from './Blog'
import User from './User'
import NoMatch from './NoMatch'

const BlogApp = props => {
  const { user, users, blogs, history } = props

  const addNewBlog = blog => {
    const duplicate = blogs.find(b => b.url === blog.url)

    if (blog.title.length < 4 || blog.author.length < 2) {
      props.setNotification('Title or author name too short', 'error')
    } else if (duplicate) {
      props.setNotification('This blog already exists', 'error')
    } else {
      const currentUser = {
        name: user.name,
        username: user.username
      }

      props.createBlog(blog, currentUser)
      props.setNotification(
        `New Blog '${blog.title}' by ${blog.author} added`,
        'success'
      )
    }
  }

  const userById = id => {
    return users.find(u => u.id === id)
  }

  const blogById = id => {
    return blogs.find(b => b.id === id)
  }

  const handleChange = value => {
    history.push(value)
  }

  return (
    <div>
      <Header history={history} />

      <Route
        path="/"
        render={({ location }) => (
          <div>
            <Paper square>
              <Tabs
                value={
                  location.pathname === '/' || location.pathname === '/users'
                    ? location.pathname
                    : false
                }
                onChange={handleChange}
                indicatorColor={
                  location.pathname === '/' ? 'primary' : 'secondary'
                }
                centered
              >
                <Tab label="Blogs" component={RouterLink} to="/" value="/" />

                <Tab
                  label="Users"
                  component={RouterLink}
                  to="/users"
                  value="/users"
                />
              </Tabs>
            </Paper>

            <Switch>
              <Route
                path="/blogs/:id"
                render={({ match }) => (
                  <Blog blog={blogById(match.params.id)} />
                )}
              />

              <Route
                path="/users/:id"
                render={({ match }) => (
                  <User user={userById(match.params.id)} />
                )}
              />

              <Route path="/users" render={() => <Users users={users} />} />

              <Redirect exact from="/blogs" to="/" />

              <Route
                exact
                path="/"
                render={() => (
                  <Blogs blogs={blogs} handleBlogCreation={addNewBlog} />
                )}
              />

              <Route>
                <NoMatch />
              </Route>
            </Switch>
          </div>
        )}
      />
    </div>
  )
}

const mapDispatchToProps = {
  createBlog,
  setNotification
}

export default withRouter(connect(null, mapDispatchToProps)(BlogApp))
