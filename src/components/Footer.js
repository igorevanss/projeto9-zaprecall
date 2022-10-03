import questions from './questions'
import { useState } from "react"

export default function Footer({childToParent}) {
  function memoryBtn(optionClicked) {
    childToParent(optionClicked)
    addCounter()
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
