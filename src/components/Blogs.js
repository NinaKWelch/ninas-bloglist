import React from 'react'
import Togglable from './Togglable'
import BlogForm from './BlogForm'
import BlogList from './BlogList'

const Blogs = ({ handleLogout, blogs, name, addNewBlog, updateBlog }) => {
  const blogForm = () => (
    <Togglable buttonLabel='Add new blog'>
      <BlogForm addNewBlog={addNewBlog} />
    </Togglable>
  )

  return (
    <div>
      <h2>Blogs</h2>

      <div>{name} logged in <button onClick={handleLogout}>Logout</button></div>

      {blogForm()}

      <BlogList blogs={blogs} updateBlog={updateBlog} />
    </div>
  )
}

export default Blogs
