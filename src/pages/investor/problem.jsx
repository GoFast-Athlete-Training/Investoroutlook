import SectionLayout from '../../components/SectionLayout'
import CTAButton from '../../components/CTAButton'
import images from '../../data/images.json'

export default function Problem() {
  return (
    <SectionLayout
      title="Running’s Biggest Gap: No Digital Home for IRL Clubs."
      subtitle="After COVID, running exploded — yet real-world run clubs still rely on text threads and spreadsheets. Apps chase dopamine and metrics — not community."
      imageUrl={images.problem}
      next={{ href: '/investor/solution', label: 'See the Solution' }}
    >
      <div className="text-slate-100/90 space-y-4">
        <p>Runners crave connection, coaches crave tools, and brands crave authenticity.</p>
        <p>There’s no platform built for all three. That’s the gap.</p>
        <CTAButton to="/investor/solution">See the Solution</CTAButton>
      </div>
    </SectionLayout>
  )
}


