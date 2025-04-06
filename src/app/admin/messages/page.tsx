"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { createClientSupabaseClient } from "@/src/lib/supabase"
import { ArrowUpDown, MoreHorizontal, Trash2, Eye, Search, RefreshCw, CheckCircle } from "lucide-react"

import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/src/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Badge } from "@/src/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog"
import { toast } from "@/src/components/ui/use-toast"
import { Toaster } from "@/src/components/ui/toaster"

export default function MessagesPage() {
  const [messages, setMessages] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedMessage, setSelectedMessage] = useState<any>(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [messageToDelete, setMessageToDelete] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState("created_at")
  const [sortOrder, setSortOrder] = useState("desc")

  const supabase = createClientSupabaseClient()

  useEffect(() => {
    fetchMessages()
  }, [sortBy, sortOrder])

  const fetchMessages = async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order(sortBy, { ascending: sortOrder === "asc" })

      if (error) throw error

      setMessages(data || [])
    } catch (error) {
      console.error("Error fetching messages:", error)
      toast({
        title: "Hata",
        description: "Mesajlar yüklenirken bir hata oluştu.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("desc")
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleViewMessage = (message: any) => {
    setSelectedMessage(message)
    setIsViewDialogOpen(true)
  }

  const handleDeleteClick = (messageId: number) => {
    setMessageToDelete(messageId)
    setIsDeleteDialogOpen(true)
  }

  const handleDeleteMessage = async () => {
    if (messageToDelete === null) return

    try {
      const { error } = await supabase.from("messages").delete().eq("id", messageToDelete)

      if (error) throw error

      setMessages(messages.filter((m) => m.id !== messageToDelete))
      setIsDeleteDialogOpen(false)
      setMessageToDelete(null)

      toast({
        title: "Mesaj silindi",
        description: "Mesaj başarıyla silindi.",
      })
    } catch (error) {
      console.error("Error deleting message:", error)
      toast({
        title: "Hata",
        description: "Mesaj silinirken bir hata oluştu.",
        variant: "destructive",
      })
    }
  }

  const handleMarkAsRead = async (messageId: number) => {
    try {
      const { error } = await supabase.from("messages").update({ status: "read" }).eq("id", messageId)

      if (error) throw error

      // Update local state
      setMessages(messages.map((msg) => (msg.id === messageId ? { ...msg, status: "read" } : msg)))

      if (selectedMessage && selectedMessage.id === messageId) {
        setSelectedMessage({ ...selectedMessage, status: "read" })
      }

      toast({
        title: "Durum güncellendi",
        description: "Mesaj okundu olarak işaretlendi.",
      })
    } catch (error) {
      console.error("Error updating message status:", error)
      toast({
        title: "Hata",
        description: "Mesaj durumu güncellenirken bir hata oluştu.",
        variant: "destructive",
      })
    }
  }

  const filteredMessages = messages.filter(
    (message) =>
      message.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.subject?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.message?.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge className="bg-blue-500">Yeni</Badge>
      case "read":
        return <Badge variant="outline">Okundu</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Mesajlar</h1>
        <p className="text-slate-500">Müşterilerinizden gelen mesajları yönetin.</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle>Tüm Mesajlar</CardTitle>
              <CardDescription>Toplam {messages.length} mesaj bulundu.</CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <Input
                  placeholder="Mesajlarda ara..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="pl-10 w-full md:w-64"
                />
              </div>
              <Button variant="outline" onClick={fetchMessages}>
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              {searchQuery ? "Aramanızla eşleşen mesaj bulunamadı." : "Henüz mesaj bulunmuyor."}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("name")}
                        className="flex items-center gap-1 p-0 h-auto font-medium"
                      >
                        Gönderen
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("subject")}
                        className="flex items-center gap-1 p-0 h-auto font-medium"
                      >
                        Konu
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead className="hidden md:table-cell">Mesaj</TableHead>
                    <TableHead className="w-[100px]">Durum</TableHead>
                    <TableHead className="w-[150px]">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("created_at")}
                        className="flex items-center gap-1 p-0 h-auto font-medium"
                      >
                        Tarih
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead className="w-[100px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMessages.map((message) => (
                    <TableRow key={message.id}>
                      <TableCell className="font-medium">
                        <div>{message.name}</div>
                        <div className="text-sm text-slate-500">{message.email}</div>
                      </TableCell>
                      <TableCell>{message.subject || "Konu belirtilmemiş"}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="line-clamp-1">{message.message}</div>
                      </TableCell>
                      <TableCell>{getStatusBadge(message.status)}</TableCell>
                      <TableCell>{new Date(message.created_at).toLocaleDateString("tr-TR")}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Menü aç</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleViewMessage(message)}>
                              <Eye className="mr-2 h-4 w-4" />
                              <span>Görüntüle</span>
                            </DropdownMenuItem>
                            {message.status === "new" && (
                              <DropdownMenuItem onClick={() => handleMarkAsRead(message.id)}>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                <span>Okundu İşaretle</span>
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem onClick={() => handleDeleteClick(message.id)}>
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Sil</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* View Message Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Mesaj Detayları</DialogTitle>
            <DialogDescription>
              {selectedMessage && new Date(selectedMessage.created_at).toLocaleString("tr-TR")}
            </DialogDescription>
          </DialogHeader>
          {selectedMessage && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-medium text-slate-500">Durum</h4>
                  {getStatusBadge(selectedMessage.status)}
                </div>
                {selectedMessage.status === "new" && (
                  <Button size="sm" variant="outline" onClick={() => handleMarkAsRead(selectedMessage.id)}>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Okundu İşaretle
                  </Button>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-slate-500">Gönderen</h4>
                  <p>{selectedMessage.name}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500">E-posta</h4>
                  <p>{selectedMessage.email}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500">Telefon</h4>
                  <p>{selectedMessage.phone || "Belirtilmemiş"}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500">Konu</h4>
                  <p>{selectedMessage.subject || "Belirtilmemiş"}</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-500 mb-1">Mesaj</h4>
                <div className="p-3 bg-slate-50 rounded-md">
                  <p>{selectedMessage.message}</p>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
              Kapat
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Mesajı Sil</DialogTitle>
            <DialogDescription>Bu mesajı silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              İptal
            </Button>
            <Button variant="destructive" onClick={handleDeleteMessage}>
              Sil
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  )
}

