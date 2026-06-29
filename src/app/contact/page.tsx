import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ContactHero } from '@/components/sections/ContactHero'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://everlough.com'
const PAGE_URL = `${SITE_URL}/contact`

export const metadata: Metadata = {
  title:       'Contact | Everlough Group',
  description: 'Speak with Everlough Group about an acquisition, advisory mandate or partnership. Reach us at enquiries@everlough.com or +353 1 685 3600. Offices in Dublin, Belfast and London.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url:         PAGE_URL,
    title:       'Contact | Everlough Group',
    description: 'Speak with Everlough Group about an acquisition, advisory mandate or partnership. Offices in Dublin, Belfast and London.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type':    'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',    item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: PAGE_URL },
  ],
}

const contactPageSchema = {
  '@context':  'https://schema.org',
  '@type':     'ContactPage',
  '@id':       `${PAGE_URL}/#webpage`,
  url:          PAGE_URL,
  name:        'Contact | Everlough Group',
  description: 'Speak with Everlough Group about an acquisition, advisory mandate or partnership.',
  isPartOf:    { '@id': `${SITE_URL}/#website` },
  breadcrumb:  breadcrumbSchema,
  mainEntity:  { '@id': `${SITE_URL}/#org` },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Navbar />
      <main className="pb-16 md:pb-20 xl:pb-[120px]">
        <ContactHero />
      </main>
      <Footer />
    </>
  )
}
