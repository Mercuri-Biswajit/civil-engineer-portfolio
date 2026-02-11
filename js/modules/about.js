// ===========================
// ABOUT MODULE
// Orchestrates all About-page
// animations and interactive effects.
// Heavy lifting delegated to utils/animations.js.
// ===========================

import { renderEducation } from "./education.js";
import { renderSkills } from "./skills.js";
import {
  initAOS,
  refreshAOS,
  initHeroBackground,
  addEducationAnimations,
  addContactLinkEffects,
  initScrollAnimations,
  initHeaderParallax,
  initSmoothAnchors,
  initResizeHandler,
  initReducedMotion,
  initSkillCardAnimations,
} from "../utils/animations.js";


/**
 * Render skills on the About page using the same data and rendering logic
 * as the homepage, but targeting a different container.
 */
function renderSkillsForAbout() {
  // Import the skills data
  import("../data/skills.js").then((module) => {
    const { skills } = module;
    const grid = document.getElementById("aboutSkillsGrid");
    
    if (!grid) return;

    // Use the same HTML structure as the homepage
    grid.innerHTML = skills
      .map(
        ({ icon, name, description }) => `
        <div class="skill-card">
            <div class="skill-icon">${icon}</div>
            <h3 class="skill-name">${name}</h3>
            <p class="skill-description">${description}</p>
        </div>`,
      )
      .join("");

    // Apply animations
    setTimeout(() => {
      initSkillCardAnimations(grid);
      refreshAOS();
    }, 100);
  });
}

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

  // Render skills (same data as homepage)
  renderSkillsForAbout();

  // Render education then add animations to the new items
  renderEducation();
  setTimeout(() => {
    addEducationAnimations();
    refreshAOS();
  }, 150);

  addContactLinkEffects();

  console.log(
    "%c✨ About Page Ready",
    "color: #1E293B; font-size: 13px; font-weight: bold;",
  );
}

