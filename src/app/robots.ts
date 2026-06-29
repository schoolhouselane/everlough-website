import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://everlough.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All search engine crawlers: full access except API routes
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      // Block AI model training crawlers (allow AI search citation crawlers e.g. PerplexityBot, ChatGPT-User)
      { userAgent: 'GPTBot',          disallow: '/' },
      { userAgent: 'Google-Extended', disallow: '/' },
      { userAgent: 'Bytespider',      disallow: '/' },
      { userAgent: 'CCBot',           disallow: '/' },
      { userAgent: 'anthropic-ai',    disallow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
