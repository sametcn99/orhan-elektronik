"use client"

import type React from "react"

import { useState } from "react"
import { createClientSupabaseClient } from "@/src/lib/supabase"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { toast } from "@/src/components/ui/use-toast"
import { Toaster } from "@/src/components/ui/toaster"
import { Loader2 } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const supabase = createClientSupabaseClient()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.message) {
        toast({
          title: "Eksik bilgiler",
          description: "Lütfen adınızı, e-posta adresinizi ve mesajınızı girin.",
          variant: "destructive",
        })
        setIsSubmitting(false)
        return
      }

      // Submit to Supabase
      const { error } = await supabase.from("messages").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          status: "new",
          created_at: new Date().toISOString(),
        },
      ])

      if (error) throw error

      // Success
      setIsSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      toast({
        title: "Mesajınız gönderildi",
        description: "En kısa sürede size dönüş yapacağız.",
      })
    } catch (error) {
      console.error("Error submitting message:", error)
      toast({
        title: "Hata",
        description: "Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {isSuccess ? (
        <div className="bg-green-50 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2 text-green-700">Mesajınız Alındı!</h3>
          <p className="text-green-600 mb-4">Mesajınız için teşekkür ederiz. En kısa sürede size dönüş yapacağız.</p>
          <Button onClick={() => setIsSuccess(false)} className="bg-green-600 hover:bg-green-700">
            Yeni Mesaj Gönder
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">
                Adınız Soyadınız
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Adınız Soyadınız"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                E-posta Adresiniz
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="E-posta Adresiniz"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-slate-700">
              Telefon Numaranız
            </label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Telefon Numaranız"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-slate-700">
              Konu
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Mesajınızın Konusu"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-700">
              Mesajınız
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Mesajınızı buraya yazın..."
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-sky-400 hover:from-blue-600 hover:to-sky-500 text-white border-none"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Gönderiliyor...
              </>
            ) : (
              "Mesaj Gönder"
            )}
          </Button>
        </form>
      )}
      <Toaster />
    </>
  )
}

