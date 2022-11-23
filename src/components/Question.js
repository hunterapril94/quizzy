import { questions } from "../questions"
import { useEffect, useState } from "react"

export default function Question(props) {
  const questionNumber = questions[props.id][props.question] 
  return(
    <section className="question">
      <h3>{questionNumber.question}</h3>
      <button onClick={()=>props.onClick('A')}>A: {questionNumber.A}</button>
      <button onClick={()=>props.onClick('B')}>B: {questionNumber.B}</button>
      <button onClick={()=>props.onClick('C')}>C: {questionNumber.C}</button>
      <button onClick={()=>props.onClick('D')}>D: {questionNumber.D}</button>

    </section>
  )
}