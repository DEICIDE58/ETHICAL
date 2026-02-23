import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

const supabase = createClient("https://fnyrptzgafykvhzibjed.supabase.co", "sb_publishable_G_BA6XtU28JCcP0XaifoXw_A8VvBrst")

const { data: { user } } = await supabase.auth.getUser()

// Not logged in
if (!user) {
  window.location.href = "login.html"
}

// Check admin role
const { data, error } = await supabase
  .from("admins")
  .select("role")
  .eq("id", user.id)
  .single()

if (!data || data.role !== "admin") {
  window.location.href = "login.html"
}