import SectionLayout from '../../components/SectionLayout'
import CTAButton from '../../components/CTAButton'
import PillarGrid from '../../components/PillarGrid'
import { FiUsers, FiCalendar, FiHeart } from 'react-icons/fi'
import images from '../../data/images.json'

export default function InvestorIndex() {
  return (
    <SectionLayout
      title="Build and Grow Your Running Club"
      subtitle="All-in-one home for crews, events, and coaching"
      imageUrl={images.intro}
      next={{ href: '/investor/problem', label: 'The Problem' }}
    >
      <div className="text-slate-300 space-y-8">
        <p>Launch your club, run better events, and give runners a place to belong.</p>
        <PillarGrid
          pillars={[
            { title: 'Community', body: 'Social feed, DMs, groups and roles built for real clubs.', icon: <FiUsers /> },
            { title: 'Events', body: 'Plan runs, RSVPs, check-ins, dues and payments in one place.', icon: <FiCalendar /> },
            { title: 'Coaching', body: 'Programs, messaging, and Ask-a-Pro to level up your runners.', icon: <FiHeart /> },
          ]}
        />
        <div>
          <CTAButton to="/investor/problem">The Problem</CTAButton>
        </div>
      </div>
    </SectionLayout>
  )
}


