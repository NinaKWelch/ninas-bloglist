import React from 'react'

const LoginForm = ({
  username,
  password,
  handleUsernameChange,
  handlePasswordChange,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login to Bloglist</h2>

      <div>
        <label>
          Username:
          <input
            type='text'
            value={username}
            name='Username'
            onChange={handleUsernameChange}
          />
        </label>
      </div>

      <div>
        <label>
          Password:
          <input
            type='text'
            value={password}
            name='Password'
            onChange={handlePasswordChange}
          />
        </label>
      </div>

      <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm

