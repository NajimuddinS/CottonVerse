import {HashRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Anime from './pages/Anime'
import Tshirts from './pages/Tshirts'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/themes/anime" element={<Anime />} />
        <Route path="/tshirts" element={<Tshirts />} />
      </Routes>
    </HashRouter>
  )
}

export default App