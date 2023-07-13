
function openLightbox(imageSrc) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `<img src="${imageSrc}" onclick="closeLightbox()">`;
  document.body.appendChild(lightbox);
}

function closeLightbox() {
  const lightbox = document.querySelector('.lightbox');
  document.body.removeChild(lightbox);
}


// Add an event listener to the room image to show the lightbox image
const roomImage = document.querySelector('.room-image');
const lightboxOverlay = document.querySelector('.lightbox-overlay');
const lightboxImage = document.querySelector('.lightbox-image');

roomImage.addEventListener('click', () => {
  const imageSrc = roomImage.getAttribute('data-src');
  lightboxImage.setAttribute('src', imageSrc);
  lightboxOverlay.style.display = 'flex';
});


lightboxOverlay.addEventListener('click', () => {
  lightboxOverlay.style.display = 'none';
});

function redirectToContact() {
    window.location.href = "contact-details.html";
  }

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
