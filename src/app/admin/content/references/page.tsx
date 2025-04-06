"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { createClientSupabaseClient } from "@/src/lib/supabase"
import { Save, Plus, Trash2, Edit, RefreshCw, ImageIcon, Search } from "lucide-react"

import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
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

export default function ReferencesPage() {
  const [references, setReferences] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [referenceToDelete, setReferenceToDelete] = useState<number | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentReference, setCurrentReference] = useState<any>(null)
  const [isNewReference, setIsNewReference] = useState(false)

  const supabase = createClientSupabaseClient()

  useEffect(() => {
    fetchReferences()
  }, [])

  const fetchReferences = async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase
        .from("reference_companies")
        .select("*")
        .order("order_number", { ascending: true })

      if (error) throw error
      setReferences(data || [])
    } catch (error) {
      console.error("Error fetching references:", error)
      toast({
        title: "Hata",
        description: "Referanslar yüklenirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveReference = async () => {
    setIsSaving(true)
    try {
      // Validate reference
      if (!currentReference.name || !currentReference.logo_url) {
        toast({
          title: "Eksik bilgiler",
          description: "Lütfen tüm alanları doldurun.",
          variant: "destructive",
        })
        setIsSaving(false)
        return
      }

      if (isNewReference) {
        // Get the highest order number and add 1
        const maxOrder = references.length > 0 ? Math.max(...references.map((ref) => ref.order_number)) : 0

        // Add new reference
        const { data, error } = await supabase
          .from("reference_companies")
          .insert({
            ...currentReference,
            order_number: maxOrder + 1,
          })
          .select()

        if (error) throw error

        toast({
          title: "Referans eklendi",
          description: "Yeni referans başarıyla eklendi.",
        })
      } else {
        // Update existing reference
        const { error } = await supabase
          .from("reference_companies")
          .update(currentReference)
          .eq("id", currentReference.id)

        if (error) throw error

        toast({
          title: "Referans güncellendi",
          description: "Referans başarıyla güncellendi.",
        })
      }

      // Refresh the references list
      fetchReferences()
      setIsEditDialogOpen(false)
    } catch (error) {
      console.error("Error saving reference:", error)
      toast({
        title: "Hata",
        description: "Referans kaydedilirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleAddReference = () => {
    setCurrentReference({
      name: "",
      logo_url: "",
    })
    setIsNewReference(true)
    setIsEditDialogOpen(true)
  }

  const handleEditReference = (reference: any) => {
    setCurrentReference({ ...reference })
    setIsNewReference(false)
    setIsEditDialogOpen(true)
  }

  const handleDeleteReference = (referenceId: number) => {
    setReferenceToDelete(referenceId)
    setIsDeleteDialogOpen(true)
  }

  const confirmDeleteReference = async () => {
    if (referenceToDelete !== null) {
      try {
        const { error } = await supabase.from("reference_companies").delete().eq("id", referenceToDelete)

        if (error) throw error

        toast({
          title: "Referans silindi",
          description: "Referans başarıyla silindi.",
        })

        // Refresh the references list
        fetchReferences()
      } catch (error) {
        console.error("Error deleting reference:", error)
        toast({
          title: "Hata",
          description: "Referans silinirken bir hata oluştu.",
          variant: "destructive",
        })
      } finally {
        setIsDeleteDialogOpen(false)
        setReferenceToDelete(null)
      }
    }
  }

  const handleReferenceChange = (field: string, value: any) => {
    setCurrentReference({ ...currentReference, [field]: value })
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const filteredReferences = references.filter((reference) =>
    reference.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
          <h1 className="text-2xl font-bold tracking-tight">Referanslarımız</h1>
          <p className="text-slate-500">Çalıştığınız kurumları ve firmaları yönetin.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={fetchReferences}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Yenile
          </Button>
          <Button onClick={handleAddReference}>
            <Plus className="mr-2 h-4 w-4" />
            Yeni Referans Ekle
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle>Tüm Referanslar</CardTitle>
              <CardDescription>Toplam {references.length} referans bulundu.</CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <Input
                placeholder="Referanslarda ara..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 w-full md:w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {filteredReferences.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              {searchQuery ? "Aramanızla eşleşen referans bulunamadı." : "Henüz referans bulunmuyor."}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">Logo</TableHead>
                    <TableHead>Firma Adı</TableHead>
                    <TableHead className="w-[100px]">Sıra</TableHead>
                    <TableHead className="w-[100px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReferences.map((reference) => (
                    <TableRow key={reference.id}>
                      <TableCell>
                        <div className="h-12 w-12 rounded-md overflow-hidden">
                          <img
                            src={reference.logo_url || "/placeholder.svg"}
                            alt={reference.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{reference.name}</TableCell>
                      <TableCell>{reference.order_number}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" onClick={() => handleEditReference(reference)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDeleteReference(reference.id)}>
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

      {/* Edit Reference Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{isNewReference ? "Yeni Referans Ekle" : "Referansı Düzenle"}</DialogTitle>
            <DialogDescription>Referans bilgilerini düzenleyin. Tüm alanlar zorunludur.</DialogDescription>
          </DialogHeader>

          {currentReference && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reference-name">Firma Adı</Label>
                <Input
                  id="reference-name"
                  value={currentReference.name}
                  onChange={(e) => handleReferenceChange("name", e.target.value)}
                  placeholder="Firma adı"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reference-logo">Logo URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="reference-logo"
                    value={currentReference.logo_url}
                    onChange={(e) => handleReferenceChange("logo_url", e.target.value)}
                    placeholder="Logo URL'si"
                  />
                  <Button variant="outline" size="icon">
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-slate-500">Önerilen boyut: 100x100 piksel</p>
              </div>

              <div className="bg-slate-100 rounded-lg overflow-hidden h-32 flex items-center justify-center">
                {currentReference.logo_url ? (
                  <img
                    src={currentReference.logo_url || "/placeholder.svg"}
                    alt="Logo Önizleme"
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-slate-400">
                    <ImageIcon className="h-8 w-8 mb-2" />
                    <span>Logo URL'si girin</span>
                  </div>
                )}
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              İptal
            </Button>
            <Button onClick={handleSaveReference} disabled={isSaving}>
              {isSaving ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Kaydediliyor
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  {isNewReference ? "Referansı Ekle" : "Değişiklikleri Kaydet"}
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
            <DialogTitle>Referansı Sil</DialogTitle>
            <DialogDescription>
              Bu referansı silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              İptal
            </Button>
            <Button variant="destructive" onClick={confirmDeleteReference}>
              Sil
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  )
}

