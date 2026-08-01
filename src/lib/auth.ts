import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function getSession() {
  const supabase = await getSupabaseServerClient();
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) return null;
  return session;
}

export async function getUser() {
  const supabase = await getSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function requireAuth() {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}
