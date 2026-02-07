/* ====================================
   COMPREHENSIVE BUILDING CALCULATOR
   Professional Civil Engineering Tool
   ==================================== */

// ====================================
// MATERIAL RATES (West Bengal - 2026)
// UPDATE THESE RATES AS NEEDED
// ====================================
const materialRates = {
  cement: 450, // per bag (50 kg)
  sand: 1850, // per cubic meter (cu m)
  aggregate: 2200, // per cubic meter (cu m)
  steel: 70, // per kg
  bricks: 9, // per piece
  tiles: 485, // per sq m
  marble: 1290, // per sq m
  vitrified: 860, // per sq m
  paint: 350, // per liter
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

function showError(inputElement, message) {
  inputElement.style.borderColor = "#EF4444";
  inputElement.style.borderWidth = "2px";

  const existingError =
    inputElement.parentElement.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.style.color = "#EF4444";
  errorDiv.style.fontSize = "0.875rem";
  errorDiv.style.marginTop = "0.25rem";
  errorDiv.style.fontWeight = "500";
  errorDiv.textContent = message;

  inputElement.parentElement.appendChild(errorDiv);
}

function clearError(inputElement) {
  inputElement.style.borderColor = "";
  inputElement.style.borderWidth = "";

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
// INITIALIZE CALCULATOR
// ====================================

document.addEventListener("DOMContentLoaded", function () {
  initBuildingCalculator();
});

function initBuildingCalculator() {
  const form = document.getElementById("buildingCalculatorForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearAllErrors(form);
    calculateBuilding();
  });

  // Real-time error clearing
  const inputs = form.querySelectorAll(".form-input");
  inputs.forEach((input) => {
    input.addEventListener("input", () => clearError(input));
    input.addEventListener("focus", () => clearError(input));
  });

  // PDF Download
  const downloadBtn = document.getElementById("downloadPDF");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      alert(
        "PDF download functionality requires a backend service. For now, please use the Print option (Ctrl+P or Cmd+P) and save as PDF.",
      );
    });
  }
}

// ====================================
// MAIN CALCULATION FUNCTION
// ====================================

function calculateBuilding() {
  const form = document.getElementById("buildingCalculatorForm");

  // Get all input values
  const inputs = {
    buildingType: document.getElementById("buildingType").value,
    constructionType: document.getElementById("constructionType").value,
    length: parseFloat(document.getElementById("length").value),
    breadth: parseFloat(document.getElementById("breadth").value),
    numFloors: parseInt(document.getElementById("numFloors").value),
    floorHeight: parseFloat(document.getElementById("floorHeight").value),
    externalWallThickness: parseFloat(
      document.getElementById("externalWallThickness").value,
    ),
    internalWallThickness: parseFloat(
      document.getElementById("internalWallThickness").value,
    ),
    foundationDepth: parseFloat(
      document.getElementById("foundationDepth").value,
    ),
    plinthHeight: parseFloat(document.getElementById("plinthHeight").value),
    slabThickness: parseFloat(document.getElementById("slabThickness").value),
    concreteGrade: document.getElementById("concreteGrade").value,
    internalPlasterThickness: parseFloat(
      document.getElementById("internalPlasterThickness").value,
    ),
    externalPlasterThickness: parseFloat(
      document.getElementById("externalPlasterThickness").value,
    ),
    plasterRatio: document.getElementById("plasterRatio").value,
    flooringThickness: parseFloat(
      document.getElementById("flooringThickness").value,
    ),
    flooringType: document.getElementById("flooringType").value,
    doorArea: parseFloat(document.getElementById("doorArea").value) || 0,
    windowArea: parseFloat(document.getElementById("windowArea").value) || 0,
    finishQuality: document.getElementById("finishQuality").value,
  };

  // Validate inputs
  if (!validateInputs(inputs)) {
    return;
  }

  // Calculate areas
  const areas = calculateAreas(inputs);

  // Calculate materials for each component
  const materials = {
    foundation: calculateFoundationMaterials(inputs, areas),
    plinthBeam: calculatePlinthBeamMaterials(inputs, areas),
    columns: calculateColumnsMaterials(inputs, areas),
    beams: calculateBeamsMaterials(inputs, areas),
    slabs: calculateSlabsMaterials(inputs, areas),
    brickwork: calculateBrickworkMaterials(inputs, areas),
    plaster: calculatePlasterMaterials(inputs, areas),
    flooring: calculateFlooringMaterials(inputs, areas),
  };

  // Calculate total materials
  const totalMaterials = aggregateMaterials(materials);

  // Calculate costs
  const costs = calculateCosts(materials, totalMaterials, inputs);

  // Display results
  displayResults(areas, totalMaterials, materials, costs);
}

// ====================================
// INPUT VALIDATION
// ====================================

function validateInputs(inputs) {
  let hasError = false;

  if (!inputs.length || inputs.length <= 0) {
    showError(
      document.getElementById("length"),
      "Please enter a valid length greater than 0",
    );
    hasError = true;
  }

  if (!inputs.breadth || inputs.breadth <= 0) {
    showError(
      document.getElementById("breadth"),
      "Please enter a valid breadth greater than 0",
    );
    hasError = true;
  }

  if (!inputs.numFloors || inputs.numFloors <= 0 || inputs.numFloors > 20) {
    showError(
      document.getElementById("numFloors"),
      "Number of floors must be between 1 and 20",
    );
    hasError = true;
  }

  if (
    !inputs.floorHeight ||
    inputs.floorHeight < 2.4 ||
    inputs.floorHeight > 6
  ) {
    showError(
      document.getElementById("floorHeight"),
      "Floor height must be between 2.4 and 6 meters",
    );
    hasError = true;
  }

  if (!inputs.foundationDepth || inputs.foundationDepth <= 0) {
    showError(
      document.getElementById("foundationDepth"),
      "Please enter a valid foundation depth",
    );
    hasError = true;
  }

  return !hasError;
}

// ====================================
// AREA CALCULATIONS
// All calculations in METERS and SQUARE METERS
// ====================================

function calculateAreas(inputs) {
  const plinthArea = inputs.length * inputs.breadth; // sq m
  const totalBuiltUpArea = plinthArea * inputs.numFloors; // sq m

  // Perimeter in meters
  const perimeter = 2 * (inputs.length + inputs.breadth);

  // Wall areas in sq m
  const externalWallArea = perimeter * inputs.floorHeight * inputs.numFloors;

  // Internal wall area (estimate - will need more detailed input for accuracy)
  // FORMULA NEEDED: How to calculate internal wall length based on building dimensions
  const estimatedInternalWallLength = perimeter * 0.6; // Placeholder estimate
  const internalWallArea =
    estimatedInternalWallLength * inputs.floorHeight * inputs.numFloors;

  // Net wall area (excluding openings)
  const totalOpenings = inputs.doorArea + inputs.windowArea;
  const netExternalWallArea = externalWallArea - totalOpenings;
  const netInternalWallArea = internalWallArea;

  return {
    plinthArea,
    totalBuiltUpArea,
    perimeter,
    externalWallArea,
    internalWallArea,
    netExternalWallArea,
    netInternalWallArea,
  };
}

// ====================================
// FOUNDATION MATERIALS
// All inputs in METERS, output in cubic meters
// ====================================

function calculateFoundationMaterials(inputs, areas) {
  // ============================================
  // FORMULA NEEDED: Foundation calculation
  // ============================================
  // Please provide the accurate formula for:
  // 1. Foundation concrete volume calculation (in cubic meters)
  // 2. Cement bags required
  // 3. Sand (cubic meters) required
  // 4. Aggregate (cubic meters) required
  // 5. Steel (kg) required
  //
  // Current placeholder calculation:
  // ============================================

  const foundationVolume = areas.perimeter * 0.45 * inputs.foundationDepth; // Placeholder (cu m)
  const wetVolume = foundationVolume * 1.54; // 54% for voids and wastage

  // Placeholder ratios - REPLACE WITH YOUR ACCURATE FORMULAS
  const cement = Math.ceil(wetVolume * 6); // bags
  const sand = Math.ceil(wetVolume * 0.42); // cu m
  const aggregate = Math.ceil(wetVolume * 0.84); // cu m
  const steel = Math.ceil(foundationVolume * 40); // kg

  return {
    cement,
    sand,
    aggregate,
    steel,
    volume: foundationVolume,
  };
}

// ====================================
// PLINTH BEAM MATERIALS
// All inputs/outputs in METERS
// ====================================

function calculatePlinthBeamMaterials(inputs, areas) {
  // ============================================
  // FORMULA NEEDED: Plinth beam calculation
  // ============================================
  // Please provide the accurate formula for:
  // 1. Plinth beam volume (in cubic meters)
  // 2. Cement, sand, aggregate for plinth beam
  // 3. Steel requirement
  //
  // Typical plinth beam size assumptions needed
  // ============================================

  const beamLength = areas.perimeter; // meters
  const beamWidth = 0.23; // 230 mm = 0.23 m (assumption)
  const beamDepth = 0.3; // 300 mm = 0.30 m (assumption)
  const beamVolume = beamLength * beamWidth * beamDepth; // cu m
  const wetVolume = beamVolume * 1.54;

  // Placeholder - REPLACE WITH YOUR FORMULAS
  const cement = Math.ceil(wetVolume * 6.4);
  const sand = Math.ceil(wetVolume * 0.42); // cu m
  const aggregate = Math.ceil(wetVolume * 0.84); // cu m
  const steel = Math.ceil(beamVolume * 80); // kg

  return {
    cement,
    sand,
    aggregate,
    steel,
    volume: beamVolume,
  };
}

// ====================================
// COLUMNS MATERIALS
// All inputs/outputs in METERS
// ====================================

function calculateColumnsMaterials(inputs, areas) {
  // ============================================
  // FORMULA NEEDED: Columns calculation
  // ============================================
  // Please provide:
  // 1. Number of columns based on area/perimeter
  // 2. Column size (based on floors and load)
  // 3. Column height calculation
  // 4. Material quantities
  // ============================================

  // Placeholder: Assume 1 column per 10 sq m
  const numColumns = Math.ceil(areas.plinthArea / 10);
  const columnHeight = inputs.floorHeight * inputs.numFloors;
  const columnSize = 0.23; // 230mm x 230mm = 0.23m x 0.23m (assumption)
  const columnVolume = numColumns * columnSize * columnSize * columnHeight; // cu m
  const wetVolume = columnVolume * 1.54;

  // Placeholder - REPLACE
  const cement = Math.ceil(wetVolume * 6.4);
  const sand = Math.ceil(wetVolume * 0.42); // cu m
  const aggregate = Math.ceil(wetVolume * 0.84); // cu m
  const steel = Math.ceil(columnVolume * 120); // Higher steel % for columns

  return {
    cement,
    sand,
    aggregate,
    steel,
    volume: columnVolume,
    numberOfColumns: numColumns,
  };
}

// ====================================
// BEAMS MATERIALS
// All inputs/outputs in METERS
// ====================================

function calculateBeamsMaterials(inputs, areas) {
  // ============================================
  // FORMULA NEEDED: Beams calculation
  // ============================================
  // Please provide:
  // 1. Total beam length calculation
  // 2. Beam sizes based on span
  // 3. Material quantities
  // ============================================

  // Placeholder: Beams along perimeter + cross beams
  const totalBeamLength =
    (areas.perimeter + inputs.length + inputs.breadth) * inputs.numFloors;
  const beamWidth = 0.23; // 230mm = 0.23m
  const beamDepth = 0.38; // 380mm = 0.38m
  const beamVolume = totalBeamLength * beamWidth * beamDepth; // cu m
  const wetVolume = beamVolume * 1.54;

  // Placeholder - REPLACE
  const cement = Math.ceil(wetVolume * 6.4);
  const sand = Math.ceil(wetVolume * 0.42); // cu m
  const aggregate = Math.ceil(wetVolume * 0.84); // cu m
  const steel = Math.ceil(beamVolume * 100);

  return {
    cement,
    sand,
    aggregate,
    steel,
    volume: beamVolume,
  };
}

// ====================================
// SLABS MATERIALS
// All inputs/outputs in METERS
// ====================================

function calculateSlabsMaterials(inputs, areas) {
  // ============================================
  // FORMULA NEEDED: Slab calculation
  // ============================================
  // Please provide accurate formula based on:
  // 1. Slab thickness (in mm)
  // 2. Concrete grade
  // 3. Steel percentage
  // ============================================

  const slabArea = areas.plinthArea * inputs.numFloors; // sq m
  const slabThicknessM = inputs.slabThickness / 1000; // Convert mm to meters
  const slabVolume = slabArea * slabThicknessM; // cu m
  const wetVolume = slabVolume * 1.54;

  // Placeholder - REPLACE WITH YOUR FORMULAS
  const cement = Math.ceil(wetVolume * 6.4);
  const sand = Math.ceil(wetVolume * 0.42); // cu m
  const aggregate = Math.ceil(wetVolume * 0.84); // cu m
  const steel = Math.ceil(slabVolume * 60); // kg per cu m

  return {
    cement,
    sand,
    aggregate,
    steel,
    volume: slabVolume,
  };
}

// ====================================
// BRICKWORK MATERIALS
// Wall thickness in MM, areas in SQ M
// ====================================

function calculateBrickworkMaterials(inputs, areas) {
  // ============================================
  // FORMULA NEEDED: Brickwork calculation
  // ============================================
  // Please provide accurate formulas for:
  // 1. Bricks per sq m for different wall thickness
  //    - 115 mm wall (half brick)
  //    - 230 mm wall (full brick)
  //    - 345 mm wall (1.5 brick)
  // 2. Mortar consumption
  // 3. Cement and sand for mortar
  // ============================================

  // External walls
  const externalBricksPerSqm =
    inputs.externalWallThickness === 230
      ? 145
      : inputs.externalWallThickness === 115
        ? 75
        : 215;
  const externalBricks = Math.ceil(
    areas.netExternalWallArea * externalBricksPerSqm,
  );

  // Internal walls
  const internalBricksPerSqm = inputs.internalWallThickness === 230 ? 145 : 75;
  const internalBricks = Math.ceil(
    areas.netInternalWallArea * internalBricksPerSqm,
  );

  const totalBricks = externalBricks + internalBricks;

  // Mortar calculation - PLACEHOLDER, REPLACE WITH YOUR FORMULA
  const totalWallArea = areas.netExternalWallArea + areas.netInternalWallArea;
  const avgWallThickness =
    (inputs.externalWallThickness + inputs.internalWallThickness) / 2;
  const mortarVolume = totalWallArea * (avgWallThickness / 1000) * 0.3; // 30% mortar, cu m

  const cement = Math.ceil(mortarVolume * 8); // bags
  const sand = Math.ceil(mortarVolume * 1.2); // cu m

  return {
    bricks: totalBricks,
    cement,
    sand,
    externalBricks,
    internalBricks,
  };
}

// ====================================
// PLASTER MATERIALS
// Thickness in MM, areas in SQ M
// ====================================

function calculatePlasterMaterials(inputs, areas) {
  // ============================================
  // FORMULA NEEDED: Plaster calculation
  // ============================================
  // Please provide accurate formulas for:
  // 1. Cement and sand based on plaster ratio
  //    - 1:3, 1:4, 1:5, 1:6
  // 2. Coverage per bag of cement
  // 3. Wastage factor
  // ============================================

  const totalWallArea = areas.netExternalWallArea + areas.netInternalWallArea;

  // Both sides of walls
  const totalPlasterArea = totalWallArea * 2;

  // Internal plaster
  const internalPlasterVolume =
    areas.netInternalWallArea * 2 * (inputs.internalPlasterThickness / 1000); // mm to m, cu m

  // External plaster
  const externalPlasterVolume =
    areas.netExternalWallArea * 2 * (inputs.externalPlasterThickness / 1000); // mm to m, cu m

  const totalPlasterVolume = internalPlasterVolume + externalPlasterVolume;
  const wetVolume = totalPlasterVolume * 1.33; // 33% for wastage

  // Ratio-based calculation - PLACEHOLDER, REPLACE WITH ACCURATE FORMULA
  const ratioMultiplier =
    inputs.plasterRatio === "1:3"
      ? 12.0
      : inputs.plasterRatio === "1:4"
        ? 9.0
        : inputs.plasterRatio === "1:5"
          ? 7.5
          : 6.0;

  const cement = Math.ceil(wetVolume * ratioMultiplier);
  const sand = Math.ceil(wetVolume * 1.2); // cu m

  return {
    cement,
    sand,
    area: totalPlasterArea,
    volume: totalPlasterVolume,
  };
}

// ====================================
// FLOORING MATERIALS
// Thickness in MM, areas in SQ M
// ====================================

function calculateFlooringMaterials(inputs, areas) {
  // ============================================
  // FORMULA NEEDED: Flooring calculation
  // ============================================
  // Please provide formulas for:
  // 1. Base concrete calculation
  // 2. Tile/marble area (with wastage)
  // 3. Bedding mortar
  // ============================================

  const totalFloorArea = areas.plinthArea * inputs.numFloors; // sq m
  const flooringThicknessM = inputs.flooringThickness / 1000; // mm to m
  const flooringVolume = totalFloorArea * flooringThicknessM; // cu m

  // Base concrete
  const cement = Math.ceil(flooringVolume * 8);
  const sand = Math.ceil(flooringVolume * 1.2); // cu m

  // Tiles/Marble with 10% wastage
  const tileArea = Math.ceil(totalFloorArea * 1.1); // sq m

  return {
    cement,
    sand,
    tileArea,
    flooringType: inputs.flooringType,
    volume: flooringVolume,
  };
}

// ====================================
// AGGREGATE MATERIALS
// ====================================

function aggregateMaterials(materials) {
  const total = {
    cement: 0,
    sand: 0,
    aggregate: 0,
    steel: 0,
    bricks: 0,
    tiles: 0,
  };

  // Sum up all components
  for (const component in materials) {
    const mat = materials[component];
    total.cement += mat.cement || 0;
    total.sand += mat.sand || 0;
    total.aggregate += mat.aggregate || 0;
    total.steel += mat.steel || 0;
    total.bricks += mat.bricks || 0;
    if (mat.tileArea) total.tiles += mat.tileArea;
  }

  return total;
}

// ====================================
// COST CALCULATIONS
// ====================================

function calculateCosts(materials, totalMaterials, inputs) {
  // Material costs
  const materialCosts = {
    cement: totalMaterials.cement * materialRates.cement,
    sand: totalMaterials.sand * materialRates.sand,
    aggregate: totalMaterials.aggregate * materialRates.aggregate,
    steel: totalMaterials.steel * materialRates.steel,
    bricks: totalMaterials.bricks * materialRates.bricks,
    tiles:
      totalMaterials.tiles *
      (inputs.flooringType === "marble"
        ? materialRates.marble
        : inputs.flooringType === "vitrified"
          ? materialRates.vitrified
          : materialRates.tiles),
  };

  const totalMaterialCost = Object.values(materialCosts).reduce(
    (a, b) => a + b,
    0,
  );

  // Labor cost (typically 35-40% of material cost)
  const laborCost = totalMaterialCost * 0.35;

  // Other costs
  const costs = {
    materials: totalMaterialCost,
    labor: laborCost,
    overhead: totalMaterialCost * 0.15, // 15% overhead
    contingency: totalMaterialCost * 0.1, // 10% contingency
    finishing: totalMaterialCost * 0.2, // 20% for finishing
  };

  costs.total = Object.values(costs).reduce((a, b) => a + b, 0);

  return costs;
}

// ====================================
// DISPLAY RESULTS
// ====================================

function displayResults(areas, totalMaterials, materials, costs) {
  const emptyState = document.getElementById("resultsEmpty");
  const resultsContent = document.getElementById("resultsContent");

  if (emptyState) emptyState.style.display = "none";
  if (resultsContent) resultsContent.style.display = "block";

  // Update summary stats
  document.getElementById("totalArea").textContent = formatNumber(
    areas.totalBuiltUpArea,
    2,
  );
  document.getElementById("totalCost").textContent = formatCurrency(
    costs.total,
  );
  document.getElementById("costPerSqm").textContent = formatCurrency(
    costs.total / areas.totalBuiltUpArea,
  );

  // Total materials
  displayMaterialList("totalMaterialBreakdown", totalMaterials);

  // Component-wise breakdown
  displayComponentMaterials("foundationBreakdown", materials.foundation);
  displayComponentMaterials("plinthBeamBreakdown", materials.plinthBeam);
  displayComponentMaterials("columnsBreakdown", materials.columns);
  displayComponentMaterials("beamsBreakdown", materials.beams);
  displayComponentMaterials("slabsBreakdown", materials.slabs);
  displayComponentMaterials("brickworkBreakdown", materials.brickwork);
  displayComponentMaterials("plasterBreakdown", materials.plaster);
  displayComponentMaterials("flooringBreakdown", materials.flooring);

  // Cost breakdown
  displayCostBreakdown(costs);

  // Scroll to results on mobile
  if (window.innerWidth <= 968) {
    setTimeout(() => {
      const resultsCard = document.getElementById("resultsCard");
      if (resultsCard) {
        const headerOffset = 80;
        const elementPosition = resultsCard.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 300);
  }
}

function displayMaterialList(elementId, materials) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const items = [];

  if (materials.cement) {
    items.push(`
            <div class="breakdown-item">
                <span class="breakdown-item__name">🏗️ Cement</span>
                <span class="breakdown-item__value">${formatNumber(materials.cement, 0)} bags</span>
            </div>
        `);
  }

  if (materials.sand) {
    items.push(`
            <div class="breakdown-item">
                <span class="breakdown-item__name">🏖️ Sand</span>
                <span class="breakdown-item__value">${formatNumber(materials.sand, 2)} cu m</span>
            </div>
        `);
  }

  if (materials.aggregate) {
    items.push(`
            <div class="breakdown-item">
                <span class="breakdown-item__name">🪨 Aggregate</span>
                <span class="breakdown-item__value">${formatNumber(materials.aggregate, 2)} cu m</span>
            </div>
        `);
  }

  if (materials.steel) {
    items.push(`
            <div class="breakdown-item">
                <span class="breakdown-item__name">⚙️ Steel</span>
                <span class="breakdown-item__value">${formatNumber(materials.steel, 0)} kg</span>
            </div>
        `);
  }

  if (materials.bricks) {
    items.push(`
            <div class="breakdown-item">
                <span class="breakdown-item__name">🧱 Bricks</span>
                <span class="breakdown-item__value">${formatNumber(materials.bricks, 0)} nos</span>
            </div>
        `);
  }

  if (materials.tiles) {
    items.push(`
            <div class="breakdown-item">
                <span class="breakdown-item__name">⬜ Tiles/Flooring</span>
                <span class="breakdown-item__value">${formatNumber(materials.tiles, 2)} sq m</span>
            </div>
        `);
  }

  element.innerHTML = items.join("");
}

function displayComponentMaterials(elementId, materials) {
  displayMaterialList(elementId, materials);
}

function displayCostBreakdown(costs) {
  const element = document.getElementById("costBreakdown");
  if (!element) return;

  const items = Object.entries(costs)
    .filter(([key]) => key !== "total")
    .map(([key, value]) => {
      const percentage = (value / costs.total) * 100;
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
    });

  element.innerHTML = items.join("");

  // Animate progress bars
  setTimeout(() => {
    const fills = document.querySelectorAll(".cost-item__fill");
    fills.forEach((bar) => {
      const targetWidth = bar.getAttribute("data-width");
      bar.offsetHeight; // Force reflow
      bar.style.width = targetWidth + "%";
    });
  }, 100);
}
