<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Admin Dashboard</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

<h2>Admin Dashboard</h2>
<button id="logout-btn">Logout</button>

<div id="content">
  <p>Loading admin info...</p>
</div>

<script type="module" src="js/admin.js"></script>
<script>
  // Attach logout function to button
  document.getElementById("logout-btn").addEventListener("click", () => {
    logout();
  });
</script>

</body>
</html>