import { supabase } from "./supabaseClient.js";

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert("Login failed: " + error.message);
    return;
  }

  window.location.href = "admin.html";
}

window.login = login;