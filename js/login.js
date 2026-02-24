import { supabase } from "./supabaseClient.js";

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorDiv = document.getElementById("login-error");

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    errorDiv.textContent = "Login failed: " + error.message;
    return;
  }

  // Clear any previous errors
  errorDiv.textContent = "";

  // Wait a tiny bit for session to be saved, then redirect
  setTimeout(() => {
    window.location.href = "admin.html";
  }, 200);
}

window.login = login;