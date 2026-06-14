'use client'

import { ArrowForward, NorthEast } from '@mui/icons-material'
import { Box, Card, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { services } from '@/data/services'

type RelatedServicesProps = {
  currentSlug: string
}

export function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const otherServices = services.filter((s) => s.slug !== currentSlug)

  if (otherServices.length === 0) return null

  return (
    <Box sx={{ mt: 8 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <Box
          sx={{
            width: 4,
            height: 36,
            borderRadius: 2,
            bgcolor: 'primary.main',
          }}
        />
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Diğer Hizmetlerimiz
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
            İhtiyacınıza uygun tüm profesyonel çözümlerimiz
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {otherServices.map((other) => {
          const OtherIcon = other.icon
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={other.slug}>
              <Card
                component={Link}
                href={`/hizmetler/${other.slug}`}
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  height: '100%',
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    borderColor: 'transparent',
                    boxShadow: `0 24px 48px -16px ${other.color}55`,
                    transform: 'translateY(-8px)',
                    background: `linear-gradient(135deg, ${other.color}08 0%, transparent 60%)`,
                    '& .service-icon-box': {
                      bgcolor: other.color,
                      color: 'white',
                      transform: 'scale(1.1) rotate(-4deg)',
                      boxShadow: `0 12px 28px -8px ${other.color}88`,
                      border: `1px solid ${other.color}`,
                    },
                    '& .service-arrow': {
                      opacity: 1,
                      transform: 'translate(0, 0)',
                      bgcolor: `${other.color}22`,
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
                    background: `radial-gradient(circle, ${other.color}20, transparent 70%)`,
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
                    bgcolor: other.color,
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: '0 0 16px 16px',
                  }}
                />
                <Box sx={{ p: 3 }}>
                  <Stack spacing={2} sx={{ position: 'relative' }}>
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
                          bgcolor: `${other.color}10`,
                          color: other.color,
                          border: `1px solid ${other.color}22`,
                          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        <OtherIcon sx={{ fontSize: 24 }} />
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
                          bgcolor: `${other.color}10`,
                          color: other.color,
                          opacity: 0,
                          transform: 'translate(-8px, 8px)',
                          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        <NorthEast sx={{ fontSize: 16 }} />
                      </Box>
                    </Box>

                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 800, letterSpacing: '-0.01em' }}
                    >
                      {other.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.7,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {other.summary || other.description}
                    </Typography>

                    <Box
                      className="service-cta"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: other.color,
                        pt: 0.5,
                        transition:
                          'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{ fontWeight: 700, letterSpacing: '0.02em' }}
                      >
                        Detayları incele
                      </Typography>
                      <ArrowForward sx={{ fontSize: 12 }} />
                    </Box>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
