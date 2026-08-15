import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://aiprocurement.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_TEF7Lj1baeo4wxNy6SInNA_lj5aNKvs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
