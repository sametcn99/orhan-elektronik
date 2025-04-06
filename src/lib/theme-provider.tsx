"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "blue" | "purple" | "green" | "orange" | "red"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "blue",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({ children, defaultTheme = "blue" }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    // Apply theme CSS variables
    const root = document.documentElement

    // Reset all theme variables to default (blue)
    root.style.setProperty("--primary", "210 100% 50%")
    root.style.setProperty("--primary-foreground", "210 40% 98%")

    // Apply theme-specific variables
    switch (theme) {
      case "purple":
        root.style.setProperty("--primary", "270 100% 50%")
        root.style.setProperty("--primary-foreground", "270 40% 98%")
        break
      case "green":
        root.style.setProperty("--primary", "142 100% 50%")
        root.style.setProperty("--primary-foreground", "142 40% 98%")
        break
      case "orange":
        root.style.setProperty("--primary", "30 100% 50%")
        root.style.setProperty("--primary-foreground", "30 40% 98%")
        break
      case "red":
        root.style.setProperty("--primary", "0 100% 50%")
        root.style.setProperty("--primary-foreground", "0 40% 98%")
        break
      // Default is blue, already set
    }
  }, [theme])

  const value = {
    theme,
    setTheme,
  }

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

