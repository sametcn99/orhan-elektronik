import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/config/site'
import { services } from '../data/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services.map((service) => ({
    url: `${SITE_URL}/hizmetler/${service.slug}`,
    lastModified: new Date('2025-06-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/hizmetler`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/iletisim`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...servicePages,
  ]
}
