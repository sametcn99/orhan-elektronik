"use client"

import { useState, useEffect } from "react"
import { createClientSupabaseClient } from "@/src/lib/supabase"
import { Palette, Save, RefreshCw, SettingsIcon, AlertTriangle } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group"
import { Label } from "@/src/components/ui/label"
import { Switch } from "@/src/components/ui/switch"
import { Textarea } from "@/src/components/ui/textarea"
import { toast } from "@/src/components/ui/use-toast"
import { Toaster } from "@/src/components/ui/toaster"

export default function SettingsPage() {
  const [settings, setSettings] = useState<any>({
    theme: "blue",
    maintenance_mode: false,
    maintenance_message: "Sitemiz bakım modundadır. Lütfen daha sonra tekrar ziyaret edin.",
    footer_content: {},
    social_media: {},
  })
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  const supabase = createClientSupabaseClient()

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.from("settings").select("*").single()

      if (error) {
        if (error.code !== "PGRST116") {
          console.error("Error fetching settings:", error)
          toast({
            title: "Hata",
            description: "Ayarlar yüklenirken bir hata oluştu.",
            variant: "destructive",
          })
        }
      } else if (data) {
        // Set the settings with defaults for any missing fields
        setSettings({
          id: data.id,
          theme: data.theme || "blue",
          maintenance_mode: data.maintenance_mode === true,
          maintenance_message:
            data.maintenance_message || "Sitemiz bakım modundadır. Lütfen daha sonra tekrar ziyaret edin.",
          footer_content: data.footer_content || {},
          social_media: data.social_media || {},
        })
      }
    } catch (error) {
      console.error("Error in fetchSettings:", error)
      toast({
        title: "Hata",
        description: "Ayarlar yüklenirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveSettings = async () => {
    setIsSaving(true)
    try {
      // Prepare the data to save
      const dataToSave = {
        id: settings.id || 1, // Use existing ID or default to 1
        theme: settings.theme || "blue",
        maintenance_mode: settings.maintenance_mode === true,
        maintenance_message:
          settings.maintenance_message || "Sitemiz bakım modundadır. Lütfen daha sonra tekrar ziyaret edin.",
        footer_content: settings.footer_content || {},
        social_media: settings.social_media || {},
      }

      // Upsert the settings
      const { error } = await supabase.from("settings").upsert(dataToSave)

      if (error) {
        throw error
      }

      toast({
        title: "Ayarlar kaydedildi",
        description: "Site ayarları başarıyla güncellendi.",
      })
    } catch (error) {
      console.error("Error saving settings:", error)
      toast({
        title: "Hata",
        description: "Ayarlar kaydedilirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleSettingChange = (field: string, value: any) => {
    setSettings({ ...settings, [field]: value })
  }

  const themeOptions = [
    {
      id: "blue",
      name: "Mavi",
      description: "Mavi tonlarında modern bir tema",
      primaryColor: "bg-blue-500",
      secondaryColor: "bg-sky-400",
    },
    {
      id: "purple",
      name: "Mor",
      description: "Mor tonlarında şık bir tema",
      primaryColor: "bg-purple-500",
      secondaryColor: "bg-violet-400",
    },
    {
      id: "green",
      name: "Yeşil",
      description: "Yeşil tonlarında doğal bir tema",
      primaryColor: "bg-emerald-500",
      secondaryColor: "bg-green-400",
    },
    {
      id: "orange",
      name: "Turuncu",
      description: "Turuncu tonlarında enerjik bir tema",
      primaryColor: "bg-orange-500",
      secondaryColor: "bg-amber-400",
    },
    {
      id: "red",
      name: "Kırmızı",
      description: "Kırmızı tonlarında güçlü bir tema",
      primaryColor: "bg-red-500",
      secondaryColor: "bg-rose-400",
    },
  ]

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Site Ayarları</h1>
        <p className="text-slate-500">Sitenizin görünümünü ve davranışını özelleştirin.</p>
      </div>

      <Tabs defaultValue="theme">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 lg:max-w-md">
          <TabsTrigger value="theme">Tema</TabsTrigger>
          <TabsTrigger value="maintenance">Bakım Modu</TabsTrigger>
        </TabsList>

        <TabsContent value="theme" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="mr-2 h-5 w-5" />
                Tema Ayarları
              </CardTitle>
              <CardDescription>
                Sitenizin renk temasını değiştirin. Bu ayar tüm site genelinde uygulanacaktır.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <RadioGroup
                  value={settings.theme}
                  onValueChange={(value) => handleSettingChange("theme", value)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {themeOptions.map((theme) => (
                    <div key={theme.id} className="relative">
                      <RadioGroupItem value={theme.id} id={theme.id} className="peer sr-only" />
                      <Label
                        htmlFor={theme.id}
                        className="flex flex-col items-center justify-between rounded-md border-2 border-slate-200 p-4 hover:border-slate-300 peer-data-[state=checked]:border-blue-500 [&:has([data-state=checked])]:border-blue-500 cursor-pointer"
                      >
                        <div className="mb-3 w-full h-20 rounded-md overflow-hidden flex">
                          <div className={`w-1/2 ${theme.primaryColor}`}></div>
                          <div className={`w-1/2 ${theme.secondaryColor}`}></div>
                        </div>
                        <div className="font-semibold">{theme.name}</div>
                        <div className="text-sm text-slate-500 text-center mt-1">{theme.description}</div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <div className="flex justify-end mt-6">
                  <Button onClick={handleSaveSettings} disabled={isSaving}>
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
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <SettingsIcon className="mr-2 h-5 w-5" />
                Bakım Modu
              </CardTitle>
              <CardDescription>
                Sitenizi bakım moduna alın. Bakım modundayken ziyaretçiler siteye erişemez ve bakım mesajını görür.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="maintenance-mode">Bakım Modu</Label>
                    <p className="text-sm text-slate-500">
                      Bakım modunu etkinleştirdiğinizde, ziyaretçiler siteye erişemez.
                    </p>
                  </div>
                  <Switch
                    id="maintenance-mode"
                    checked={settings.maintenance_mode === true}
                    onCheckedChange={(value) => handleSettingChange("maintenance_mode", value)}
                  />
                </div>

                {settings.maintenance_mode === true && (
                  <div className="space-y-2 border-t pt-4">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      <p className="text-amber-500 font-medium">Bakım modu etkin! Ziyaretçiler siteye erişemez.</p>
                    </div>
                    <Label htmlFor="maintenance-message">Bakım Mesajı</Label>
                    <Textarea
                      id="maintenance-message"
                      value={settings.maintenance_message || ""}
                      onChange={(e) => handleSettingChange("maintenance_message", e.target.value)}
                      placeholder="Bakım mesajı"
                      rows={3}
                    />
                    <p className="text-xs text-slate-500">Bu mesaj, bakım modundayken ziyaretçilere gösterilecektir.</p>
                  </div>
                )}

                <div className="flex justify-end">
                  <Button onClick={handleSaveSettings} disabled={isSaving}>
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
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Toaster />
    </div>
  )
}

