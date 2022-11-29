// import React, { Component } from 'react'


// export class Home extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              state1:false
//         }
//     }
//     modal=()=>{
//        this.setState({
//           state1:true
            
//                });
//     }
  
//     render() {
//         if(this.state.state1){
//             document.body.classList.add('active-modal');
//         }
//         else{
//             document.body.classList.remove('active-modal')
//         }
        
//         return (
//             <div>
//                 <div className="home-body">
//                             <h1 className="logo">Quizz App</h1>
//                             <ul>
//                                 <li><a href="#home">Home</a></li>
//                                 <li><button id="btn1" onClick={this.modal}>Profile</button></li>
//                                 <li><a href="login.js">LogOut</a></li>
//                             </ul>

//                         </div>
//                         {(this.state.state1) && (
//                         <div className="modal">
//                             <div onClick={this.modal} className="overlay"></div>
//                                 <div className="modal-content">
//                                     <img src=""/>
//                                     <h3>Name:</h3>
//                                     <h3>Email:</h3>
//                                     <button className="update-modal">Update</button>
//                                     <button className="close-modal" onClick={this.modal}>Close</button>                                                                                                               
                                    
                                
//                             </div>
                           
//                         </div>)}
//                         <br></br>
//                     <div className="quiz-body">
//                         <center>
//                             <h3 id="quiz-h3">Quiz-1</h3>
//                             <button className="quiz-btn">Start Quiz</button>
//                         </center>
//                     </div>
//                     </div>

//         )
//     }
// }

// export default Home
import React,{useState} from 'react'

function Home() {
    const [modal, setmodal] = useState(false)
    const toggleState=()=>{
        setmodal(!modal)
    };
    if(modal){
            document.body.classList.add('active-modal');
                }
    else{
            document.body.classList.remove('active-modal')
                 }
    return (
        <div>
            <div>
                 <div className="home-body">
                             <h1 className="logo">Quizz App</h1>
                             <ul>
                                 <li><a href="#home">Home</a></li>
                                 <li><button id="btn1" onClick={toggleState}>Profile</button></li>
                                 <li><a href="login.js">LogOut</a></li>
                             </ul>

                         </div>
                         {modal && (
                         <div className="modal">
                            <div onClick={toggleState} className="overlay"></div>
                                 <div className="modal-content">
                                     <img src=""/>
                                     <h3>Name:</h3>
                                     <h3>Email:</h3>
                                     <button className="update-modal">Update</button>
                                     <button className="close-modal" onClick={toggleState}>Close</button>                                                                                                               
                                    
                                
                             </div>
                           
                         </div>)}
                         <br></br>
                     <div className="quiz-body">
                         <center>
                             <h3 id="quiz-h3">Quiz-1</h3>
                             <button className="quiz-btn">Start Quiz</button>
                         </center>
                     </div>
                   </div>

        </div>
    )
}

export default Home

