import React from 'react'
import "./Login.css";
function Login() {
  return (
    <div className='container-fluid'>
     
      <form>
      <h2>User Login</h2>
      <dl>
        <dt>UserName:</dt>
        <dd><input type='text' className='form-contrl'/></dd>
        <dt>Password:</dt>
        <dd><input type='password' className='form-control'/></dd>
      </dl>
      <button className='btn btn-primary w-100'>Login</button>
      </form>
    </div>
  )
}

export default Login
