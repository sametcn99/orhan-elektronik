'use client'

import { ArrowForward, Phone as PhoneIcon } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { contactInfo } from '@/data/constants'
import { services } from '@/data/services'

export default function ServicesPage() {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 10% 20%, rgba(14,165,233,0.08), transparent 35%), radial-gradient(circle at 80% 0%, rgba(34,197,94,0.08), transparent 32%), linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 50%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={3} sx={{ mb: { xs: 5, md: 8 } }}>
          <Stack spacing={1.5}>
            <Chip
              label="Proje, kurulum, bakım ve sonrası"
              size="small"
              sx={{
                width: 'fit-content',
                borderRadius: 999,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                px: 1.5,
                py: 0.5,
                fontWeight: 700,
                letterSpacing: '0.08em',
              }}
            />
            <Typography
              variant="h3"
              fontWeight={800}
              sx={{ letterSpacing: '-0.02em' }}
            >
              Tüm hizmetler, tek merkezden
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 760, lineHeight: 1.8 }}
            >
              Keşif, projelendirme, kurulum, bakım ve garanti süreçlerini uçtan
              uca planlıyor; güvenlikten otomasyona tüm elektrik-elektronik
              çözümlerini şeffaf ve raporlu şekilde sunuyoruz.
            </Typography>
          </Stack>

          <Box
            sx={{
              p: { xs: 3, md: 4.5 },
              borderRadius: 3.2,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: 4 },
              alignItems: 'stretch',
              justifyContent: 'space-between',
              border: '1px solid',
              borderColor: 'divider',
              background:
                'linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(34,197,94,0.08) 60%, rgba(255,255,255,0.12) 100%)',
              boxShadow: '0 22px 68px -38px rgba(12,40,52,0.52)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Stack spacing={2.4} sx={{ maxWidth: 520 }}>
              <Stack spacing={1}>
                <Typography
                  variant="h5"
                  fontWeight={800}
                  sx={{ letterSpacing: '-0.01em' }}
                >
                  Projenizi yöneten stratejik ekip
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  İş planınızı, saha koordinasyonunu ve teknik raporlamayı tek
                  bir akışta topluyor; proje ilerlemesini haftalık özetlerle
                  paylaşıyoruz.
                </Typography>
              </Stack>
            </Stack>
            <Stack
              spacing={1.5}
              sx={{ minWidth: { md: 260 }, justifyContent: 'center' }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row', md: 'column' }}
                spacing={1.5}
              >
                <Button
                  component={Link}
                  href="/iletisim"
                  variant="contained"
                  startIcon={<PhoneIcon />}
                  sx={{ borderRadius: 2, px: 3, minWidth: 200 }}
                >
                  Uzmanla Görüş
                </Button>
                <Button
                  component={Link}
                  href={`tel:${contactInfo.phone}`}
                  variant="outlined"
                  sx={{ borderRadius: 2, px: 3, borderWidth: 1.5 }}
                >
                  {contactInfo.phone}
                </Button>
              </Stack>
              <Typography variant="caption" color="text.secondary">
                Aynı gün dönüş + proje için ihtiyaç listesi taslağı gönderimi
              </Typography>
            </Stack>
          </Box>
        </Stack>

        <Grid container spacing={{ xs: 2.5, md: 3.2 }}>
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  lg: 4,
                }}
                key={service.slug}
              >
                <Card
                  component={Link}
                  href={`/hizmetler/${service.slug}`}
                  sx={{
                    height: '100%',
                    textDecoration: 'none',
                    color: 'inherit',
                    borderRadius: 3,
                    background: `linear-gradient(150deg, ${service.color}14 0%, rgba(255,255,255,0.02) 55%, transparent 100%)`,
                    boxShadow: '0 16px 50px -30px rgba(0,0,0,0.45)',
                    transition: 'all 0.26s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(8px)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 52px -26px ${service.color}aa`,
                    },
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background: `radial-gradient(circle at 20% 20%, ${service.color}0f 0%, transparent 32%), radial-gradient(circle at 82% 24%, ${service.color}12 0%, transparent 30%)`,
                      opacity: 0.8,
                      pointerEvents: 'none',
                    },
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      top: -2,
                      left: -2,
                      right: -2,
                      height: 6,
                      borderRadius: 18,
                      background: `linear-gradient(90deg, transparent 0%, ${service.color}55 40%, ${service.color}99 60%, transparent 100%)`,
                      opacity: 0,
                      transition: 'opacity 0.26s ease',
                    },
                    '&:hover:after': { opacity: 1 },
                  }}
                >
                  <CardContent
                    sx={{ p: { xs: 2.8, md: 3.2 }, position: 'relative' }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 16,
                        borderRadius: 2.2,
                        background: `linear-gradient(135deg, ${service.color}08 0%, transparent 80%)`,
                        filter: 'blur(0px)',
                        pointerEvents: 'none',
                      }}
                    />

                    <Stack spacing={2.2} sx={{ position: 'relative' }}>
                      <Stack direction="row" alignItems="center" spacing={1.5}>
                        <Box
                          sx={{
                            width: 52,
                            height: 52,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 2,
                            bgcolor: `${service.color}18`,
                            color: service.color,
                            border: `1px solid ${service.color}33`,
                            boxShadow: `0 14px 34px -20px ${service.color}`,
                          }}
                        >
                          <Icon fontSize="small" />
                        </Box>
                      </Stack>

                      <Stack spacing={0.8}>
                        <Typography
                          variant="h6"
                          fontWeight={800}
                          sx={{ letterSpacing: '-0.01em' }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ lineHeight: 1.75, minHeight: 72 }}
                        >
                          {service.summary || service.description}
                        </Typography>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        useFlexGap
                      >
                        {service.highlights.slice(0, 3).map((item) => (
                          <Chip
                            key={item}
                            label={item}
                            size="small"
                            sx={{
                              bgcolor: `${service.color}14`,
                              border: `1px solid ${service.color}33`,
                              color: service.color,
                              fontWeight: 600,
                              borderRadius: 1.4,
                            }}
                          />
                        ))}
                      </Stack>

                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{ color: service.color, fontWeight: 700 }}
                      >
                        <Typography fontWeight={800}>
                          Detayları incele
                        </Typography>
                        <ArrowForward fontSize="small" />
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}
