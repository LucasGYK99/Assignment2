function closePopup() {
  const popupMessage = document.getElementById("popup-message");
  popupMessage.style.display = "none";
  popupMessage.classList.remove("bounce"); // Remove the "bounce" class when closing the pop-up
  const popup = document.getElementById('popup');
  popup.classList.remove('show');

  // Hide the loading overlay
  const loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (validateForm()) {
      showLoadingOverlay();
      setTimeout(showPopupMessage, 2000); // Adjust the delay time as needed
    }
  });

  function validateForm() {
    // Retrieve form inputs
    const cardHolderNameInput = document.getElementById("card-holder-name");
    const cardNumberInput = document.getElementById("card-number");
    const expiryDateInput = document.getElementById("expiry-date");
    const cvcInput = document.getElementById("cvc");

    // Retrieve input values
    const cardHolderName = cardHolderNameInput.value.trim();
    const cardNumber = cardNumberInput.value.trim();
    const expiryDate = expiryDateInput.value.trim();
    const cvc = cvcInput.value.trim();

    // Validation rules
    const nameRegex = /^[A-Za-z\s]+$/; // Allows only alphabets and spaces
    const cardNumberRegex = /^[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}$/; // Card number format #### #### #### ####
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // Expiry date format MM/YY
    const cvcRegex = /^[0-9]{3}$/; // CVC format ###

    let isValid = true;

    // Validate cardholder name
    if (!cardHolderName || !nameRegex.test(cardHolderName)) {
      alert("Please enter a valid cardholder name.");
      isValid = false;
    }

    // Validate card number
    if (!cardNumber || !cardNumberRegex.test(cardNumber)) {
      alert("Please enter a valid card number.");
      isValid = false;
    }

    // Validate expiry date
    if (!expiryDate || !expiryDateRegex.test(expiryDate)) {
      alert("Please enter a valid expiry date (MM/YY).");
      isValid = false;
    }

    // Validate CVC
    if (!cvc || !cvcRegex.test(cvc)) {
      alert("Please enter a valid CVC.");
      isValid = false;
    }

    return isValid;
  }

  function showPopupMessage() {
    const popupMessage = document.getElementById("popup-message");
    popupMessage.style.display = "block";

    // Add the "bounce" class after a slight delay
    setTimeout(function() {
      popupMessage.classList.add("bounce");
    }, 100);
  }

  function showLoadingOverlay() {
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.display = 'flex';
  }

  // Hide loading overlay once the page is loaded
  window.addEventListener('load', function() {
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.display = 'none';
  });

  // Attach click event listener to the close button
  const closeButton = document.getElementById('close-button');
  closeButton.addEventListener('click', closePopup);
});
