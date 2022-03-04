import React from "react"

export default function Question(props) {

    return (
        <>
          <h2>{props.question}</h2>
        <button>{props.correct_answer}</button>
            
        </>
      

    )


    
}