import React from 'react'
import Blog from './Blog'


const BlogList = ({ handleLogout, blogs, name }) => {
  return (
    <div>
      <h2>Blogs</h2>

      <div>{name} logged in <button onClick={handleLogout}>Logout</button></div>

      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {blogs.map(blog => 
          <Blog key={blog.id} 
                blog={blog}
          />
        )}
      </ul>
    </div>
  )
}

export default BlogList
