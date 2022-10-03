import play from '../assets/img/seta_play.png'
import { useState } from 'react'
import setaVirar from '../assets/img/seta_virar.png'
import error from '../assets/img/icone_erro.png'
import almost from '../assets/img/icone_quase.png'
import correct from '../assets/img/icone_certo.png'
import styled from 'styled-components'

function TurnedQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(question)

  return (
    <div
      data-identifier="flashcard-index-item flashcard-answer"
      className="pergunta-aberta"
    >
      <p>{showAnswer}</p>
      <img
        data-identifier="flashcard-turn-btn"
        onClick={() => setShowAnswer(answer)}
        src={setaVirar}
        alt="turn"
      />
    </div>
  )
}

function Forgot({ index }) {
  return (
    <div className="pergunta-fechada">
      <p>{`Pergunta ${index + 1}`}</p>
      <img src={error} alt="erro" />
    </div>
  )
}

function AlmostForgot({ index }) {
  return (
    <div className="pergunta-fechada">
      <p>{`Pergunta ${index + 1}`}</p>
      <img src={almost} alt="quase" />
    </div>
  )
}

function Zap({ index }) {
  return (
    <div data-identifier="flashcard" className="pergunta-fechada">
      <p>{`Pergunta ${index + 1}`}</p>
      <img src={correct} alt="certo" />
    </div>
  )
}

export default function Question({
  index,
  question,
  answer,
  tap,
  tapCard,
  clickedBtn
}) {
  return (
    <>
      {!tap ? (
        <div data-identifier="flashcard" className="pergunta-fechada">
          <p>{`Pergunta ${index + 1}`}</p>
          <img
            data-identifier="flashcard-show-btn"
            onClick={() => tapCard(index)}
            src={play}
            alt="Play"
          />
        </div>
      ) : (
        <TurnedQuestion question={question} answer={answer} />)}
    </>
  )
}

