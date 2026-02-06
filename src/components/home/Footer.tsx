'use client'

import {
  ArrowForward as ArrowForwardIcon,
  Build as BuildIcon,
  AccessTime as ClockIcon,
  Home as HomeIcon,
  Instagram as InstagramIcon,
  Lightbulb as LightbulbIcon,
  Phone as PhoneIcon,
  Place as PlaceIcon,
  SatelliteAlt as SatelliteIcon,
  Security as SecurityIcon,
  Shield as ShieldIcon,
  EmojiEvents as TrophyIcon,
  Verified as VerifiedIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material'
import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import { contactInfo, sectionIds } from '../../data/constants'
import { useUmami } from '../../hooks/useUmami'

const footerServices = [
  {
    label: 'Güvenlik Sistemleri',
    icon: SecurityIcon,
    href: '/services/guvenlik-sistemleri',
  },
  {
    label: 'Bakım ve Tamir',
    icon: BuildIcon,
    href: '/services/bakim-ve-tamir',
  },
  {
    label: 'Akıllı Ev (KNX)',
    icon: HomeIcon,
    href: '/services/akilli-bina-otomasyonu-knx',
  },
  {
    label: 'Uydu Sistemleri',
    icon: SatelliteIcon,
    href: '/services/uydu-ve-iptv',
  },
  {
    label: 'Aydınlatma',
    icon: LightbulbIcon,
    href: '/services/anahtar-priz-ve-aydinlatma',
  },
]

const partnerBrands = [
  'Hikvision',
  'KNX',
  'Panasonic',
  'Viko',
  'Tiandy',
  'Audio',
  'Mutlusan',
  'Netelsan',
]

const quickLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hizmetlerimiz', href: `/#${sectionIds.services}` },
  { label: 'Galeri', href: `/#${sectionIds.gallery}` },
  { label: 'Markalar', href: `/#${sectionIds.brands}` },
  { label: 'İletişim', href: `/#${sectionIds.contact}` },
]

export function Footer() {
  const whatsappNumber = contactInfo.phone.replace(/\s/g, '').replace('+', '')
  const { track } = useUmami()

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0f172a',
        color: 'rgba(255,255,255,0.7)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, rgba(8,145,178,0.5), transparent)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: -150,
          right: -150,
          width: 400,
          height: 400,
          background:
            'radial-gradient(circle, rgba(8,145,178,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          background:
            'radial-gradient(circle, rgba(8,145,178,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Main Footer Content */}
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 10 } }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Company Info */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box
                  sx={{
                    p: 1,
                    borderRadius: '14px',
                    bgcolor: 'rgba(8,145,178,0.15)',
                    border: '1px solid rgba(8,145,178,0.3)',
                  }}
                >
                  <Image
                    src="/favicon.ico"
                    alt="Orhan Elektrik Logo"
                    width={36}
                    height={36}
                    style={{ borderRadius: '8px' }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    color="white"
                    fontWeight="bold"
                    sx={{ letterSpacing: '-0.02em' }}
                  >
                    Orhan Elektrik
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: 'primary.main', fontWeight: 600 }}
                  >
                    Elektronik
                  </Typography>
                </Box>
              </Stack>

              <Typography
                variant="body2"
                sx={{ lineHeight: 1.8, maxWidth: 320 }}
              >
                Ankara'da 15+ yıllık tecrübemizle profesyonel elektrik tesisatı,
                güvenlik sistemleri, akıllı ev otomasyonu ve elektronik çözümler
                sunan güvenilir iş ortağınız.
              </Typography>

              {/* Trust Badges */}
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip
                  icon={<VerifiedIcon sx={{ fontSize: 16 }} />}
                  label="Garantili Hizmet"
                  size="small"
                  sx={{
                    bgcolor: 'rgba(16,185,129,0.15)',
                    color: '#10b981',
                    border: '1px solid rgba(16,185,129,0.3)',
                    fontWeight: 600,
                    fontSize: '0.7rem',
                  }}
                />
                <Chip
                  icon={<TrophyIcon sx={{ fontSize: 16 }} />}
                  label="15+ Yıl Tecrübe"
                  size="small"
                  sx={{
                    bgcolor: 'rgba(245,158,11,0.15)',
                    color: '#f59e0b',
                    border: '1px solid rgba(245,158,11,0.3)',
                    fontWeight: 600,
                    fontSize: '0.7rem',
                  }}
                />
              </Stack>

              {/* Social Links */}
              <Stack direction="row" spacing={1}>
                <IconButton
                  component="a"
                  href="https://www.instagram.com/orhan.elektrik.elektronik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track('social_click', {
                      location: 'footer_instagram',
                      href: 'https://www.instagram.com/orhan.elektrik.elektronik/',
                    })
                  }
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(225, 48, 108, 0.15)',
                      borderColor: '#E1306C',
                      color: '#E1306C',
                    },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track('social_click', {
                      location: 'footer_whatsapp',
                      href: `https://wa.me/${whatsappNumber}`,
                    })
                  }
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(37, 211, 102, 0.15)',
                      borderColor: '#25D366',
                      color: '#25D366',
                    },
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* Services */}
          <Grid size={{ xs: 12, sm: 6, lg: 2.5 }}>
            <Typography
              variant="subtitle1"
              color="white"
              fontWeight="bold"
              gutterBottom
              sx={{ mb: 2.5 }}
            >
              Hizmetlerimiz
            </Typography>
            <Stack spacing={1.5}>
              {footerServices.map((service) => {
                const Icon = service.icon
                return (
                  <Box
                    key={service.label}
                    component="a"
                    href={service.href}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      color: 'inherit',
                      textDecoration: 'none',
                      py: 0.5,
                      transition: 'all 0.2s',
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: 18, opacity: 0.7 }} />
                    <Typography variant="body2">{service.label}</Typography>
                  </Box>
                )
              })}
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 6, sm: 3, lg: 1.5 }}>
            <Typography
              variant="subtitle1"
              color="white"
              fontWeight="bold"
              gutterBottom
              sx={{ mb: 2.5 }}
            >
              Hızlı Erişim
            </Typography>
            <Stack spacing={1.5}>
              {quickLinks.map((link) => (
                <Box
                  key={link.label}
                  component="a"
                  href={link.href}
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    '&:hover': {
                      color: 'primary.main',
                      '& .arrow': { opacity: 1, transform: 'translateX(0)' },
                    },
                  }}
                >
                  <Typography variant="body2">{link.label}</Typography>
                  <ArrowForwardIcon
                    className="arrow"
                    sx={{
                      fontSize: 14,
                      opacity: 0,
                      transform: 'translateX(-8px)',
                      transition: 'all 0.2s',
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <Typography
              variant="subtitle1"
              color="white"
              fontWeight="bold"
              gutterBottom
              sx={{ mb: 2.5 }}
            >
              İletişim Bilgileri
            </Typography>
            <Stack spacing={2.5}>
              <Box
                component="a"
                href={`tel:${contactInfo.phone}`}
                onClick={() =>
                  track('call_click', { location: 'footer_phone' })
                }
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                  textDecoration: 'none',
                  color: 'inherit',
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: 'rgba(8,145,178,0.1)',
                    borderColor: 'rgba(8,145,178,0.3)',
                  },
                }}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: '10px',
                    bgcolor: 'primary.main',
                    color: 'white',
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      opacity: 0.6,
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                    }}
                  >
                    TELEFON
                  </Typography>
                  <Typography variant="body1" color="white" fontWeight="bold">
                    {contactInfo.phone}
                  </Typography>
                </Box>
              </Box>

              <Box
                component="a"
                href={contactInfo.mapIframe}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  track('address_click', { location: 'footer_address' })
                }
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                  textDecoration: 'none',
                  color: 'inherit',
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: 'rgba(8,145,178,0.1)',
                    borderColor: 'rgba(8,145,178,0.3)',
                  },
                }}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: '10px',
                    bgcolor: 'secondary.main',
                    color: 'white',
                  }}
                >
                  <PlaceIcon sx={{ fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      opacity: 0.6,
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                    }}
                  >
                    ADRES
                  </Typography>
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {contactInfo.address}
                  </Typography>
                </Box>
              </Box>

              {/* Working Hours */}
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexWrap: 'wrap',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ClockIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                  <Typography
                    variant="caption"
                    sx={{ color: 'rgba(255,255,255,0.8)' }}
                  >
                    Pzt-Cmt: 08:00-20:00
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ShieldIcon sx={{ fontSize: 16, color: '#10b981' }} />
                  <Typography
                    variant="caption"
                    sx={{ color: '#10b981', fontWeight: 600 }}
                  >
                    Acil: 7/24
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Partner Brands */}
        <Box sx={{ mt: { xs: 5, md: 8 } }}>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 4 }} />
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255,255,255,0.4)',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                mb: 2,
                display: 'block',
              }}
            >
              Çözüm Ortaklarımız
            </Typography>
            <Stack
              direction="row"
              spacing={{ xs: 2, md: 4 }}
              justifyContent="center"
              flexWrap="wrap"
              useFlexGap
              sx={{ gap: { xs: 1.5, md: 3 } }}
            >
              {partnerBrands.map((brand) => (
                <Typography
                  key={brand}
                  variant="body2"
                  sx={{
                    color: 'rgba(255,255,255,0.35)',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                    cursor: 'default',
                    '&:hover': { color: 'rgba(255,255,255,0.7)' },
                  }}
                >
                  {brand}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            mt: 5,
            pt: 4,
          }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography
              variant="body2"
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              &copy; {new Date().getFullYear()} Orhan Elektrik Elektronik. Tüm
              hakları saklıdır.
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.6 }}>
              Bu web sitesi{' '}
              <Link
                href="https://sametcc.me"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  track('external_click', {
                    location: 'footer_developer',
                    href: 'https://sametcc.me',
                  })
                }
                sx={{ color: 'primary.main', fontWeight: 600 }}
              >
                sametcc.me
              </Link>{' '}
              tarafından geliştirildi.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
