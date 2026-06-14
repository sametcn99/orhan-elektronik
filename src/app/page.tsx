import dynamic from 'next/dynamic'
import { ContactSection } from '../components/home/ContactSection'
import { HeroSection } from '../components/home/HeroSection'
import { InstagramSection } from '../components/home/InstagramSection'
import { StatsSection } from '../components/home/StatsSection'

const BrandsSection = dynamic(() => import('@/components/home/BrandsSection'))
const GallerySection = dynamic(() =>
  import('@/components/home/GallerySection').then((mod) => mod.GallerySection),
)
const ServicesSection = dynamic(() =>
  import('@/components/home/ServicesSection').then(
    (mod) => mod.ServicesSection,
  ),
)

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
