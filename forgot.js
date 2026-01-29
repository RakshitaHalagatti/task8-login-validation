function resetPassword() {
  const username = document.getElementById("username").value;
  const newPass = document.getElementById("newPassword").value;
  const confirmPass = document.getElementById("confirmPassword").value;
  const error = document.getElementById("errorMsg");

  if (username === "" || newPass === "" || confirmPass === "") {
    error.textContent = "All fields are required!";
  } 
  else if (newPass !== confirmPass) {
    error.textContent = "Passwords do not match!";
  } 
  else {
    localStorage.setItem("username", username);
    localStorage.setItem("password", newPass);

    error.textContent = "";
    alert("Password reset successful!");
    window.location.href = "index.html";
  }
}
