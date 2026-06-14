import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { ContactSection } from '../components/home/ContactSection'
import { HeroSection } from '../components/home/HeroSection'
import { InstagramSection } from '../components/home/InstagramSection'
import { StatsSection } from '../components/home/StatsSection'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../config/site'

const BrandsSection = dynamic(() => import('@/components/home/BrandsSection'))
const GallerySection = dynamic(() =>
  import('@/components/home/GallerySection').then((mod) => mod.GallerySection),
)
const ServicesSection = dynamic(() =>
  import('@/components/home/ServicesSection').then(
    (mod) => mod.ServicesSection,
  ),
)

export const metadata: Metadata = {
  title: `${SITE_NAME} - Ankara Elektrik`,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: `${SITE_NAME} - Ankara Elektrik`,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    type: 'website',
    locale: 'tr_TR',
    siteName: SITE_NAME,
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandsSection />
      <ServicesSection />
      <GallerySection />
      <InstagramSection />
      <StatsSection />
      <ContactSection />
    </>
  )
}
