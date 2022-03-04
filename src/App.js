import React, {useState, useEffect} from "react";
import Blob1 from "./imgs/blob1.png"
import Blob2 from "./imgs/blob2.png"
import Intro from "./Intro"
import jsondata from "./data"

export default function App() {

const [startQuiz, setStartQuiz] = useState(false)

console.log(jsondata)



useEffect(() => {
  fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple")
  .then(res => res.json())
  .then(data => data)

}, [startQuiz])


function handleClick() {
  setStartQuiz(prevState => !prevState)
  }

  return (

    <div className="outer">
      <div className="middle">
        <img src={Blob1} className="blob1"/>
        <img src={Blob2} className="blob2"/>
        <Intro handleClick={handleClick} />
    
      </div>

    </div>
    

  )
}
