const BASE_URL = 'https://www.orhanelektronikbilgisayar.com'

const businessInfo = {
  name: 'Orhan Elektrik Elektronik',
  description:
    "Ankara'da profesyonel elektrik, elektronik ve güvenlik sistemleri hizmetleri. CCTV kamera sistemleri, alarm sistemleri kurulumu ve bakımı, elektrik altyapı yönetimi ve teknik servis hizmetleri.",
  url: BASE_URL,
  telephone: '+90 532 574 93 92',
  address: {
    streetAddress: 'Murat Mah. Yavuzevler Sk. 18/C',
    addressLocality: 'Çankaya',
    addressRegion: 'Ankara',
    postalCode: '06690',
    addressCountry: 'TR',
  },
  geo: {
    latitude: '39.90173',
    longitude: '32.87633',
  },
  image: `${BASE_URL}/icons/icon-512x512.png`,
  logo: `${BASE_URL}/icons/icon-512x512.png`,
  priceRange: '$$',
  openingHoursSpecification: [
    {
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  sameAs: ['https://www.instagram.com/orhan.elektrik.elektronik/'],
}

export function LocalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: businessInfo.name,
    description: businessInfo.description,
    url: businessInfo.url,
    telephone: businessInfo.telephone,
    image: businessInfo.image,
    logo: businessInfo.logo,
    priceRange: businessInfo.priceRange,
    address: {
      '@type': 'PostalAddress',
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
    areaServed: {
      '@type': 'City',
      name: 'Ankara',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
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
    name: businessInfo.name,
    url: businessInfo.url,
    logo: businessInfo.logo,
    description: businessInfo.description,
    telephone: businessInfo.telephone,
    address: {
      '@type': 'PostalAddress',
      ...businessInfo.address,
    },
    sameAs: businessInfo.sameAs,
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
    name: businessInfo.name,
    url: businessInfo.url,
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
    name: 'İletişim',
    url: `${BASE_URL}/iletisim`,
    mainEntity: {
      '@type': 'Organization',
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
}

export function ServiceJsonLd({
  title,
  description,
  slug,
  serviceType = 'Elektrik ve Güvenlik Hizmeti',
}: ServiceJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: description,
    url: `${BASE_URL}/hizmetler/${slug}`,
    serviceType,
    provider: {
      '@type': 'Electrician',
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
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: BASE_URL,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
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
