import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export default function GizlilikPolitikasiPage() {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="md">
        <Breadcrumb items={[{ label: 'Gizlilik Politikası' }]} />

        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: 800, letterSpacing: '-0.02em', mb: 2 }}
        >
          Gizlilik Politikası
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 5 }}>
          Son güncelleme: Haziran 2025
        </Typography>

        <Stack spacing={4}>
          <section>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 1.5 }}>
              Veri Sorumlusu
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Orhan Elektrik Elektronik olarak, kişisel verilerinizin korunmasına büyük önem veriyoruz.
              6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu sıfatıyla,
              sizlere ait kişisel verileri aşağıda açıklanan çerçevede işlemekteyiz.
            </Typography>
          </section>

          <Divider />

          <section>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 1.5 }}>
              Toplanan Kişisel Veriler
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 1 }}>
              Hizmetlerimizden faydalanmanız sırasında aşağıdaki kişisel verileriniz toplanabilir:
            </Typography>
            <Box component="ul" sx={{ pl: 2.5, color: 'text.secondary', lineHeight: 2 }}>
              <li>Ad, soyad ve iletişim bilgileri (telefon numarası, e-posta adresi)</li>
              <li>Hizmet talebi ve proje detayları</li>
              <li>Adres ve lokasyon bilgileri</li>
              <li>Web sitesi kullanım verileri (çerezler aracılığıyla)</li>
            </Box>
          </section>

          <Divider />

          <section>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 1.5 }}>
              Veri İşleme Amaçları
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Kişisel verileriniz; hizmet taleplerinizin karşılanması, keşif ve fiyatlandırma süreçlerinin
              yürütülmesi, proje takibi, müşteri memnuniyeti değerlendirmesi ve yasal yükümlülüklerin
              yerine getirilmesi amacıyla işlenmektedir.
            </Typography>
          </section>

          <Divider />

          <section>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 1.5 }}>
              Veri Paylaşımı
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Kişisel verileriniz, açık rızanız olmaksızın üçüncü kişilerle paylaşılmaz.
              Yalnızca yasal yükümlülükler gereği yetkili kamu kurumlarıyla paylaşım yapılabilir.
            </Typography>
          </section>

          <Divider />

          <section>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 1.5 }}>
              Çerezler (Cookies)
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Web sitemiz, kullanıcı deneyimini iyileştirmek ve ziyaretçi trafiğini analiz etmek amacıyla
              yalnızca anonim analitik çerezler kullanmaktadır. Bu çerezler kişisel olarak sizi tanımlamaz.
              Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.
            </Typography>
          </section>

          <Divider />

          <section>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 1.5 }}>
              Veri Güvenliği
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Kişisel verilerinizin güvenliğini sağlamak için uygun teknik ve idari tedbirler alınmaktadır.
              Web sitemiz SSL sertifikası ile korunmakta olup, tüm veri iletimi şifreli olarak gerçekleşmektedir.
            </Typography>
          </section>

          <Divider />

          <section>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 1.5 }}>
              Haklarınız
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 1 }}>
              KVKK kapsamında aşağıdaki haklara sahipsiniz:
            </Typography>
            <Box component="ul" sx={{ pl: 2.5, color: 'text.secondary', lineHeight: 2 }}>
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
              <li>Silinmesini veya yok edilmesini isteme</li>
            </Box>
          </section>

          <Divider />

          <section>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 1.5 }}>
              İletişim
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Gizlilik politikamız hakkında sorularınız için +90 532 574 93 92 numaralı telefondan
              veya Murat Mah. Yavuzevler Sk. 18/C Çankaya/Ankara adresinden bize ulaşabilirsiniz.
            </Typography>
          </section>
        </Stack>
      </Container>
    </Box>
  )
}
