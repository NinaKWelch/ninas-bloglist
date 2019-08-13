import React from 'react'
import Blog from './Blog'


const BlogList = ({ blogs, name }) => {
  return (
    <div>
      <h2>Blogs</h2>

      <p>{name} logged in</p>

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
