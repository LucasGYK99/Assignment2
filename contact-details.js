document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fullNameInput = document.getElementById("full-name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    // Validation rules
    const nameRegex = /^[A-Za-z\s]+$/; // Allows only alphabets and spaces
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/; // Phone number format XXX-XXX-XXXX

    let isValid = true;

    // Validate full name
    if (!fullName || !nameRegex.test(fullName)) {
      fullNameInput.classList.add("invalid");
      isValid = false;
      alert("Please enter a valid full name with alphabets and spaces only.");
    } else {
      fullNameInput.classList.remove("invalid");
    }

    // Validate email
    if (!email || !emailInput.checkValidity()) {
      emailInput.classList.add("invalid");
      isValid = false;
    } else {
      emailInput.classList.remove("invalid");
    }

    // Validate phone number
    if (!phone || !phoneRegex.test(phone)) {
      phoneInput.classList.add("invalid");
      isValid = false;
      alert("Please enter a valid phone number in the format XXX-XXX-XXXX.");
    } else {
      phoneInput.classList.remove("invalid");
    }

    if (isValid) {
      // If all inputs are valid, you can proceed with form submission or other actions
      // For example, you can add the code to submit the form here
      // form.submit();
      window.location.href = "payment.html"; // Redirect to payment.html
    }
  });
});
