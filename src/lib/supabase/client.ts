import { createBrowserClient } from "@supabase/ssr";

type Supabase = ReturnType<typeof createBrowserClient>;

let client: Supabase | null = null;

function getSupabaseConfig(): { url: string; anonKey: string } | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    console.error("Supabase environment variables are missing!");
    return null;
  }

  return { url, anonKey };
}

export function createClient(): Supabase | null {
  const config = getSupabaseConfig();
  if (!config) return null;

  return createBrowserClient(config.url, config.anonKey);
}

export function getSupabaseBrowserClient(): Supabase {
  if (client) return client;

  const supabase = createClient();
  if (!supabase) {
    throw new Error(
      "Supabase is not configured. Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. Add them to your .env.local file."
    );
  }

  client = supabase;
  return client;
}
