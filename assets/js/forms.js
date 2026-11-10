/**
 * FLEXORA - Forms Handling, Front-end Validation & Toast Notifications
 * Professional Validation Engine covering Name, Email, Phone, Password, Confirm Password,
 * Numbers, Message Length, Date, Dropdowns, Checkboxes, Live Real-time UI & Duplicate Prevention.
 */

(function () {
  'use strict';

  // ===================================================================
  // 1. TOAST NOTIFICATION SYSTEM
  // ===================================================================
  window.showToast = function (message, type = 'success') {
    let container = document.querySelector('.custom-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'custom-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `custom-toast toast-${type}`;
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');

    const iconClass = type === 'success'
      ? 'fa-circle-check'
      : (type === 'error' ? 'fa-triangle-exclamation' : 'fa-circle-info');

    const badgeLabel = type === 'success'
      ? 'Success'
      : (type === 'error' ? 'Action Required' : 'Notice');

    toast.innerHTML = `
      <div class="toast-indicator-icon">
        <i class="fa-solid ${iconClass}"></i>
      </div>
      <div class="toast-content flex-grow-1">
        <div class="toast-title">${badgeLabel}</div>
        <div class="toast-msg">${message}</div>
      </div>
      <button type="button" class="toast-close-btn" aria-label="Close notification">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="toast-progress-track">
        <div class="toast-progress-bar"></div>
      </div>
    `;

    const closeBtn = toast.querySelector('.toast-close-btn');
    const dismissToast = () => {
      toast.classList.add('toast-dismissing');
      setTimeout(() => {
        if (toast.parentElement) toast.remove();
      }, 280);
    };

    if (closeBtn) {
      closeBtn.addEventListener('click', dismissToast);
    }

    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentElement && !toast.classList.contains('toast-dismissing')) {
        dismissToast();
      }
    }, 4500);
  };

  // ===================================================================
  // 2. REUSABLE VALIDATION RULES ENGINE
  // ===================================================================

  // Name Validation: 3-50 chars, alphabetic and spaces only
  function validateName(value, isRequired = true, fieldLabel = 'Full name') {
    const trimmed = (value || '').trim();
    if (!trimmed) {
      return isRequired
        ? { isValid: false, message: `${fieldLabel} is required.` }
        : { isValid: true };
    }

    if (trimmed.length < 3) {
      return {
        isValid: false,
        message: `${fieldLabel} must be at least 3 characters.`
      };
    }

    if (trimmed.length > 50) {
      return {
        isValid: false,
        message: `${fieldLabel} cannot exceed 50 characters.`
      };
    }

    if (!/^[A-Za-z\s]+$/.test(trimmed)) {
      return {
        isValid: false,
        message: `${fieldLabel} can only contain alphabetic letters and spaces.`
      };
    }

    return { isValid: true };
  }

  // Email Validation: proper RFC compliant format with username, @, domain, and extension
  function validateEmail(value, isRequired = true) {
    const trimmed = (value || '').trim();
    if (!trimmed) {
      return isRequired
        ? { isValid: false, message: 'Email address is required.' }
        : { isValid: true };
    }

    if (!trimmed.includes('@')) {
      return {
        isValid: false,
        message: 'Email address must include an "@" symbol.'
      };
    }

    const parts = trimmed.split('@');
    if (parts.length !== 2 || !parts[0] || !parts[1]) {
      return {
        isValid: false,
        message: 'Please provide both username and domain (e.g. name@company.com).'
      };
    }

    if (!parts[1].includes('.')) {
      return {
        isValid: false,
        message: 'Email domain must contain a valid extension (e.g. .com, .org).'
      };
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(trimmed)) {
      return {
        isValid: false,
        message: 'Please enter a valid email address (e.g. name@company.com).'
      };
    }

    return { isValid: true };
  }

  // Phone Number Validation: digits, country codes, length 10-15, Indian numbers starting 6-9
  function validatePhone(value, isRequired = true) {
    const trimmed = (value || '').trim();
    if (!trimmed) {
      return isRequired
        ? { isValid: false, message: 'Phone number is required.' }
        : { isValid: true };
    }

    if (/[^\d\s+\-()]/g.test(trimmed)) {
      return {
        isValid: false,
        message: 'Phone number can only contain digits, spaces, hyphens, and a leading country code (+).'
      };
    }

    const digits = trimmed.replace(/\D/g, '');

    if (digits.length < 10) {
      return {
        isValid: false,
        message: 'Phone number must contain at least 10 digits.'
      };
    }

    if (digits.length > 15) {
      return {
        isValid: false,
        message: 'Phone number cannot exceed 15 digits.'
      };
    }

    // Indian mobile phone validation
    if (digits.length === 10) {
      if (!/^[6-9]/.test(digits)) {
        return {
          isValid: false,
          message: 'Indian 10-digit mobile numbers must start with 6, 7, 8, or 9.'
        };
      }
    } else if (digits.length === 12 && digits.startsWith('91')) {
      const nationalPart = digits.slice(2);
      if (!/^[6-9]/.test(nationalPart)) {
        return {
          isValid: false,
          message: 'Indian mobile numbers with +91 must start with 6, 7, 8, or 9.'
        };
      }
    }

    return { isValid: true };
  }

  // Password Validation Criteria Checker
  function checkPasswordCriteria(value) {
    const str = value || '';
    return {
      length: str.length >= 8,
      upper: /[A-Z]/.test(str),
      lower: /[a-z]/.test(str),
      number: /\d/.test(str),
      special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(str)
    };
  }

  // Full Password Validation
  function validatePassword(value, isRequired = true) {
    if (!value) {
      return isRequired
        ? { isValid: false, message: 'Password is required.', criteria: checkPasswordCriteria('') }
        : { isValid: true, criteria: checkPasswordCriteria('') };
    }

    const c = checkPasswordCriteria(value);
    const isAllMet = c.length && c.upper && c.lower && c.number && c.special;

    if (!isAllMet) {
      const missing = [];
      if (!c.length) missing.push('min 8 chars');
      if (!c.upper) missing.push('1 uppercase');
      if (!c.lower) missing.push('1 lowercase');
      if (!c.number) missing.push('1 number');
      if (!c.special) missing.push('1 special char');

      return {
        isValid: false,
        message: `Password needs: ${missing.join(', ')}.`,
        criteria: c
      };
    }

    return { isValid: true, criteria: c };
  }

  // Confirm Password Validation
  function validateConfirmPassword(confirmValue, passwordValue) {
    if (!confirmValue) {
      return { isValid: false, message: 'Please confirm your password.' };
    }
    if (confirmValue !== passwordValue) {
      return { isValid: false, message: 'Passwords do not match.' };
    }
    return { isValid: true };
  }

  // Number Validation: non-negative, bounds, positive values
  function validateNumber(value, min = 1, max = 10000, isRequired = true, fieldLabel = 'Value') {
    const trimmed = String(value === undefined || value === null ? '' : value).trim();
    if (trimmed === '') {
      return isRequired
        ? { isValid: false, message: `${fieldLabel} is required.` }
        : { isValid: true };
    }

    const num = Number(trimmed);
    if (isNaN(num)) {
      return { isValid: false, message: `${fieldLabel} must be a valid number.` };
    }

    if (num < 0) {
      return { isValid: false, message: `${fieldLabel} cannot be negative.` };
    }

    if (num < min) {
      return { isValid: false, message: `${fieldLabel} must be at least ${min}.` };
    }

    if (num > max) {
      return { isValid: false, message: `${fieldLabel} cannot exceed ${max}.` };
    }

    return { isValid: true };
  }

  // Message / Description Validation: 10-500 chars, no empty/whitespace
  function validateMessage(value, min = 10, max = 500, isRequired = true, fieldLabel = 'Message') {
    const trimmed = (value || '').trim();
    if (!trimmed) {
      return isRequired
        ? { isValid: false, message: `${fieldLabel} is required.` }
        : { isValid: true };
    }

    if (trimmed.length < min) {
      return {
        isValid: false,
        message: `${fieldLabel} must be at least ${min} characters.`
      };
    }

    if (trimmed.length > max) {
      return {
        isValid: false,
        message: `${fieldLabel} cannot exceed ${max} characters.`
      };
    }

    return { isValid: true };
  }

  // Date Validation: valid date format, no past dates
  function validateDate(value, allowPast = false, isRequired = true, fieldLabel = 'Required delivery date') {
    const trimmed = (value || '').trim();
    if (!trimmed) {
      return isRequired
        ? { isValid: false, message: `${fieldLabel} is required.` }
        : { isValid: true };
    }

    const selectedDate = new Date(trimmed + 'T00:00:00');
    if (isNaN(selectedDate.getTime())) {
      return { isValid: false, message: 'Please enter a valid date.' };
    }

    if (!allowPast) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        return {
          isValid: false,
          message: `${fieldLabel} cannot be in the past.`
        };
      }
    }

    return { isValid: true };
  }

  // Dropdown Option Validation
  function validateDropdown(value, isRequired = true, fieldLabel = 'option') {
    if (isRequired && (!value || value === '' || value === 'disabled')) {
      return { isValid: false, message: `Please select a valid ${fieldLabel}.` };
    }
    return { isValid: true };
  }

  // Checkbox Validation
  function validateCheckbox(checked, isRequired = true, message = 'This checkbox is required.') {
    if (isRequired && !checked) {
      return { isValid: false, message };
    }
    return { isValid: true };
  }

  // ===================================================================
  // 3. UI / UX FEEDBACK HELPERS
  // ===================================================================

  function getErrorAnchor(field) {
    if (field.parentElement && (field.parentElement.classList.contains('input-group') || field.parentElement.classList.contains('position-relative'))) {
      return field.parentElement;
    }
    const formCheck = field.closest('.form-check');
    if (formCheck) {
      return formCheck;
    }
    return field;
  }

  function showFieldError(field, message) {
    field.classList.remove('is-valid');
    field.classList.add('is-invalid');

    const anchor = getErrorAnchor(field);
    let errorEl = anchor.nextElementSibling;
    if (!errorEl || !errorEl.classList.contains('field-error-msg')) {
      errorEl = document.createElement('div');
      errorEl.className = 'field-error-msg';
      anchor.parentNode.insertBefore(errorEl, anchor.nextSibling);
    }
    errorEl.innerHTML = `<i class="fa-solid fa-circle-exclamation me-1"></i> ${message}`;
  }

  function clearFieldError(field, markValid = true) {
    field.classList.remove('is-invalid');
    if (markValid) {
      field.classList.add('is-valid');
    } else {
      field.classList.remove('is-valid');
    }

    const anchor = getErrorAnchor(field);
    const errorEl = anchor.nextElementSibling;
    if (errorEl && errorEl.classList.contains('field-error-msg')) {
      errorEl.remove();
    }
  }

  function resetFieldValidation(field) {
    field.classList.remove('is-valid', 'is-invalid');
    const anchor = getErrorAnchor(field);
    const errorEl = anchor.nextElementSibling;
    if (errorEl && errorEl.classList.contains('field-error-msg')) {
      errorEl.remove();
    }
  }

  // Attach Realtime Validation (on blur, and live correction on input/change)
  function attachRealtimeValidation(field, validatorFn) {
    if (!field) return;

    field.addEventListener('blur', () => {
      const res = validatorFn();
      if (!res.isValid) {
        showFieldError(field, res.message);
      } else {
        clearFieldError(field, true);
      }
    });

    const eventName = (field.type === 'checkbox' || field.tagName === 'SELECT') ? 'change' : 'input';
    field.addEventListener(eventName, () => {
      // If field is currently marked invalid, validate live to clear error immediately upon correction
      if (field.classList.contains('is-invalid')) {
        const res = validatorFn();
        if (res.isValid) {
          clearFieldError(field, true);
        } else {
          showFieldError(field, res.message);
        }
      }
    });
  }

  // Duplicate Submission Prevention & Button Loading Animation
  function handleFormSubmission(form, submitBtn, successMsg, callback) {
    if (form.dataset.submitting === 'true') return;
    form.dataset.submitting = 'true';

    let originalHtml = '';
    if (submitBtn) {
      submitBtn.disabled = true;
      originalHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Submitting...`;
    }

    setTimeout(() => {
      form.dataset.submitting = 'false';
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHtml;
      }
      window.showToast(successMsg, 'success');
      if (callback) callback();
    }, 1200);
  }

  // ===================================================================
  // 4. PASSWORD VISIBILITY TOGGLE
  // ===================================================================
  function initPasswordToggles() {
    const toggles = document.querySelectorAll('.password-toggle-btn');
    toggles.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-target');
        const input = document.getElementById(targetId);
        if (!input) return;

        const icon = btn.querySelector('i');
        if (input.type === 'password') {
          input.type = 'text';
          if (icon) {
            icon.className = 'fa-regular fa-eye-slash';
          }
        } else {
          input.type = 'password';
          if (icon) {
            icon.className = 'fa-regular fa-eye';
          }
        }
      });
    });
  }

  // ===================================================================
  // 5. ORDER ENQUIRY FORM VALIDATION (contact.html)
  // ===================================================================
  function initOrderForm() {
    const form = document.getElementById('orderEnquiryForm');
    if (!form) return;

    const nameInp = document.getElementById('orderName');
    const phoneInp = document.getElementById('orderPhone');
    const emailInp = document.getElementById('orderEmail');
    const prodSel = document.getElementById('orderProduct');
    const widthInp = document.getElementById('orderWidth');
    const heightInp = document.getElementById('orderHeight');
    const qtyInp = document.getElementById('orderQty');
    const matSel = document.getElementById('orderMaterial');
    const dateInp = document.getElementById('orderDate');
    const notesInp = document.getElementById('orderNotes');
    const fileInp = document.getElementById('orderFile');
    const dropzoneText = document.getElementById('dropzoneText');
    const submitBtn = form.querySelector('.btn-submit-order') || form.querySelector('button[type="submit"]');

    // Auto-set minimum date on orderDate to today
    if (dateInp) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      dateInp.min = `${yyyy}-${mm}-${dd}`;
    }

    // URL parameter pre-population
    const params = new URLSearchParams(window.location.search);
    const prodParam = params.get('product');
    const widthParam = params.get('width');
    const heightParam = params.get('height');
    const qtyParam = params.get('qty');

    if (prodParam && prodSel) {
      for (let i = 0; i < prodSel.options.length; i++) {
        if (prodSel.options[i].value === prodParam || prodSel.options[i].value.includes(prodParam)) {
          prodSel.selectedIndex = i;
          break;
        }
      }
    }
    if (widthParam && widthInp) widthInp.value = widthParam;
    if (heightParam && heightInp) heightInp.value = heightParam;
    if (qtyParam && qtyInp) qtyInp.value = qtyParam;

    // File upload indicator
    if (fileInp && dropzoneText) {
      fileInp.addEventListener('change', () => {
        if (fileInp.files && fileInp.files[0]) {
          const fileSizeMB = (fileInp.files[0].size / 1024 / 1024).toFixed(2);
          if (fileInp.files[0].size > 100 * 1024 * 1024) {
            showToast('Selected file exceeds maximum 100MB limit.', 'error');
            fileInp.value = '';
            dropzoneText.innerHTML = `Drag & drop your print-ready artwork or <span class="text-primary text-decoration-underline">Browse Files</span>`;
            return;
          }
          dropzoneText.innerHTML = `<strong class="text-primary"><i class="fa-solid fa-file-check me-1"></i> ${fileInp.files[0].name}</strong> (${fileSizeMB} MB)`;
        }
      });
    }

    // Attach real-time validation to all fields
    if (nameInp) attachRealtimeValidation(nameInp, () => validateName(nameInp.value, true, 'Customer / Company Name'));
    if (phoneInp) attachRealtimeValidation(phoneInp, () => validatePhone(phoneInp.value, true));
    if (emailInp) attachRealtimeValidation(emailInp, () => validateEmail(emailInp.value, true));
    if (prodSel) attachRealtimeValidation(prodSel, () => validateDropdown(prodSel.value, true, 'Product Category'));
    if (widthInp) attachRealtimeValidation(widthInp, () => validateNumber(widthInp.value, 1, 100, true, 'Banner Width'));
    if (heightInp) attachRealtimeValidation(heightInp, () => validateNumber(heightInp.value, 1, 100, true, 'Banner Height'));
    if (qtyInp) attachRealtimeValidation(qtyInp, () => validateNumber(qtyInp.value, 1, 10000, true, 'Order Quantity'));
    if (matSel) attachRealtimeValidation(matSel, () => validateDropdown(matSel.value, true, 'Material Selection'));
    if (dateInp) attachRealtimeValidation(dateInp, () => validateDate(dateInp.value, false, true, 'Required Delivery Date'));
    if (notesInp) {
      attachRealtimeValidation(notesInp, () => {
        if (notesInp.value.trim().length > 0) {
          return validateMessage(notesInp.value, 10, 500, false, 'Additional Requirements');
        }
        return { isValid: true };
      });
    }

    // Form submit validation
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;
      let firstInvalidField = null;

      function checkField(field, res) {
        if (!field) return;
        if (!res.isValid) {
          showFieldError(field, res.message);
          hasError = true;
          if (!firstInvalidField) firstInvalidField = field;
        } else {
          clearFieldError(field, true);
        }
      }

      if (nameInp) checkField(nameInp, validateName(nameInp.value, true, 'Customer / Company Name'));
      if (phoneInp) checkField(phoneInp, validatePhone(phoneInp.value, true));
      if (emailInp) checkField(emailInp, validateEmail(emailInp.value, true));
      if (prodSel) checkField(prodSel, validateDropdown(prodSel.value, true, 'Product Category'));
      if (widthInp) checkField(widthInp, validateNumber(widthInp.value, 1, 100, true, 'Banner Width'));
      if (heightInp) checkField(heightInp, validateNumber(heightInp.value, 1, 100, true, 'Banner Height'));
      if (qtyInp) checkField(qtyInp, validateNumber(qtyInp.value, 1, 10000, true, 'Order Quantity'));
      if (matSel) checkField(matSel, validateDropdown(matSel.value, true, 'Material Selection'));
      if (dateInp) checkField(dateInp, validateDate(dateInp.value, false, true, 'Required Delivery Date'));
      if (notesInp && notesInp.value.trim().length > 0) {
        checkField(notesInp, validateMessage(notesInp.value, 10, 500, false, 'Additional Requirements'));
      }

      if (hasError) {
        window.showToast('Please correct the highlighted form errors before submitting.', 'error');
        if (firstInvalidField) {
          firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstInvalidField.focus();
        }
        return;
      }

      // Submission Success with duplicate protection
      handleFormSubmission(form, submitBtn, 'Thank you! Your custom printing quote enquiry has been submitted. Our production team will contact you within 2 hours.', () => {
        form.reset();
        [nameInp, phoneInp, emailInp, prodSel, widthInp, heightInp, qtyInp, matSel, dateInp, notesInp].forEach(f => {
          if (f) resetFieldValidation(f);
        });
        if (dropzoneText) {
          dropzoneText.innerHTML = `Drag & drop your print-ready artwork or <span class="text-primary text-decoration-underline">Browse Files</span>`;
        }
      });
    });
  }

  // ===================================================================
  // 6. GENERAL CONTACT FORM VALIDATION (contact.html)
  // ===================================================================
  function initContactForm() {
    const form = document.getElementById('generalContactForm');
    if (!form) return;

    const nameInp = form.querySelector('[name="name"]');
    const emailInp = form.querySelector('[name="email"]');
    const msgInp = form.querySelector('[name="message"]');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (nameInp) attachRealtimeValidation(nameInp, () => validateName(nameInp.value, true, 'Your Name'));
    if (emailInp) attachRealtimeValidation(emailInp, () => validateEmail(emailInp.value, true));
    if (msgInp) attachRealtimeValidation(msgInp, () => validateMessage(msgInp.value, 10, 500, true, 'Message'));

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;
      let firstInvalid = null;

      function check(field, res) {
        if (!field) return;
        if (!res.isValid) {
          showFieldError(field, res.message);
          hasError = true;
          if (!firstInvalid) firstInvalid = field;
        } else {
          clearFieldError(field, true);
        }
      }

      if (nameInp) check(nameInp, validateName(nameInp.value, true, 'Your Name'));
      if (emailInp) check(emailInp, validateEmail(emailInp.value, true));
      if (msgInp) check(msgInp, validateMessage(msgInp.value, 10, 500, true, 'Message'));

      if (hasError) {
        window.showToast('Please correct the highlighted errors before submitting your message.', 'error');
        if (firstInvalid) {
          firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstInvalid.focus();
        }
        return;
      }

      handleFormSubmission(form, submitBtn, 'Message sent! Thank you for contacting FLEXORA. Our team will reply shortly.', () => {
        form.reset();
        [nameInp, emailInp, msgInp].forEach(f => { if (f) resetFieldValidation(f); });
      });
    });
  }

  // ===================================================================
  // 7. LOGIN FORM VALIDATION (login.html)
  // ===================================================================
  function initLoginForm() {
    const form = document.getElementById('loginForm');
    if (!form) return;

    const emailInp = document.getElementById('loginEmail');
    const passInp = document.getElementById('loginPassword');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (emailInp) attachRealtimeValidation(emailInp, () => validateEmail(emailInp.value, true));
    if (passInp) {
      attachRealtimeValidation(passInp, () => {
        if (!passInp.value.trim()) {
          return { isValid: false, message: 'Password is required.' };
        }
        return { isValid: true };
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;
      let firstInvalid = null;

      const emailRes = validateEmail(emailInp?.value, true);
      if (!emailRes.isValid) {
        showFieldError(emailInp, emailRes.message);
        hasError = true;
        firstInvalid = emailInp;
      } else {
        clearFieldError(emailInp, true);
      }

      if (!passInp?.value.trim()) {
        showFieldError(passInp, 'Password is required.');
        hasError = true;
        if (!firstInvalid) firstInvalid = passInp;
      } else {
        clearFieldError(passInp, true);
      }

      if (hasError) {
        window.showToast('Please enter your valid login credentials.', 'error');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      handleFormSubmission(form, submitBtn, 'Login successful! Redirecting to customer portal...', () => {
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 800);
      });
    });
  }

  // ===================================================================
  // 8. REGISTER FORM VALIDATION & LIVE PASSWORD CHECKLIST (register.html)
  // ===================================================================
  function initRegisterForm() {
    const form = document.getElementById('registerForm');
    if (!form) return;

    const nameInp = document.getElementById('regName');
    const emailInp = document.getElementById('regEmail');
    const passInp = document.getElementById('regPassword');
    const confirmInp = document.getElementById('regConfirmPassword');
    const termsCheck = document.getElementById('termsCheck');
    const checklistBox = document.getElementById('regPasswordChecklist');
    const submitBtn = form.querySelector('button[type="submit"]');

    // Live Password Requirements Checklist Elements
    const reqLength = document.getElementById('reqLength');
    const reqUpper = document.getElementById('reqUpper');
    const reqLower = document.getElementById('reqLower');
    const reqNumber = document.getElementById('reqNumber');
    const reqSpecial = document.getElementById('reqSpecial');

    function updateChecklistItem(itemEl, isMet) {
      if (!itemEl) return;
      const icon = itemEl.querySelector('i');
      if (isMet) {
        itemEl.classList.remove('invalid');
        itemEl.classList.add('valid');
        if (icon) icon.className = 'fa-solid fa-circle-check me-1';
      } else {
        itemEl.classList.remove('valid');
        itemEl.classList.add('invalid');
        if (icon) icon.className = 'fa-solid fa-circle-xmark me-1';
      }
    }

    if (passInp) {
      passInp.addEventListener('focus', () => {
        if (checklistBox) checklistBox.classList.remove('d-none');
      });

      passInp.addEventListener('input', () => {
        const criteria = checkPasswordCriteria(passInp.value);
        updateChecklistItem(reqLength, criteria.length);
        updateChecklistItem(reqUpper, criteria.upper);
        updateChecklistItem(reqLower, criteria.lower);
        updateChecklistItem(reqNumber, criteria.number);
        updateChecklistItem(reqSpecial, criteria.special);

        if (passInp.classList.contains('is-invalid')) {
          const res = validatePassword(passInp.value, true);
          if (res.isValid) {
            clearFieldError(passInp, true);
          }
        }

        // Revalidate confirm password if it already has input
        if (confirmInp && confirmInp.value) {
          const cRes = validateConfirmPassword(confirmInp.value, passInp.value);
          if (cRes.isValid) {
            clearFieldError(confirmInp, true);
          } else {
            showFieldError(confirmInp, cRes.message);
          }
        }
      });

      passInp.addEventListener('blur', () => {
        const res = validatePassword(passInp.value, true);
        if (!res.isValid) {
          showFieldError(passInp, res.message);
        } else {
          clearFieldError(passInp, true);
        }
      });
    }

    if (nameInp) attachRealtimeValidation(nameInp, () => validateName(nameInp.value, true, 'Full Name'));
    if (emailInp) attachRealtimeValidation(emailInp, () => validateEmail(emailInp.value, true));
    if (confirmInp) {
      attachRealtimeValidation(confirmInp, () => validateConfirmPassword(confirmInp.value, passInp?.value || ''));
    }
    if (termsCheck) {
      termsCheck.addEventListener('change', () => {
        if (termsCheck.checked) {
          clearFieldError(termsCheck, false);
        } else {
          showFieldError(termsCheck, 'You must accept the Terms of Service & Privacy Policy.');
        }
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;
      let firstInvalid = null;

      function check(field, res) {
        if (!field) return;
        if (!res.isValid) {
          showFieldError(field, res.message);
          hasError = true;
          if (!firstInvalid) firstInvalid = field;
        } else {
          clearFieldError(field, true);
        }
      }

      if (nameInp) check(nameInp, validateName(nameInp.value, true, 'Full Name'));
      if (emailInp) check(emailInp, validateEmail(emailInp.value, true));
      if (passInp) check(passInp, validatePassword(passInp.value, true));
      if (confirmInp) check(confirmInp, validateConfirmPassword(confirmInp.value, passInp?.value || ''));
      if (termsCheck) {
        const tRes = validateCheckbox(termsCheck.checked, true, 'You must agree to the Terms of Service & Privacy Policy.');
        if (!tRes.isValid) {
          showFieldError(termsCheck, tRes.message);
          hasError = true;
          if (!firstInvalid) firstInvalid = termsCheck;
        } else {
          clearFieldError(termsCheck, false);
        }
      }

      if (hasError) {
        window.showToast('Please resolve all validation errors to complete registration.', 'error');
        if (checklistBox) checklistBox.classList.remove('d-none');
        if (firstInvalid) {
          firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstInvalid.focus();
        }
        return;
      }

      handleFormSubmission(form, submitBtn, 'Account created successfully! Welcome to FLEXORA.', () => {
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1000);
      });
    });
  }

  // ===================================================================
  // 9. FORGOT PASSWORD FORM VALIDATION (forgot-password.html)
  // ===================================================================
  function initForgotPasswordForm() {
    const form = document.getElementById('forgotPasswordForm');
    if (!form) return;

    const emailInp = document.getElementById('forgotEmail');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (emailInp) attachRealtimeValidation(emailInp, () => validateEmail(emailInp.value, true));

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const res = validateEmail(emailInp?.value, true);
      if (!res.isValid) {
        showFieldError(emailInp, res.message);
        window.showToast(res.message, 'error');
        if (emailInp) emailInp.focus();
        return;
      }

      clearFieldError(emailInp, true);

      handleFormSubmission(form, submitBtn, 'Password reset instructions have been dispatched to your email.', () => {
        form.reset();
        if (emailInp) resetFieldValidation(emailInp);
      });
    });
  }

  // ===================================================================
  // 10. GLOBAL NEWSLETTER FORMS (Across All Pages)
  // ===================================================================
  function initNewsletterForms() {
    document.querySelectorAll('.newsletter-form').forEach(form => {
      const emailInp = form.querySelector('input[type="email"]');
      const submitBtn = form.querySelector('button[type="submit"]');

      if (emailInp) {
        attachRealtimeValidation(emailInp, () => validateEmail(emailInp.value, true));
      }

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const res = validateEmail(emailInp?.value, true);
        if (!res.isValid) {
          showFieldError(emailInp, res.message);
          window.showToast(res.message, 'error');
          if (emailInp) emailInp.focus();
          return;
        }

        clearFieldError(emailInp, true);

        handleFormSubmission(form, submitBtn, 'Subscribed! You are now subscribed to FLEXORA trade discounts and updates.', () => {
          form.reset();
          if (emailInp) resetFieldValidation(emailInp);
        });
      });
    });
  }

  // ===================================================================
  // 11. SIDEBAR SEARCH FORM (blog-details.html)
  // ===================================================================
  function initSidebarSearchForm() {
    const searchForm = document.querySelector('.sidebar-search-form');
    if (!searchForm) return;

    const searchInp = searchForm.querySelector('#sidebarSearchInput') || searchForm.querySelector('input[name="search"]');
    if (searchInp) {
      searchInp.addEventListener('blur', () => {
        if (!searchInp.value.trim()) {
          showFieldError(searchInp, 'Please enter a search term.');
        } else {
          clearFieldError(searchInp, true);
        }
      });

      searchInp.addEventListener('input', () => {
        if (searchInp.classList.contains('is-invalid') && searchInp.value.trim().length >= 2) {
          clearFieldError(searchInp, true);
        }
      });
    }

    searchForm.addEventListener('submit', (e) => {
      const query = (searchInp?.value || '').trim();
      if (!query || query.length < 2) {
        e.preventDefault();
        showFieldError(searchInp, 'Please enter at least 2 characters to search.');
        window.showToast('Please enter at least 2 characters to search.', 'error');
        if (searchInp) searchInp.focus();
      }
    });
  }

  // ===================================================================
  // 12. PRICE CALCULATOR NUMBER VALIDATION (rate-card.html)
  // ===================================================================
  function initPriceCalculatorValidation() {
    const calcForm = document.getElementById('priceCalculatorForm');
    if (!calcForm) return;

    const widthInp = document.getElementById('calcWidth');
    const heightInp = document.getElementById('calcHeight');
    const qtyInp = document.getElementById('calcQty');

    if (widthInp) attachRealtimeValidation(widthInp, () => validateNumber(widthInp.value, 0.5, 100, true, 'Width'));
    if (heightInp) attachRealtimeValidation(heightInp, () => validateNumber(heightInp.value, 0.5, 100, true, 'Height'));
    if (qtyInp) attachRealtimeValidation(qtyInp, () => validateNumber(qtyInp.value, 1, 10000, true, 'Order Quantity'));
  }

  // ===================================================================
  // 13. DOM INITIALIZATION & GLOBAL EXPORT
  // ===================================================================
  window.FlexoraValidators = {
    validateName,
    validateEmail,
    validatePhone,
    validateNumber,
    validateMessage,
    validateDate,
    validateDropdown,
    validateCheckbox,
    showFieldError,
    clearFieldError,
    resetFieldValidation,
    attachRealtimeValidation
  };

  document.addEventListener('DOMContentLoaded', () => {
    initPasswordToggles();
    initOrderForm();
    initContactForm();
    initLoginForm();
    initRegisterForm();
    initForgotPasswordForm();
    initNewsletterForms();
    initSidebarSearchForm();
    initPriceCalculatorValidation();
  });
})();
