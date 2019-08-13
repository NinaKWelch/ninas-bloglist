import React from 'react'

const LoginForm = ({ handleLogin, username, password, setUsername, setPassword }) => {
  return (
    <form onSubmit={handleLogin}>
      <h2>Login to Bloglist</h2>

      <div>
        <label>
          Username:
          <input type='text'
                 value={username}
                 name='Username'
                 onChange={({ target }) => setUsername(target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Password:
          <input type='text'
                 value={password}
                 name='Password'
                 onChange={({ target }) => setPassword(target.value)}
          />
        </label>
      </div>
      
      <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm

