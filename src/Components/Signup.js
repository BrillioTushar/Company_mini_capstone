import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link,useNavigate } from 'react-router-dom'
import Home from './Home';
export const UserContext= React.createContext()
export const UserContext2= React.createContext()
export default function SignUp() {
    const [name,setName]=useState({fname:'',lname:'',email:'',pass:''});
    
    const navigate = useNavigate();
    const navHome=()=>{
        navigate('/sign-up/home')
    }

        return (
            <div>
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
            <form onSubmit={navHome}>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        value={name.fname}
                        onChange={(e) => setName({
                            ...name,
                            fname: e.target.value
                        })}
                    />
                </div>
                <div className="mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" 
                        value={name.lname}
                        onChange={(e) => setName({
                                ...name,
                                lname: e.target.value })}/>
                </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={name.email}
                        onChange={(e) => setName({
                            ...name,
                            email: e.target.value
                        })}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={name.pass}
                        onChange={(e) => setName({
                            ...name,
                            pass: e.target.value
                        })}
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
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                </Routes>
            </form>

            {/* <Home names={name} /> */}
            
            </div>
        )
    }
