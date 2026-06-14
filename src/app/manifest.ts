import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Orhan Elektrik Elektronik',
    short_name: 'Orhan Elektrik',
    description:
      'Orhan Elektrik Elektronik - Profesyonel Elektrik ve Güvenlik Sistemleri',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1E40AF',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Hizmetlerimiz',
        short_name: 'Hizmetler',
        url: '/hizmetler',
        icons: [{ src: '/icons/icon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'İletişim',
        short_name: 'İletişim',
        url: '/iletisim',
        icons: [{ src: '/icons/icon-192x192.png', sizes: '192x192' }],
      },
    ],
  }
}
