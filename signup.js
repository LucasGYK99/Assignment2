function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  var fullName = document.getElementById('full-name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;

  // Validate form inputs
  if (fullName.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
    alert('Please fill in all the required fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // If all checks pass, navigate to index.html
  window.location.href = 'index.html';
}

document.getElementById('login-form').addEventListener('submit', validateForm);

function validateEmail(email) {
  // Email validation regex pattern
  var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailPattern.test(email.trim());
}

function navigateToBookings() {
  window.location.href = 'bookings.html';
}

function navigateToSignIn() {
  window.location.href = 'signin.html';
}
