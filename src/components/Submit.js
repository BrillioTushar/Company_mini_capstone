import React,{useState} from 'react'

import { BrowserRouter as Router, Routes, Route, Link,useNavigate } from 'react-router-dom'
import Login from './login';
import Home from './Home'

function Submit(props) {
    
    const [name,setName] = useState(props.state)
    let questions = props.questions;
    let corr = 0, percent=0;
    questions.forEach(q=>{q.isCorrect = q.options.every(x=>x.selected===x.isAnswer)})
    const navigate = useNavigate();
    const navHome=()=>{
        navigate('/log-in')
    }
    const navHome1=()=>{
        navigate('/Home',{state:name})
    }
    return (
        <div>
            <div className="result">
            <h2 className="text-center font-weight-normal">Quiz Result</h2>
            {props.questions.map((q, index) =>
                <div key={q.id}>
                    <div className="result-question">
                        <h4>{index + 1}. {q.name}</h4>
                        <div className="row">
                            {
                                q.options.map(option =>
                                    <div key={option.id} className="col-6">
                                        <input id={option.id} type="checkbox" disabled="disabled" checked={option.selected} /> {option.name}
                                    </div>
                                )
                            }
                        </div>
                        {q.isCorrect? corr+=1:""}
                        <div className={`alert ${q.isCorrect ? ('alert-success') : 'alert-danger'}`}>Your answer is {q.isCorrect ? 'Correct' : 'Wrong'}</div>
                    </div>
                </div>
            )}
            {/* <button id="quiz" className="btn btn-info" onClick={props.setMode}>Back To Quiz</button> */}
            <div>Your score is {percent=(Math.floor((corr/props.questions.length)*100))}%</div>
            {percent<75?<button id="quiz" className="btn btn-primary " onClick={navHome1}>Retry</button>:<button id="home" className="btn btn-primary" onClick={navHome}>Log Out</button >}

        </div>
       
        </div>
        
    )
    
}

export default Submit
