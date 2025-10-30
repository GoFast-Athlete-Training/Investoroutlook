import SectionLayout from '../../components/SectionLayout'
import CTAButton from '../../components/CTAButton'
import images from '../../data/images.json'

export default function Solution() {
  return (
    <SectionLayout
      title="The Solution — GoFast for Clubs"
      subtitle="Social + scheduling + payments + coaching in one place."
      imageUrl={images.solution}
      prev={{ href: '/investor/problem', label: 'Problem' }}
      next={{ href: '/investor/tam', label: 'Market' }}
    >
      <div className="text-slate-300 space-y-4">
        <div className="flex gap-3">
          <CTAButton to="/demo" variant="secondary">Watch Demo</CTAButton>
          <CTAButton to="/investor/tam">Next: TAM</CTAButton>
        </div>
      </div>
    </SectionLayout>
  )
}


