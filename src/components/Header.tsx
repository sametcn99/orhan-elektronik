"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";
import { Menu } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#ana-sayfa", label: "Ana Sayfa" },
    { href: "#hizmetlerimiz", label: "Hizmetlerimiz" },
    { href: "#iletisim", label: "İletişim" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

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
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="text-gray-600 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
          <Link href="https://wa.me/905325749392" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
              WhatsApp İle Ulaşın
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]" title="Navigasyon Menüsü">
            <nav className="flex flex-col gap-4 mt-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="text-lg font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="https://wa.me/905325749392" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  WhatsApp İle Ulaşın
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}