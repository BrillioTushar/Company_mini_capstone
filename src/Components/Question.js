import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import './QuizPage.css'
import data from './data.json'
import Form from 'react-bootstrap/Form'

function Question(props) {



  const navigate = useNavigate()
  
  let quiz=data;
  let ques = quiz.questions
  console.log(ques)



  return (
        
    <div>

<Form>

<Card style={{ width: '70rem' }}>
    <Card.Body>
      <Card.Title> Question 1</Card.Title>
    <Card.Text>
    
    {ques.map(q =>   
                 {return q.id=== 1?<div key={q.id}>
                    
                 <p className="font-weight-normal"> <span>{q.name}</span></p>
                 <div className="row text-left options">
                     {
                         q.options.map(option =>
                             <div key={option.id} className="col-6">
                                 <div className="option">
                                     <label className="font-weight-normal" htmlFor={option.id}>
                                         <input id={option.id} checked={option.selected} type="checkbox" />
                                         {option.name}
                                     </label>
                                 </div>
                             </div>
                         )
                     }
 
                 </div>
             </div>:null}
      )}
 
    
   </Card.Text>
    </Card.Body>
  
    
    <Card.Body>
        <Button variant="primary" onClick={() => navigate('/quizPage')}>
            Submit
        </Button>

        
    </Card.Body>
</Card>

</Form>


    
    </div>
    
  )
}

export default Question
