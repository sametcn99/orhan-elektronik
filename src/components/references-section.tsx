interface Reference {
  id: number
  name: string
  logo_url: string
  order_number: number
}

export function ReferencesSection({ references }: { references: Reference[] }) {
  if (!references || references.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Referanslarımız</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Yılların tecrübesi ve güveniyle hizmet verdiğimiz değerli müşterilerimiz.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {references.map((reference) => (
            <div key={reference.id} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-32">
              <img
                src={reference.logo_url || "/placeholder.svg"}
                alt={reference.name}
                className="max-h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

