"use client"

import { useState, useEffect } from "react"
import { createClientSupabaseClient } from "@/src/lib/supabase"
import { Save, RefreshCw, Plus, Trash2 } from "lucide-react"

import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Textarea } from "@/src/components/ui/textarea"
import { toast } from "@/src/components/ui/use-toast"
import { Toaster } from "@/src/components/ui/toaster"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"

export default function FooterPage() {
  const [settings, setSettings] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [footerContent, setFooterContent] = useState<any>({
    column1: { title: "Hakkımızda", content: "" },
    column2: { title: "Hizmetlerimiz", links: [] },
    column3: { title: "Hızlı Bağlantılar", links: [] },
    column4: { title: "İletişim", phone: "", email: "", address: "" },
  })
  const [socialMedia, setSocialMedia] = useState<any>({
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
  })

  const supabase = createClientSupabaseClient()

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.from("settings").select("*").single()

      if (error && error.code !== "PGRST116") throw error

      if (data) {
        setSettings(data)

        // Parse footer_content from JSON if it's a string
        let footerData = data.footer_content
        if (typeof footerData === "string") {
          footerData = JSON.parse(footerData)
        }
        setFooterContent(
          footerData || {
            column1: { title: "Hakkımızda", content: "" },
            column2: { title: "Hizmetlerimiz", links: [] },
            column3: { title: "Hızlı Bağlantılar", links: [] },
            column4: { title: "İletişim", phone: "", email: "", address: "" },
          },
        )

        // Parse social_media from JSON if it's a string
        let socialData = data.social_media
        if (typeof socialData === "string") {
          socialData = JSON.parse(socialData)
        }
        setSocialMedia(
          socialData || {
            facebook: "#",
            instagram: "#",
            twitter: "#",
            linkedin: "#",
          },
        )
      } else {
        // Initialize with default values if no data exists
        setSettings({
          theme: "blue",
        })
      }
    } catch (error) {
      console.error("Error fetching settings:", error)
      toast({
        title: "Hata",
        description: "Ayarlar yüklenirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveFooter = async () => {
    setIsSaving(true)
    try {
      const dataToSave = {
        ...settings,
        footer_content: footerContent,
        social_media: socialMedia,
      }

      if (settings.id) {
        // Update existing record
        const { error } = await supabase.from("settings").update(dataToSave).eq("id", settings.id)

        if (error) throw error

        toast({
          title: "Footer güncellendi",
          description: "Footer bilgileri başarıyla güncellendi.",
        })
      } else {
        // Insert new record
        const { data, error } = await supabase.from("settings").insert(dataToSave).select()

        if (error) throw error

        if (data && data[0]) {
          setSettings(data[0])
        }

        toast({
          title: "Footer kaydedildi",
          description: "Footer bilgileri başarıyla kaydedildi.",
        })
      }
    } catch (error) {
      console.error("Error saving footer:", error)
      toast({
        title: "Hata",
        description: "Footer bilgileri kaydedilirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleFooterChange = (column: string, field: string, value: any) => {
    setFooterContent({
      ...footerContent,
      [column]: {
        ...footerContent[column],
        [field]: value,
      },
    })
  }

  const handleSocialMediaChange = (platform: string, value: string) => {
    setSocialMedia({
      ...socialMedia,
      [platform]: value,
    })
  }

  const handleAddLink = (column: string) => {
    const updatedColumn = { ...footerContent[column] }
    updatedColumn.links = [...(updatedColumn.links || []), ""]

    setFooterContent({
      ...footerContent,
      [column]: updatedColumn,
    })
  }

  const handleUpdateLink = (column: string, index: number, value: string) => {
    const updatedColumn = { ...footerContent[column] }
    updatedColumn.links = [...(updatedColumn.links || [])]
    updatedColumn.links[index] = value

    setFooterContent({
      ...footerContent,
      [column]: updatedColumn,
    })
  }

  const handleRemoveLink = (column: string, index: number) => {
    const updatedColumn = { ...footerContent[column] }
    updatedColumn.links = [...(updatedColumn.links || [])]
    updatedColumn.links.splice(index, 1)

    setFooterContent({
      ...footerContent,
      [column]: updatedColumn,
    })
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
          <h1 className="text-2xl font-bold tracking-tight">Footer Ayarları</h1>
          <p className="text-slate-500">Site footer içeriğini düzenleyin.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={fetchSettings}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Yenile
          </Button>
          <Button onClick={handleSaveFooter} disabled={isSaving}>
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

      <Tabs defaultValue="columns">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="columns">Footer Sütunları</TabsTrigger>
          <TabsTrigger value="social">Sosyal Medya</TabsTrigger>
        </TabsList>

        <TabsContent value="columns" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1 - About */}
            <Card>
              <CardHeader>
                <CardTitle>1. Sütun - Hakkımızda</CardTitle>
                <CardDescription>Hakkımızda sütununu düzenleyin.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="column1-title">Başlık</Label>
                    <Input
                      id="column1-title"
                      value={footerContent.column1?.title || ""}
                      onChange={(e) => handleFooterChange("column1", "title", e.target.value)}
                      placeholder="Sütun başlığı"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="column1-content">İçerik</Label>
                    <Textarea
                      id="column1-content"
                      value={footerContent.column1?.content || ""}
                      onChange={(e) => handleFooterChange("column1", "content", e.target.value)}
                      placeholder="Hakkımızda içeriği"
                      rows={4}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Column 2 - Services */}
            <Card>
              <CardHeader>
                <CardTitle>2. Sütun - Hizmetlerimiz</CardTitle>
                <CardDescription>Hizmetlerimiz sütununu düzenleyin.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="column2-title">Başlık</Label>
                    <Input
                      id="column2-title"
                      value={footerContent.column2?.title || ""}
                      onChange={(e) => handleFooterChange("column2", "title", e.target.value)}
                      placeholder="Sütun başlığı"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Bağlantılar</Label>
                    {(footerContent.column2?.links || []).map((link: string, index: number) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={link}
                          onChange={(e) => handleUpdateLink("column2", index, e.target.value)}
                          placeholder={`Bağlantı ${index + 1}`}
                        />
                        <Button variant="ghost" size="icon" onClick={() => handleRemoveLink("column2", index)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full" onClick={() => handleAddLink("column2")}>
                      <Plus className="mr-2 h-4 w-4" />
                      Bağlantı Ekle
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Column 3 - Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>3. Sütun - Hızlı Bağlantılar</CardTitle>
                <CardDescription>Hızlı bağlantılar sütununu düzenleyin.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="column3-title">Başlık</Label>
                    <Input
                      id="column3-title"
                      value={footerContent.column3?.title || ""}
                      onChange={(e) => handleFooterChange("column3", "title", e.target.value)}
                      placeholder="Sütun başlığı"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Bağlantılar</Label>
                    {(footerContent.column3?.links || []).map((link: string, index: number) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={link}
                          onChange={(e) => handleUpdateLink("column3", index, e.target.value)}
                          placeholder={`Bağlantı ${index + 1}`}
                        />
                        <Button variant="ghost" size="icon" onClick={() => handleRemoveLink("column3", index)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full" onClick={() => handleAddLink("column3")}>
                      <Plus className="mr-2 h-4 w-4" />
                      Bağlantı Ekle
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Column 4 - Contact */}
            <Card>
              <CardHeader>
                <CardTitle>4. Sütun - İletişim</CardTitle>
                <CardDescription>İletişim sütununu düzenleyin.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="column4-title">Başlık</Label>
                    <Input
                      id="column4-title"
                      value={footerContent.column4?.title || ""}
                      onChange={(e) => handleFooterChange("column4", "title", e.target.value)}
                      placeholder="Sütun başlığı"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="column4-phone">Telefon</Label>
                    <Input
                      id="column4-phone"
                      value={footerContent.column4?.phone || ""}
                      onChange={(e) => handleFooterChange("column4", "phone", e.target.value)}
                      placeholder="Telefon numarası"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="column4-email">E-posta</Label>
                    <Input
                      id="column4-email"
                      value={footerContent.column4?.email || ""}
                      onChange={(e) => handleFooterChange("column4", "email", e.target.value)}
                      placeholder="E-posta adresi"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="column4-address">Adres</Label>
                    <Input
                      id="column4-address"
                      value={footerContent.column4?.address || ""}
                      onChange={(e) => handleFooterChange("column4", "address", e.target.value)}
                      placeholder="Adres"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Sosyal Medya Bağlantıları</CardTitle>
              <CardDescription>Sosyal medya bağlantılarını düzenleyin.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="social-facebook">Facebook</Label>
                  <Input
                    id="social-facebook"
                    value={socialMedia.facebook || "#"}
                    onChange={(e) => handleSocialMediaChange("facebook", e.target.value)}
                    placeholder="Facebook URL"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="social-instagram">Instagram</Label>
                  <Input
                    id="social-instagram"
                    value={socialMedia.instagram || "#"}
                    onChange={(e) => handleSocialMediaChange("instagram", e.target.value)}
                    placeholder="Instagram URL"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="social-twitter">Twitter</Label>
                  <Input
                    id="social-twitter"
                    value={socialMedia.twitter || "#"}
                    onChange={(e) => handleSocialMediaChange("twitter", e.target.value)}
                    placeholder="Twitter URL"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="social-linkedin">LinkedIn</Label>
                  <Input
                    id="social-linkedin"
                    value={socialMedia.linkedin || "#"}
                    onChange={(e) => handleSocialMediaChange("linkedin", e.target.value)}
                    placeholder="LinkedIn URL"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Toaster />
    </div>
  )
}

