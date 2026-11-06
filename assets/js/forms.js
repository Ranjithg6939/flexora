/**
 * FLEXORA - Forms Handling, Front-end Validation & Toast Notifications
 */

(function () {
  'use strict';

  // --- Toast Notification Helper ---
  window.showToast = function (message, type = 'success') {
    let container = document.querySelector('.custom-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'custom-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `custom-toast toast-${type}`;
    const iconClass = type === 'success' ? 'fa-circle-check text-success' : 'fa-circle-exclamation text-danger';

    toast.innerHTML = `
      <i class="fa-solid ${iconClass} fa-lg"></i>
      <div class="toast-content flex-grow-1">
        <div class="toast-msg fw-medium">${message}</div>
      </div>
      <button type="button" class="btn-close btn-close-white" aria-label="Close" style="font-size: 0.75rem;"></button>
    `;

    const closeBtn = toast.querySelector('.btn-close');
    closeBtn.addEventListener('click', () => {
      toast.remove();
    });

    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentElement) {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }
    }, 4500);
  };

  // --- Password Visibility Toggle ---
  function initPasswordToggles() {
    const toggles = document.querySelectorAll('.password-toggle-btn');
    toggles.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const input = document.getElementById(targetId);
        if (!input) return;

        const icon = btn.querySelector('i');
        if (input.type === 'password') {
          input.type = 'text';
          if (icon) icon.className = 'fa-regular fa-eye-slash';
        } else {
          input.type = 'password';
          if (icon) icon.className = 'fa-regular fa-eye';
        }
      });
    });
  }

  // --- Order Enquiry & Contact Form Prepopulation & Validation ---
  function initOrderForm() {
    const form = document.getElementById('orderEnquiryForm');
    if (!form) return;

    // Check URL parameters to auto-fill
    const params = new URLSearchParams(window.location.search);
    const prodParam = params.get('product');
    const widthParam = params.get('width');
    const heightParam = params.get('height');
    const qtyParam = params.get('qty');

    if (prodParam) {
      const prodSelect = document.getElementById('orderProduct');
      if (prodSelect) {
        for (let i = 0; i < prodSelect.options.length; i++) {
          if (prodSelect.options[i].value === prodParam || prodSelect.options[i].value.includes(prodParam)) {
            prodSelect.selectedIndex = i;
            break;
          }
        }
      }
    }

    if (widthParam) {
      const widthInp = document.getElementById('orderWidth');
      if (widthInp) widthInp.value = widthParam;
    }

    if (heightParam) {
      const heightInp = document.getElementById('orderHeight');
      if (heightInp) heightInp.value = heightParam;
    }

    if (qtyParam) {
      const qtyInp = document.getElementById('orderQty');
      if (qtyInp) qtyInp.value = qtyParam;
    }

    // File upload indicator
    const fileInput = document.getElementById('orderFile');
    const dropzoneText = document.getElementById('dropzoneText');
    if (fileInput && dropzoneText) {
      fileInput.addEventListener('change', () => {
        if (fileInput.files && fileInput.files[0]) {
          dropzoneText.innerHTML = `<strong class="text-primary">${fileInput.files[0].name}</strong> (${(fileInput.files[0].size / 1024 / 1024).toFixed(2)} MB)`;
        }
      });
    }

    // Submit handler
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('orderName')?.value.trim();
      const phone = document.getElementById('orderPhone')?.value.trim();
      const email = document.getElementById('orderEmail')?.value.trim();

      if (!name) {
        showToast('Please enter your full name.', 'error');
        return;
      }

      if (!phone || phone.length < 7) {
        showToast('Please enter a valid phone number for quote communication.', 'error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        showToast('Please provide a valid email address.', 'error');
        return;
      }

      // Success
      showToast('Thank you! Your printing quote request has been submitted successfully. Our production team will contact you within 2 hours.', 'success');
      form.reset();
      if (dropzoneText) {
        dropzoneText.innerHTML = `Drag & drop your print-ready file (PDF, AI, PSD, TIFF, JPG) or <span class="text-primary text-decoration-underline">Browse Files</span>`;
      }
    });
  }

  // --- Generic Contact Form ---
  function initContactForm() {
    const contactForm = document.getElementById('generalContactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]')?.value.trim();
      const email = contactForm.querySelector('[name="email"]')?.value.trim();
      const message = contactForm.querySelector('[name="message"]')?.value.trim();

      if (!name || !email || !message) {
        showToast('Please fill out all required contact fields.', 'error');
        return;
      }

      showToast('Message sent! Thank you for contacting FLEXORA. We will reply shortly.', 'success');
      contactForm.reset();
    });
  }

  // --- Newsletter Forms ---
  function initNewsletterForms() {
    document.querySelectorAll('.newsletter-form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        if (!input || !input.value.trim() || !input.value.includes('@')) {
          showToast('Please enter a valid email address for newsletter subscription.', 'error');
          return;
        }

        showToast('Subscribed! You are now subscribed to FLEXORA printing discounts and updates.', 'success');
        form.reset();
      });
    });
  }

  // --- Authentication Forms (Login / Register / Forgot Password) ---
  function initAuthForms() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail')?.value.trim();
        const password = document.getElementById('loginPassword')?.value.trim();

        if (!email || !password) {
          showToast('Please enter your email and password.', 'error');
          return;
        }

        showToast('Login successful! Redirecting to customer portal demo...', 'success');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1200);
      });
    }

    const regForm = document.getElementById('registerForm');
    if (regForm) {
      regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName')?.value.trim();
        const email = document.getElementById('regEmail')?.value.trim();
        const pass = document.getElementById('regPassword')?.value.trim();
        const confirm = document.getElementById('regConfirmPassword')?.value.trim();

        if (!name || !email || !pass) {
          showToast('Please fill out all registration fields.', 'error');
          return;
        }

        if (pass !== confirm) {
          showToast('Passwords do not match.', 'error');
          return;
        }

        showToast('Account created successfully! Welcome to FLEXORA.', 'success');
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1200);
      });
    }

    const forgotForm = document.getElementById('forgotPasswordForm');
    if (forgotForm) {
      forgotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('forgotEmail')?.value.trim();
        if (!email || !email.includes('@')) {
          showToast('Please enter a valid registered email address.', 'error');
          return;
        }

        showToast('Password reset link has been dispatched to your email.', 'success');
        forgotForm.reset();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initPasswordToggles();
    initOrderForm();
    initContactForm();
    initNewsletterForms();
    initAuthForms();
  });
})();
