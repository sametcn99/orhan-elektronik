'use client'

import { Home, Phone } from '@mui/icons-material'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { contactInfo } from '@/data/constants'

export default function NotFoundClient() {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '4rem', md: '6rem' },
            fontWeight: 900,
            background: 'linear-gradient(135deg, #0ea5e9, #10b981)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
            mb: 2,
          }}
        >
          404
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Sayfa bulunamadı
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfaya
          dönerek devam edebilirsiniz.
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ justifyContent: 'center' }}
        >
          <Button
            component={Link}
            href="/"
            variant="contained"
            startIcon={<Home />}
            size="large"
            sx={{ borderRadius: 3, px: 4 }}
          >
            Ana Sayfa
          </Button>
          <Button
            component="a"
            href={`tel:${contactInfo.phone}`}
            variant="outlined"
            startIcon={<Phone />}
            size="large"
            sx={{ borderRadius: 3, px: 4 }}
          >
            Bizi Arayın
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
