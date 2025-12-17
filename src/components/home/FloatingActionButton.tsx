'use client'

import React from 'react'
import { Box, Fab, Zoom, useScrollTrigger } from '@mui/material'
import { Phone as PhoneIcon } from '@mui/icons-material'
import { contactInfo } from '../../data/constants'

export function FloatingActionButton() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 100,
        }}
      >
        <Fab
          color="primary"
          aria-label="call"
          href={`tel:${contactInfo.phone}`}
          size="large"
        >
          <PhoneIcon />
        </Fab>
      </Box>
    </Zoom>
  )
}
