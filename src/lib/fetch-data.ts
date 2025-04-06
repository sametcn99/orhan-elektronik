import { createServerSupabaseClient } from "./supabase"

// Fetch all slides for the hero section
export async function fetchSlides() {
  const supabase = createServerSupabaseClient()
  const { data, error } = await supabase.from("slides").select("*").order("order_no", { ascending: true })

  if (error) {
    console.error("Error fetching slides:", error)
    return []
  }

  return data || []
}

// Fetch all reference companies
export async function fetchReferences() {
  const supabase = createServerSupabaseClient()
  const { data, error } = await supabase
    .from("reference_companies")
    .select("*")
    .order("order_no", { ascending: true })

  if (error) {
    console.error("Error fetching references:", error)
    return []
  }

  return data || []
}

// Fetch all features for the expert team section
export async function fetchFeatures() {
  const supabase = createServerSupabaseClient()
  const { data, error } = await supabase.from("features").select("*").order("order_no", { ascending: true })

  if (error) {
    console.error("Error fetching features:", error)
    return []
  }

  return data || []
}

// Fetch all services
export async function fetchServices() {
  const supabase = createServerSupabaseClient()
  const { data, error } = await supabase.from("services").select("*").order("order_no", { ascending: true })

  if (error) {
    console.error("Error fetching services:", error)
    return []
  }

  return data || []
}

// Fetch featured projects
export async function fetchFeaturedProjects() {
  const supabase = createServerSupabaseClient()

  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("is_featured", true)
      .order("order_no", { ascending: true })

    if (error) {
      console.error("Error fetching featured projects:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in fetchFeaturedProjects:", error)
    return []
  }
}

// Fetch about us information
export async function fetchAbout() {
  const supabase = createServerSupabaseClient()
  const { data, error } = await supabase.from("about").select("*").single()

  if (error) {
    console.error("Error fetching about data:", error)
    return null
  }

  return data
}

// Fetch testimonials
export async function fetchTestimonials() {
  const supabase = createServerSupabaseClient()
  const { data, error } = await supabase.from("testimonials").select("*").order("order_no", { ascending: true })

  if (error) {
    console.error("Error fetching testimonials:", error)
    return []
  }

  return data || []
}

// Fetch contact information
export async function fetchContact() {
  const supabase = createServerSupabaseClient()
  const { data, error } = await supabase.from("contact").select("*").single()

  if (error) {
    console.error("Error fetching contact data:", error)
    return null
  }

  return data
}

// Fetch settings (theme, footer, etc.)
export async function fetchSettings() {
  const supabase = createServerSupabaseClient()
  const { data, error } = await supabase.from("settings").select("*").single()

  if (error) {
    console.error("Error fetching settings:", error)
    return null
  }

  return data
}

