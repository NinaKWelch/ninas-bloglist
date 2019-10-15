import React from 'react'

const User = ({ user }) => {
  if ( user === undefined) {
    return null
  }

  return (
    <div>
      <h3>{user.name}</h3>

      <ul style={{ paddingLeft: 0 }}>
        <h4>Added Blogs</h4>
        {user.blogs.map(blog => <li key={blog.id} style={{ marginLeft: 30 }}>{blog.title}</li>)}
      </ul>
    </div>
  )
}

export default User