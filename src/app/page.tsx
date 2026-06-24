import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { AboutStatement } from '@/components/sections/AboutStatement'
import { Services } from '@/components/sections/Services'
import { Portfolio } from '@/components/sections/Portfolio'
import { InvestmentCriteria } from '@/components/sections/InvestmentCriteria'
import { Leadership } from '@/components/sections/Leadership'
import { OperatingModel } from '@/components/sections/OperatingModel'

export const metadata: Metadata = {
  title:       'Everlough Group — Private Operating Platform',
  description: 'A hands-on operating platform built to acquire, build, and scale businesses where value is constrained by execution rather than market opportunity.',
}

export default function HomePage() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Hero
          image="/images/hero.jpg"
          headline="We operate the businesses we own."
          body="A hands-on operating platform built to acquire, build, and scale businesses where value is constrained by execution rather than market opportunity."
        />
        <AboutStatement />
        <Services />
        <Portfolio />
        <InvestmentCriteria />
        <Leadership />
        <OperatingModel />
      </main>
      <Footer />
    </>
  )
}
