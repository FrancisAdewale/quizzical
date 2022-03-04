import React, {useState, useEffect} from "react";
import Blob1 from "./imgs/blob1.png"
import Blob2 from "./imgs/blob2.png"
import Intro from "./Intro"
import Question from "./Question"
import Submit from "./Submit"

export default function App() {

const [startQuiz, setStartQuiz] = useState(false)
const [questions, setQuestions] = useState([])

//console.log(jsondata)



useEffect(() => {
  fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple")
  .then(res => res.json())
  .then(data => setQuestions(data.results))

}, [startQuiz])


function handleClick() {
  setStartQuiz(prevState => !prevState)
  }

const questionsElement = questions.map(question => {
  return <Question 
  question={question.question}
  correct_answer={question.correct_answer}
  incorrect_answerOne={question.incorrect_answers[0]}
  incorrect_answerTwo={question.incorrect_answers[1]}
  incorrect_answerThree={question.incorrect_answers[2]} />
})

  return (

    <div className="outer">
      <div className="middle">
        <img src={Blob1} className="blob1"/>
        <img src={Blob2} className="blob2"/>
        { startQuiz ? questionsElement: <Intro handleClick={handleClick} />}
        { startQuiz && < Submit />}
      </div>

    </div>
    

  )
}
