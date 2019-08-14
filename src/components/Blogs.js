import React from 'react'
import BlogForm from './BlogForm'
import BlogList from './BlogList'

const Blogs = ({ handleLogout, blogs, name, addNewBlog }) => {
  return (
    <div>
      <h2>Blogs</h2>

      <div>{name} logged in <button onClick={handleLogout}>Logout</button></div>

      <BlogForm addNewBlog={addNewBlog} />

      <BlogList blogs={blogs} />
    </div>
  )
}

export default Blogs
