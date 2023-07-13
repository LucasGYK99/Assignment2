// Get the container element
const container = document.querySelector('.toggle-container');

// Toggle the clicked class when the container is clicked
container.addEventListener('click', function() {
  container.classList.toggle('clicked');
});

const hamburgerToggle = document.querySelector('.hamburger-toggle');
const menuItems = document.querySelector('.menu-items');

hamburgerToggle.addEventListener('click', () => {
  menuItems.classList.toggle('show');
});

function navigateToBookings() {
  window.location.href = 'bookings.html';
}

function navigateToSignIn() {
  window.location.href = 'signin.html';
}
