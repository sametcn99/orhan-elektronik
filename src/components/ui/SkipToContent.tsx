'use client'

export function SkipToContent() {
  return (
    <a href="#main-content" className="skip-to-content">
      Ana içeriğe geç
      <style
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static CSS for skip-to-content accessibility link
        dangerouslySetInnerHTML={{
          __html: `
            .skip-to-content {
              position: absolute;
              left: -9999px;
              top: 0;
              z-index: 9999;
              padding: 8px 16px;
              background: #1E40AF;
              color: #fff;
              text-decoration: none;
              border-radius: 0 0 4px 0;
              font-weight: 600;
              transition: left 0.2s ease;
            }
            .skip-to-content:focus {
              left: 0;
            }
          `,
        }}
      />
    </a>
  )
}
