import type { Metadata } from 'next'
import NotFoundClient from './not-found-client'

export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı',
  description:
    'Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Orhan Elektrik Elektronik ana sayfasına dönerek devam edebilirsiniz.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return <NotFoundClient />
}
