import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600', '700'],
  display:  'swap',
})

export const metadata: Metadata = {
  title: {
    default:  'Everlough Group | Private Operating Platform',
    template: '%s | Everlough Group',
  },
  description:
    'A private operating platform that acquires, stabilises and scales lower mid-market businesses across the UK and Ireland.',
  icons: {
    icon: '/images/favicon.png',
  },
  openGraph: {
    type:        'website',
    locale:      'en_IE',
    siteName:    'Everlough Group',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  )
}
