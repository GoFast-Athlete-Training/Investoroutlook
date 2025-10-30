import SectionLayout from '../../components/SectionLayout'

export default function Team() {
  return (
    <SectionLayout
      title="The Founder"
      prev={{ href: '/investor/ask', label: 'Ask' }}
    >
      <div className="space-y-2 text-slate-200">
        <div className="text-2xl font-semibold">Adam Cole — Runner. Veteran. Coder. Community Builder.</div>
        <p>
          “Ex-fintech founder (Africa). 14-year non-profit founder. Developer and marketer building the platform he needed.”
        </p>
      </div>
    </SectionLayout>
  )
}


