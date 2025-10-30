import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import InvestorIndex from './pages/investor/index'
import Problem from './pages/investor/problem'
import Solution from './pages/investor/solution'
import Tam from './pages/investor/tam'
import Differentiator from './pages/investor/differentiator'
import Model from './pages/investor/model'
import Financials from './pages/investor/financials'
import Ask from './pages/investor/ask'
import Team from './pages/investor/team'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/investor', element: <InvestorIndex /> },
  { path: '/investor/problem', element: <Problem /> },
  { path: '/investor/solution', element: <Solution /> },
  { path: '/investor/tam', element: <Tam /> },
  { path: '/investor/differentiator', element: <Differentiator /> },
  { path: '/investor/model', element: <Model /> },
  { path: '/investor/financials', element: <Financials /> },
  { path: '/investor/ask', element: <Ask /> },
  { path: '/investor/team', element: <Team /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


