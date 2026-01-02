'use client'

import React, { useRef } from 'react'
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Stack,
  alpha,
  Slide,
} from '@mui/material'
import { SectionContainer } from '../ui/SectionContainer'
import { SectionHeader } from '../ui/SectionHeader'
import { SectionBackground } from '../ui/SectionBackground'
import { sectionIds, services } from '../../data/constants'

export function ServicesSection() {
  return (
    <SectionContainer
      id={sectionIds.services}
      sx={{ bgcolor: 'background.default', position: 'relative' }}
    >
      <SectionBackground />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          overline="HİZMETLERİMİZ"
          title="Profesyonel Elektrik Çözümleri"
          description="Modern teknoloji ve uzman kadromuzla tüm elektrik ve elektronik ihtiyaçlarınız için yanınızdayız."
        />

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={service.title}>
              <Box
                className="group"
                sx={{
                  height: '100%',
                  position: 'relative',
                  perspective: '1000px',
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    position: 'relative',
                    borderRadius: '24px',
                    bgcolor: 'background.paper',
                    overflow: 'visible', // Allow elements to pop out
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid',
                    borderColor: 'divider',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: `0 20px 40px -10px ${alpha(service.color, 0.15)}`,
                      borderColor: alpha(service.color, 0.5),
                      '& .bg-gradient': {
                        opacity: 1,
                      },
                      '& .icon-wrapper': {
                        transform: 'scale(1.1) rotate(-5deg)',
                        bgcolor: service.color,
                        color: 'white',
                        boxShadow: `0 10px 20px -5px ${alpha(service.color, 0.4)}`,
                      },
                      '& .arrow-icon': {
                        transform: 'translateX(4px)',
                        opacity: 1,
                        color: service.color,
                      },
                    },
                  }}
                >
                  {/* Subtle Gradient background on hover */}
                  <Box
                    className="bg-gradient"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(180deg, ${alpha(service.color, 0.05)} 0%, transparent 100%)`,
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      borderRadius: '24px',
                    }}
                  />

                  <CardContent
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Header with Icon */}
                    <Box
                      sx={{
                        mb: 3,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                      }}
                    >
                      <Box
                        className="icon-wrapper"
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: alpha(service.color, 0.1),
                          color: service.color,
                          transition:
                            'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }}
                      >
                        <service.icon sx={{ fontSize: 30 }} />
                      </Box>

                      {/* Decorative dot */}
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: alpha(service.color, 0.3),
                        }}
                      />
                    </Box>

                    {/* Content */}
                    <Box sx={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
                      <Typography
                        variant="h5"
                        fontWeight="800"
                        gutterBottom
                        sx={{
                          fontSize: '1.25rem',
                          minHeight: '3rem', // Alignment
                        }}
                      >
                        {service.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.7,
                          mb: 2,
                          color: alpha('#000', 0.6),
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  )
}
