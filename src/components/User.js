import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ user }) => {
  const blogsByUser = blogs => (
    blogs.map(blog =>
      <li key={blog.id} style={{ marginLeft: 30 }}>
        <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
      </li>
    )
  )

  if ( user === undefined) {
    return null
  }

  return (
    <div>
      <h3>{user.name}</h3>

      <ul style={{ paddingLeft: 0 }}>
        <h4>Added Blogs</h4>
        
        {blogsByUser(user.blogs)}
      </ul>
    </div>
  )
}

export default User