import { createClient } from "@supabase/supabase-js"
import { getEnvVar, Env, getSupabaseCredentials } from "./utils"

// Create Supabase client with service role key (for server-side)
export function createServerSupabaseClient() {
  const { supabaseUrl, supabaseServiceKey } = getSupabaseCredentials()
  return createClient(supabaseUrl, supabaseServiceKey)
}

// Create Supabase client with anon key (for client-side)
export function createClientSupabaseClient() {
  const { supabaseUrl, supabaseKey } = getSupabaseCredentials()
  return createClient(supabaseUrl, supabaseKey)
}

