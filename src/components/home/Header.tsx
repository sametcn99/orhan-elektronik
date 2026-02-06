'use client'

import { Menu as MenuIcon, Phone as PhoneIcon } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import { contactInfo, HEADER_HEIGHT, sectionIds } from '../../data/constants'
import { useUmami } from '../../hooks/useUmami'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const { track } = useUmami()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navItems = [
    { label: 'Ana Sayfa', href: `/#${sectionIds.hero}` },
    { label: 'Hizmetlerimiz', href: `/#${sectionIds.services}` },
    { label: 'Markalar', href: `/#${sectionIds.brands}` },
    { label: 'Galeri', href: `/#${sectionIds.gallery}` },
    { label: 'İletişim', href: `/#${sectionIds.contact}` },
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
        <Box
          sx={{
            borderRadius: '14px',
            p: 0.5,
            display: 'flex',
            boxShadow: `0 2px 12px ${theme.palette.primary.main}30`,
          }}
        >
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={36}
            height={36}
            style={{ borderRadius: '10px' }}
          />
        </Box>
        <Stack spacing={-0.2}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 900,
              fontSize: '1.1rem',
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ORHAN
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'primary.main',
              lineHeight: 1.1,
            }}
          >
            ELEKTRİK
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 600,
              fontSize: '0.55rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'text.secondary',
              lineHeight: 1,
            }}
          >
            ELEKTRONİK
          </Typography>
        </Stack>
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
            onClick={() => track('call_click', { location: 'header_drawer' })}
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
          sx={{ justifyContent: 'space-between', height: HEADER_HEIGHT }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            component="a"
            href={`/#${sectionIds.hero}`}
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              '&:hover': {
                '& .logo-icon': {
                  transform: 'scale(1.05)',
                  boxShadow: `0 4px 20px ${theme.palette.primary.main}40`,
                },
              },
            }}
          >
            <Box
              className="logo-icon"
              sx={{
                borderRadius: '14px',
                p: 0.5,
                display: 'flex',
                boxShadow: `0 2px 12px ${theme.palette.primary.main}30`,
                transition: 'all 0.3s ease',
              }}
            >
              <Image
                src="/favicon.ico"
                alt="Logo"
                width={36}
                height={36}
                style={{ borderRadius: '10px' }}
              />
            </Box>
            <Stack spacing={-0.2}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  fontWeight: 900,
                  fontSize: '1.1rem',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.2,
                  background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                ORHAN
              </Typography>
              <Typography
                variant="caption"
                noWrap
                component="div"
                sx={{
                  fontWeight: 700,
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'primary.main',
                  lineHeight: 1.1,
                }}
              >
                ELEKTRİK
              </Typography>
              <Typography
                variant="caption"
                noWrap
                component="div"
                sx={{
                  fontWeight: 600,
                  fontSize: '0.55rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'text.secondary',
                  lineHeight: 1,
                }}
              >
                ELEKTRONİK
              </Typography>
            </Stack>
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
              onClick={() =>
                track('call_click', { location: 'header_desktop' })
              }
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
