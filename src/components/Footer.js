import questions from './questions'

export default function Footer() {
  return (
    <div className="footer-concluidos">
      <div className="container-botoes">
        <button data-identifier="forgot-btn" onClick={''}>Não lembrei</button>
        <button data-identifier="almost-forgot-btn">Quase não lembrei</button>
        <button data-identifier="zap-btn">Zap!</button>
      </div>
      <p data-identifier="flashcard-counter">0/{questions.length} CONCLUÍDOS</p>
    </div>
  )
};
