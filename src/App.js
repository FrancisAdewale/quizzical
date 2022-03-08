import React, {useState, useEffect} from "react";
import Blob1 from "./imgs/blob1.png"
import Blob2 from "./imgs/blob2.png"
import Intro from "./Intro"
import Question from "./Question"
import Submit from "./Submit"
import { nanoid } from 'nanoid'

export default function App() {

const [startQuiz, setStartQuiz] = useState(false)
const [questionsData, setQuestionsData] = useState([])

const questionsArray = questionsData.map((prevData, index) => {
  return {
    question: prevData.question,
    index: index,
    correct_answer : prevData.correct_answer,
    incorrect_answers : prevData.incorrect_answers,
    id: nanoid()
  }
})

const [buttonsArray, setButtonsArray] = questionsArray.map(item => {
  return {
    buttonsIndex : item.index,
    correct: item.correct_answer,
    incorrect: item.incorrect_answers,
    isCorrect: false

  }
})


useEffect(() => {
  fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple")
  .then(res => res.json())
  .then(data => setQuestionsData(data.results))

}, [])


function handleClick() {
  setStartQuiz(prevState => !prevState)
  }

  function selectAnswer(event) {

    const {name, id} = event.target

    console.log(id)

  }


const questionsElement = questionsArray.map(question => {

  
  return <Question
  key={question.id} 
  question={question.question}
  correct_answer={question.correct_answer}
  incorrect_answerOne={question.incorrect_answers[0]}
  incorrect_answerTwo={question.incorrect_answers[1]}
  incorrect_answerThree={question.incorrect_answers[2]} 
  index={question.index}
  handleAnswer={selectAnswer}
  />
})



  return (

    <div className="outer">
      <div className="middle">
        <img src={Blob1} className="blob1"/>
        <img src={Blob2} className="blob2"/>
        { startQuiz ? questionsElement : <Intro handleClick={handleClick} />}
        { startQuiz && < Submit />}
      </div>

    </div>
    

  )
}
