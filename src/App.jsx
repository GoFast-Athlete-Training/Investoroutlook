import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-indigo-900 text-white flex items-center justify-center p-8">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">GoFast Investor Deck</h1>
        <p className="text-lg md:text-xl text-slate-300">Modular, data-driven investor narrative built with Vite + React.</p>
        <Link to="/investor" className="inline-block px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-400 transition">Enter</Link>
      </div>
    </div>
  )
}


