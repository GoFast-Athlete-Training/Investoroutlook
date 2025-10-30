import SectionLayout from '../../components/SectionLayout'
import CTAButton from '../../components/CTAButton'
import links from '../../data/links.json'
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
      <div className="text-slate-300 space-y-6">
        <div className="flex items-center gap-4">
          <img src="/gofast-logo.jpg" alt="GoFast" className="h-10 w-auto rounded" />
          <div className="text-sm text-slate-400">Built for real running clubs</div>
        </div>
        <div className="flex gap-3">
          <a href={links.demo} target="_blank" rel="noreferrer" className="inline-block px-5 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white">View Demo</a>
          <CTAButton to="/investor/tam">Next: TAM</CTAButton>
        </div>
      </div>
    </SectionLayout>
  )
}


