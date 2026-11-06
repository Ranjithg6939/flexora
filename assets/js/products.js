/**
 * FLEXORA - Products Catalog, Category Filtering & Live Search
 */

(function () {
  'use strict';

  const PRODUCTS = [
    {
      id: 'flex-banner',
      category: 'flex-banner',
      categoryName: 'Flex Banner Printing',
      name: 'Standard Flex Banner Printing',
      description: 'Heavy-duty 340 GSM flex banner printed with vibrant Eco-Solvent inks. Weatherproof and ideal for hoardings and outdoor branding.',
      sizes: 'Custom up to 10ft width',
      price: '$1.20 / sq.ft',
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=700&q=80',
      material: '340 GSM Premium Flex',
      specs: 'UV Resistant, Tear Resistant, High Durability'
    },
    {
      id: 'frontlit-banner',
      category: 'frontlit',
      categoryName: 'Frontlit Banner',
      name: 'High-Resolution Frontlit Banner',
      description: 'Engineered specifically for front-illuminated billboards and wall mounts. Smooth matte finish delivers crystal-clear legibility.',
      sizes: '8x4 ft, 10x6 ft, 20x10 ft, Custom',
      price: '$1.35 / sq.ft',
      image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=700&q=80',
      material: '440 GSM Frontlit Vinyl Fabric',
      specs: 'Flame Retardant, Matte / Gloss Finish'
    },
    {
      id: 'backlit-banner',
      category: 'backlit',
      categoryName: 'Backlit Banner',
      name: 'Translucent Backlit Flex Banner',
      description: 'Uniform light dispersion fabric designed for lightboxes, airport displays, and retail store illumination.',
      sizes: 'Custom up to 10.5ft seamless',
      price: '$2.40 / sq.ft',
      image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=700&q=80',
      material: '510 GSM High-Translucency Flex',
      specs: '1440 DPI Ultra High Definition, No hotspotting'
    },
    {
      id: 'vinyl-printing',
      category: 'vinyl',
      categoryName: 'Vinyl Printing',
      name: 'Self-Adhesive Cast Vinyl Printing',
      description: 'Premium self-adhesive vinyl with bubble-free air release channels. Ideal for glass partitions, metal sheets, and smooth wall graphics.',
      sizes: 'Any custom roll width up to 60 inches',
      price: '$2.50 / sq.ft',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=700&q=80',
      material: 'Polymeric Calendered Vinyl (100 micron)',
      specs: 'Cold / Hot Matte & Gloss Lamination available'
    },
    {
      id: 'sunboard-printing',
      category: 'sunboard',
      categoryName: 'Sunboard Printing',
      name: 'Rigid Sunboard (Foam Sheet) Printing',
      description: 'Direct UV flatbed print or vinyl mounted on durable PVC foam board. Lightweight, rigid, and perfect for retail point-of-sale displays.',
      sizes: '3mm, 5mm thickness / up to 8x4 ft',
      price: '$4.10 / sq.ft',
      image: 'https://images.unsplash.com/photo-1572945550744-570423e892fa?auto=format&fit=crop&w=700&q=80',
      material: 'High-density PVC foam sheet',
      specs: 'CNC contour cutting, Direct UV Flatbed Printing'
    },
    {
      id: 'oneway-vision',
      category: 'oneway',
      categoryName: 'One Way Vision Printing',
      name: 'Perforated One Way Vision Window Film',
      description: 'Allows clear outward visibility while showcasing vibrant, bold high-res branding to people outside. Ideal for store glass and vehicle windows.',
      sizes: 'Custom window measurements',
      price: '$3.20 / sq.ft',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=80',
      material: '60/40 Perforated PVC Vinyl',
      specs: 'UV inks, removable adhesive with zero residue'
    },
    {
      id: 'rollup-standee',
      category: 'standee',
      categoryName: 'Roll-up Standee',
      name: 'Aluminum Roll-Up Standee Pull-Up Banner',
      description: 'Portable, sleek anodized aluminum roll-up standee with premium non-curling star flex or PP synthetic graphic sheet. Includes carry bag.',
      sizes: '6x2.5 ft, 6x3 ft, 6x4 ft',
      price: '$35.00 / piece',
      image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=700&q=80',
      material: 'Anti-curl synthetic media + Aluminum cartridge',
      specs: 'Instant 30-second setup, Padded nylon carrying bag'
    },
    {
      id: 'glow-sign-board',
      category: 'signage',
      categoryName: 'Glow Sign Board',
      name: 'Commercial LED Glow Sign Board',
      description: 'Fabricated aluminum box with high-efficiency waterproof LED modules and translucent flex or acrylic fascia for 24/7 retail illumination.',
      sizes: '8x3 ft, 10x4 ft, Custom Shopfront sizes',
      price: '$6.50 / sq.ft',
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=700&q=80',
      material: 'Rust-proof GI/Aluminum frame + Samsung LED',
      specs: 'IP67 Waterproof, Low power consumption'
    },
    {
      id: 'promotional-banners',
      category: 'promotional',
      categoryName: 'Promotional Banners',
      name: 'Promotional Teardrop & Feather Banners',
      description: 'Dynamic outdoor advertising flags engineered to withstand gusty winds. Complete with fiberglass pole and water bag/ground spike.',
      sizes: '8ft, 10ft, 12ft, 14ft height',
      price: '$45.00 / set',
      image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=700&q=80',
      material: '110 GSM Knitted Polyester Flag Media',
      specs: 'Dye-sublimation print, 95% reverse bleedthrough'
    },
    {
      id: 'event-exhibition',
      category: 'event',
      categoryName: 'Event & Exhibition Printing',
      name: 'Exhibition Stall Backdrop & Truss Graphics',
      description: 'Seamless exhibition backdrop banners and pop-up spider display walls. Vibrant color saturation with zero glare under bright hall spotlights.',
      sizes: '10x8 ft, 20x10 ft, Custom stall sizes',
      price: '$2.80 / sq.ft',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=700&q=80',
      material: 'Matte non-reflective blackout flex',
      specs: 'Wrinkle-resistant, eyeleted or velcro attached'
    },
    {
      id: 'wall-posters',
      category: 'posters',
      categoryName: 'Wall Posters',
      name: 'Large Format Photo-Quality Wall Posters',
      description: 'Stunning 12-color archival pigment printing on 260 GSM satin or gloss photo paper. Perfect for architectural renderings, movie and retail posters.',
      sizes: 'A2, A1, A0, 24x36 in, 40x60 in',
      price: '$3.50 / sq.ft',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=700&q=80',
      material: '260 GSM Premium Photo Satin Paper',
      specs: '2400 DPI UltraChrome Pigment Inks'
    },
    {
      id: 'vehicle-graphics',
      category: 'vehicle',
      categoryName: 'Vehicle Graphics',
      name: 'Commercial Van & Truck Vinyl Wraps',
      description: 'Turn your commercial delivery vans, trucks, and buses into mobile billboards. Cast wrap vinyl with protective UV-blocking gloss overlaminate.',
      sizes: 'Full wrap / Partial wrap / Door decals',
      price: '$5.50 / sq.ft',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=700&q=80',
      material: '3M / Avery Dennison Cast Wrap Vinyl',
      specs: '5-year outdoor warranty against fading and peeling'
    }
  ];

  function renderProducts(items, container) {
    if (!container) return;

    if (items.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="fa-solid fa-box-open fa-3x text-muted mb-3"></i>
          <h4>No printing products found</h4>
          <p class="text-muted">Try searching with a different keyword or category.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = items.map(p => `
      <div class="col-lg-4 col-md-6 col-12 mb-4 product-grid-item" data-category="${p.category}">
        <div class="card-product">
          <div class="product-img-box">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <span class="product-category-badge">${p.categoryName}</span>
          </div>
          <div class="product-body">
            <h4 class="product-title">${p.name}</h4>
            <p class="product-desc">${p.description}</p>
            <div class="product-meta">
              <span><strong>Sizes:</strong> ${p.sizes}</span>
              <span class="text-primary fw-bold">${p.price}</span>
            </div>
            <div class="product-actions">
              <a href="product-details.html?id=${p.id}" class="btn btn-outline-primary btn-sm">
                <i class="fa-regular fa-eye"></i> Details
              </a>
              <a href="contact.html?product=${p.id}" class="btn btn-primary btn-sm">
                <i class="fa-solid fa-paper-plane"></i> Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  function initProductsPage() {
    const container = document.getElementById('productsGridContainer');
    if (!container) return;

    let currentCategory = 'all';
    let searchQuery = '';

    function filterItems() {
      let filtered = PRODUCTS;
      if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(q) || 
          p.description.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q)
        );
      }
      renderProducts(filtered, container);
    }

    // Render initial
    renderProducts(PRODUCTS, container);

    // Setup filter buttons
    const filterButtons = document.querySelectorAll('.product-filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-filter') || 'all';
        filterItems();
      });
    });

    // Setup search input
    const searchInput = document.getElementById('productSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        filterItems();
      });
    }
  }

  // Populate product details dynamically if on product-details.html
  function initProductDetailsPage() {
    const detailTitle = document.getElementById('detailProductName');
    if (!detailTitle) return;

    const params = new URLSearchParams(window.location.search);
    const prodId = params.get('id') || 'flex-banner';
    const product = PRODUCTS.find(p => p.id === prodId) || PRODUCTS[0];

    document.querySelectorAll('.bind-product-name').forEach(el => el.textContent = product.name);
    document.querySelectorAll('.bind-product-desc').forEach(el => el.textContent = product.description);
    document.querySelectorAll('.bind-product-price').forEach(el => el.textContent = product.price);
    document.querySelectorAll('.bind-product-sizes').forEach(el => el.textContent = product.sizes);
    document.querySelectorAll('.bind-product-category').forEach(el => el.textContent = product.categoryName);
    document.querySelectorAll('.bind-product-material').forEach(el => el.textContent = product.material);
    document.querySelectorAll('.bind-product-specs').forEach(el => el.textContent = product.specs);

    const mainImg = document.getElementById('detailProductImage');
    if (mainImg) {
      mainImg.src = product.image;
      mainImg.alt = product.name;
    }

    const quoteLink = document.getElementById('detailQuoteBtn');
    if (quoteLink) {
      quoteLink.href = `contact.html?product=${product.id}`;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initProductsPage();
    initProductDetailsPage();
  });

  // Export PRODUCTS so other scripts can access if needed
  window.FLEXORA_PRODUCTS = PRODUCTS;
})();
