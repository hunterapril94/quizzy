import Question from "./Question"
import Select from "./Select"
import { useState } from "react"
import Results from "./Results"

export default function Quiz() {
  const [display, setDisplay] = useState('select')
  const [quiz, setQuiz] = useState(0)
  const [question, setQuestion] = useState(0)
  const [results, setResults] = useState({
    A: 0,
    B: 0,
    C: 0,
    D: 0
  })

  const onClickSelect = function(id) {
    setQuiz(id)
    setDisplay('question')
    console.log(quiz)
    console.log(display)
  }
  const onClickQuestion = function(id) {
    setResults({...results, id: results[id]+1 })
    question === 5 ? setDisplay('results') : setQuestion(question+1)
  }
  return(
    <div className="quiz">
      {display === 'select' ? <Select onClick = {onClickSelect} /> : ''}
      {display === 'question' ? <Question id={quiz} onClick={onClickQuestion} question={question} /> : ''}
      {display === 'results' ? <Results /> : ''}
    </div>
  )
}