'use client'

import Link from 'next/link'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
  Chip,
  Divider,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  Phone as PhoneIcon,
  Place as PlaceIcon,
  WhatsApp as WhatsAppIcon,
  Email as EmailIcon,
  AccessTime as AccessTimeIcon,
} from '@mui/icons-material'
import { contactInfo } from '@/data/constants'

export default function ContactPage() {
  const whatsappNumber = contactInfo.phone.replace(/\s/g, '').replace('+', '')
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.7723054887706!2d32.8763315!3d39.9017299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fc758f2a919%3A0xc6a7ef7aaf2af164!2sOrhan%20Elektrik%20Bilgisayar!5e0!3m2!1sen!2str!4v1735736228372!5m2!1sen!2str'

  const contactActions = [
    {
      label: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      icon: <PhoneIcon />,
      variant: 'contained' as const,
    },
    {
      label: 'WhatsApp ile yazın',
      href: `https://wa.me/${whatsappNumber}`,
      icon: <WhatsAppIcon />,
      variant: 'outlined' as const,
    },
  ]

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
        color: 'text.primary',
        py: { xs: 6, md: 10 },
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 20% 20%, ${alpha('#0ea5e9', 0.14)}, transparent 32%), radial-gradient(circle at 80% 0%, ${alpha('#111827', 0.14)}, transparent 26%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: 6, position: 'relative' }}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              letterSpacing: '0.18em',
              fontWeight: 700,
            }}
          >
            İLETİŞİM
          </Typography>
          <Typography
            variant="h3"
            fontWeight={800}
            sx={{ letterSpacing: '-0.02em' }}
          >
            Daha hızlı, daha modern iletişim
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 760, lineHeight: 1.8 }}
          >
            Telefon veya WhatsApp aracılığıyla bize ulaşın. Kısa proje notu
            bırakın, aynı gün içinde dönüş yapalım; acil durumlarda 7/24
            erişebilirsiniz.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              sx={{
                borderRadius: 4,
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
                background: `linear-gradient(135deg, ${alpha('#0ea5e9', 0.12)} 0%, ${alpha('#0b1b2a', 0.08)} 100%)`,
                boxShadow: '0 20px 70px rgba(15, 23, 42, 0.28)',
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Stack spacing={3.5}>
                  <Stack spacing={1.5}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Chip
                        label="Aynı gün dönüş"
                        color="primary"
                        sx={{ borderRadius: 2 }}
                      />
                      <Chip
                        label="7/24 acil destek"
                        variant="outlined"
                        color="primary"
                        sx={{ borderRadius: 2 }}
                      />
                    </Stack>
                    <Typography
                      variant="h5"
                      fontWeight={800}
                      sx={{ letterSpacing: '-0.02em' }}
                    >
                      Doğrudan ulaşın veya hızlıca not bırakın
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ maxWidth: 620, lineHeight: 1.7 }}
                    >
                      Telefon ve WhatsApp hattımız anında yanıt verir. Yazılı
                      talep bırakırsanız proje özetinizi inceleyip aynı gün size
                      dönüş yaparız.
                    </Typography>
                  </Stack>

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                    {contactActions.map((action) => (
                      <Button
                        key={action.label}
                        component={Link}
                        href={action.href}
                        variant={action.variant}
                        startIcon={action.icon}
                        sx={{
                          borderRadius: 3,
                          justifyContent: 'flex-start',
                          px: 3,
                          flex: 1,
                          textTransform: 'none',
                        }}
                      >
                        {action.label}
                      </Button>
                    ))}
                  </Stack>

                  <Divider sx={{ borderStyle: 'dashed' }} />

                  <Stack spacing={2}>
                    <Stack
                      direction="row"
                      spacing={1.5}
                      alignItems="flex-start"
                    >
                      <AccessTimeIcon color="primary" />
                      <Box>
                        <Typography variant="subtitle2" fontWeight={700}>
                          Çalışma saatleri
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Hafta içi ve Cumartesi 08:00 - 20:00 / Acil durumlarda
                          7/24 müdahale
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={1.5}
                      alignItems="flex-start"
                    >
                      <PlaceIcon color="primary" />
                      <Box>
                        <Typography variant="subtitle2" fontWeight={700}>
                          Adres
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ lineHeight: 1.7 }}
                        >
                          {contactInfo.address}
                        </Typography>
                        <Button
                          component={Link}
                          href={contactInfo.mapIframe}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="text"
                          sx={{ width: 'fit-content', px: 0, mt: 0.5 }}
                        >
                          Haritada aç
                        </Button>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2.5} height="100%">
              <Card
                sx={{
                  borderRadius: 3,
                  border: '1px dashed',
                  borderColor: 'divider',
                  height: '100%',
                  backgroundColor: alpha('#0ea5e9', 0.06),
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={800}
                    sx={{ mb: 1 }}
                  >
                    Neden aramalısınız?
                  </Typography>
                  <Stack spacing={1.2}>
                    <Typography variant="body2" color="text.secondary">
                      • Projeye uygun ekip ve bütçe önerisi
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      • Sahaya çıkmadan önce hızlı keşif ve çözüm planı
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      • Aynı gün başlangıç için hazır ekip
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                height: '100%',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 12px 40px rgba(15, 23, 42, 0.16)',
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Box sx={{ width: '100%', height: { xs: 260, md: 360 } }}>
                  <iframe
                    src={mapEmbedUrl}
                    style={{ border: 0, width: '100%', height: '100%' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Harita"
                    allowFullScreen
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
