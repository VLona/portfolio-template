import { createClient } from "@supabase/supabase-js";

// Read the two env vars we set in .env.local
// The "!" tells TypeScript "trust me, these will exist at runtime"
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create one shared client instance.
// Anywhere in the app, we'll `import { supabase } from "@/lib/supabase"`
// and use this same connection.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
