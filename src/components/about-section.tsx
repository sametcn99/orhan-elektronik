import { Button } from "@/src/components/ui/button"
import { CheckCircle } from "lucide-react"

interface AboutData {
  id: number
  title: string
  description: string
  image_url: string
  features: any
}

export function AboutSection({ aboutData }: { aboutData: AboutData | null }) {
  if (!aboutData) {
    return null
  }

  // Parse features if it's a string
  let features = aboutData.features
  if (typeof features === "string") {
    try {
      features = JSON.parse(features)
    } catch (e) {
      features = []
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img
              src={aboutData.image_url || "/placeholder.svg"}
              alt="Hakkımızda"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{aboutData.title}</h2>
            <p className="text-gray-600 mb-6">{aboutData.description}</p>

            <div className="space-y-4 mb-6">
              {Array.isArray(features) &&
                features.map((feature: any, index: number) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
            </div>

            <Button>Daha Fazla Bilgi</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

