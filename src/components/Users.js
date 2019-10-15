import React from 'react'

const Users = ({ users }) => {
  const userStats = users => {
    return (
      users.map(user =>
        <tr key={user.id}>
          <td style={{ paddingRight: 20 }}>{user.name}</td>
          <td>{user.blogs.length}</td>
        </tr>
      )
    )
  }

  return (
    <div>
      <h2>Users</h2>

      <table>
        <thead style={{ fontWeight: 'bold' }}>
          <tr>
            <td>Name</td>

            <td>Blogs</td>
          </tr>
        </thead>

        <tbody>
          {userStats(users)}
        </tbody>
      </table>
    </div>
  )
}

export default Users
