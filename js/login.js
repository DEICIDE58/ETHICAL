import { supabase } from "./supabaseClient.js";

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorDiv = document.getElementById("login-error");

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    errorDiv.textContent = "Login failed: " + error.message;

    setTimeout(() => {
      errorDiv.textContent = "";
    }, 2000);

    return;
  }

  // Clear any previous errors immediately
  errorDiv.textContent = "";

  // Delay, then redirect
  setTimeout(() => {
    window.location.href = "admin.html";
  }, 200);
}

window.login = login;