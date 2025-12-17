'use client'

import React from 'react'
import { Box } from '@mui/material'
import { Header } from '../components/home/Header'
import { HeroSection } from '../components/home/HeroSection'
import { ServicesSection } from '../components/home/ServicesSection'
import { StatsSection } from '../components/home/StatsSection'
import { InstagramSection } from '../components/home/InstagramSection'
import { ContactSection } from '../components/home/ContactSection'
import { Footer } from '../components/home/Footer'
import { FloatingActionButton } from '../components/home/FloatingActionButton'

export default function Home() {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
        color: 'text.primary',
      }}
    >
      <Header />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
      <FloatingActionButton />
    </Box>
  )
}
