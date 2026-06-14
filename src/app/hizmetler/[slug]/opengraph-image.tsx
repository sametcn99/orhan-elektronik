import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { services } from '@/data/services'

export const alt = 'Hizmet - Orhan Elektrik Elektronik'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  const title = service?.title ?? 'Hizmet'
  const description =
    service?.summary ?? service?.description ?? 'Orhan Elektrik Elektronik'

  const logoData = await readFile(
    join(process.cwd(), 'public/icons/icon-512x512.png'),
    'base64',
  )
  const logoSrc = `data:image/png;base64,${logoData}`

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '60px 80px',
        background:
          'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        color: '#fff',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '40px',
        }}
      >
        <img
          alt="Orhan Elektrik Elektronik"
          src={logoSrc}
          width={64}
          height={64}
          style={{ borderRadius: 16 }}
        />
        <div
          style={{
            fontSize: '24px',
            fontWeight: 600,
            opacity: 0.9,
          }}
        >
          Orhan Elektrik Elektronik
        </div>
      </div>

      <div
        style={{
          fontSize: title.length > 30 ? '42px' : '52px',
          fontWeight: 800,
          lineHeight: 1.2,
          maxWidth: '900px',
          marginBottom: '24px',
          color: '#0ea5e9',
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: '24px',
          opacity: 0.7,
          maxWidth: '800px',
          lineHeight: 1.5,
        }}
      >
        {description.length > 120
          ? `${description.slice(0, 120)}...`
          : description}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          marginTop: 'auto',
          paddingTop: '40px',
          borderTop: '1px solid rgba(255,255,255,0.15)',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '18px',
            opacity: 0.8,
            background: 'rgba(255,255,255,0.1)',
            padding: '8px 16px',
            borderRadius: '8px',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#0ea5e9',
              fontSize: '11px',
              fontWeight: 700,
            }}
          >
            A
          </span>{' '}
          Ankara, Türkiye
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '18px',
            opacity: 0.8,
            background: 'rgba(255,255,255,0.1)',
            padding: '8px 16px',
            borderRadius: '8px',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#10b981',
              fontSize: '11px',
              fontWeight: 700,
            }}
          >
            T
          </span>{' '}
          +90 532 574 93 92
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '18px',
            opacity: 0.8,
            background: 'rgba(255,255,255,0.1)',
            padding: '8px 16px',
            borderRadius: '8px',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#f59e0b',
              fontSize: '11px',
              fontWeight: 700,
            }}
          >
            E
          </span>{' '}
          15+ Yıllık Tecrübe
        </div>
      </div>
    </div>,
    { ...size },
  )
}
