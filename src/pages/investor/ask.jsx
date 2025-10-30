import SectionLayout from '../../components/SectionLayout'
import images from '../../data/images.json'

export default function Ask() {
  return (
    <SectionLayout
      title="Get Involved"
      subtitle="Want to pilot with your club or partner locally? Let’s talk."
      imageUrl={images.ask}
      prev={{ href: '/investor/financials', label: 'Financials' }}
      next={{ href: '/investor/team', label: 'Team' }}
    >
      <div className="space-y-8">
        <a href="#" className="inline-block px-5 py-3 rounded bg-orange-500 hover:bg-orange-400 text-white">Contact Us</a>
      </div>
    </SectionLayout>
  )
}


