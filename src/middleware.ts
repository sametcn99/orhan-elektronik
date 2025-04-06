import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { getSupabaseCredentials } from "./lib/utils"

export async function middleware(request: NextRequest) {
  // Admin sayfalarını kontrol etme
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next()
  }

  try {
    const { supabaseUrl, supabaseServiceKey } = getSupabaseCredentials()
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Get settings
    const { data: settings, error } = await supabase
      .from("settings")
      .select("maintenance_mode, maintenance_message")
      .single()

    if (error) {
      console.error("Error fetching settings:", error)
      return NextResponse.next()
    }

    // Check maintenance mode
    if (settings && settings.maintenance_mode === true) {
      return NextResponse.rewrite(new URL("/maintenance", request.url))
    }

    return NextResponse.next()
  } catch (error) {
    console.error("Middleware error:", error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

