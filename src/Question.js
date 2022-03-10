import React, { useState } from "react"

export default function Question(props) {

    const styles = {
        backgroundColor: props.isSelected ? "#D6DBF5" : "#FFFFFF"

    }
    
    return (
        <div className="question-container">
            <h2 className="question">{props.question}</h2>
            <button name={props.answers[0].answer} id={props.answers.indexOf(props.answers[0])} className="choice" onClick={(e) => props.handleAnswer(e)} value={props.questionIndex} style={styles}>{props.answers[0].answer}</button>
            <button name={props.answers[1].wrong} id={props.answers.indexOf(props.answers[1])}className="choice" onClick={(e) => props.handleAnswer(e)} value={props.questionIndex}>{props.answers[1].wrong}</button>
            <button name={props.answers[2].wrong} id={props.answers.indexOf(props.answers[2])} className="choice" onClick={(e) => props.handleAnswer(e)} value={props.questionIndex}>{props.answers[2].wrong}</button>
            <button name={props.answers[3].wrong} id={props.answers.indexOf(props.answers[3])}  className="choice"onClick={(e) => props.handleAnswer(e)} value={props.questionIndex}>{props.answers[3].wrong}</button>
            <hr/>
        </div>
    )
}