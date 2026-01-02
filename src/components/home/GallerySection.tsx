'use client'

import { useState, useRef, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  IconButton,
  Modal,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Image from 'next/image'
import { SectionHeader } from '../ui/SectionHeader'
import { SectionBackground } from '../ui/SectionBackground'
import CloseIcon from '@mui/icons-material/Close'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const images = Array.from({ length: 86 }, (_, i) => `/gallery/${i + 1}.jpg`)

export const GallerySection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef({ x: 0, y: 0 })

  // Determine how many images to show in the preview grid (e.g., 8)
  const displayCount = 8
  const visibleImages = images.slice(0, displayCount)
  const remainingCount = images.length - displayCount

  // Reset zoom on slide change
  useEffect(() => {
    setZoomLevel(1)
    setPanPosition({ x: 0, y: 0 })
  }, [selectedIndex])

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setSelectedIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openModal = (index: number) => {
    setSelectedIndex(index)
    setModalOpen(true)
    setZoomLevel(1)
    setPanPosition({ x: 0, y: 0 })
  }

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation()
    setZoomLevel((prev) => Math.min(prev + 0.5, 4))
  }

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation()
    setZoomLevel((prev) => Math.max(prev - 0.5, 1))
  }

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      setZoomLevel((prev) => Math.min(prev + 0.2, 4))
    } else {
      setZoomLevel((prev) => Math.max(prev - 0.2, 1))
    }
  }

  // Pan logic for modal
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true)
      dragStartRef.current = {
        x: e.clientX - panPosition.x,
        y: e.clientY - panPosition.y,
      }
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPanPosition({
        x: e.clientX - dragStartRef.current.x,
        y: e.clientY - dragStartRef.current.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <Box
      component="section"
      id="gallery"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <SectionBackground variant="alternate" />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          overline="GALERİ"
          title="Projelerimizden Kareler"
          description="Tamamladığımız projelerden ve çalışma alanlarımızdan seçkiler. Kaliteyi detaylarda keşfedin."
        />

        {/* Grid of Thumbnails */}
        <Grid container spacing={3}>
          {visibleImages.map((img, index) => {
            const isLast = index === displayCount - 1
            return (
              <Grid
                key={index}
                size={{ xs: 6, sm: 4, md: 3 }}
                sx={{
                  height: { xs: 180, md: 280 },
                  cursor: 'pointer',
                }}
                onClick={() => openModal(index)}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px -15px rgba(0,0,0,0.2)',
                      '& .overlay': {
                        opacity: 1,
                      },
                      '& .bg-image': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Image
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="bg-image"
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                    }}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />

                  {/* Hover Overlay with Zoom Icon */}
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      bgcolor: 'rgba(0,0,0,0.3)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ZoomInIcon
                      sx={{ color: 'white', fontSize: 40, opacity: 0.8 }}
                    />
                  </Box>

                  {isLast && remainingCount > 0 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        bgcolor: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2,
                        transition: 'background-color 0.3s',
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{ color: 'white', fontWeight: 800 }}
                      >
                        +{remainingCount}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="grey.300"
                        fontWeight={500}
                      >
                        Daha Fazla
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Container>

      {/* Full Screen Zoom Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'rgba(0,0,0,0.96)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
            position: 'relative',
            outline: 'none',
            overflow: 'hidden',
          }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onWheel={handleWheel}
        >
          {/* Controls */}
          <Box
            sx={{
              position: 'fixed',
              top: 24,
              right: 24,
              zIndex: 20,
              display: 'flex',
              gap: 2,
              bgcolor: 'rgba(255,255,255,0.1)',
              p: 1.5,
              borderRadius: 50,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <IconButton
              onClick={handleZoomOut}
              sx={{
                color: 'white',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
              }}
            >
              <ZoomOutIcon />
            </IconButton>
            <IconButton
              onClick={handleZoomIn}
              sx={{
                color: 'white',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
              }}
            >
              <ZoomInIcon />
            </IconButton>
            <IconButton
              onClick={() => setModalOpen(false)}
              sx={{
                color: 'white',
                bgcolor: 'rgba(255,255,255,0.1)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <IconButton
            onClick={(e) => handlePrev(e)}
            sx={{
              position: 'fixed',
              left: 24,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              width: 56,
              height: 56,
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.2)',
                transform: 'translateY(-50%) scale(1.1)',
              },
              transition: 'all 0.2s',
              zIndex: 10,
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={(e) => handleNext(e)}
            sx={{
              position: 'fixed',
              right: 24,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              width: 56,
              height: 56,
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.2)',
                transform: 'translateY(-50%) scale(1.1)',
              },
              transition: 'all 0.2s',
              zIndex: 10,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {/* Image Container */}
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor:
                zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
              pb: { xs: 10, md: 12 },
            }}
            onMouseDown={handleMouseDown}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transition: isDragging ? 'none' : 'transform 0.2s',
                transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={images[selectedIndex]}
                alt="Full screen"
                style={{
                  maxWidth: '90%',
                  maxHeight: '90%',
                  objectFit: 'contain',
                  userSelect: 'none',
                  pointerEvents: 'none',
                  boxShadow: '0 0 50px rgba(0,0,0,0.5)',
                }}
              />
            </Box>
          </Box>

          {/* Bottom Thumbnails */}
          <Box
            sx={{
              position: 'fixed',
              bottom: 24,
              left: '50%',
              transform: 'translateX(-50%)',
              maxWidth: '90%',
              bgcolor: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              p: 1.5,
              borderRadius: 4,
              overflowX: 'auto',
              zIndex: 10,
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
            onWheel={(e) => {
              e.stopPropagation()
              if (e.currentTarget) {
                e.currentTarget.scrollLeft += e.deltaY
              }
            }}
          >
            {images.map((img, index) => (
              <Box
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  openModal(index)
                }}
                sx={{
                  flexShrink: 0,
                  width: { xs: 50, md: 70 },
                  height: { xs: 50, md: 70 },
                  position: 'relative',
                  cursor: 'pointer',
                  borderRadius: 1,
                  overflow: 'hidden',
                  border: '2px solid',
                  borderColor:
                    selectedIndex === index ? 'primary.main' : 'transparent',
                  opacity: selectedIndex === index ? 1 : 0.6,
                  transition: 'all 0.2s',
                  '&:hover': {
                    opacity: 1,
                    transform: 'scale(1.1)',
                    zIndex: 2,
                  },
                }}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  sizes="100px"
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}
