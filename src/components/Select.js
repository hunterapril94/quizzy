import { quizzes } from "../quizzes"

export default function Select(props) {
  return (
  <section className="select container">
    <h2 className="text-light border border-primary border-4">Select Quiz</h2>
    {quizzes.map((quiz, index) => <button className="btn btn-primary primary" key={index} onClick={() => props.onClick(index)}>{quiz.title}</button>)}
  </section>
  )
}