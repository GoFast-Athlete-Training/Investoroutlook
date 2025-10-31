import { Link } from 'react-router-dom'

export default function CoreFeatures() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-left space-y-6">
      <h2 className="text-3xl font-bold text-blue-900">Core Features</h2>
      
      <p className="text-2xl font-bold text-gray-800 mb-8">
        Train. Connect. Compete.
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Training Plans & Readiness Analysis
          </h3>
          <p className="text-base text-gray-700 leading-relaxed">
            Personalized insights from your Garmin + Strava data to help you peak for race day.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Runner Matching Service
          </h3>
          <p className="text-base text-gray-700 leading-relaxed">
            Find and connect with others training for the same distance, pace, or event.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Start Crews & Club Challenges
          </h3>
          <p className="text-base text-gray-700 leading-relaxed">
            Build local groups, track group performance, and compete together — not just online, but IRL.
          </p>
        </div>
      </div>

      <Link
        to="/market-opportunity"
        className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 mt-6"
      >
        Market Opportunity
      </Link>
    </div>
  )
}

