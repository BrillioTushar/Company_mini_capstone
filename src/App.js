import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import SignUp from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home'
import QuizPage from './Components/QuizPage'

import './App.css'
import Question from './Components/Question';
import StartPage from './Components/StartPage';

function App() {
  return (
    <Router>
      <div className="App">
        
        
            <Routes>
              <Route exact path="/" element={<Login  />} />
              <Route path="/log-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
              <Route path="/quizPage" element={<QuizPage />} />
              <Route path="/question" element={<Question />} />
              <Route path="/startPage" element={<StartPage />} />
              
            </Routes>
         
      </div>
    </Router>
  )
  
  
}

export default App;
