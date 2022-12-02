import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Wheelspin.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import data from './data.json'

function Spinwheel(props) {

  const [selectQues, setSelectedQues] = useState(null)
  const [isCorrect, setCorrect] = useState("false")
  const selectItem = () =>{
    
      const selectQues = Math.floor(Math.random() * props.items.length);
      if (props.onSelectItem) {
        props.onSelectItem(selectQues);
      }
      setSelectedQues(selectQues)
    
  }

  const wheelVars = {
    '--nb-item': props.items.length,
    '--selected-item': selectQues
  };
  const spinning = selectQues !== null ? 'spinning' : '';
  // console.log(selectedItem)

  const [show, setShow] = useState(false)

  const handleShow = () =>{
    setShow(true)
  }

  const handleClose = () =>{
    setShow(false)
  }
 
  const onChangeValue = (event) =>{
    setCorrect(event.target.value)
    console.log(isCorrect)  
  }

  const onButtonSubmit = () => {
    if (isCorrect==='true'){
      document.getElementById("answer").innerHTML = "correct";
     
    }else{
      document.getElementById("answer").innerHTML = "incorrect";

     
    }
    
  }
 
 
  let quiz=data;
  let ques = quiz.questions


  return (
    <div>
      <div className="wheel-container">
        <div className={`wheel ${spinning}`} style={wheelVars} onClick={selectItem}>
          {props.items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              {item}
            </div>
          ))}
 
        </div>
    </div>
    {console.log("wheelVars", wheelVars)} {console.log("selecteditems/index number", selectQues)}

    <Button variant="primary" onClick={handleShow}>
          Solve
      </Button>

      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card>
    <Card.Body>
      <Card.Title>Question {selectQues+1}</Card.Title>
    <Card.Text>
    
    {ques.map(q =>   
                 {return q.id=== selectQues?<div key={q.id}>
                    
                 <p className="font-weight-normal"> <span>{q.name}</span></p>
                 <div className="row text-left options">
                     {
                         q.options.map(option =>
                             <div key={option.id} className="col-6">
                                 <div className="option" onChange={onChangeValue}>
                                     <label className="font-weight-normal" htmlFor={option.id}>
                                         <input id={option.id} type="radio" name="options1" value={option.isAnswer} />
                                         {option.name} 
                                      </label>
                                 </div>
                               
                             </div>
                         )
                     }
                     <div id="answer"></div>
                    <button type="submit" onClick={onButtonSubmit}>Submit</button>
 
                 </div>
             </div>:null}
      )}
 
    
   </Card.Text>
    </Card.Body>
  
    
    <Card.Body>
        {/* <Button variant="primary" onClick={}>
            Submit
        </Button> */}

        
    </Card.Body>
</Card>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Spinwheel