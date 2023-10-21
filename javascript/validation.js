document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const submitButton = document.getElementById('submitButton');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Validate name input
    const nameValue = nameInput.value.trim(); // Remove leading/trailing spaces
    const namePattern = /^[A-Za-z]+$/; // Alphabetic characters only

    if (!namePattern.test(nameValue)) {
      document.getElementById('nameError').textContent = 'Please enter a valid name with only alphabetic characters.';
      nameInput.style.border = '1px solid red';
    } else {
      document.getElementById('nameError').textContent = '';
      nameInput.style.border = '1px solid #ccc';
    }

    // Validate email input
    if (!emailInput.checkValidity()) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      emailInput.style.border = '1px solid red';
    } else {
      document.getElementById('emailError').textContent = '';
      emailInput.style.border = '1px solid #ccc';
    }

    // Check if all inputs are valid
    if (namePattern.test(nameValue) && emailInput.checkValidity()) {
      // All inputs are valid, display success message
      successMessage.textContent = 'Form submitted successfully!';
      successMessage.style.display = 'block';
    } else {
      successMessage.textContent = ''; // Clear success message
      successMessage.style.display = 'none';
    }
  });

  // Enable the submit button when all inputs are valid
  nameInput.addEventListener('input', validateForm);
  emailInput.addEventListener('input', validateForm);

  function validateForm() {
    const nameValue = nameInput.value.trim(); // Remove leading/trailing spaces
    const namePattern = /^[A-Za-z]+$/; // Alphabetic characters only

    if (namePattern.test(nameValue) && emailInput.checkValidity()) {
      submitButton.removeAttribute('disabled');
    } else {
      submitButton.setAttribute('disabled', 'disabled');
    }
  }
});
