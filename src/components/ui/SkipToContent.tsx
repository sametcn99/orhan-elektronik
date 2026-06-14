'use client'

import { useCallback, useState } from 'react'

export function SkipToContent() {
  const [isVisible, setIsVisible] = useState(false)

  const show = useCallback(() => setIsVisible(true), [])
  const hide = useCallback(() => setIsVisible(false), [])

  return (
    <a
      href="#main-content"
      style={{
        position: 'absolute',
        left: isVisible ? '0' : '-9999px',
        top: '0',
        zIndex: 9999,
        padding: '8px 16px',
        background: '#1E40AF',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '0 0 4px 0',
        fontWeight: 600,
        transition: 'left 0.2s ease',
      }}
      onMouseOver={show}
      onMouseOut={hide}
      onFocus={show}
      onBlur={hide}
    >
      Ana içeriğe geç
    </a>
  )
}
