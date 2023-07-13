const hamburgerToggle = document.querySelector('.hamburger-toggle');
const menuItems = document.querySelector('.menu-items');

hamburgerToggle.addEventListener('click', () => {
  menuItems.classList.toggle('show');
});

function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form input values
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Validate form inputs
  if (email.trim() === '' || password.trim() === '') {
    alert('Please fill in all the required fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // If all checks pass, navigate to index.html
  window.location.href = 'index.html';
}

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
