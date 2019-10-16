import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({ blogs }) => {
  const sortByMostLikes = blogs => {
    blogs.sort((a, b) => b.likes - a.likes)

    return (
      blogs.map(blog =>
        <li key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </li>
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


