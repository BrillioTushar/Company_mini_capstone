import React from 'react'

function Questions(props) {
    const move = (e) => {
        let id = e.target.id;
        let index = 0;
        if (id === 'first')
            index = 0;
        else if (id === 'prev')
            index = props.pager.index - 1;
        else if (id === 'next')
            index = props.pager.index + 1;
        else if (id === 'last')
            index = props.pager.count - 1;
        props.goTo(index);
    }
    
    const onAnswer = (question, option) => {
        let quiz = props.quiz;
        let q = props.questions.find(x => x.id === question.id);
        q.options.find(x => x.id === option.id).selected = true;

        props.updateQuiz(quiz);
    }

    return (
        <div id="quiz">
                <h2 className="text-center font-weight-normal">{props.name}</h2>
                <hr />
                {props.questions.map(q =>
                    <div key={q.id}>
                        <div className="badge badge-info">Question {props.pager.index + 1} of {props.pager.count}.</div>
                        <h3 className="font-weight-normal">{props.pager.index + 1}. <span>{q.name}</span></h3>
                        <div className="row text-left options">
                            {
                                q.options.map(option =>
                                    <div key={option.id} className="col-6">
                                        <div className="option">
                                            <label className="font-weight-normal" htmlFor={option.id}>
                                                <input name="op" id={option.id} checked={option.selected} type="radio" onChange={() => onAnswer(q, option)} />
                                                {option.name}
                                            </label>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )}
                <hr />
                <div className="text-center">
                    <button id="first" className="btn btn-default" onClick={move}>First</button>
                    <button id="prev" className="btn btn-default" onClick={move}>Prev</button>
                    <button id="next" className="btn btn-primary" onClick={move}>Next</button>
                    <button id="last" className="btn btn-default" onClick={move}>Last</button>
                </div>
                <hr />
                <div>
                    <button id="review" className="btn btn-info" onClick={props.setMode}>Review</button>
                    <button id="submit" className="btn btn-primary" onClick={props.setMode}> Submit Quiz</button >
                </div >
            </div >
    )
}

export default Questions
