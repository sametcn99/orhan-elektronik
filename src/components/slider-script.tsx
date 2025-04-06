"use client"

import { useEffect } from "react"

export function SliderScript() {
  useEffect(() => {
    const slides = document.querySelectorAll(".slide")
    const indicators = document.querySelectorAll("[data-index]")
    let currentSlide = 0
    let slideInterval: NodeJS.Timeout

    const showSlide = (index: number) => {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add("opacity-100")
          slide.classList.remove("opacity-0")
        } else {
          slide.classList.remove("opacity-100")
          slide.classList.add("opacity-0")
        }
      })

      indicators.forEach((indicator, i) => {
        if (i === index) {
          indicator.classList.add("bg-white")
          indicator.classList.remove("bg-white/50")
        } else {
          indicator.classList.remove("bg-white")
          indicator.classList.add("bg-white/50")
        }
      })
    }

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length
      showSlide(currentSlide)
    }

    const startSlideshow = () => {
      slideInterval = setInterval(nextSlide, 5000)
    }

    // Add click event to indicators
    indicators.forEach((indicator) => {
      indicator.addEventListener("click", () => {
        const index = Number.parseInt(indicator.getAttribute("data-index") || "0")
        currentSlide = index
        showSlide(currentSlide)

        // Reset interval
        clearInterval(slideInterval)
        startSlideshow()
      })
    })

    // Start slideshow
    startSlideshow()

    // Cleanup
    return () => {
      clearInterval(slideInterval)
    }
  }, [])

  return null
}

