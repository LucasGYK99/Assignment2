const hamburgerToggle = document.querySelector('.hamburger-toggle');
const menuItems = document.querySelector('.menu-items');

hamburgerToggle.addEventListener('click', () => {
  menuItems.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function() {
  const cancelButton = document.querySelector(".cancel-button");
  const editButton = document.querySelector(".edit-button");

  cancelButton.addEventListener("click", function(event) {
    event.preventDefault();
    showPopupMessage();
  });

  editButton.addEventListener("click", function(event) {
    event.preventDefault();
    showPopupMessage();
  });

  function showPopupMessage() {
    const popupMessage = document.getElementById("popup-message");
    popupMessage.style.display = "block";
    popupMessage.classList.add("bounce");
  }

  // Attach click event listener to the close button
  const closeButton = document.getElementById("close-button");
  closeButton.addEventListener("click", closePopup);

  function closePopup() {
    const popupMessage = document.getElementById("popup-message");
    popupMessage.style.display = "none";
    popupMessage.classList.remove("bounce");
  }
});

function navigateToBookings() {
  window.location.href = 'bookings.html';
}

function navigateToSignIn() {
  window.location.href = 'signin.html';
}
