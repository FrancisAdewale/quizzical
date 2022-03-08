import React, { useState } from "react"

export default function Question(props) {
    


   


    return (
        <div className="question-container">
            <h2 className="question">{props.question}</h2>
            <button name="correct" id={props.index} className="choice" onClick={(e) => props.handleAnswer(e)}>{props.correct_answer}</button>
            <button name="incorrectOne" className="choice">{props.incorrect_answerOne}</button>
            <button name="incorrectTwo"className="choice"  >{props.incorrect_answerTwo}</button>
            <button name="incorrectThree"className="choice" >{props.incorrect_answerThree}</button>
            <hr/>
            
        </div>
    )
}