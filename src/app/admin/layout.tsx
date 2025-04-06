"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import {
  LayoutDashboard,
  Image,
  Users,
  Briefcase,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
} from "lucide-react"
import { createClient } from "@supabase/supabase-js"

import { Button } from "@/src/components/ui/button"
import { ScrollArea } from "@/src/components/ui/scroll-area"

// Create Supabase client
const supabaseUrl = "https://your-project-url.supabase.co"
const supabaseKey = "your-anon-key"
const supabase = createClient(supabaseUrl, supabaseKey)

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      const session = localStorage.getItem("admin_session")

      if (session) {
        try {
          const sessionData = JSON.parse(session)
          // In a real app, you would verify the token with Supabase
          // For this demo, we'll just check if it exists and is not expired
          if (sessionData && sessionData.expires > Date.now()) {
            setIsAuthenticated(true)
          } else {
            localStorage.removeItem("admin_session")
            router.push("/admin/login")
          }
        } catch (error) {
          localStorage.removeItem("admin_session")
          router.push("/admin/login")
        }
      } else {
        router.push("/admin/login")
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("admin_session")
    router.push("/admin/login")
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <>{children}</>
  }

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Mobile sidebar toggle */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="bg-white shadow-md"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-500 to-sky-400 text-white p-2 rounded-lg">
                <span className="font-bold text-xl">Orhan</span>
              </div>
              <span className="font-medium text-xl text-slate-700">Admin</span>
            </div>
          </div>

          <ScrollArea className="flex-1 py-4">
            <nav className="px-4 space-y-1">
              <Link
                href="/admin"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive("/admin") &&
                  !isActive("/admin/content") &&
                  !isActive("/admin/messages") &&
                  !isActive("/admin/settings")
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </Link>

              <div className="pt-4">
                <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  İçerik Yönetimi
                </p>
                <div className="space-y-1">
                  <Link
                    href="/admin/content/hero"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive("/admin/content/hero") ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Image size={20} />
                    <span>Hero Bölümü</span>
                  </Link>

                  <Link
                    href="/admin/content/references"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive("/admin/content/references")
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Briefcase size={20} />
                    <span>Referanslarımız</span>
                  </Link>

                  <Link
                    href="/admin/content/features"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive("/admin/content/features")
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Users size={20} />
                    <span>Uzman Ekip</span>
                  </Link>

                  <Link
                    href="/admin/content/services"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive("/admin/content/services")
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Briefcase size={20} />
                    <span>Hizmetlerimiz</span>
                  </Link>

                  <Link
                    href="/admin/content/projects"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive("/admin/content/projects")
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <FileText size={20} />
                    <span>Projelerimiz</span>
                  </Link>

                  <Link
                    href="/admin/content/about"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive("/admin/content/about")
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <FileText size={20} />
                    <span>Hakkımızda</span>
                  </Link>

                  <Link
                    href="/admin/content/testimonials"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive("/admin/content/testimonials")
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <MessageSquare size={20} />
                    <span>Yorumlar</span>
                  </Link>

                  <Link
                    href="/admin/content/contact"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive("/admin/content/contact")
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <MessageSquare size={20} />
                    <span>İletişim</span>
                  </Link>

                  <Link
                    href="/admin/content/footer"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive("/admin/content/footer")
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <FileText size={20} />
                    <span>Footer</span>
                  </Link>
                </div>
              </div>

              <div className="pt-4">
                <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Sistem</p>
                <div className="space-y-1">
                  <Link
                    href="/admin/messages"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive("/admin/messages") ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <MessageSquare size={20} />
                    <span>Mesajlar</span>
                  </Link>

                  <Link
                    href="/admin/settings"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive("/admin/settings") ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Settings size={20} />
                    <span>Ayarlar</span>
                  </Link>
                </div>
              </div>
            </nav>
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="space-y-4">
              <Link
                href="/"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <Home size={20} />
                <span>Siteye Git</span>
              </Link>

              <Button
                variant="outline"
                className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                onClick={handleLogout}
              >
                <LogOut size={20} className="mr-2" />
                Çıkış Yap
              </Button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "md:ml-64" : "ml-0"}`}>
        <main className="p-4 md:p-8 min-h-screen">{children}</main>
      </div>
    </div>
  )
}

