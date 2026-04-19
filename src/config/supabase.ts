import { createClient } from '@supabase/supabase-js';

// ✅ เปลี่ยนจาก process.env เป็น import.meta.env แบบนี้ครับ
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase URL or Key — check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY env vars");
}

console.log("URL:", supabaseUrl);
console.log("KEY:", supabaseKey ? "Found!" : "Not Found!");

export const supabase = createClient(supabaseUrl, supabaseKey);