// SOLIS Project Website - Main JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // ===========================
  // Mobile Menu Toggle
  // ===========================
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      const isExpanded = nav.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
      menuToggle.innerHTML = isExpanded ? '✕' : '☰';
    });

    // Close mobile menu when clicking a link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          nav.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.innerHTML = '☰';
        }
      });
    });
  }

  // ===========================
  // Dark Mode Toggle
  // ===========================
  const themeToggle = document.querySelector('.theme-toggle');
  
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  if (themeToggle) {
    // Set initial button text
    themeToggle.textContent = currentTheme === 'dark' ? '☀️ Light' : '🌙 Dark';
    
    themeToggle.addEventListener('click', function() {
      let theme = document.documentElement.getAttribute('data-theme');
      
      if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️ Light';
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙 Dark';
      }
    });
  }

  // ===========================
  // Active Navigation Link
  // ===========================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ===========================
  // Smooth Scroll for Anchor Links
  // ===========================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // ===========================
  // Form Validation (if contact form exists)
  // ===========================
  const contactForm = document.querySelector('form[action*="formspree"]');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const name = contactForm.querySelector('input[name="name"]');
      const email = contactForm.querySelector('input[name="email"]');
      const message = contactForm.querySelector('textarea[name="message"]');
      
      let isValid = true;
      
      // Simple validation
      if (name && name.value.trim() === '') {
        alert('Please enter your name');
        isValid = false;
      }
      
      if (email && !isValidEmail(email.value)) {
        alert('Please enter a valid email address');
        isValid = false;
      }
      
      if (message && message.value.trim().length < 10) {
        alert('Please enter a message (at least 10 characters)');
        isValid = false;
      }
      
      if (!isValid) {
        e.preventDefault();
      }
    });
  }

  // Email validation helper
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // ===========================
  // Scroll-to-Top Button (optional enhancement)
  // ===========================
  let scrollTopBtn = document.createElement('button');
  scrollTopBtn.innerHTML = '↑';
  scrollTopBtn.className = 'scroll-top-btn';
  scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
  scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  `;
  
  document.body.appendChild(scrollTopBtn);

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollTopBtn.style.opacity = '1';
      scrollTopBtn.style.visibility = 'visible';
    } else {
      scrollTopBtn.style.opacity = '0';
      scrollTopBtn.style.visibility = 'hidden';
    }
  });

  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
  });

  scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });

  // ===========================
  // Console Welcome Message
  // ===========================
  console.log('%c SOLIS Project ', 'background: #002b5c; color: #fff; padding: 5px 10px; font-size: 16px; font-weight: bold;');
  console.log('Solar Cells-Inspired Inorganic Semiconductor Synaptic Systems');
  console.log('Funded by Horizon Europe MSCA Staff Exchange');
  console.log('Visit: https://github.com/SOLIS-project');

});

// ===========================
// Handle Window Resize
// ===========================
let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    
    // Reset mobile menu when resizing to desktop
    if (window.innerWidth > 768 && nav) {
      nav.classList.remove('active');
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = '☰';
      }
    }
  }, 250);
});
