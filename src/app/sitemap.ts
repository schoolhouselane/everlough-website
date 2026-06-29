import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://everlough.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url:              SITE_URL,
      lastModified:     new Date(),
      changeFrequency:  'monthly',
      priority:         1.0,
    },
    {
      url:              `${SITE_URL}/approach`,
      lastModified:     new Date(),
      changeFrequency:  'monthly',
      priority:         0.9,
    },
    {
      url:              `${SITE_URL}/portfolio`,
      lastModified:     new Date(),
      changeFrequency:  'monthly',
      priority:         0.9,
    },
    {
      url:              `${SITE_URL}/leadership`,
      lastModified:     new Date(),
      changeFrequency:  'monthly',
      priority:         0.8,
    },
    {
      url:              `${SITE_URL}/contact`,
      lastModified:     new Date(),
      changeFrequency:  'yearly',
      priority:         0.7,
    },
  ]
}
