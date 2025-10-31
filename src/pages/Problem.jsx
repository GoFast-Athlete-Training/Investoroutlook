import { Link } from 'react-router-dom'

export default function Problem() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-left space-y-6">
      <h2 className="text-3xl font-bold text-blue-900">The Problem</h2>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        Running tech has become disconnected from real running life.
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        Strava delivers dopamine, not depth — great for kudos, but no real communication or coordination.
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        Garmin tracks your data, but leaves it in a silo.
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        Local clubs create the community — but have no digital infrastructure to run on.
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        There's no connection layer that ties all three together: your data, your people, and your purpose.
      </p>

      <Link
        to="/solution"
        className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 mt-6"
      >
        The Solution
      </Link>
    </div>
  )
}

