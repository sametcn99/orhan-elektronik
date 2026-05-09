'use client'

import { ArrowForward } from '@mui/icons-material'
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { services } from '@/data/services'

type RelatedServicesProps = {
  currentSlug: string
}

export function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const otherServices = services.filter((s) => s.slug !== currentSlug)

  if (otherServices.length === 0) return null

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>
        Diğer Hizmetlerimiz
      </Typography>
      <Grid container spacing={2.5}>
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
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: other.color,
                    boxShadow: `0 8px 24px -12px ${other.color}66`,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ p: 2.5 }}>
                  <Stack spacing={1.5}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 2,
                        bgcolor: `${other.color}14`,
                        color: other.color,
                        border: `1px solid ${other.color}33`,
                      }}
                    >
                      <OtherIcon sx={{ fontSize: 22 }} />
                    </Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                      {other.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.6,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {other.summary || other.description}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={0.5}
                      sx={{ color: other.color, alignItems: 'center' }}
                    >
                      <Typography variant="caption" sx={{ fontWeight: 700 }}>
                        Detayları incele
                      </Typography>
                      <ArrowForward sx={{ fontSize: 14 }} />
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
