import { quizzes } from "../quizzes"

export default function Results(props) {
  const final = props.final
  const result = quizzes[props.quiz].answers[final]
  return(
    <section className="card text-white bg-info mb-3">
      <h3 className="card-header">You are a {result.title}</h3>
      <p className="card-body card-text">{result.description}</p>
    </section>
  )
}