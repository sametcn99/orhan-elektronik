'use client'

import Link from 'next/link'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  useTheme,
  alpha,
} from '@mui/material'
import { motion } from 'motion/react'
import { sectionIds } from '@/data/constants'
import { brands } from '@/data/brands'
import { SectionHeader } from '../ui/SectionHeader'
import { SectionBackground } from '../ui/SectionBackground'

const MotionCard = motion.create(Card)
const MotionBox = motion.create(Box)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
}

export default function BrandsSection() {
  const theme = useTheme()

  return (
    <Box
      id={sectionIds.brands}
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default',
      }}
    >
      <SectionBackground />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          overline="MARKALAR"
          title="Sektörün Liderleriyle Güçlü İşbirliği"
          description="Kalite, güven ve teknolojide dünya standartlarını belirleyen markalarla çalışarak size en iyi hizmeti sunuyoruz."
        />

        {/* Brands Grid */}
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <Grid container spacing={3}>
            {brands.map((brand) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={brand.name}>
                <MotionCard
                  variants={cardVariants}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '28px',
                    border: '1px solid',
                    borderColor: alpha(theme.palette.divider, 0.08),
                    bgcolor: alpha('#fff', 0.7),
                    backdropFilter: 'blur(20px)',
                    boxShadow: `0 4px 24px -4px ${alpha('#000', 0.06)}`,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '28px',
                      padding: '1px',
                      background: `linear-gradient(135deg, ${alpha(brand.accent, 0.3)}, transparent 50%, ${alpha(theme.palette.primary.main, 0.2)})`,
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    },
                    '&:hover': {
                      boxShadow: `0 20px 50px -12px ${alpha(brand.accent, 0.25)}, 0 8px 24px -8px ${alpha('#000', 0.1)}`,
                      borderColor: alpha(brand.accent, 0.2),
                      '&::before': {
                        opacity: 1,
                      },
                      '& .brand-logo-container': {
                        borderColor: alpha(brand.accent, 0.3),
                        bgcolor: 'white',
                        boxShadow: `0 8px 32px -8px ${alpha(brand.accent, 0.2)}`,
                      },
                      '& .brand-logo': {
                        filter: 'grayscale(0%)',
                        opacity: 1,
                        transform: `scale(${(brand.zoom / 100) * 1.05})`,
                      },
                      '& .accent-glow': {
                        opacity: 0.15,
                        transform: 'scale(1.2)',
                      },
                    },
                  }}
                >
                  {/* Accent Glow Effect */}
                  <Box
                    className="accent-glow"
                    sx={{
                      position: 'absolute',
                      top: -60,
                      right: -60,
                      width: 180,
                      height: 180,
                      background: `radial-gradient(circle, ${brand.accent} 0%, transparent 70%)`,
                      opacity: 0.08,
                      transition: 'all 0.5s ease',
                      zIndex: 0,
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Bottom accent line */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: '10%',
                      right: '10%',
                      height: '3px',
                      background: `linear-gradient(90deg, transparent, ${alpha(brand.accent, 0.5)}, transparent)`,
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      '.MuiCard-root:hover &': {
                        opacity: 1,
                      },
                    }}
                  />

                  <CardContent
                    sx={{ flexGrow: 1, p: { xs: 3, sm: 3.5 }, zIndex: 1 }}
                  >
                    {/* Logo Container */}
                    <Box
                      className="brand-logo-container"
                      sx={{
                        width: 88,
                        height: 88,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: alpha('#fff', 0.9),
                        borderRadius: '20px',
                        p: 2,
                        mb: 3,
                        border: '1px solid',
                        borderColor: alpha(theme.palette.divider, 0.1),
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        className="brand-logo"
                        component="img"
                        src={brand.logo || '/placeholder.svg'}
                        alt={`${brand.name} logo`}
                        sx={{
                          maxHeight: '100%',
                          maxWidth: '100%',
                          objectFit: 'contain',
                          filter: 'grayscale(100%)',
                          opacity: 0.7,
                          transition: 'all 0.4s ease',
                          transform: `scale(${brand.zoom / 100})`,
                        }}
                      />
                    </Box>

                    {/* Brand Name */}
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                        letterSpacing: '-0.02em',
                        mb: 1.5,
                      }}
                    >
                      {brand.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        lineHeight: 1.75,
                        minHeight: '54px',
                        fontSize: '0.875rem',
                      }}
                    >
                      {brand.description}
                    </Typography>

                    {/* Specialties */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                      {brand.specialties.map((specialty) => (
                        <Chip
                          key={specialty}
                          label={specialty}
                          size="small"
                          sx={{
                            borderRadius: '10px',
                            bgcolor: alpha(brand.accent, 0.06),
                            border: '1px solid',
                            borderColor: alpha(brand.accent, 0.12),
                            color: alpha(brand.accent, 0.9),
                            fontWeight: 600,
                            fontSize: '0.7rem',
                            height: 28,
                            transition: 'all 0.25s ease',
                            '&:hover': {
                              bgcolor: alpha(brand.accent, 0.12),
                              borderColor: alpha(brand.accent, 0.25),
                              transform: 'translateY(-1px)',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  )
}
