'use client'

import { Box, useTheme, alpha } from '@mui/material'

export function SectionBackground({
  variant = 'default',
}: {
  variant?: 'default' | 'alternate'
}) {
  const theme = useTheme()

  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: variant === 'default' ? -100 : 'auto',
          bottom: variant === 'alternate' ? -100 : 'auto',
          right: -100,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: variant === 'default' ? -100 : 'auto',
          top: variant === 'alternate' ? -100 : 'auto',
          left: -100,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.08)} 0%, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
    </>
  )
}
