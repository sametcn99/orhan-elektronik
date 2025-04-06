"use client"

import { useState, useEffect } from "react"
import { createClientSupabaseClient } from "@/src/lib/supabase"
import { Save, RefreshCw, ImageIcon, Plus, Trash2 } from "lucide-react"

import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Textarea } from "@/src/components/ui/textarea"
import { toast } from "@/src/components/ui/use-toast"
import { Toaster } from "@/src/components/ui/toaster"

export default function AboutPage() {
  const [aboutData, setAboutData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [features, setFeatures] = useState<any[]>([])

  const supabase = createClientSupabaseClient()

  useEffect(() => {
    fetchAboutData()
  }, [])

  const fetchAboutData = async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.from("about").select("*").single()

      if (error && error.code !== "PGRST116") throw error

      if (data) {
        setAboutData(data)
        // Parse features from JSON if it's a string
        let featuresData = data.features
        if (typeof featuresData === "string") {
          featuresData = JSON.parse(featuresData)
        }
        setFeatures(Array.isArray(featuresData) ? featuresData : [])
      } else {
        // Initialize with default values if no data exists
        setAboutData({
          title: "Bizi Tanıyın",
          description: "",
          image_url: "/placeholder.svg?height=600&width=800",
        })
        setFeatures([])
      }
    } catch (error) {
      console.error("Error fetching about data:", error)
      toast({
        title: "Hata",
        description: "Hakkımızda bilgileri yüklenirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveAbout = async () => {
    setIsSaving(true)
    try {
      // Validate data
      if (!aboutData.title || !aboutData.description || !aboutData.image_url) {
        toast({
          title: "Eksik bilgiler",
          description: "Lütfen tüm alanları doldurun.",
          variant: "destructive",
        })
        setIsSaving(false)
        return
      }

      const dataToSave = {
        ...aboutData,
        features: features,
      }

      if (aboutData.id) {
        // Update existing record
        const { error } = await supabase.from("about").update(dataToSave).eq("id", aboutData.id)

        if (error) throw error

        toast({
          title: "Bilgiler güncellendi",
          description: "Hakkımızda bilgileri başarıyla güncellendi.",
        })
      } else {
        // Insert new record
        const { data, error } = await supabase.from("about").insert(dataToSave).select()

        if (error) throw error

        if (data && data[0]) {
          setAboutData(data[0])
        }

        toast({
          title: "Bilgiler kaydedildi",
          description: "Hakkımızda bilgileri başarıyla kaydedildi.",
        })
      }
    } catch (error) {
      console.error("Error saving about data:", error)
      toast({
        title: "Hata",
        description: "Bilgiler kaydedilirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleAboutChange = (field: string, value: any) => {
    setAboutData({ ...aboutData, [field]: value })
  }

  const handleAddFeature = () => {
    setFeatures([...features, { title: "", description: "" }])
  }

  const handleFeatureChange = (index: number, field: string, value: string) => {
    const updatedFeatures = [...features]
    updatedFeatures[index] = { ...updatedFeatures[index], [field]: value }
    setFeatures(updatedFeatures)
  }

  const handleRemoveFeature = (index: number) => {
    const updatedFeatures = [...features]
    updatedFeatures.splice(index, 1)
    setFeatures(updatedFeatures)
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
          <h1 className="text-2xl font-bold tracking-tight">Hakkımızda</h1>
          <p className="text-slate-500">Şirketiniz hakkında bilgileri düzenleyin.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={fetchAboutData}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Yenile
          </Button>
          <Button onClick={handleSaveAbout} disabled={isSaving}>
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
            <CardTitle>Genel Bilgiler</CardTitle>
            <CardDescription>Şirketiniz hakkında genel bilgileri düzenleyin.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="about-title">Başlık</Label>
                <Input
                  id="about-title"
                  value={aboutData.title}
                  onChange={(e) => handleAboutChange("title", e.target.value)}
                  placeholder="Hakkımızda başlığı"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="about-description">Açıklama</Label>
                <Textarea
                  id="about-description"
                  value={aboutData.description}
                  onChange={(e) => handleAboutChange("description", e.target.value)}
                  placeholder="Şirketiniz hakkında detaylı açıklama"
                  rows={6}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="about-image">Görsel URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="about-image"
                    value={aboutData.image_url}
                    onChange={(e) => handleAboutChange("image_url", e.target.value)}
                    placeholder="Görsel URL'si"
                  />
                  <Button variant="outline" size="icon">
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-slate-500">Önerilen boyut: 800x600 piksel</p>
              </div>

              <div className="bg-slate-100 rounded-lg overflow-hidden h-48">
                {aboutData.image_url ? (
                  <img
                    src={aboutData.image_url || "/placeholder.svg"}
                    alt="Hakkımızda Görseli"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-slate-400">
                    <ImageIcon className="h-12 w-12 mb-2" />
                    <span>Görsel URL'si girin</span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Özellikler</CardTitle>
            <CardDescription>Şirketinizin öne çıkan özelliklerini düzenleyin.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Özellik {index + 1}</h3>
                    <Button variant="ghost" size="icon" onClick={() => handleRemoveFeature(index)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`feature-title-${index}`}>Başlık</Label>
                    <Input
                      id={`feature-title-${index}`}
                      value={feature.title}
                      onChange={(e) => handleFeatureChange(index, "title", e.target.value)}
                      placeholder="Özellik başlığı"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`feature-description-${index}`}>Açıklama</Label>
                    <Input
                      id={`feature-description-${index}`}
                      value={feature.description}
                      onChange={(e) => handleFeatureChange(index, "description", e.target.value)}
                      placeholder="Özellik açıklaması"
                    />
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full" onClick={handleAddFeature}>
                <Plus className="mr-2 h-4 w-4" />
                Yeni Özellik Ekle
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Toaster />
    </div>
  )
}

