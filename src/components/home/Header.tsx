'use client'

import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  Menu as MenuIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Container,
  Drawer,
  Grow,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { contactInfo, HEADER_HEIGHT, sectionIds } from '../../data/constants'
import { services } from '../../data/services'
import { useUmami } from '../../hooks/useUmami'

const dropdownNavItems = [
  { label: 'Markalar', href: `/#${sectionIds.brands}` },
  { label: 'Galeri', href: `/#${sectionIds.gallery}` },
  { label: 'İletişim', href: `/#${sectionIds.contact}` },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const servicesOpen = Boolean(anchorEl)
  const theme = useTheme()
  const { track } = useUmami()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleServicesOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleServicesClose = () => {
    setAnchorEl(null)
  }

  const drawer = (
    <Box
      sx={{
        height: '100%',
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
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
          flexShrink: 0,
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
            alt="Orhan Elektrik Elektronik Logo"
            width={36}
            height={36}
            style={{ borderRadius: '10px' }}
          />
        </Box>
        <Stack spacing={-0.2}>
          <Typography
            variant="h6"
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

      <Box
        onClick={handleDrawerToggle}
        sx={{
          flex: 1,
          overflowY: 'auto',
          textAlign: 'center',
        }}
      >
        <List sx={{ pt: 2, pb: 0 }}>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href="/"
              sx={{ textAlign: 'center', py: 2 }}
            >
              <ListItemText
                primary="Ana Sayfa"
                slotProps={{
                  primary: { sx: { fontWeight: 600 }, color: 'text.primary' },
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={(e) => {
                e.stopPropagation()
                setMobileServicesOpen((prev) => !prev)
              }}
              sx={{ textAlign: 'center', py: 2 }}
            >
              <ListItemText
                primary="Hizmetlerimiz"
                slotProps={{
                  primary: { sx: { fontWeight: 600 }, color: 'text.primary' },
                }}
              />
              {mobileServicesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
          </ListItem>

          <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
            <List sx={{ py: 0 }}>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href="/hizmetler"
                  sx={{
                    textAlign: 'center',
                    py: 1.5,
                    color: 'primary.main',
                  }}
                >
                  <ListItemText
                    primary="Tüm Hizmetleri Gör"
                    slotProps={{
                      primary: {
                        sx: { fontWeight: 700, fontSize: '0.85rem' },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              {services.map((service) => (
                <ListItem key={service.slug} disablePadding>
                  <ListItemButton
                    component={Link}
                    href={`/hizmetler/${service.slug}`}
                    sx={{ textAlign: 'center', py: 1.2 }}
                  >
                    <ListItemText
                      primary={service.title}
                      slotProps={{
                        primary: {
                          sx: { fontSize: '0.875rem' },
                          color: 'text.primary',
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>

          {[
            { label: 'Markalar', href: `/#${sectionIds.brands}` },
            { label: 'Galeri', href: `/#${sectionIds.gallery}` },
            { label: 'İletişim', href: `/#${sectionIds.contact}` },
          ].map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                sx={{ textAlign: 'center', py: 2 }}
              >
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: { sx: { fontWeight: 600 }, color: 'text.primary' },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box
        sx={{
          p: 2,
          borderTop: '1px solid',
          borderColor: 'divider',
          flexShrink: 0,
        }}
      >
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
      </Box>
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
            spacing={1}
            component={Link}
            href={`/#${sectionIds.hero}`}
            sx={{
              alignItems: 'center',
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
                alt="Orhan Elektrik Elektronik Logo"
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
            <Button
              component={Link}
              href="/"
              variant="text"
              sx={{
                color: 'text.secondary',
                fontWeight: 600,
                px: 2,
                '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
              }}
            >
              Ana Sayfa
            </Button>

            <Box
              sx={{ position: 'relative' }}
              onMouseEnter={handleServicesOpen}
              onMouseLeave={handleServicesClose}
            >
              <Button
                component={Link}
                href="/hizmetler"
                endIcon={
                  <ExpandMoreIcon
                    sx={{
                      transition: 'transform 0.2s',
                      transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)',
                    }}
                  />
                }
                variant="text"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 600,
                  px: 2,
                  '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                }}
              >
                Hizmetlerimiz
              </Button>
              <Popper
                open={servicesOpen}
                anchorEl={anchorEl}
                transition
                placement="bottom-start"
                sx={{ zIndex: 1300 }}
              >
                {({ TransitionProps }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: 'top left' }}
                  >
                    <Paper
                      elevation={4}
                      sx={{
                        mt: 1,
                        minWidth: 240,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                      }}
                    >
                      <List sx={{ py: 1 }}>
                        <ListItemButton
                          component={Link}
                          href="/hizmetler"
                          onClick={handleServicesClose}
                          sx={{
                            py: 1.2,
                            px: 2.5,
                            borderBottom: '1px solid',
                            borderColor: 'divider',
                          }}
                        >
                          <ListItemText
                            primary="Tüm Hizmetleri Gör"
                            slotProps={{
                              primary: {
                                sx: { fontWeight: 700, fontSize: '0.85rem' },
                                color: 'primary.main',
                              },
                            }}
                          />
                        </ListItemButton>
                        {services.map((service) => (
                          <ListItemButton
                            key={service.slug}
                            component={Link}
                            href={`/hizmetler/${service.slug}`}
                            onClick={handleServicesClose}
                            sx={{ py: 1, px: 2.5 }}
                          >
                            <ListItemText
                              primary={service.title}
                              slotProps={{
                                primary: {
                                  sx: { fontSize: '0.85rem' },
                                  color: 'text.primary',
                                },
                              }}
                            />
                          </ListItemButton>
                        ))}
                      </List>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Box>

            {dropdownNavItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
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
