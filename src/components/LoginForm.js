import React from 'react'

const LoginForm = ({
  username,
  password,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login to Bloglist</h2>

      <div>
        <label>
          Username:
          <input
            {...username}
            name='Username'
          />
        </label>
      </div>

      <div>
        <label>
          Password:
          <input
            {...password}
            name='Password'
          />
        </label>
      </div>

      <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm

