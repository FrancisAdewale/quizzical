import React, { useState } from "react"

export default function Question(props) {

    const styles = {
        backgroundColor: props.isSelected ? "#D6DBF5" : "white"

    }
    
    return (
        <div className="question-container">
            <h2 className="question">{props.question}</h2>
            <button name="correct" id={props.index} className="choice" onClick={(e) => props.handleAnswer(e)} value={props.correct_answer} style={styles}>{props.answers[0]}</button>
            <button name="incorrectOne" id={props.index} className="choice" onClick={(e) => props.handleAnswer(e)} value={props.incorrect_answerOne}>{props.answers[1]}</button>
            <button name="incorrectTwo" id={props.index} className="choice" onClick={(e) => props.handleAnswer(e)} value={props.incorrect_answerTwo}>{props.answers[2]}</button>
            <button name="incorrectThree" id={props.index}  className="choice"onClick={(e) => props.handleAnswer(e)} value={props.incorrect_answerThree}>{props.answers[3]}</button>
            <hr/>
            
        </div>
    )
}