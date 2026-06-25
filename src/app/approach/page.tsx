import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ApproachHero } from '@/components/sections/ApproachHero'
import { ApproachAdvisers } from '@/components/sections/ApproachAdvisers'
import { ApproachQuote } from '@/components/sections/ApproachQuote'
import { ApproachOperatingModel } from '@/components/sections/ApproachOperatingModel'

export const metadata: Metadata = {
  title:       'How We Operate — Everlough Group',
  description: 'Everlough takes control or material influence as a starting condition. Every business we own has an Everlough operator in a seat.',
}

export default function ApproachPage() {
  return (
    <>
      <Navbar />
      <main>
        <ApproachHero />
        <ApproachAdvisers />
        <ApproachQuote />
        <ApproachOperatingModel />
      </main>
      <Footer />
    </>
  )
}
