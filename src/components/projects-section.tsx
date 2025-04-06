import { Button } from "@/src/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  category: string
  image_url: string
  featured: boolean
  date: string
  order_number: number
}

export function ProjectsSection({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Projelerimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Başarıyla tamamladığımız projelerimizden bazıları.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image_url || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500">{new Date(project.date).toLocaleDateString("tr-TR")}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <Button variant="outline" className="w-full">
                  Detayları Gör
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button>Tüm Projelerimiz</Button>
        </div>
      </div>
    </section>
  )
}

