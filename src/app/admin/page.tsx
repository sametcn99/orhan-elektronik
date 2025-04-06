"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Users, MessageSquare, FileText, Settings, ArrowRight, Eye, Edit, Briefcase } from "lucide-react"
import { createClient } from "@supabase/supabase-js"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"

// Create Supabase client
const supabaseUrl = "https://your-project-url.supabase.co"
const supabaseKey = "your-anon-key"
const supabase = createClient(supabaseUrl, supabaseKey)

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    messages: 0,
    projects: 0,
    services: 0,
    testimonials: 0,
  })
  const [recentMessages, setRecentMessages] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real app, you would fetch this data from Supabase
        // For demo purposes, we'll use mock data

        // Mock stats
        setStats({
          messages: 12,
          projects: 8,
          services: 3,
          testimonials: 15,
        })

        // Mock recent messages
        setRecentMessages([
          {
            id: 1,
            name: "Ahmet Yılmaz",
            email: "ahmet@example.com",
            subject: "Fiyat Teklifi",
            message: "Ofisimiz için güvenlik sistemi kurulumu hakkında bilgi almak istiyorum.",
            created_at: "2023-06-15T10:30:00",
          },
          {
            id: 2,
            name: "Ayşe Kaya",
            email: "ayse@example.com",
            subject: "Teknik Destek",
            message: "Kurduğunuz kamera sisteminde bir sorun var, yardım alabilir miyim?",
            created_at: "2023-06-14T14:45:00",
          },
          {
            id: 3,
            name: "Mehmet Demir",
            email: "mehmet@example.com",
            subject: "İş Başvurusu",
            message: "Firmanızda çalışmak istiyorum. Özgeçmişimi ekte bulabilirsiniz.",
            created_at: "2023-06-13T09:15:00",
          },
        ])

        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-slate-500">Sitenizin genel durumunu ve son aktiviteleri görüntüleyin.</p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/">
              <Eye className="mr-2 h-4 w-4" />
              Siteyi Görüntüle
            </Link>
          </Button>
          <Button asChild>
            <Link href="/admin/settings">
              <Settings className="mr-2 h-4 w-4" />
              Site Ayarları
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Toplam Mesaj</CardTitle>
            <MessageSquare className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.messages}</div>
            <p className="text-xs text-slate-500 mt-1">Son 30 günde 8 yeni mesaj</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Projeler</CardTitle>
            <FileText className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.projects}</div>
            <p className="text-xs text-slate-500 mt-1">Son 30 günde 2 yeni proje</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Hizmetler</CardTitle>
            <Briefcase className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.services}</div>
            <p className="text-xs text-slate-500 mt-1">Aktif hizmet sayısı</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Yorumlar</CardTitle>
            <Users className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.testimonials}</div>
            <p className="text-xs text-slate-500 mt-1">Son 30 günde 3 yeni yorum</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Son Mesajlar</CardTitle>
            <CardDescription>Son gelen müşteri mesajları</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMessages.length > 0 ? (
                recentMessages.map((message) => (
                  <div key={message.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">{message.name}</h3>
                        <p className="text-sm text-slate-500">{message.email}</p>
                      </div>
                      <span className="text-xs text-slate-500">
                        {new Date(message.created_at).toLocaleDateString("tr-TR")}
                      </span>
                    </div>
                    <p className="text-sm font-medium mb-1">{message.subject}</p>
                    <p className="text-sm text-slate-600 line-clamp-2">{message.message}</p>
                    <div className="mt-3 flex justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/admin/messages/${message.id}`}>
                          Detaylar
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center py-4 text-slate-500">Henüz mesaj bulunmuyor.</p>
              )}

              <div className="flex justify-center mt-2">
                <Button variant="outline" asChild>
                  <Link href="/admin/messages">
                    Tüm Mesajları Görüntüle
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Hızlı Erişim</CardTitle>
            <CardDescription>Sık kullanılan sayfalara hızlıca erişin</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              <Link
                href="/admin/content/hero"
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Edit className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Hero Bölümü</h3>
                    <p className="text-sm text-slate-500">Ana sayfa slider içeriğini düzenleyin</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400" />
              </Link>

              <Link
                href="/admin/content/services"
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Hizmetlerimiz</h3>
                    <p className="text-sm text-slate-500">Hizmet içeriklerini düzenleyin</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400" />
              </Link>

              <Link
                href="/admin/content/projects"
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Projelerimiz</h3>
                    <p className="text-sm text-slate-500">Proje içeriklerini düzenleyin</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400" />
              </Link>

              <Link
                href="/admin/settings"
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Settings className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Site Ayarları</h3>
                    <p className="text-sm text-slate-500">Tema ve genel ayarları düzenleyin</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

