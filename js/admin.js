import { supabase } from "./supabaseClient.js";

async function checkAdmin() {
  // Get current session
  const { data: { session }, error: sessionError } = await supabase.auth.getSession();

  if (sessionError || !session) {
    window.location.href = "login.html";
    return;
  }

  const user = session.user;

  // Check admin role
  const { data, error } = await supabase
    .from("admins")
    .select("role")
    .eq("id", user.id)
    .single();

  if (error || !data || data.role !== "admin") {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("content").innerHTML = `Welcome, ${user.email}`;
}

// Logout function
async function logout() {
  await supabase.auth.signOut();
  window.location.href = "login.html";
}

window.logout = logout;

// Run on page load
checkAdmin();