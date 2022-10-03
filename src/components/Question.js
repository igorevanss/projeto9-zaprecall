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
    <PerguntaAberta
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
    </PerguntaAberta>
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
      {!tap || clickedBtn === 'Não lembrei' || clickedBtn === 'Quase não lembrei' || clickedBtn === 'Zap!' ? (
        <PerguntaFechada clickedBtn={clickedBtn} data-identifier="flashcard">
          <p>{`Pergunta ${index + 1}`}</p>
          <img
            data-identifier="flashcard-show-btn"
            onClick={() => tapCard(index)}
            src={play}
            alt="Play"
          />
        </PerguntaFechada>
      ) : (
        <TurnedQuestion question={question} answer={answer} />)}
    </>
  )
}

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
  font-family: 'Recursive', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  
}
`
const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img{
  position: absolute;
  bottom: 10px;
  right: 10px;
}
`