import { questions } from "../questions"
import { useEffect, useState } from "react"

export default function Question(props) {
  const questionNumber = questions[props.id][props.question] 
  return(
    <section className="question container">
      <h3 className="text-light border border-primary border-4">{questionNumber.question}</h3>
      <button className='btn btn-primary text-light' onClick={()=>props.onClick('A')}>A: {questionNumber.A}</button>
      <button className='btn btn-primary text-light' onClick={()=>props.onClick('B')}>B: {questionNumber.B}</button>
      <button className='btn btn-primary text-light' onClick={()=>props.onClick('C')}>C: {questionNumber.C}</button>
      <button className='btn btn-primary text-light' onClick={()=>props.onClick('D')}>D: {questionNumber.D}</button>

    </section>
  )
}