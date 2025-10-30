import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import CompanyIntro from './pages/CompanyIntro'
import Problem from './pages/Problem'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/company-intro" element={<CompanyIntro />} />
        <Route path="/problem" element={<Problem />} />
      </Routes>
    </Router>
  )
}


