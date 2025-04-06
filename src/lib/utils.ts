import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Environment variables enum
export const enum Env {
	NEXT_PUBLIC_SUPABASE_URL = "NEXT_PUBLIC_SUPABASE_URL",
	NEXT_PUBLIC_SUPABASE_ANON_KEY = "NEXT_PUBLIC_SUPABASE_ANON_KEY",
	SUPABASE_SERVICE_ROLE_KEY = "SUPABASE_SERVICE_ROLE_KEY",
}

// Get environment variable helper function
export function getEnvVar(key: Env): string {
	const value = process.env[key];
	if (!value) {
		throw new Error(`Missing environment variable: ${key}`);
	}
	return value;
}

// Get Supabase credentials
export function getSupabaseCredentials() {
	return {
		supabaseUrl: getEnvVar(Env.NEXT_PUBLIC_SUPABASE_URL),
		supabaseKey: getEnvVar(Env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
		supabaseServiceKey: getEnvVar(Env.SUPABASE_SERVICE_ROLE_KEY),
	};
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
