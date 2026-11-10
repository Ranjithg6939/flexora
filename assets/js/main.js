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
    const activeMapping = {
      'service-details.html': 'services.html',
      'product-details.html': 'products.html',
      'blog-details.html': 'blog.html'
    };
    const targetPath = activeMapping[currentPath] || currentPath;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .dropdown-item');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        const linkPath = href.split('?')[0];
        if (linkPath === targetPath || (targetPath === 'index.html' && linkPath === 'index.html')) {
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

    // Initialize Mobile Hamburger Menu Interactions (Touch, Backdrop, Escape)
    initMobileNavbar();
  }

  function initMobileNavbar() {
    const toggler = document.querySelector('.navbar-toggler');
    const collapseEl = document.getElementById('flexoraNav');
    if (!toggler || !collapseEl) return;

    // 1. Create or connect Backdrop Overlay
    let backdrop = document.querySelector('.mobile-nav-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'mobile-nav-backdrop';
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.appendChild(backdrop);
    }

    // 2. Create or connect Drawer Header with Close Button
    let drawerHeader = collapseEl.querySelector('.mobile-drawer-header');
    if (!drawerHeader) {
      drawerHeader = document.createElement('div');
      drawerHeader.className = 'mobile-drawer-header d-lg-none';
      drawerHeader.innerHTML = `
        <div class="drawer-brand d-flex align-items-center gap-2">
          <span class="brand-text">FLEX<span class="brand-text-accent">ORA</span><span class="logo-dot">.</span></span>
        </div>
        <button type="button" class="btn-close-drawer" aria-label="Close menu" title="Close menu">
          <i class="fa-solid fa-xmark"></i>
        </button>
      `;
      collapseEl.insertBefore(drawerHeader, collapseEl.firstChild);
    }

    const closeBtn = drawerHeader.querySelector('.btn-close-drawer');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeMenu();
      });
    }

    // Clicking backdrop closes menu
    backdrop.addEventListener('click', () => {
      closeMenu();
    });

    function isMenuOpen() {
      return collapseEl.classList.contains('show');
    }

    function closeMenu() {
      if (isMenuOpen()) {
        if (window.bootstrap && window.bootstrap.Collapse) {
          const bsCollapse = bootstrap.Collapse.getInstance(collapseEl) || new bootstrap.Collapse(collapseEl, { toggle: false });
          bsCollapse.hide();
        } else {
          collapseEl.classList.remove('show');
          toggler.setAttribute('aria-expanded', 'false');
        }
        document.body.classList.remove('nav-open');
        toggler.classList.remove('is-active');
      }
    }

    // Toggle event listeners for body scroll lock
    collapseEl.addEventListener('show.bs.collapse', () => {
      document.body.classList.add('nav-open');
      toggler.classList.add('is-active');
    });

    collapseEl.addEventListener('hide.bs.collapse', () => {
      document.body.classList.remove('nav-open');
      toggler.classList.remove('is-active');
    });

    // 1. Close menu after clicking any navigation link, dropdown item, or CTA button
    const navClickables = collapseEl.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item, .nav-actions .btn');
    navClickables.forEach(item => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          setTimeout(closeMenu, 180);
        }
      });
    });

    // 2. Close on outside click
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && isMenuOpen()) {
        const isClickInside = collapseEl.contains(e.target) || toggler.contains(e.target);
        if (!isClickInside) {
          closeMenu();
        }
      }
    });

    // 3. Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isMenuOpen()) {
        closeMenu();
      }
    });

    // 4. Close automatically when screen is resized to tablet or desktop (> 768px, i.e. 769px+)
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && isMenuOpen()) {
        closeMenu();
      }
    });
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
      if (!targetLink || window.innerWidth <= 768) {
        pill.style.opacity = '0';
        navContainer.classList.remove('has-sliding-pill');
        return;
      }

      navContainer.classList.add('has-sliding-pill');
      const navItem = targetLink.closest('.nav-item') || targetLink;

      // Exact layout coordinates (unaffected by hover/active CSS scale transforms)
      let leftOffset = navItem.offsetLeft;

      // Fallback if offsetParent is not navContainer
      if (navItem.offsetParent !== navContainer) {
        const containerRect = navContainer.getBoundingClientRect();
        const itemRect = navItem.getBoundingClientRect();
        leftOffset = itemRect.left - containerRect.left;
      }

      const width = navItem.offsetWidth;
      const containerHeight = navContainer.clientHeight || 36;
      // Strictly contain pill inside capsule with uniform 3px vertical breathing room
      const height = Math.max(containerHeight - 6, 24);
      const topOffset = Math.max(Math.round((containerHeight - height) / 2), 0);

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
        if (window.innerWidth > 768) {
          updatePill(activeLink, false);
          navContainer.classList.add('has-sliding-pill');
          requestAnimationFrame(() => {
            pill.style.transition = '';
          });
        } else {
          pill.style.opacity = '0';
          navContainer.classList.remove('has-sliding-pill');
        }
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
      const currentActive = navContainer.querySelector(':scope > .nav-item > .nav-link.active') || navLinks[0];
      if (window.innerWidth <= 768) {
        pill.style.opacity = '0';
        navContainer.classList.remove('has-sliding-pill');
      } else if (currentActive) {
        navContainer.classList.add('has-sliding-pill');
        updatePill(currentActive, false);
      }
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
    if (!containers.length) return;

    containers.forEach(container => {
      const afterLayer = container.querySelector('.after-layer');
      const handle = container.querySelector('.slider-handle');
      const afterImg = afterLayer ? afterLayer.querySelector('img') : null;
      if (!afterLayer || !handle) return;

      function syncImageWidth() {
        if (afterImg) {
          afterImg.style.width = container.offsetWidth + 'px';
        }
      }

      let isDragging = false;

      function updateSlider(xPos) {
        const rect = container.getBoundingClientRect();
        let offset = xPos - rect.left;
        if (offset < 0) offset = 0;
        if (offset > rect.width) offset = rect.width;

        const percentage = (offset / rect.width) * 100;
        afterLayer.style.width = percentage + '%';
        handle.style.left = percentage + '%';
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

      handle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
      });
      container.addEventListener('mousedown', (e) => {
        isDragging = true;
        updateSlider(e.clientX);
      });

      window.addEventListener('mouseup', () => isDragging = false);
      window.addEventListener('mousemove', onMouseMove);

      // Touch support
      handle.addEventListener('touchstart', () => {
        isDragging = true;
      }, { passive: true });
      container.addEventListener('touchstart', (e) => {
        isDragging = true;
        if (e.touches && e.touches[0]) updateSlider(e.touches[0].clientX);
      }, { passive: true });
      window.addEventListener('touchend', () => isDragging = false);
      window.addEventListener('touchmove', onTouchMove, { passive: true });

      // Keep image width strictly synchronized on resize and layout changes
      window.addEventListener('resize', syncImageWidth);
      if (window.ResizeObserver) {
        new ResizeObserver(syncImageWidth).observe(container);
      }
      syncImageWidth();
      setTimeout(syncImageWidth, 100);
      setTimeout(syncImageWidth, 500);
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

  // --- 6. Blog Search, Category Filter & Interactive Pagination ---
  function initBlogFilter() {
    const blogItems = Array.from(document.querySelectorAll('.blog-list-item'));
    const filterBtns = document.querySelectorAll('.blog-filter-btn');
    const searchInput = document.getElementById('blogSearchInput');
    const paginationNav = document.getElementById('blogPaginationNav') || document.querySelector('nav[aria-label="Blog Pagination"]');
    const paginationUl = document.getElementById('blogPagination') || (paginationNav ? paginationNav.querySelector('.pagination') : null);
    const featuredCard = document.querySelector('.featured-blog-card');

    if (!blogItems.length) return;

    const itemsPerPage = 3;
    let currentPage = 1;
    let activeCategory = 'all';
    let searchQuery = '';

    function getMatchingItems() {
      return blogItems.filter(item => {
        const itemCat = item.getAttribute('data-category') || '';
        const title = item.querySelector('.blog-card-title')?.textContent.toLowerCase() || '';
        const excerpt = item.querySelector('.blog-excerpt')?.textContent.toLowerCase() || '';

        const matchesCat = (activeCategory === 'all' || itemCat === activeCategory);
        const matchesSearch = (!searchQuery || title.includes(searchQuery) || excerpt.includes(searchQuery));

        return matchesCat && matchesSearch;
      });
    }

    function checkFeaturedMatches() {
      if (!featuredCard) return false;
      if (!searchQuery) return true;
      const featText = featuredCard.textContent.toLowerCase();
      return featText.includes(searchQuery);
    }

    function renderPagination(totalItems) {
      if (!paginationUl) return;

      const totalPages = Math.ceil(totalItems / itemsPerPage);

      if (totalPages <= 1) {
        if (paginationNav) paginationNav.style.display = totalItems === 0 ? 'none' : 'none';
        return;
      }

      if (paginationNav) paginationNav.style.display = 'block';

      if (currentPage > totalPages) currentPage = totalPages;
      if (currentPage < 1) currentPage = 1;

      let html = '';

      // Prev Button
      const isPrevDisabled = currentPage === 1;
      html += `<li class="page-item ${isPrevDisabled ? 'disabled' : ''}">
        <a class="page-link" href="#" data-page="${currentPage - 1}" aria-label="Previous Page"><i class="fa-solid fa-chevron-left"></i></a>
      </li>`;

      // Page Number Buttons
      for (let p = 1; p <= totalPages; p++) {
        const isActive = p === currentPage;
        html += `<li class="page-item ${isActive ? 'active' : ''}">
          <a class="page-link" href="#" data-page="${p}">${p}</a>
        </li>`;
      }

      // Next Button
      const isNextDisabled = currentPage === totalPages;
      html += `<li class="page-item ${isNextDisabled ? 'disabled' : ''}">
        <a class="page-link" href="#" data-page="${currentPage + 1}" aria-label="Next Page"><i class="fa-solid fa-chevron-right"></i></a>
      </li>`;

      paginationUl.innerHTML = html;

      // Attach click events to pagination links
      paginationUl.querySelectorAll('.page-link').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetPage = parseInt(link.getAttribute('data-page'), 10);
          if (targetPage && targetPage !== currentPage && targetPage >= 1 && targetPage <= totalPages) {
            currentPage = targetPage;
            updateBlogView(true);
          }
        });
      });
    }

    function updateBlogView(shouldScroll = false) {
      const matchingItems = getMatchingItems();
      const totalMatching = matchingItems.length;
      const totalPages = Math.ceil(totalMatching / itemsPerPage) || 1;

      if (currentPage > totalPages) currentPage = totalPages;
      if (currentPage < 1) currentPage = 1;

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      // Hide all items
      blogItems.forEach(item => {
        item.style.display = 'none';
      });

      // Show current page items
      matchingItems.slice(startIndex, endIndex).forEach(item => {
        item.style.display = 'block';
      });

      // Handle Featured Guide visibility during search / filtering
      const featMatches = checkFeaturedMatches();
      if (featuredCard) {
        if (searchQuery) {
          featuredCard.style.display = featMatches ? 'block' : 'none';
        } else {
          featuredCard.style.display = (activeCategory === 'all' || activeCategory === 'materials') ? 'block' : 'none';
        }
      }

      renderPagination(totalMatching);

      // Handle "No articles found" message
      let emptyMsg = document.getElementById('blogEmptyState');
      const hasAnyVisibleContent = totalMatching > 0 || (searchQuery && featMatches);
      if (!hasAnyVisibleContent) {
        if (!emptyMsg) {
          emptyMsg = document.createElement('div');
          emptyMsg.id = 'blogEmptyState';
          emptyMsg.className = 'col-12 text-center py-5';
          emptyMsg.innerHTML = `
            <div class="empty-icon mb-3"><i class="fa-solid fa-newspaper text-muted fa-3x"></i></div>
            <h4 class="text-secondary fw-bold">No Printing Articles Found</h4>
            <p class="text-muted">Try clearing your search query or selecting a different category filter.</p>
          `;
          const container = document.getElementById('blogCardsContainer');
          if (container) container.appendChild(emptyMsg);
        } else {
          emptyMsg.style.display = 'block';
        }
      } else if (emptyMsg) {
        emptyMsg.style.display = 'none';
      }

      if (shouldScroll) {
        const grid = document.getElementById('blogCardsContainer');
        if (grid) {
          const rect = grid.getBoundingClientRect();
          const targetY = window.pageYOffset + rect.top - 100;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-filter') || 'all';
        currentPage = 1;
        updateBlogView();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        currentPage = 1;
        updateBlogView();
      });
    }

    // Parse URL query parameters if present (e.g. from sidebar links or search)
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const paramCategory = urlParams.get('category');
      const paramSearch = urlParams.get('search');

      if (paramSearch) {
        searchQuery = paramSearch.toLowerCase().trim();
        if (searchInput) {
          searchInput.value = paramSearch;
        }
      }

      if (paramCategory) {
        const matchingBtn = Array.from(filterBtns).find(btn => btn.getAttribute('data-filter') === paramCategory);
        if (matchingBtn) {
          filterBtns.forEach(b => b.classList.remove('active'));
          matchingBtn.classList.add('active');
          activeCategory = paramCategory;
        }
      }

      // If loaded with a category filter or search query from sidebar, smooth-scroll to articles
      if (paramCategory || paramSearch) {
        setTimeout(() => {
          const grid = document.getElementById('blogCardsContainer') || document.querySelector('.blog-search-filter-wrap');
          if (grid) {
            const rect = grid.getBoundingClientRect();
            const targetY = window.pageYOffset + rect.top - 120;
            window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
          }
        }, 120);
      }
    } catch (err) {
      console.warn('URL parameter parsing error:', err);
    }

    // Initialize with active view
    updateBlogView();
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
      '.timeline-img-card',
      '.team-card',
      '.blog-card',
      '.testimonial-card',
      '.service-feature-card',
      '.section-header',
      '.stat-card',
      '.stat-item',
      '.feature-box',
      '.curved-gallery-card',
      '.rate-card-table',
      '.hero-quote-cockpit',
      '.contact-hub-card',
      '.accordion-item',
      '.specs-table-wrapper',
      '.cta-banner'
    ];

    autoAnimateSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach((el, index) => {
        // Prevent double/nested animation if an ancestor is already marked to animate on scroll
        if (el.closest('.animate-on-scroll') && !el.classList.contains('animate-on-scroll')) {
          return;
        }
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

    const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.is-observed)');
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
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
      });

      animatedElements.forEach(el => {
        el.classList.add('is-observed');
        // If element is already in the viewport, immediately animate it
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-animated');
        } else {
          observer.observe(el);
        }
      });
    } else {
      // Fallback for older browsers
      animatedElements.forEach(el => el.classList.add('is-animated'));
    }
  }

  // Expose to window for dynamic page content (e.g. Products catalog, filter tabs)
  window.initScrollAnimations = initScrollAnimations;

  // --- 9. Dynamic Number Counter Animation ---
  function initCounterAnimations() {
    const counterElements = document.querySelectorAll('.stat-number, .industrial-stat-num');
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

      // Check for formats like "45K+", "14+", "99.8%", "1,800+", "10.5 FT", "1440 DPI", "3 Yrs"
      if (originalText.includes('K+')) {
        const target = parseFloat(originalText);
        runCount(el, 0, target, 1600, val => Math.round(val) + 'K+');
      } else if (originalText.includes('%')) {
        const target = parseFloat(originalText);
        runCount(el, 0, target, 1600, val => val.toFixed(1) + '%');
      } else if (originalText.includes('FT')) {
        const target = parseFloat(originalText);
        runCount(el, 0, target, 1400, val => val.toFixed(1) + ' FT');
      } else if (originalText.includes('DPI')) {
        const target = parseInt(originalText.replace(/[^0-9]/g, ''), 10);
        runCount(el, 0, target, 1600, val => Math.round(val) + ' DPI');
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
    const apertureWrap = document.querySelector('.curved-aperture-wrap');

    const realCount = originalCards.length;
    if (realCount === 0) return;

    // Use full cycle clones (realCount) on each side so we can NEVER run out of cards!
    const CLONES_COUNT = realCount; // 6 clones on each side
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
    let currentIndex = CLONES_COUNT + 2; // Default focused card: Commercial Fleet Decals (canonical index 2)
    let isTransitioning = false;
    let transitionTimeout = null;

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
          resetAutoPlay();
          goTo(idx + CLONES_COUNT);
        });
        dot.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            resetAutoPlay();
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
      // Clamp index safely so currentCard is NEVER undefined
      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex >= allCards.length) currentIndex = allCards.length - 1;

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

    function checkWrap() {
      // If we moved into append clones (>= CLONES_COUNT + realCount)
      if (currentIndex >= CLONES_COUNT + realCount) {
        currentIndex = currentIndex - realCount;
        updatePosition(false);
      }
      // If we moved into prepend clones (< CLONES_COUNT)
      else if (currentIndex < CLONES_COUNT) {
        currentIndex = currentIndex + realCount;
        updatePosition(false);
      }
    }

    function goTo(newIndex, animate = true) {
      clearTimeout(transitionTimeout);

      // Safe circular wrap if index is out of bounds
      if (newIndex < 0) {
        currentIndex = currentIndex + realCount;
        updatePosition(false);
        void track.offsetWidth; // force reflow
        newIndex = currentIndex - 1;
      } else if (newIndex >= allCards.length) {
        currentIndex = currentIndex - realCount;
        updatePosition(false);
        void track.offsetWidth; // force reflow
        newIndex = currentIndex + 1;
      }

      currentIndex = newIndex;

      if (animate) {
        isTransitioning = true;
        // Guaranteed unlock fallback timeout (prevents freeze even if transitionend is missed)
        transitionTimeout = setTimeout(() => {
          isTransitioning = false;
          checkWrap();
        }, 650);
      } else {
        isTransitioning = false;
      }

      updatePosition(animate);
    }

    // Seamless infinite wrap-around on transition end
    track.addEventListener('transitionend', (e) => {
      if (e.target !== track) return;
      if (e.propertyName !== 'transform' && !e.propertyName.includes('transform')) return;
      clearTimeout(transitionTimeout);
      isTransitioning = false;
      checkWrap();
    });

    // Arrow button controls with stopPropagation and autoPlay reset
    if (btnPrev) {
      btnPrev.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        resetAutoPlay();
        goTo(currentIndex - 1);
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        resetAutoPlay();
        goTo(currentIndex + 1);
      });
    }

    // Card interactions:
    // If a side card is clicked, slide it into the center.
    allCards.forEach((card, idx) => {
      card.addEventListener('click', (e) => {
        if (idx !== currentIndex) {
          e.preventDefault();
          e.stopPropagation();
          resetAutoPlay();
          goTo(idx);
        }
      });
    });

    // Drag & Swipe Navigation
    let isDragging = false;
    let startX = 0;
    let movedX = 0;

    stage.addEventListener('mousedown', (e) => {
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
        resetAutoPlay();
        goTo(currentIndex - 1);
      } else if (movedX < -45) {
        resetAutoPlay();
        goTo(currentIndex + 1);
      }
    });

    stage.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      movedX = 0;
    }, { passive: true });

    stage.addEventListener('touchmove', (e) => {
      movedX = e.touches[0].clientX - startX;
    }, { passive: true });

    stage.addEventListener('touchend', () => {
      if (movedX > 40) {
        resetAutoPlay();
        goTo(currentIndex - 1);
      } else if (movedX < -40) {
        resetAutoPlay();
        goTo(currentIndex + 1);
      }
    });

    // Keyboard arrow controls when stage or section is focused
    stage.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        resetAutoPlay();
        goTo(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        resetAutoPlay();
        goTo(currentIndex + 1);
      }
    });

    // Auto-play timer (slides smoothly every 4.5 seconds, pauses on hover)
    let autoInterval = null;
    function resetAutoPlay() {
      clearInterval(autoInterval);
      autoInterval = setInterval(() => {
        goTo(currentIndex + 1);
      }, 4500);
    }
    resetAutoPlay();

    if (apertureWrap) {
      apertureWrap.addEventListener('mouseenter', () => clearInterval(autoInterval));
      apertureWrap.addEventListener('mouseleave', () => resetAutoPlay());
    }

    // Resize handler to recalculate center alignment fluidly
    window.addEventListener('resize', () => updatePosition(false));

    // Initial positioning
    setTimeout(() => {
      updatePosition(false);
    }, 80);
  }

  // Initialize all on DOM ready
  // --- Sidebar Search Form Enhancement ---
  function initSidebarSearch() {
    const searchForms = document.querySelectorAll('.sidebar-search-form');
    searchForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        const input = form.querySelector('input[name="search"]');
        if (input && !input.value.trim()) {
          e.preventDefault();
          input.focus();
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initBackToTop();
    initLightbox();
    initThanosSnapGallery();
    initCurvedWaveGallery();
    initBeforeAfterSlider();
    initCountdown();
    initBlogFilter();
    initSidebarSearch();
    initTestimonialSlider();
    initScrollAnimations();
    initCounterAnimations();
  });
})();
