import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://krytjaetlvqwutrwyohz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyeXRqYWV0bHZxd3V0cnd5b2h6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjUyNTk0OCwiZXhwIjoyMDc4MTAxOTQ4fQ.BxASZB3u1S6UePYIUzS9BdnrdsgMe9zeI914m8zS6Kk'; 
export const supabase = createClient(supabaseUrl, supabaseKey);
