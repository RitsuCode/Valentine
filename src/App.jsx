import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Yes from './pages/Yes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yes" element={<Yes />} />
      </Routes>
    </Router>
  )
}

export default App
