"use client"

import { useState, useEffect } from "react"
import { createClientSupabaseClient } from "@/src/lib/supabase"
import { Save, RefreshCw, ImageIcon } from "lucide-react"

import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { toast } from "@/src/components/ui/use-toast"
import { Toaster } from "@/src/components/ui/toaster"

export default function ContactPage() {
  const [contactData, setContactData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  const supabase = createClientSupabaseClient()

  useEffect(() => {
    fetchContactData()
  }, [])

  const fetchContactData = async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.from("contact").select("*").single()

      if (error && error.code !== "PGRST116") throw error

      if (data) {
        setContactData(data)
      } else {
        // Initialize with default values if no data exists
        setContactData({
          phone: "",
          email: "",
          address: "",
          working_hours: "",
          map_url: "/placeholder.svg?height=300&width=600",
        })
      }
    } catch (error) {
      console.error("Error fetching contact data:", error)
      toast({
        title: "Hata",
        description: "İletişim bilgileri yüklenirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveContact = async () => {
    setIsSaving(true)
    try {
      // Validate data
      if (!contactData.phone || !contactData.email || !contactData.address || !contactData.working_hours) {
        toast({
          title: "Eksik bilgiler",
          description: "Lütfen tüm alanları doldurun.",
          variant: "destructive",
        })
        setIsSaving(false)
        return
      }

      if (contactData.id) {
        // Update existing record
        const { error } = await supabase.from("contact").update(contactData).eq("id", contactData.id)

        if (error) throw error

        toast({
          title: "Bilgiler güncellendi",
          description: "İletişim bilgileri başarıyla güncellendi.",
        })
      } else {
        // Insert new record
        const { data, error } = await supabase.from("contact").insert(contactData).select()

        if (error) throw error

        if (data && data[0]) {
          setContactData(data[0])
        }

        toast({
          title: "Bilgiler kaydedildi",
          description: "İletişim bilgileri başarıyla kaydedildi.",
        })
      }
    } catch (error) {
      console.error("Error saving contact data:", error)
      toast({
        title: "Hata",
        description: "Bilgiler kaydedilirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleContactChange = (field: string, value: any) => {
    setContactData({ ...contactData, [field]: value })
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">İletişim Bilgileri</h1>
          <p className="text-slate-500">İletişim bilgilerinizi düzenleyin.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={fetchContactData}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Yenile
          </Button>
          <Button onClick={handleSaveContact} disabled={isSaving}>
            {isSaving ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Kaydediliyor
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Değişiklikleri Kaydet
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>İletişim Bilgileri</CardTitle>
            <CardDescription>İletişim bilgilerinizi düzenleyin.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact-phone">Telefon</Label>
                <Input
                  id="contact-phone"
                  value={contactData.phone}
                  onChange={(e) => handleContactChange("phone", e.target.value)}
                  placeholder="Telefon numarası"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">E-posta</Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={contactData.email}
                  onChange={(e) => handleContactChange("email", e.target.value)}
                  placeholder="E-posta adresi"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-address">Adres</Label>
                <Input
                  id="contact-address"
                  value={contactData.address}
                  onChange={(e) => handleContactChange("address", e.target.value)}
                  placeholder="Adres"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-hours">Çalışma Saatleri</Label>
                <Input
                  id="contact-hours"
                  value={contactData.working_hours}
                  onChange={(e) => handleContactChange("working_hours", e.target.value)}
                  placeholder="Çalışma saatleri"
                />
                <p className="text-xs text-slate-500">Örnek: Pazartesi - Cumartesi: 09:00 - 18:00</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Harita</CardTitle>
            <CardDescription>Harita görselini düzenleyin.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact-map">Harita URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="contact-map"
                    value={contactData.map_url}
                    onChange={(e) => handleContactChange("map_url", e.target.value)}
                    placeholder="Harita URL'si"
                  />
                  <Button variant="outline" size="icon">
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-slate-500">
                  Google Maps embed URL'si veya harita görseli URL'si ekleyebilirsiniz.
                </p>
              </div>

              <div className="bg-slate-100 rounded-lg overflow-hidden h-48">
                {contactData.map_url ? (
                  <img
                    src={contactData.map_url || "/placeholder.svg"}
                    alt="Harita Görseli"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-slate-400">
                    <ImageIcon className="h-12 w-12 mb-2" />
                    <span>Harita URL'si girin</span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Toaster />
    </div>
  )
}

