import { quizzes } from "../quizzes"
import { useState } from "react"

export default function Select(props) {
  return (
  <section className="select">
    {quizzes.map((quiz, index) => <button key={index} onClick={() => props.onClick(index)}>{quiz.title}</button>)}
  </section>
  )
}