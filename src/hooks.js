import { useState } from "react"

export default function useClicks(id) {
  const [display, setDisplay] = useState('select')
  const [quiz, setQuiz] = useState(0)
  const [question, setQuestion] = useState(0)
  const [results, setResults] = useState({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    Final: ''
  })
  const clickSelect = function(id) {
    setQuiz(id)
    setDisplay('question')
    console.log(quiz)
    console.log(display)
  }
  
  const clickQuestion = function(id) {
    let newNumber = results[id] + 1
    let number = 0
    let final = ''
    for(const result in results) {
    if(results[result] > number) {
      number = results[result]
      final = result
    }
    }
    if(newNumber > number) {
      final = id
    }
    setResults({...results, [id]: newNumber, Final: final })
    question === 5 ? setDisplay('results') : setQuestion(question+1)
    console.log(results)
}

  return {results, question, display, quiz, clickQuestion, clickSelect }
}

