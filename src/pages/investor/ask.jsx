import SectionLayout from '../../components/SectionLayout'

export default function Ask() {
  return (
    <SectionLayout
      title="Join the Round"
      subtitle="Raising $250,000 pre-seed SAFE with pro-rata rights. Help build the platform runners are waiting for."
      prev={{ href: '/investor/financials', label: 'Financials' }}
      next={{ href: '/investor/team', label: 'Team' }}
    >
      <a href="#" className="inline-block px-5 py-3 rounded bg-indigo-600 hover:bg-indigo-500">Request the Deck</a>
    </SectionLayout>
  )
}


