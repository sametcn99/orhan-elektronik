import type { Metadata } from 'next'
import { ServiceListJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/config/site'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description:
    "Ankara'da profesyonel elektrik, elektronik ve güvenlik sistemleri hizmetleri. CCTV kamera sistemleri, akıllı bina otomasyonu, bakım ve tamir, uydu sistemleri, yapısal kablolama ve daha fazlası.",
  keywords: [
    'Ankara Elektrik Hizmetleri',
    'CCTV Kamera Kurulumu Ankara',
    'Akıllı Bina Otomasyonu',
    'KNX Ankara',
    'Elektrik Bakım ve Tamir',
    'Uydu ve IPTV Çözümleri',
    'Yapısal Kablolama Ankara',
    'Elektrik Pano ve Şalt',
    'Güvenlik Sistemleri Ankara',
    'İnterkom ve Diafon',
    'Enerji Verimliliği Danışmanlık',
    'Anahtar Priz Aydınlatma',
  ],
  alternates: {
    canonical: `${SITE_URL}/hizmetler`,
  },
  openGraph: {
    title: 'Hizmetlerimiz | Orhan Elektrik Elektronik',
    description:
      "Ankara'da profesyonel elektrik, elektronik ve güvenlik sistemleri hizmetleri. Tüm hizmetlerimizi keşfedin.",
    url: `${SITE_URL}/hizmetler`,
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
  return (
    <>
      <ServiceListJsonLd />
      {children}
    </>
  )
}
