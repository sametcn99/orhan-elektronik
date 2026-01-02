'use client'

import React from 'react'
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
  alpha,
} from '@mui/material'
import {
  Phone as PhoneIcon,
  Place as PlaceIcon,
  ArrowForward as ArrowRightIcon,
  Bolt as BoltIcon,
} from '@mui/icons-material'
import { SectionContainer } from '../ui/SectionContainer'
import { SectionHeader } from '../ui/SectionHeader'
import { SectionBackground } from '../ui/SectionBackground'
import { sectionIds, contactInfo } from '../../data/constants'

export function ContactSection() {
  return (
    <SectionContainer id={sectionIds.contact} sx={{ bgcolor: 'white', position: 'relative' }}>
      <SectionBackground variant="alternate" />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, lg: 5 }}>
            <SectionHeader
              overline="İLETİŞİM"
              title="Size Nasıl Yardımcı Olabiliriz?"
              description="Her türlü elektrik ve elektronik arızası, bakım veya kurulum talepleriniz için bize ulaşın."
              align="left"
            />

            <Stack spacing={3}>
              <Card
                variant="outlined"
                sx={{
                  borderRadius: 4,
                  transition: '0.2s',
                  '&:hover': {
                    borderColor: 'primary.main',
                    bgcolor: alpha('#0891b2', 0.02),
                  },
                }}
              >
                <CardContent
                  sx={{ display: 'flex', alignItems: 'center', gap: 3 }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      bgcolor: 'primary.light',
                      borderRadius: '50%',
                      color: 'white',
                    }}
                  >
                    <PhoneIcon />
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight="bold"
                    >
                      BİZİ ARAYIN
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      component="a"
                      href={`tel:${contactInfo.phone}`}
                      sx={{
                        display: 'block',
                        textDecoration: 'none',
                        color: 'text.primary',
                      }}
                    >
                      {contactInfo.phone}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              <Card
                variant="outlined"
                sx={{
                  borderRadius: 4,
                  transition: '0.2s',
                  '&:hover': {
                    borderColor: 'primary.main',
                    bgcolor: alpha('#0891b2', 0.02),
                  },
                }}
              >
                <CardContent
                  sx={{ display: 'flex', alignItems: 'center', gap: 3 }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      bgcolor: 'secondary.light',
                      borderRadius: '50%',
                      color: 'white',
                    }}
                  >
                    <PlaceIcon />
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight="bold"
                    >
                      ADRES
                    </Typography>
                    <Typography variant="body1" fontWeight="500">
                      {contactInfo.address}
                    </Typography>
                    <Button
                      component="a"
                      href={contactInfo.mapIframe}
                      target="_blank"
                      size="small"
                      startIcon={<ArrowRightIcon />}
                      sx={{ mt: 0.5, p: 0 }}
                    >
                      Haritada Göster
                    </Button>
                  </Box>
                </CardContent>
              </Card>

              <Box
                sx={{
                  p: 4,
                  bgcolor: 'primary.main',
                  borderRadius: 4,
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  mt: 2,
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    opacity: 0.1,
                  }}
                >
                  <BoltIcon sx={{ fontSize: 150 }} />
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Acil Durum mu?
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, mb: 3 }}>
                  7/24 Teknik destek ekibimiz bir telefon uzağınızda.
                </Typography>
                <Button
                  variant="contained"
                  color="inherit"
                  href={`tel:${contactInfo.phone}`}
                  startIcon={<PhoneIcon />}
                  sx={{ color: 'primary.main', fontWeight: 'bold' }}
                >
                  Hemen Arayın
                </Button>
              </Box>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box
              sx={{
                height: 500,
                borderRadius: 6,
                overflow: 'hidden',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                border: '8px solid white',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.7723054887706!2d32.8763315!3d39.9017299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fc758f2a919%3A0xc6a7ef7aaf2af164!2sOrhan%20Elektrik%20Bilgisayar!5e0!3m2!1sen!2str!4v1735736228372!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  )
}
