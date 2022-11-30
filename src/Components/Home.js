import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import {UserContext} from './SignUp'


function Home({names}) {
    const navigate = useNavigate()
    const name=names
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                                        {/* {console.log(name.fname)} */}
                                        {/* <h3>Name: {props.fname} {props.lname}</h3> */}
                                        <Link className="navbar-brand" to={'/log-in'}>
                                          Logout
                                        </Link>
                                    </Offcanvas.Body>
                                </Offcanvas>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h2>Home</h2>
        </div>
    )
}

export default Home
