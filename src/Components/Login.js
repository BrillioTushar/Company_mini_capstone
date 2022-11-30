import React, { useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import './LoginSignUp.css'

function Login() {
  const [name, setName] = useState({email:'', pass:''})
  const navigate = useNavigate()
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
            <Link className="navbar-brand" to={'/log-in'}>
              BRILLIO
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/log-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
          <form onSubmit={()=>navigate('/home') }>
              <h3>Log In</h3>
              <div className="mb-3">
                  <label>Email address</label>
                  <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={name.email}
                      onChange={event => setName({...name, email: event.target.value})}
                  />
              </div>

              <div className="mb-3">
                  <label>Password</label>
                  <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={name.pass}
                      onChange={event => setName({...name, pass: event.target.value})}
                  />
              </div>

              <div className="mb-3">
                  <div className="custom-control custom-checkbox">
                      <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                      />
                      <label className="custom-control-label" htmlFor="customCheck1">
                          Remember me
                      </label>
                  </div>
              </div>

              <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                      Submit
                  </button>
              </div>

              <p className="forgot-password text-right">
                  Forgot <a href="#">password?</a>
              </p>
              
          </form>

     </div> 

</div>
  )
}

export default Login


