import SectionLayout from '../../components/SectionLayout'
import AnimatedCounter from '../../components/AnimatedCounter'

export default function Tam() {
  return (
    <SectionLayout
      title="The Market Opportunity"
      prev={{ href: '/investor/solution', label: 'Solution' }}
      next={{ href: '/investor/differentiator', label: 'Why Us' }}
    >
      <div className="grid md:grid-cols-3 gap-6">
        <Stat label="Industry">
          <AnimatedCounter to={50000000000} prefix="$" />
        </Stat>
        <Stat label="U.S. Runners">
          <AnimatedCounter to={60000000} />
        </Stat>
        <Stat label="Fastest Growing Age">
          <span className="text-3xl">25–45</span>
        </Stat>
      </div>
    </SectionLayout>
  )
}

function Stat({ label, children }) {
  return (
    <div className="rounded-lg bg-slate-900 p-6 text-center">
      <div className="text-slate-400 mb-2">{label}</div>
      <div className="text-2xl font-semibold">{children}</div>
    </div>
  )
}


