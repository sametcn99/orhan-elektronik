"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/src/components/ui/button"

interface Testimonial {
  id: number
  name: string
  position: string
  content: string
  rating: number
  order_number: number
}

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>([])
  const [itemsPerView, setItemsPerView] = useState(3)

  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update visible testimonials when currentIndex or itemsPerView changes
  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return

    const endIndex = Math.min(currentIndex + itemsPerView, testimonials.length)
    setVisibleTestimonials(testimonials.slice(currentIndex, endIndex))
  }, [testimonials, currentIndex, itemsPerView])

  const nextSlide = () => {
    if (currentIndex + itemsPerView < testimonials.length) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Müşteri Yorumları</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Müşterilerimizin bizimle ilgili düşünceleri.</p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-1 min-w-0"
                style={{ minWidth: `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * 24) / itemsPerView}px)` }}
              >
                <div className="flex mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {testimonials.length > itemsPerView && (
            <div className="flex justify-center mt-8 gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                disabled={currentIndex + itemsPerView >= testimonials.length}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

