import {
  ArrowForward,
  NorthEast,
  Phone as PhoneIcon,
} from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
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
        <Breadcrumb items={[{ label: 'Hizmetlerimiz' }]} />
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
              component="h1"
              sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}
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
                  sx={{ fontWeight: 800, letterSpacing: '-0.01em' }}
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
                <Link
                  href="/iletisim"
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <Button
                    component="span"
                    variant="contained"
                    startIcon={<PhoneIcon />}
                    sx={{ borderRadius: 2, px: 3, minWidth: 200 }}
                  >
                    Uzmanla Görüş
                  </Button>
                </Link>
                <Button
                  component="a"
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
                <Link
                  href={`/hizmetler/${service.slug}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    height: '100%',
                  }}
                >
                  <Card
                    component="div"
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      position: 'relative',
                      overflow: 'hidden',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        borderColor: 'transparent',
                        boxShadow: `0 24px 48px -16px ${service.color}55`,
                        transform: 'translateY(-8px)',
                        background: `linear-gradient(135deg, ${service.color}08 0%, transparent 60%)`,
                        '& .service-icon-box': {
                          bgcolor: service.color,
                          color: 'white',
                          transform: 'scale(1.1) rotate(-4deg)',
                          boxShadow: `0 12px 28px -8px ${service.color}88`,
                          border: `1px solid ${service.color}`,
                        },
                        '& .service-arrow': {
                          opacity: 1,
                          transform: 'translate(0, 0)',
                          bgcolor: `${service.color}22`,
                        },
                        '& .service-card-glow': {
                          opacity: 1,
                        },
                        '& .service-bottom-bar': {
                          transform: 'scaleX(1)',
                        },
                        '& .service-cta': {
                          transform: 'translateX(4px)',
                        },
                        '& .service-chip': {
                          bgcolor: `${service.color}22`,
                          borderColor: service.color,
                        },
                      },
                    }}
                  >
                    <Box
                      className="service-card-glow"
                      sx={{
                        position: 'absolute',
                        top: -80,
                        right: -80,
                        width: 220,
                        height: 220,
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${service.color}20, transparent 70%)`,
                        opacity: 0.4,
                        transition: 'opacity 0.4s ease',
                        pointerEvents: 'none',
                      }}
                    />
                    <Box
                      className="service-bottom-bar"
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        bgcolor: service.color,
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition:
                          'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                        borderRadius: '0 0 16px 16px',
                      }}
                    />
                    <Box sx={{ p: { xs: 2.8, md: 3.2 } }}>
                      <Stack spacing={2.2} sx={{ position: 'relative' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Box
                            className="service-icon-box"
                            sx={{
                              width: 52,
                              height: 52,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: 3,
                              bgcolor: `${service.color}18`,
                              color: service.color,
                              border: `1px solid ${service.color}33`,
                              transition:
                                'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                          >
                            <Icon sx={{ fontSize: 24 }} />
                          </Box>
                          <Box
                            className="service-arrow"
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 32,
                              height: 32,
                              borderRadius: 2,
                              bgcolor: `${service.color}10`,
                              color: service.color,
                              opacity: 0,
                              transform: 'translate(-8px, 8px)',
                              transition:
                                'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                          >
                            <NorthEast sx={{ fontSize: 16 }} />
                          </Box>
                        </Box>

                        <Stack spacing={0.8}>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 800, letterSpacing: '-0.01em' }}
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
                          useFlexGap
                          sx={{ flexWrap: 'wrap' }}
                        >
                          {service.highlights.slice(0, 3).map((item) => (
                            <Chip
                              key={item}
                              label={item}
                              size="small"
                              className="service-chip"
                              sx={{
                                bgcolor: `${service.color}14`,
                                border: `1px solid ${service.color}33`,
                                color: service.color,
                                fontWeight: 600,
                                borderRadius: 1.4,
                                transition: 'all 0.25s ease',
                              }}
                            />
                          ))}
                        </Stack>

                        <Box
                          className="service-cta"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            color: service.color,
                            fontWeight: 700,
                            transition:
                              'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 800 }}>
                            Detayları incele
                          </Typography>
                          <ArrowForward sx={{ fontSize: 16 }} />
                        </Box>
                      </Stack>
                    </Box>
                  </Card>
                </Link>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}
