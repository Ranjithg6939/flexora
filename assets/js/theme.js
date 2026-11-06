/**
 * FLEXORA - Dark / Light Mode & RTL / LTR Switcher
 * Persists user preference via localStorage
 */

(function () {
  'use strict';

  const THEME_STORAGE_KEY = 'flexora_theme';
  const RTL_STORAGE_KEY = 'flexora_direction';
  const root = document.documentElement;

  /* ================= THEME TOGGLE ================= */
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    updateToggleIcons(theme);
  }

  function updateToggleIcons(theme) {
    const toggleButtons = document.querySelectorAll('.theme-toggle-btn');
    toggleButtons.forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (theme === 'dark') {
          icon.className = 'fa-solid fa-sun';
          btn.setAttribute('aria-label', 'Switch to light mode');
          btn.setAttribute('title', 'Switch to light mode');
        } else {
          icon.className = 'fa-solid fa-moon';
          btn.setAttribute('aria-label', 'Switch to dark mode');
          btn.setAttribute('title', 'Switch to dark mode');
        }
      }
    });
  }

  /* ================= RTL TOGGLE ================= */
  function getPreferredDirection() {
    return localStorage.getItem(RTL_STORAGE_KEY) || 'ltr';
  }

  function applyDirection(dir) {
    if (dir === 'rtl') {
      root.setAttribute('dir', 'rtl');
    } else {
      root.removeAttribute('dir');
    }
    updateRtlButtons(dir);
  }

  function updateRtlButtons(dir) {
    const rtlButtons = document.querySelectorAll('.rtl-toggle-btn');
    rtlButtons.forEach(btn => {
      const text = btn.querySelector('.rtl-text');
      if (dir === 'rtl') {
        if (text) text.textContent = 'LTR';
        btn.classList.add('is-active');
        btn.setAttribute('aria-label', 'Switch to LTR layout');
        btn.setAttribute('title', 'Switch to LTR layout');
      } else {
        if (text) text.textContent = 'RTL';
        btn.classList.remove('is-active');
        btn.setAttribute('aria-label', 'Switch to RTL layout');
        btn.setAttribute('title', 'Switch to RTL layout');
      }
    });
  }

  // Apply preferences immediately to avoid layout flash
  applyTheme(getPreferredTheme());
  applyDirection(getPreferredDirection());

  // Setup DOM event listeners
  document.addEventListener('DOMContentLoaded', () => {
    updateToggleIcons(getPreferredTheme());
    updateRtlButtons(getPreferredDirection());

    // Theme toggle click
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
        applyTheme(newTheme);
      });
    });

    // RTL toggle click
    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentDir = root.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr';
        const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        localStorage.setItem(RTL_STORAGE_KEY, newDir);
        applyDirection(newDir);
      });
    });
  });
})();
