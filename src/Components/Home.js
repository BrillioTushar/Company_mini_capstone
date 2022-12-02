import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './LoginSignUp.css'

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const navigate = useNavigate()
  return (
    <div className="auth-wrapper">
    <div className="auth-inner">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/log-in'}>
              QuizApp
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/home'}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">

                  <Button variant="light" onClick={handleShow}>
                       Profile
                  </Button>
               
                      
                    <Offcanvas show={show} onHide={handleClose}>
                         <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Profile</Offcanvas.Title>
                          </Offcanvas.Header>

                     <Offcanvas.Body>
                         <div>Full Name</div>
                         <div>Course</div>
                         
                       </Offcanvas.Body>

                      </Offcanvas> 
                </li>
              </ul>
            </div>
          </div>
        </nav>
   
      <Card>
        <Card.Header>Quiz 1</Card.Header>
        <Card.Body>
          <Card.Title>HTML</Card.Title>
         
          <Button onClick={() => navigate('/QuizPage')} variant="primary">Start Quiz</Button>

        </Card.Body>
      </Card>

      <Card>
        <Card.Header>Quiz 2</Card.Header>
        <Card.Body>
          <Card.Title>HTML</Card.Title>
         
          <Button onClick={() => navigate('/QuizPage')} variant="primary">Start Quiz</Button>

        </Card.Body>
      </Card>
     
      </div>
    </div>

  );
}

export default Home
