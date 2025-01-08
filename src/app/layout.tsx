import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orhan Elektrik Elektronik",
  description: "Orhan Elektrik Elektronik - Bilgi Ve Bilişim Teknolojileri",
  keywords: [
    "Orhan Elektrik Elektronik",
    "Bilgi Ve Bilişim Teknolojileri",
    "Teknik Servis",
    "Elektrik",
    "Elektronik",
    "Bilgisayar",
    "Güvenlik Sistemleri",
    "Elektrik Altyapı Yönetimi",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
