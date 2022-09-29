import play from '../assets/img/seta_play.png'
import {useState} from 'react'

function TurnedQuestion() {
  return(
    <>
      Pergunta
    </>
  )
}

export default function Question({ index }) {

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
      ): (<TurnedQuestion />)}
    </>
  )
}