import {
  ArrowForward,
  CheckCircle as CheckCircleIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FAQJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { SITE_URL } from '@/config/site'
import { contactInfo } from '@/data/constants'
import { services } from '@/data/services'
import { RelatedServices } from './RelatedServices'

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return {
      title: 'Hizmet bulunamadı',
      description: 'Aradığınız hizmet sayfası bulunamadı.',
    }
  }

  return {
    title: `${service.title} | Orhan Elektrik Elektronik`,
    description: service.description,
    keywords: [
      service.title,
      `${service.title} Ankara`,
      ...service.highlights,
      'Ankara elektrik',
      'profesyonel hizmet',
    ],
    alternates: {
      canonical: `${SITE_URL}/hizmetler/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Orhan Elektrik Elektronik`,
      description: service.summary || service.description,
      url: `${SITE_URL}/hizmetler/${service.slug}`,
      type: 'website',
      locale: 'tr_TR',
      siteName: 'Orhan Elektrik Elektronik',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Orhan Elektrik Elektronik`,
      description: service.summary || service.description,
    },
  }
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', py: 8 }}>
      <Container maxWidth="lg">
        <Breadcrumb
          items={[
            { label: 'Hizmetlerimiz', href: '/hizmetler' },
            { label: service.title },
          ]}
        />
        <ServiceJsonLd
          title={service.title}
          description={service.description}
          slug={service.slug}
          highlights={service.highlights}
        />
        <Card
          sx={{
            mb: 4,
            borderRadius: 4,
            overflow: 'hidden',
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: `0 18px 60px -30px ${service.color}`,
          }}
        >
          <Box
            sx={{
              px: { xs: 3, md: 5 },
              py: { xs: 4, md: 5 },
              borderBottom: '1px solid',
              borderColor: 'divider',
              background: `linear-gradient(135deg, ${service.color}14, transparent 60%)`,
            }}
          >
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={3}
              sx={{ alignItems: { md: 'center' } }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: service.color,
                  color: 'white',
                  borderRadius: 3,
                  flexShrink: 0,
                }}
              >
                <Icon fontSize="large" />
              </Box>
              <Stack spacing={1} sx={{ flex: 1 }}>
                <Typography
                  variant="overline"
                  sx={{ color: 'primary.main', letterSpacing: '0.2em' }}
                >
                  HİZMET DETAYI
                </Typography>
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.8 }}
                >
                  {service.description}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ flexWrap: 'wrap', pt: 1 }}
                >
                  {service.highlights.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      sx={{
                        bgcolor: `${service.color}12`,
                        borderColor: `${service.color}40`,
                        color: service.color,
                        fontWeight: 600,
                      }}
                      variant="outlined"
                      size="small"
                    />
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Box>

          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Stack spacing={3} sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                Alt hizmetler ve teslimatlar
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ maxWidth: 820, lineHeight: 1.7 }}
              >
                Her alt hizmet için kapsam, kullanılan ekipman ve teslimat
                çıktıları net şekilde belirlenir. Proje gereksinimlerinize göre
                bu maddeleri genişletebilir veya sadeleştirebiliriz.
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {service.subServices.map((sub) => (
                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                  key={sub.title}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      borderColor: 'divider',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor: service.color,
                        boxShadow: `0 12px 32px -20px ${service.color}`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Stack spacing={1.5}>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 800 }}
                        >
                          {sub.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ lineHeight: 1.7 }}
                        >
                          {sub.description}
                        </Typography>
                        <List dense>
                          {sub.outcomes.map((item) => (
                            <ListItem
                              key={item}
                              disableGutters
                              sx={{ alignItems: 'flex-start' }}
                            >
                              <ListItemIcon
                                sx={{ minWidth: 28, color: service.color }}
                              >
                                <CheckCircleIcon fontSize="small" />
                              </ListItemIcon>
                              <ListItemText
                                slotProps={{
                                  primary: {
                                    variant: 'body2',
                                    color: 'text.primary',
                                  },
                                }}
                                primary={item}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box
              sx={{
                mt: 5,
                p: 3,
                borderRadius: 3,
                bgcolor: `${service.color}0f`,
                border: `1px solid ${service.color}33`,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { md: 'center' },
                gap: 2.5,
              }}
            >
              <Stack spacing={1} sx={{ flex: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                  Projeniz için uygun kapsamı birlikte seçelim
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ maxWidth: 720 }}
                >
                  Keşif ve fiyatlandırma talepleriniz için bizi arayın veya
                  iletişim formunu doldurun; aynı gün içinde dönüş yapalım.
                </Typography>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button
                  component="a"
                  href={`/iletisim?subject=${encodeURIComponent(service.title)}`}
                  variant="contained"
                  startIcon={<ArrowForward />}
                  sx={{ borderRadius: 3, px: 3 }}
                >
                  İletişim sayfası
                </Button>
                <Button
                  component="a"
                  href={`tel:${contactInfo.phone}`}
                  variant="outlined"
                  startIcon={<PhoneIcon />}
                  sx={{ borderRadius: 3, px: 3 }}
                >
                  {contactInfo.phone}
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </Card>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>
            Sıkça Sorulan Sorular
          </Typography>
          <Stack spacing={2}>
            {[
              {
                q: `${service.title} hizmeti kapsamında ne sunuluyor?`,
                a: service.description,
              },
              {
                q: `${service.title} için Ankara'da hangi bölgelere hizmet veriyorsunuz?`,
                a: "Çankaya merkezli olarak Ankara'nın tüm ilçelerine hizmet veriyoruz. Sahada ve atölye içi çalışma seçeneklerimiz mevcuttur.",
              },
              {
                q: 'Keşif ve fiyatlandırma süreci nasıl işliyor?',
                a: 'İletişim formunu doldurduğunuzda veya bizi aradığınızda, aynı gün içinde dönüş yapıyoruz. Keşif sonrası detaylı fiyat teklifi ve ihtiyaç listesi taslağı paylaşıyoruz.',
              },
              ...service.subServices.slice(0, 2).map((sub) => ({
                q: `${sub.title} sürecinde neler yapılıyor?`,
                a: sub.description,
              })),
            ].map((faq) => (
              <Card
                key={faq.q}
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  borderColor: 'divider',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack spacing={1.5}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                      {faq.q}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {faq.a}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>

        <FAQJsonLd
          faqs={[
            {
              question: `${service.title} hizmeti kapsamında ne sunuluyor?`,
              answer: service.description,
            },
            {
              question: `${service.title} için Ankara'da hangi bölgelere hizmet veriyorsunuz?`,
              answer:
                "Çankaya merkezli olarak Ankara'nın tüm ilçelerine hizmet veriyoruz. Sahada ve atölye içi çalışma seçeneklerimiz mevcuttur.",
            },
            {
              question: 'Keşif ve fiyatlandırma süreci nasıl işliyor?',
              answer:
                'İletişim formunu doldurduğunuzda veya bizi aradığınızda, aynı gün içinde dönüş yapıyoruz. Keşif sonrası detaylı fiyat teklifi ve ihtiyaç listesi taslağı paylaşıyoruz.',
            },
            ...service.subServices.slice(0, 2).map((sub) => ({
              question: `${sub.title} sürecinde neler yapılıyor?`,
              answer: sub.description,
            })),
          ]}
        />

        <RelatedServices currentSlug={slug} />
      </Container>
    </Box>
  )
}
