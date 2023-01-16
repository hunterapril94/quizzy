import Question from "./Question"
import Select from "./Select"
import Results from "./Results"
import useClicks from '../hooks'

export default function Quiz() {
  const {results, question, display, quiz, clickQuestion, clickSelect } = useClicks()
  return(
    <div className="quiz">
      {display === 'select' ? <Select onClick = {clickSelect} /> : ''}
      {display === 'question' ? <Question id={quiz} onClick={clickQuestion} question={question} /> : ''}
      {display === 'results' ? <Results final={results.Final} quiz={quiz} /> : ''}
    </div>
  )
}