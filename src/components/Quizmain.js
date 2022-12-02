import React, {useState, useEffect} from 'react'
import Questions from './Questions'
import Review from './Review'
import Submit from './Submit'
import questionData from './data.json'
import { BrowserRouter as Router, Routes, Route, Link,useNavigate,useLocation } from 'react-router-dom'
import Login from './login';

function Quiz() {
    const [counter, setCounter] = React.useState(10);
    const location = useLocation()
    const [name,setName] = useState(location.state)
    const [quiz, setQuiz] = useState()
    const [questions, setQuestions] = useState([]) 
    const [pager, setPager] = useState({index:0,size:1,count:10})
    const [mode, setMode] = useState("quiz")
    const navigate = useNavigate();
       
    const navHome=()=>{
        navigate('/Home',{state:name})
    }

    const goTo = (ind) => {
        if (ind >= 0 && ind < pager.count) {
            pager.index=ind
            setMode("quiz")
            setQuestions(filteredQuestions())
        }
    }

    const filteredQuestions = () => {
        return questionData.questions.slice(pager.index, pager.index+pager.size)
    }

    const load = () => {
            let quiz=questionData;
            quiz.questions.forEach(q => {
                 q.options.forEach(o => o.selected = false);
            });
            let quizCount = quiz.questions.length / pager.size;
            setMode("quiz");
            setPager({index:pager.index,size:pager.size,count:quizCount})
            setQuiz(quiz)
            setQuestions(filteredQuestions());
        }

    const move = (e) => {
        let index = parseInt(e.target.id, 10);
        goTo(index);
    }

    const autoMove = () => {
        if(pager.index<pager.count){
            goTo(pager.index+1)
        }
    }

    const updateQuiz = (quiz) => {
        setMode({ quiz });
        setQuestions(filteredQuestions())

        goTo(pager.index + 1);
    }

    const setM = (e) => {
        let m = e.target.id;
        if (m === 'submit') {
            quiz.questions.forEach(q => {
                q.isCorrect = q.options.every(x => x.selected === x.isAnswer);
            });
        }
        setMode(m)
    }

    const isAnswered = (question) => {
        return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
    }
    // React.useEffect(() => {
    //     load()
    //     let timer = 0
    //       timer= counter >= 0 ? (setInterval(() => setCounter(counter - 1), 1000)):(setCounter(0))
          
    //     return() => {setMode('timeout')}
        
    //    }, [counter]);

    // const startTimer = () => {
    //     let timer=1800;
    //     var interval = setInterval(()=>{
    //         timer--;
    //         document.getElementById('timer').innerHTML=`${timer} seconds remaining`;
    //         if(timer==0){
    //             clearInterval(interval)
    //             setMode('timeout')
    //         }
    //     },1000)
    // }

    useEffect(()=>{
        
        load()
        // startTimer()
    }, [])
    
    if (mode==="quiz"){
        return (
            <div style={{ width: 'auto' }}>
                {/* <div>Countdown: {counter}</div> */}
                <Questions name="React" questions={questions} goTo={goTo} pager={pager} setMode={setM} move={move} updateQuiz={updateQuiz} autoMove={autoMove}></Questions>
            </div>
        )
    }
    else if(mode==="review"){
        return (
            <div>
                <Review quiz={quiz} questions={quiz.questions} goTo={goTo} setMode={setM} move={move} isAnswered={isAnswered}></Review>
            </div>
        )
    }
    else if(mode==="timeout"){
        return (
            <div>
                <div className="result">
                 <h2 className="text-center font-weight-normal">Quiz Result</h2>
                 <div className="alert alert-danger">Time Up! Retry Quiz</div>
                 <button className="btn btn-primary" onClick={navHome}>Retry</button>
                 </div>
            </div>
            
        )
    }
    else {
        return (
            <div>
                <Submit questions={quiz.questions} state={name}></Submit>
            </div>
        )
    }
  
    
}

export default Quiz
