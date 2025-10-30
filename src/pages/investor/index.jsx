import SectionLayout from '../../components/SectionLayout'
import CTAButton from '../../components/CTAButton'
import images from '../../data/images.json'

export default function InvestorIndex() {
  return (
    <SectionLayout
      title="Build and Grow Your Running Club"
      subtitle="All-in-one home for crews, events, and coaching"
      imageUrl={images.intro}
      next={{ href: '/investor/problem', label: 'The Problem' }}
    >
      <div className="text-slate-300 space-y-6">
        <p>Launch your club, run better events, and give runners a place to belong.</p>
        <CTAButton to="/investor/problem">The Problem</CTAButton>
      </div>
    </SectionLayout>
  )
}


