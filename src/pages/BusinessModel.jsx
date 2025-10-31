import { Link } from 'react-router-dom'

export default function BusinessModel() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-left space-y-6">
      <h2 className="text-3xl font-bold text-blue-900">Business Model</h2>
      
      <p className="text-lg text-gray-700 leading-relaxed font-semibold">
        Free for runners and run clubs.
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        GoFast grows by powering the ecosystem around them.
      </p>

      <ul className="list-disc list-inside space-y-3 text-base text-gray-700 leading-relaxed">
        <li><strong>Local Pros</strong> – Subscription access to connect with verified athletes and clubs.</li>
        <li><strong>Events & Races</strong> – 3% revenue share on registrations and activations.</li>
        <li><strong>E-Commerce</strong> – 10–15% affiliate commissions on training, gear, and recovery products.</li>
        <li><strong>Sponsorships</strong> – Paid placements on the platform and direct sponsorship opportunities with clubs on the platform.</li>
      </ul>

      <Link
        to="/go-to-market"
        className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 mt-6"
      >
        Go-to-Market
      </Link>
    </div>
  )
}

