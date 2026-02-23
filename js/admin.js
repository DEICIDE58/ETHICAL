import { supabase } from "./supabaseClient.js";

// Check if user is logged in and is admin
async function checkAdmin() {
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (!user) {
    // Not logged in
    window.location.href = "login.html";
    return;
  }

  // Check admin role
  const { data, error } = await supabase
    .from("admins")
    .select("role")
    .eq("id", user.id)
    .single();

  if (error || !data || data.role !== "admin") {
    // Not an admin
    window.location.href = "login.html";
    return;
  }

  // Show admin content
  document.getElementById("content").innerHTML = `Welcome, ${user.email}`;
}

// Logout function
window.logout = async function() {
  await supabase.auth.signOut();
  window.location.href = "login.html";
};

// Run the check when page loads
checkAdmin();