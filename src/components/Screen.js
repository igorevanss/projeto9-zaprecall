import FlashCards from './FlashCards'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'

export default function Screen() {
  const [data, setData] = useState('')

  const childToParent = (childInfos) => {
    setData(childInfos)
  }

  return (
    <div className="screen-container">
      <Header />
      <FlashCards clickedBtn={data}/>
      <Footer childToParent={childToParent} />
    </div>
  )
}
