import { quizzes } from "../quizzes"

export default function Results(props) {
  const final = props.final
  const result = quizzes[props.quiz].answers[final]
  return(
    <section>
      <h3>You are a {result.title}</h3>
      <p>{result.description}</p>
    </section>
  )
}