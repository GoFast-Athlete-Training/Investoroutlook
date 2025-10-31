import { Link } from 'react-router-dom'

export default function GoToMarket() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-left space-y-6">
      <h2 className="text-3xl font-bold text-blue-900">Go-to-Market</h2>
      
      <p className="text-2xl font-bold text-gray-800 mb-6">
        Start Local → Scale Regional
      </p>

      <ul className="list-disc list-inside space-y-3 text-base text-gray-700 leading-relaxed">
        <li>Launch with DC run clubs and major local races</li>
        <li>Build credibility through presence and support to runner ecosystem</li>
        <li>Expand city-by-city once engagement is proven</li>
      </ul>

      <Link
        to="/financial-outlook"
        className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 mt-6"
      >
        Financial Outlook
      </Link>
    </div>
  )
}

