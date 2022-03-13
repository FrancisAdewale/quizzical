import React from "react"

export default function Results(props) {
    return (
    <div className="submit-container">
    <span>{`You scored ${props.score}/5 correct answers`}</span>

    <button className="submit" onClick={props.handleReset}>Play Again</button>
    </div>
    
    )
    

}