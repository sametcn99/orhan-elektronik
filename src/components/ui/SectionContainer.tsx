import { Box, type SxProps, type Theme } from '@mui/material'

export function SectionContainer({
  id,
  children,
  sx,
}: {
  id?: string
  children: React.ReactNode
  sx?: SxProps<Theme>
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        overflow: 'hidden',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}
