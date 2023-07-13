const hamburgerToggle = document.querySelector('.hamburger-toggle');
const menuItems = document.querySelector('.menu-items');

hamburgerToggle.addEventListener('click', () => {
  menuItems.classList.toggle('show');
});

function toggleExpansion(event) {
    var questionContainer = event.target.closest('.question');
    var expandContainer = questionContainer.querySelector('.expand-container');
    questionContainer.classList.toggle('expanded');
    if (questionContainer.classList.contains('expanded')) {
      expandContainer.style.maxHeight = expandContainer.scrollHeight + 'px';
    } else {
      expandContainer.style.maxHeight = '0';
    }
  }

  function navigateToBookings() {
    window.location.href = 'bookings.html';
  }

  function navigateToSignIn() {
    window.location.href = 'signin.html';
  }
