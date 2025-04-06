import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { cookies } from "next/headers"
import "./globals.css"
import { ThemeProvider } from "@/src/lib/theme-provider"
import MaintenancePage from "./maintenance"
import { createServerSupabaseClient } from "@/src/lib/supabase"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Orhan Elektrik - Profesyonel Elektrik ve Elektronik Çözümleri",
  description:
    "Orhan Elektrik Elektronik olarak, kaliteli hizmet ve müşteri memnuniyeti odaklı çalışmalarımızla yanınızdayız.",
    generator: 'v0.dev'
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Bakım mesajını kontrol et
  const cookieStore = cookies()
  const maintenanceMessage = await cookieStore.get("maintenance_message")?.value

  // Tema ayarını getir
  const supabase = createServerSupabaseClient()
  let theme = "blue" // Default theme

  try {
    const { data } = await supabase.from("settings").select("*").single()

    if (data && data.theme) {
      theme = data.theme
    }
  } catch (error) {
    console.error("Error fetching theme settings:", error)
    // Continue with default theme
  }

  // Bakım modu kontrolü
  if (maintenanceMessage) {
    return (
      <html lang="tr">
        <body className={inter.className}>
          <MaintenancePage message={maintenanceMessage} />
        </body>
      </html>
    )
  }

  return (
    <html lang="tr">
      <body className={inter.className}>
        <ThemeProvider defaultTheme={theme as any}>{children}</ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'