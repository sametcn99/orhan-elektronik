import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"

interface ContactData {
  id: number
  phone: string
  email: string
  address: string
  working_hours: string
  map_url: string
}

export function ContactSection({ contactData }: { contactData: ContactData | null }) {
  if (!contactData) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">İletişim</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Sorularınız için bizimle iletişime geçebilirsiniz.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Telefon</h3>
                  <p className="text-gray-600">{contactData.phone}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">E-posta</h3>
                  <p className="text-gray-600">{contactData.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Adres</h3>
                  <p className="text-gray-600">{contactData.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Çalışma Saatleri</h3>
                  <p className="text-gray-600">{contactData.working_hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-xl mb-4">Bize Mesaj Gönderin</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Adınız Soyadınız
                    </label>
                    <Input id="name" placeholder="Adınız Soyadınız" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-posta Adresiniz
                    </label>
                    <Input id="email" type="email" placeholder="E-posta Adresiniz" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon Numaranız
                    </label>
                    <Input id="phone" placeholder="Telefon Numaranız" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Konu
                    </label>
                    <Input id="subject" placeholder="Konu" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mesajınız
                  </label>
                  <Textarea id="message" placeholder="Mesajınız" rows={4} />
                </div>

                <Button type="submit" className="w-full">
                  Mesaj Gönder
                </Button>
              </form>
            </div>

            <div className="mt-6 rounded-lg overflow-hidden h-64 shadow-sm border border-gray-100">
              <img
                src={contactData.map_url || "/placeholder.svg"}
                alt="Harita"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

