import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qtvgjydvzrffgupgxjqi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0dmdqeWR2enJmZmd1cGd4anFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM0MzMwMzksImV4cCI6MjAxOTAwOTAzOX0.ysW0lhjTdmcrrr9eJdcSuLTWoqP__eqJxrM9NXRvuI4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
