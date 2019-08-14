import React from 'react'
import Blog from './Blog'

const BlogList = ({ blogs }) => {
  return (
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      {blogs.map(blog => 
        <Blog key={blog.id} 
              blog={blog}
        />
      )}
    </ul>
  )
}

export default BlogList
