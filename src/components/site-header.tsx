"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/src/components/ui/button"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-2 md:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-sm">+90 0532 574 93 92</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span className="text-sm">info@orhanelektrik.com</span>
              </div>
            </div>
            <div className="flex gap-2">
              <a href="#" className="text-sm hover:text-blue-600 transition-colors">
                Hakkımızda
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-sm hover:text-blue-600 transition-colors">
                İletişim
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Orhan Elektrik
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium hover:text-blue-600 transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/hizmetlerimiz" className="font-medium hover:text-blue-600 transition-colors">
              Hizmetlerimiz
            </Link>
            <Link href="/projeler" className="font-medium hover:text-blue-600 transition-colors">
              Projeler
            </Link>
            <Link href="/hakkimizda" className="font-medium hover:text-blue-600 transition-colors">
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="font-medium hover:text-blue-600 transition-colors">
              İletişim
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button>Teklif Alın</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t mt-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="font-medium hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/hizmetlerimiz"
                className="font-medium hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetlerimiz
              </Link>
              <Link
                href="/projeler"
                className="font-medium hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projeler
              </Link>
              <Link
                href="/hakkimizda"
                className="font-medium hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="/iletisim"
                className="font-medium hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <Button className="mt-2">Teklif Alın</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

