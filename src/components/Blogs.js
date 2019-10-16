import React from 'react'
import Togglable from './Togglable'
import BlogForm from './BlogForm'
import BlogList from './BlogList'

const Blogs = ({ handleBlogCreation, blogs }) => (
  <div>
    <h2>Blogs App</h2>
    
    <Togglable buttonLabel='Add new blog'>
      <BlogForm handleBlogCreation={handleBlogCreation} />
    </Togglable>

    <BlogList blogs={blogs} />
  </div>
)

export default Blogs
