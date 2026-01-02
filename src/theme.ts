'use client'
import { createTheme } from '@mui/material/styles'
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#0891b2', // Cyan 600 - slightly darker/richer than 500
      light: '#67e8f9',
      dark: '#0e7490',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#64748b', // Slate 500 - more neutral secondary
      light: '#94a3b8',
      dark: '#475569',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc', // Slate 50
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a', // Slate 900
      secondary: '#475569', // Slate 600
    },
  },
  shape: {
    borderRadius: 12, // Slightly more rounded
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          boxShadow: 'none',
          padding: '10px 24px',
          '&:hover': {
            boxShadow:
              '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow:
              '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          },
        },
        sizeLarge: {
          padding: '12px 28px',
          fontSize: '1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow:
            '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          backgroundImage: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow:
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: '#0891b2',
          fontWeight: 500,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            color: '#0e7490',
            textDecoration: 'underline',
            textDecorationColor: '#0e7490',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: 'none',
          transition: 'all 0.2s ease-in-out',
        },
      },
    },
  },
})

export default theme
