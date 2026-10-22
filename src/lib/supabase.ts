import { createClient } from '@supabase/supabase-js';

export function createSupabaseClient() {
  const url = import.meta.env.PUBLIC_SUPABASE_URL;
  const key = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    throw new Error('Configura PUBLIC_SUPABASE_URL y PUBLIC_SUPABASE_PUBLISHABLE_KEY en .env.');
  }

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
}
