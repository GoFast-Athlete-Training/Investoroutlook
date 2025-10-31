import { Link } from 'react-router-dom'

export default function FinancialOutlook() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-left space-y-8">
      <h2 className="text-3xl font-bold text-blue-900">Financial Outlook</h2>
      
      <p className="text-base text-gray-700 leading-relaxed">
        GoFast is focused on traction before scale — validating user engagement, retention, and early monetization before expanding nationally.
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Year 1 (2026) — Proof of Concept</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Quarter</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Users</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Clubs</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Local Pros</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Revenue</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Q1 2026</td>
                  <td className="border border-gray-300 px-4 py-2">500</td>
                  <td className="border border-gray-300 px-4 py-2">5</td>
                  <td className="border border-gray-300 px-4 py-2">0</td>
                  <td className="border border-gray-300 px-4 py-2">$0</td>
                  <td className="border border-gray-300 px-4 py-2">MVP live, pre-seed closed</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Q2 2026</td>
                  <td className="border border-gray-300 px-4 py-2">2,000</td>
                  <td className="border border-gray-300 px-4 py-2">20</td>
                  <td className="border border-gray-300 px-4 py-2">10</td>
                  <td className="border border-gray-300 px-4 py-2">$5,000</td>
                  <td className="border border-gray-300 px-4 py-2">Boston activation</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Q3 2026</td>
                  <td className="border border-gray-300 px-4 py-2">6,000</td>
                  <td className="border border-gray-300 px-4 py-2">60</td>
                  <td className="border border-gray-300 px-4 py-2">25</td>
                  <td className="border border-gray-300 px-4 py-2">$15,000</td>
                  <td className="border border-gray-300 px-4 py-2">DMV rollout</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Q4 2026</td>
                  <td className="border border-gray-300 px-4 py-2">15,000</td>
                  <td className="border border-gray-300 px-4 py-2">150</td>
                  <td className="border border-gray-300 px-4 py-2">60</td>
                  <td className="border border-gray-300 px-4 py-2">$25,000</td>
                  <td className="border border-gray-300 px-4 py-2">Five-city test + first sponsors</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-base text-gray-700">
            <strong>Year 1 Revenue: ≈ $45,000</strong><br />
            Objective: Validate engagement loops, conversion from free users → paid pros & sponsors.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Year 2 (2027) — Proof to Scale</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Quarter</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Users</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Local Pros</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Revenue</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Q1 2027</td>
                  <td className="border border-gray-300 px-4 py-2">25,000</td>
                  <td className="border border-gray-300 px-4 py-2">100</td>
                  <td className="border border-gray-300 px-4 py-2">$40,000</td>
                  <td className="border border-gray-300 px-4 py-2">Adds pros + repeat events</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Q2 2027</td>
                  <td className="border border-gray-300 px-4 py-2">40,000</td>
                  <td className="border border-gray-300 px-4 py-2">150</td>
                  <td className="border border-gray-300 px-4 py-2">$75,000</td>
                  <td className="border border-gray-300 px-4 py-2">Early ad + affiliate traction</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Q3 2027</td>
                  <td className="border border-gray-300 px-4 py-2">60,000</td>
                  <td className="border border-gray-300 px-4 py-2">200</td>
                  <td className="border border-gray-300 px-4 py-2">$125,000</td>
                  <td className="border border-gray-300 px-4 py-2">Multi-market expansion</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Q4 2027</td>
                  <td className="border border-gray-300 px-4 py-2">100,000</td>
                  <td className="border border-gray-300 px-4 py-2">300</td>
                  <td className="border border-gray-300 px-4 py-2">$200,000</td>
                  <td className="border border-gray-300 px-4 py-2">Breakeven trajectory</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 space-y-2 text-base text-gray-700">
            <p><strong>Breakeven Target: Q4 2027</strong></p>
            <p><strong>Gross Margin: 80 – 85%</strong></p>
            <p><strong>Revenue Mix: 40% pros / 30% events / 20% ads / 10% commerce</strong></p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Metrics</h3>
          <ul className="list-disc list-inside space-y-2 text-base text-gray-700 leading-relaxed">
            <li><strong>User Retention:</strong> &gt; 60% month-to-month</li>
            <li><strong>Avg. Revenue per Paying Entity</strong> (pros + events): $500 – $1,000 per year</li>
            <li><strong>Runway:</strong> 12 months on $250K pre-seed</li>
          </ul>
        </div>
      </div>

      <Link
        to="/the-ask"
        className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 mt-6"
      >
        The Ask
      </Link>
    </div>
  )
}

