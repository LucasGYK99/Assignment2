const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function showSlide(index) {
  carousel.style.transform = `translateX(-${index * 20}%)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

const seeMoreButton = document.getElementById('seeMoreButton');
const extraProperties = document.getElementById('extraProperties');

seeMoreButton.addEventListener('click', function() {
  if (extraProperties.style.display === 'none') {
    extraProperties.style.display = 'block';
    seeMoreButton.textContent = 'Hide Properties';
  } else {
    extraProperties.style.display = 'none';
    seeMoreButton.textContent = 'See More Properties';
  }
});

// Get the input elements
const destinationInput = document.getElementById('destination');
const fromDateInput = document.getElementById('from-date');
const toDateInput = document.getElementById('to-date');
const searchForm = document.getElementById('search-form');

// Add event listener for form submission
searchForm.addEventListener('submit', handleFormSubmit);

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Check if all required inputs have values
  if (!destinationInput.value || !fromDateInput.value || !toDateInput.value) {
    alert('Please fill in all the required information.'); // Display an alert message
    return;
  }

  // Check if both date inputs are valid
  const validFromDate = validateDateInput(fromDateInput);
  const validToDate = validateDateInput(toDateInput);

  if (validFromDate && validToDate) {
    // Both dates are valid, navigate to the search page
    window.location.href = 'search.html'; // Replace 'search.html' with the actual URL of your search page
  } else {
    // Display an alert message if the date inputs are invalid
    alert('Invalid date inputs. Please refresh the page and enter valid dates.');
  }
}

// Function to validate date input
function validateDateInput(input) {
  const inputValue = input.value;

  // Check if the input value matches the desired date format (DD/MM/YY)
  const validFormat = /^\d{1,2}\/\d{1,2}\/\d{2}$/.test(inputValue);

  if (!validFormat) {
    input.setCustomValidity('Invalid date format. Please use DD/MM/YY.');
    return false;
  }

  // Extract day, month, and year from the input value
  const [day, month, year] = inputValue.split('/');

  // Check if the day, month, and year are valid
  const validDay = /^\d{1,2}$/.test(day) && parseInt(day) >= 1 && parseInt(day) <= 31;
  const validMonth = /^\d{1,2}$/.test(month) && parseInt(month) >= 1 && parseInt(month) <= 12;
  const validYear = /^\d{2}$/.test(year) && parseInt(year) >= 23 && parseInt(year) <= 25;

  if (!validDay || !validMonth || !validYear) {
    input.setCustomValidity('Invalid date or month.');
    return false;
  }

  input.setCustomValidity('');
  return true;
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
