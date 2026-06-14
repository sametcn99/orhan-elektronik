import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/config/site'
import { services } from '../data/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date()

  const servicePages = services.map((service) => ({
    url: `${SITE_URL}/hizmetler/${service.slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/hizmetler`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/iletisim`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/gizlilik-politikasi`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...servicePages,
  ]
}
