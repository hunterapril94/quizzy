import { quizzes } from "../quizzes"

export default function Select(props) {
  return (
  <section className="question list-group">
    <h3 className="">Select</h3>
    {quizzes.map((quiz, index) => <button className="btn btn-secondary text-light list-group-item" key={index} onClick={() => props.onClick(index)}>{quiz.title}</button>)}
  </section>
  )
}