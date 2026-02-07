/* ====================================
   BUILDING ESTIMATION CALCULATORS
   Professional Civil Engineering Tools
   WITH FIXES FOR:
   - Form validation (#3)
   - Mobile scroll (#4)
   - Progress bar animation (#5)
   ==================================== */

// ====================================
// MATERIAL RATES (West Bengal - 2026)
// ====================================
const materialRates = {
    cement: 450,
    sand: 55,
    aggregate: 65,
    steel: 70,
    bricks: 9,
    flyAsh: 8,
    rebar8mm: 65,
    rebar10mm: 68,
    rebar12mm: 70,
    plywood: 85,
    paint: 350,
    tiles: 45,
    granite: 120,
};

// ====================================
// CONSTRUCTION RATES
// ====================================
const constructionRates = {
    residential: {
        basic: 1200,
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
    },
};

// ====================================
// MATERIAL QUANTITY FORMULAS
// ====================================
const materialFormulas = {
    rcc: {
        cement: 0.45,
        sand: 1.3,
        aggregate: 2.6,
        steel: 4.5,
    },
    loadbearing: {
        cement: 0.35,
        sand: 1.1,
        aggregate: 2.2,
        steel: 2.8,
        bricks: 55,
    },
    mixed: {
        cement: 0.4,
        sand: 1.2,
        aggregate: 2.4,
        steel: 3.6,
        bricks: 30,
    },
};

// ====================================
// CONCRETE MIX RATIOS
// ====================================
const concreteMix = {
    M10: { cement: 1, sand: 3, aggregate: 6, ratio: "1:3:6" },
    M15: { cement: 1, sand: 2, aggregate: 4, ratio: "1:2:4" },
    M20: { cement: 1, sand: 1.5, aggregate: 3, ratio: "1:1.5:3" },
    M25: { cement: 1, sand: 1, aggregate: 2, ratio: "1:1:2" },
    M30: { cement: 1, sand: 0.75, aggregate: 1.5, ratio: "1:0.75:1.5" },
};

// ====================================
// UTILITY FUNCTIONS
// ====================================

function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(amount);
}

function formatNumber(num, decimals = 2) {
    return num.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });
}

// ====================================
// FIX #3: FORM VALIDATION FUNCTIONS
// ====================================

function showError(inputElement, message) {
    // Add error styling
    inputElement.style.borderColor = "#EF4444";
    inputElement.style.borderWidth = "2px";

    // Remove existing error message
    const existingError =
        inputElement.parentElement.querySelector(".error-message");
    if (existingError) {
        existingError.remove();
    }

    // Create error message
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.style.color = "#EF4444";
    errorDiv.style.fontSize = "0.875rem";
    errorDiv.style.marginTop = "0.25rem";
    errorDiv.style.fontWeight = "500";
    errorDiv.textContent = message;

    // Add error message after input
    inputElement.parentElement.appendChild(errorDiv);
}

function clearError(inputElement) {
    // Remove error styling
    inputElement.style.borderColor = "";
    inputElement.style.borderWidth = "";

    // Remove error message
    const errorMessage =
        inputElement.parentElement.querySelector(".error-message");
    if (errorMessage) {
        errorMessage.remove();
    }
}

function clearAllErrors(form) {
    const inputs = form.querySelectorAll(".form-input");
    inputs.forEach((input) => clearError(input));
}

// ====================================
// TAB SWITCHING
// ====================================

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".calc-tab");
    const contents = document.querySelectorAll(".calc-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const targetTab = tab.dataset.tab;

            tabs.forEach((t) => t.classList.remove("active"));
            contents.forEach((c) => c.classList.remove("active"));

            tab.classList.add("active");
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add("active");
            }
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
    const form = document.getElementById("estimationForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearAllErrors(form);
        calculateBuildingEstimation();
    });

    // Real-time error clearing
    const inputs = form.querySelectorAll(".form-input");
    inputs.forEach((input) => {
        input.addEventListener("input", () => clearError(input));
        input.addEventListener("focus", () => clearError(input));
    });
}

function calculateBuildingEstimation() {
    const form = document.getElementById("estimationForm");

    const projectType = document.getElementById("projectType").value;
    const constructionType = document.getElementById("constructionType").value;
    const lengthInput = document.getElementById("length");
    const widthInput = document.getElementById("width");
    const floorsInput = document.getElementById("floors");
    const floorHeightInput = document.getElementById("floorHeight");
    const finishQuality = document.getElementById("finishQuality").value;

    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);
    const floors = parseInt(floorsInput.value);
    const floorHeight = parseFloat(floorHeightInput.value);

    // FIX #3: Comprehensive validation with user feedback
    let hasError = false;

    if (!length || length <= 0) {
        showError(lengthInput, "Please enter a valid length greater than 0");
        hasError = true;
    }

    if (!width || width <= 0) {
        showError(widthInput, "Please enter a valid width greater than 0");
        hasError = true;
    }

    if (!floors || floors <= 0 || floors > 20) {
        showError(floorsInput, "Number of floors must be between 1 and 20");
        hasError = true;
    }

    if (!floorHeight || floorHeight < 8 || floorHeight > 20) {
        showError(floorHeightInput, "Floor height must be between 8 and 20 feet");
        hasError = true;
    }

    if (hasError) {
        return;
    }

    // Calculate areas
    const plinthArea = length * width;
    const totalArea = plinthArea * floors;
    const wallArea = 2 * (length + width) * floorHeight * floors;

    const baseRate = constructionRates[projectType][finishQuality];
    const totalConstructionCost = totalArea * baseRate;

    const materialsPerArea = materialFormulas[constructionType];
    const materials = {
        cement: Math.ceil((totalArea / 100) * materialsPerArea.cement),
        sand: Math.ceil((totalArea / 100) * materialsPerArea.sand),
        aggregate: Math.ceil((totalArea / 100) * materialsPerArea.aggregate),
        steel: Math.ceil((totalArea / 100) * materialsPerArea.steel),
        bricks: materialsPerArea.bricks
            ? Math.ceil((totalArea / 100) * materialsPerArea.bricks)
            : 0,
    };

    const materialCosts = {
        cement: materials.cement * materialRates.cement,
        sand: materials.sand * materialRates.sand,
        aggregate: materials.aggregate * materialRates.aggregate,
        steel: materials.steel * materialRates.steel,
        bricks: materials.bricks * materialRates.bricks,
    };

    const totalMaterialCost = Object.values(materialCosts).reduce(
        (a, b) => a + b,
        0,
    );

    const laborCost = totalConstructionCost * 0.35;
    const overheadCost = totalConstructionCost * 0.15;
    const contingencyCost = totalConstructionCost * 0.1;

    const costBreakdown = {
        materials: totalMaterialCost,
        labor: laborCost,
        overhead: overheadCost,
        contingency: contingencyCost,
        finishing: totalConstructionCost * 0.25,
    };

    const grandTotal = Object.values(costBreakdown).reduce((a, b) => a + b, 0);

    displayEstimationResults(
        totalArea,
        grandTotal,
        materials,
        materialCosts,
        costBreakdown,
    );
}

function displayEstimationResults(
    totalArea,
    totalCost,
    materials,
    materialCosts,
    costBreakdown,
) {
    const emptyState = document.getElementById("resultsEmpty");
    const resultsContent = document.getElementById("resultsContent");

    if (emptyState) emptyState.style.display = "none";
    if (resultsContent) resultsContent.style.display = "block";

    const totalAreaEl = document.getElementById("totalArea");
    const totalCostEl = document.getElementById("totalCost");
    const costPerSqftEl = document.getElementById("costPerSqft");

    if (totalAreaEl) totalAreaEl.textContent = formatNumber(totalArea, 0);
    if (totalCostEl) totalCostEl.textContent = formatCurrency(totalCost);
    if (costPerSqftEl)
        costPerSqftEl.textContent = formatCurrency(totalCost / totalArea);

    const materialBreakdown = document.getElementById("materialBreakdown");
    if (materialBreakdown) {
        materialBreakdown.innerHTML = `
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
            ${materials.bricks > 0
                ? `
            <div class="breakdown-item">
                <span class="breakdown-item__name">🧱 Bricks</span>
                <span class="breakdown-item__value">${formatNumber(materials.bricks, 0)} nos (${formatCurrency(materialCosts.bricks)})</span>
            </div>
            `
                : ""
            }
        `;
    }

    const costBreakdownEl = document.getElementById("costBreakdown");
    if (costBreakdownEl) {
        costBreakdownEl.innerHTML = Object.entries(costBreakdown)
            .map(([key, value]) => {
                const percentage = (value / totalCost) * 100;
                const label = key.charAt(0).toUpperCase() + key.slice(1);

                return `
                <div class="cost-item">
                    <div class="cost-item__header">
                        <span class="cost-item__name">${label}</span>
                        <span class="cost-item__amount">${formatCurrency(value)}</span>
                    </div>
                    <div class="cost-item__bar">
                        <div class="cost-item__fill" style="width: 0%; transition: width 0.8s ease-out;" data-width="${percentage}"></div>
                    </div>
                </div>
            `;
            })
            .join("");
    }

    // FIX #5: Animate progress bars after render
    setTimeout(() => {
        const fills = document.querySelectorAll(".cost-item__fill");
        fills.forEach((bar) => {
            const targetWidth = bar.getAttribute("data-width");
            // Force reflow
            bar.offsetHeight;
            // Trigger animation
            bar.style.width = targetWidth + "%";
        });
    }, 100);

    // FIX #4: Scroll to results on mobile with proper timing
    if (window.innerWidth <= 968) {
        const resultsCard = document.getElementById("resultsCard");
        if (resultsCard) {
            setTimeout(() => {
                const headerOffset = 80;
                const elementPosition = resultsCard.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }, 300);
        }
    }
}

// ====================================
// MATERIAL CALCULATOR
// ====================================

function initMaterialCalculator() {
    const form = document.getElementById("materialForm");
    if (!form) return;

    const workTypeSelect = document.getElementById("workType");
    if (workTypeSelect) {
        workTypeSelect.addEventListener("change", function () {
            const thicknessGroup = document.getElementById("thicknessGroup");
            if (thicknessGroup) {
                thicknessGroup.style.display = "block";
            }
        });
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearAllErrors(form);
        calculateMaterials();
    });

    const inputs = form.querySelectorAll(".form-input");
    inputs.forEach((input) => {
        input.addEventListener("input", () => clearError(input));
        input.addEventListener("focus", () => clearError(input));
    });
}

function calculateMaterials() {
    const workType = document.getElementById("workType").value;
    const lengthInput = document.getElementById("matLength");
    const widthInput = document.getElementById("matWidth");
    const thicknessInput = document.getElementById("matThickness");

    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);
    const thickness = parseFloat(thicknessInput.value) || 4;

    // FIX #3: Validation for material calculator
    let hasError = false;

    if (!length || length <= 0) {
        showError(lengthInput, "Please enter a valid length greater than 0");
        hasError = true;
    }

    if (!width || width <= 0) {
        showError(widthInput, "Please enter a valid width greater than 0");
        hasError = true;
    }

    if (hasError) {
        return;
    }

    let results = {};
    const area = length * width;

    switch (workType) {
        case "brickwork":
            results = calculateBrickwork(area, 9);
            break;
        case "brickwork4":
            results = calculateBrickwork(area, 4.5);
            break;
        case "plaster":
            results = calculatePlaster(area, thickness);
            break;
        case "flooring":
            results = calculateFlooring(area, thickness);
            break;
        case "rcc":
            results = calculateRCC(area, thickness);
            break;
    }

    displayMaterialResults(results, workType);
}

function calculateBrickwork(area, thickness) {
    const bricksPerSqft = thickness === 9 ? 13.5 : 7;
    const mortarVolume = area * (thickness / 12) * 0.3;

    return {
        Bricks: { value: Math.ceil(area * bricksPerSqft), unit: "nos", icon: "🧱" },
        Cement: { value: Math.ceil(mortarVolume * 1.5), unit: "bags", icon: "🏗️" },
        Sand: { value: Math.ceil(mortarVolume * 35), unit: "cft", icon: "🏖️" },
    };
}

function calculatePlaster(area, thickness) {
    const volume = area * (thickness / 12);
    const wetVolume = volume * 1.33;

    return {
        Cement: { value: Math.ceil(wetVolume * 1.5), unit: "bags", icon: "🏗️" },
        Sand: { value: Math.ceil(wetVolume * 35), unit: "cft", icon: "🏖️" },
        Coverage: { value: formatNumber(area, 0), unit: "sqft", icon: "📏" },
    };
}

function calculateFlooring(area, thickness) {
    const volume = area * (thickness / 12);

    return {
        Cement: { value: Math.ceil(volume * 2), unit: "bags", icon: "🏗️" },
        Sand: { value: Math.ceil(volume * 40), unit: "cft", icon: "🏖️" },
        "Tiles/Marble": { value: Math.ceil(area * 1.1), unit: "sqft", icon: "⬜" },
    };
}

function calculateRCC(area, thickness) {
    const volume = (area * thickness) / 12;
    const wetVolume = volume * 1.54;

    return {
        Cement: { value: Math.ceil(wetVolume * 6.4), unit: "bags", icon: "🏗️" },
        Sand: { value: Math.ceil(wetVolume * 15), unit: "cft", icon: "🏖️" },
        Aggregate: { value: Math.ceil(wetVolume * 30), unit: "cft", icon: "🪨" },
        Steel: { value: Math.ceil(area * 4), unit: "kg", icon: "⚙️" },
    };
}

function displayMaterialResults(results, workType) {
    const resultsDiv = document.getElementById("materialResults");
    if (!resultsDiv) return;

    const workTypeNames = {
        brickwork: 'Brick Masonry (9" wall)',
        brickwork4: 'Brick Masonry (4.5" wall)',
        plaster: "Cement Plaster",
        flooring: "Flooring Work",
        rcc: "RCC Work",
    };

    resultsDiv.innerHTML = `
        <h3>📋 ${workTypeNames[workType]} - Material Requirements</h3>
        <div class="material-grid">
            ${Object.entries(results)
            .map(
                ([name, data]) => `
                <div class="material-item">
                    <div class="material-item__icon">${data.icon}</div>
                    <div class="material-item__name">${name}</div>
                    <div class="material-item__value">${data.value} ${data.unit}</div>
                </div>
            `,
            )
            .join("")}
        </div>
    `;

    resultsDiv.style.display = "block";
}

// ====================================
// CONCRETE MIX CALCULATOR
// ====================================

function initConcreteCalculator() {
    const form = document.getElementById("concreteForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearAllErrors(form);
        calculateConcreteMix();
    });

    const inputs = form.querySelectorAll(".form-input");
    inputs.forEach((input) => {
        input.addEventListener("input", () => clearError(input));
        input.addEventListener("focus", () => clearError(input));
    });
}

function calculateConcreteMix() {
    const grade = document.getElementById("concreteGrade").value;
    const volumeInput = document.getElementById("concreteVolume");
    const mixType = document.getElementById("mixType").value;

    const volume = parseFloat(volumeInput.value);

    // FIX #3: Validation for concrete calculator
    if (!volume || volume <= 0) {
        showError(volumeInput, "Please enter a valid volume greater than 0");
        return;
    }

    const mix = concreteMix[grade];
    const wetVolume = volume * 1.54;

    const totalParts = mix.cement + mix.sand + mix.aggregate;
    const cementVolume = (wetVolume / totalParts) * mix.cement;
    const sandVolume = (wetVolume / totalParts) * mix.sand;
    const aggregateVolume = (wetVolume / totalParts) * mix.aggregate;

    const cementBags = Math.ceil(cementVolume / 0.035);
    const sandCft = Math.ceil(sandVolume * 35.31);
    const aggregateCft = Math.ceil(aggregateVolume * 35.31);
    const water = Math.ceil(cementBags * 30);

    const results = {
        Cement: {
            value: cementBags,
            unit: "bags",
            icon: "🏗️",
            cost: cementBags * materialRates.cement,
        },
        Sand: {
            value: sandCft,
            unit: "cft",
            icon: "🏖️",
            cost: sandCft * materialRates.sand,
        },
        Aggregate: {
            value: aggregateCft,
            unit: "cft",
            icon: "🪨",
            cost: aggregateCft * materialRates.aggregate,
        },
        Water: { value: water, unit: "liters", icon: "💧", cost: 0 },
    };

    const totalCost = Object.values(results).reduce(
        (sum, item) => sum + (item.cost || 0),
        0,
    );

    displayConcreteResults(results, grade, mix.ratio, volume, totalCost);
}

function displayConcreteResults(results, grade, ratio, volume, totalCost) {
    const resultsDiv = document.getElementById("concreteResults");
    if (!resultsDiv) return;

    resultsDiv.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <h3>🏗️ Concrete Mix Design - ${grade}</h3>
            <p style="color: var(--calc-text-light); margin-top: 0.5rem;">
                <strong>Mix Ratio:</strong> ${ratio} | 
                <strong>Volume:</strong> ${volume} m³ | 
                <strong>Estimated Cost:</strong> ${formatCurrency(totalCost)}
            </p>
        </div>
        <div class="material-grid">
            ${Object.entries(results)
            .map(
                ([name, data]) => `
                <div class="material-item">
                    <div class="material-item__icon">${data.icon}</div>
                    <div class="material-item__name">${name}</div>
                    <div class="material-item__value">${data.value} ${data.unit}</div>
                    ${data.cost ? `<div style="font-size: 0.875rem; color: var(--calc-accent); margin-top: 0.25rem;">${formatCurrency(data.cost)}</div>` : ""}
                </div>
            `,
            )
            .join("")}
        </div>
        <div style="margin-top: 2rem; padding: 1rem; background: rgba(230, 126, 34, 0.05); border-radius: 8px; border-left: 4px solid var(--calc-accent);">
            <strong>Note:</strong> Add admixtures as per design requirements. Water-cement ratio should be maintained at 0.45-0.50 for ${grade} grade concrete.
        </div>
    `;

    resultsDiv.style.display = "block";
}

// ====================================
// PDF DOWNLOAD
// ====================================

document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadPDF");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            alert(
                "PDF download functionality requires a backend service. For now, please use the Print option (Ctrl+P or Cmd+P) and save as PDF.",
            );
        });
    }
});
