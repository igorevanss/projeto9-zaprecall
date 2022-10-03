import questions from './questions'
import { useState } from 'react'
import styled from 'styled-components'

export default function Footer({ childToParent }) {
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
    <FooterConcluidos>
      <ContainerBotoes>
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
      </ContainerBotoes>
      <p data-identifier="flashcard-counter">
        {counter}/{questions.length} CONCLUÍDOS
      </p>
    </FooterConcluidos>
  )
}

const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
  box-shadow: 4px 0px 5px rgba(0, 0, 0, 0.15);

  p {
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
  }
`
const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;

  button:first-of-type {
  width: 85px;
  height: 37px;
  font-family: 'Recursive', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: #FF3030;
  border-radius: 5px;
  border: 1px solid #FF3030;
  padding:5px;
}

button:nth-of-type(2) {
  width: 85px;
  height: 37px;
  font-family: 'Recursive', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: #FF922E;
  border-radius: 5px;
  border: 1px solid #FF922E;
  padding:5px;
}

button:last-of-type {
  width: 85px;
  height: 37px;
  font-family: 'Recursive', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: #2FBE34;
  border-radius: 5px;
  border: 1px solid #2FBE34;
  padding:5px;
}
`