    
    const registerForm = document.getElementById('registerForm');
    const loginFormContainer = document.getElementById('loginFormContainer');
    const showLoginForm = document.getElementById('showLoginForm');
    const showRegisterForm = document.getElementById('showRegisterForm');

    // Show login form
    showLoginForm.addEventListener('click', function(event) {
        event.preventDefault();
        loginFormContainer.classList.remove('hidden');
    });

    // Show register form
    showRegisterForm.addEventListener('click', function(event) {
        event.preventDefault();
        loginFormContainer.classList.add('hidden');
    });
        
    // Register form submit event
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const regUsername = document.getElementById('regUsername').value;
        const regPassword = document.getElementById('regPassword').value;
        
        // Retrieve users from localStorage or initialize empty array
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if username already exists
        if (users.some(user => user.username === regUsername)) {
            alert('Username already exists');
            return;
        }

        // Add new user to the list
        users.push({ username: regUsername, password: regPassword });

        // Update users in localStorage
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful! Please login.');
        loginFormContainer.classList.remove('hidden'); // Show login form after registration
    });
        
    // Login form submit event
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Check if user exists in localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            alert('Login successful!');
            // Redirect or do something else after successful login
        } else {
            alert('Invalid username or password');
        }
    });