import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LeadershipHero } from '@/components/sections/LeadershipHero'
import { LeadershipTeam } from '@/components/sections/LeadershipTeam'
import { LeadershipCTA } from '@/components/sections/LeadershipCTA'

export const metadata: Metadata = {
  title:       'Leadership | Everlough Group',
  description: 'Everlough is run by a small group of operating principals who hold board and executive roles inside the businesses the group owns.',
}

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <main>
        <LeadershipHero />
        <LeadershipTeam />
        <LeadershipCTA />
      </main>
      <Footer />
    </>
  )
}
