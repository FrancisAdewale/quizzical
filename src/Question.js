import React from "react"

export default function Question(props) {

    return (
        <div className="question-container">
            <h2 className="question">{props.question}</h2>
            <button className="choice">{props.correct_answer}</button>
            <button className="choice">{props.incorrect_answerOne}</button>
            <button className="choice">{props.incorrect_answerTwo}</button>
            <button className="choice">{props.incorrect_answerThree}</button>
            <hr/>
            
        </div>
    )
}