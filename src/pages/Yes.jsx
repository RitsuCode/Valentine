import { useNavigate } from 'react-router-dom'
import catto from '../assets/catto.gif'

function Yes() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="content success">
        <img src={catto} alt="happy cat" className="gif-image" />
        <h1>🎉 Yay! 🎉</h1>
        <p>I love you mongyy {'<'}33</p>
        <p>Kiss kiss {'( ˘ ³˘)♥︎'}</p>
        
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Start Over
        </button>
      </div>
    </div>
  )
}

export default Yes