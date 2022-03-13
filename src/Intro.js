import React from "react"

export default function Intro(props) {

    return (
        <div className="inner">
        <h1>Quizzical</h1>
        <h3>Test your general knowledge!</h3>
        <button className="start-btn" onClick={props.handleClick}>Start quiz</button>
      </div>
    )

}