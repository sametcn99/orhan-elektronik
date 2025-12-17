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
import { sectionIds, services } from '../../data/constants'

export function ServicesSection() {
  return (
    <SectionContainer
      id={sectionIds.services}
      sx={{ bgcolor: 'background.default' }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="overline"
            color="primary"
            fontWeight="bold"
            sx={{ letterSpacing: 3, display: 'block', mb: 1 }}
          >
            HİZMETLERİMİZ
          </Typography>
          <Typography variant="h3" fontWeight="800" sx={{ mb: 3 }}>
            Profesyonel Elektrik Çözümleri
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400 }}
          >
            Modern teknoloji ve uzman kadromuzla tüm elektrik ve elektronik
            ihtiyaçlarınız için yanınızdayız.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={service.title}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)',
                    borderColor: service.color,
                    '& .icon-box': {
                      bgcolor: service.color,
                      color: 'white',
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" spacing={3} alignItems="flex-start">
                    <Box
                      className="icon-box"
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        bgcolor: alpha(service.color, 0.1),
                        color: service.color,
                        transition: 'all 0.3s',
                      }}
                    >
                      <service.icon sx={{ fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="h5" fontWeight="bold" gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ lineHeight: 1.7 }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  )
}
