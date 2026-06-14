import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import theme from '@/theme'
import './globals.css'
import { Box } from '@mui/material'
import Script from 'next/script'
import { FloatingActionButton } from '@/components/home/FloatingActionButton'
import { Footer } from '@/components/home/Footer'
import { Header } from '@/components/home/Header'
import {
  LocalBusinessJsonLd,
  OrganizationJsonLd,
  WebSiteJsonLd,
} from '@/components/seo/JsonLd'
import { SkipToContent } from '@/components/ui/SkipToContent'
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  THEME_COLOR,
} from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Ankara Elektrik`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_URL,
    title: `${SITE_NAME} - Ankara Elektrik`,
    description:
      "Ankara'da profesyonel elektrik ve güvenlik sistemleri. CCTV, alarm, elektrik altyapısı ve teknik servis.",
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Ankara Elektrik`,
    description:
      "Ankara'da profesyonel elektrik ve güvenlik sistemleri. CCTV, alarm ve teknik servis.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/icons/icon-192x192.png',
  },
  manifest: '/manifest.json',
  category: 'electronics',
  other: {
    'og:logo': `${SITE_URL}/icons/icon-512x512.png`,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: THEME_COLOR,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <LocalBusinessJsonLd />
            <OrganizationJsonLd />
            <WebSiteJsonLd />
            <Script
              src="https://umami.sametcc.me/script.js"
              data-website-id="b4b80e84-5709-4675-a6dd-cc938134079b"
              strategy="afterInteractive"
              data-performance="true"
              data-sample-rate="0.15"
              data-mask-level="moderate"
              data-max-duration="300000"
            />
            <SkipToContent />
            <Box
              sx={{
                bgcolor: 'background.default',
                minHeight: '100vh',
                color: 'text.primary',
              }}
            >
              <Header />
              <Box id="main-content" component="main">
                {children}
              </Box>
              <Footer />
              <FloatingActionButton />
            </Box>
            <Analytics />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
