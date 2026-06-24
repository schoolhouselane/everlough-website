import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title:       'Approach',
  description: 'How Everlough acquires, operates, and scales businesses.',
}

export default function ApproachPage() {
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
