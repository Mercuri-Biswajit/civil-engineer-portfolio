/* ====================================
   BUILDING ESTIMATION CALCULATORS
   Professional Civil Engineering Tools
   ==================================== */

// ====================================
// MATERIAL RATES (West Bengal - 2026)
// ====================================
const materialRates = {
    cement: 450,        // per bag (50kg)
    sand: 55,           // per cft
    aggregate: 65,      // per cft
    steel: 70,          // per kg
    bricks: 9,          // per piece
    flyAsh: 8,          // per brick
    rebar8mm: 65,       // per kg
    rebar10mm: 68,      // per kg
    rebar12mm: 70,      // per kg
    plywood: 85,        // per sqft
    paint: 350,         // per liter
    tiles: 45,          // per sqft
    granite: 120,       // per sqft
};

// ====================================
// CONSTRUCTION RATES
// ====================================
const constructionRates = {
    residential: {
        basic: 1200,      // per sqft
        standard: 1600,
        premium: 2200,
        luxury: 3000,
    },
    commercial: {
        basic: 1400,
        standard: 1900,
        premium: 2600,
        luxury: 3500,
    },
    institutional: {
        basic: 1300,
        standard: 1700,
        premium: 2400,
        luxury: 3200,
    }
};

// ====================================
// MATERIAL QUANTITY FORMULAS
// ====================================
const materialFormulas = {
    // Per 100 sqft of built-up area
    rcc: {
        cement: 0.45,      // bags
        sand: 1.3,         // cft
        aggregate: 2.6,    // cft
        steel: 4.5,        // kg
    },
    loadbearing: {
        cement: 0.35,
        sand: 1.1,
        aggregate: 2.2,
        steel: 2.8,
        bricks: 55,
    },
    mixed: {
        cement: 0.40,
        sand: 1.2,
        aggregate: 2.4,
        steel: 3.6,
        bricks: 30,
    }
};

// ====================================
// CONCRETE MIX RATIOS
// ====================================
const concreteMix = {
    M10: { cement: 1, sand: 3, aggregate: 6, ratio: '1:3:6' },
    M15: { cement: 1, sand: 2, aggregate: 4, ratio: '1:2:4' },
    M20: { cement: 1, sand: 1.5, aggregate: 3, ratio: '1:1.5:3' },
    M25: { cement: 1, sand: 1, aggregate: 2, ratio: '1:1:2' },
    M30: { cement: 1, sand: 0.75, aggregate: 1.5, ratio: '1:0.75:1.5' },
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

function formatNumber(num, decimals = 2) {
    return num.toLocaleString('en-IN', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

// ====================================
// TAB SWITCHING
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.calc-tab');
    const contents = document.querySelectorAll('.calc-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;

            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Initialize all calculators
    initBuildingEstimation();
    initMaterialCalculator();
    initConcreteCalculator();
});

// ====================================
// BUILDING ESTIMATION CALCULATOR
// ====================================

function initBuildingEstimation() {
    const form = document.getElementById('estimationForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateBuildingEstimation();
    });
}

function calculateBuildingEstimation() {
    // Get form values
    const projectType = document.getElementById('projectType').value;
    const constructionType = document.getElementById('constructionType').value;
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const floors = parseInt(document.getElementById('floors').value);
    const floorHeight = parseFloat(document.getElementById('floorHeight').value);
    const finishQuality = document.getElementById('finishQuality').value;

    // Validate inputs
    if (!length || !width || !floors || !floorHeight) {
        alert('Please fill in all required fields');
        return;
    }

    // Calculate areas
    const plinthArea = length * width;
    const totalArea = plinthArea * floors;
    const wallArea = 2 * (length + width) * floorHeight * floors;

    // Get base rate
    const baseRate = constructionRates[projectType][finishQuality];
    const totalConstructionCost = totalArea * baseRate;

    // Calculate materials based on construction type
    const materialsPerArea = materialFormulas[constructionType];
    const materials = {
        cement: Math.ceil((totalArea / 100) * materialsPerArea.cement),
        sand: Math.ceil((totalArea / 100) * materialsPerArea.sand),
        aggregate: Math.ceil((totalArea / 100) * materialsPerArea.aggregate),
        steel: Math.ceil((totalArea / 100) * materialsPerArea.steel),
        bricks: materialsPerArea.bricks ? Math.ceil((totalArea / 100) * materialsPerArea.bricks) : 0
    };

    // Calculate material costs
    const materialCosts = {
        cement: materials.cement * materialRates.cement,
        sand: materials.sand * materialRates.sand,
        aggregate: materials.aggregate * materialRates.aggregate,
        steel: materials.steel * materialRates.steel,
        bricks: materials.bricks * materialRates.bricks
    };

    const totalMaterialCost = Object.values(materialCosts).reduce((a, b) => a + b, 0);

    // Calculate cost breakdown
    const laborCost = totalConstructionCost * 0.35;
    const overheadCost = totalConstructionCost * 0.15;
    const contingencyCost = totalConstructionCost * 0.10;

    const costBreakdown = {
        materials: totalMaterialCost,
        labor: laborCost,
        overhead: overheadCost,
        contingency: contingencyCost,
        finishing: totalConstructionCost * 0.25
    };

    const grandTotal = Object.values(costBreakdown).reduce((a, b) => a + b, 0);

    // Display results
    displayEstimationResults(totalArea, grandTotal, materials, materialCosts, costBreakdown);
}

function displayEstimationResults(totalArea, totalCost, materials, materialCosts, costBreakdown) {
    // Hide empty state, show results
    document.getElementById('resultsEmpty').style.display = 'none';
    document.getElementById('resultsContent').style.display = 'block';

    // Update quick stats
    document.getElementById('totalArea').textContent = formatNumber(totalArea, 0);
    document.getElementById('totalCost').textContent = formatCurrency(totalCost);
    document.getElementById('costPerSqft').textContent = formatCurrency(totalCost / totalArea);

    // Material breakdown
    const materialBreakdownHTML = `
        <div class="breakdown-item">
            <span class="breakdown-item__name">🏗️ Cement</span>
            <span class="breakdown-item__value">${formatNumber(materials.cement, 0)} bags (${formatCurrency(materialCosts.cement)})</span>
        </div>
        <div class="breakdown-item">
            <span class="breakdown-item__name">🏖️ Sand</span>
            <span class="breakdown-item__value">${formatNumber(materials.sand, 0)} cft (${formatCurrency(materialCosts.sand)})</span>
        </div>
        <div class="breakdown-item">
            <span class="breakdown-item__name">🪨 Aggregate</span>
            <span class="breakdown-item__value">${formatNumber(materials.aggregate, 0)} cft (${formatCurrency(materialCosts.aggregate)})</span>
        </div>
        <div class="breakdown-item">
            <span class="breakdown-item__name">⚙️ Steel</span>
            <span class="breakdown-item__value">${formatNumber(materials.steel, 0)} kg (${formatCurrency(materialCosts.steel)})</span>
        </div>
        ${materials.bricks > 0 ? `
        <div class="breakdown-item">
            <span class="breakdown-item__name">🧱 Bricks</span>
            <span class="breakdown-item__value">${formatNumber(materials.bricks, 0)} nos (${formatCurrency(materialCosts.bricks)})</span>
        </div>
        ` : ''}
    `;
    document.getElementById('materialBreakdown').innerHTML = materialBreakdownHTML;

    // Cost breakdown with progress bars
    const costBreakdownHTML = Object.entries(costBreakdown).map(([key, value]) => {
        const percentage = (value / totalCost) * 100;
        const label = key.charAt(0).toUpperCase() + key.slice(1);
        
        return `
            <div class="cost-item">
                <div class="cost-item__header">
                    <span class="cost-item__name">${label}</span>
                    <span class="cost-item__amount">${formatCurrency(value)}</span>
                </div>
                <div class="cost-item__bar">
                    <div class="cost-item__fill" style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
    }).join('');
    
    document.getElementById('costBreakdown').innerHTML = costBreakdownHTML;

    // Animate progress bars
    setTimeout(() => {
        document.querySelectorAll('.cost-item__fill').forEach(bar => {
            bar.style.width = bar.style.width;
        });
    }, 100);

    // Scroll to results on mobile
    if (window.innerWidth <= 968) {
        document.getElementById('resultsCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ====================================
// MATERIAL CALCULATOR
// ====================================

function initMaterialCalculator() {
    const form = document.getElementById('materialForm');
    const workTypeSelect = document.getElementById('workType');
    
    // Update thickness field visibility based on work type
    workTypeSelect.addEventListener('change', function() {
        const thicknessGroup = document.getElementById('thicknessGroup');
        if (this.value === 'flooring' || this.value === 'rcc') {
            thicknessGroup.style.display = 'block';
        } else {
            thicknessGroup.style.display = 'block'; // Always show for simplicity
        }
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateMaterials();
    });
}

function calculateMaterials() {
    const workType = document.getElementById('workType').value;
    const length = parseFloat(document.getElementById('matLength').value);
    const width = parseFloat(document.getElementById('matWidth').value);
    const thickness = parseFloat(document.getElementById('matThickness').value) || 4;

    if (!length || !width) {
        alert('Please enter length and width');
        return;
    }

    let results = {};
    const area = length * width;

    switch(workType) {
        case 'brickwork':
            // 9 inch brick wall
            results = calculateBrickwork(area, 9);
            break;
        case 'brickwork4':
            // 4.5 inch brick wall
            results = calculateBrickwork(area, 4.5);
            break;
        case 'plaster':
            results = calculatePlaster(area, thickness);
            break;
        case 'flooring':
            results = calculateFlooring(area, thickness);
            break;
        case 'rcc':
            results = calculateRCC(area, thickness);
            break;
    }

    displayMaterialResults(results, workType);
}

function calculateBrickwork(area, thickness) {
    const bricksPerSqft = thickness === 9 ? 13.5 : 7;
    const mortarVolume = area * (thickness / 12) * 0.3; // 30% mortar
    
    return {
        'Bricks': { value: Math.ceil(area * bricksPerSqft), unit: 'nos', icon: '🧱' },
        'Cement': { value: Math.ceil(mortarVolume * 1.5), unit: 'bags', icon: '🏗️' },
        'Sand': { value: Math.ceil(mortarVolume * 35), unit: 'cft', icon: '🏖️' },
    };
}

function calculatePlaster(area, thickness) {
    const volume = area * (thickness / 12);
    const wetVolume = volume * 1.33; // 33% wastage
    
    return {
        'Cement': { value: Math.ceil(wetVolume * 1.5), unit: 'bags', icon: '🏗️' },
        'Sand': { value: Math.ceil(wetVolume * 35), unit: 'cft', icon: '🏖️' },
        'Coverage': { value: formatNumber(area, 0), unit: 'sqft', icon: '📏' },
    };
}

function calculateFlooring(area, thickness) {
    const volume = area * (thickness / 12);
    
    return {
        'Cement': { value: Math.ceil(volume * 2), unit: 'bags', icon: '🏗️' },
        'Sand': { value: Math.ceil(volume * 40), unit: 'cft', icon: '🏖️' },
        'Tiles/Marble': { value: Math.ceil(area * 1.1), unit: 'sqft', icon: '⬜' },
    };
}

function calculateRCC(area, thickness) {
    const volume = (area * thickness) / 12;
    const wetVolume = volume * 1.54;
    
    return {
        'Cement': { value: Math.ceil(wetVolume * 6.4), unit: 'bags', icon: '🏗️' },
        'Sand': { value: Math.ceil(wetVolume * 15), unit: 'cft', icon: '🏖️' },
        'Aggregate': { value: Math.ceil(wetVolume * 30), unit: 'cft', icon: '🪨' },
        'Steel': { value: Math.ceil(area * 4), unit: 'kg', icon: '⚙️' },
    };
}

function displayMaterialResults(results, workType) {
    const resultsDiv = document.getElementById('materialResults');
    
    const workTypeNames = {
        'brickwork': 'Brick Masonry (9" wall)',
        'brickwork4': 'Brick Masonry (4.5" wall)',
        'plaster': 'Cement Plaster',
        'flooring': 'Flooring Work',
        'rcc': 'RCC Work'
    };

    const html = `
        <h3>📋 ${workTypeNames[workType]} - Material Requirements</h3>
        <div class="material-grid">
            ${Object.entries(results).map(([name, data]) => `
                <div class="material-item">
                    <div class="material-item__icon">${data.icon}</div>
                    <div class="material-item__name">${name}</div>
                    <div class="material-item__value">${data.value} ${data.unit}</div>
                </div>
            `).join('')}
        </div>
    `;
    
    resultsDiv.innerHTML = html;
    resultsDiv.style.display = 'block';
}

// ====================================
// CONCRETE MIX CALCULATOR
// ====================================

function initConcreteCalculator() {
    const form = document.getElementById('concreteForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateConcreteMix();
    });
}

function calculateConcreteMix() {
    const grade = document.getElementById('concreteGrade').value;
    const volume = parseFloat(document.getElementById('concreteVolume').value);
    const mixType = document.getElementById('mixType').value;

    if (!volume) {
        alert('Please enter volume');
        return;
    }

    const mix = concreteMix[grade];
    const wetVolume = volume * 1.54; // 54% wastage factor
    
    // Calculate quantities
    const totalParts = mix.cement + mix.sand + mix.aggregate;
    const cementVolume = (wetVolume / totalParts) * mix.cement;
    const sandVolume = (wetVolume / totalParts) * mix.sand;
    const aggregateVolume = (wetVolume / totalParts) * mix.aggregate;
    
    // Convert to practical units
    const cementBags = Math.ceil(cementVolume / 0.035); // 1 bag = 0.035 cum
    const sandCft = Math.ceil(sandVolume * 35.31); // 1 cum = 35.31 cft
    const aggregateCft = Math.ceil(aggregateVolume * 35.31);
    const water = Math.ceil(cementBags * 30); // 30 liters per bag

    const results = {
        'Cement': { value: cementBags, unit: 'bags', icon: '🏗️', cost: cementBags * materialRates.cement },
        'Sand': { value: sandCft, unit: 'cft', icon: '🏖️', cost: sandCft * materialRates.sand },
        'Aggregate': { value: aggregateCft, unit: 'cft', icon: '🪨', cost: aggregateCft * materialRates.aggregate },
        'Water': { value: water, unit: 'liters', icon: '💧', cost: 0 },
    };

    const totalCost = Object.values(results).reduce((sum, item) => sum + (item.cost || 0), 0);

    displayConcreteResults(results, grade, mix.ratio, volume, totalCost);
}

function displayConcreteResults(results, grade, ratio, volume, totalCost) {
    const resultsDiv = document.getElementById('concreteResults');
    
    const html = `
        <div style="margin-bottom: 2rem;">
            <h3>🏗️ Concrete Mix Design - ${grade}</h3>
            <p style="color: var(--calc-text-light); margin-top: 0.5rem;">
                <strong>Mix Ratio:</strong> ${ratio} | 
                <strong>Volume:</strong> ${volume} m³ | 
                <strong>Estimated Cost:</strong> ${formatCurrency(totalCost)}
            </p>
        </div>
        <div class="material-grid">
            ${Object.entries(results).map(([name, data]) => `
                <div class="material-item">
                    <div class="material-item__icon">${data.icon}</div>
                    <div class="material-item__name">${name}</div>
                    <div class="material-item__value">${data.value} ${data.unit}</div>
                    ${data.cost ? `<div style="font-size: 0.875rem; color: var(--calc-accent); margin-top: 0.25rem;">${formatCurrency(data.cost)}</div>` : ''}
                </div>
            `).join('')}
        </div>
        <div style="margin-top: 2rem; padding: 1rem; background: rgba(230, 126, 34, 0.05); border-radius: 8px; border-left: 4px solid var(--calc-accent);">
            <strong>Note:</strong> Add admixtures as per design requirements. Water-cement ratio should be maintained at 0.45-0.50 for ${grade} grade concrete.
        </div>
    `;
    
    resultsDiv.innerHTML = html;
    resultsDiv.style.display = 'block';
}

// ====================================
// PDF DOWNLOAD (Simple implementation)
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadPDF');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            alert('PDF download functionality requires a backend service. For now, please use the Print option (Ctrl+P) and save as PDF.');
        });
    }
});

// ====================================
// MOBILE MENU TOGGLE
// ====================================

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}