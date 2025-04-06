import type React from "react"
import {
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

interface Feature {
  id: number
  title: string
  description: string
  icon: string
  order_number: number
}

export function FeaturesSection({ features }: { features: Feature[] }) {
  if (!features || features.length === 0) {
    return null
  }

  // Map icon names to Lucide React components
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

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Uzman Ekibimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Profesyonel ekibimizle kaliteli hizmet sunuyoruz.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Shield

            return (
              <div key={feature.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

