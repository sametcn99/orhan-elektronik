'use client'

import React from 'react'
import { Box, Typography, Container, Grid, Stack, Button } from '@mui/material'
import {
  Bolt as BoltIcon,
  Shield as ShieldIcon,
  AccessTime as ClockIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material'
import { sectionIds } from '../../data/constants'

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: 'secondary.dark', color: 'rgba(255,255,255,0.7)', py: 8 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
              <BoltIcon color="primary" fontSize="large" />
              <Typography variant="h5" color="white" fontWeight="bold">
                Orhan Elektrik
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ lineHeight: 1.7, mb: 3 }}>
              Ankara'da profesyonel elektrik, güvenlik sistemleri ve elektronik
              çözümleri sunan güvenilir iş ortağınız.
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button
                component="a"
                href="https://www.instagram.com/orhan.elektrik.elektronik/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                color="inherit"
                startIcon={<InstagramIcon />}
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.3)',
                  '&:hover': {
                    borderColor: '#E1306C',
                    color: '#E1306C',
                    bgcolor: 'rgba(225, 48, 108, 0.08)',
                  },
                }}
              >
                Instagram
              </Button>
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Typography
              variant="subtitle1"
              color="white"
              fontWeight="bold"
              gutterBottom
            >
              Hızlı Bağlantılar
            </Typography>
            <Stack spacing={1}>
              {[
                { label: 'Ana Sayfa', href: `#${sectionIds.hero}` },
                { label: 'Hizmetlerimiz', href: `#${sectionIds.services}` },
                { label: 'İletişim', href: `#${sectionIds.contact}` },
              ].map((link) => (
                <Box
                  key={link.label}
                  component="a"
                  href={link.href}
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Typography
              variant="subtitle1"
              color="white"
              fontWeight="bold"
              gutterBottom
            >
              Çalışma Saatleri
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <ClockIcon fontSize="small" />
                <Typography variant="body2">
                  Pazartesi - Cmt: 08:00 - 20:00
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <ShieldIcon fontSize="small" />
                <Typography variant="body2">Acil Durum: 7/24</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            mt: 8,
            pt: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Orhan Elektrik Elektronik. Tüm
            hakları saklıdır.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
