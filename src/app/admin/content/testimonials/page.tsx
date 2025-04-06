"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { createClientSupabaseClient } from "@/src/lib/supabase"
import { Save, Plus, Trash2, Edit, RefreshCw, Search, Star } from "lucide-react"

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

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [testimonialToDelete, setTestimonialToDelete] = useState<number | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState<any>(null)
  const [isNewTestimonial, setIsNewTestimonial] = useState(false)

  const supabase = createClientSupabaseClient()

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.from("testimonials").select("*").order("order_number", { ascending: true })

      if (error) throw error
      setTestimonials(data || [])
    } catch (error) {
      console.error("Error fetching testimonials:", error)
      toast({
        title: "Hata",
        description: "Yorumlar yüklenirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveTestimonial = async () => {
    setIsSaving(true)
    try {
      // Validate testimonial
      if (
        !currentTestimonial.name ||
        !currentTestimonial.position ||
        !currentTestimonial.content ||
        !currentTestimonial.rating
      ) {
        toast({
          title: "Eksik bilgiler",
          description: "Lütfen tüm alanları doldurun.",
          variant: "destructive",
        })
        setIsSaving(false)
        return
      }

      if (isNewTestimonial) {
        // Get the highest order number and add 1
        const maxOrder = testimonials.length > 0 ? Math.max(...testimonials.map((t) => t.order_number)) : 0

        // Add new testimonial
        const { data, error } = await supabase
          .from("testimonials")
          .insert({
            ...currentTestimonial,
            order_number: maxOrder + 1,
          })
          .select()

        if (error) throw error

        toast({
          title: "Yorum eklendi",
          description: "Yeni yorum başarıyla eklendi.",
        })
      } else {
        // Update existing testimonial
        const { error } = await supabase.from("testimonials").update(currentTestimonial).eq("id", currentTestimonial.id)

        if (error) throw error

        toast({
          title: "Yorum güncellendi",
          description: "Yorum başarıyla güncellendi.",
        })
      }

      // Refresh the testimonials list
      fetchTestimonials()
      setIsEditDialogOpen(false)
    } catch (error) {
      console.error("Error saving testimonial:", error)
      toast({
        title: "Hata",
        description: "Yorum kaydedilirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleAddTestimonial = () => {
    setCurrentTestimonial({
      name: "",
      position: "",
      content: "",
      rating: 5,
    })
    setIsNewTestimonial(true)
    setIsEditDialogOpen(true)
  }

  const handleEditTestimonial = (testimonial: any) => {
    setCurrentTestimonial({ ...testimonial })
    setIsNewTestimonial(false)
    setIsEditDialogOpen(true)
  }

  const handleDeleteTestimonial = (testimonialId: number) => {
    setTestimonialToDelete(testimonialId)
    setIsDeleteDialogOpen(true)
  }

  const confirmDeleteTestimonial = async () => {
    if (testimonialToDelete !== null) {
      try {
        const { error } = await supabase.from("testimonials").delete().eq("id", testimonialToDelete)

        if (error) throw error

        toast({
          title: "Yorum silindi",
          description: "Yorum başarıyla silindi.",
        })

        // Refresh the testimonials list
        fetchTestimonials()
      } catch (error) {
        console.error("Error deleting testimonial:", error)
        toast({
          title: "Hata",
          description: "Yorum silinirken bir hata oluştu.",
          variant: "destructive",
        })
      } finally {
        setIsDeleteDialogOpen(false)
        setTestimonialToDelete(null)
      }
    }
  }

  const handleTestimonialChange = (field: string, value: any) => {
    setCurrentTestimonial({ ...currentTestimonial, [field]: value })
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const filteredTestimonials = testimonials.filter(
    (testimonial) =>
      testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.content.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))
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
          <h1 className="text-2xl font-bold tracking-tight">Yorumlar</h1>
          <p className="text-slate-500">Müşteri yorumlarını yönetin.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={fetchTestimonials}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Yenile
          </Button>
          <Button onClick={handleAddTestimonial}>
            <Plus className="mr-2 h-4 w-4" />
            Yeni Yorum Ekle
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle>Tüm Yorumlar</CardTitle>
              <CardDescription>Toplam {testimonials.length} yorum bulundu.</CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <Input
                placeholder="Yorumlarda ara..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 w-full md:w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {filteredTestimonials.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              {searchQuery ? "Aramanızla eşleşen yorum bulunamadı." : "Henüz yorum bulunmuyor."}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Müşteri</TableHead>
                    <TableHead className="hidden md:table-cell">Pozisyon</TableHead>
                    <TableHead className="hidden md:table-cell">Yorum</TableHead>
                    <TableHead className="w-[120px]">Değerlendirme</TableHead>
                    <TableHead className="w-[80px]">Sıra</TableHead>
                    <TableHead className="w-[100px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTestimonials.map((testimonial) => (
                    <TableRow key={testimonial.id}>
                      <TableCell className="font-medium">{testimonial.name}</TableCell>
                      <TableCell className="hidden md:table-cell">{testimonial.position}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="line-clamp-1">{testimonial.content}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex">{renderStars(testimonial.rating)}</div>
                      </TableCell>
                      <TableCell>{testimonial.order_number}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" onClick={() => handleEditTestimonial(testimonial)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDeleteTestimonial(testimonial.id)}>
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

      {/* Edit Testimonial Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{isNewTestimonial ? "Yeni Yorum Ekle" : "Yorumu Düzenle"}</DialogTitle>
            <DialogDescription>Yorum bilgilerini düzenleyin. Tüm alanlar zorunludur.</DialogDescription>
          </DialogHeader>

          {currentTestimonial && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="testimonial-name">Müşteri Adı</Label>
                <Input
                  id="testimonial-name"
                  value={currentTestimonial.name}
                  onChange={(e) => handleTestimonialChange("name", e.target.value)}
                  placeholder="Müşteri adı"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="testimonial-position">Pozisyon</Label>
                <Input
                  id="testimonial-position"
                  value={currentTestimonial.position}
                  onChange={(e) => handleTestimonialChange("position", e.target.value)}
                  placeholder="Müşteri pozisyonu"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="testimonial-content">Yorum</Label>
                <Textarea
                  id="testimonial-content"
                  value={currentTestimonial.content}
                  onChange={(e) => handleTestimonialChange("content", e.target.value)}
                  placeholder="Müşteri yorumu"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="testimonial-rating">Değerlendirme</Label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => handleTestimonialChange("rating", rating)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          rating <= currentTestimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-100 rounded-lg p-4">
                <h3 className="font-medium mb-2">Önizleme</h3>
                <div className="flex items-center gap-2 mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${
                          index < currentTestimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  "{currentTestimonial.content || "Müşteri yorumu burada görünecek."}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {currentTestimonial.name ? currentTestimonial.name.substring(0, 2).toUpperCase() : "AA"}
                  </div>
                  <div>
                    <h4 className="font-medium">{currentTestimonial.name || "Müşteri Adı"}</h4>
                    <p className="text-xs text-slate-500">{currentTestimonial.position || "Pozisyon"}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              İptal
            </Button>
            <Button onClick={handleSaveTestimonial} disabled={isSaving}>
              {isSaving ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Kaydediliyor
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  {isNewTestimonial ? "Yorumu Ekle" : "Değişiklikleri Kaydet"}
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
            <DialogTitle>Yorumu Sil</DialogTitle>
            <DialogDescription>Bu yorumu silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              İptal
            </Button>
            <Button variant="destructive" onClick={confirmDeleteTestimonial}>
              Sil
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  )
}

