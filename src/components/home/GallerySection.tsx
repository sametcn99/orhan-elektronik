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
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Galeri
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}
          >
            Tamamladığımız projelerden ve çalışma alanlarımızdan seçkiler.
          </Typography>
        </Box>

        {/* Grid of Thumbnails */}
        <Grid container spacing={2}>
          {visibleImages.map((img, index) => {
            const isLast = index === displayCount - 1
            return (
              <Grid
                key={index}
                size={{ xs: 6, sm: 4, md: 3 }} // Adjust responsiveness here
                sx={{
                  height: { xs: 150, md: 250 },
                  cursor: 'pointer',
                }}
                onClick={() => openModal(index)}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: 2,
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      transition: 'transform 0.3s ease',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Image
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  {isLast && remainingCount > 0 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        bgcolor: 'rgba(0,0,0,0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.3s',
                        '&:hover': {
                          bgcolor: 'rgba(0,0,0,0.7)',
                        },
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{ color: 'white', fontWeight: 'bold' }}
                      >
                        +{remainingCount}
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
          bgcolor: 'rgba(0,0,0,0.95)',
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
              top: 20,
              right: 20,
              zIndex: 10,
              display: 'flex',
              gap: 2,
              bgcolor: 'rgba(0,0,0,0.5)',
              p: 1,
              borderRadius: 4,
              backdropFilter: 'blur(4px)',
            }}
          >
            <IconButton onClick={handleZoomOut} sx={{ color: 'white' }}>
              <ZoomOutIcon />
            </IconButton>
            <IconButton onClick={handleZoomIn} sx={{ color: 'white' }}>
              <ZoomInIcon />
            </IconButton>
            <IconButton
              onClick={() => setModalOpen(false)}
              sx={{ color: 'white' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <IconButton
            onClick={(e) => handlePrev(e)}
            sx={{
              position: 'fixed',
              left: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.3)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' },
              zIndex: 10,
            }}
          >
            <ArrowBackIosNewIcon fontSize="large" />
          </IconButton>
          <IconButton
            onClick={(e) => handleNext(e)}
            sx={{
              position: 'fixed',
              right: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.3)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' },
              zIndex: 10,
            }}
          >
            <ArrowForwardIosIcon fontSize="large" />
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
              pb: { xs: 8, md: 10 },
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
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              />
            </Box>
          </Box>

          {/* Bottom Thumbnails */}
          <Box
            sx={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              height: { xs: 80, md: 100 },
              bgcolor: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              p: 2,
              overflowX: 'auto',
              zIndex: 10,
              '&::-webkit-scrollbar': {
                height: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderRadius: '3px',
              },
              overflowY: 'hidden',
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
                  width: { xs: 60, md: 100 },
                  height: { xs: 45, md: 75 },
                  position: 'relative',
                  cursor: 'pointer',
                  borderRadius: 1,
                  border:
                    selectedIndex === index
                      ? `2px solid ${theme.palette.primary.main}`
                      : '2px solid transparent',
                  opacity: selectedIndex === index ? 1 : 0.5,
                  transition: 'all 0.2s',
                  '&:hover': {
                    opacity: 1,
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  style={{
                    objectFit: 'cover',
                    borderRadius: 4,
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
