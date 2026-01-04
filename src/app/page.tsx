'use client'

import React from 'react'
import { Box } from '@mui/material'
import { Header } from '../components/home/Header'
import { HeroSection } from '../components/home/HeroSection'
import { ServicesSection } from '../components/home/ServicesSection'
import { StatsSection } from '../components/home/StatsSection'
import { GallerySection } from '../components/home/GallerySection'
import { InstagramSection } from '../components/home/InstagramSection'
import { ContactSection } from '../components/home/ContactSection'
import { Footer } from '../components/home/Footer'
import { FloatingActionButton } from '../components/home/FloatingActionButton'
import BrandsSection from '@/components/home/BrandsSection'

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
