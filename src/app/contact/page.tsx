import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ContactHero } from '@/components/sections/ContactHero'

export const metadata: Metadata = {
  title:       'Contact — Everlough Group',
  description: "A thirty-minute call. We come with a specific view on the situation. You decide whether it's worth taking further.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
      </main>
      <Footer />
    </>
  )
}
