import FlashCards from './FlashCards'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
import styled from 'styled-components'

export default function Screen() {
  const [data, setData] = useState('')

  const childToParent = (childInfos) => {
    setData(childInfos)
  }

  return (
    <ScreenContainer>
      <Header />
      <FlashCards clickedBtn={data}/>
      <Footer childToParent={childToParent} />
    </ScreenContainer>
  )
}

const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`