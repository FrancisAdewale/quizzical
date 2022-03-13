import React, { useState } from "react"

export default function Question(props) {

    const buttonOneStyles = {
        backgroundColor: props.buttonOneIsSelected ? "#D6DBF5" : "#FFFFFF"

    }
    const buttonTwoStyles = {
        backgroundColor: props.buttonTwoIsSelected ? "#D6DBF5" : "#FFFFFF"

    }
    const buttonThreeStyles = {
        backgroundColor: props.buttonThreeIsSelected ? "#D6DBF5" : "#FFFFFF"

    }
    const buttonFourStyles = {
        backgroundColor: props.buttonFourIsSelected ? "#D6DBF5" : "#FFFFFF"

    }

    const buttonCorrectStyles = {
        backgroundColor : "#94D7A2" 
    }

    const buttonIncorrectStyles = {
        backgroundColor : "#F8BCBC"

    }
    
    return (
        <div className="question-container">
            <h2 className="question">{props.question}</h2>
            <button name={props.answers[0].answer} id={props.answers.indexOf(props.answers[0])} className="choice" onClick={(e) => props.handleAnswer(e)} value={props.questionIndex} style={props.isCorrect ? buttonCorrectStyles : buttonOneStyles }>{props.answers[0].answer}</button>
            <button name={props.answers[1].wrong} id={props.answers.indexOf(props.answers[1])}className="choice" onClick={(e) => props.handleAnswer(e)} value={props.questionIndex} style={props.isIncorrect ? buttonIncorrectStyles : buttonTwoStyles}>{props.answers[1].wrong}</button>
            <button name={props.answers[2].wrong} id={props.answers.indexOf(props.answers[2])} className="choice" onClick={(e) => props.handleAnswer(e)} value={props.questionIndex} style={buttonThreeStyles}>{props.answers[2].wrong}</button>
            <button name={props.answers[3].wrong} id={props.answers.indexOf(props.answers[3])}  className="choice"onClick={(e) => props.handleAnswer(e)} value={props.questionIndex} style={buttonFourStyles}>{props.answers[3].wrong}</button>
            <hr/>
        </div>
    )
}