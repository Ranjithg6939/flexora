/**
 * FLEXORA - Instant Rate & Price Calculator
 * Handles real-time flex & banner price calculations based on dimensions, materials, and finishing.
 */

(function () {
  'use strict';

  // Base pricing rates per square foot (USD)
  const PRODUCT_RATES = {
    'frontlit-flex': { name: 'Frontlit Flex (340 GSM)', rate: 1.20, minSqFt: 6 },
    'backlit-flex': { name: 'Backlit Flex Translucent (510 GSM)', rate: 2.40, minSqFt: 6 },
    'star-flex': { name: 'Star Flex Heavy Duty (440 GSM)', rate: 1.75, minSqFt: 6 },
    'vinyl': { name: 'Self-Adhesive Vinyl (Matt/Gloss)', rate: 2.50, minSqFt: 4 },
    'oneway-vision': { name: 'One Way Vision Perforated Film', rate: 3.20, minSqFt: 4 },
    'sunboard': { name: 'Sunboard Sheet 5mm Mounted', rate: 4.10, minSqFt: 4 },
    'rollup-standee': { name: 'Roll-Up Standee (Aluminum Base)', rate: 35.00, isFixedBase: true },
    'glowsign-board': { name: 'Glow Sign Board Box', rate: 6.50, minSqFt: 8 },
    'reflective-flex': { name: 'Reflective Flex Night Glow', rate: 3.80, minSqFt: 6 }
  };

  const FINISHING_RATES = {
    'eyelets': 0.15,      // per sq.ft
    'hemming': 0.10,      // per sq.ft
    'lamination': 0.45,   // per sq.ft
    'pole-pockets': 0.20  // per sq.ft
  };

  function initCalculator() {
    const calcForm = document.getElementById('priceCalculatorForm');
    if (!calcForm) return;

    const productSelect = document.getElementById('calcProduct');
    const widthInput = document.getElementById('calcWidth');
    const heightInput = document.getElementById('calcHeight');
    const unitSelect = document.getElementById('calcUnit');
    const qtyInput = document.getElementById('calcQty');
    const finishingChecks = document.querySelectorAll('.calc-finishing');

    const resultArea = document.getElementById('calcResultArea');
    const resultRate = document.getElementById('calcResultRate');
    const resultFinishing = document.getElementById('calcResultFinishing');
    const resultTotal = document.getElementById('calcResultTotal');
    const quoteBtn = document.getElementById('calcRequestQuoteBtn');

    function calculate() {
      const productKey = productSelect.value;
      const productInfo = PRODUCT_RATES[productKey] || PRODUCT_RATES['frontlit-flex'];

      let width = parseFloat(widthInput.value) || 0;
      let height = parseFloat(heightInput.value) || 0;
      let qty = parseInt(qtyInput.value, 10) || 1;
      const unit = unitSelect ? unitSelect.value : 'feet';

      if (unit === 'inches') {
        width = width / 12;
        height = height / 12;
      }

      let area = width * height;
      if (area < 0) area = 0;

      let subtotal = 0;
      let finishingCost = 0;

      if (productInfo.isFixedBase) {
        // Roll-up Standee fixed unit price
        subtotal = productInfo.rate * qty;
        if (resultArea) resultArea.textContent = `${qty} Units (Std 6x3 ft)`;
        if (resultRate) resultRate.textContent = `$${productInfo.rate.toFixed(2)} / unit`;
      } else {
        const effectiveArea = Math.max(area, productInfo.minSqFt || 1);
        const baseCost = effectiveArea * productInfo.rate * qty;

        // Calculate finishing add-ons
        finishingChecks.forEach(ch => {
          if (ch.checked && FINISHING_RATES[ch.value]) {
            finishingCost += effectiveArea * FINISHING_RATES[ch.value] * qty;
          }
        });

        subtotal = baseCost + finishingCost;

        if (resultArea) resultArea.textContent = `${(area * qty).toFixed(1)} sq.ft`;
        if (resultRate) resultRate.textContent = `$${productInfo.rate.toFixed(2)} / sq.ft`;
      }

      if (resultFinishing) resultFinishing.textContent = `$${finishingCost.toFixed(2)}`;
      if (resultTotal) resultTotal.textContent = `$${subtotal.toFixed(2)}`;

      // Update quote button url with parameters
      if (quoteBtn) {
        const queryParams = new URLSearchParams({
          product: productKey,
          width: widthInput.value,
          height: heightInput.value,
          unit: unit,
          qty: qty
        });
        quoteBtn.href = `contact.html?${queryParams.toString()}`;
      }
    }

    // Prevent quote submission with invalid dimensions
    if (quoteBtn) {
      quoteBtn.addEventListener('click', (e) => {
        const w = parseFloat(widthInput.value) || 0;
        const h = parseFloat(heightInput.value) || 0;
        const q = parseInt(qtyInput.value, 10) || 0;
        if (w < 0.5 || w > 100 || h < 0.5 || h > 100 || q < 1) {
          e.preventDefault();
          if (typeof window.showToast === 'function') {
            window.showToast('Please specify valid banner dimensions (0.5 - 100 ft) and quantity before requesting a quote.', 'error');
          }
        }
      });
    }

    // Attach listeners
    [productSelect, widthInput, heightInput, unitSelect, qtyInput].forEach(elem => {
      if (elem) elem.addEventListener('input', calculate);
    });

    finishingChecks.forEach(ch => {
      ch.addEventListener('change', calculate);
    });

    // Initial calculation
    calculate();
  }

  document.addEventListener('DOMContentLoaded', initCalculator);
})();
