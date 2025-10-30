import SectionLayout from '../../components/SectionLayout'
import CTAButton from '../../components/CTAButton'

export default function InvestorIndex() {
  return (
    <SectionLayout
      title="The Future of Run Community is Here."
      subtitle="Modular investor narrative"
      next={{ href: '/investor/problem', label: 'Next: Problem' }}
    >
      <div className="text-slate-300 space-y-6">
        <p>Explore the GoFast story, one focused section at a time.</p>
        <CTAButton to="/investor/problem">Start with the Problem</CTAButton>
      </div>
    </SectionLayout>
  )
}


