import questions from './questions'
import error from "../assets/img/icone_erro.png"
import almost from "../assets/img/icone_quase.png"
import correct from "../assets/img/icone_certo.png"
import { useState } from "react"

export default function Footer() {
  function memoryBtn(optionClicked) {
    if (optionClicked === 'Não lembrei' && tap === true) {
      forgot()
      addCounter()
    } else if (optionClicked === 'Quase não lembrei' && tap === true) {
      almostForgot()
      addCounter()
    } else if (optionClicked === 'Zap!' && tap === true) {
      zap()
      addCounter()
    }
  }

  function forgot() {
    return (
      <div data-identifier="flashcard" className="pergunta-fechada">
        <p>{`Pergunta ${index + 1}`}</p>
        <img
          data-identifier="flashcard-show-btn"
          onClick={() => tapCard(index)}
          src={error}
          alt="erro"
        />
      </div>
    )
  }

  function almostForgot() {
    return (
      <div data-identifier="flashcard" className="pergunta-fechada">
        <p>{`Pergunta ${index + 1}`}</p>
        <img
          data-identifier="flashcard-show-btn"
          onClick={() => tapCard(index)}
          src={almost}
          alt="quase"
        />
      </div>
    )
  }

  function zap() {
    return (
      <div data-identifier="flashcard" className="pergunta-fechada">
        <p>{`Pergunta ${index + 1}`}</p>
        <img
          data-identifier="flashcard-show-btn"
          onClick={() => tapCard(index)}
          src={correct}
          alt="certo"
        />
      </div>
    )
  }

  const [counter, setCounter] = useState(0)

  function addCounter() {
    if (counter < questions.length) {
      setCounter(counter + 1)
    }
  }

  return (
    <div className="footer-concluidos">
      <div className="container-botoes">
        <button
          data-identifier="forgot-btn"
          onClick={() => memoryBtn('Não lembrei')}
        >
          Não lembrei
        </button>
        <button
          data-identifier="almost-forgot-btn"
          onClick={() => memoryBtn('Quase não lembrei')}
        >
          Quase não lembrei
        </button>
        <button data-identifier="zap-btn" onClick={() => memoryBtn('Zap!')}>
          Zap!
        </button>
      </div>
      <p data-identifier="flashcard-counter">{counter}/{questions.length} CONCLUÍDOS</p>
    </div>
  )
}
