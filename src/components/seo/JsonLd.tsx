import { businessInfo, SITE_DESCRIPTION, SITE_URL } from '@/config/site'
import { services } from '@/data/services'

export function LocalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Electrician', 'HomeAndConstructionBusiness'],
    '@id': `${SITE_URL}#business`,
    name: businessInfo.name,
    description: SITE_DESCRIPTION,
    url: businessInfo.url,
    telephone: businessInfo.telephone,
    image: businessInfo.image,
    logo: businessInfo.logo,
    priceRange: businessInfo.priceRange,
    currenciesAccepted: businessInfo.currenciesAccepted,
    paymentAccepted: businessInfo.paymentAccepted,
    address: {
      '@type': 'PostalAddress',
      '@id': `${SITE_URL}#address`,
      ...businessInfo.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude,
    },
    openingHoursSpecification: businessInfo.openingHoursSpecification.map(
      (spec) => ({
        '@type': 'OpeningHoursSpecification',
        ...spec,
      }),
    ),
    sameAs: businessInfo.sameAs,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    areaServed: {
      '@type': 'City',
      name: 'Ankara',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Elektrik ve Güvenlik Hizmetleri',
      itemListElement: services.slice(0, 10).map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Offer',
          name: service.title,
          description: service.summary || service.description,
          url: `${SITE_URL}/hizmetler/${service.slug}`,
        },
      })),
    },
  }

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires dangerouslySetInnerHTML in React
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: businessInfo.name,
    url: businessInfo.url,
    logo: businessInfo.logo,
    description: SITE_DESCRIPTION,
    telephone: businessInfo.telephone,
    address: {
      '@type': 'PostalAddress',
      ...businessInfo.address,
    },
    sameAs: businessInfo.sameAs,
    foundingLocation: {
      '@type': 'City',
      name: 'Ankara',
    },
  }

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires dangerouslySetInnerHTML in React
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebSiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    name: businessInfo.name,
    url: businessInfo.url,
    description: SITE_DESCRIPTION,
    inLanguage: 'tr-TR',
    publisher: {
      '@id': `${SITE_URL}#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/hizmetler?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires dangerouslySetInnerHTML in React
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ContactPageJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/iletisim#contactpage`,
    name: 'İletişim',
    url: `${SITE_URL}/iletisim`,
    description:
      'Orhan Elektrik Elektronik iletişim bilgileri. Telefon, adres ve iletişim formu.',
    mainEntity: {
      '@type': 'Organization',
      '@id': `${SITE_URL}#organization`,
      name: businessInfo.name,
      telephone: businessInfo.telephone,
      address: {
        '@type': 'PostalAddress',
        ...businessInfo.address,
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires dangerouslySetInnerHTML in React
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

type ServiceJsonLdProps = {
  title: string
  description: string
  slug: string
  serviceType?: string
  highlights?: string[]
}

export function ServiceJsonLd({
  title,
  description,
  slug,
  serviceType = 'Elektrik ve Güvenlik Hizmeti',
  highlights,
}: ServiceJsonLdProps) {
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/hizmetler/${slug}#service`,
    name: title,
    description: description,
    url: `${SITE_URL}/hizmetler/${slug}`,
    serviceType,
    provider: {
      '@type': 'Electrician',
      '@id': `${SITE_URL}#business`,
      name: businessInfo.name,
      url: businessInfo.url,
      telephone: businessInfo.telephone,
      address: {
        '@type': 'PostalAddress',
        ...businessInfo.address,
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Ankara',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${title} Hizmet Paketleri`,
      itemListElement:
        highlights?.map((highlight, index) => ({
          '@type': 'Offer',
          name: highlight,
          position: index + 1,
        })) || [],
    },
  }

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires dangerouslySetInnerHTML in React
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ServiceListJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_URL}/hizmetler#servicelist`,
    name: 'Orhan Elektrik Elektronik Hizmetleri',
    description:
      "Ankara'da profesyonel elektrik, elektronik ve güvenlik sistemleri hizmetlerinin tam listesi.",
    url: `${SITE_URL}/hizmetler`,
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      url: `${SITE_URL}/hizmetler/${service.slug}`,
      description: service.summary || service.description,
    })),
  }

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires dangerouslySetInnerHTML in React
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

type BreadcrumbJsonLdProps = {
  items: { name: string; href?: string }[]
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: SITE_URL,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
      })),
    ],
  }

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires dangerouslySetInnerHTML in React
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

type FAQJsonLdProps = {
  faqs: { question: string; answer: string }[]
}

export function FAQJsonLd({ faqs }: FAQJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires dangerouslySetInnerHTML in React
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
