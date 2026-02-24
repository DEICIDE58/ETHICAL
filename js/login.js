import { supabase } from "./supabaseClient.js";

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorDiv = document.getElementById("login-error");
  const successDiv = document.getElementById("login-success");

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    errorDiv.textContent = "Login failed: " + error.message;
    errorDiv.style.opacity = 1;

    setTimeout(() => {
      errorDiv.style.opacity = 0;
    }, 2000);

    return;
  }

  // Clear previous errors
  errorDiv.style.opacity = 0;

  //  success 
  successDiv.textContent = "Login successful!";
  successDiv.style.opacity = 1;

  setTimeout(() => {
    window.location.href = "admin.html";
  }, 200);
}

window.login = login;