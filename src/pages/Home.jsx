import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import sadCat from '../assets/sad-cat.gif'

function Home() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [messageIndex, setMessageIndex] = useState(0)
  const navigate = useNavigate()

  const messages = [
    'Please say yes!',
    'Lah',
    'Di mo na aq lab?',
    'Pretty please?',
    'Nakabili na aq gift :<',
    'Why are u like this?',
    'Stop stepping on my dreams',
    'iiyak aq fr',
    'Last chance! (jk, I\'ll keep trying)',
    'but but but',
  ]

  const handleNoHover = () => {
    // Use smaller range on mobile devices
    const maxRange = window.innerWidth < 640 ? 100 : 150
    const randomX = Math.random() * maxRange * 2 - maxRange
    const randomY = Math.random() * maxRange * 2 - maxRange
    setNoPosition({ x: randomX, y: randomY })
    setMessageIndex((prev) => (prev + 1) % messages.length)
  }

  const handleYes = () => {
    navigate('/yes')
  }

  return (
    <div className="container">
      <div className="content">
        <img src={sadCat} alt="sad cat" className="gif-image" />
        <h1>💕 Will you be my Valentine? 💕</h1>
        <p>{messages[messageIndex]}</p>
        
        <div className="buttons">
          <button className="btn btn-yes" onClick={handleYes}>
            Yes! 
          </button>
          <button
            className="btn btn-no"
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            onClick={handleNoHover}
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
