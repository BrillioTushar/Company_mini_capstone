import React, { useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router';
import Home from './Home';
export default function SignUp() {
    const [name,setName]=useState({fname:'',lname:''});
    const [email, setEmail] = useState('');    
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const navHome=()=>{
        navigate('/home')
    }

        return (
            <div>
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
                        value={email}
                        onChange={(e) => setEmail({
                            ...email,
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
                        value={pass}
                        onChange={(e) => setPass({
                            ...pass,
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
            </div>
        )
    }
