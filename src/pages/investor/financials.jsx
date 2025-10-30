import SectionLayout from '../../components/SectionLayout'
import ProjectionTable from '../../components/ProjectionTable'
import UseOfFundsChart from '../../components/UseOfFundsChart'
import data from '../../data/financials.json'
import images from '../../data/images.json'

export default function Financials() {
  return (
    <SectionLayout
      title="Financial Outlook — From Launch to Lift-Off"
      imageUrl={images.financials}
      prev={{ href: '/investor/model', label: 'Model' }}
      next={{ href: '/investor/ask', label: 'Ask' }}
    >
      <div className="space-y-10">
        <ProjectionTable rows={data.table} />
        <div>
          <div className="text-xl font-semibold mb-3">Use of Funds</div>
          <UseOfFundsChart items={data.useOfFunds} />
        </div>
      </div>
    </SectionLayout>
  )
}


