import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import React, {useState} from 'react'
import './LoginSignUp.css'

function Signup() {
    const [name,setName] = useState({fname: '', lname:'',email:'',pass:'' })

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

            <form onSubmit={()=>navigate('/home')}>
                
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        value={name.fname}
                        onChange={event => setName({...name, fname: event.target.value})}
                    />
                </div>
                
                <div className="mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" 
                        value={name.lname}
                        onChange={event => setName({...name, lname: event.target.value})}/>
                </div>

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
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/log-in">Log in?</a>
                </p>
            </form>
    </div>
    </div>
  )
}

export default Signup

