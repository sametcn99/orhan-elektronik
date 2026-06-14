import type { Metadata } from 'next'

const BASE_URL = 'https://www.orhanelektronikbilgisayar.com'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description:
    "Ankara'da profesyonel elektrik, elektronik ve güvenlik sistemleri hizmetleri. CCTV kamera sistemleri, akıllı bina otomasyonu, bakım ve tamir, uydu sistemleri ve daha fazlası.",
  alternates: {
    canonical: `${BASE_URL}/hizmetler`,
  },
  openGraph: {
    title: 'Hizmetlerimiz | Orhan Elektrik Elektronik',
    description:
      "Ankara'da profesyonel elektrik, elektronik ve güvenlik sistemleri hizmetleri. Tüm hizmetlerimizi keşfedin.",
    url: `${BASE_URL}/hizmetler`,
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Orhan Elektrik Elektronik',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hizmetlerimiz | Orhan Elektrik Elektronik',
    description:
      "Ankara'da profesyonel elektrik, elektronik ve güvenlik sistemleri hizmetleri. Tüm hizmetlerimizi keşfedin.",
  },
}

export default function HizmetlerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
