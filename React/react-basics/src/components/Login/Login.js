import React from 'react'

function Login() {
  return (
    <div className='container-fluid'>
      <h2>User Login</h2>
      <dl>
        <dt>UserName:</dt>
        <dd><input type='text'/></dd>
        <dt>Password:</dt>
        <dd><input type='password'/></dd>
      </dl>
    </div>
  )
}

export default Login
