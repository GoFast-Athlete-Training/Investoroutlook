export default function TheAsk() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-left space-y-8">
      <h2 className="text-3xl font-bold text-blue-900">The Ask</h2>
      
      <div className="space-y-4">
        <p className="text-xl font-semibold text-gray-800">
          Raising: <strong className="text-blue-900">$250K pre-seed SAFE</strong>
        </p>

        <p className="text-base text-gray-700 leading-relaxed">
          Purpose: 12-month runway to refine the product and prove traction through DC clubs and events.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Use of Funds (Milestone-Based)</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Allocation</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Focus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Product & Platform</td>
                <td className="border border-gray-300 px-4 py-2">40%</td>
                <td className="border border-gray-300 px-4 py-2">Upgrade the Community Stack, improve club tools, data integrations</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Community Activation</td>
                <td className="border border-gray-300 px-4 py-2">30%</td>
                <td className="border border-gray-300 px-4 py-2">Onboard 15+ DC run clubs, race partnerships, brand presence</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Marketing & Sponsorships</td>
                <td className="border border-gray-300 px-4 py-2">15%</td>
                <td className="border border-gray-300 px-4 py-2">Local events, race activations, early sponsor alignment</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Business Ops & Overhead</td>
                <td className="border border-gray-300 px-4 py-2">15%</td>
                <td className="border border-gray-300 px-4 py-2">Founder expenses, consultants, admin, and infra costs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 text-base text-gray-700">
        <p><strong>Runway: ~12 months</strong></p>
        <p>Goal: fully activate one metro market, validate engagement + growth loop, and prepare for seed round.</p>
      </div>
    </div>
  )
}

