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
  Search,
  Shield,
  Wrench,
  CheckCircle,
  Zap,
  Clock,
  Star,
  Award,
  Heart,
  ThumbsUp,
  Smile,
  Users,
  Settings,
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

export default function FeaturesPage() {
  const [features, setFeatures] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [featureToDelete, setFeatureToDelete] = useState<number | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentFeature, setCurrentFeature] = useState<any>(null)
  const [isNewFeature, setIsNewFeature] = useState(false)

  const supabase = createClientSupabaseClient()

  // Available icons for features
  const availableIcons = [
    "Shield",
    "Wrench",
    "CheckCircle",
    "Zap",
    "Clock",
    "Star",
    "Award",
    "Heart",
    "ThumbsUp",
    "Smile",
    "Users",
    "Settings",
  ]

  useEffect(() => {
    fetchFeatures()
  }, [])

  const fetchFeatures = async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.from("features").select("*").order("order_number", { ascending: true })

      if (error) throw error
      setFeatures(data || [])
    } catch (error) {
      console.error("Error fetching features:", error)
      toast({
        title: "Hata",
        description: "Özellikler yüklenirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveFeature = async () => {
    setIsSaving(true)
    try {
      // Validate feature
      if (!currentFeature.title || !currentFeature.description || !currentFeature.icon) {
        toast({
          title: "Eksik bilgiler",
          description: "Lütfen tüm alanları doldurun.",
          variant: "destructive",
        })
        setIsSaving(false)
        return
      }

      if (isNewFeature) {
        // Get the highest order number and add 1
        const maxOrder = features.length > 0 ? Math.max(...features.map((feat) => feat.order_number)) : 0

        // Add new feature
        const { data, error } = await supabase
          .from("features")
          .insert({
            ...currentFeature,
            order_number: maxOrder + 1,
          })
          .select()

        if (error) throw error

        toast({
          title: "Özellik eklendi",
          description: "Yeni özellik başarıyla eklendi.",
        })
      } else {
        // Update existing feature
        const { error } = await supabase.from("features").update(currentFeature).eq("id", currentFeature.id)

        if (error) throw error

        toast({
          title: "Özellik güncellendi",
          description: "Özellik başarıyla güncellendi.",
        })
      }

      // Refresh the features list
      fetchFeatures()
      setIsEditDialogOpen(false)
    } catch (error) {
      console.error("Error saving feature:", error)
      toast({
        title: "Hata",
        description: "Özellik kaydedilirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleAddFeature = () => {
    setCurrentFeature({
      title: "",
      description: "",
      icon: "Shield",
    })
    setIsNewFeature(true)
    setIsEditDialogOpen(true)
  }

  const handleEditFeature = (feature: any) => {
    setCurrentFeature({ ...feature })
    setIsNewFeature(false)
    setIsEditDialogOpen(true)
  }

  const handleDeleteFeature = (featureId: number) => {
    setFeatureToDelete(featureId)
    setIsDeleteDialogOpen(true)
  }

  const confirmDeleteFeature = async () => {
    if (featureToDelete !== null) {
      try {
        const { error } = await supabase.from("features").delete().eq("id", featureToDelete)

        if (error) throw error

        toast({
          title: "Özellik silindi",
          description: "Özellik başarıyla silindi.",
        })

        // Refresh the features list
        fetchFeatures()
      } catch (error) {
        console.error("Error deleting feature:", error)
        toast({
          title: "Hata",
          description: "Özellik silinirken bir hata oluştu.",
          variant: "destructive",
        })
      } finally {
        setIsDeleteDialogOpen(false)
        setFeatureToDelete(null)
      }
    }
  }

  const handleFeatureChange = (field: string, value: any) => {
    setCurrentFeature({ ...currentFeature, [field]: value })
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const filteredFeatures = features.filter(
    (feature) =>
      feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Function to render icon dynamically
  const renderIcon = (iconName: string) => {
    const iconMap: Record<string, React.ElementType> = {
      Shield,
      Wrench,
      CheckCircle,
      Zap,
      Clock,
      Star,
      Award,
      Heart,
      ThumbsUp,
      Smile,
      Users,
      Settings,
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
          <h1 className="text-2xl font-bold tracking-tight">Uzman Ekip</h1>
          <p className="text-slate-500">Ekibinizin özelliklerini ve avantajlarını yönetin.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={fetchFeatures}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Yenile
          </Button>
          <Button onClick={handleAddFeature}>
            <Plus className="mr-2 h-4 w-4" />
            Yeni Özellik Ekle
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle>Tüm Özellikler</CardTitle>
              <CardDescription>Toplam {features.length} özellik bulundu.</CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <Input
                placeholder="Özelliklerde ara..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 w-full md:w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {filteredFeatures.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              {searchQuery ? "Aramanızla eşleşen özellik bulunamadı." : "Henüz özellik bulunmuyor."}
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
                  {filteredFeatures.map((feature) => (
                    <TableRow key={feature.id}>
                      <TableCell>
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          {renderIcon(feature.icon)}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{feature.title}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="line-clamp-1">{feature.description}</div>
                      </TableCell>
                      <TableCell>{feature.order_number}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" onClick={() => handleEditFeature(feature)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDeleteFeature(feature.id)}>
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

      {/* Edit Feature Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{isNewFeature ? "Yeni Özellik Ekle" : "Özelliği Düzenle"}</DialogTitle>
            <DialogDescription>Özellik bilgilerini düzenleyin. Tüm alanlar zorunludur.</DialogDescription>
          </DialogHeader>

          {currentFeature && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="feature-title">Başlık</Label>
                <Input
                  id="feature-title"
                  value={currentFeature.title}
                  onChange={(e) => handleFeatureChange("title", e.target.value)}
                  placeholder="Özellik başlığı"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="feature-description">Açıklama</Label>
                <Textarea
                  id="feature-description"
                  value={currentFeature.description}
                  onChange={(e) => handleFeatureChange("description", e.target.value)}
                  placeholder="Özellik açıklaması"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="feature-icon">İkon</Label>
                <Select value={currentFeature.icon} onValueChange={(value) => handleFeatureChange("icon", value)}>
                  <SelectTrigger id="feature-icon">
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

              <div className="bg-slate-100 rounded-lg p-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  {renderIcon(currentFeature.icon)}
                </div>
                <div>
                  <h3 className="font-medium">{currentFeature.title || "Özellik Başlığı"}</h3>
                  <p className="text-sm text-slate-600">{currentFeature.description || "Özellik açıklaması"}</p>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              İptal
            </Button>
            <Button onClick={handleSaveFeature} disabled={isSaving}>
              {isSaving ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Kaydediliyor
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  {isNewFeature ? "Özelliği Ekle" : "Değişiklikleri Kaydet"}
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
            <DialogTitle>Özelliği Sil</DialogTitle>
            <DialogDescription>
              Bu özelliği silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              İptal
            </Button>
            <Button variant="destructive" onClick={confirmDeleteFeature}>
              Sil
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  )
}

