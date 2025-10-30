import SectionLayout from '../../components/SectionLayout'
import images from '../../data/images.json'

export default function Model() {
  const cards = [
    { title: 'Runners', body: 'Free' },
    { title: 'Local Pros', body: '$1K/yr' },
    { title: 'Events', body: '3% fee' },
    { title: 'E-commerce', body: '10–15% take' },
    { title: 'Sponsorships', body: 'Brand integrations' },
  ]
  return (
    <SectionLayout
      title="How Clubs and Pros Earn"
      imageUrl={images.model}
      prev={{ href: '/investor/differentiator', label: 'Why Us' }}
      next={{ href: '/investor/financials', label: 'Financials' }}
    >
      <div className="grid md:grid-cols-3 gap-4">
        {cards.map((c) => (
          <div key={c.title} className="rounded-lg bg-slate-900 p-5">
            <div className="font-semibold mb-1">{c.title}</div>
            <div className="text-slate-300">{c.body}</div>
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}


