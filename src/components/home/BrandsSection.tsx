'use client'

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  useTheme,
  alpha,
  Stack,
} from '@mui/material'
import { WorkspacePremium as PremiumIcon } from '@mui/icons-material'
import { sectionIds } from '@/data/constants'

const brands = [
  {
    name: 'Hikvision',
    logo: '/brands/hikvision.png',
    description:
      'Gelişmiş video gözetim teknolojileri ve güvenli yaşam çözümleri konusunda dünya lideri.',
    specialties: ['Kamera Sistemleri', 'Güvenlik', 'Yapay Zeka'],
    zoom: 350,
  },
  {
    name: 'KNX',
    logo: '/brands/knx.png',
    description:
      'Akıllı ev ve bina otomasyonu için dünya standardı. Konforlu ve enerji verimli yaşam alanları.',
    specialties: ['Akıllı Ev', 'Otomasyon', 'Enerji Tasarrufu'],
    zoom: 100,
  },
  {
    name: 'Next & Nextstar',
    logo: '/brands/next-nextstar.png',
    description:
      'Uydu sistemleri ve tüketici elektroniğinde Türkiye’nin öncü markası ile kesintisiz yayın keyfi.',
    specialties: ['Uydu Sistemleri', 'Görüntü Ses', 'Elektronik'],
    zoom: 100,
  },
  {
    name: 'Panasonic',
    logo: '/brands/panasonic.png',
    description:
      'Yüksek kaliteli elektrik anahtar ve priz serileri ile yaşam alanlarınıza şıklık ve güvenlik katar.',
    specialties: ['Anahtar-Priz', 'Aydınlatma', 'Elektronik'],
    zoom: 200,
  },
  {
    name: 'Tiandy',
    logo: '/brands/tiandy.png',
    description:
      'Yüksek çözünürlüklü güvenlik kameraları ve profesyonel izleme çözümleri ile tam koruma.',
    specialties: ['IP Kamera', 'Gece Görüş', 'Güvenlik Çözümleri'],
    zoom: 240,
  },
  {
    name: 'Viko',
    logo: '/brands/viko.png',
    description:
      "Türkiye'nin lider elektrik malzemeleri üreticisi. Kaliteli, dayanıklı ve şık anahtar-priz çözümleri.",
    specialties: ['Elektrik Altyapı', 'Şalt Grubu', 'Anahtar-Priz'],
    zoom: 100,
  },
]

export default function BrandsSection() {
  const theme = useTheme()

  return (
    <Box
      id={sectionIds.brands}
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default',
      }}
    >
      {/* Background Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={8}>
          <Typography
            variant="overline"
            color="primary"
            fontWeight="bold"
            sx={{ letterSpacing: 3, display: 'block', mb: 1 }}
          >
            MARKALAR
          </Typography>
          <Typography variant="h3" fontWeight="800" sx={{ mb: 3 }}>
            Sektörün Liderleriyle Güçlü İşbirliği
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400 }}
          >
            Kalite, güven ve teknolojide dünya standartlarını belirleyen
            markalarla çalışarak size en iyi hizmeti sunuyoruz.
          </Typography>
        </Box>

        {/* Brands Grid */}
        <Grid container spacing={4}>
          {brands.map((brand, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={brand.name}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '24px',
                  border: '1px solid',
                  borderColor: alpha(theme.palette.divider, 0.1),
                  bgcolor: alpha('#fff', 0.6),
                  backdropFilter: 'blur(12px)',
                  transition:
                    'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: `0 20px 40px -10px ${alpha(theme.palette.primary.main, 0.15)}`,
                    borderColor: alpha(theme.palette.primary.main, 0.3),
                    '& .brand-logo-container': {
                      transform: 'scale(1.05)',
                      borderColor: 'primary.main',
                      bgcolor: 'white',
                    },
                    '& .brand-logo': {
                      filter: 'grayscale(0%)',
                      opacity: 1,
                    },
                  },
                }}
              >
                {/* Decorative gradients inside card */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100px',
                    height: '100px',
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 100%)`,
                    borderRadius: '0 0 0 100%',
                    zIndex: 0,
                  }}
                />

                <CardContent sx={{ flexGrow: 1, p: 4, zIndex: 1 }}>
                  {/* Logo Container */}
                  <Box
                    className="brand-logo-container"
                    sx={{
                      height: 120,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: alpha('#fff', 0.8),
                      borderRadius: '20px',
                      mb: 4,
                      p: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s ease',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      className="brand-logo"
                      component="img"
                      src={brand.logo || '/placeholder.svg'}
                      alt={`${brand.name} logo`}
                      sx={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        filter: 'grayscale(100%)',
                        opacity: 0.8,
                        transition: 'all 0.4s ease',
                        transform: `scale(${brand.zoom / 100})`, // Preserved zoom logic
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                    }}
                  >
                    {brand.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 3,
                      lineHeight: 1.7,
                      minHeight: '60px', // Uniform height alignment
                    }}
                  >
                    {brand.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {brand.specialties.map((specialty) => (
                      <Chip
                        key={specialty}
                        label={specialty}
                        size="small"
                        sx={{
                          borderRadius: '8px',
                          bgcolor: alpha(theme.palette.background.default, 0.8),
                          border: '1px solid',
                          borderColor: alpha(theme.palette.divider, 0.1),
                          color: 'text.secondary',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          transition: 'all 0.2s',
                          '&:hover': {
                            bgcolor: alpha(theme.palette.primary.main, 0.05),
                            color: 'primary.main',
                            borderColor: alpha(theme.palette.primary.main, 0.2),
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
