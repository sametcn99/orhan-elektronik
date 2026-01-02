import { Box, Typography } from '@mui/material'

interface SectionHeaderProps {
    overline: string
    title: string
    description?: string
    align?: 'left' | 'center' | 'right'
}

export function SectionHeader({
    overline,
    title,
    description,
    align = 'center',
}: SectionHeaderProps) {
    return (
        <Box textAlign={align} mb={8}>
            <Typography
                variant="overline"
                color="primary"
                fontWeight="bold"
                sx={{
                    letterSpacing: 3,
                    display: 'block',
                    mb: 1,
                    fontSize: '0.875rem',
                }}
            >
                {overline}
            </Typography>
            <Typography
                variant="h3"
                fontWeight="800"
                sx={{
                    mb: 3,
                    fontSize: { xs: '2rem', md: '3rem' },
                    background: (theme) =>
                        `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.text.secondary} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                {title}
            </Typography>
            {description && (
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                        maxWidth: 700,
                        mx: align === 'center' ? 'auto' : 0,
                        fontWeight: 400,
                        fontSize: { xs: '1rem', md: '1.25rem' },
                        lineHeight: 1.6,
                    }}
                >
                    {description}
                </Typography>
            )}
        </Box>
    )
}
