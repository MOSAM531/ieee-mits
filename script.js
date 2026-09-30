// ===================================================
// IEEE MTT-S MITS-DU Gwalior - Client JavaScript
// Beginner-friendly interactive features
// ===================================================

document.addEventListener('DOMContentLoaded', function () {
  
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      navMenu.classList.toggle('show');
    });

    // Close menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-link, .btn-nav');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('show');
      });
    });
  }

  // 2. Event Button Working Action (Smooth scroll + Focus Input)
  const btnRegisterEvent = document.getElementById('btn-register-event');
  if (btnRegisterEvent) {
    btnRegisterEvent.addEventListener('click', function (e) {
      e.preventDefault();
      const registerSection = document.getElementById('register');
      if (registerSection) {
        registerSection.scrollIntoView({ behavior: 'smooth' });
        // Auto-focus the first input after scrolling
        setTimeout(function () {
          const nameInput = document.getElementById('fullName');
          if (nameInput) nameInput.focus();
        }, 600);
      }
    });
  }

  // 3. Workshop Quick Registration Form Submit Handler
  const workshopForm = document.getElementById('workshopForm');
  const formSuccessMessage = document.getElementById('formSuccessMessage');
  const submitBtn = document.getElementById('submitBtn');

  if (workshopForm) {
    workshopForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Stop page reload

      // Form values
      const name = document.getElementById('fullName').value.trim();
      const branch = document.getElementById('branch').value;
      const year = document.getElementById('year').value;
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();

      // Simple 10-digit validation for beginner project
      const phonePattern = /^[6-9]\d{9}$/;
      if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.');
        document.getElementById('phone').focus();
        return;
      }

      // Show submitting state
      submitBtn.innerText = 'Submitting... ⏳';
      submitBtn.disabled = true;

      // Simulate network submission delay
      setTimeout(function () {
        submitBtn.innerText = 'Submitted ✓';
        submitBtn.style.backgroundColor = '#16a34a'; // Green

        // Reveal the success message box
        if (formSuccessMessage) {
          formSuccessMessage.style.display = 'block';
          formSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Reset form inputs
        workshopForm.reset();

        // Restore button after 4 seconds
        setTimeout(function () {
          submitBtn.innerText = 'Submit Registration 🚀';
          submitBtn.style.backgroundColor = '#00629b';
          submitBtn.disabled = false;
        }, 4000);

      }, 800);
    });
  }

});
