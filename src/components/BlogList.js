import React from 'react'
import Blog from './Blog'

const BlogList = ({ blogs, updateBlog }) => (
  <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
    {blogs.map(blog => 
      <Blog key={blog.id} 
            blog={blog}
            updateBlog={updateBlog}
      />
    )}
  </ul>
)


export default BlogList
