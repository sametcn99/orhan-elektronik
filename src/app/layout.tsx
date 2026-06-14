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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.orhanelektronikbilgisayar.com'),
  title: {
    default:
      'Orhan Elektrik Elektronik - Profesyonel Elektrik ve Güvenlik Sistemleri',
    template: '%s | Orhan Elektrik Elektronik',
  },
  description:
    "Ankara'da profesyonel elektrik, elektronik ve güvenlik sistemleri hizmetleri. CCTV kamera sistemleri, alarm sistemleri kurulumu ve bakımı, elektrik altyapı yönetimi ve teknik servis hizmetleri.",
  keywords: [
    'Orhan Elektrik Elektronik',
    'Elektrik Servisi Ankara',
    'Güvenlik Sistemleri',
    'CCTV Kamera Sistemleri',
    'Alarm Sistemleri',
    'Elektrik Bakım',
    'Teknik Servis Ankara',
    'Elektrik Altyapı',
    'Elektronik Tamir',
    'Profesyonel Elektrikçi',
    'Ankara Elektrik Hizmetleri',
    'Güvenlik Kamera Kurulumu',
    'Ankara Elektronik Servis',
    'Ankara Alarm Sistemleri',
    'Ankara Elektrikçi',
    'Elektrik ve Güvenlik Çözümleri',
    'Ev ve İş Yeri Güvenliği',
  ],
  authors: [{ name: 'Orhan Elektrik Elektronik' }],
  creator: 'Orhan Elektrik Elektronik',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.orhanelektronikbilgisayar.com',
    title:
      'Orhan Elektrik Elektronik - Profesyonel Elektrik ve Güvenlik Sistemleri',
    description:
      "Ankara'da profesyonel elektrik, elektronik ve güvenlik sistemleri hizmetleri. Uzman ekip, kaliteli hizmet.",
    siteName: 'Orhan Elektrik Elektronik',
    images: [
      {
        url: '/api/og?title=Orhan Elektrik Elektronik&description=Ankara%27da profesyonel elektrik, elektronik ve güvenlik sistemleri',
        width: 1200,
        height: 630,
        alt: 'Orhan Elektrik Elektronik - Profesyonel Elektrik ve Güvenlik Sistemleri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Orhan Elektrik Elektronik - Profesyonel Elektrik ve Güvenlik Sistemleri',
    description:
      "Ankara'da profesyonel elektrik, elektronik ve güvenlik sistemleri hizmetleri.",
    images: [
      '/api/og?title=Orhan Elektrik Elektronik&description=Ankara%27da profesyonel elektrik, elektronik ve güvenlik sistemleri',
    ],
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
  alternates: {
    canonical: 'https://www.orhanelektronikbilgisayar.com',
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
  category: 'electronics',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1E40AF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
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
