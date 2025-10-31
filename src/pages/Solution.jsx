import { Link } from 'react-router-dom'

export default function Solution() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-left space-y-6">
      <h2 className="text-3xl font-bold text-blue-900">The Solution</h2>
      
      <p className="text-lg text-gray-700 leading-relaxed font-semibold">
        GoFast — a platform that helps you train smarter and connect with runners who want to get faster.
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        It's not another social feed — it's the connection layer between your data, your training, and your crew.
      </p>

      <ul className="list-disc list-inside space-y-2 text-base text-gray-700 leading-relaxed">
        <li>Syncs with Garmin and Strava for effortless tracking.</li>
        <li>Builds real-world connections through RunCrews and clubs.</li>
        <li>Surfaces nearby runners training for the same goals and pace.</li>
        <li>Gives pros and coaches tools to engage directly with athletes.</li>
      </ul>

      <p className="text-base text-gray-700 leading-relaxed mt-4">
        GoFast turns running from a solo activity into a shared mission.
      </p>

      <Link
        to="/core-features"
        className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 mt-6"
      >
        Core Features
      </Link>
    </div>
  )
}

