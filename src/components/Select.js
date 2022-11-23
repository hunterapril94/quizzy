import { quizzes } from "../quizzes"

export default function Select(props) {
  return (
  <section className="select">
    {quizzes.map((quiz, index) => <button className="btn btn-primary" key={index} onClick={() => props.onClick(index)}>{quiz.title}</button>)}
  </section>
  )
}