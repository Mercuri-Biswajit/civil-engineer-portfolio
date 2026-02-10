// ===========================
// ABOUT MODULE
// Orchestrates all About-page
// animations and interactive effects.
// Heavy lifting delegated to utils/animations.js.
// ===========================

import { renderEducation } from "./education.js";
import {
  initAOS,
  refreshAOS,
  initHeroBackground,
  addEducationAnimations,
  addCompetencyEffects,
  addContactLinkEffects,
  initScrollAnimations,
  initHeaderParallax,
  initSmoothAnchors,
  initResizeHandler,
  initReducedMotion,
} from "../utils/animations.js";

/**
 * Entry point — call once when the About page DOM is ready.
 */
export function initAboutPage() {
  initAOS();
  initHeroBackground();
  initHeaderParallax();
  initScrollAnimations();
  initSmoothAnchors();
  initResizeHandler();
  initReducedMotion();

  // Render education then add animations to the new items
  renderEducation();
  setTimeout(() => {
    addEducationAnimations();
    refreshAOS();
  }, 150);

  addCompetencyEffects();
  addContactLinkEffects();

  console.log(
    "%c✨ About Page Ready",
    "color: #1E293B; font-size: 13px; font-weight: bold;",
  );
}
