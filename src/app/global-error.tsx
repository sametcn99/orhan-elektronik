'use client'

import { Home, Refresh } from '@mui/icons-material'
import { Box, Button, Container, Stack, Typography } from '@mui/material'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="tr">
      <body>
        <Box
          sx={{
            bgcolor: '#0f172a',
            color: 'white',
            minHeight: '100vh',
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
                background: 'linear-gradient(135deg, #ef4444, #f97316)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                mb: 2,
              }}
            >
              Hata
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              Bir şeyler ters gitti
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.7, mb: 4 }}>
              Beklenmeyen bir hata oluştu. Lütfen sayfayı yenilemeyi deneyin.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ justifyContent: 'center' }}
            >
              <Button
                onClick={reset}
                variant="contained"
                startIcon={<Refresh />}
                size="large"
                sx={{ borderRadius: 3, px: 4 }}
              >
                Tekrar Dene
              </Button>
              <Button
                component="a"
                href="/"
                variant="outlined"
                startIcon={<Home />}
                size="large"
                sx={{
                  borderRadius: 3,
                  px: 4,
                  borderColor: 'rgba(255,255,255,0.3)',
                  color: 'white',
                }}
              >
                Ana Sayfa
              </Button>
            </Stack>
          </Container>
        </Box>
      </body>
    </html>
  )
}
