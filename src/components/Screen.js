import FlashCards from './FlashCards'
import Header from './Header'
import Footer from './Footer'

export default function Screen() {
  return (
    <div className="screen-container">
      <Header />
      <FlashCards />
      <Footer />
    </div>
  )
}
