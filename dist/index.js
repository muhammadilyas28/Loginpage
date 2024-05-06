document.addEventListener("DOMContentLoaded", function() {
  // Get the register and login form containers
  var registerFormContainer = document.getElementById("registerFormContainer");
  var loginFormContainer = document.getElementById("loginForm");

  // Get the register and login links
  var showRegisterLink = document.getElementById("showRegister");
  var showLoginLink = document.getElementById("showLogin");

  // Show register form and hide login form
  showRegisterLink.addEventListener("click", function(event) {
    event.preventDefault();
    registerFormContainer.classList.remove("hidden");
    loginFormContainer.classList.add("hidden");
  });

  // Show login form and hide register form
  showLoginLink.addEventListener("click", function(event) {
    event.preventDefault();
    registerFormContainer.classList.add("hidden");
    loginFormContainer.classList.remove("hidden");
  });
});