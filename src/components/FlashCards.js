import play from '../assets/img/seta_play.png'
import questions from './Questions'

function Question({number}) {
  return (
    <div data-identifier="flashcard" className="pergunta-fechada">
      <p>Pergunta {number}</p>
      <img data-identifier="flashcard-show-btn" onClick={''} src={play} alt="Play" />
    </div>
  )
}

export default function FlashCards() {
  return (
    <>
      {questions.map((option, index) => (
        <Question
          question={option.Q}
          answer={option.R}
          number={option.N}
          key={index}
        />
      ))}
    </>
  )
}
