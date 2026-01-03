import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/theme'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

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
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: 'https://www.orhanelektronikbilgisayar.com',
  },
  other: {
    'google-site-verification': '', // Add your Google verification code here
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
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
            <Script
              src="https://umami.sametcc.me/script.js"
              data-website-id="b4b80e84-5709-4675-a6dd-cc938134079b"
              strategy="afterInteractive"
            />
            {children}
            <Analytics />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
