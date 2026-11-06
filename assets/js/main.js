/**
 * FLEXORA - Flex & Banner Printing Shop Website Template
 * Core Main JavaScript
 */

(function () {
  'use strict';

  // --- 1. Sticky Navigation & Active Link Highlight ---
  function initNavigation() {
    const header = document.querySelector('.site-header');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 45) {
          header.classList.add('is-sticky');
        } else {
          header.classList.remove('is-sticky');
        }
      });
    }

    // Highlight active link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .dropdown-item');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        const linkPath = href.split('?')[0];
        if (linkPath === currentPath) {
          link.classList.add('active');
          // If in dropdown, also highlight parent dropdown toggle
          const parentDropdown = link.closest('.dropdown');
          if (parentDropdown) {
            const toggle = parentDropdown.querySelector('.dropdown-toggle');
            if (toggle) toggle.classList.add('active');
          }
        }
      }
    });
  }

  // --- 2. Back to Top Button ---
  function initBackToTop() {
    let btn = document.querySelector('.back-to-top');
    if (!btn) {
      btn = document.createElement('button');
      btn.className = 'back-to-top';
      btn.setAttribute('aria-label', 'Back to top');
      btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
      document.body.appendChild(btn);
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 3. Lightbox Modal Gallery ---
  function initLightbox() {
    let modal = document.querySelector('.custom-lightbox-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'custom-lightbox-modal';
      modal.innerHTML = `
        <div class="lightbox-content">
          <button class="lightbox-close" aria-label="Close Lightbox">&times;</button>
          <img src="" alt="FLEXORA Large Preview" id="lightboxActiveImg">
          <div class="lightbox-caption" id="lightboxCaption"></div>
        </div>
      `;
      document.body.appendChild(modal);
    }

    const modalImg = modal.querySelector('#lightboxActiveImg');
    const modalCap = modal.querySelector('#lightboxCaption');
    const closeBtn = modal.querySelector('.lightbox-close');

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    // Delegate click for gallery triggers
    document.querySelectorAll('.lightbox-trigger').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const img = item.querySelector('img') || item;
        const fullSrc = item.getAttribute('data-full-img') || img.src;
        const caption = item.getAttribute('data-caption') || img.alt || 'FLEXORA Flex Printing Showcase';

        modalImg.src = fullSrc;
        modalCap.textContent = caption;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
  }

  // --- 4. Before / After Comparison Slider ---
  function initBeforeAfterSlider() {
    const containers = document.querySelectorAll('.before-after-container');
    containers.forEach(container => {
      const afterLayer = container.querySelector('.after-layer');
      const handle = container.querySelector('.slider-handle');
      if (!afterLayer || !handle) return;

      let isDragging = false;

      function updateSlider(xPos) {
        const rect = container.getBoundingClientRect();
        let offset = xPos - rect.left;
        if (offset < 0) offset = 0;
        if (offset > rect.width) offset = rect.width;

        const percentage = (offset / rect.width) * 100;
        afterLayer.style.width = `${percentage}%`;
        handle.style.left = `${percentage}%`;
      }

      function onMouseMove(e) {
        if (!isDragging) return;
        updateSlider(e.clientX);
      }

      function onTouchMove(e) {
        if (!isDragging) return;
        if (e.touches && e.touches[0]) {
          updateSlider(e.touches[0].clientX);
        }
      }

      handle.addEventListener('mousedown', () => isDragging = true);
      container.addEventListener('mousedown', (e) => {
        isDragging = true;
        updateSlider(e.clientX);
      });

      window.addEventListener('mouseup', () => isDragging = false);
      window.addEventListener('mousemove', onMouseMove);

      // Touch support
      handle.addEventListener('touchstart', () => isDragging = true);
      container.addEventListener('touchstart', (e) => {
        isDragging = true;
        if (e.touches && e.touches[0]) updateSlider(e.touches[0].clientX);
      });
      window.addEventListener('touchend', () => isDragging = false);
      window.addEventListener('touchmove', onTouchMove);
    });
  }

  // --- 5. Countdown Timer (Coming Soon Page) ---
  function initCountdown() {
    const timerElem = document.getElementById('comingSoonCountdown');
    if (!timerElem) return;

    // Target date: 30 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 28);

    function updateTimer() {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        timerElem.innerHTML = '<h4>We are Live!</h4>';
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const daysEl = document.getElementById('countDays');
      const hoursEl = document.getElementById('countHours');
      const minutesEl = document.getElementById('countMinutes');
      const secondsEl = document.getElementById('countSeconds');

      if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
      if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // --- 6. Blog Search & Category Filter ---
  function initBlogFilter() {
    const blogItems = document.querySelectorAll('.blog-list-item');
    const filterBtns = document.querySelectorAll('.blog-filter-btn');
    const searchInput = document.getElementById('blogSearchInput');

    if (!blogItems.length) return;

    let activeCategory = 'all';
    let searchQuery = '';

    function filterBlog() {
      blogItems.forEach(item => {
        const itemCat = item.getAttribute('data-category') || '';
        const title = item.querySelector('.blog-card-title')?.textContent.toLowerCase() || '';
        const excerpt = item.querySelector('.blog-excerpt')?.textContent.toLowerCase() || '';

        const matchesCat = (activeCategory === 'all' || itemCat === activeCategory);
        const matchesSearch = (!searchQuery || title.includes(searchQuery) || excerpt.includes(searchQuery));

        if (matchesCat && matchesSearch) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-filter') || 'all';
        filterBlog();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        filterBlog();
      });
    }
  }

  // --- 7. Testimonial Carousel / Card Rotator ---
  function initTestimonialSlider() {
    const sliderContainer = document.querySelector('.testimonial-slider-container');
    if (!sliderContainer) return;

    const cards = sliderContainer.querySelectorAll('.testimonial-slide-item');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    if (cards.length <= 1) return;

    let currentIndex = 0;

    function showSlide(index) {
      cards.forEach((card, i) => {
        if (i === index) {
          card.classList.remove('d-none');
        } else {
          card.classList.add('d-none');
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showSlide(currentIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        showSlide(currentIndex);
      });
    }

    // Auto rotate every 6 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % cards.length;
      showSlide(currentIndex);
    }, 6000);
  }

  // --- 8. Scroll-Triggered Reveal Animations Engine ---
  function initScrollAnimations() {
    // Automatically apply animations to key content cards if not explicitly marked
    const autoAnimateSelectors = [
      '.card-service', 
      '.card-product', 
      '.process-step-card', 
      '.pricing-card', 
      '.gallery-item', 
      '.timeline-card', 
      '.team-card',
      '.service-feature-card',
      '.section-header'
    ];

    autoAnimateSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach((el, index) => {
        if (!el.classList.contains('animate-on-scroll')) {
          el.classList.add('animate-on-scroll');
          if (!el.hasAttribute('data-animate')) {
            el.setAttribute('data-animate', 'fade-up');
          }
          // Stagger delays within grid rows
          const delayClass = `delay-${((index % 4) + 1) * 100}`;
          el.classList.add(delayClass);
        }
      });
    });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (!animatedElements.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-animated');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
      });

      animatedElements.forEach(el => observer.observe(el));
    } else {
      // Fallback for older browsers
      animatedElements.forEach(el => el.classList.add('is-animated'));
    }
  }

  // --- 9. Dynamic Number Counter Animation ---
  function initCounterAnimations() {
    const counterElements = document.querySelectorAll('.stat-number');
    if (!counterElements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          animateCounter(el);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counterElements.forEach(el => observer.observe(el));

    function animateCounter(el) {
      const originalText = el.textContent.trim();
      el.classList.add('counting');

      // Check for formats like "45K+", "14+", "99.8%", "1,800+"
      if (originalText.includes('K+')) {
        const target = parseFloat(originalText);
        runCount(el, 0, target, 1600, val => Math.round(val) + 'K+');
      } else if (originalText.includes('%')) {
        const target = parseFloat(originalText);
        runCount(el, 0, target, 1600, val => val.toFixed(1) + '%');
      } else if (originalText.includes('+')) {
        const target = parseInt(originalText.replace(/[^0-9]/g, ''), 10);
        runCount(el, 0, target, 1800, val => Math.round(val).toLocaleString() + '+');
      } else if (originalText.includes('Yrs')) {
        const target = parseInt(originalText, 10);
        runCount(el, 0, target, 1400, val => Math.round(val) + ' Yrs');
      }
    }

    function runCount(el, start, end, duration, formatFn) {
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease Out Cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentVal = start + (end - start) * ease;
        el.textContent = formatFn(currentVal);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = formatFn(end);
          setTimeout(() => el.classList.remove('counting'), 400);
        }
      }

      requestAnimationFrame(update);
    }
  }

  // Initialize all on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initBackToTop();
    initLightbox();
    initBeforeAfterSlider();
    initCountdown();
    initBlogFilter();
    initTestimonialSlider();
    initScrollAnimations();
    initCounterAnimations();
  });
})();
