import { Service } from './constants'
import {
  Shield as ShieldIcon,
  Build as BuildIcon,
  Security as SecurityIcon,
  Home as HomeIcon,
  SatelliteAlt as SatelliteIcon,
  Lightbulb as LightbulbIcon,
  EnergySavingsLeaf as EnergyLeafIcon,
  Doorbell as DoorbellIcon,
  ElectricalServices as ElectricalIcon,
  Cable as CableIcon,
} from '@mui/icons-material'

export const services: Service[] = [
  {
    slug: 'garantili-servis',
    title: 'Garantili Servis',
    description:
      'Orhan Elektrik Elektronik olarak tüm marka ve modellerde arıza tespiti, kalıcı onarım ve orijinal yedek parça kullanımıyla garanti kapsamında güvenilir bir servis deneyimi sunuyoruz. Süreci şeffaf yönetiyor, teslim sonrası performans testleri ile cihazlarınızı güvenle kullanmanızı sağlıyoruz.',
    summary:
      'Arıza tespitten teslim sonrası testlere kadar şeffaf, belgeli ve garanti kapsamında servis.',
    icon: ShieldIcon,
    color: '#06b6d4',
    highlights: [
      'Orijinal yedek parça ve üretici standartları',
      'Saha ve atölye içi test raporları',
      'Hızlı parça temini ve geçici çözüm planları',
    ],
    subServices: [
      {
        title: 'Arıza Tespiti ve Raporlama',
        description:
          'Cihaz ve sistemlerinizi detaylı testlerle analiz ediyor, ölçüm sonuçlarını raporluyoruz.',
        outcomes: [
          'Kapsamlı arıza kök neden analizi',
          'Fotoğraflı ve ölçümlü servis raporu',
          'Düzeltici aksiyon planı ve tahmini süre',
        ],
      },
      {
        title: 'Garanti Kapsamlı Onarım',
        description:
          'Üretici önerilerine uygun parça değişimi, kalibrasyon ve fonksiyon testleri yapıyoruz.',
        outcomes: [
          'Orijinal yedek parça kullanımı',
          'Fonksiyon ve güvenlik test protokolleri',
          'Teslim sonrası 3-6 ay ek hizmet garantisi',
        ],
      },
      {
        title: 'Yerinde Destek ve Devreye Alma',
        description:
          'Saha ekibimizle yerinde müdahale, geçici çözüm ve devreye alma süreçlerini yönetiyoruz.',
        outcomes: [
          'Minimum kesinti ile devreye alma',
          'Yedekleme ve geçici çözüm senaryoları',
          'Kullanıcı eğitimi ve teslim tutanağı',
        ],
      },
    ],
  },
  {
    slug: 'bakim-ve-tamir',
    title: 'Bakım ve Tamir Servisi',
    description:
      'Planlı bakım programlarıyla olası arızaları oluşmadan yakalıyor, kart seviyesinde onarım, komponent değişimi ve sahada devreye alma desteğiyle sistemlerinizin kesintisiz çalışmasını sağlıyoruz. Endüstriyel tesislerden konut projelerine kadar uzman ekibimizle hizmet veriyoruz.',
    summary:
      'Proaktif bakım, kart seviyesinde onarım ve 7/24 müdahale ile süreklilik.',
    icon: BuildIcon,
    color: '#f97316',
    highlights: [
      'Planlı bakım takvimi ve SLA takibi',
      'Kart bazlı lehim/komponent değişimi',
      'Termal kamera ve ölçüm cihazlarıyla kontrol',
    ],
    subServices: [
      {
        title: 'Önleyici Bakım Programı',
        description:
          'Periyodik kontrol, temizleme ve kalibrasyon ile arızaların önüne geçiyoruz.',
        outcomes: [
          'Bakım takvimi ve takip raporları',
          'Isı, gürültü ve titreşim ölçümleri',
          'Sarj, bağlantı ve izolasyon kontrolleri',
        ],
      },
      {
        title: 'Kart ve Komponent Onarımı',
        description:
          'PCB seviyesinde arıza tespiti, komponent değişimi ve yeniden test süreçleri.',
        outcomes: [
          'BGA/SMD komponent değişimi',
          'Elektriksel güvenlik ve fonksiyon testi',
          'Yazılım güncelleme ve kalibrasyon',
        ],
      },
      {
        title: 'Saha Müdahale ve Devreye Alma',
        description:
          'Yerinde arıza çözümü, geçici by-pass ve kalıcı devreye alma desteği.',
        outcomes: [
          '7/24 acil müdahale hattı',
          'Kesintisiz çalışma için yedekleme',
          'Kullanıcı teslim eğitimi',
        ],
      },
    ],
  },
  {
    slug: 'guvenlik-sistemleri',
    title: 'Güvenlik Sistemleri',
    description:
      'Hikvision ve Tiandy gibi lider markalarla yüksek çözünürlüklü IP CCTV, akıllı video analitik, plaka tanıma, termal kamera ve alarm entegrasyon çözümleri kuruyoruz. Projelendirme, montaj, ağ optimizasyonu ve uzaktan izleme altyapısını uçtan uca yönetiyoruz.',
    summary:
      'IP CCTV, alarm entegrasyonu ve akıllı video analitik ile uçtan uca güvenlik.',
    icon: SecurityIcon,
    color: '#10b981',
    highlights: [
      '4K IP kamera ve NVR mimarileri',
      'Plaka tanıma ve termal görüntüleme',
      'Merkezi izleme ve uzaktan erişim',
    ],
    subServices: [
      {
        title: 'Projelendirme ve Ağ Tasarımı',
        description:
          'IP kamera yerleşimi, PoE altyapı ve bant genişliği planlaması ile net görüntü ve stabil sistemler.',
        outcomes: [
          'Görüş açısı ve lux analiz raporu',
          'Switch, PoE ve UPS kapasite hesabı',
          'Güvenli uzaktan erişim mimarisi',
        ],
      },
      {
        title: 'Kurulum ve Entegrasyon',
        description:
          'Montaj, kablolama, alarm ve geçiş kontrol entegrasyonlarını tek noktadan yürütüyoruz.',
        outcomes: [
          'Alarm, yangın ve kartlı geçiş entegrasyonu',
          'Mobil izleme ve bildirim ayarları',
          'Ağ güvenliği ve kullanıcı yetkilendirme',
        ],
      },
      {
        title: 'Analitik ve Operasyon',
        description:
          'VCA, plaka tanıma, yüz doğrulama ve olay bazlı senaryolarla güvenliği otomatikleştiriyoruz.',
        outcomes: [
          'Akıllı alarm senaryoları',
          'Depolama süresi optimizasyonu',
          'Kullanıcı eğitimleri ve prosedür seti',
        ],
      },
    ],
  },
  {
    slug: 'akilli-bina-otomasyonu-knx',
    title: 'Akıllı Bina Otomasyonu (KNX)',
    description:
      'KNX standartlarında merkezi kontrol, aydınlatma senaryoları, ısıtma-soğutma optimizasyonu, perde-panjur otomasyonu ve enerji izleme çözümleriyle konforu artırırken tüketimi düşürüyoruz. Otel, ofis ve konut projelerinde uçtan uca devreye alma ve eğitim veriyoruz.',
    summary:
      'KNX tabanlı akıllı bina otomasyonu ile konfor, güvenlik ve enerji tasarrufu.',
    icon: HomeIcon,
    color: '#0ea5e9',
    highlights: [
      'Merkezi ve mobil kontrol senaryoları',
      'Aydınlatma, HVAC ve perde otomasyonu',
      'Enerji izleme ve raporlama',
    ],
    subServices: [
      {
        title: 'Senaryo Tasarımı',
        description:
          'Mekana uygun aydınlatma, iklimlendirme ve güvenlik senaryolarını kurguluyoruz.',
        outcomes: [
          'Zamanlayıcılar ve tetikleyiciler',
          'Konfor ve enerji dengesi için profiller',
          'Mobil uygulama ve duvar paneli entegrasyonu',
        ],
      },
      {
        title: 'Cihaz ve Hat Planlama',
        description:
          'KNX hat topolojisi, cihaz adresleme ve güç hesaplarını yapıyoruz.',
        outcomes: [
          'Güç ve bus hat dengesi',
          'Yedek hat ve uzaktan erişim senaryosu',
          'Standartlara uygun kablolama planı',
        ],
      },
      {
        title: 'Devreye Alma ve Eğitim',
        description:
          'ETS programlama, fonksiyon testleri ve kullanıcı eğitimlerini tamamlıyoruz.',
        outcomes: [
          'Detaylı fonksiyon test raporu',
          'Kullanıcı ve işletme eğitimi',
          'Dokümantasyon ve yedekleme dosyaları',
        ],
      },
    ],
  },
  {
    slug: 'uydu-ve-iptv',
    title: 'Uydu ve IPTV Çözümleri',
    description:
      'Next & Nextstar altyapısıyla merkezi uydu sistemleri, IPTV dağıtımı, CATV ve SMATV projelendirmesi yapıyor; çoklu çıkış, sinyal dengeleme ve bina içi kablolama düzeniyle kesintisiz yayın sağlıyoruz. Otel, site ve kurumsal yapılara ölçeklenebilir çözümler kuruyoruz.',
    summary:
      'Merkezi uydu, IPTV ve SMATV altyapılarıyla yüksek kaliteli yayın sürekliliği.',
    icon: SatelliteIcon,
    color: '#eab308',
    highlights: [
      'Headend ve dağıtım katı tasarımı',
      'Sinyal dengeleme ve parazit kontrolü',
      'Otel ve site için çoklu çıkış planı',
    ],
    subServices: [
      {
        title: 'Altyapı Tasarımı',
        description:
          'Çatı anten yerleşimi, headend seçimi ve kablolama rotalarını planlıyoruz.',
        outcomes: [
          'Sinyal seviye ve SNR hesapları',
          'Koaksiyel ve fiber dağıtım planı',
          'Yedekli uydu alıcı senaryosu',
        ],
      },
      {
        title: 'Kurulum ve Dengeleme',
        description:
          'LNB, multiswitch, splitter ve amplifikatör ayarlarını testlerle optimize ediyoruz.',
        outcomes: [
          'MER/BER ölçüm raporları',
          'Kanal planı ve numaralandırma',
          'Parazit ve geri besleme önlemleri',
        ],
      },
      {
        title: 'IPTV ve Oda Entegrasyonu',
        description:
          'IPTV sunucu, STB kurulumları ve oda/daire entegrasyonlarını yapıyoruz.',
        outcomes: [
          'Oda bazlı yetkilendirme',
          'Otel PMS entegrasyonu opsiyonu',
          'Merkezi yönetim ve uzaktan destek',
        ],
      },
    ],
  },
  {
    slug: 'anahtar-priz-ve-aydinlatma',
    title: 'Anahtar-Priz ve Aydınlatma',
    description:
      'Panasonic ve Viko serileriyle estetik, güvenli ve yönetmeliklere uygun anahtar-priz çözümleri sunuyor; akıllı dimmer, hareket sensörü ve acil aydınlatma entegrasyonlarıyla yaşam alanlarını modernize ediyoruz. Keşif, montaj ve devreye alma süreçlerini tamamlıyoruz.',
    summary:
      'Estetik ve güvenli anahtar-priz çözümleri, akıllı dimmer ve acil aydınlatma entegrasyonu.',
    icon: LightbulbIcon,
    color: '#fb7185',
    highlights: [
      'Standart ve akıllı seri kombinasyonları',
      'Acil ve yönlendirme aydınlatması',
      'Keşif ve devreye alma süreci',
    ],
    subServices: [
      {
        title: 'Keşif ve Seçim Danışmanlığı',
        description:
          'Mekana ve konsepte uygun seri, renk ve mekanizma seçiminde destek oluyoruz.',
        outcomes: [
          'Uyumlu seri ve renk paleti listesi',
          'Güvenlik ve yönetmelik kontrolü',
          'Aksesuar ve çerçeve kombinasyonları',
        ],
      },
      {
        title: 'Montaj ve Konfigürasyon',
        description:
          'Anahtar-priz montajı, dimmer ve sensör ayarları ile devre tanımlamalarını yapıyoruz.',
        outcomes: [
          'Düzgün hat sonlandırma ve topraklama',
          'Dimer, sensör ve buton ayarları',
          'Acil aydınlatma devre testleri',
        ],
      },
      {
        title: 'Akıllı Aydınlatma Entegrasyonu',
        description:
          'KNX ve bağımsız akıllı çözümlerle sahneler, zamanlayıcılar ve uzaktan kontrol kuruyoruz.',
        outcomes: [
          'Senaryo ve sahne ayarları',
          'Mobil uygulama veya KNX bağlantısı',
          'Enerji optimizasyon önerileri',
        ],
      },
    ],
  },
  {
    slug: 'enerji-verimliligi-danismanlik',
    title: 'Enerji Verimliliği ve Danışmanlık',
    description:
      'Enerji tüketim analizi, harmonik ölçümleri, kompanzasyon optimizasyonu ve tasarruf senaryoları ile işletme maliyetlerini düşürüyoruz. Panel revizyonu, güç kalite iyileştirmesi ve raporlama hizmetleriyle sürdürülebilir bir altyapı kurmanıza yardımcı oluyoruz.',
    summary:
      'Güç kalitesi ölçümü, kompanzasyon ve tasarruf senaryolarıyla işletme maliyetlerini düşürme.',
    icon: EnergyLeafIcon,
    color: '#22c55e',
    highlights: [
      'Harmonik ve güç kalite ölçümleri',
      'Kompanzasyon ve reaktif ceza önleme',
      'Tasarruf senaryoları ve raporlama',
    ],
    subServices: [
      {
        title: 'Enerji Analizi ve Ölçüm',
        description:
          'Portatif ölçüm cihazlarıyla tüketim, harmonik ve güç faktörü değerlerini çıkarıyoruz.',
        outcomes: [
          '7-14 günlük ölçüm raporları',
          'Harmonik spektrum ve THD analizi',
          'Reaktif ceza risk değerlendirmesi',
        ],
      },
      {
        title: 'Kompanzasyon ve İyileştirme',
        description:
          'Kompanzasyon panosu optimizasyonu, filtreli kondansatör seçimi ve ayarlarını yapıyoruz.',
        outcomes: [
          'Kapasite ve kademelendirme önerisi',
          'Filtreli/filtersiz kompanzasyon planı',
          'Uzaktan izleme entegrasyonu',
        ],
      },
      {
        title: 'Tasarruf Senaryoları',
        description:
          'Tüketim alışkanlıklarına göre operasyonel ve teknolojik tasarruf senaryoları oluşturuyoruz.',
        outcomes: [
          'LED, otomasyon ve zamanlama önerileri',
          'ROI hesabı ve geri ödeme süresi',
          'Periyodik raporlama şablonları',
        ],
      },
    ],
  },
  {
    slug: 'interkom-ve-diafon',
    title: 'İnterkom ve Diafon Sistemleri',
    description:
      'Audio marka görüntülü ve sesli diafon sistemleri, apartman interkomları, kapı zili çözümleri ve geçiş kontrol entegrasyonları kuruyoruz. Bina girişlerinden daire içi haberleşmeye kadar güvenli ve modern çözümler sunuyoruz.',
    summary:
      'Görüntülü diafon, geçiş kontrol ve apartman interkom çözümleriyle güvenli iletişim.',
    icon: DoorbellIcon,
    color: '#ef4444',
    highlights: [
      'IP ve analog diafon seçenekleri',
      'Geçiş kontrol entegrasyonu',
      'Mobil uygulama ve kayıt özellikleri',
    ],
    subServices: [
      {
        title: 'Sistem Seçimi ve Planlama',
        description:
          'Bina tipine uygun IP/analog sistem, panel ve iç ünite seçimini planlıyoruz.',
        outcomes: [
          'Panel ve daire içi ünite yerleşimi',
          'Kablo rotası ve besleme planı',
          'Acil durum ve çağrı senaryoları',
        ],
      },
      {
        title: 'Kurulum ve Entegrasyon',
        description:
          'Montaj, adresleme, kartlı geçiş ve otomatik kapı entegrasyonlarını tamamlıyoruz.',
        outcomes: [
          'RFID, pin pad ve mobil anahtar desteği',
          'Kamera ve kayıt entegrasyonu',
          'Uzaktan destek ve kullanıcı eğitimi',
        ],
      },
      {
        title: 'Bakım ve Destek',
        description:
          'Periyodik testler, yazılım güncellemeleri ve arıza durumunda hızlı müdahale.',
        outcomes: [
          'Yazılım/firmware güncel tutma',
          'Arıza sonrası hızlı yedek parça',
          'Yıllık bakım sözleşmesi opsiyonu',
        ],
      },
    ],
  },
  {
    slug: 'elektrik-panolar-ve-salt',
    title: 'Elektrik Panoları ve Şalt Sistemleri',
    description:
      'Mutlusan ürünleriyle endüstriyel ve konut tipi elektrik panoları, sigorta kutuları, şalt malzemeleri ve dağıtım sistemleri kurulumu yapıyoruz. Proje bazlı özel pano tasarımı ve montaj hizmeti veriyoruz.',
    summary: 'Dağıtım panoları, şalt ekipmanları ve proje bazlı pano tasarımı.',
    icon: ElectricalIcon,
    color: '#6366f1',
    highlights: [
      'TS ve IEC standartlarına uygun tasarım',
      'Kademeli koruma ve seçicilik',
      'Termal ve kısa devre analizleri',
    ],
    subServices: [
      {
        title: 'Pano Tasarımı',
        description:
          'Yük hesapları, kısa devre ve seçicilik analizleriyle uygun pano mimarisi oluşturuyoruz.',
        outcomes: [
          'Tek hat ve kablo listesi',
          'Koruma cihazı ve kablo kesiti seçimi',
          'Isı ve havalandırma kontrolleri',
        ],
      },
      {
        title: 'Montaj ve Devreye Alma',
        description:
          'Pano içi kablolama, etiketleme, fonksiyon testleri ve ölçümleri yapıyoruz.',
        outcomes: [
          'Termal kamera ile sıcaklık kontrolü',
          'Topraklama ve kaçak akım testleri',
          'Etiketleme ve dokümantasyon',
        ],
      },
      {
        title: 'Revizyon ve Geliştirme',
        description:
          'Mevcut panolarda kapasite artırımı, şalt yenileme ve uzaktan izleme ekliyoruz.',
        outcomes: [
          'Yeni kademeli koruma tasarımı',
          'SCADA/uzaktan izleme opsiyonu',
          'Standartlara uyum raporu',
        ],
      },
    ],
  },
  {
    slug: 'yapisal-kablolama-ve-altyapi',
    title: 'Yapısal Kablolama ve Altyapı',
    description:
      'Netelsan kablo sistemleriyle profesyonel veri kablolaması, Cat6/Cat7 ağ altyapısı, fiber optik hatlar ve yapısal kablolama projeleri gerçekleştiriyoruz. Ofis, fabrika ve kurumsal binalarda uçtan uca altyapı çözümleri sunuyoruz.',
    summary:
      'Cat6/Cat7, fiber ve veri rafı çözümleriyle ölçeklenebilir ağ altyapıları.',
    icon: CableIcon,
    color: '#14b8a6',
    highlights: [
      'Cat6/Cat7 ve fiber hat planı',
      'Raf, patch panel ve etiketleme',
      'Test raporları ve sertifikasyon',
    ],
    subServices: [
      {
        title: 'Proje ve Hat Tasarımı',
        description:
          'Veri, telefon ve güvenlik sistemleri için kablo rotaları ve kapasite planlıyoruz.',
        outcomes: [
          'Raf ve patch panel yerleşimi',
          'Fiber omurga ve dağıtım planı',
          'Etiketleme ve numaralandırma şeması',
        ],
      },
      {
        title: 'Kurulum ve Sonlandırma',
        description:
          'Bakır ve fiber kabloları standarda uygun sonlandırıp test ediyoruz.',
        outcomes: [
          'Fluke sertifikasyon testleri',
          'Patch panel ve priz sonlandırmaları',
          'Kablo yönetimi ve tray düzeni',
        ],
      },
      {
        title: 'Devreye Alma ve Dokümantasyon',
        description:
          'Aktif cihazlar, VLAN planı ve test raporlarıyla teslimat yapıyoruz.',
        outcomes: [
          'IP planı ve VLAN şablonu',
          'Topoloji ve bağlantı diyagramı',
          'Bakım ve kapasite artırımı önerisi',
        ],
      },
    ],
  },
]
