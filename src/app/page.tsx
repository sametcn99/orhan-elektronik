"use client";
import {
  easeOut,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Banknote,
  Clock,
  MapPin,
  Menu,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const InstagramEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.InstagramEmbed),
  { ssr: false },
);

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
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Bakım ve Tamir Servisi",
    description:
      "Her türlü elektrik ve elektronik cihazınızın bakım ve onarımını gerçekleştiriyoruz. Alanında uzman ekibimizle sorunlarınıza kalıcı çözümler sunuyoruz.",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Güvenlik Sistemleri",
    description:
      "Ev ve işyerleriniz için profesyonel güvenlik sistemleri kurulumu ve bakımı yapıyoruz. CCTV kamera sistemleri, alarm sistemleri ve daha fazlası.",
    icon: ShieldCheck,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Uygun Fiyat",
    description:
      "Kaliteli hizmeti uygun fiyatlarla sunuyoruz. Şeffaf fiyatlandırma politikamızla müşterilerimize her zaman en iyi değeri sunmayı hedefliyoruz.",
    icon: Banknote,
    color: "from-purple-500 to-pink-500",
  },
];

const stats = [
  { value: 15, label: "Yıllık Tecrübe", suffix: "+", icon: Award },
  { value: 24, label: "Saat Destek", suffix: "/7", icon: Clock },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

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
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      id="ana-sayfa"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background"
    >
      {/* Enhanced decorative elements with animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="h-4 w-4" />
          Ankara&apos;nın En Güvenilir Elektrik Servisi
        </motion.div>

        <motion.h1
          className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Orhan Elektrik
          <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Elektronik
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Ankara&apos;nın güvenilir elektrik ve elektronik servisi. Uzman
          kadromuzla ev ve işyerlerinize profesyonel çözümler sunuyoruz.
        </motion.p>

        <motion.ul
          className="mb-10 flex flex-wrap items-center justify-center gap-4 text-base sm:gap-6 sm:text-lg"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {[
            "Elektrik Altyapı Yönetimi",
            "Güvenlik Sistemleri",
            "Teknik Servis",
          ].map((item) => (
            <motion.li
              key={item}
              className="flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:shadow-md"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="font-medium text-foreground">{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href={`tel:${contactInfo.phone}`}
            className="group flex items-center gap-2 rounded-lg bg-card px-5 py-3 shadow-md backdrop-blur-sm transition-all hover:scale-105 hover:shadow-lg"
          >
            <Phone className="h-5 w-5 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-semibold text-foreground">
              {contactInfo.phone}
            </span>
          </Link>
          <Link
            href="https://maps.app.goo.gl/3nwdPZaG1ac97vb79"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg bg-card px-5 py-3 shadow-md backdrop-blur-sm transition-all hover:scale-105 hover:shadow-lg"
          >
            <MapPin className="h-5 w-5 text-primary transition-transform group-hover:bounce" />
            <span className="text-start font-medium text-foreground">
              Murat Mah. Yavuzevler Sk. 18/C
              <br />
              <span className="text-sm text-muted-foreground">
                Çankaya/Ankara
              </span>
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="#hizmetlerimiz">
            <Button
              size="lg"
              className="group rounded-full bg-gradient-to-r from-primary to-primary/80 px-8 py-6 text-lg font-semibold text-primary-foreground shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Hizmetlerimizi Keşfedin
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Aşağı Kaydır</span>
          <div className="h-8 w-5 rounded-full border-2 border-primary/30">
            <motion.div
              className="mx-auto mt-1 h-2 w-1 rounded-full bg-primary"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function InstagramEmbed2() {
  return (
    <InstagramEmbed url="https://www.instagram.com/orhan.elektrik.elektronik/" />
  );
}

function StatsSection() {
  return (
    <AnimatedSection className="bg-gradient-to-b from-background to-secondary/20 py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="group relative overflow-hidden rounded-2xl bg-card p-6 text-center shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all group-hover:scale-110">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mb-1 text-4xl font-bold text-foreground">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function ServicesSection() {
  return (
    <AnimatedSection
      id="hizmetlerimiz"
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-secondary/20 to-background px-4 py-24 md:px-8"
    >
      <motion.div className="mb-4 text-center" variants={fadeInUp}>
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          Hizmetlerimiz
        </span>
      </motion.div>

      <motion.h2
        className="mb-4 text-balance text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
        variants={fadeInUp}
      >
        Profesyonel Elektrik Çözümleri
      </motion.h2>

      <motion.p
        className="mb-16 max-w-2xl text-pretty text-center text-lg text-muted-foreground"
        variants={fadeInUp}
      >
        Elektrik ve elektronik ihtiyaçlarınız için kapsamlı hizmet yelpazesi
        sunuyoruz
      </motion.p>

      <motion.div
        className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2"
        variants={staggerChildren}
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={scaleIn} className="h-full">
            <Card className="group relative h-full overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
              />

              <CardContent className="relative flex h-full flex-col p-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 flex-grow leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}

function InstagramSection() {
  return (
    <AnimatedSection
      id="instagram"
      className="flex min-h-screen items-center justify-center bg-gradient-to-b from-secondary/20 to-background py-24"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div className="mb-4 text-center" variants={fadeInUp}>
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Sosyal Medya
          </span>
        </motion.div>

        <motion.h2
          className="mb-4 text-balance text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          variants={fadeInUp}
        >
          Instagram&apos;da Bizi Takip Edin
        </motion.h2>

        <motion.p
          className="mb-12 text-pretty text-center text-lg text-muted-foreground"
          variants={fadeInUp}
        >
          Projelerimizi ve güncel çalışmalarımızı görmek için bizi takip edin
        </motion.p>

        <motion.div
          variants={scaleIn}
          className="overflow-hidden rounded-2xl shadow-2xl"
        >
          <InstagramEmbed2 />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function ContactSection() {
  return (
    <AnimatedSection
      id="iletisim"
      className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-secondary/20 py-24"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div className="mb-4 text-center" variants={fadeInUp}>
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            İletişim
          </span>
        </motion.div>

        <motion.h2
          className="mb-4 text-balance text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          variants={fadeInUp}
        >
          Bizimle İletişime Geçin
        </motion.h2>

        <motion.p
          className="mb-16 text-pretty text-center text-lg text-muted-foreground"
          variants={fadeInUp}
        >
          Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk duyarız
        </motion.p>

        <motion.div
          className="flex flex-col items-stretch justify-between gap-8 lg:flex-row"
          variants={staggerChildren}
        >
          <motion.div
            className="w-full space-y-8 lg:w-5/12"
            variants={fadeInUp}
          >
            <Card className="group border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all group-hover:scale-110">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  Telefon
                </h3>
                <Link
                  href={`tel:${contactInfo.phone}`}
                  className="text-lg font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  {contactInfo.phone}
                </Link>
                <p className="mt-2 text-sm text-muted-foreground">
                  7/24 Acil Destek Hattı
                </p>
              </CardContent>
            </Card>

            <Card className="group border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all group-hover:scale-110">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  Adres
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {contactInfo.address}
                </p>
                <Link
                  href={contactInfo.mapIframe}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Yol Tarifi Al
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8">
                <div className="mb-4 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">
                    Hızlı Teklif Alın
                  </h3>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Projeniz için ücretsiz keşif ve fiyat teklifi almak için hemen
                  arayın!
                </p>
                <Link href={`tel:${contactInfo.phone}`}>
                  <Button className="w-full rounded-lg bg-primary font-semibold text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90">
                    Hemen Ara
                    <Phone className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl lg:w-7/12"
            variants={scaleIn}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.7723054887706!2d32.8763315!3d39.9017299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fc758f2a919%3A0xc6a7ef7aaf2af164!2sOrhan%20Elektrik%20Bilgisayar!5e0!3m2!1sen!2str!4v1735736228372!5m2!1sen!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale transition-all duration-500 hover:grayscale-0"
            />
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function Footer() {
  return (
    <AnimatedSection className="border-t bg-card px-4 py-12 text-center md:px-8">
      <motion.div variants={fadeInUp} className="space-y-4">
        <div className="mb-6 flex items-center justify-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">
            Orhan Elektrik
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Orhan Elektrik Elektronik. Tüm
          hakları saklıdır.
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Shield className="h-4 w-4 text-primary" />
          <span>Güvenilir ve Profesyonel Hizmet</span>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Link href={`tel:${contactInfo.phone}`}>
        <Button
          size="lg"
          className="group h-16 w-16 rounded-full bg-primary p-0 shadow-2xl transition-all hover:scale-110 hover:bg-primary/90"
        >
          <Phone className="h-6 w-6 text-primary-foreground transition-transform group-hover:rotate-12" />
        </Button>
      </Link>
    </motion.div>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#ana-sayfa", label: "Ana Sayfa" },
    { href: "#hizmetlerimiz", label: "Hizmetlerimiz" },
    { href: "#instagram", label: "Galeri" },
    { href: "#iletisim", label: "İletişim" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <Link
          href="#ana-sayfa"
          className="flex items-center gap-2 transition-transform hover:scale-105"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Zap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Orhan Elektrik
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href={`tel:${contactInfo.phone}`}>
            <Button className="rounded-full bg-primary font-semibold text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90">
              <Phone className="mr-2 h-4 w-4" />
              Hemen Ara
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary/20 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        className="overflow-hidden bg-background/98 backdrop-blur-md md:hidden"
      >
        <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`tel:${contactInfo.phone}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Button className="w-full rounded-full bg-primary font-semibold text-primary-foreground">
              <Phone className="mr-2 h-4 w-4" />
              Hemen Ara
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <InstagramSection />
        <ContactSection />
        <Footer />
        <FloatingActionButton />
      </div>
    </>
  );
}
