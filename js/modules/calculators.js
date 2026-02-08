// ====================================
// CONSTRUCTION COST CALCULATOR
// Integrated with Portfolio
// ====================================

// Material calculation constants (per sq.ft)
// Based on standard construction industry norms for RCC framed structures
const MATERIAL_CONSTANTS = {
    cement: 0.4,        // bags per sq.ft (typical range 0.38-0.42)
    steel: 4.0,         // kg per sq.ft (typical range 3.5-4.5 for residential)
    sand: 0.044,        // m³ per sq.ft (1.55 cft converted to m³)
    aggregate: 0.088    // m³ per sq.ft (3.1 cft converted to m³)
};

// Finishing quality rates (per sq.ft)
const FINISHING_RATES = {
    basic: 450,
    standard: 750,
    premium: 1200
};

// RCC Slab constants (M20 grade)
const SLAB_CONSTANTS = {
    cementPerCubicMeter: 8,     // bags per m³
    steelPercent: 0.01          // 1% of volume
};

// State management
let calculationState = {
    buildingCalculated: false,
    slabCalculated: false
};

// ====================================
// UTILITY FUNCTIONS
// ====================================

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
}

function formatNumber(number, decimals = 2) {
    return number.toLocaleString('en-IN', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

// ====================================
// TOGGLE LABOR INPUT MODE
// ====================================

function toggleLaborInput() {
    const autoCheckbox = document.getElementById('laborAuto');
    const percentInput = document.getElementById('laborPercent');
    const manualInput = document.getElementById('laborManual');
    const suffix = document.querySelector('.input-suffix');
    
    // Safety checks
    if (!autoCheckbox || !percentInput || !manualInput) {
        console.warn('Labor input elements not found');
        return;
    }
    
    if (autoCheckbox.checked) {
        percentInput.style.display = 'block';
        manualInput.style.display = 'none';
        if (suffix) suffix.style.display = 'block';
    } else {
        percentInput.style.display = 'none';
        manualInput.style.display = 'block';
        if (suffix) suffix.style.display = 'none';
    }
}

// ====================================
// UPDATE FINISHING COST DISPLAY
// ====================================

function updateFinishingCost() {
    const select = document.getElementById('finishingQuality');
    const selectedOption = select.options[select.selectedIndex];
    // Optional: Could show estimated finishing cost here
}

// ====================================
// RESET FORM
// ====================================

function resetForm() {
    // Reset all input fields
    document.getElementById('area').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('laborPercent').value = '40';
    document.getElementById('laborManual').value = '';
    document.getElementById('finishingQuality').value = 'standard';
    document.getElementById('contingency').value = '7';
    document.getElementById('cementRate').value = '';
    document.getElementById('steelRate').value = '';
    document.getElementById('sandRate').value = '';
    document.getElementById('aggregateRate').value = '';
    document.getElementById('slabArea').value = '';
    document.getElementById('slabThickness').value = '0.41';
    
    // Reset labor toggle
    document.getElementById('laborAuto').checked = true;
    toggleLaborInput();
    
    // Reset results
    resetBuildingResults();
    resetSlabResults();
    
    calculationState.buildingCalculated = false;
    calculationState.slabCalculated = false;
}

// ====================================
// RESET RESULTS
// ====================================

function resetBuildingResults() {
    document.getElementById('totalCost').textContent = '₹ --';
    document.getElementById('displayMaterialCost').textContent = '₹ --';
    document.getElementById('displayLaborCost').textContent = '₹ --';
    document.getElementById('displayFinishingCost').textContent = '₹ --';
    document.getElementById('displayContingency').textContent = '₹ --';
    document.getElementById('cement').textContent = '-- bags';
    document.getElementById('steel').textContent = '-- kg';
    document.getElementById('sand').textContent = '-- m³';
    document.getElementById('aggregate').textContent = '-- m³';
    document.getElementById('buildingStatus').textContent = 'Pending';
    document.getElementById('buildingStatus').classList.remove('calculated');
}

function resetSlabResults() {
    document.getElementById('slabConcrete').textContent = '-- m³';
    document.getElementById('slabCement').textContent = '-- bags';
    document.getElementById('slabSteel').textContent = '-- kg';
    document.getElementById('slabStatus').textContent = 'Pending';
    document.getElementById('slabStatus').classList.remove('calculated');
}

// ====================================
// VALIDATE INPUTS
// ====================================

function validateBuildingInputs(area, rate) {
    if (!area || area <= 0) {
        alert('Please enter a valid built-up area');
        return false;
    }
    if (!rate || rate <= 0) {
        alert('Please enter a valid rate per sq.ft');
        return false;
    }
    return true;
}

function validateSlabInputs(slabArea, slabThickness) {
    if (!slabArea || slabArea <= 0) {
        alert('Please enter a valid slab area');
        return false;
    }
    if (!slabThickness || slabThickness <= 0) {
        alert('Please enter a valid slab thickness');
        return false;
    }
    return true;
}

// ====================================
// GET DEFAULT MATERIAL RATES
// ====================================

function getDefaultRates() {
    return {
        cement: 420,
        steel: 65,
        sand: 1500,
        aggregate: 1400
    };
}

// ====================================
// CALCULATE BUILDING
// ====================================

function calculateBuilding() {
    // Get input values
    const area = parseFloat(document.getElementById('area').value);
    const rate = parseFloat(document.getElementById('rate').value);
    
    // Validate
    if (!validateBuildingInputs(area, rate)) {
        return;
    }
    
    // Get material rates (use default if not provided)
    const defaultRates = getDefaultRates();
    const cementRate = parseFloat(document.getElementById('cementRate').value) || defaultRates.cement;
    const steelRate = parseFloat(document.getElementById('steelRate').value) || defaultRates.steel;
    const sandRate = parseFloat(document.getElementById('sandRate').value) || defaultRates.sand;
    const aggregateRate = parseFloat(document.getElementById('aggregateRate').value) || defaultRates.aggregate;
    
    // Calculate material quantities
    const materials = {
        cement: area * MATERIAL_CONSTANTS.cement,
        steel: area * MATERIAL_CONSTANTS.steel,
        sand: area * MATERIAL_CONSTANTS.sand,
        aggregate: area * MATERIAL_CONSTANTS.aggregate
    };
    
    // Calculate material costs
    const materialCost = 
        (materials.cement * cementRate) +
        (materials.steel * steelRate) +
        (materials.sand * sandRate) +
        (materials.aggregate * aggregateRate);
    
    // Calculate labor cost
    const laborAuto = document.getElementById('laborAuto').checked;
    let laborCost;
    
    if (laborAuto) {
        const laborPercent = parseFloat(document.getElementById('laborPercent').value) || 40;
        laborCost = materialCost * (laborPercent / 100);
    } else {
        laborCost = parseFloat(document.getElementById('laborManual').value) || 0;
    }
    
    // Calculate finishing cost
    const finishingQuality = document.getElementById('finishingQuality').value;
    const finishingCost = area * FINISHING_RATES[finishingQuality];
    
    // Calculate subtotal
    const subtotal = materialCost + laborCost + finishingCost;
    
    // Calculate contingency
    const contingencyPercent = parseFloat(document.getElementById('contingency').value) || 7;
    const contingencyCost = subtotal * (contingencyPercent / 100);
    
    // Calculate total
    const totalCost = subtotal + contingencyCost;
    
    // Display results
    displayBuildingResults({
        totalCost,
        materialCost,
        laborCost,
        finishingCost,
        contingencyCost,
        materials
    });
    
    calculationState.buildingCalculated = true;
}

// ====================================
// DISPLAY BUILDING RESULTS
// ====================================

function displayBuildingResults(results) {
    // Update cost summary
    document.getElementById('totalCost').textContent = formatCurrency(results.totalCost);
    document.getElementById('displayMaterialCost').textContent = formatCurrency(results.materialCost);
    document.getElementById('displayLaborCost').textContent = formatCurrency(results.laborCost);
    document.getElementById('displayFinishingCost').textContent = formatCurrency(results.finishingCost);
    document.getElementById('displayContingency').textContent = formatCurrency(results.contingencyCost);
    
    // Update material quantities
    document.getElementById('cement').textContent = `${formatNumber(results.materials.cement, 0)} bags`;
    document.getElementById('steel').textContent = `${formatNumber(results.materials.steel, 0)} kg`;
    document.getElementById('sand').textContent = `${formatNumber(results.materials.sand, 2)} m³`;
    document.getElementById('aggregate').textContent = `${formatNumber(results.materials.aggregate, 2)} m³`;
    
    // Update status
    const statusBadge = document.getElementById('buildingStatus');
    statusBadge.textContent = 'Calculated';
    statusBadge.classList.add('calculated');
    
    // Smooth scroll to results on mobile
    if (window.innerWidth <= 768) {
        document.getElementById('buildingResults').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// ====================================
// CALCULATE RCC SLAB
// ====================================

function calculateSlab() {
    // Get input values
    const slabArea = parseFloat(document.getElementById('slabArea').value);
    const slabThickness = parseFloat(document.getElementById('slabThickness').value);
    
    // Validate
    if (!validateSlabInputs(slabArea, slabThickness)) {
        return;
    }
    
    // Convert sq.ft to sq.m and ft to m
    const areaInSqM = slabArea * 0.092903;
    const thicknessInM = slabThickness * 0.3048;
    
    // Calculate concrete volume
    const concreteVolume = areaInSqM * thicknessInM;
    
    // Calculate cement required
    const cementRequired = concreteVolume * SLAB_CONSTANTS.cementPerCubicMeter;
    
    // Calculate steel required
    const steelRequired = concreteVolume * 7850 * SLAB_CONSTANTS.steelPercent; // 7850 kg/m³ is density of steel
    
    // Display results
    displaySlabResults({
        concreteVolume,
        cementRequired,
        steelRequired
    });
    
    calculationState.slabCalculated = true;
}

// ====================================
// DISPLAY SLAB RESULTS
// ====================================

function displaySlabResults(results) {
    document.getElementById('slabConcrete').textContent = `${formatNumber(results.concreteVolume, 2)} m³`;
    document.getElementById('slabCement').textContent = `${formatNumber(results.cementRequired, 0)} bags`;
    document.getElementById('slabSteel').textContent = `${formatNumber(results.steelRequired, 0)} kg`;
    
    // Update status
    const statusBadge = document.getElementById('slabStatus');
    statusBadge.textContent = 'Calculated';
    statusBadge.classList.add('calculated');
    
    // Smooth scroll to results on mobile
    if (window.innerWidth <= 768) {
        document.getElementById('slabResults').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// ====================================
// INITIALIZE ON PAGE LOAD
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the calculator page
    const calculatorPage = document.querySelector('.calc-page');
    if (!calculatorPage) {
        console.log('Not on calculator page, skipping initialization');
        return;
    }
    
    console.log('Construction Cost Calculator initialized');
    
    // Set default labor toggle state
    const laborAuto = document.getElementById('laborAuto');
    if (laborAuto) {
        toggleLaborInput();
    }
    
    // Add Enter key support for main calculation
    const mainInputs = ['area', 'rate'];
    mainInputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    calculateBuilding();
                }
            });
        }
    });
    
    // Add Enter key support for slab calculation
    const slabInputs = ['slabArea', 'slabThickness'];
    slabInputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    calculateSlab();
                }
            });
        }
    });
});

// ====================================
// EXPORT FOR TESTING (if needed)
// ====================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateBuilding,
        calculateSlab,
        resetForm,
        MATERIAL_CONSTANTS,
        FINISHING_RATES,
        SLAB_CONSTANTS
    };
}