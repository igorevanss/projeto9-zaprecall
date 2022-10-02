import FlashCards from './FlashCards'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'

export default function Screen() {
  const [data, setData] = useState([])
  const childToParent = (clickedCard) => {
    setData(clickedCard)
  }
  return (
    <div className="screen-container">
      <Header />
      <FlashCards childToParent={childToParent} />
      <Footer />
    </div>
  )
}
