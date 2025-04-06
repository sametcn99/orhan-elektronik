import type React from "react"
import {
  fetchSlides,
  fetchReferences,
  fetchFeatures,
  fetchServices,
  fetchFeaturedProjects,
  fetchAbout,
  fetchTestimonials,
  fetchContact,
  fetchSettings,
} from "@/src/lib/fetch-data"
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  Wrench,
  Zap,
  Cpu,
  Lock,
  Building,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { SliderScript } from "@/src/components/slider-script"
import { ContactForm } from "@/src/components/contact-form"

export default async function Home() {
  // Fetch all data in parallel
  const [slides, references, features, services, projects, aboutData, testimonials, contactData, settings] =
    await Promise.all([
      fetchSlides(),
      fetchReferences(),
      fetchFeatures(),
      fetchServices(),
      fetchFeaturedProjects(),
      fetchAbout(),
      fetchTestimonials(),
      fetchContact(),
      fetchSettings(),
    ])

  // Parse features from JSON if it's a string
  let aboutFeatures = aboutData?.features || []
  if (typeof aboutFeatures === "string") {
    try {
      aboutFeatures = JSON.parse(aboutFeatures)
    } catch (e) {
      aboutFeatures = []
    }
  }

  // Parse footer content from JSON if it's a string
  let footerContent = settings?.footer_content || {}
  if (typeof footerContent === "string") {
    try {
      footerContent = JSON.parse(footerContent)
    } catch (e) {
      footerContent = {}
    }
  }

  // Parse social media from JSON if it's a string
  let socialMedia = settings?.social_media || {}
  if (typeof socialMedia === "string") {
    try {
      socialMedia = JSON.parse(socialMedia)
    } catch (e) {
      socialMedia = {}
    }
  }

  // Map icon names to Lucide React components
  const iconMap: Record<string, React.ElementType> = {
    Shield,
    Wrench,
    CheckCircle,
    Zap,
    Clock,
    Star,
    Lock,
    Cpu,
    Building,
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-500 to-sky-400 text-white p-2 rounded-lg">
              <span className="font-bold text-xl">Orhan</span>
            </div>
            <span className="font-medium text-xl text-slate-700">Elektrik Elektronik</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium text-slate-700 hover:text-blue-500 transition-colors">
              Ana Sayfa
            </Link>
            <Link
              href="#references"
              className="text-sm font-medium text-slate-700 hover:text-blue-500 transition-colors"
            >
              Referanslarımız
            </Link>
            <Link href="#services" className="text-sm font-medium text-slate-700 hover:text-blue-500 transition-colors">
              Hizmetlerimiz
            </Link>
            <Link href="#projects" className="text-sm font-medium text-slate-700 hover:text-blue-500 transition-colors">
              Projeler
            </Link>
            <Link href="#about" className="text-sm font-medium text-slate-700 hover:text-blue-500 transition-colors">
              Hakkımızda
            </Link>
            <Link href="#contact" className="text-sm font-medium text-slate-700 hover:text-blue-500 transition-colors">
              İletişim
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${contactData?.phone || "+90 0532 574 93 92"}`}
              className="hidden md:flex items-center gap-2 text-slate-700 hover:text-blue-500 transition-colors"
            >
              <div className="bg-blue-100 p-1.5 rounded-full">
                <Phone className="h-4 w-4 text-blue-500" />
              </div>
              <span className="text-sm font-medium">{contactData?.phone || "+90 0532 574 93 92"}</span>
            </a>
            <Button
              size="sm"
              className="hidden md:inline-flex bg-gradient-to-r from-blue-500 to-sky-400 hover:from-blue-600 hover:to-sky-500 text-white border-none"
            >
              Teklif Al
            </Button>
            <Button variant="outline" size="icon" className="md:hidden border-slate-200">
              <span className="sr-only">Menü</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-slate-700"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-sky-400/80 z-10" />
          <div className="relative overflow-hidden h-[600px] md:h-[700px]">
            <div className="absolute inset-0">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`slide h-full transition-opacity duration-1000 ${index === 0 ? "opacity-100" : "opacity-0"}`}
                  data-index={index}
                >
                  <img
                    src={slide.image_url || "/placeholder.svg"}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="container relative z-20 h-full flex flex-col justify-center">
              <div className="max-w-2xl text-white">
                <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">
                  Profesyonel Hizmet
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {slides[0]?.title || "Profesyonel Elektrik ve Elektronik Çözümleri"}
                </h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  {slides[0]?.description ||
                    "Orhan Elektrik Elektronik olarak, kaliteli hizmet ve müşteri memnuniyeti odaklı çalışmalarımızla yanınızdayız."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 rounded-full">
                    Hizmetlerimizi Keşfedin
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white/10 rounded-full"
                  >
                    Ücretsiz Keşif İsteyin
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === 0 ? "bg-white" : "bg-white/50"}`}
                  data-index={index}
                />
              ))}
            </div>
          </div>
          <SliderScript />
        </section>

        {/* References Section */}
        <section id="references" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-2 bg-blue-100 text-blue-600 hover:bg-blue-200">Referanslarımız</Badge>
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Çalıştığımız Kurumlar</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Yılların deneyimi ve güveniyle birçok kurum ve kuruluşa hizmet vermenin gururunu yaşıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {references.map((reference) => (
                <div
                  key={reference.id}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-100 rounded-full flex items-center justify-center mb-3">
                      {reference.logo_url ? (
                        <img
                          src={reference.logo_url || "/placeholder.svg"}
                          alt={reference.name}
                          className="w-12 h-12 md:w-14 md:h-14 object-contain"
                        />
                      ) : (
                        <Building className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
                      )}
                    </div>
                    <span className="text-center font-medium text-slate-700">{reference.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => {
                const IconComponent = iconMap[feature.icon] || Shield

                return (
                  <Card
                    key={feature.id}
                    className="border-none rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-sky-400"></div>
                    <CardContent className="pt-8 pb-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-10 w-10 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-slate-800">{feature.title}</h3>
                        <p className="text-slate-600">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-2 bg-blue-100 text-blue-600 hover:bg-blue-200">Hizmetlerimiz</Badge>
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Profesyonel Çözümlerimiz</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Orhan Elektrik Elektronik olarak, müşterilerimize en iyi hizmeti sunmak için çalışıyoruz. Elektrik ve
                elektronik alanında geniş hizmet yelpazemizle yanınızdayız.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = iconMap[service.icon] || Zap

                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="h-48 bg-gradient-to-r from-blue-500 to-sky-400 flex items-center justify-center">
                      <IconComponent className="h-20 w-20 text-white opacity-90" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-slate-800">{service.title}</h3>
                      <p className="text-slate-600 mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.details.split(",").map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-600">
                            <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                            <span>{detail.trim()}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-sky-400 hover:from-blue-600 hover:to-sky-500 text-white border-none">
                        Detaylı Bilgi
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-2 bg-blue-100 text-blue-600 hover:bg-blue-200">Projelerimiz</Badge>
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Tamamlanan Projeler</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Başarıyla tamamladığımız projelerimizden bazıları. Kalite ve güvenilirliğimizin kanıtı olan
                çalışmalarımızı inceleyebilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image_url || "/placeholder.svg?height=400&width=600"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <Badge className="mb-2 bg-blue-500/80 text-white hover:bg-blue-600/80">
                          {project.category}
                        </Badge>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    <Button className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-sky-400 hover:from-blue-600 hover:to-sky-500 text-white border-none">
                      Proje Detayları
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button variant="outline" className="rounded-full border-blue-200 text-blue-600 hover:bg-blue-50 px-8">
                Tüm Projeleri Görüntüle
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="py-20 bg-slate-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sky-100 rounded-lg z-0"></div>
                <img
                  src={aboutData?.image_url || "/placeholder.svg?height=600&width=800"}
                  alt="Orhan Elektrik Elektronik Ekibi"
                  className="rounded-xl shadow-lg w-full relative z-10"
                />
              </div>
              <div>
                <Badge className="mb-2 bg-blue-100 text-blue-600 hover:bg-blue-200">Hakkımızda</Badge>
                <h2 className="text-3xl font-bold mb-6 text-slate-800">{aboutData?.title || "Bizi Tanıyın"}</h2>
                <p className="text-slate-600 mb-4">
                  {aboutData?.description ||
                    "Orhan Elektrik Elektronik olarak, müşterilerimize en iyi hizmeti sunmak için çalışıyoruz."}
                </p>

                <div className="space-y-4">
                  {Array.isArray(aboutFeatures) &&
                    aboutFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-800">{feature.title}</h4>
                          <p className="text-sm text-slate-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button className="rounded-full bg-gradient-to-r from-blue-500 to-sky-400 hover:from-blue-600 hover:to-sky-500 text-white border-none">
                    Daha Fazla Bilgi
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="rounded-full border-blue-200 text-blue-600 hover:bg-blue-50">
                    Referanslarımız
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-2 bg-blue-100 text-blue-600 hover:bg-blue-200">Yorumlar</Badge>
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Müşteri Yorumları</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Müşterilerimizin memnuniyeti bizim için en önemli referanstır. İşte bazı müşterilerimizin yorumları.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                  </div>
                  <p className="text-slate-600 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {testimonial.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-sky-400 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Profesyonel Hizmet için Bize Ulaşın</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Elektrik, elektronik ve güvenlik sistemleri konusunda uzman ekibimizle hizmetinizdeyiz. Ücretsiz keşif ve
              fiyat teklifi için hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 rounded-full">
                Teklif Alın
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full">
                <Phone className="mr-2 h-4 w-4" />
                {contactData?.phone || "+90 0532 574 93 92"}
              </Button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-2 bg-blue-100 text-blue-600 hover:bg-blue-200">İletişim</Badge>
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Bize Ulaşın</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Hizmetlerimiz hakkında daha fazla bilgi almak veya bir sorunuz olduğunda bizimle iletişime
                geçebilirsiniz. Size en kısa sürede dönüş yapacağız.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-6 text-slate-800">İletişim Bilgilerimiz</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg text-slate-800">Telefon</h4>
                        <p className="text-slate-600">{contactData?.phone || "+90 0532 574 93 92"}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg text-slate-800">E-posta</h4>
                        <p className="text-slate-600">{contactData?.email || "info@orhanelektrik.com"}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg text-slate-800">Adres</h4>
                        <p className="text-slate-600">
                          {contactData?.address || "Murat Mah. Yavuzevler Sk. 18/C Çankaya/Ankara"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center">
                        <Clock className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg text-slate-800">Çalışma Saatleri</h4>
                        <p className="text-slate-600">
                          {contactData?.working_hours || "Pazartesi - Cumartesi: 09:00 - 18:00"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="rounded-xl overflow-hidden h-[300px] w-full shadow-lg">
                    <img
                      src={contactData?.map_url || "/placeholder.svg?height=300&width=600"}
                      alt="Harita"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-slate-800">Bize Mesaj Gönderin</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 pt-16 pb-8 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-sky-400 p-2 rounded-lg">
                  <span className="font-bold text-xl">Orhan</span>
                </div>
                <span className="font-medium text-xl">Elektrik Elektronik</span>
              </div>
              <p className="text-slate-300 mb-6">
                {footerContent.column1?.content ||
                  "Elektrik, elektronik ve güvenlik sistemleri alanında profesyonel çözümler sunan firmamız, 15 yılı aşkın deneyimiyle müşterilerine kaliteli hizmet sunmaktadır."}
              </p>
              <div className="flex space-x-4 mb-6">
                {socialMedia.facebook && (
                  <a
                    href={socialMedia.facebook}
                    className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                )}
                {socialMedia.instagram && (
                  <a
                    href={socialMedia.instagram}
                    className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                )}
                {socialMedia.twitter && (
                  <a
                    href={socialMedia.twitter}
                    className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                )}
                {socialMedia.linkedin && (
                  <a
                    href={socialMedia.linkedin}
                    className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                )}
              </div>
              <div className="flex items-center gap-3 bg-slate-700/50 p-4 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-300">7/24 Destek Hattı</p>
                  <p className="text-lg font-semibold text-white">{contactData?.phone || "+90 0532 574 93 92"}</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold text-lg mb-4 text-white">
                {footerContent.column2?.title || "Hizmetlerimiz"}
              </h3>
              <ul className="space-y-3">
                {Array.isArray(footerContent.column2?.links) &&
                  footerContent.column2.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-slate-300 hover:text-blue-300 transition-colors flex items-center gap-2"
                      >
                        <ChevronRight className="h-4 w-4 text-blue-400" />
                        <span>{link}</span>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold text-lg mb-4 text-white">
                {footerContent.column3?.title || "Hızlı Bağlantılar"}
              </h3>
              <ul className="space-y-3">
                {Array.isArray(footerContent.column3?.links) &&
                  footerContent.column3.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-slate-300 hover:text-blue-300 transition-colors flex items-center gap-2"
                      >
                        <ChevronRight className="h-4 w-4 text-blue-400" />
                        <span>{link}</span>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h3 className="font-semibold text-lg mb-4 text-white">Bültenimize Abone Olun</h3>
              <p className="text-slate-300 mb-4">
                Kampanyalarımızdan, yeni hizmetlerimizden ve sektördeki gelişmelerden haberdar olmak için bültenimize
                abone olun.
              </p>
              <div className="flex mb-6">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-3 rounded-l-lg text-slate-800 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-blue-500 to-sky-400 hover:from-blue-600 hover:to-sky-500 text-white px-4 rounded-r-lg">
                  Abone Ol
                </button>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Çalışma Saatlerimiz</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-slate-300">Pazartesi - Cuma:</div>
                  <div className="text-white">09:00 - 18:00</div>
                  <div className="text-slate-300">Cumartesi:</div>
                  <div className="text-white">09:00 - 14:00</div>
                  <div className="text-slate-300">Pazar:</div>
                  <div className="text-white">Kapalı</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} Orhan Elektrik Elektronik. Tüm hakları saklıdır.
              </div>
              <div className="flex justify-start md:justify-end gap-4">
                <a href="#" className="text-slate-400 hover:text-blue-300 text-sm">
                  Gizlilik Politikası
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-300 text-sm">
                  Kullanım Şartları
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-300 text-sm">
                  Çerez Politikası
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

