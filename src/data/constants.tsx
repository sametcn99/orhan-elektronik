import {
  Shield as ShieldIcon,
  Build as BuildIcon,
  Security as SecurityIcon,
  AttachMoney as AttachMoneyIcon,
  EmojiEvents as AwardIcon,
  AccessTime as ClockIcon,
  Home as HomeIcon,
  SatelliteAlt as SatelliteIcon,
  Lightbulb as LightbulbIcon,
  EnergySavingsLeaf as EnergyLeafIcon,
  Doorbell as DoorbellIcon,
  ElectricalServices as ElectricalIcon,
  Cable as CableIcon,
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
      'Orhan Elektrik Elektronik olarak tüm marka ve modellerde arıza tespiti, kalıcı onarım ve orijinal yedek parça kullanımıyla garanti kapsamında güvenilir bir servis deneyimi sunuyoruz. Süreci şeffaf yönetiyor, teslim sonrası performans testleri ile cihazlarınızı güvenle kullanmanızı sağlıyoruz.',
    icon: ShieldIcon,
    color: '#06b6d4', // Cyan
  },
  {
    title: 'Bakım ve Tamir Servisi',
    description:
      'Planlı bakım programlarıyla olası arızaları oluşmadan yakalıyor, kart seviyesinde onarım, komponent değişimi ve sahada devreye alma desteğiyle sistemlerinizin kesintisiz çalışmasını sağlıyoruz. Endüstriyel tesislerden konut projelerine kadar uzman ekibimizle hizmet veriyoruz.',
    icon: BuildIcon,
    color: '#f97316', // Orange
  },
  {
    title: 'Güvenlik Sistemleri',
    description:
      'Hikvision ve Tiandy gibi lider markalarla yüksek çözünürlüklü IP CCTV, akıllı video analitik, plaka tanıma, termal kamera ve alarm entegrasyon çözümleri kuruyoruz. Projelendirme, montaj, ağ optimizasyonu ve uzaktan izleme altyapısını uçtan uca yönetiyoruz.',
    icon: SecurityIcon,
    color: '#10b981', // Emerald
  },
  {
    title: 'Akıllı Bina Otomasyonu (KNX)',
    description:
      'KNX standartlarında merkezi kontrol, aydınlatma senaryoları, ısıtma-soğutma optimizasyonu, perde-panjur otomasyonu ve enerji izleme çözümleriyle konforu artırırken tüketimi düşürüyoruz. Otel, ofis ve konut projelerinde uçtan uca devreye alma ve eğitim veriyoruz.',
    icon: HomeIcon,
    color: '#0ea5e9', // Sky
  },
  {
    title: 'Uydu ve IPTV Çözümleri',
    description:
      'Next & Nextstar altyapısıyla merkezi uydu sistemleri, IPTV dağıtımı, CATV ve SMATV projelendirmesi yapıyor; çoklu çıkış, sinyal dengeleme ve bina içi kablolama düzeniyle kesintisiz yayın sağlıyoruz. Otel, site ve kurumsal yapılara ölçeklenebilir çözümler kuruyoruz.',
    icon: SatelliteIcon,
    color: '#eab308', // Amber
  },
  {
    title: 'Anahtar-Priz ve Aydınlatma',
    description:
      'Panasonic ve Viko serileriyle estetik, güvenli ve yönetmeliklere uygun anahtar-priz çözümleri sunuyor; akıllı dimmer, hareket sensörü ve acil aydınlatma entegrasyonlarıyla yaşam alanlarını modernize ediyoruz. Keşif, montaj ve devreye alma süreçlerini tamamlıyoruz.',
    icon: LightbulbIcon,
    color: '#fb7185', // Rose
  },
  {
    title: 'Enerji Verimliliği ve Danışmanlık',
    description:
      'Enerji tüketim analizi, harmonik ölçümleri, kompanzasyon optimizasyonu ve tasarruf senaryoları ile işletme maliyetlerini düşürüyoruz. Panel revizyonu, güç kalite iyileştirmesi ve raporlama hizmetleriyle sürdürülebilir bir altyapı kurmanıza yardımcı oluyoruz.',
    icon: EnergyLeafIcon,
    color: '#22c55e', // Green
  },
  {
    title: 'İnterkom ve Diafon Sistemleri',
    description:
      'Audio marka görüntülü ve sesli diafon sistemleri, apartman interkomları, kapı zili çözümleri ve geçiş kontrol entegrasyonları kuruyoruz. Bina girişlerinden daire içi haberleşmeye kadar güvenli ve modern çözümler sunuyoruz.',
    icon: DoorbellIcon,
    color: '#ef4444', // Red
  },
  {
    title: 'Elektrik Panoları ve Şalt Sistemleri',
    description:
      'Mutlusan ürünleriyle endüstriyel ve konut tipi elektrik panoları, sigorta kutuları, şalt malzemeleri ve dağıtım sistemleri kurulumu yapıyoruz. Proje bazlı özel pano tasarımı ve montaj hizmeti veriyoruz.',
    icon: ElectricalIcon,
    color: '#6366f1', // Indigo
  },
  {
    title: 'Yapısal Kablolama ve Altyapı',
    description:
      'Netelsan kablo sistemleriyle profesyonel veri kablolaması, Cat6/Cat7 ağ altyapısı, fiber optik hatlar ve yapısal kablolama projeleri gerçekleştiriyoruz. Ofis, fabrika ve kurumsal binalarda uçtan uca altyapı çözümleri sunuyoruz.',
    icon: CableIcon,
    color: '#14b8a6', // Teal
  },
]

export const stats = [
  { value: 15, label: 'Yıllık Tecrübe', suffix: '+', icon: AwardIcon },
  { value: 24, label: 'Saat Destek', suffix: '/7', icon: ClockIcon },
]
