import SectionLayout from '../../components/SectionLayout'
import images from '../../data/images.json'

export default function Differentiator() {
  const bullets = [
    'Social-first',
    'Built around real clubs',
    'Ask-a-Pro',
    'All-in-one stack',
  ]
  return (
    <SectionLayout
      title="Why Clubs Win on GoFast"
      imageUrl={images.differentiator}
      prev={{ href: '/investor/tam', label: 'Market' }}
      next={{ href: '/investor/model', label: 'Model' }}
    >
      <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-slate-200">
        {bullets.map((b) => (
          <li key={b} className="rounded bg-slate-900 p-4">{b}</li>
        ))}
      </ul>
    </SectionLayout>
  )
}


