import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import { Layouts } from './Components/Layouts';
function App() {
  return (
    <Router>
      <div className="App">
        
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/log-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-up/home" element={<Home />} />
               <Layouts/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App
