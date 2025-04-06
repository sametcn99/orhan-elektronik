"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-900">
          Orhan Elektronik
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#ana-sayfa" className="text-gray-600 hover:text-blue-600">
            Ana Sayfa
          </Link>
          <Link href="#hizmetlerimiz" className="text-gray-600 hover:text-blue-600">
            Hizmetlerimiz
          </Link>
          <Link href="#iletisim" className="text-gray-600 hover:text-blue-600">
            İletişim
          </Link>
          <Link href="https://wa.me/905325749392" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
              WhatsApp İle Ulaşın
            </Button>
          </Link>
        </div>

        <button className="md:hidden text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </motion.header>
  );
}