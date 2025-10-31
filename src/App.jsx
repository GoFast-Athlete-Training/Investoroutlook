import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import CompanyIntro from './pages/CompanyIntro'
import Problem from './pages/Problem'
import Solution from './pages/Solution'
import CoreFeatures from './pages/CoreFeatures'
import MarketOpportunity from './pages/MarketOpportunity'
import BusinessModel from './pages/BusinessModel'
import GoToMarket from './pages/GoToMarket'
import FinancialOutlook from './pages/FinancialOutlook'
import TheAsk from './pages/TheAsk'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/company-intro" element={<CompanyIntro />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/core-features" element={<CoreFeatures />} />
        <Route path="/market-opportunity" element={<MarketOpportunity />} />
        <Route path="/business-model" element={<BusinessModel />} />
        <Route path="/go-to-market" element={<GoToMarket />} />
        <Route path="/financial-outlook" element={<FinancialOutlook />} />
        <Route path="/the-ask" element={<TheAsk />} />
      </Routes>
    </Router>
  )
}


