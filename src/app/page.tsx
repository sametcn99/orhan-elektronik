'use client'

import BrandsSection from '@/components/home/BrandsSection'
import { ContactSection } from '../components/home/ContactSection'
import { GallerySection } from '../components/home/GallerySection'
import { HeroSection } from '../components/home/HeroSection'
import { InstagramSection } from '../components/home/InstagramSection'
import { ServicesSection } from '../components/home/ServicesSection'
import { StatsSection } from '../components/home/StatsSection'

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
