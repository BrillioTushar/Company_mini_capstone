import Home from './Home.js'
import values from './loginDetails.json'
import React, { useEffect,useState } from 'react'
import axios from 'axios'
import './signlog1.css'
import { BrowserRouter as Router, Routes, Route, Link,useNavigate } from 'react-router-dom'
export default function Login(){
  const [name,setName]=useState({fname:'',lname:'',id:'',pass:''})
  const [isLoggedIn,setisLoggedIn]=useState(false)
    
    
    const navigate = useNavigate();
      const navHome=(e)=>{
        let value = values
        
        const comparator=value.users.find(em=>name.id===em.id)
        console.log(comparator)
        
        if(comparator!=undefined && comparator.pass===name.pass)
          {
            setName(comparator)
            setisLoggedIn(true)
          }
          else if(comparator!=undefined && comparator.pass!==name.pass){
            alert('Invalid Username or Password.')
            setInterval(()=>{
              navigate('/log-in')
            },2000)
          }
          else
          {
            alert('Account Doesnot Exists.')
            setInterval(()=>{
              navigate('/log-in')
            },2000)
          }
          
      }
      
    if(isLoggedIn===false) {return (
            
            <form onSubmit={navHome}>
              {/* {console.log(values)} */}
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
                        value={name.id}
                        onChange={(e) => setName({
                          ...name,
                          id: e.target.value
                      })}
                        style={{width:'400px'}}
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
      )}
      else{
        navigate('/Home',{state:name})
      }
}