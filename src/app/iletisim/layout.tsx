import type { Metadata } from 'next'

const BASE_URL = 'https://www.orhanelektronikbilgisayar.com'

export const metadata: Metadata = {
  title: 'İletişim',
  description:
    "Orhan Elektrik Elektronik iletişim bilgileri. Ankara Çankaya'da profesyonel elektrik ve güvenlik sistemleri hizmetleri için bize ulaşın. Telefon: +90 532 574 93 92. Hafta içi ve Cumartesi 08:00-20:00, acil durumlarda 7/24 destek.",
  alternates: {
    canonical: `${BASE_URL}/iletisim`,
  },
  openGraph: {
    title: 'İletişim | Orhan Elektrik Elektronik',
    description:
      'Orhan Elektrik Elektronik iletişim bilgileri. Telefon, WhatsApp ve adres bilgilerimiz. Hemen ulaşın.',
    url: `${BASE_URL}/iletisim`,
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Orhan Elektrik Elektronik',
    images: [
      {
        url: '/api/og?title=%C4%B0leti%C5%9Fim&description=Orhan Elektrik Elektronik ileleti%C5%9Fim bilgileri. Hemen ula%C5%9F%C4%B1n.',
        width: 1200,
        height: 630,
        alt: 'İletişim - Orhan Elektrik Elektronik',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İletişim | Orhan Elektrik Elektronik',
    description:
      'Orhan Elektrik Elektronik iletişim bilgileri. Telefon, WhatsApp ve adres bilgilerimiz.',
    images: [
      '/api/og?title=%C4%B0leti%C5%9Fim&description=Orhan Elektrik Elektronik ileleti%C5%9Fim bilgileri. Hemen ula%C5%9F%C4%B1n.',
    ],
  },
}

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
