// script.js

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Optional: Form submission handler
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    formStatus.textContent = "Message sent successfully! (Simulation)";
    form.reset();
  });
});
