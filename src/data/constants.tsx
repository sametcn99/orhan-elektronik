import {
  Shield as ShieldIcon,
  Build as BuildIcon,
  Security as SecurityIcon,
  AttachMoney as AttachMoneyIcon,
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
  hero: 'hero',
  services: 'services',
  gallery: 'gallery',
  brands: 'brands',
  instagram: 'instagram',
  contact: 'contact',
}

export const services = [
  {
    title: 'Garantili Servis',
    description:
      'Orhan Elektrik Elektronik olarak, müşterilerimize en iyi hizmeti sunmak için çalışıyoruz. Elektrik ve elektronik cihazlarınızın bakım ve onarımı için güvenilir ve hızlı bir servis sunuyoruz.',
    icon: ShieldIcon,
    color: '#06b6d4', // Cyan
  },
  {
    title: 'Bakım ve Tamir Servisi',
    description:
      'Her türlü elektrik ve elektronik cihazınızın bakım ve onarımını gerçekleştiriyoruz. Alanında uzman ekibimizle sorunlarınıza kalıcı çözümler sunuyoruz.',
    icon: BuildIcon,
    color: '#f97316', // Orange
  },
  {
    title: 'Güvenlik Sistemleri',
    description:
      'Ev ve işyerleriniz için profesyonel güvenlik sistemleri kurulumu ve bakımı yapıyoruz. CCTV kamera sistemleri, alarm sistemleri ve daha fazlası.',
    icon: SecurityIcon,
    color: '#10b981', // Emerald
  },
  {
    title: 'Uygun Fiyat',
    description:
      'Kaliteli hizmeti uygun fiyatlarla sunuyoruz. Şeffaf fiyatlandırma politikamızla müşterilerimize her zaman en iyi değeri sunmayı hedefliyoruz.',
    icon: AttachMoneyIcon,
    color: '#a855f7', // Purple
  },
]

export const stats = [
  { value: 15, label: 'Yıllık Tecrübe', suffix: '+', icon: AwardIcon },
  { value: 24, label: 'Saat Destek', suffix: '/7', icon: ClockIcon },
]
