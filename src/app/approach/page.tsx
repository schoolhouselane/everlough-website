import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ApproachHero } from '@/components/sections/ApproachHero'
import { ApproachAdvisers } from '@/components/sections/ApproachAdvisers'
import { ApproachQuote } from '@/components/sections/ApproachQuote'
import { ApproachOperatingModel } from '@/components/sections/ApproachOperatingModel'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://everlough.com'
const PAGE_URL = `${SITE_URL}/approach`

export const metadata: Metadata = {
  title:       'How We Operate | Everlough Group',
  description: 'Everlough takes control or material influence as a starting condition. We place operators in the seats, deploy patient capital and build businesses through discipline — not financial engineering.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url:         PAGE_URL,
    title:       'How We Operate | Everlough Group',
    description: 'Everlough takes control or material influence as a starting condition. We place operators in the seats, deploy patient capital and build businesses through discipline.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type':    'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',         item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'How We Operate', item: PAGE_URL },
  ],
}

const webPageSchema = {
  '@context':  'https://schema.org',
  '@type':     'WebPage',
  '@id':       `${PAGE_URL}/#webpage`,
  url:          PAGE_URL,
  name:        'How We Operate | Everlough Group',
  description: 'Everlough takes control or material influence as a starting condition. We place operators in the seats, deploy patient capital and build businesses through discipline.',
  isPartOf:    { '@id': `${SITE_URL}/#website` },
  breadcrumb:  breadcrumbSchema,
}

export default function ApproachPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
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
