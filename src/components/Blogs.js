import React from 'react'
import Togglable from './Togglable'
import BlogForm from './BlogForm'
import BlogList from './BlogList'

const Blogs = ({ 
  handleLogout,
  blogs,
  user,
  handleBlogCreation,
  handleBlogUpdate,
  handleBlogDeletion
}) => (
  <div>
    <h2>Blogs</h2>

    <div>
      {user.name} logged in <button onClick={handleLogout}>Logout</button>
    </div>

    <Togglable buttonLabel='Add new blog'>
      <BlogForm handleBlogCreation={handleBlogCreation} />
    </Togglable>

    <BlogList blogs={blogs}
              user={user}
              handleBlogUpdate={handleBlogUpdate}
              handleBlogDeletion={handleBlogDeletion}
    />
  </div>
)

export default Blogs
