import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title:       'Leadership',
  description: 'The operators running the Everlough platform.',
}

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[90px]">
        {/* Content coming soon */}
      </main>
      <Footer />
    </>
  )
}
