const users = [
    { username: 'owner', password: 'test123', access: 'owner' },
    { username: 'coworker', password: 'test123', access: 'coworker' }
];

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('login-error-message');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        LoginBtn(); // Call LoginBtn function
    });
});

function LoginBtn() {
    var username = document.getElementById('login-user').value;
    var password = document.getElementById('login-password').value;

    // Find the user in the array
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Check if both username and password are correct
        if (user.username === username && user.password === password) {
            // Redirect based on user access
            if (user.access === 'owner') {
                window.location.href = 'owner-property.html';
            } else if (user.access === 'coworker') {
                window.location.href = 'coworker.html';
            }
        } else {
            // Handle incorrect password here
            const errorMessage = document.getElementById('login-error-message');
            errorMessage.textContent = 'Incorrect password';
            errorMessage.style.display = 'block'; // Ensure the error message is visible
        }
    } else {
        // Handle invalid username here
        const errorMessage = document.getElementById('login-error-message');
        errorMessage.textContent = 'Invalid username';
        errorMessage.style.display = 'block'; // Ensure the error message is visible
    }
}

//Function to go back to Homepage
function LoginBackBtn() {
    window.location.href = "homepage.html";
}
