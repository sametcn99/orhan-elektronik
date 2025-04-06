"use client";
import { motion, useInView } from "framer-motion";
import {
  MapPin, 
  Phone,
  Shield, 
  Wrench,
  ShieldCheck,
  Banknote
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import InstagramEmbed2 from "@/components/InstagramEmbed2";
import { Header } from "@/components/Header";

const contactInfo = {
  address: "Murat Mah. Yavuzevler Sk. 18/C Çankaya/Ankara",
  phone: "+90 0532 574 93 92",
  mapIframe: "https://maps.app.goo.gl/3nwdPZaG1ac97vb79",
};

const services = [
  {
    title: "Garantili Servis",
    description:
      "Orhan Elektrik Elektronik olarak, müşterilerimize en iyi hizmeti sunmak için çalışıyoruz. Elektrik ve elektronik cihazlarınızın bakım ve onarımı için güvenilir ve hızlı bir servis sunuyoruz.",
    icon: Shield,
  },
  {
    title: "Bakım ve Tamir Servisi",
    description:
      "Her türlü elektrik ve elektronik cihazınızın bakım ve onarımını gerçekleştiriyoruz. Alanında uzman ekibimizle sorunlarınıza kalıcı çözümler sunuyoruz.",
    icon: Wrench,
  },
  {
    title: "Güvenlik Sistemleri",
    description: 
      "Ev ve işyerleriniz için profesyonel güvenlik sistemleri kurulumu ve bakımı yapıyoruz. CCTV kamera sistemleri, alarm sistemleri ve daha fazlası.",
    icon: ShieldCheck,
  },
  {
    title: "Uygun Fiyat",
    description:
      "Kaliteli hizmeti uygun fiyatlarla sunuyoruz. Şeffaf fiyatlandırma politikamızla müşterilerimize her zaman en iyi değeri sunmayı hedefliyoruz.",
    icon: Banknote,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function AnimatedSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto min-h-screen pt-16">
        {/* Hero Section */}
        <AnimatedSection id="ana-sayfa" className="flex min-h-screen items-center justify-center overflow-hidden">
          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <motion.h1 
              className="mb-6 text-4xl font-bold text-blue-900 sm:text-5xl md:text-6xl"
              variants={fadeInUp}
            >
              Orhan Elektrik Elektronik <br />
              <span className="text-blue-600">
                Bilgi Ve Bilişim Teknolojileri
              </span>
            </motion.h1>
            <motion.ul 
              className="mb-8 space-y-2 text-xl text-blue-800 sm:text-2xl"
              variants={staggerChildren}
            >
              <motion.li 
                className="flex items-center justify-center"
                variants={fadeInUp}
              >
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                Elektrik Altyapı Yönetimi
              </motion.li>
              <motion.li 
                className="flex items-center justify-center"
                variants={fadeInUp}
              >
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                Güvenlik Sistemleri
              </motion.li>
              <motion.li 
                className="flex items-center justify-center"
                variants={fadeInUp}
              >
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                Teknik Servis
              </motion.li>
            </motion.ul>
            <motion.div 
              className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
              variants={fadeInUp}
            >
              <Link
                href="tel:+9005325749392"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 transition-colors hover:text-blue-800"
              >
                <Phone className="mr-2 h-5 w-5" />
                {contactInfo.phone}
              </Link>
              <Link
                href="https://maps.app.goo.gl/3nwdPZaG1ac97vb79"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-start gap-2 text-blue-600 transition-colors hover:text-blue-800"
              >
                <MapPin className=" h-5 w-5" />
                Murat Mah. Yavuzevler Sk. 18/C <br />
                Çankaya/Ankara
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="#hizmetlerimiz">
                <Button 
                  size="lg" 
                  className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
                >
                  Hizmetlerimizi Keşfedin
                </Button>
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection
          id="hizmetlerimiz"
          className="flex min-h-screen flex-col items-center justify-center px-4 py-16 md:px-8"
        >
          <motion.h2 
            className="mb-8 text-center text-3xl font-bold"
            variants={fadeInUp}
          >
            Hizmetlerimiz
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
            variants={staggerChildren}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="h-full">
                <Card className="h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="mb-4 flex items-center">
                      <service.icon className="mr-3 h-8 w-8 text-blue-600" />
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 flex-grow">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        <AnimatedSection
          id="instagram"
          className="flex min-h-screen items-center justify-center py-16 max-w-2xl mx-auto"
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="mb-8 text-center text-3xl font-bold"
              variants={fadeInUp}
            >
              Instagram&apos;da bizi takip edin!
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <InstagramEmbed2 />
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="iletisim" className="flex min-h-screen items-center justify-center py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="mb-12 text-center text-3xl font-bold text-gray-800"
              variants={fadeInUp}
            >
              İletişim Bilgilerimiz
            </motion.h2>
            <motion.div 
              className="flex flex-col items-start justify-between gap-8 md:flex-row"
              variants={staggerChildren}
            >
              <motion.div 
                className="w-full space-y-6 md:w-1/2"
                variants={fadeInUp}
              >
                <div className="flex items-start">
                  <Phone className="mr-4 mt-1 h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Telefon</h3>
                    <p className="text-gray-600">
                      <Link
                        href={`tel:${contactInfo.phone}`}
                        className="transition-colors hover:text-blue-600"
                      >
                        {contactInfo.phone}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-4 mt-1 h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Adres</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="h-[400px] w-full overflow-hidden rounded-lg shadow-lg md:w-1/2"
                variants={fadeInUp}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.7723054887706!2d32.8763315!3d39.9017299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fc758f2a919%3A0xc6a7ef7aaf2af164!2sOrhan%20Elektrik%20Bilgisayar!5e0!3m2!1sen!2str!4v1735736228372!5m2!1sen!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection className="px-4 py-8 text-center md:px-8">
          <p>
            &copy; 2024 Orhan Elektrik Elektronik Bilgi Ve Bilişim Teknolojileri.
            Tüm hakları saklıdır.
          </p>
        </AnimatedSection>
      </div>
    </>
  );
}
