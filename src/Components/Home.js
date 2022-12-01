import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import {UserContext} from './SignUp'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

const Home=(props)=> {
    const navigate = useNavigate()
    const [name,setName] = useState(props.set)
    const [show, setShow] = useState(false);
    const [mshow, setmShow] = useState(false);
    const [pshow, setpShow] = useState(false);
    const [updatedAt,setUpdatedAt] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const mhandleClose = () => setmShow(false);
    const mhandleShow = () => setmShow(true);
    const phandleClose = () => setpShow(false);
    const phandleShow = () => setpShow(true);


    const changeName=(e)=>{
        const article = { fname:name.fname,lname:name.lname,pass:name.pass };    
        axios.put(`http://localhost:3000/users/${name.id}`, article)        
        .then(res =>setUpdatedAt(res.data.updatedAt))
    
        mhandleClose()
    }
    const changePass=(e)=>{
        const article = { fname:name.fname,lname:name.lname,pass:name.pass };    
        axios.put(`http://localhost:3000/users/${name.id}`, article)        
        .then(res =>setUpdatedAt(res.data.updatedAt))
    
        phandleClose()
    }

    return (
        
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/log-in'}>
                        BRILLIO
                    </Link>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                                <input type="image" src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Free-Download.png" width="30rem" height="30rem" onClick={handleShow}></input>
                                <Offcanvas show={show} onHide={handleClose} placement='end'>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <img src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Free-Download.png" height="250rem" width="250rem"></img>
                                        
                                        
                                        <Button variant="primary" onClick={mhandleShow}>
                                        <h3>Name: {name.fname} {name.lname}</h3>

                                        </Button>
                                        <Modal show={mshow} onHide={mhandleClose}>

                                            <Modal.Header closeButton>

                                                <Modal.Title>Change Name</Modal.Title>

                                            </Modal.Header>

                                            <Modal.Body>

                                                <input 
                                                type='text' 
                                                value={name.fname} 
                                                placeholder='New First Name' 
                                                onChange={(e)=>setName({...name,
                                                    fname:e.target.value})} />
                                                    <input 
                                                type='text' 
                                                value={name.lname} 
                                                placeholder='New Last Name' 
                                                onChange={(e)=>setName({...name,
                                                    lname:e.target.value})} />
                                                

                                            </Modal.Body>

                                            <Modal.Footer>

                                                <Button variant="secondary" onClick={mhandleClose}>

                                                    Close

                                                </Button>

                                                <Button variant="primary" onClick={changeName}>

                                                    Save Changes

                                                </Button>

                                            </Modal.Footer>

                                        </Modal>
                                        <h5>Email: {name.id}</h5>
                                        <Button variant="primary" onClick={phandleShow}>
                                            Change Password

                                        </Button><br/>
                                        <Modal show={pshow} onHide={phandleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Change Password</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <input 
                                                type='text' 
                                                value={name.pass} 
                                                placeholder='New Password' 
                                                onChange={(e)=>setName({...name,
                                                    pass:e.target.value})} />                                                   
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={phandleClose}>
                                                    Close
                                                </Button>
                                                <Button variant="primary" onClick={changePass}>
                                                    Save Changes
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
 
                                        <Link className="navbar-brand" to={'/sign-up'}>
                                          Logout
                                        </Link>
                                    </Offcanvas.Body>
                                </Offcanvas>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <Card style={{ width: 'auto' }}>
                    <Card.Img variant="top" src="https://tse2.mm.bing.net/th/id/OIP.mpquwLMxmDFthJOIKqf6gAHaEK?pid=ImgDet&rs=1/100px180" height='auto' width='auto' />
                    <Card.Body>
                        <Card.Title>React Quiz</Card.Title>
                        <Card.Text>
                            You will get 1 point for each correct answer. <br></br>At the end of the Quiz, your total score will be displayed.<br></br> Maximum score is 10 points.
                        </Card.Text>
                        <Button variant="primary">Start Quiz</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Home