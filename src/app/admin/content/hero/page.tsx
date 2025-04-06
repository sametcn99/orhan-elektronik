"use client"

import { useState, useEffect } from "react"
import { createClientSupabaseClient } from "@/src/lib/supabase"
import { Save, Plus, Trash2, MoveUp, MoveDown, RefreshCw, ImageIcon } from "lucide-react"

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

export default function HeroContentPage() {
  const [slides, setSlides] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [slideToDelete, setSlideToDelete] = useState<number | null>(null)

  const supabase = createClientSupabaseClient()

  useEffect(() => {
    fetchSlides()
  }, [])

  const fetchSlides = async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.from("slides").select("*").order("order_number", { ascending: true })

      if (error) throw error

      if (data && data.length > 0) {
        setSlides(data)
      } else {
        // Eğer veri yoksa varsayılan slide'lar ekleyelim
        setSlides([
          {
            title: "Profesyonel Elektrik ve Elektronik Çözümleri",
            description:
              "Orhan Elektrik Elektronik olarak, kaliteli hizmet ve müşteri memnuniyeti odaklı çalışmalarımızla yanınızdayız.",
            image_url: "/placeholder.svg?height=800&width=1920",
            order_number: 1,
          },
        ])
      }
    } catch (error) {
      console.error("Error fetching slides:", error)
      toast({
        title: "Hata",
        description: "Slider içeriği yüklenirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveSlides = async () => {
    setIsSaving(true)
    try {
      // Validate slides
      const invalidSlides = slides.filter((slide) => !slide.title || !slide.description || !slide.image_url)
      if (invalidSlides.length > 0) {
        toast({
          title: "Eksik bilgiler",
          description: "Lütfen tüm slider alanlarını doldurun.",
          variant: "destructive",
        })
        setIsSaving(false)
        return
      }

      // Önce tüm mevcut slide'ları silelim
      const { error: deleteError } = await supabase.from("slides").delete().not("id", "is", null)

      if (deleteError) throw deleteError

      // Prepare slides for insertion
      const slidesToInsert = slides.map((slide, index) => {
        // Create a new object without the id field for new slides
        const slideData: any = {
          title: slide.title,
          description: slide.description,
          image_url: slide.image_url,
          order_number: index + 1,
        }

        // Only include id if it's an existing slide (has a valid id)
        if (slide.id && typeof slide.id === "number") {
          slideData.id = slide.id
        }

        return slideData
      })

      // Insert all slides
      const { error: insertError } = await supabase.from("slides").insert(slidesToInsert)

      if (insertError) throw insertError

      // Show success toast
      toast({
        title: "Değişiklikler kaydedildi",
        description: "Slider içeriği başarıyla güncellendi.",
      })

      // Yeniden yükleyelim
      fetchSlides()
    } catch (error) {
      console.error("Error saving slides:", error)
      toast({
        title: "Hata",
        description: "Slider içeriği kaydedilirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleAddSlide = () => {
    const newSlide = {
      title: "",
      description: "",
      image_url: "/placeholder.svg?height=800&width=1920",
      order_number: slides.length + 1,
    }
    setSlides([...slides, newSlide])
  }

  const handleDeleteSlide = (index: number) => {
    setSlideToDelete(index)
    setIsDeleteDialogOpen(true)
  }

  const confirmDeleteSlide = () => {
    if (slideToDelete !== null) {
      const newSlides = [...slides]
      newSlides.splice(slideToDelete, 1)
      setSlides(newSlides)
      setIsDeleteDialogOpen(false)
      setSlideToDelete(null)

      toast({
        title: "Slide silindi",
        description: "Slider öğesi başarıyla silindi.",
      })
    }
  }

  const handleMoveSlide = (index: number, direction: "up" | "down") => {
    if ((direction === "up" && index === 0) || (direction === "down" && index === slides.length - 1)) {
      return
    }

    const newSlides = [...slides]
    const newIndex = direction === "up" ? index - 1 : index + 1

    // Swap slides
    ;[newSlides[index], newSlides[newIndex]] = [newSlides[newIndex], newSlides[index]]

    setSlides(newSlides)
  }

  const handleSlideChange = (index: number, field: string, value: string) => {
    const newSlides = [...slides]
    newSlides[index] = { ...newSlides[index], [field]: value }
    setSlides(newSlides)
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
          <h1 className="text-2xl font-bold tracking-tight">Hero Bölümü</h1>
          <p className="text-slate-500">Ana sayfa slider içeriğini düzenleyin.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={fetchSlides}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Yenile
          </Button>
          <Button onClick={handleSaveSlides} disabled={isSaving}>
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

      <Card>
        <CardHeader>
          <CardTitle>Slider İçeriği</CardTitle>
          <CardDescription>
            Ana sayfada gösterilecek slider içeriğini düzenleyin. En fazla 5 slide ekleyebilirsiniz.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {slides.map((slide, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Slide {index + 1}</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleMoveSlide(index, "up")}
                      disabled={index === 0}
                    >
                      <MoveUp className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleMoveSlide(index, "down")}
                      disabled={index === slides.length - 1}
                    >
                      <MoveDown className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDeleteSlide(index)}
                      disabled={slides.length <= 1}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`slide-${index}-title`}>Başlık</Label>
                      <Input
                        id={`slide-${index}-title`}
                        value={slide.title}
                        onChange={(e) => handleSlideChange(index, "title", e.target.value)}
                        placeholder="Slide başlığı"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`slide-${index}-description`}>Açıklama</Label>
                      <Textarea
                        id={`slide-${index}-description`}
                        value={slide.description}
                        onChange={(e) => handleSlideChange(index, "description", e.target.value)}
                        placeholder="Slide açıklaması"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`slide-${index}-image`}>Görsel URL</Label>
                      <div className="flex gap-2">
                        <Input
                          id={`slide-${index}-image`}
                          value={slide.image_url}
                          onChange={(e) => handleSlideChange(index, "image_url", e.target.value)}
                          placeholder="Görsel URL'si"
                        />
                        <Button variant="outline" size="icon">
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-slate-500">Önerilen boyut: 1920x800 piksel</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center bg-slate-100 rounded-lg overflow-hidden h-64">
                    {slide.image_url ? (
                      <img
                        src={slide.image_url || "/placeholder.svg"}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center text-slate-400">
                        <ImageIcon className="h-12 w-12 mb-2" />
                        <span>Görsel URL'si girin</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {slides.length < 5 && (
              <Button variant="outline" className="w-full border-dashed" onClick={handleAddSlide}>
                <Plus className="mr-2 h-4 w-4" />
                Yeni Slide Ekle
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Slide'ı Sil</DialogTitle>
            <DialogDescription>
              Bu slide'ı silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              İptal
            </Button>
            <Button variant="destructive" onClick={confirmDeleteSlide}>
              Sil
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  )
}

