import { quizzes } from "../quizzes"

export default function Results(props) {
  const final = props.final
  const result = quizzes[props.quiz].answers[final]
  return(
    <section className="container">
      <h3 className="text-light border border-primary border-4">You are a {result.title}</h3>
      <p className="text-light border border-primary border-4">{result.description}</p>
    </section>
  )
}