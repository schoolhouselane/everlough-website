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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://everlough.com'

export const metadata: Metadata = {
  title:       'Everlough Group | Private Operating Platform',
  description: 'Everlough Group acquires, stabilises and scales lower mid-market businesses across the UK and Ireland. We place operators in the seats and run businesses directly.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    url:   SITE_URL,
    title: 'Everlough Group | Private Operating Platform',
    description: 'Everlough Group acquires, stabilises and scales lower mid-market businesses across the UK and Ireland. We place operators in the seats and run businesses directly.',
  },
}

const webPageSchema = {
  '@context':           'https://schema.org',
  '@type':              'WebPage',
  '@id':                `${SITE_URL}/#webpage`,
  url:                  SITE_URL,
  name:                 'Everlough Group | Private Operating Platform',
  description:          'Everlough Group acquires, stabilises and scales lower mid-market businesses across the UK and Ireland.',
  isPartOf:             { '@id': `${SITE_URL}/#website` },
  about:                { '@id': `${SITE_URL}/#org` },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url:     `${SITE_URL}/images/homepage/homepage-hero.png`,
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Navbar />
      <main>
        <Hero
          image="/images/homepage/homepage-hero.png"
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
