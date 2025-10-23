import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Orhan Elektrik Elektronik',
    short_name: 'Orhan Elektrik',
    description: 'Orhan Elektrik Elektronik - Bilgi Ve Bilişim Teknolojileri',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0000ff',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
