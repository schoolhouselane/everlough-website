import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600', '700'],
  display:  'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://everlough.com'
const OG_IMAGE = `${SITE_URL}/images/homepage/homepage-hero.png`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:  'Everlough Group | Private Operating Platform',
    template: '%s | Everlough Group',
  },

  description:
    'Everlough Group is a private operating platform that acquires, stabilises and scales lower mid-market businesses across the UK and Ireland, run directly by operators in the seats.',

  keywords: [
    'private equity', 'operating platform', 'lower mid-market', 'business acquisition',
    'Ireland', 'United Kingdom', 'M&A', 'holding company', 'business growth',
    'Everlough', 'Everlough Group', 'Everlough Holdings',
  ],

  authors: [{ name: 'Everlough Group', url: SITE_URL }],
  creator: 'Everlough Group',
  publisher: 'Everlough Group',

  icons: {
    icon:   '/images/favicon.png',
    apple:  '/images/favicon.png',
  },

  robots: {
    index:               true,
    follow:              true,
    googleBot: {
      index:             true,
      follow:            true,
      'max-image-preview': 'large',
      'max-snippet':     -1,
    },
  },

  openGraph: {
    type:        'website',
    locale:      'en_IE',
    siteName:    'Everlough Group',
    title:       'Everlough Group | Private Operating Platform',
    description: 'A private operating platform that acquires, stabilises and scales lower mid-market businesses across the UK and Ireland.',
    url:         SITE_URL,
    images: [
      {
        url:    OG_IMAGE,
        width:  1530,
        height: 715,
        alt:    'Everlough Group — Private Operating Platform',
      },
    ],
  },

  twitter: {
    card:        'summary_large_image',
    title:       'Everlough Group | Private Operating Platform',
    description: 'A private operating platform that acquires, stabilises and scales lower mid-market businesses across the UK and Ireland.',
    images:      [OG_IMAGE],
  },

  alternates: {
    canonical: SITE_URL,
  },
}

const orgSchema = {
  '@context':    'https://schema.org',
  '@type':       'Organization',
  '@id':         `${SITE_URL}/#org`,
  name:          'Everlough Group',
  alternateName: 'Everlough Holdings',
  url:           SITE_URL,
  logo: {
    '@type':  'ImageObject',
    '@id':    `${SITE_URL}/#logo`,
    url:      `${SITE_URL}/images/everlough-logo-navbar.png`,
    width:    1007,
    height:   276,
  },
  description:
    'A private operating platform that acquires, stabilises and scales lower mid-market businesses across the UK and Ireland.',
  contactPoint: {
    '@type':       'ContactPoint',
    telephone:     '+353-1-685-3600',
    email:         'enquiries@everlough.com',
    contactType:   'business',
    areaServed:    ['IE', 'GB'],
    availableLanguage: 'English',
  },
  address: {
    '@type':           'PostalAddress',
    streetAddress:     '6 Fern Road, Sandyford',
    addressLocality:   'Dublin',
    postalCode:        'D18 FP98',
    addressCountry:    'IE',
  },
  areaServed: [
    { '@type': 'Country', name: 'Ireland' },
    { '@type': 'Country', name: 'United Kingdom' },
  ],
}

const websiteSchema = {
  '@context':  'https://schema.org',
  '@type':     'WebSite',
  '@id':       `${SITE_URL}/#website`,
  name:        'Everlough Group',
  url:         SITE_URL,
  publisher:   { '@id': `${SITE_URL}/#org` },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, websiteSchema]) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  )
}
