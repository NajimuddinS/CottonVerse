import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Anime from './pages/Anime'
import Tshirts from './pages/Tshirts'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/themes/anime" element={<Anime />} />
        <Route path="/tshirts" element={<Tshirts />} />
      </Routes>
    </Router>
  )
}

export default App