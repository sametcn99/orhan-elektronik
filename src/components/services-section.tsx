import type React from "react"
import {
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

interface Service {
  id: number
  title: string
  description: string
  icon: string
  details: string
  image_url: string
  order_number: number
}

export function ServicesSection({ services }: { services: Service[] }) {
  if (!services || services.length === 0) {
    return null
  }

  // Map icon names to Lucide React components
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

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Hizmetlerimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Profesyonel çözümlerle ihtiyaçlarınıza cevap veriyoruz.</p>
        </div>

        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon] || Zap
          const isEven = index % 2 === 0

          return (
            <div
              key={service.id}
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center mb-16 last:mb-0`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={service.image_url || "/placeholder.svg"}
                  alt={service.title}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <IconComponent className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.details.split(",").map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{detail.trim()}</span>
                    </div>
                  ))}
                </div>

                <Button>Detaylı Bilgi</Button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

