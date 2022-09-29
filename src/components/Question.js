import play from '../assets/img/seta_play.png'
import {useState} from 'react'
import setaVirar from '../assets/img/seta_virar.png'

function TurnedQuestion({question, answer}) {
  const [showAnswer, setShowAnswer] = useState(question)

  return(
    <div data-identifier="flashcard-index-item flashcard-answer" className="pergunta-aberta">
      <p>{showAnswer}</p>
      <img
        data-identifier="flashcard-turn-btn"
        onClick={()=> setShowAnswer(answer)}
        src={setaVirar}
        alt="turn"
      />
    </div>
  )
}

export default function Question({ index, question, answer }) {

  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <>
      {!showQuestion ? (
        <div data-identifier="flashcard" className="pergunta-fechada">
      <p>{`Pergunta ${index + 1}`}</p>
      <img
        data-identifier="flashcard-show-btn"
        onClick={() => setShowQuestion(true)}
        src={play}
        alt="Play"
      />
    </div>
      ): (<TurnedQuestion question={question} answer={answer} />)}
    </>
  )
}