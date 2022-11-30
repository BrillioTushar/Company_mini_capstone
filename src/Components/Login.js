import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             pass:''
        }
    }
    
    render() {
        return (
            
            <form>
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
                <h3>Log In</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={this.state.pass}
                        onChange={(e) => { this.setState({ pass: e.target.value }) }}
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
                
            </form>
            
        )
    }
}
