/ Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the Call to Action button element
    const ctaButton = document.getElementById('cta-button');

    // Add click event listener to the button
    ctaButton.addEventListener('click', () => {
        // Show alert message
        alert('Call to Action button clicked!');
    });
});
// JavaScript for Navigation Menu Scroll Effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
      header.style.backgroundColor = '#555';
  } else {
      header.style.backgroundColor = '#333';
  }
});