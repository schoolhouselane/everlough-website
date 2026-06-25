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
      <main className="pb-16 md:pb-20 xl:pb-[120px]">
        <ContactHero />
      </main>
      <Footer />
    </>
  )
}
