// ===========================
// CALCULATOR — CORE LOGIC
// Pure calculation functions.
// Zero DOM access — easy to unit-test.
// ===========================

import {
  MATERIAL_CONSTANTS,
  DEFAULT_MATERIAL_RATES,
  FINISHING_RATES,
  SLAB_CONSTANTS,
  CONVERSIONS,
} from "../../config/constants.js";
import { safeFloat } from "../../utils/helpers.js";

// ===========================
// BUILDING ESTIMATE
// ===========================

/**
 * Calculate a full building cost estimate.
 *
 * @param {Object} params
 * @param {number} params.area             Built-up area in sq.ft
 * @param {number} params.rate             Rate per sq.ft in ₹
 * @param {boolean} params.laborAuto       Use percentage for labor?
 * @param {number} params.laborPercent     Labor % of material cost (when auto)
 * @param {number} params.laborManual      Manual labor amount in ₹ (when !auto)
 * @param {string} params.finishingQuality 'basic' | 'standard' | 'premium'
 * @param {number} params.contingency      Contingency % of subtotal
 * @param {Object} params.materialRates    { cement, steel, sand, aggregate }
 *
 * @returns {{
 *   totalCost: number,
 *   materialCost: number,
 *   laborCost: number,
 *   finishingCost: number,
 *   contingencyCost: number,
 *   materials: { cement: number, steel: number, sand: number, aggregate: number }
 * }}
 */
export function calcBuilding({
  area,
  rate,
  laborAuto,
  laborPercent,
  laborManual,
  finishingQuality,
  contingency,
  materialRates = {},
}) {
  // Merge user rates with defaults
  const rates = {
    cement: safeFloat(materialRates.cement, DEFAULT_MATERIAL_RATES.cement),
    steel: safeFloat(materialRates.steel, DEFAULT_MATERIAL_RATES.steel),
    sand: safeFloat(materialRates.sand, DEFAULT_MATERIAL_RATES.sand),
    aggregate: safeFloat(
      materialRates.aggregate,
      DEFAULT_MATERIAL_RATES.aggregate,
    ),
  };

  // Material quantities
  const materials = {
    cement: area * MATERIAL_CONSTANTS.cement,
    steel: area * MATERIAL_CONSTANTS.steel,
    sand: area * MATERIAL_CONSTANTS.sand,
    aggregate: area * MATERIAL_CONSTANTS.aggregate,
  };

  // Material cost
  const materialCost =
    materials.cement * rates.cement +
    materials.steel * rates.steel +
    materials.sand * rates.sand +
    materials.aggregate * rates.aggregate;

  // Labor cost
  const laborCost = laborAuto
    ? materialCost * (safeFloat(laborPercent, 40) / 100)
    : safeFloat(laborManual, 0);

  // Finishing cost
  const finishingRate =
    FINISHING_RATES[finishingQuality] ?? FINISHING_RATES.standard;
  const finishingCost = area * finishingRate;

  // Subtotal & contingency
  const subtotal = materialCost + laborCost + finishingCost;
  const contingencyCost = subtotal * (safeFloat(contingency, 7) / 100);
  const totalCost = subtotal + contingencyCost;

  return {
    totalCost,
    materialCost,
    laborCost,
    finishingCost,
    contingencyCost,
    materials,
  };
}

// ===========================
// RCC SLAB ESTIMATE
// ===========================

/**
 * Calculate materials required for an RCC slab (M20 grade).
 *
 * @param {number} slabArea       Slab area in sq.ft
 * @param {number} slabThickness  Slab thickness in ft
 *
 * @returns {{
 *   concreteVolume: number,  m³
 *   cementRequired: number,  bags
 *   steelRequired:  number,  kg
 * }}
 */
export function calcSlab(slabArea, slabThickness) {
  const areaSqM = slabArea * CONVERSIONS.sqftToSqm;
  const thicknessM = slabThickness * CONVERSIONS.ftToM;
  const concreteVolume = areaSqM * thicknessM;
  const cementRequired = concreteVolume * SLAB_CONSTANTS.cementPerCubicMeter;
  const steelRequired =
    concreteVolume * SLAB_CONSTANTS.steelDensity * SLAB_CONSTANTS.steelPercent;

  return { concreteVolume, cementRequired, steelRequired };
}
