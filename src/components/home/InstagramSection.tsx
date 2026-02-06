'use client'

import { alpha, Box, Container, Typography, useTheme } from '@mui/material'
import dynamic from 'next/dynamic'
import { sectionIds } from '../../data/constants'
import { SectionContainer } from '../ui/SectionContainer'

const InstagramEmbed = dynamic(
  () => import('react-social-media-embed').then((mod) => mod.InstagramEmbed),
  { ssr: false },
)

export function InstagramSection() {
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
            maxWidth: 750,
            mx: 'auto',
          }}
        >
          <InstagramEmbed
            url="https://www.instagram.com/orhan.elektrik.elektronik/"
            width={750}
          />
        </Box>
      </Container>
    </SectionContainer>
  )
}
