import { useState, useEffect, RefObject } from 'react'

export function useOnScreen(
  ref: RefObject<Element | null>,
  rootMargin = '0px',
) {
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true)
          observer.disconnect() // Trigger once
        }
      },
      { rootMargin },
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [ref, rootMargin])
  return isIntersecting
}
