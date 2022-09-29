import questions from './Questions'
import Question from './Question'

export default function FlashCards() {
  return (
    <>
      {questions.map((option, index) => (
        <Question
          question={option.Q}
          answer={option.R}
          key={index}
          index={index}
        />
      ))}
    </>
  )
}
