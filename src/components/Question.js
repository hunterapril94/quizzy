import { questions } from "../questions"
import { useEffect, useState } from "react"

export default function Question(props) {
  const questionNumber = questions[props.id][props.question] 
  return(
    <section className="question list-group">
      <h3 className="">{questionNumber.question}</h3>
      <button className='btn btn-secondary text-light list-group-item' onClick={()=>props.onClick('A')}>A: {questionNumber.A}</button>
      <button className='btn btn-secondary text-light list-group-item' onClick={()=>props.onClick('B')}>B: {questionNumber.B}</button>
      <button className='btn btn-secondary text-light list-group-item' onClick={()=>props.onClick('C')}>C: {questionNumber.C}</button>
      <button className='btn btn-secondary text-light list-group-item' onClick={()=>props.onClick('D')}>D: {questionNumber.D}</button>

    </section>
  )
}