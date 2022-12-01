import React, { useEffect,useState } from 'react'
import values from './loginDetails.json'
import axios, { Axios } from 'axios'
import './input.css'
import { BrowserRouter as Router, Routes, Route, Link,useNavigate } from 'react-router-dom'
import Home from './Home';
// import fs from 'fs-react';
export const UserContext= React.createContext()
export const UserContext2= React.createContext()

export default function SignUp() {
    const [name,setName]=useState({fname:'',lname:'',id:'',pass:''})
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const navigate = useNavigate();
    const navHome=()=>{
        let value = values
        
        const comp=value.users.find(em=>name.id===em.id)
        
        
        
        if(comp!=undefined){
            alert('Email already exists')
            navigate('/log-in')
            

        }
        else{
            axios.post('http://localhost:3000/users',name)
            .then(response=>{})
            setisLoggedIn(true)
        }
        }
        
        // 
    
        if(isLoggedIn===false){return (
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
                            style={{width:'400px'}} required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" 
                            value={name.lname}
                            onChange={(e) => setName({
                                    ...name,
                                    lname: e.target.value })} required/>
                    </div>
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
                            })} required
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
                            })} required
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
                
                    {/* <Home fnames={name.fname}/> */}
                </form>

            
            
            </div>
        
        )}
        else{
            return(<Home set={name} />)
        }
    }