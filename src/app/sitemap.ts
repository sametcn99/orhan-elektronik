import { services } from '../data/services'

const baseUrl = 'https://www.orhanelektronikbilgisayar.com'

export default async function sitemap() {
  const lastModified = new Date()

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/hizmetler/${service.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/hizmetler`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...servicePages,
  ]
}
