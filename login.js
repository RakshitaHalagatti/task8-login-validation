function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("loginError");

  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (username === "" || password === "") {
    error.textContent = "All fields are required!";
  } 
  else if (username !== savedUser || password !== savedPass) {
    error.textContent = "Invalid username or password!";
  } 
  else {
    error.textContent = "";
    alert("Login successful!");
  }
}
