'use client'

import React, { useState } from 'react'
import {
  Box,
  Typography,
  Button,
  Container,
  IconButton,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  Stack,
} from '@mui/material'
import {
  Phone as PhoneIcon,
  Bolt as BoltIcon,
  Menu as MenuIcon,
} from '@mui/icons-material'
import { sectionIds, contactInfo } from '../../data/constants'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navItems = [
    { label: 'Ana Sayfa', href: '#' + sectionIds.hero },
    { label: 'Markalar', href: '#' + sectionIds.brands },
    { label: 'Hizmetlerimiz', href: '#' + sectionIds.services },
    { label: 'Galeri', href: '#' + sectionIds.gallery },
    { label: 'İletişim', href: '#' + sectionIds.contact },
  ]

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        height: '100%',
        bgcolor: 'background.default',
      }}
    >
      <Box
        sx={{
          py: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <BoltIcon sx={{ color: 'primary.main', fontSize: 28 }} />
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          Orhan Elektrik
        </Typography>
      </Box>
      <List sx={{ pt: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component="a"
              href={item.href}
              sx={{ textAlign: 'center', py: 2 }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ mt: 2, px: 2 }}>
          <Button
            fullWidth
            variant="contained"
            href={`tel:${contactInfo.phone}`}
            startIcon={<PhoneIcon />}
            sx={{ py: 1.5, borderRadius: 2 }}
          >
            Hemen Ara
          </Button>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ justifyContent: 'space-between', height: 72 }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            component="a"
            href={'#' + sectionIds.hero}
            sx={{ textDecoration: 'none', color: 'text.primary' }}
          >
            <Box
              sx={{
                bgcolor: 'primary.main',
                borderRadius: '12px',
                p: 0.8,
                display: 'flex',
                boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)',
              }}
            >
              <BoltIcon sx={{ color: 'white', fontSize: 24 }} />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontWeight: 800,
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              Orhan Elektrik
            </Typography>
          </Stack>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                variant="text"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 600,
                  px: 2,
                  '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              href={`tel:${contactInfo.phone}`}
              startIcon={<PhoneIcon />}
              sx={{ ml: 2, borderRadius: '50px', px: 3 }}
            >
              Hemen Ara
            </Button>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: 'text.primary' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
        }}
        anchor="right"
      >
        {drawer}
      </Drawer>
    </AppBar>
  )
}
