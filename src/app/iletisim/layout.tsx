import type { Metadata } from 'next'
import { ContactPageJsonLd } from '@/components/seo/JsonLd'

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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İletişim | Orhan Elektrik Elektronik',
    description:
      'Orhan Elektrik Elektronik iletişim bilgileri. Telefon, WhatsApp ve adres bilgilerimiz.',
  },
}

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ContactPageJsonLd />
      {children}
    </>
  )
}
