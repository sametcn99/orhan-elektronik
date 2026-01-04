export type BrandSolution = {
  title: string
  description: string
  highlights: string[]
}

export type Brand = {
  slug: string
  name: string
  description: string
  logo: string
  specialties: string[]
  accent: string
  zoom: number
  story: string
  strengths: string[]
  solutions: BrandSolution[]
}

export const brands: Brand[] = [
  {
    slug: 'hikvision',
    name: 'Hikvision',
    logo: '/brands/hikvision.png',
    description:
      'Gelişmiş video gözetim teknolojileri ve güvenli yaşam çözümleri konusunda dünya lideri.',
    specialties: ['Kamera Sistemleri', 'Güvenlik', 'Yapay Zeka'],
    accent: '#e51c23',
    zoom: 160,
    story:
      'IP CCTV, akıllı video analitiği ve termal görüntüleme çözümlerinde dünya standartlarını belirleyen Hikvision, geniş ürün gamı ve entegrasyon seçenekleriyle kurumsal güvenlik ihtiyaçlarına cevap verir.',
    strengths: [
      '4K ve termal IP kamera seçenekleri',
      'Akıllı analitik (VCA) ve plaka tanıma',
      'NVR/DVR çözümleri ve mobil izleme',
    ],
    solutions: [
      {
        title: 'IP CCTV ve Analitik',
        description:
          '4K IP kamera, video analiz, yüz ve plaka tanıma senaryoları ile uçtan uca güvenlik.',
        highlights: [
          '4K ve low-light performansı',
          'Mobil ve web izleme',
          'Akıllı olay bildirimleri',
        ],
      },
      {
        title: 'Termal ve Perimeter Güvenlik',
        description:
          'Termal kameralar, PTZ ve çevre güvenlik sensörleri ile kritik alan koruması.',
        highlights: [
          'Termal görüntüleme',
          'Çevre çizgisi ve bölge ihlali',
          'Uzaktan alarm entegrasyonu',
        ],
      },
      {
        title: 'Depolama ve Erişim',
        description:
          'NVR, NAS ve hibrit kayıt çözümleri ile uzun süreli, güvenli kayıt mimarileri.',
        highlights: [
          'RAID seçenekleri',
          'Ağ ve güvenlik sertifikaları',
          'Yedek kayıt senaryoları',
        ],
      },
    ],
  },
  {
    slug: 'knx',
    name: 'KNX',
    logo: '/brands/knx.png',
    description:
      'Akıllı ev ve bina otomasyonu için dünya standardı. Konforlu ve enerji verimli yaşam alanları.',
    specialties: ['Akıllı Ev', 'Otomasyon', 'Enerji Tasarrufu'],
    accent: '#00a651',
    zoom: 100,
    story:
      'Dünya çapında kabul görmüş KNX standardı ile aydınlatma, HVAC, perde/panjur, enerji izleme ve güvenlik sistemlerini tek bus hattı üzerinden yönetiyoruz.',
    strengths: [
      'Marka bağımsız ekosistem',
      'Merkezi ve mobil kontrol',
      'Enerji optimizasyonu ve raporlama',
    ],
    solutions: [
      {
        title: 'Aydınlatma ve Senaryolar',
        description:
          'Dimmable, RGBW ve sahne tabanlı aydınlatma senaryoları ile konfor ve tasarruf.',
        highlights: [
          'Sahne ve zamanlayıcı',
          'Hareket/presence sensörleri',
          'DALI/DMX entegrasyonu',
        ],
      },
      {
        title: 'HVAC ve Enerji',
        description:
          'Isıtma-soğutma, fan coil, yerden ısıtma kontrolü ve enerji izleme panelleri.',
        highlights: [
          'Oda bazlı setpoint kontrol',
          'Enerji tüketim takibi',
          'Uzaktan izleme',
        ],
      },
      {
        title: 'Perde/Panjur ve Güvenlik',
        description:
          'Panjur, perde ve jaluzileri sahnelere dahil ediyor, alarm ve güvenlik ile senkronluyoruz.',
        highlights: [
          'Rüzgar/güneş sensörleri',
          'Merkezi/oda bazlı kontrol',
          'Alarm senaryoları',
        ],
      },
    ],
  },
  {
    slug: 'next-nextstar',
    name: 'Next & Nextstar',
    logo: '/brands/next-nextstar.png',
    description:
      "Uydu sistemleri ve tüketici elektroniğinde Türkiye'nin öncü markası ile kesintisiz yayın keyfi.",
    specialties: ['Uydu Sistemleri', 'Görüntü Ses', 'Elektronik'],
    accent: '#ff6b00',
    zoom: 100,
    story:
      'Merkezi uydu, IPTV ve SMATV sistemlerinde Next & Nextstar çözümleri ile otel, site ve kurumsal yapılara kesintisiz yayın altyapısı kuruyoruz.',
    strengths: [
      'Headend ve multiswitch çözümleri',
      'Sinyal dengeleme ve dağıtım',
      'IPTV ve oda entegrasyonu',
    ],
    solutions: [
      {
        title: 'Merkezi Uydu ve SMATV',
        description:
          'Çatı anten, LNB, multiswitch ve dağıtım katı tasarımı ile net sinyal kalitesi.',
        highlights: [
          'MER/BER ölçüm raporu',
          'Kanal planlama',
          'Amplifikatör dengeleme',
        ],
      },
      {
        title: 'IPTV Dağıtımı',
        description:
          'IPTV headend, STB ve ağ altyapısı ile yüksek kalite, çoklu oda yayını.',
        highlights: [
          'VLAN ve QoS planı',
          'Otel PMS entegrasyonu',
          'Uzaktan yönetim',
        ],
      },
      {
        title: 'Oda İçi Çözümler',
        description:
          'Priz, TV bağlantıları ve duvar terminalleri ile temiz oda içi kurulum.',
        highlights: [
          'Estetik kaplama seçenekleri',
          'Etiketleme ve numaralandırma',
          'Kanal listesi teslimi',
        ],
      },
    ],
  },
  {
    slug: 'panasonic',
    name: 'Panasonic',
    logo: '/brands/panasonic.png',
    description:
      'Yüksek kaliteli elektrik anahtar ve priz serileri ile yaşam alanlarınıza şıklık ve güvenlik katar.',
    specialties: ['Anahtar-Priz', 'Aydınlatma', 'Elektronik'],
    accent: '#0068b7',
    zoom: 180,
    story:
      'Panasonic anahtar-priz ve aksesuar serileriyle, tasarım ve güvenliği birleştirerek konut ve ticari projelere premium bir dokunuş katıyoruz.',
    strengths: [
      'Geniş seri ve renk seçenekleri',
      'Güvenli mekanizma ve malzeme',
      'Akıllı kontrol aksesuarları',
    ],
    solutions: [
      {
        title: 'Seri Seçimi ve Kombin',
        description:
          'Mekana uygun seri, renk ve çerçeve kombinasyonlarıyla bütünsel tasarım.',
        highlights: [
          'Mat/parlak yüzeyler',
          'Çift renk ve dokular',
          'Aksesuar çeşitliliği',
        ],
      },
      {
        title: 'Montaj ve Etiketleme',
        description:
          'Yönetmeliklere uygun montaj, etiketleme ve devre ayrımları.',
        highlights: [
          'Topraklama ve izolasyon',
          'Düzgün kablo sonlandırma',
          'Devre numaralandırma',
        ],
      },
      {
        title: 'Akıllı Aksesuarlar',
        description: 'Dimer, hareket sensörü ve USB priz entegrasyonları.',
        highlights: [
          'Dimer uyumluluk kontrolü',
          'Sensör ayarları',
          'Şarj ve veri bağlantıları',
        ],
      },
    ],
  },
  {
    slug: 'tiandy',
    name: 'Tiandy',
    logo: '/brands/tiandy.png',
    description:
      'Yüksek çözünürlüklü güvenlik kameraları ve profesyonel izleme çözümleri ile tam koruma.',
    specialties: ['IP Kamera', 'Gece Görüş', 'Güvenlik Çözümleri'],
    accent: '#c41e3a',
    zoom: 140,
    story:
      'Tiandy IP kamera ve NVR çözümleri ile düşük ışıkta yüksek performans, akıllı analitik ve kurumsal güvenlik altyapıları kuruyoruz.',
    strengths: [
      'Starlight düşük ışık teknolojisi',
      'Akıllı analitik ve alarm',
      'Kurumsal NVR ve depolama',
    ],
    solutions: [
      {
        title: 'IP Kamera Projelendirme',
        description:
          'Bina içi/dışı, düşük ışık ve PTZ ihtiyaçlarına göre kamera seçimi ve yerleşim.',
        highlights: [
          'Starlight ve IR seçenekleri',
          'PTZ ve zoom senaryoları',
          'IP66/IK10 koruma',
        ],
      },
      {
        title: 'Kayıt ve Depolama',
        description:
          'NVR kapasite planı, disk seçimi ve yedekli kayıt senaryoları.',
        highlights: [
          'RAID konfigürasyonları',
          'Uzun süreli kayıt',
          'Mobil ve masaüstü istemci',
        ],
      },
      {
        title: 'Analitik ve Alarm',
        description:
          'Yapay zeka destekli analitik ve alarm otomasyonları ile olay bazlı güvenlik.',
        highlights: [
          'Çizgi/bölge ihlali',
          'Yüz ve plaka tanıma',
          'Akıllı bildirimler',
        ],
      },
    ],
  },
  {
    slug: 'viko',
    name: 'Viko',
    logo: '/brands/viko.png',
    description:
      "Türkiye'nin lider elektrik malzemeleri üreticisi. Kaliteli, dayanıklı ve şık anahtar-priz çözümleri.",
    specialties: ['Elektrik Altyapı', 'Şalt Grubu', 'Anahtar-Priz'],
    accent: '#e4002b',
    zoom: 100,
    story:
      'Viko ürün gamı ile konut ve ticari projelerde ekonomik, dayanıklı ve güvenli çözümler sunuyoruz.',
    strengths: [
      'Ekonomik ve yaygın ürün gamı',
      'Dayanıklı malzeme ve mekanizma',
      'Şalt ve aksesuar çeşitliliği',
    ],
    solutions: [
      {
        title: 'Standart ve Modüler Seriler',
        description:
          'Proje bütçesine uygun seri seçimi, modüler çözümler ve aksesuar desteği.',
        highlights: [
          'Renk ve çerçeve seçenekleri',
          'Modüler yapılar',
          'Uygun fiyat/performans',
        ],
      },
      {
        title: 'Şalt ve Koruma',
        description:
          'Sigorta, kaçak akım rölesi ve aksesuarlarıyla güvenli altyapı kurulumu.',
        highlights: [
          'Standart uyum testleri',
          'Etiketleme ve devre ayrımı',
          'Stok ve yedek parça erişimi',
        ],
      },
      {
        title: 'Aydınlatma ve Kontrol',
        description: 'Anahtar, dimmer ve sensör çözümleri ile pratik kullanım.',
        highlights: [
          'Dimer uyumluluk',
          'Sensör ayarları',
          'Basit bakım süreçleri',
        ],
      },
    ],
  },
  {
    slug: 'audio',
    name: 'Audio',
    logo: '/brands/audio.png',
    description:
      "Türkiye'nin köklü interkom ve kapı sistemleri markası. Görüntülü diafon, ses sistemleri ve geçiş kontrol çözümleri.",
    specialties: ['İnterkom', 'Diafon', 'Kapı Sistemleri'],
    accent: '#1a237e',
    zoom: 120,
    story:
      'Audio interkom ve diafon çözümleri ile apartman, site ve ofisler için güvenli ve kesintisiz iletişim altyapısı kuruyoruz.',
    strengths: [
      'IP ve analog sistem alternatifleri',
      'Geçiş kontrol entegrasyonu',
      'Çeşitli panel ve iç ünite seçenekleri',
    ],
    solutions: [
      {
        title: 'Apartman ve Site Çözümleri',
        description:
          'Çok daireli yapılara uygun panel, iç ünite ve kablolama mimarisi.',
        highlights: [
          'Adresleme ve numaralandırma',
          'Audio kapı panelleri',
          'Yedek güç seçenekleri',
        ],
      },
      {
        title: 'IP Interkom',
        description:
          'IP tabanlı interkom ile mobil bildirim, uzaktan cevaplama ve kayıt özellikleri.',
        highlights: [
          'Mobil uygulama entegrasyonu',
          'Kayıt ve ekran görüntüsü',
          'Kapı açma senaryoları',
        ],
      },
      {
        title: 'Geçiş Kontrol Entegrasyonu',
        description: 'Kartlı/şifreli geçiş ve kapı otomatiği entegrasyonları.',
        highlights: [
          'RFID/pin pad seçenekleri',
          'Kapı/turnike entegrasyonu',
          'Alarm senaryoları',
        ],
      },
    ],
  },
  {
    slug: 'mutlusan',
    name: 'Mutlusan',
    logo: '/brands/mutlusan.png',
    description:
      'Elektrik dağıtım ve aydınlatma sektöründe güvenilir çözümler sunan Türk markası. Pano, sigorta ve şalt ürünleri.',
    specialties: ['Elektrik Panoları', 'Şalt Malzemeleri', 'Aydınlatma'],
    accent: '#f57c00',
    zoom: 140,
    story:
      'Mutlusan pano, şalt ve aydınlatma ürünleriyle endüstriyel ve konut projelerinde güvenli dağıtım çözümleri kuruyoruz.',
    strengths: [
      'Şalt ve pano ürün gamı',
      'TS ve IEC uyumlu çözümler',
      'Yedek parça erişimi',
    ],
    solutions: [
      {
        title: 'Pano ve Sigorta Kutuları',
        description:
          'Konut ve ticari projeler için pano, sigorta kutusu ve aksesuar seçimleri.',
        highlights: [
          'IP koruma sınıfları',
          'Modüler yapı',
          'Geniş aksesuar çeşitliliği',
        ],
      },
      {
        title: 'Şalt Ürünleri',
        description:
          'Sigorta, kaçak akım rölesi ve kontaktör gibi ürünlerle güvenli devre yapısı.',
        highlights: [
          'Seçicilik ve koordinasyon',
          'Etiketleme',
          'Bakım kolaylığı',
        ],
      },
      {
        title: 'Aydınlatma ve Aksesuar',
        description:
          'Ray spot, panel ve temel aydınlatma ürünleriyle tamamlayıcı çözümler.',
        highlights: [
          'Enerji verimli seçenekler',
          'Basit montaj',
          'Uygun bütçe',
        ],
      },
    ],
  },
  {
    slug: 'netelsan',
    name: 'Netelsan',
    logo: '/brands/netelsan.png',
    description:
      'Profesyonel kablo ve iletişim altyapısı çözümleri. Veri kabloları, fiber optik ve yapısal kablolama sistemleri.',
    specialties: ['Kablo Sistemleri', 'Fiber Optik', 'Yapısal Kablolama'],
    accent: '#00695c',
    zoom: 130,
    story:
      'Netelsan bakır ve fiber kablo ürünleriyle yapısal kablolama projelerinde yüksek performans ve sertifikalı altyapılar kuruyoruz.',
    strengths: [
      'Cat6/Cat7 bakır kablolar',
      'Fiber patch ve pig-tail çözümleri',
      'Sertifikasyon ve test desteği',
    ],
    solutions: [
      {
        title: 'Bakır Kablolama',
        description:
          'Cat6/Cat7 kablolar, patch paneller ve prizlerle veri altyapısı kuruyoruz.',
        highlights: [
          'Fluke test uyumu',
          'Renk kodlu patch paneller',
          'Düşük kayıp değerleri',
        ],
      },
      {
        title: 'Fiber Optik Altyapı',
        description:
          'Fiber omurga, patch panel ve pig-tail sonlandırmaları ile yüksek hız.',
        highlights: [
          'Fusion splicing',
          'OTDR/LOP testleri',
          'Fiber tray ve patch yönetimi',
        ],
      },
      {
        title: 'Raf ve Etiketleme',
        description:
          '19” rack, kablo yönetimi ve etiketleme ile düzenli altyapı teslimatı.',
        highlights: [
          'Numaralandırma şeması',
          'Kablo yönetim aparatları',
          'Teslim dokümantasyonu',
        ],
      },
    ],
  },
]
