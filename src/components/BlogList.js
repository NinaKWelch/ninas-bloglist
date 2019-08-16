import React from 'react'
import Blog from './Blog'

const BlogList = ({ blogs, updateBlog }) => {
  const sortByMostLikes = blogs => {
    blogs.sort((a, b) => b.likes - a.likes)
    
    return (
      blogs.map(blog => 
        <Blog key={blog.id} 
              blog={blog}
              updateBlog={updateBlog}
        />
      )
    )
  }

  return (
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      {sortByMostLikes(blogs)}
    </ul>
  )
}


export default BlogList
