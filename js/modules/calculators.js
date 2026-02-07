/* ====================================
   COMPREHENSIVE BUILDING CALCULATOR
   Professional Civil Engineering Tool
   WITH ACCURATE FORMULAS
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
  bricks: 9, // per piece (modular brick 190x90x90mm)
  tiles: 485, // per sq m
  marble: 1290, // per sq m
  vitrified: 860, // per sq m
  paint: 350, // per liter
};

// ====================================
// CONCRETE MIX RATIOS
// ====================================
const concreteMixRatios = {
  M15: { cement: 1, sand: 2, aggregate: 4, sum: 7 },
  M20: { cement: 1, sand: 1.5, aggregate: 3, sum: 5.5 },
  M25: { cement: 1, sand: 1, aggregate: 2, sum: 4 },
  M30: { cement: 1, sand: 1, aggregate: 2, sum: 4 },
};

// ====================================
// STEEL REINFORCEMENT RATIOS (kg/m³)
// ====================================
const steelRatios = {
  foundation: 80,
  plinthBeam: 100,
  column: 160,
  beam: 115,
  slab: 80,
};

// ====================================
// MORTAR RATIOS
// ====================================
const mortarRatios = {
  '1:3': { cement: 1, sand: 3, sum: 4 },
  '1:4': { cement: 1, sand: 4, sum: 5 },
  '1:5': { cement: 1, sand: 5, sum: 6 },
  '1:6': { cement: 1, sand: 6, sum: 7 },
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

  const existingError = inputElement.parentElement.querySelector(".error-message");
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

  const errorMessage = inputElement.parentElement.querySelector(".error-message");
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
    externalWallThickness: parseFloat(document.getElementById("externalWallThickness").value),
    internalWallThickness: parseFloat(document.getElementById("internalWallThickness").value),
    foundationDepth: parseFloat(document.getElementById("foundationDepth").value),
    plinthHeight: parseFloat(document.getElementById("plinthHeight").value),
    slabThickness: parseFloat(document.getElementById("slabThickness").value),
    concreteGrade: document.getElementById("concreteGrade").value,
    internalPlasterThickness: parseFloat(document.getElementById("internalPlasterThickness").value),
    externalPlasterThickness: parseFloat(document.getElementById("externalPlasterThickness").value),
    plasterRatio: document.getElementById("plasterRatio").value,
    flooringThickness: parseFloat(document.getElementById("flooringThickness").value),
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
    showError(document.getElementById("length"), "Please enter a valid length greater than 0");
    hasError = true;
  }

  if (!inputs.breadth || inputs.breadth <= 0) {
    showError(document.getElementById("breadth"), "Please enter a valid breadth greater than 0");
    hasError = true;
  }

  if (!inputs.numFloors || inputs.numFloors <= 0 || inputs.numFloors > 20) {
    showError(document.getElementById("numFloors"), "Number of floors must be between 1 and 20");
    hasError = true;
  }

  if (!inputs.floorHeight || inputs.floorHeight < 2.4 || inputs.floorHeight > 6) {
    showError(document.getElementById("floorHeight"), "Floor height must be between 2.4 and 6 meters");
    hasError = true;
  }

  if (!inputs.foundationDepth || inputs.foundationDepth <= 0) {
    showError(document.getElementById("foundationDepth"), "Please enter a valid foundation depth");
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

  // Internal wall area (estimated as 60% of perimeter)
  const estimatedInternalWallLength = perimeter * 0.6;
  const internalWallArea = estimatedInternalWallLength * inputs.floorHeight * inputs.numFloors;

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
    estimatedInternalWallLength,
  };
}

// ====================================
// FOUNDATION MATERIALS
// ACCURATE FORMULA IMPLEMENTATION
// ====================================

function calculateFoundationMaterials(inputs, areas) {
  // Foundation strip width (assumed 0.45m for typical residential)
  const foundationWidth = 0.45; // meters
  
  // Wet volume = Length × Width × Depth
  const wetVolume = areas.perimeter * foundationWidth * inputs.foundationDepth; // cu m
  
  // Dry volume = Wet Volume × 1.54
  const dryVolume = wetVolume * 1.54;
  
  // Get concrete mix ratio
  const mix = concreteMixRatios[inputs.concreteGrade];
  const cementBagVolume = 0.035; // m³ per 50kg bag
  
  // Cement (Bags) = (Dry Volume × Cement Ratio) / (Sum of Ratios × 0.035)
  const cement = Math.ceil((dryVolume * mix.cement) / (mix.sum * cementBagVolume));
  
  // Sand (m³) = (Dry Volume × Sand Ratio) / Sum of Ratios
  const sand = (dryVolume * mix.sand) / mix.sum;
  
  // Aggregate (m³) = (Dry Volume × Aggregate Ratio) / Sum of Ratios
  const aggregate = (dryVolume * mix.aggregate) / mix.sum;
  
  // Steel = Volume × Steel Ratio (kg/m³)
  const steel = Math.ceil(wetVolume * steelRatios.foundation);

  return {
    cement,
    sand: parseFloat(sand.toFixed(2)),
    aggregate: parseFloat(aggregate.toFixed(2)),
    steel,
    volume: parseFloat(wetVolume.toFixed(2)),
  };
}

// ====================================
// PLINTH BEAM MATERIALS
// ACCURATE FORMULA IMPLEMENTATION
// ====================================

function calculatePlinthBeamMaterials(inputs, areas) {
  const beamLength = areas.perimeter; // meters
  const beamWidth = 0.23; // 230 mm = 0.23 m
  const beamDepth = 0.30; // 300 mm = 0.30 m
  
  // Wet Volume = Length × Width × Depth
  const wetVolume = beamLength * beamWidth * beamDepth; // cu m
  
  // Dry Volume = Wet Volume × 1.54
  const dryVolume = wetVolume * 1.54;
  
  const mix = concreteMixRatios[inputs.concreteGrade];
  const cementBagVolume = 0.035;
  
  const cement = Math.ceil((dryVolume * mix.cement) / (mix.sum * cementBagVolume));
  const sand = (dryVolume * mix.sand) / mix.sum;
  const aggregate = (dryVolume * mix.aggregate) / mix.sum;
  const steel = Math.ceil(wetVolume * steelRatios.plinthBeam);

  return {
    cement,
    sand: parseFloat(sand.toFixed(2)),
    aggregate: parseFloat(aggregate.toFixed(2)),
    steel,
    volume: parseFloat(wetVolume.toFixed(2)),
  };
}

// ====================================
// COLUMNS MATERIALS
// ACCURATE FORMULA IMPLEMENTATION
// ====================================

function calculateColumnsMaterials(inputs, areas) {
  // Number of columns: 1 column per 10 sq m
  const numColumns = Math.ceil(areas.plinthArea / 10);
  
  const columnHeight = inputs.floorHeight * inputs.numFloors;
  const columnSize = 0.23; // 230mm × 230mm = 0.23m × 0.23m
  
  // Wet Volume = Number of Columns × Size × Size × Height
  const wetVolume = numColumns * columnSize * columnSize * columnHeight; // cu m
  
  // Dry Volume = Wet Volume × 1.54
  const dryVolume = wetVolume * 1.54;
  
  const mix = concreteMixRatios[inputs.concreteGrade];
  const cementBagVolume = 0.035;
  
  const cement = Math.ceil((dryVolume * mix.cement) / (mix.sum * cementBagVolume));
  const sand = (dryVolume * mix.sand) / mix.sum;
  const aggregate = (dryVolume * mix.aggregate) / mix.sum;
  const steel = Math.ceil(wetVolume * steelRatios.column);

  return {
    cement,
    sand: parseFloat(sand.toFixed(2)),
    aggregate: parseFloat(aggregate.toFixed(2)),
    steel,
    volume: parseFloat(wetVolume.toFixed(2)),
    numberOfColumns: numColumns,
  };
}

// ====================================
// BEAMS MATERIALS
// ACCURATE FORMULA IMPLEMENTATION
// ====================================

function calculateBeamsMaterials(inputs, areas) {
  // Total beam length: perimeter + cross beams
  const totalBeamLength = (areas.perimeter + inputs.length + inputs.breadth) * inputs.numFloors;
  const beamWidth = 0.23; // 230mm
  const beamDepth = 0.38; // 380mm
  
  // Wet Volume = Length × Width × Depth
  const wetVolume = totalBeamLength * beamWidth * beamDepth; // cu m
  
  // Dry Volume = Wet Volume × 1.54
  const dryVolume = wetVolume * 1.54;
  
  const mix = concreteMixRatios[inputs.concreteGrade];
  const cementBagVolume = 0.035;
  
  const cement = Math.ceil((dryVolume * mix.cement) / (mix.sum * cementBagVolume));
  const sand = (dryVolume * mix.sand) / mix.sum;
  const aggregate = (dryVolume * mix.aggregate) / mix.sum;
  const steel = Math.ceil(wetVolume * steelRatios.beam);

  return {
    cement,
    sand: parseFloat(sand.toFixed(2)),
    aggregate: parseFloat(aggregate.toFixed(2)),
    steel,
    volume: parseFloat(wetVolume.toFixed(2)),
  };
}

// ====================================
// SLABS MATERIALS
// ACCURATE FORMULA IMPLEMENTATION
// ====================================

function calculateSlabsMaterials(inputs, areas) {
  const slabArea = areas.plinthArea * inputs.numFloors; // sq m
  const slabThicknessM = inputs.slabThickness / 1000; // Convert mm to meters
  
  // Wet Volume = Area × Thickness
  const wetVolume = slabArea * slabThicknessM; // cu m
  
  // Dry Volume = Wet Volume × 1.54
  const dryVolume = wetVolume * 1.54;
  
  const mix = concreteMixRatios[inputs.concreteGrade];
  const cementBagVolume = 0.035;
  
  const cement = Math.ceil((dryVolume * mix.cement) / (mix.sum * cementBagVolume));
  const sand = (dryVolume * mix.sand) / mix.sum;
  const aggregate = (dryVolume * mix.aggregate) / mix.sum;
  const steel = Math.ceil(wetVolume * steelRatios.slab);

  return {
    cement,
    sand: parseFloat(sand.toFixed(2)),
    aggregate: parseFloat(aggregate.toFixed(2)),
    steel,
    volume: parseFloat(wetVolume.toFixed(2)),
  };
}

// ====================================
// BRICKWORK MATERIALS
// ACCURATE FORMULA IMPLEMENTATION
// ====================================

function calculateBrickworkMaterials(inputs, areas) {
  // Calculate wall volumes
  const externalWallThicknessM = inputs.externalWallThickness / 1000; // mm to m
  const internalWallThicknessM = inputs.internalWallThickness / 1000; // mm to m
  
  const externalWallVolume = areas.netExternalWallArea * externalWallThicknessM;
  const internalWallVolume = areas.netInternalWallArea * internalWallThicknessM;
  const totalWallVolume = externalWallVolume + internalWallVolume;
  
  // Number of Bricks = Volume × 500 (for modular brick 190×90×90mm)
  const totalBricks = Math.ceil(totalWallVolume * 500);
  
  // Mortar Volume = Volume of Brickwork × 0.30 (30% of wall volume)
  const mortarWetVolume = totalWallVolume * 0.30;
  
  // Mortar Dry Volume = Mortar Volume × 1.33
  const mortarDryVolume = mortarWetVolume * 1.33;
  
  // Using 1:6 ratio for brickwork mortar (standard)
  const ratio = mortarRatios['1:6'];
  const cementBagVolume = 0.035;
  
  const cement = Math.ceil((mortarDryVolume * ratio.cement) / (ratio.sum * cementBagVolume));
  const sand = (mortarDryVolume * ratio.sand) / ratio.sum;

  return {
    bricks: totalBricks,
    cement,
    sand: parseFloat(sand.toFixed(2)),
    externalBricks: Math.ceil(externalWallVolume * 500),
    internalBricks: Math.ceil(internalWallVolume * 500),
  };
}

// ====================================
// PLASTER MATERIALS
// ACCURATE FORMULA IMPLEMENTATION
// ====================================

function calculatePlasterMaterials(inputs, areas) {
  const totalWallArea = areas.netExternalWallArea + areas.netInternalWallArea;
  
  // Both sides of walls (internal and external surfaces)
  const totalPlasterArea = totalWallArea * 2;
  
  // Internal plaster volume (both sides of internal walls)
  const internalPlasterThicknessM = inputs.internalPlasterThickness / 1000; // mm to m
  const internalPlasterVolume = areas.netInternalWallArea * 2 * internalPlasterThicknessM;
  
  // External plaster volume
  const externalPlasterThicknessM = inputs.externalPlasterThickness / 1000; // mm to m
  const externalPlasterVolume = areas.netExternalWallArea * 2 * externalPlasterThicknessM;
  
  // Total Wet Volume = Area × Thickness
  const wetVolume = internalPlasterVolume + externalPlasterVolume;
  
  // Dry Volume = Wet Volume × 1.33
  const dryVolume = wetVolume * 1.33;
  
  // Get mortar ratio
  const ratio = mortarRatios[inputs.plasterRatio];
  const cementBagVolume = 0.035;
  
  // Cement (Bags) = (Dry Volume × Ratio Part) / (Sum of Ratio × 0.035)
  const cement = Math.ceil((dryVolume * ratio.cement) / (ratio.sum * cementBagVolume));
  
  // Sand (m³) = (Dry Volume × Sand Ratio) / Sum of Ratios
  const sand = (dryVolume * ratio.sand) / ratio.sum;

  return {
    cement,
    sand: parseFloat(sand.toFixed(2)),
    area: parseFloat(totalPlasterArea.toFixed(2)),
    volume: parseFloat(wetVolume.toFixed(2)),
  };
}

// ====================================
// FLOORING MATERIALS
// ACCURATE FORMULA IMPLEMENTATION
// ====================================

function calculateFlooringMaterials(inputs, areas) {
  const totalFloorArea = areas.plinthArea * inputs.numFloors; // sq m
  
  // Bedding thickness (typical 50mm)
  const beddingThickness = 0.05; // meters
  
  // Bedding Volume = Floor Area × Bedding Thickness
  const beddingWetVolume = totalFloorArea * beddingThickness;
  
  // Dry Volume = Bedding Volume × 1.33
  const beddingDryVolume = beddingWetVolume * 1.33;
  
  // Using 1:4 ratio for bedding mortar
  const ratio = mortarRatios['1:4'];
  const cementBagVolume = 0.035;
  
  const cement = Math.ceil((beddingDryVolume * ratio.cement) / (ratio.sum * cementBagVolume));
  const sand = (beddingDryVolume * ratio.sand) / ratio.sum;
  
  // Number of Tiles = (Floor Area / Area of One Tile) × 1.10 (10% wastage)
  const tileArea = Math.ceil(totalFloorArea * 1.10);

  return {
    cement,
    sand: parseFloat(sand.toFixed(2)),
    tileArea,
    flooringType: inputs.flooringType,
    volume: parseFloat(beddingWetVolume.toFixed(2)),
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

  const totalMaterialCost = Object.values(materialCosts).reduce((a, b) => a + b, 0);

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
  document.getElementById("totalArea").textContent = formatNumber(areas.totalBuiltUpArea, 2);
  document.getElementById("totalCost").textContent = formatCurrency(costs.total);
  document.getElementById("costPerSqm").textContent = formatCurrency(costs.total / areas.totalBuiltUpArea);

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
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
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