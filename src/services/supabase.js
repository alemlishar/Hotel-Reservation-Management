import { createClient } from "@supabase/supabase-js"
const supabaseUrl = "https://kzdcxkaittejdrxlznad.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6ZGN4a2FpdHRlamRyeGx6bmFkIiwicm9sZSI6ImFub24i" +
  "LCJpYXQiOjE3MTAyMjM5NTIsImV4cCI6MjAyNTc5OTk1Mn0.wtSrXjzWhawgNYHBxYmVT9SGofYy-3mY77aOJptBBHs"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
