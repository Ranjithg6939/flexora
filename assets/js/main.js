/**
 * FLEXORA - Flex & Banner Printing Shop Website Template
 * Core Main JavaScript
 */

(function () {
  'use strict';

  // --- 1. Sticky Navigation & Sliding Active Button Animation ---
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

    // Highlight active link based on URL
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

    // Initialize the smooth sliding active button indicator & scaling
    initNavbarSlidingPill();
  }

  function initNavbarSlidingPill() {
    const navContainer = document.querySelector('.navbar-nav');
    if (!navContainer) return;

    // Create or locate the sliding active background pill
    let pill = navContainer.querySelector('.nav-slider-pill');
    if (!pill) {
      pill = document.createElement('span');
      pill.className = 'nav-slider-pill';
      pill.setAttribute('aria-hidden', 'true');
      navContainer.appendChild(pill);
    }

    const navLinks = navContainer.querySelectorAll(':scope > .nav-item > .nav-link');

    function updatePill(targetLink, animate = true) {
      if (!targetLink) {
        pill.style.opacity = '0';
        return;
      }

      const navItem = targetLink.closest('.nav-item') || targetLink;

      // Exact layout coordinates (unaffected by hover/active CSS scale transforms)
      let leftOffset = navItem.offsetLeft;
      let topOffset = navItem.offsetTop;

      // Fallback if offsetParent is not navContainer
      if (navItem.offsetParent !== navContainer) {
        const containerRect = navContainer.getBoundingClientRect();
        const linkRect = targetLink.getBoundingClientRect();
        leftOffset = linkRect.left - containerRect.left;
        topOffset = linkRect.top - containerRect.top;
      }

      const width = navItem.offsetWidth;
      const height = targetLink.offsetHeight || 36;

      if (!animate) {
        pill.style.transition = 'none';
      } else {
        pill.style.transition = 'transform 0.42s cubic-bezier(0.16, 1, 0.3, 1), width 0.42s cubic-bezier(0.16, 1, 0.3, 1), height 0.42s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease';
      }

      pill.style.width = `${width}px`;
      pill.style.height = `${height}px`;
      pill.style.transform = `translate3d(${leftOffset}px, ${topOffset}px, 0)`;
      pill.style.opacity = '1';
    }

    // Set initial position on active button without jarring initial animation
    let activeLink = navContainer.querySelector(':scope > .nav-item > .nav-link.active') || navLinks[0];
    if (activeLink) {
      setTimeout(() => {
        updatePill(activeLink, false);
        navContainer.classList.add('has-sliding-pill');
        requestAnimationFrame(() => {
          pill.style.transition = '';
        });
      }, 70);
    }

    // Click handler:
    // 1. Remove active from previous button (smooth scale-down)
    // 2. Add active to clicked button (subtle scale-up)
    // 3. Smoothly slide the active background pill from previous to new button
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        const currentActive = navContainer.querySelector(':scope > .nav-item > .nav-link.active');
        if (currentActive && currentActive !== this) {
          currentActive.classList.remove('active');
        }
        this.classList.add('active');
        updatePill(this, true);
      });
    });

    // Window resize handler
    window.addEventListener('resize', () => {
      const currentActive = navContainer.querySelector(':scope > .nav-item > .nav-link.active');
      if (currentActive) updatePill(currentActive, false);
    });

    // Ensure layout accuracy after fonts load
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        const currentActive = navContainer.querySelector(':scope > .nav-item > .nav-link.active');
        if (currentActive) updatePill(currentActive, false);
      });
    }

    // Automatic adjustment when toggling RTL or Dark/Light Mode
    const observer = new MutationObserver(() => {
      const currentActive = navContainer.querySelector(':scope > .nav-item > .nav-link.active');
      if (currentActive) {
        setTimeout(() => updatePill(currentActive, false), 40);
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'dir']
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

    // Event delegation for all lightbox triggers (supports static & dynamic/marquee elements)
    document.addEventListener('click', (e) => {
      const item = e.target.closest('.lightbox-trigger');
      if (!item) return;
      e.preventDefault();
      const img = item.querySelector('img') || item;
      const fullSrc = item.getAttribute('data-full-img') || (img ? img.src : '');
      const caption = item.getAttribute('data-caption') || (img ? img.alt : '') || 'FLEXORA Large Format Project';

      if (fullSrc) {
        modalImg.src = fullSrc;
        modalCap.textContent = caption;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  // --- 4. Premium 3D Infinite Image Gallery with Cinematic Thanos Snap Disintegration ---
  function initThanosSnapGallery() {
    const viewport = document.getElementById('thanosViewport');
    const scene = document.getElementById('thanosScene');
    const canvas = document.getElementById('thanosCanvas');
    if (!viewport || !scene || !canvas) return;

    const cards = Array.from(scene.querySelectorAll('.thanos-card'));
    const dotsContainer = document.getElementById('thanosDots');
    const btnPrev = document.getElementById('thanosPrev');
    const btnNext = document.getElementById('thanosNext');

    const total = cards.length;
    if (total === 0) return;

    let currentIndex = 0; // Default active focused card
    let isTransitioning = false;
    let autoPlayTimer = null;
    let particles = [];
    let animationFrameId = null;

    // Palette for Thanos disintegrating ash, embers, and cosmic energy specs
    const THANOS_COLORS = [
      '#EC4899', '#F43F5E', '#7C3AED', '#8B5CF6', '#00F5FF',
      '#FFE885', '#FFB703', '#CBD5E1', '#94A3B8', '#475569', '#1E1B4B'
    ];

    // High DPI Canvas Scaling
    function setupCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = viewport.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { ctx, width: rect.width, height: rect.height };
    }

    // Build interactive navigation dots
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      cards.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.className = 'thanos-dot' + (idx === currentIndex ? ' is-active' : '');
        dot.setAttribute('role', 'button');
        dot.setAttribute('aria-label', 'Go to project ' + (idx + 1));
        dot.setAttribute('tabindex', '0');
        dot.addEventListener('click', () => {
          if (isTransitioning || idx === currentIndex) return;
          triggerThanosTransition(idx);
        });
        dot.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (isTransitioning || idx === currentIndex) return;
            triggerThanosTransition(idx);
          }
        });
        dotsContainer.appendChild(dot);
      });
    }

    const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll('.thanos-dot')) : [];

    // Calculate Coverflow 3D transforms for all cards relative to currentIndex
    function updateCoverflowCards() {
      cards.forEach((card, idx) => {
        card.classList.remove(
          'is-center',
          'is-left-1',
          'is-right-1',
          'is-left-2',
          'is-right-2',
          'is-hidden-left',
          'is-hidden-right'
        );

        let rel = (idx - currentIndex) % total;
        if (rel < -Math.floor(total / 2)) rel += total;
        if (rel > Math.floor(total / 2)) rel -= total;

        if (rel === 0) {
          card.classList.add('is-center');
        } else if (rel === -1) {
          card.classList.add('is-left-1');
        } else if (rel === 1) {
          card.classList.add('is-right-1');
        } else if (rel === -2) {
          card.classList.add('is-left-2');
        } else if (rel === 2) {
          card.classList.add('is-right-2');
        } else if (rel < -2) {
          card.classList.add('is-hidden-left');
        } else {
          card.classList.add('is-hidden-right');
        }
      });

      // Synchronize indicator dots
      dots.forEach((dot, idx) => {
        dot.classList.toggle('is-active', idx === currentIndex);
      });
    }

    // Thanos Snap Disintegration & Particle Assembly Engine
    function triggerThanosTransition(targetIndex) {
      if (isTransitioning || targetIndex === currentIndex) return;
      isTransitioning = true;
      pauseAutoPlay();

      // Determine shortest cyclic rotation direction
      let diff = (targetIndex - currentIndex) % total;
      if (diff < -Math.floor(total / 2)) diff += total;
      if (diff > Math.floor(total / 2)) diff -= total;
      const direction = diff > 0 ? 1 : -1; // 1 = Next (wind blew to right), -1 = Prev (wind blew to left)

      const outgoingCard = cards[currentIndex];
      const incomingCard = cards[targetIndex];

      const { ctx, width: vWidth, height: vHeight } = setupCanvas();

      // Determine center card boundary box relative to canvas viewport
      const vRect = viewport.getBoundingClientRect();
      const cRect = outgoingCard.getBoundingClientRect();
      const cardX = cRect.left - vRect.left;
      const cardY = cRect.top - vRect.top;
      const cardW = cRect.width;
      const cardH = cRect.height;

      // 1. Generate Thanos Disintegrating Dust / Ash / Embers Particles
      particles = [];
      const DISINTEGRATE_COUNT = 650;

      for (let i = 0; i < DISINTEGRATE_COUNT; i++) {
        const px = cardX + Math.random() * cardW;
        const py = cardY + Math.random() * cardH;
        // Positional delay across the wave (dissolves progressively from wind edge)
        const progressPos = direction > 0 ? (px - cardX) / cardW : 1 - (px - cardX) / cardW;
        const delay = progressPos * 0.32; // 0 to 320ms staggered sweep
        
        const speed = 4.5 + Math.random() * 15;
        const angle = (direction > 0 ? 0 : Math.PI) + (Math.random() - 0.5) * 0.9;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed - (2.5 + Math.random() * 5); // upward aerodynamic draft

        particles.push({
          type: 'disintegrate',
          x: px,
          y: py,
          vx: vx,
          vy: vy,
          size: 1.8 + Math.random() * 4.2,
          color: THANOS_COLORS[Math.floor(Math.random() * THANOS_COLORS.length)],
          delay: delay,
          life: 1.0,
          decay: 0.018 + Math.random() * 0.024,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.25,
          turbSpeed: 7 + Math.random() * 6,
          turbPhase: Math.random() * Math.PI * 2
        });
      }

      // 2. Generate Incoming Image Assembly Particles
      const ASSEMBLE_COUNT = 320;
      for (let i = 0; i < ASSEMBLE_COUNT; i++) {
        const targetX = cardX + Math.random() * cardW;
        const targetY = cardY + Math.random() * cardH;
        const dist = 220 + Math.random() * 260;
        const angle = (direction > 0 ? Math.PI : 0) + (Math.random() - 0.5) * 1.3;
        const startX = targetX + Math.cos(angle) * dist;
        const startY = targetY + Math.sin(angle) * dist;

        particles.push({
          type: 'assemble',
          x: startX,
          y: startY,
          startX: startX,
          startY: startY,
          targetX: targetX,
          targetY: targetY,
          size: 2.2 + Math.random() * 3.8,
          color: THANOS_COLORS[Math.floor(Math.random() * THANOS_COLORS.length)],
          delay: 0.16 + Math.random() * 0.28,
          progress: 0,
          duration: 0.52 + Math.random() * 0.26
        });
      }

      // 3. Trigger Outgoing Disintegration & Incoming Assembly CSS states
      outgoingCard.style.setProperty('--snap-drift-x', `${direction * 75}px`);
      outgoingCard.style.setProperty('--snap-rot', `${direction * 4.5}deg`);
      outgoingCard.classList.add('is-disintegrating');

      incomingCard.classList.add('is-assembling');

      // Update current index and glide coverflow cards into their new 3D perspective slots
      currentIndex = ((targetIndex % total) + total) % total;
      updateCoverflowCards();

      // 4. Run Canvas 60fps Particle Loop via requestAnimationFrame
      const startTime = performance.now();
      const MAX_DURATION = 820; // ms

      function renderParticles(now) {
        const elapsed = (now - startTime) / 1000;
        ctx.clearRect(0, 0, vWidth, vHeight);

        let activeCount = 0;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Outgoing Thanos Disintegration Ash
          if (p.type === 'disintegrate') {
            if (elapsed < p.delay) {
              activeCount++;
              continue;
            }

            p.life -= p.decay;
            if (p.life <= 0) continue;

            activeCount++;
            p.vx *= 0.955;
            p.vy = p.vy * 0.955 - 0.08;
            p.x += p.vx + Math.sin(elapsed * p.turbSpeed + p.turbPhase) * 1.4;
            p.y += p.vy;
            p.size *= 0.985;
            p.rotation += p.vRot;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.globalAlpha = Math.max(0, p.life);
            ctx.fillStyle = p.color;

            ctx.beginPath();
            if (i % 3 === 0) {
              ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
            } else {
              ctx.rect(-p.size / 2, -p.size / 2, p.size, p.size);
            }
            ctx.fill();
            ctx.restore();
          }
          // Incoming Convergence / Assembly Particles
          else if (p.type === 'assemble') {
            if (elapsed < p.delay) {
              activeCount++;
              continue;
            }

            const localT = (elapsed - p.delay) / p.duration;
            const t = Math.min(1, Math.max(0, localT));
            if (t < 1) activeCount++;

            // Smooth cubic easing
            const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            const curX = p.startX + (p.targetX - p.startX) * ease;
            const curY = p.startY + (p.targetY - p.startY) * ease;
            const alpha = (1 - ease) * 0.9;

            if (alpha > 0.02) {
              ctx.save();
              ctx.globalAlpha = alpha;
              ctx.fillStyle = p.color;
              ctx.shadowColor = p.color;
              ctx.shadowBlur = 8;
              ctx.beginPath();
              ctx.arc(curX, curY, p.size * (1 - ease * 0.35), 0, Math.PI * 2);
              ctx.fill();
              ctx.restore();
            }
          }
        }

        if (activeCount > 0 && (now - startTime) < MAX_DURATION) {
          animationFrameId = requestAnimationFrame(renderParticles);
        } else {
          // Cleanup transition state and lock new sharp center card
          ctx.clearRect(0, 0, vWidth, vHeight);
          outgoingCard.classList.remove('is-disintegrating');
          incomingCard.classList.remove('is-assembling');
          isTransitioning = false;
          startAutoPlay();
        }
      }

      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(renderParticles);
    }

    // Auto-play Rotation (Every 4.5 seconds)
    function startAutoPlay() {
      pauseAutoPlay();
      autoPlayTimer = setInterval(() => {
        triggerThanosTransition((currentIndex + 1) % total);
      }, 4500);
    }

    function pauseAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    // Navigation Controls
    if (btnPrev) btnPrev.addEventListener('click', () => triggerThanosTransition((currentIndex - 1 + total) % total));
    if (btnNext) btnNext.addEventListener('click', () => triggerThanosTransition((currentIndex + 1) % total));

    // Side Card Click interaction:
    // Click on side card triggers transition into center.
    // Click on active center card lets lightbox open!
    cards.forEach((card, idx) => {
      card.addEventListener('click', (e) => {
        if (idx !== currentIndex && !isTransitioning) {
          e.preventDefault();
          e.stopPropagation();
          triggerThanosTransition(idx);
        }
      });
    });

    // Touch Swipe & Mouse Drag Interactions
    let isDragging = false;
    let startX = 0;
    let movedX = 0;

    viewport.addEventListener('mousedown', (e) => {
      if (isTransitioning) return;
      isDragging = true;
      startX = e.clientX;
      movedX = 0;
      pauseAutoPlay();
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      movedX = e.clientX - startX;
    });

    window.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      if (movedX > 50) {
        triggerThanosTransition((currentIndex - 1 + total) % total);
      } else if (movedX < -50) {
        triggerThanosTransition((currentIndex + 1) % total);
      } else {
        startAutoPlay();
      }
    });

    viewport.addEventListener('touchstart', (e) => {
      if (isTransitioning) return;
      startX = e.touches[0].clientX;
      movedX = 0;
      pauseAutoPlay();
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
      movedX = e.touches[0].clientX - startX;
    }, { passive: true });

    viewport.addEventListener('touchend', () => {
      if (movedX > 45) {
        triggerThanosTransition((currentIndex - 1 + total) % total);
      } else if (movedX < -45) {
        triggerThanosTransition((currentIndex + 1) % total);
      } else {
        startAutoPlay();
      }
    });

    // Keyboard Arrow Controls
    viewport.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        triggerThanosTransition((currentIndex - 1 + total) % total);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        triggerThanosTransition((currentIndex + 1) % total);
      }
    });

    // Pause on Hover
    viewport.addEventListener('mouseenter', pauseAutoPlay);
    viewport.addEventListener('mouseleave', startAutoPlay);

    // Window Resize Handler
    window.addEventListener('resize', () => {
      setupCanvas();
      updateCoverflowCards();
    });

    // Initial Coverflow Setup
    updateCoverflowCards();
    setupCanvas();
    startAutoPlay();
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

// --- 4. Curved Horizon Wave Product Gallery ---
  function initCurvedWaveGallery() {
    const stage = document.getElementById('curvedStage');
    const track = document.getElementById('curvedTrack');
    if (!stage || !track) return;

    const originalCards = Array.from(track.querySelectorAll('.curved-gallery-card'));
    const dotsContainer = document.getElementById('curvedDots');
    const btnPrev = document.getElementById('curvedPrev');
    const btnNext = document.getElementById('curvedNext');

    const realCount = originalCards.length;
    if (realCount === 0) return;

    // Clone 3 cards at each end for a seamless infinite loop
    const CLONES_COUNT = 3;
    const prependClones = [];
    const appendClones = [];

    for (let i = 0; i < CLONES_COUNT; i++) {
      const cloneBefore = originalCards[realCount - 1 - i].cloneNode(true);
      cloneBefore.classList.add('is-clone');
      prependClones.unshift(cloneBefore);

      const cloneAfter = originalCards[i].cloneNode(true);
      cloneAfter.classList.add('is-clone');
      appendClones.push(cloneAfter);
    }

    prependClones.forEach(c => track.insertBefore(c, track.firstChild));
    appendClones.forEach(c => track.appendChild(c));

    const allCards = Array.from(track.querySelectorAll('.curved-gallery-card'));
    let currentIndex = CLONES_COUNT + 2; // Default focused card: Commercial Fleet Decals (index 2)
    let isTransitioning = false;

    // Build interactive dots for the original canonical projects
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      originalCards.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.className = 'curved-dot';
        dot.setAttribute('role', 'button');
        dot.setAttribute('aria-label', 'Go to project ' + (idx + 1));
        dot.setAttribute('tabindex', '0');
        dot.addEventListener('click', () => {
          if (isTransitioning) return;
          goTo(idx + CLONES_COUNT);
        });
        dot.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            goTo(idx + CLONES_COUNT);
          }
        });
        dotsContainer.appendChild(dot);
      });
    }

    const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll('.curved-dot')) : [];

    function getRealProjectIndex(cardIdx) {
      let p = (cardIdx - CLONES_COUNT) % realCount;
      if (p < 0) p += realCount;
      return p;
    }

    function updateCardsState() {
      allCards.forEach((card, idx) => {
        card.classList.remove(
          'is-center',
          'is-adjacent',
          'is-outer',
          'is-hidden',
          'is-left-adjacent',
          'is-right-adjacent',
          'is-left-outer',
          'is-right-outer',
          'is-hidden-left',
          'is-hidden-right'
        );

        const signedDist = idx - currentIndex;

        if (signedDist === 0) {
          card.classList.add('is-center');
        } else if (signedDist === -1) {
          card.classList.add('is-left-adjacent', 'is-adjacent');
        } else if (signedDist === 1) {
          card.classList.add('is-right-adjacent', 'is-adjacent');
        } else if (signedDist === -2) {
          card.classList.add('is-left-outer', 'is-outer');
        } else if (signedDist === 2) {
          card.classList.add('is-right-outer', 'is-outer');
        } else if (signedDist < -2) {
          card.classList.add('is-hidden-left', 'is-hidden');
        } else {
          card.classList.add('is-hidden-right', 'is-hidden');
        }
      });

      // Synchronize dots
      const activeRealIdx = getRealProjectIndex(currentIndex);
      dots.forEach((dot, idx) => {
        dot.classList.toggle('is-active', idx === activeRealIdx);
      });
    }

    function updatePosition(animate = true) {
      const stageWidth = stage.offsetWidth;
      const currentCard = allCards[currentIndex];
      if (!currentCard) return;

      const cardLeft = currentCard.offsetLeft;
      const cardWidth = currentCard.offsetWidth;

      const targetX = (stageWidth / 2) - (cardLeft + (cardWidth / 2));

      if (!animate) {
        track.style.transition = 'none';
      } else {
        track.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      }

      track.style.transform = 'translateX(' + targetX + 'px)';
      updateCardsState();
    }

    function goTo(newIndex, animate = true) {
      if (isTransitioning && animate) return;
      currentIndex = newIndex;
      if (animate) isTransitioning = true;
      updatePosition(animate);
    }

    // Seamless infinite wrap-around on transition end
    track.addEventListener('transitionend', (e) => {
      if (e.target !== track || e.propertyName !== 'transform') return;
      isTransitioning = false;

      // Wrap append clones
      if (currentIndex >= CLONES_COUNT + realCount) {
        currentIndex = currentIndex - realCount;
        updatePosition(false);
        requestAnimationFrame(() => {
          track.style.transition = '';
        });
      }
      // Wrap prepend clones
      else if (currentIndex < CLONES_COUNT) {
        currentIndex = currentIndex + realCount;
        updatePosition(false);
        requestAnimationFrame(() => {
          track.style.transition = '';
        });
      }
    });

    // Arrow button controls
    if (btnPrev) btnPrev.addEventListener('click', () => goTo(currentIndex - 1));
    if (btnNext) btnNext.addEventListener('click', () => goTo(currentIndex + 1));

    // Card interactions:
    // If a side card is clicked, slide it into the center.
    // If the center card is clicked, allow lightbox trigger to fire!
    allCards.forEach((card, idx) => {
      card.addEventListener('click', (e) => {
        if (idx !== currentIndex && !isTransitioning) {
          e.preventDefault();
          e.stopPropagation();
          goTo(idx);
        }
      });
    });

    // Drag & Swipe Navigation
    let isDragging = false;
    let startX = 0;
    let movedX = 0;

    stage.addEventListener('mousedown', (e) => {
      if (isTransitioning) return;
      isDragging = true;
      startX = e.clientX;
      movedX = 0;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      movedX = e.clientX - startX;
    });

    window.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      if (movedX > 45) {
        goTo(currentIndex - 1);
      } else if (movedX < -45) {
        goTo(currentIndex + 1);
      }
    });

    stage.addEventListener('touchstart', (e) => {
      if (isTransitioning) return;
      startX = e.touches[0].clientX;
      movedX = 0;
    }, { passive: true });

    stage.addEventListener('touchmove', (e) => {
      movedX = e.touches[0].clientX - startX;
    }, { passive: true });

    stage.addEventListener('touchend', () => {
      if (movedX > 40) {
        goTo(currentIndex - 1);
      } else if (movedX < -40) {
        goTo(currentIndex + 1);
      }
    });

    // Keyboard arrow controls when stage or section is focused
    stage.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goTo(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goTo(currentIndex + 1);
      }
    });

    // Auto-play timer (slides smoothly every 4.5 seconds, pauses on hover/drag)
    let autoInterval = setInterval(() => goTo(currentIndex + 1), 4500);
    stage.addEventListener('mouseenter', () => clearInterval(autoInterval));
    stage.addEventListener('mouseleave', () => {
      clearInterval(autoInterval);
      autoInterval = setInterval(() => goTo(currentIndex + 1), 4500);
    });

    // Resize handler to recalculate center alignment fluidly
    window.addEventListener('resize', () => updatePosition(false));

    // Initial positioning
    setTimeout(() => {
      updatePosition(false);
      requestAnimationFrame(() => {
        track.style.transition = '';
      });
    }, 80);
  }

  // Initialize all on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initBackToTop();
    initLightbox();
    initThanosSnapGallery();
    initCurvedWaveGallery();
    initBeforeAfterSlider();
    initCountdown();
    initBlogFilter();
    initTestimonialSlider();
    initScrollAnimations();
    initCounterAnimations();
  });
})();
