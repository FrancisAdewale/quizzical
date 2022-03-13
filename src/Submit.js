import React from "react"

export default function Submit(props) {
    return (
        <div className="submit-container">
            <button className="submit" onClick={props.handleAnswers}>Check Answers</button>
        </div>
        
    )
}