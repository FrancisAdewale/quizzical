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

const [array, setArray] = useState([])


const questionsArray = questionsData.map((prevData, index) => {

const answers = []

answers.push({answer : prevData.correct_answer, isSelected : false})

for(let i = 0; i < prevData.incorrect_answers.length; i++) {
  answers.push({ wrong : prevData.incorrect_answers[i], isSelected: false})
}



  return {
    question: prevData.question,
    index: index,
    answers : answers,
    id: nanoid(),

  }
})

useEffect(() => {
  fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple")
  .then(res => res.json())
  .then(data => setQuestionsData(data.results))

}, [])

useEffect(() => {
  setArray(prevArray => {

    return questionsData.map((prevData, index) => {
  
      const answers = []
      
      answers.push({answer : prevData.correct_answer, isSelected : false})
      
      for(let i = 0; i < prevData.incorrect_answers.length; i++) {
        answers.push({ wrong : prevData.incorrect_answers[i], isSelected: false})
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

function selectAnswer(event) {

  const {name, id, value} = event.target


  setArray(prevArray => {

    let temp_state = [...prevArray]


    let temp_element = { ...temp_state[value] };

    temp_element.answers[id].isSelected = true

    temp_state[value] = temp_element

    return temp_state


    
    // return [{...prevArray,
    // answers : !prevArray[value].answers[id].isSelected }]
  })

  // console.log(" " + value + " " + id)
  // console.log(questionsArray)

  //questionsArray[value].answers[id].isSelected = !questionsArray[value].answers[id].isSelected

  // console.log(array)


  // if (name === questionsArray[value].answers[id].answer) {
  //   console.log(name)
  // }
  
  // console.log(questionsArray)


}

console.log(array)


const questionsElement = array.map(question => {



  return <Question
  key={question.id} 
  question={question.question}
  answers={question.answers}
  handleAnswer={selectAnswer}
  questionIndex={question.index}
  isSelected={question.answers[0].isSelected}

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
