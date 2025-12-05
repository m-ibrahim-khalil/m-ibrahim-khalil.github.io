/**
 * Main JavaScript for Portfolio Site
 * Minimal vanilla JS - no frameworks or libraries
 */

// Mobile Navigation Toggle
function initMobileNav() {
  const navToggle = document.querySelector('.greedy-nav__toggle');
  const nav = document.querySelector('.greedy-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('close');
      nav.classList.toggle('active');

      // Update ARIA attribute
      const isExpanded = nav.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });
  }
}

// Sidebar Social Links Toggle (Mobile)
function initSidebarToggle() {
  const toggleBtn = document.querySelector('.author__urls-wrapper button');
  const urls = document.querySelector('.author__urls');

  if (toggleBtn && urls) {
    toggleBtn.addEventListener('click', function() {
      toggleBtn.classList.toggle('open');

      // Toggle visibility
      if (urls.style.display === 'block') {
        urls.style.display = 'none';
      } else {
        urls.style.display = 'block';
      }
    });
  }
}

// Update Footer Copyright Year
function updateCopyrightYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// Initialize all functions on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  initMobileNav();
  initSidebarToggle();
  updateCopyrightYear();
});
