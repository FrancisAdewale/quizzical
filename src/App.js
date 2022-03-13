import React, {useState, useEffect} from "react";
import Blob1 from "./imgs/blob1.png"
import Blob2 from "./imgs/blob2.png"
import Intro from "./Intro"
import Question from "./Question"
import Submit from "./Submit"
import Results from "./Results"
import { nanoid } from 'nanoid'

export default function App() {

const [startQuiz, setStartQuiz] = useState(false)
const [questionsData, setQuestionsData] = useState([])
const [array, setArray] = useState([])
const [userAnswers, setUserAnswers] = useState([])
const [submittedAnswers, setSubmittedAnswers] = useState(false)
let score = 0



useEffect(() => {
  fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple")
  .then(res => res.json())
  .then(data => setQuestionsData(data.results))

}, [])

useEffect(() => {
  setArray(prevArray => {

    return questionsData.map((prevData, index) => {
  
      const answers = []

      
      answers.push({answer : prevData.correct_answer, isSelected : false, isCorrect: false})
      
      for(let i = 0; i < prevData.incorrect_answers.length; i++) {
        answers.push({ wrong : prevData.incorrect_answers[i], isSelected: false, isCorrect: false})
      }

      
        return {
          question: prevData.question,
          index: index,
          answers : answers,
          id: nanoid(),
      
        }
      })
  
  })

}, [questionsData])



function handleClick() {
  setStartQuiz(prevState => !prevState)
  }

const reset = () => {

}

  const handleAnswers = () => {


   
    for(let i = 0; i < userAnswers.length; i++) {
      if(userAnswers[i] === array[i].answers[0].answer) {
        let temp_state = [...array]

        let temp_element = { ...temp_state[i] }

        temp_element.answers[0].isCorrect = !temp_state[i].answers[0].isCorrect

        temp_state[i] = temp_element
        setArray(temp_state)
        score++
    }
  }

  setSubmittedAnswers(prevState => !prevState)
    console.log(score)
  }

function selectAnswer(event) {

  const {name, id, value} = event.target

  let answers = [...userAnswers]

  answers.push(name)

  setUserAnswers(answers)



    let temp_state = [...array]

    let temp_element = { ...temp_state[value] }
    
    temp_element.answers[id].isSelected = !temp_state[value].answers[id].isSelected

    temp_state[value] = temp_element

    setArray(temp_state)

}


const questionsElement = array.map((question, index) => {

  return <Question
  key={question.id} 
  question={question.question}
  answers={question.answers}
  handleAnswer={selectAnswer}
  questionIndex={question.index}
  buttonOneIsSelected={question.answers[0].isSelected}
  buttonTwoIsSelected={question.answers[1].isSelected}
  buttonThreeIsSelected={question.answers[2].isSelected}
  buttonFourIsSelected={question.answers[3].isSelected}
  isCorrect={question.answers[0].isCorrect && submittedAnswers}
  isIncorrect={question.answers[1].isSelected && submittedAnswers}

  />
})


  return (

    <div className="outer">
      <div className="middle">
        <img src={Blob1} className="blob1"/>
        <img src={Blob2} className="blob2"/>
        { startQuiz ? questionsElement : <Intro handleClick={handleClick} />}
{
        submittedAnswers 
        ?
        startQuiz && <Results score={score} handleReset={reset} />
        :
         startQuiz && < Submit handleAnswers={handleAnswers} />

}

      </div>

    </div>
    

  )
}
