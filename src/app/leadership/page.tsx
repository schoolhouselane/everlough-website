import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LeadershipHero } from '@/components/sections/LeadershipHero'
import { LeadershipTeam } from '@/components/sections/LeadershipTeam'
import { LeadershipCTA } from '@/components/sections/LeadershipCTA'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://everlough.com'
const PAGE_URL = `${SITE_URL}/leadership`

export const metadata: Metadata = {
  title:       'Leadership | Everlough Group',
  description: 'Meet the Everlough leadership team: operating principals who hold board and executive roles inside the businesses the group owns across Ireland and the UK.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url:         PAGE_URL,
    title:       'Leadership | Everlough Group',
    description: 'Meet the Everlough leadership team: operating principals who hold board and executive roles inside the businesses the group owns across Ireland and the UK.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type':    'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Leadership', item: PAGE_URL },
  ],
}

const teamSchema = [
  {
    '@context':  'https://schema.org',
    '@type':     'Person',
    name:        "Keith O'Loughlin",
    jobTitle:    'Chairman',
    worksFor:    { '@type': 'Organization', name: 'Everlough Group', url: SITE_URL },
    url:          PAGE_URL,
  },
  {
    '@context':  'https://schema.org',
    '@type':     'Person',
    name:        'Aine Gleghorne',
    jobTitle:    'Chief Financial Officer',
    worksFor:    { '@type': 'Organization', name: 'Everlough Group', url: SITE_URL },
    url:          PAGE_URL,
  },
  {
    '@context':  'https://schema.org',
    '@type':     'Person',
    name:        'Andy Hoskins',
    jobTitle:    'Advisor to the Board',
    worksFor:    { '@type': 'Organization', name: 'Everlough Group', url: SITE_URL },
    url:          PAGE_URL,
  },
  {
    '@context':  'https://schema.org',
    '@type':     'Person',
    name:        'Darren Mc Grath',
    jobTitle:    'Chief Marketing Officer',
    worksFor:    { '@type': 'Organization', name: 'Everlough Group', url: SITE_URL },
    url:          PAGE_URL,
  },
  {
    '@context':  'https://schema.org',
    '@type':     'Person',
    name:        'Adam Ferris',
    jobTitle:    'Managing Director',
    worksFor:    { '@type': 'Organization', name: 'Everlough Group', url: SITE_URL },
    url:          PAGE_URL,
  },
]

const webPageSchema = {
  '@context':  'https://schema.org',
  '@type':     'WebPage',
  '@id':       `${PAGE_URL}/#webpage`,
  url:          PAGE_URL,
  name:        'Leadership | Everlough Group',
  description: 'Meet the Everlough leadership team: operating principals who hold board and executive roles inside the businesses the group owns.',
  isPartOf:    { '@id': `${SITE_URL}/#website` },
  breadcrumb:  breadcrumbSchema,
}

export default function LeadershipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
      <Navbar />
      <main>
        <LeadershipHero />
        <LeadershipTeam />
        <LeadershipCTA />
      </main>
      <Footer />
    </>
  )
}
