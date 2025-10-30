import SectionLayout from '../../components/SectionLayout'
import CTAButton from '../../components/CTAButton'

export default function Problem() {
  return (
    <SectionLayout
      title="The Problem"
      subtitle="Post-COVID, explosion of run clubs… no digital backbone… tracking apps aren’t community."
      prev={{ href: '/investor', label: 'Intro' }}
      next={{ href: '/investor/solution', label: 'Solution' }}
    >
      <div className="text-slate-300 space-y-4">
        <p>Runners coordinate on group chats and spreadsheets. There’s no system of record for crews, events, or local experts.</p>
        <CTAButton to="/investor/solution">See the Solution</CTAButton>
      </div>
    </SectionLayout>
  )
}


