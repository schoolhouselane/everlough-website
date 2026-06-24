import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title:       'Portfolio',
  description: 'The businesses Everlough owns and operates.',
}

export default function PortfolioPage() {
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
