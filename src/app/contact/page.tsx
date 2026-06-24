import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title:       'Contact',
  description: 'Speak with the Everlough team.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[90px]">
        {/* Contact form coming soon */}
      </main>
      <Footer />
    </>
  )
}
