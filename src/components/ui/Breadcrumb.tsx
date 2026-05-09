'use client'

import {
  ChevronRight as ChevronRightIcon,
  Home as HomeIcon,
} from '@mui/icons-material'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import NextLink from 'next/link'

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <Breadcrumbs
      separator={<ChevronRightIcon sx={{ fontSize: 16, mx: -0.5 }} />}
      sx={{
        mb: 3,
        '& .MuiBreadcrumbs-ol': {
          flexWrap: 'wrap',
        },
        '& .MuiBreadcrumbs-li a': {
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
        },
      }}
    >
      <Link
        component={NextLink}
        href="/"
        underline="hover"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          color: 'text.secondary',
          fontSize: '0.8125rem',
          '&:hover': { color: 'primary.main' },
          transition: 'color 0.2s',
        }}
      >
        <HomeIcon sx={{ fontSize: 16 }} />
        Ana Sayfa
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        if (isLast) {
          return (
            <Typography
              key={item.label}
              sx={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              {item.label}
            </Typography>
          )
        }
        return (
          <Link
            key={item.label}
            component={NextLink}
            href={item.href ?? '#'}
            underline="hover"
            sx={{
              color: 'text.secondary',
              fontSize: '0.8125rem',
              '&:hover': { color: 'primary.main' },
              transition: 'color 0.2s',
            }}
          >
            {item.label}
          </Link>
        )
      })}
    </Breadcrumbs>
  )
}
