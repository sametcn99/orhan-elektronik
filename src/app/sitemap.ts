import { services } from '../data/services'

const baseUrl = 'https://www.orhanelektronikbilgisayar.com'

export default async function sitemap() {
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/hizmetler/${service.slug}`,
    lastModified: '2025-01-01',
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: `${baseUrl}/`,
      lastModified: '2025-01-01',
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/hizmetler`,
      lastModified: '2025-01-01',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: '2025-01-01',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    ...servicePages,
  ]
}
