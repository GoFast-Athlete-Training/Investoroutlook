import { Link } from 'react-router-dom'

export default function CompanyIntro() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full h-96 bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=1200&h=400&fit=crop"
          alt="Runners"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">About GoFast</h1>
        </div>
      </div>
      
      <div className="p-8 max-w-3xl mx-auto text-left space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          GoFast exists to connect runners to each other and build accountability. The only way to go fast and go far is to go together.
        </p>
        
        <p className="text-base text-gray-600">
          Click the next screen to see what problem we are trying to solve.
        </p>
        
        <Link
          to="/problem"
          className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 mt-6"
        >
          The Problem
        </Link>
      </div>
    </div>
  )
}

