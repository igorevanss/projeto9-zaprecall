import questions from './questions'
import Question from './Question'
import { useState } from 'react'

let questionData = questions.map((option)=> (
  {...option, 
  tap:false}
))

export default function FlashCards({clickedBtn}) {
  const [allQuestions, setAllQuestions] = useState(questionData)
  
  function tapCard(questionIndex){
    const newQuestions = allQuestions.map((eachQuestion, index)=>{
      if(questionIndex === index){
        return{
          ...eachQuestion,
          tap:true
        }
      }else{
          return{
            ...eachQuestion,
          tap:false
          }
      }
    })
    setAllQuestions([...newQuestions])
  }

  return(
    <>
      {allQuestions.map((option, index) => (
        <Question
          question={option.Q}
          answer={option.R}
          key={index}
          index={index}
          tap={option.tap}
          tapCard={tapCard}
          clickedBtn={clickedBtn}
        />
      ))}
    </>
  )
}
