"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { createClientSupabaseClient } from "@/src/lib/supabase"
import {
  Save,
  Plus,
  Trash2,
  Edit,
  RefreshCw,
  ImageIcon,
  Search,
  Zap,
  Lock,
  Cpu,
  Shield,
  Wrench,
  CheckCircle,
  Wifi,
  Server,
  Database,
  HardDrive,
  Monitor,
  Smartphone,
} from "lucide-react"

import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Textarea } from "@/src/components/ui/textarea"
import { toast } from "@/src/components/ui/use-toast"
import { Toaster } from "@/src/components/ui/toaster"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [serviceToDelete, setServiceToDelete] = useState<number | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentService, setCurrentService] = useState<any>(null)
  const [isNewService, setIsNewService] = useState(false)

  const supabase = createClientSupabaseClient()

  // Available icons for services
  const availableIcons = [
    "Zap",
    "Lock",
    "Cpu",
    "Shield",
    "Wrench",
    "CheckCircle",
    "Wifi",
    "Server",
    "Database",
    "HardDrive",
    "Monitor",
    "Smartphone",
  ]

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.from("services").select("*").order("order_number", { ascending: true })

      if (error) throw error
      setServices(data || [])
    } catch (error) {
      console.error("Error fetching services:", error)
      toast({
        title: "Hata",
        description: "Hizmetler yüklenirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveService = async () => {
    setIsSaving(true)
    try {
      // Validate service
      if (
        !currentService.title ||
        !currentService.description ||
        !currentService.icon ||
        !currentService.details ||
        !currentService.image_url
      ) {
        toast({
          title: "Eksik bilgiler",
          description: "Lütfen tüm alanları doldurun.",
          variant: "destructive",
        })
        setIsSaving(false)
        return
      }

      if (isNewService) {
        // Get the highest order number and add 1
        const maxOrder = services.length > 0 ? Math.max(...services.map((svc) => svc.order_number)) : 0

        // Add new service
        const { data, error } = await supabase
          .from("services")
          .insert({
            ...currentService,
            order_number: maxOrder + 1,
          })
          .select()

        if (error) throw error

        toast({
          title: "Hizmet eklendi",
          description: "Yeni hizmet başarıyla eklendi.",
        })
      } else {
        // Update existing service
        const { error } = await supabase.from("services").update(currentService).eq("id", currentService.id)

        if (error) throw error

        toast({
          title: "Hizmet güncellendi",
          description: "Hizmet başarıyla güncellendi.",
        })
      }

      // Refresh the services list
      fetchServices()
      setIsEditDialogOpen(false)
    } catch (error) {
      console.error("Error saving service:", error)
      toast({
        title: "Hata",
        description: "Hizmet kaydedilirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleAddService = () => {
    setCurrentService({
      title: "",
      description: "",
      icon: "Zap",
      details: "",
      image_url: "/placeholder.svg?height=400&width=600",
    })
    setIsNewService(true)
    setIsEditDialogOpen(true)
  }

  const handleEditService = (service: any) => {
    setCurrentService({ ...service })
    setIsNewService(false)
    setIsEditDialogOpen(true)
  }

  const handleDeleteService = (serviceId: number) => {
    setServiceToDelete(serviceId)
    setIsDeleteDialogOpen(true)
  }

  const confirmDeleteService = async () => {
    if (serviceToDelete !== null) {
      try {
        const { error } = await supabase.from("services").delete().eq("id", serviceToDelete)

        if (error) throw error

        toast({
          title: "Hizmet silindi",
          description: "Hizmet başarıyla silindi.",
        })

        // Refresh the services list
        fetchServices()
      } catch (error) {
        console.error("Error deleting service:", error)
        toast({
          title: "Hata",
          description: "Hizmet silinirken bir hata oluştu.",
          variant: "destructive",
        })
      } finally {
        setIsDeleteDialogOpen(false)
        setServiceToDelete(null)
      }
    }
  }

  const handleServiceChange = (field: string, value: any) => {
    setCurrentService({ ...currentService, [field]: value })
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Function to render icon dynamically
  const renderIcon = (iconName: string) => {
    const iconMap: Record<string, React.ElementType> = {
      Zap,
      Lock,
      Cpu,
      Shield,
      Wrench,
      CheckCircle,
      Wifi,
      Server,
      Database,
      HardDrive,
      Monitor,
      Smartphone,
    }

    const IconComponent = iconMap[iconName]
    if (!IconComponent) return null
    return <IconComponent className="h-5 w-5" />
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
          <h1 className="text-2xl font-bold tracking-tight">Hizmetlerimiz</h1>
          <p className="text-slate-500">Sunduğunuz hizmetleri yönetin.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={fetchServices}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Yenile
          </Button>
          <Button onClick={handleAddService}>
            <Plus className="mr-2 h-4 w-4" />
            Yeni Hizmet Ekle
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle>Tüm Hizmetler</CardTitle>
              <CardDescription>Toplam {services.length} hizmet bulundu.</CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <Input
                placeholder="Hizmetlerde ara..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 w-full md:w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {filteredServices.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              {searchQuery ? "Aramanızla eşleşen hizmet bulunamadı." : "Henüz hizmet bulunmuyor."}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">İkon</TableHead>
                    <TableHead>Başlık</TableHead>
                    <TableHead className="hidden md:table-cell">Açıklama</TableHead>
                    <TableHead className="w-[100px]">Sıra</TableHead>
                    <TableHead className="w-[100px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredServices.map((service) => (
                    <TableRow key={service.id}>
                      <TableCell>
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          {renderIcon(service.icon)}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{service.title}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="line-clamp-1">{service.description}</div>
                      </TableCell>
                      <TableCell>{service.order_number}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" onClick={() => handleEditService(service)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDeleteService(service.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Service Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{isNewService ? "Yeni Hizmet Ekle" : "Hizmeti Düzenle"}</DialogTitle>
            <DialogDescription>Hizmet bilgilerini düzenleyin. Tüm alanlar zorunludur.</DialogDescription>
          </DialogHeader>

          {currentService && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="service-title">Başlık</Label>
                  <Input
                    id="service-title"
                    value={currentService.title}
                    onChange={(e) => handleServiceChange("title", e.target.value)}
                    placeholder="Hizmet başlığı"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service-description">Kısa Açıklama</Label>
                  <Textarea
                    id="service-description"
                    value={currentService.description}
                    onChange={(e) => handleServiceChange("description", e.target.value)}
                    placeholder="Hizmet kısa açıklaması"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service-details">Detaylar</Label>
                  <Textarea
                    id="service-details"
                    value={currentService.details}
                    onChange={(e) => handleServiceChange("details", e.target.value)}
                    placeholder="Hizmet detayları (virgülle ayırın)"
                    rows={3}
                  />
                  <p className="text-xs text-slate-500">
                    Örnek: Elektrik tesisatı kurulumu, Arıza tespiti ve onarımı, Aydınlatma sistemleri
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service-icon">İkon</Label>
                  <Select value={currentService.icon} onValueChange={(value) => handleServiceChange("icon", value)}>
                    <SelectTrigger id="service-icon">
                      <SelectValue placeholder="İkon seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableIcons.map((icon) => (
                        <SelectItem key={icon} value={icon}>
                          <div className="flex items-center gap-2">
                            {renderIcon(icon)}
                            <span>{icon}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service-image">Görsel URL</Label>
                  <div className="flex gap-2">
                    <Input
                      id="service-image"
                      value={currentService.image_url}
                      onChange={(e) => handleServiceChange("image_url", e.target.value)}
                      placeholder="Görsel URL'si"
                    />
                    <Button variant="outline" size="icon">
                      <ImageIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-slate-500">Önerilen boyut: 600x400 piksel</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-100 rounded-lg overflow-hidden h-48">
                  {currentService.image_url ? (
                    <img
                      src={currentService.image_url || "/placeholder.svg"}
                      alt="Hizmet Görseli"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-slate-400">
                      <ImageIcon className="h-12 w-12 mb-2" />
                      <span>Görsel URL'si girin</span>
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-lg border p-4">
                  <h3 className="font-medium mb-4">Önizleme</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      {renderIcon(currentService.icon)}
                    </div>
                    <div>
                      <h4 className="font-medium">{currentService.title || "Hizmet Başlığı"}</h4>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    {currentService.description || "Hizmet açıklaması burada görünecek."}
                  </p>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Detaylar:</h5>
                    <ul className="space-y-1">
                      {currentService.details ? (
                        currentService.details.split(",").map((detail: string, index: number) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                            <div className="h-4 w-4 text-blue-500">{renderIcon("CheckCircle")}</div>
                            <span>{detail.trim()}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-sm text-slate-400">Detaylar burada listelenecek</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              İptal
            </Button>
            <Button onClick={handleSaveService} disabled={isSaving}>
              {isSaving ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Kaydediliyor
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  {isNewService ? "Hizmeti Ekle" : "Değişiklikleri Kaydet"}
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hizmeti Sil</DialogTitle>
            <DialogDescription>
              Bu hizmeti silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              İptal
            </Button>
            <Button variant="destructive" onClick={confirmDeleteService}>
              Sil
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  )
}

