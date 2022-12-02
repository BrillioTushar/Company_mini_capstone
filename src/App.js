import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import Home from './components/Home'
import Quizmain from './components/Quizmain'
import Submit from './components/Submit';
import QuizPage from './components/QuizPage'

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
            <Route path="/sign-up/Home" element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/log-in/Home" element={<Home/>} />
            <Route path="/Home/Quizmain" element={<Quizmain/>}/>
            <Route path="/log-in" element={<Login/>}/>
            <Route path="Home/QuizPage" element={<QuizPage/>}/>
            </Routes>
        
       </div>
       </div>

    </div>
   
  </Router> 
  
  );
}

export default App;
