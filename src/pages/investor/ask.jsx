import SectionLayout from '../../components/SectionLayout'
import UseOfFundsChart from '../../components/UseOfFundsChart'
import financials from '../../data/financials.json'
import images from '../../data/images.json'

export default function Ask() {
  return (
    <SectionLayout
      title="Get Involved"
      subtitle="Want to pilot with your club or partner locally? Let’s talk."
      imageUrl={images.ask}
      prev={{ href: '/investor/financials', label: 'Financials' }}
      next={{ href: '/investor/team', label: 'Team' }}
    >
      <div className="space-y-8">
        <a href="#" className="inline-block px-5 py-3 rounded bg-indigo-600 hover:bg-indigo-500">Contact Us</a>
        <div>
          <div className="text-xl font-semibold mb-3">Use of Funds</div>
          <UseOfFundsChart items={financials.useOfFunds} />
        </div>
      </div>
    </SectionLayout>
  )
}


