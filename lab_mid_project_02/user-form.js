document.getElementById("registrationForm").addEventListener("submit", function(event) {

    // Prevent form from submitting by default
    event.preventDefault();

    // Clear all previous errors
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
    document.getElementById("roleError").textContent = "";

    // Get field values
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var role = document.getElementById("role").value;

    var isValid = true;

    // Username validation - at least 5 characters
    if (username.length < 5) {
        document.getElementById("usernameError").textContent = "Username must be at least 5 characters.";
        isValid = false;
    }

    // Email validation - must contain @ and a dot
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Password validation - at least 8 characters
    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
        isValid = false;
    }

    // Confirm password must match
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    // Role must be selected
    if (role === "") {
        document.getElementById("roleError").textContent = "Please select a role.";
        isValid = false;
    }

    // If all fields are valid, show success
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset();
    }

});
