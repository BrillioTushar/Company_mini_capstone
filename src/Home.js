import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
function Home() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        
                     <div>
                          <div className="home-body">
                                      <h1 className="logo">Quizz App</h1>
                                      <ul>
                                         <li><a href="#home">Home</a></li>
                                          <li><button id="btn1" onClick={handleShow}>Profile</button></li>
                                         <li><a href="login.js">LogOut</a></li>
                                      </ul>
        
                                 </div>
                                 <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Name: 
            Email: 
          </Offcanvas.Body>
        </Offcanvas>
        <div className="quiz-body">
                        <center>
                            <h3 id="quiz-h3">Quiz-1</h3>
                            <button className="quiz-btn">Start Quiz</button>
                        </center>
                    </div>
                                 </div>
                            
       
        
      
    );
  }
  

export default Home

