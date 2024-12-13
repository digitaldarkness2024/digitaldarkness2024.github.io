document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Simple validation for demonstration purposes
    if (username === 'user' && password === 'pass') {
        window.location.href = 'https://digitaldarkness2024.github.io/main/';
    } else {
        document.getElementById('error').style.display = 'block';
    }
});
