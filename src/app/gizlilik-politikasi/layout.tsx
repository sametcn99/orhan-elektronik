import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/config/site'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description:
    'Orhan Elektrik Elektronik gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi edinin.',
  alternates: {
    canonical: `${SITE_URL}/gizlilik-politikasi`,
  },
  openGraph: {
    title: `Gizlilik Politikası | ${SITE_NAME}`,
    description:
      'Orhan Elektrik Elektronik gizlilik politikası. Kişisel verilerinizin nasıl korunduğunu öğrenin.',
    url: `${SITE_URL}/gizlilik-politikasi`,
    type: 'website',
    locale: 'tr_TR',
    siteName: SITE_NAME,
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function GizlilikPolitikasiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
