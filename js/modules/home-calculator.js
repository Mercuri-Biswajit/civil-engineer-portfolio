// ===========================
// HOME CALCULATOR MODULE
// Quick cost estimator on homepage
// ===========================

import { MATERIAL_CONSTANTS } from '../config/constants.js';
import { byId } from '../utils/dom.js';
import { formatCurrency, formatNumber, safeFloat, isPositiveNumber } from '../utils/helpers.js';

/**
 * Initialize the home calculator
 */
export function initHomeCalculator() {
  const calcBtn = byId('homeCalcBtn');
  const areaInput = byId('homeArea');
  const rateInput = byId('homeRate');

  if (!calcBtn || !areaInput || !rateInput) return;

  // Store area for later use
  let currentArea = 0;

  // Calculate and show total cost
  calcBtn.addEventListener('click', () => {
    const area = safeFloat(areaInput.value, 0);
    const rate = safeFloat(rateInput.value, 0);

    if (!isPositiveNumber(area)) {
      alert('Please enter a valid area (must be greater than 0).');
      areaInput.focus();
      return;
    }

    if (!isPositiveNumber(rate)) {
      alert('Please enter a valid rate (must be greater than 0).');
      rateInput.focus();
      return;
    }

    // Store area for material calculation
    currentArea = area;

    // Calculate total cost
    const totalCost = area * rate;
    
    // Display total cost
    displayTotalCost(totalCost);

    // Show the "Show Material Quantities" button
    const showMaterialBtn = byId('showMaterialBtn');
    if (showMaterialBtn) {
      showMaterialBtn.style.display = 'inline-block';
      showMaterialBtn.onclick = () => showMaterialModal(currentArea);
    }
  });

  // Enter key support
  [areaInput, rateInput].forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        calcBtn.click();
      }
    });
  });

  // Initialize modal close handlers
  initModalHandlers();
}

/**
 * Display the total cost
 */
function displayTotalCost(totalCost) {
  const resultDiv = byId('homeCalcResult');
  const totalCostEl = byId('homeTotalCost');

  if (!resultDiv || !totalCostEl) return;

  // Show result section
  resultDiv.style.display = 'block';

  // Display total cost
  totalCostEl.textContent = formatCurrency(totalCost);

  // Smooth scroll to result
  setTimeout(() => {
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

/**
 * Show material quantities in modal
 */
function showMaterialModal(area) {
  const modal = byId('materialModal');
  
  if (!modal) return;

  // Calculate materials
  const materials = {
    cement: area * MATERIAL_CONSTANTS.cement,
    steel: area * MATERIAL_CONSTANTS.steel,
    sand: area * MATERIAL_CONSTANTS.sand,
    aggregate: area * MATERIAL_CONSTANTS.aggregate
  };

  // Display materials
  const cementEl = byId('homeCement');
  const steelEl = byId('homeSteel');
  const sandEl = byId('homeSand');
  const aggregateEl = byId('homeAggregate');

  if (cementEl) cementEl.textContent = `${formatNumber(materials.cement, 0)} bags`;
  if (steelEl) steelEl.textContent = `${formatNumber(materials.steel, 0)} kg`;
  if (sandEl) sandEl.textContent = `${formatNumber(materials.sand, 2)} m³`;
  if (aggregateEl) aggregateEl.textContent = `${formatNumber(materials.aggregate, 2)} m³`;

  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Close material modal
 */
function closeMaterialModal() {
  const modal = byId('materialModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/**
 * Initialize modal close handlers
 */
function initModalHandlers() {
  const modal = byId('materialModal');
  const closeBtn = byId('closeMaterialModal');

  if (!modal) return;

  // Close button click
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMaterialModal);
  }

  // Click outside modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeMaterialModal();
    }
  });

  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeMaterialModal();
    }
  });
}