import SectionLayout from '../../components/SectionLayout'
import CTAButton from '../../components/CTAButton'
import links from '../../data/links.json'
import images from '../../data/images.json'

export default function Solution() {
  return (
    <SectionLayout
      title="GoFast: The Digital Layer for Real-World Running."
      subtitle="Connect runners, coaches, and clubs in one ecosystem — messaging, events, data, and pro access in a single experience."
      imageUrl={images.solution}
      prev={{ href: '/investor/problem', label: 'Back: The Gap' }}
      next={{ href: '/investor/tam', label: 'Market Opportunity' }}
    >
      <div className="text-slate-100/90 space-y-6">
        <div className="flex items-center gap-4">
          <img src="/gofast-logo.jpg" alt="GoFast" className="h-10 w-auto rounded" />
          <div className="text-sm text-slate-300">Built for real running clubs — not generic feeds.</div>
        </div>
        <p>It’s not social media. It’s community infrastructure.</p>
        <div className="flex gap-3">
          <a href={links.demo} target="_blank" rel="noreferrer" className="inline-block px-5 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white">View Demo</a>
          <CTAButton to="/investor/tam">Next: TAM</CTAButton>
        </div>
      </div>
    </SectionLayout>
  )
}


