'use client'

import { EmojiEvents as AwardIcon } from '@mui/icons-material'
import { Box, Container, Grid, Stack, Typography, Zoom } from '@mui/material'
import { useRef } from 'react'
import { stats } from '../../data/constants'
import { useOnScreen } from '../../hooks/useOnScreen'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { SectionBackground } from '../ui/SectionBackground'

export function StatsSection() {
  const ref = useRef(null)
  const isVisible = useOnScreen(ref)

  return (
    <Box
      sx={{
        bgcolor: 'white',
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
      ref={ref}
    >
      <SectionBackground variant="alternate" />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
