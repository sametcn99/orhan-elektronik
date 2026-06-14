import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const title =
    searchParams.get('title') ||
    'Orhan Elektrik Elektronik - Profesyonel Elektrik ve Güvenlik Sistemleri'
  const description =
    searchParams.get('description') ||
    "Ankara'da profesyonel elektrik, elektronik ve güvenlik sistemleri hizmetleri."

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
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #0ea5e9, #10b981)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            fontWeight: 800,
            color: '#fff',
          }}
        >
          OE
        </div>
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
          fontSize: title.length > 40 ? '40px' : '52px',
          fontWeight: 800,
          lineHeight: 1.2,
          maxWidth: '900px',
          marginBottom: '24px',
          background: 'linear-gradient(135deg, #0ea5e9, #10b981)',
          backgroundClip: 'text',
          color: 'transparent',
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
          }}
        >
          📍 Ankara, Türkiye
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '18px',
            opacity: 0.8,
          }}
        >
          📞 +90 532 574 93 92
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '18px',
            opacity: 0.8,
          }}
        >
          ⚡ 15+ Yıllık Tecrübe
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
