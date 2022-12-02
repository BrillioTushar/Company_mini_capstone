import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'

function StartPage() {
    const navigate = useNavigate()
  return (
    <div>
        {/* <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
          
                 <Layout/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={goToQuestion}>
                Solve
            </Button>
            </Modal.Footer>
        </Modal> */}

        <Layout/>

        <Button variant="primary" onClick={()=> navigate('/question')}>
            Solve
        </Button>

    </div>
  )
}

export default StartPage
