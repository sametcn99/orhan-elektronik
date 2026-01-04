import type { SvgIconComponent } from '@mui/icons-material'
import {
  EmojiEvents as AwardIcon,
  AccessTime as ClockIcon,
} from '@mui/icons-material'

export const contactInfo = {
  address: 'Murat Mah. Yavuzevler Sk. 18/C Çankaya/Ankara',
  phone: '+90 532 574 93 92',
  mapIframe: 'https://maps.app.goo.gl/3nwdPZaG1ac97vb79',
}

export const HEADER_HEIGHT = 72

export type SectionIds = {
  hero: string
  services: string
  gallery: string
  brands: string
  instagram: string
  contact: string
}

export const sectionIds: SectionIds = {
  hero: 'ana-sayfa',
  services: 'hizmetlerimiz',
  gallery: 'galeri',
  brands: 'markalar',
  instagram: 'instagram',
  contact: 'iletisim',
}

export type SubService = {
  title: string
  description: string
  outcomes: string[]
}

export type Service = {
  slug: string
  title: string
  description: string
  summary?: string
  icon: SvgIconComponent
  color: string
  highlights: string[]
  subServices: SubService[]
}

export const stats = [
  { value: 15, label: 'Yıllık Tecrübe', suffix: '+', icon: AwardIcon },
  { value: 24, label: 'Saat Destek', suffix: '/7', icon: ClockIcon },
]
