import { useCallback } from 'react'

// Safe client-side hook for sending events to Umami without breaking SSR
export function useUmami() {
  const track = useCallback((event: string, data?: Record<string, unknown>) => {
    if (typeof window === 'undefined') return
    const client = (window as unknown as { umami?: unknown }).umami as
      | {
          track?: (e: string, d?: Record<string, unknown>) => void
          trackEvent?: (e: string, d?: Record<string, unknown>) => void
        }
      | undefined

    if (!client) return

    if (typeof client.trackEvent === 'function') {
      client.trackEvent(event, data)
      return
    }

    if (typeof client.track === 'function') {
      client.track(event, data)
    }
  }, [])

  return { track }
}
