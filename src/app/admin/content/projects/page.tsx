"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { createClient } from "@supabase/supabase-js"
import { Save, Plus, Trash2, Edit, RefreshCw, ImageIcon, Search } from "lucide-react"

import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Textarea } from "@/src/components/ui/textarea"
import { Badge } from "@/src/components/ui/badge"
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

// Create Supabase client
const supabaseUrl = "https://your-project-url.supabase.co"
const supabaseKey = "your-anon-key"
const supabase = createClient(supabaseUrl, supabaseKey)

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [projectToDelete, setProjectToDelete] = useState<number | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<any>(null)
  const [isNewProject, setIsNewProject] = useState(false)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    setIsLoading(true)
    try {
      // In a real app, you would fetch this from Supabase
      // For demo purposes, we'll use mock data
      const mockProjects = [
        {
          id: 1,
          title: "Ofis Kompleksi Elektrik Altyapı Projesi",
          category: "Elektrik Altyapı",
          description:
            "Ankara'da 5 katlı bir ofis kompleksinin tüm elektrik altyapısını yeniledik. Modern ve enerji tasarruflu sistemler kurduk.",
          image: "/placeholder.svg?height=400&width=600",
          featured: true,
          date: "2023-05-15",
        },
        {
          id: 2,
          title: "AVM Güvenlik Sistemleri Kurulumu",
          category: "Güvenlik Sistemleri",
          description:
            "İstanbul'daki büyük bir alışveriş merkezinin tüm güvenlik sistemlerini yeniledik. 200'den fazla kamera ve gelişmiş alarm sistemleri kurduk.",
          image: "/placeholder.svg?height=400&width=600",
          featured: true,
          date: "2023-04-20",
        },
        {
          id: 3,
          title: "Kurumsal Bilgisayar Ağı Kurulumu",
          category: "Teknik Servis",
          description:
            "Bir finans şirketinin 3 şubesindeki tüm bilgisayar ağını yeniledik ve güvenlik standartlarına uygun hale getirdik.",
          image: "/placeholder.svg?height=400&width=600",
          featured: true,
          date: "2023-03-10",
        },
        {
          id: 4,
          title: "Akıllı Ev Sistemleri Kurulumu",
          category: "Akıllı Sistemler",
          description:
            "Lüks bir villanın tüm akıllı ev sistemlerini kurduk. Aydınlatma, ısıtma, güvenlik ve eğlence sistemleri tek bir uygulama üzerinden kontrol edilebiliyor.",
          image: "/placeholder.svg?height=400&width=600",
          featured: false,
          date: "2023-02-05",
        },
        {
          id: 5,
          title: "Fabrika Otomasyon Sistemi",
          category: "Otomasyon",
          description:
            "Bir üretim tesisinin otomasyon sistemini yeniledik. Üretim verimliliği %30 arttı ve enerji tüketimi %20 azaldı.",
          image: "/placeholder.svg?height=400&width=600",
          featured: false,
          date: "2023-01-15",
        },
      ]

      setProjects(mockProjects)
    } catch (error) {
      console.error("Error fetching projects:", error)
      toast({
        title: "Hata",
        description: "Projeler yüklenirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveProject = async () => {
    setIsSaving(true)
    try {
      // Validate project
      if (!currentProject.title || !currentProject.description || !currentProject.image || !currentProject.category) {
        toast({
          title: "Eksik bilgiler",
          description: "Lütfen tüm alanları doldurun.",
          variant: "destructive",
        })
        setIsSaving(false)
        return
      }

      // In a real app, you would save this to Supabase
      // For demo purposes, we'll just update the state
      if (isNewProject) {
        // Add new project
        const newProject = {
          ...currentProject,
          id: Date.now(),
          date: new Date().toISOString().split("T")[0],
        }
        setProjects([...projects, newProject])

        toast({
          title: "Proje eklendi",
          description: "Yeni proje başarıyla eklendi.",
        })
      } else {
        // Update existing project
        const updatedProjects = projects.map((project) => (project.id === currentProject.id ? currentProject : project))
        setProjects(updatedProjects)

        toast({
          title: "Proje güncellendi",
          description: "Proje başarıyla güncellendi.",
        })
      }

      setIsEditDialogOpen(false)
    } catch (error) {
      console.error("Error saving project:", error)
      toast({
        title: "Hata",
        description: "Proje kaydedilirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleAddProject = () => {
    setCurrentProject({
      title: "",
      category: "",
      description: "",
      image: "",
      featured: false,
      date: new Date().toISOString().split("T")[0],
    })
    setIsNewProject(true)
    setIsEditDialogOpen(true)
  }

  const handleEditProject = (project: any) => {
    setCurrentProject({ ...project })
    setIsNewProject(false)
    setIsEditDialogOpen(true)
  }

  const handleDeleteProject = (projectId: number) => {
    setProjectToDelete(projectId)
    setIsDeleteDialogOpen(true)
  }

  const confirmDeleteProject = () => {
    if (projectToDelete !== null) {
      const newProjects = projects.filter((project) => project.id !== projectToDelete)
      setProjects(newProjects)
      setIsDeleteDialogOpen(false)
      setProjectToDelete(null)

      toast({
        title: "Proje silindi",
        description: "Proje başarıyla silindi.",
      })
    }
  }

  const handleProjectChange = (field: string, value: any) => {
    setCurrentProject({ ...currentProject, [field]: value })
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()),
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
          <h1 className="text-2xl font-bold tracking-tight">Projeler</h1>
          <p className="text-slate-500">Tamamlanan projelerinizi yönetin.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={fetchProjects}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Yenile
          </Button>
          <Button onClick={handleAddProject}>
            <Plus className="mr-2 h-4 w-4" />
            Yeni Proje Ekle
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle>Tüm Projeler</CardTitle>
              <CardDescription>Toplam {projects.length} proje bulundu.</CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <Input
                placeholder="Projelerde ara..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 w-full md:w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {filteredProjects.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              {searchQuery ? "Aramanızla eşleşen proje bulunamadı." : "Henüz proje bulunmuyor."}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">Görsel</TableHead>
                    <TableHead>Proje Adı</TableHead>
                    <TableHead className="hidden md:table-cell">Kategori</TableHead>
                    <TableHead className="hidden md:table-cell">Açıklama</TableHead>
                    <TableHead className="hidden md:table-cell w-[100px]">Tarih</TableHead>
                    <TableHead className="w-[100px]">Durum</TableHead>
                    <TableHead className="w-[100px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProjects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell>
                        <div className="h-12 w-12 rounded-md overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{project.title}</TableCell>
                      <TableCell className="hidden md:table-cell">{project.category}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="line-clamp-1">{project.description}</div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {new Date(project.date).toLocaleDateString("tr-TR")}
                      </TableCell>
                      <TableCell>
                        {project.featured ? (
                          <Badge className="bg-blue-500">Öne Çıkan</Badge>
                        ) : (
                          <Badge variant="outline">Normal</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" onClick={() => handleEditProject(project)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDeleteProject(project.id)}>
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

      {/* Edit Project Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{isNewProject ? "Yeni Proje Ekle" : "Projeyi Düzenle"}</DialogTitle>
            <DialogDescription>Proje bilgilerini düzenleyin. Tüm alanlar zorunludur.</DialogDescription>
          </DialogHeader>

          {currentProject && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="project-title">Proje Adı</Label>
                  <Input
                    id="project-title"
                    value={currentProject.title}
                    onChange={(e) => handleProjectChange("title", e.target.value)}
                    placeholder="Proje adı"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-category">Kategori</Label>
                  <Input
                    id="project-category"
                    value={currentProject.category}
                    onChange={(e) => handleProjectChange("category", e.target.value)}
                    placeholder="Proje kategorisi"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-description">Açıklama</Label>
                  <Textarea
                    id="project-description"
                    value={currentProject.description}
                    onChange={(e) => handleProjectChange("description", e.target.value)}
                    placeholder="Proje açıklaması"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-image">Görsel URL</Label>
                  <div className="flex gap-2">
                    <Input
                      id="project-image"
                      value={currentProject.image}
                      onChange={(e) => handleProjectChange("image", e.target.value)}
                      placeholder="Görsel URL'si"
                    />
                    <Button variant="outline" size="icon">
                      <ImageIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-slate-500">Önerilen boyut: 600x400 piksel</p>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="project-featured"
                    checked={currentProject.featured}
                    onChange={(e) => handleProjectChange("featured", e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <Label htmlFor="project-featured">Öne Çıkan Proje</Label>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-slate-100 rounded-lg overflow-hidden h-64">
                  {currentProject.image ? (
                    <img
                      src={currentProject.image || "/placeholder.svg"}
                      alt="Proje Görseli"
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
                  <h3 className="font-medium mb-2">Önizleme</h3>
                  <div className="space-y-2">
                    <p className="font-semibold">{currentProject.title || "Proje Adı"}</p>
                    <Badge>{currentProject.category || "Kategori"}</Badge>
                    <p className="text-sm text-slate-600 line-clamp-3">
                      {currentProject.description || "Proje açıklaması burada görünecek."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              İptal
            </Button>
            <Button onClick={handleSaveProject} disabled={isSaving}>
              {isSaving ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Kaydediliyor
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  {isNewProject ? "Projeyi Ekle" : "Değişiklikleri Kaydet"}
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
            <DialogTitle>Projeyi Sil</DialogTitle>
            <DialogDescription>
              Bu projeyi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              İptal
            </Button>
            <Button variant="destructive" onClick={confirmDeleteProject}>
              Sil
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  )
}

