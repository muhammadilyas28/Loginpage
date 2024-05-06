// Function to handle login form submission
function handleLogin(event) {
  event.preventDefault();

  // Get form data
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // You may want to perform validation here

  // Store credentials in localStorage
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  // Redirect or perform further actions
  console.log('Login successful!');
}

// Function to handle registration form submission
function handleRegister(event) {
  event.preventDefault();

  // Get form data
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;

  // You may want to perform validation here

  // Store credentials in localStorage
  localStorage.setItem('username', newUsername);
  localStorage.setItem('password', newPassword);

  // Redirect or perform further actions
  console.log('Registration successful!');
}

// Function to switch between login and registration forms
function toggleForms() {
  const loginFormContainer = document.getElementById('loginForm').parentNode;
  const registerFormContainer = document.getElementById('registerFormContainer');

  loginFormContainer.classList.toggle('hidden');
  registerFormContainer.classList.toggle('hidden');
}

// Add submit event listeners to the forms
document.getElementById('loginForm').addEventListener('submit', handleLogin);
document.getElementById('registerForm').addEventListener('submit', handleRegister);

// Add click event listeners to toggle between forms
document.getElementById('showRegister').addEventListener('click', toggleForms);
document.getElementById('showLogin').addEventListener('click', toggleForms);

// Check if user is already logged in
window.onload = function() {
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');
  if (storedUsername && storedPassword) {
    // Redirect or perform further actions for already logged in user
    console.log('Welcome back, ' + storedUsername + '!');
  }
};