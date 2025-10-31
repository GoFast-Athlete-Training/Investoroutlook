import { Link } from 'react-router-dom'

export default function MarketOpportunity() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-left space-y-6">
      <h2 className="text-3xl font-bold text-blue-900">Market Opportunity</h2>
      
      <ul className="list-disc list-inside space-y-3 text-base text-gray-700 leading-relaxed">
        <li><strong>60M+</strong> active runners in the U.S.</li>
        <li><strong>$50B</strong> global running economy</li>
        <li><strong>3M+</strong> club-affiliated runners</li>
        <li><strong>70%</strong> under age 45 — digital-native athletes</li>
      </ul>

      <p className="text-base text-gray-700 leading-relaxed mt-6 font-semibold">
        <strong>No one owns the connection layer between data, training, and community.</strong>
      </p>

      <Link
        to="/business-model"
        className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 mt-6"
      >
        Business Model
      </Link>
    </div>
  )
}

