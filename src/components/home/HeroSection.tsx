'use client'

import React, { useRef } from 'react'
import {
  Box,
  Typography,
  Button,
  Container,
  Fade,
  useTheme,
  Stack,
  alpha,
  Grid,
} from '@mui/material'
import {
  AutoAwesome as SparklesIcon,
  ArrowForward as ArrowRightIcon,
  Phone as PhoneIcon,
  Shield as ShieldIcon,
  AccessTime as ClockIcon,
  Security as SecurityIcon,
  Build as BuildIcon,
  Home as HomeIcon,
  SatelliteAlt as SatelliteIcon,
  Lightbulb as LightbulbIcon,
} from '@mui/icons-material'
import { useOnScreen } from '../../hooks/useOnScreen'
import { sectionIds, contactInfo, HEADER_HEIGHT } from '../../data/constants'
import { useUmami } from '../../hooks/useUmami'

export function HeroSection() {
  const ref = useRef(null)
  const isVisible = useOnScreen(ref)
  const theme = useTheme()
  const { track } = useUmami()
  const heroServices = [
    {
      label: 'Güvenlik Sistemleri',
      icon: SecurityIcon,
      color: theme.palette.primary.main,
    },
    { label: 'Bakım ve Tamir', icon: BuildIcon, color: '#f59e0b' },
    { label: 'Akıllı Ev (KNX)', icon: HomeIcon, color: '#22c55e' },
    {
      label: 'Uydu Sistemleri',
      icon: SatelliteIcon,
      color: theme.palette.secondary.main,
    },
    { label: 'Aydınlatma', icon: LightbulbIcon, color: '#eab308' },
  ]

  return (
    <Box
      id={sectionIds.hero}
      ref={ref}
      sx={{
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(to bottom, #fff, ${alpha(theme.palette.background.default, 0.5)})`,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.light, 0.25)} 0%, transparent 60%)`,
          filter: 'blur(80px)',
          animation:
            'blob-bounce 25s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 0,
          opacity: 0.8,
          '@keyframes blob-bounce': {
            '0%': { transform: 'translate(0, 0) scale(1)' },
            '100%': { transform: 'translate(10%, 10%) scale(1.1)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.light, 0.2)} 0%, transparent 60%)`,
          filter: 'blur(100px)',
          animation:
            'blob-bounce-2 30s infinite alternate-reverse cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 0,
          opacity: 0.6,
          '@keyframes blob-bounce-2': {
            '0%': { transform: 'translate(0, 0) scale(1)' },
            '100%': { transform: 'translate(-10%, -10%) scale(1.1)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
          filter: 'blur(100px)',
          animation: 'blob-pulse 20s infinite alternate ease-in-out',
          zIndex: 0,
          '@keyframes blob-pulse': {
            '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.3 },
            '100%': {
              transform: 'translate(-40%, -40%) scale(1.2)',
              opacity: 0.6,
            },
          },
        }}
      />
      <Container maxWidth="lg" sx={{ zIndex: 1, position: 'relative' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Fade in={isVisible} timeout={800}>
              <Box>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    color: 'primary.dark',
                    px: 2,
                    py: 0.8,
                    borderRadius: '20px',
                    mb: 4,
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                  }}
                >
                  <SparklesIcon
                    fontSize="small"
                    sx={{ color: 'primary.main' }}
                  />
                  <Typography
                    variant="subtitle2"
                    fontWeight="700"
                    letterSpacing={0.5}
                  >
                    Ankara'nın En Güvenilir Elektrik Servisi
                  </Typography>
                </Box>

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    mb: 3,
                    color: 'text.primary',
                    textShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  }}
                >
                  Güvenli ve Modern <br />
                  <Box
                    component="span"
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      position: 'relative',
                      display: 'inline-block',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 5,
                        left: 0,
                        width: '100%',
                        height: '8px',
                        bgcolor: alpha(theme.palette.primary.main, 0.2),
                        zIndex: -1,
                        borderRadius: 2,
                      },
                    }}
                  >
                    Elektrik Çözümleri
                  </Box>
                </Typography>

                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{
                    mb: 5,
                    maxWidth: '550px',
                    lineHeight: 1.6,
                    fontWeight: 500,
                    fontSize: { xs: '1rem', md: '1.25rem' },
                  }}
                >
                  Eviniz ve iş yeriniz için{' '}
                  <Box component="span" color="primary.main" fontWeight="bold">
                    7/24
                  </Box>{' '}
                  profesyonel elektrik, elektronik ve güvenlik sistemleri
                  servisi.
                </Typography>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ mb: 7 }}
                >
                  <Button
                    component="a"
                    href="#services"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRightIcon />}
                    sx={{
                      borderRadius: '12px',
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.4)}`,
                      },
                    }}
                  >
                    Hizmetlerimiz
                  </Button>
                  <Button
                    component="a"
                    href={`tel:${contactInfo.phone}`}
                    variant="outlined"
                    size="large"
                    startIcon={<PhoneIcon />}
                    onClick={() => track('call_click', { location: 'hero' })}
                    sx={{
                      borderRadius: '12px',
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderWidth: '2px',
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                      color: 'text.primary',
                      bgcolor: 'rgba(255,255,255,0.5)',
                      backdropFilter: 'blur(4px)',
                      '&:hover': {
                        borderWidth: '2px',
                        borderColor: 'primary.main',
                        bgcolor: 'background.paper',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Hemen Arayın
                  </Button>
                </Stack>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1}
                  flexWrap="wrap"
                  useFlexGap
                  sx={{ gap: 1.5 }}
                >
                  {heroServices.map((service) => {
                    const Icon = service.icon
                    const color = service.color
                    return (
                      <Box
                        key={service.label}
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 1,
                          px: 1.5,
                          py: 1,
                          borderRadius: '12px',
                          bgcolor: alpha(color, 0.08),
                          border: `1px solid ${alpha(color, 0.25)}`,
                          color,
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            bgcolor: alpha(color, 0.14),
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        <Icon sx={{ fontSize: 18, opacity: 0.9 }} />
                        <Typography variant="body2" fontWeight={700}>
                          {service.label}
                        </Typography>
                      </Box>
                    )
                  })}
                </Stack>
              </Box>
            </Fade>
          </Grid>

          <Grid
            size={{ md: 5 }}
            sx={{ display: { xs: 'none', md: 'block' }, position: 'relative' }}
          >
            {/* Dynamic Glass Cards Composition */}
            <Box
              sx={{
                position: 'relative',
                height: 450,
                width: '100%',
                perspective: '1000px',
              }}
            >
              {/* Background Glow */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.2)} 0%, transparent 70%)`,
                  filter: 'blur(40px)',
                  zIndex: 0,
                }}
              />

              {/* Main Card */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '15%',
                  left: '10%',
                  right: '10%',
                  bgcolor: 'background.paper', // Fallback
                  background: alpha('#fff', 0.8),
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  p: 3,
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                  border: '1px solid rgba(255,255,255,0.8)',
                  transform: 'rotateY(-10deg) rotateX(5deg)',
                  zIndex: 2,
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': {
                      transform: 'rotateY(-10deg) rotateX(5deg) translateY(0)',
                    },
                    '50%': {
                      transform:
                        'rotateY(-10deg) rotateX(5deg) translateY(-15px)',
                    },
                  },
                }}
              >
                <Stack spacing={2}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h6" fontWeight="800">
                      Canlı Durum
                    </Typography>
                    <Box
                      sx={{
                        px: 1,
                        py: 0.5,
                        bgcolor: alpha(theme.palette.success.main, 0.1),
                        color: 'success.main',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          bgcolor: 'currentColor',
                          animation: 'blink 2s infinite',
                        }}
                      />
                      Aktif
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      p: 2,
                      bgcolor: alpha(theme.palette.background.default, 0.6),
                      borderRadius: '16px',
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <PhoneIcon fontSize="small" />
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Çağrı Merkezi
                        </Typography>
                        <Typography variant="subtitle2" fontWeight="bold">
                          Çevrimiçi
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>

                  <Box
                    sx={{
                      p: 2,
                      bgcolor: alpha(theme.palette.background.default, 0.6),
                      borderRadius: '16px',
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: 'secondary.main',
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <ShieldIcon fontSize="small" />
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Ekip Durumu
                        </Typography>
                        <Typography variant="subtitle2" fontWeight="bold">
                          Saha Operasyonu
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Box>

              {/* Floating Satisfaction Badge */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '10%',
                  right: '0%',
                  bgcolor: '#fff',
                  borderRadius: '20px',
                  p: 2,
                  boxShadow: '0 15px 35px -5px rgba(0,0,0,0.1)',
                  zIndex: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  animation: 'float-delayed 7s ease-in-out infinite',
                  '@keyframes float-delayed': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                  },
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h4"
                    fontWeight="800"
                    color="warning.main"
                    lineHeight={1}
                  >
                    4.9
                  </Typography>
                  <Stack direction="row" sx={{ color: 'warning.main' }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Box key={i} component="span" sx={{ fontSize: '12px' }}>
                        ★
                      </Box>
                    ))}
                  </Stack>
                </Box>
                <Box>
                  <Typography variant="body2" fontWeight="bold">
                    Müşteri Puanı
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    500+ Yorum
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
