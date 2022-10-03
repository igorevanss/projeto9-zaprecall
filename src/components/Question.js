import play from '../assets/img/seta_play.png'
import { useState } from 'react'
import setaVirar from '../assets/img/seta_virar.png'
import error from '../assets/img/icone_erro.png'
import almost from '../assets/img/icone_quase.png'
import correct from '../assets/img/icone_certo.png'
import styled from 'styled-components'

function TurnedQuestion({ question, answer, clickedBtn, index }) {
  const [showAnswer, setShowAnswer] = useState(question)

  return (
    <>
      {clickedBtn === 'Não lembrei' ||
      clickedBtn === 'Quase não lembrei' ||
      clickedBtn === 'Zap!' ? (
        <PerguntaRespondida clickedBtn={clickedBtn} data-identifier="flashcard">
          <p>{`Pergunta ${index + 1}`}</p>
          <img src={clickedBtn === 'Não lembrei' ? error : clickedBtn === 'Quase não lembrei' ? almost : clickedBtn === 'Zap!' ? correct : play} alt="Play" />
        </PerguntaRespondida>
      ) : (
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
      )}
    </>
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
        <TurnedQuestion
          question={question}
          answer={answer}
          clickedBtn={clickedBtn}
          index={index}
        />
      )}
    </>
  )
}

const PerguntaRespondida = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: 'Recursive', sans-serif;
    text-decoration: line-through;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => {
      const color = props.clickedBtn

      if (color === 'Não lembrei') {
        return '#FF3030'
      } else if (color === 'Quase não lembrei') {
        return '#FF922E'
      } else if(color === 'Zap!') {
        return '#2FBE34'
      } else {
        return "#333333"
      }
    }};
  }
`

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
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
  background: #ffffd5;
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

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`
