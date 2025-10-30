import SectionLayout from '../../components/SectionLayout'
import CTAButton from '../../components/CTAButton'
import images from '../../data/images.json'

export default function Problem() {
  return (
    <SectionLayout
      title="The Problem"
      subtitle="Run clubs exploded — but there’s no digital backbone. Tracking apps aren’t community."
      imageUrl={images.problem}
      prev={{ href: '/investor', label: 'Intro' }}
      next={{ href: '/investor/solution', label: 'Solution' }}
    >
      <div className="text-slate-300 space-y-4">
        <p>Group chats and spreadsheets can’t run a club. There’s no system of record for crews, events, dues, or local pros.</p>
        <CTAButton to="/investor/solution">See the Solution</CTAButton>
      </div>
    </SectionLayout>
  )
}


