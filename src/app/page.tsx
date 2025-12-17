'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  IconButton,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Fab,
  Slide,
  Zoom,
  Fade,
  useTheme,
  Stack,
  alpha,
  useScrollTrigger,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import {
  Phone as PhoneIcon,
  Place as PlaceIcon,
  Bolt as BoltIcon,
  Menu as MenuIcon,
  ArrowForward as ArrowRightIcon,
  Shield as ShieldIcon,
  Build as BuildIcon,
  Security as SecurityIcon,
  AttachMoney as AttachMoneyIcon,
  EmojiEvents as AwardIcon,
  AccessTime as ClockIcon,
  AutoAwesome as SparklesIcon,
} from '@mui/icons-material'
import dynamic from 'next/dynamic'

const InstagramEmbed = dynamic(
  () => import('react-social-media-embed').then((mod) => mod.InstagramEmbed),
  { ssr: false },
)

// --- Hooks ---

function useOnScreen(ref: React.RefObject<Element | null>, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true)
          observer.disconnect() // Trigger once
        }
      },
      { rootMargin },
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [ref, rootMargin])
  return isIntersecting
}

// --- Components ---

const contactInfo = {
  address: 'Murat Mah. Yavuzevler Sk. 18/C Çankaya/Ankara',
  phone: '+90 0532 574 93 92',
  mapIframe: 'https://maps.app.goo.gl/3nwdPZaG1ac97vb79',
}

type SectionIds = {
  hero: string
  services: string
  instagram: string
  contact: string
}

const sectionIds: SectionIds = {
  hero: 'hero',
  services: 'services',
  instagram: 'instagram',
  contact: 'contact',
}

const services = [
  {
    title: 'Garantili Servis',
    description:
      'Orhan Elektrik Elektronik olarak, müşterilerimize en iyi hizmeti sunmak için çalışıyoruz. Elektrik ve elektronik cihazlarınızın bakım ve onarımı için güvenilir ve hızlı bir servis sunuyoruz.',
    icon: ShieldIcon,
    color: '#06b6d4', // Cyan
  },
  {
    title: 'Bakım ve Tamir Servisi',
    description:
      'Her türlü elektrik ve elektronik cihazınızın bakım ve onarımını gerçekleştiriyoruz. Alanında uzman ekibimizle sorunlarınıza kalıcı çözümler sunuyoruz.',
    icon: BuildIcon,
    color: '#f97316', // Orange
  },
  {
    title: 'Güvenlik Sistemleri',
    description:
      'Ev ve işyerleriniz için profesyonel güvenlik sistemleri kurulumu ve bakımı yapıyoruz. CCTV kamera sistemleri, alarm sistemleri ve daha fazlası.',
    icon: SecurityIcon,
    color: '#10b981', // Emerald
  },
  {
    title: 'Uygun Fiyat',
    description:
      'Kaliteli hizmeti uygun fiyatlarla sunuyoruz. Şeffaf fiyatlandırma politikamızla müşterilerimize her zaman en iyi değeri sunmayı hedefliyoruz.',
    icon: AttachMoneyIcon,
    color: '#a855f7', // Purple
  },
]

const stats = [
  { value: 15, label: 'Yıllık Tecrübe', suffix: '+', icon: AwardIcon },
  { value: 24, label: 'Saat Destek', suffix: '/7', icon: ClockIcon },
]

function AnimatedCounter({
  value,
  suffix = '',
}: {
  value: number
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isVisible = useOnScreen(ref)

  useEffect(() => {
    if (isVisible) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isVisible, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

function SectionContainer({
  id,
  children,
  sx,
}: {
  id?: string
  children: React.ReactNode
  sx?: any
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        overflow: 'hidden',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navItems = [
    { label: 'Ana Sayfa', href: '#' + sectionIds.hero },
    { label: 'Hizmetlerimiz', href: '#' + sectionIds.services },
    { label: 'Galeri', href: '#' + sectionIds.instagram },
    { label: 'İletişim', href: '#' + sectionIds.contact },
  ]

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        height: '100%',
        bgcolor: 'background.default',
      }}
    >
      <Box
        sx={{
          py: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <BoltIcon sx={{ color: 'primary.main', fontSize: 28 }} />
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          Orhan Elektrik
        </Typography>
      </Box>
      <List sx={{ pt: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component="a"
              href={item.href}
              sx={{ textAlign: 'center', py: 2 }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ mt: 2, px: 2 }}>
          <Button
            fullWidth
            variant="contained"
            href={`tel:${contactInfo.phone}`}
            startIcon={<PhoneIcon />}
            sx={{ py: 1.5, borderRadius: 2 }}
          >
            Hemen Ara
          </Button>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ justifyContent: 'space-between', height: 72 }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            component="a"
            href={'#' + sectionIds.hero}
            sx={{ textDecoration: 'none', color: 'text.primary' }}
          >
            <Box
              sx={{
                bgcolor: 'primary.main',
                borderRadius: '12px',
                p: 0.8,
                display: 'flex',
                boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)',
              }}
            >
              <BoltIcon sx={{ color: 'white', fontSize: 24 }} />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontWeight: 800,
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              Orhan Elektrik
            </Typography>
          </Stack>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                variant="text"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 600,
                  px: 2,
                  '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              href={`tel:${contactInfo.phone}`}
              startIcon={<PhoneIcon />}
              sx={{ ml: 2, borderRadius: '50px', px: 3 }}
            >
              Hemen Ara
            </Button>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: 'text.primary' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
        }}
        anchor="right"
      >
        {drawer}
      </Drawer>
    </AppBar>
  )
}

function HeroSection() {
  const ref = useRef(null)
  const isVisible = useOnScreen(ref)
  const theme = useTheme()

  return (
    <Box
      id={sectionIds.hero}
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 },
        background: `
          radial-gradient(circle at 10% 20%, ${alpha(theme.palette.primary.light, 0.15)} 0%, transparent 40%),
          radial-gradient(circle at 90% 80%, ${alpha(theme.palette.secondary.light, 0.1)} 0%, transparent 40%),
          linear-gradient(to bottom, #fff, ${alpha(theme.palette.background.default, 0.5)})
        `,
      }}
    >
      <Container maxWidth="lg" sx={{ zIndex: 1, position: 'relative' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 8 }}>
            <Fade in={isVisible} timeout={800}>
              <Box>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: 'primary.main',
                    px: 2,
                    py: 1,
                    borderRadius: '50px',
                    mb: 4,
                  }}
                >
                  <SparklesIcon fontSize="small" />
                  <Typography variant="subtitle2" fontWeight="700">
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
                  }}
                >
                  Güvenli ve Modern <br />
                  <Box
                    component="span"
                    sx={{
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Elektrik Çözümleri
                  </Box>
                </Typography>

                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{
                    mb: 6,
                    maxWidth: '600px',
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  Eviniz ve iş yeriniz için 7/24 profesyonel elektrik,
                  elektronik ve güvenlik sistemleri servisi.
                </Typography>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ mb: 8 }}
                >
                  <Button
                    component="a"
                    href="#services"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRightIcon />}
                    sx={{
                      borderRadius: '50px',
                      px: 4,
                      py: 1.8,
                      fontSize: '1rem',
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
                    sx={{
                      borderRadius: '50px',
                      px: 4,
                      py: 1.8,
                      fontSize: '1rem',
                      borderWidth: '2px',
                      '&:hover': { borderWidth: '2px' },
                    }}
                  >
                    Bizi Arayın
                  </Button>
                </Stack>

                <Stack
                  direction="row"
                  flexWrap="wrap"
                  spacing={3}
                  sx={{ gap: 2 }}
                >
                  {['7/24 Destek', 'Garantili İşçilik', 'Hızlı Servis'].map(
                    (item, index) => (
                      <Box
                        key={item}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                        }}
                      >
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            bgcolor: 'primary.light',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'primary.contrastText',
                            fontSize: '0.75rem',
                          }}
                        >
                          ✓
                        </Box>
                        <Typography
                          variant="body2"
                          fontWeight="600"
                          color="text.secondary"
                        >
                          {item}
                        </Typography>
                      </Box>
                    ),
                  )}
                </Stack>
              </Box>
            </Fade>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            {/* Abstract visual decoration */}
            <Box sx={{ position: 'relative', height: 400, width: '100%' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 300,
                  height: 300,
                  borderRadius: '50%',
                  background: `conic-gradient(from 180deg at 50% 50%, ${alpha(theme.palette.primary.main, 0.4)} 0deg, transparent 180deg)`,
                  filter: 'blur(40px)',
                  animation: 'pulse 4s infinite ease-in-out',
                  '@keyframes pulse': {
                    '0%': {
                      opacity: 0.5,
                      transform: 'translate(-50%, -50%) scale(1)',
                    },
                    '50%': {
                      opacity: 0.8,
                      transform: 'translate(-50%, -50%) scale(1.1)',
                    },
                    '100%': {
                      opacity: 0.5,
                      transform: 'translate(-50%, -50%) scale(1)',
                    },
                  },
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  bgcolor: 'background.paper',
                  p: 3,
                  borderRadius: 4,
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                  maxWidth: 320,
                  mx: 'auto',
                }}
              >
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{ p: 1, bgcolor: 'primary.soft', borderRadius: 2 }}
                    >
                      <ShieldIcon color="primary" />
                    </Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Güvenli Hizmet
                    </Typography>
                  </Box>
                  <Box sx={{ height: 1, bgcolor: 'divider' }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{ p: 1, bgcolor: 'primary.soft', borderRadius: 2 }}
                    >
                      <ClockIcon color="primary" />
                    </Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Zamanında Teslim
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

function StatsSection() {
  const ref = useRef(null)
  const isVisible = useOnScreen(ref)

  return (
    <Box
      sx={{
        bgcolor: 'white',
        py: 10,
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
      ref={ref}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid size={{ xs: 6, md: 4 }} key={stat.label}>
              <Zoom
                in={isVisible}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Typography
                    variant="h2"
                    fontWeight="800"
                    color="primary.main"
                    sx={{ mb: 1 }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    spacing={1}
                  >
                    <stat.icon sx={{ color: 'text.secondary', fontSize: 20 }} />
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      fontWeight="600"
                    >
                      {stat.label}
                    </Typography>
                  </Stack>
                </Box>
              </Zoom>
            </Grid>
          ))}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ textAlign: 'center', p: 3 }}>
              <Typography
                variant="h2"
                fontWeight="800"
                color="primary.main"
                sx={{ mb: 1 }}
              >
                100%
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
              >
                <AwardIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                <Typography
                  variant="h6"
                  color="text.secondary"
                  fontWeight="600"
                >
                  Müşteri Memnuniyeti
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

function ServicesSection() {
  const ref = useRef(null)
  const isVisible = useOnScreen(ref)

  return (
    <SectionContainer
      id={sectionIds.services}
      sx={{ bgcolor: 'background.default' }}
    >
      <Container maxWidth="lg" ref={ref}>
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
              <Slide
                direction="up"
                in={isVisible}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
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
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  )
}

function InstagramSection() {
  const theme = useTheme()

  return (
    <SectionContainer
      id={sectionIds.instagram}
      sx={{ bgcolor: alpha(theme.palette.secondary.light, 0.03) }}
    >
      <Container maxWidth="md">
        <Box textAlign="center" mb={6}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 1,
              bgcolor: 'background.paper',
              borderRadius: '50%',
              mb: 2,
              boxShadow: 2,
            }}
          >
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
              alt="Instagram"
              sx={{ width: 32, height: 32 }}
            />
          </Box>
          <Typography variant="h3" fontWeight="800" gutterBottom>
            Bizi Instagram'da Takip Edin
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            En son projelerimiz ve referanslarımız için sosyal medya hesabımıza
            göz atın.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden',
            borderRadius: 6,
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.15)',
            bgcolor: 'white',
            border: '8px solid white',
            maxWidth: 550,
            mx: 'auto',
          }}
        >
          <InstagramEmbed
            url="https://www.instagram.com/orhan.elektrik.elektronik/"
            width={550}
          />
        </Box>
      </Container>
    </SectionContainer>
  )
}

function ContactSection() {
  return (
    <SectionContainer id={sectionIds.contact} sx={{ bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, lg: 5 }}>
            <Typography
              variant="overline"
              color="primary"
              fontWeight="bold"
              sx={{ letterSpacing: 3 }}
            >
              İLETİŞİM
            </Typography>
            <Typography variant="h3" fontWeight="800" sx={{ mt: 1, mb: 4 }}>
              Size Nasıl Yardımcı Olabiliriz?
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 6, fontSize: '1.1rem' }}
            >
              Her türlü elektrik ve elektronik arızası, bakım veya kurulum
              talepleriniz için bize ulaşın.
            </Typography>

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

function Footer() {
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
              {/* Add social media links here if needed */}
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
              {['Ana Sayfa', 'Hizmetlerimiz', 'İletişim'].map((link) => (
                <Box
                  key={link}
                  component="a"
                  href="#"
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {link}
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

function FloatingActionButton() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 100,
        }}
      >
        <Fab
          color="primary"
          aria-label="call"
          href={`tel:${contactInfo.phone}`}
          size="large"
        >
          <PhoneIcon />
        </Fab>
      </Box>
    </Zoom>
  )
}

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
