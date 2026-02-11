// ===========================
// SKILLS MODULE
// Renders skills grid on the home page.
// Data lives in data/models.js.
// ===========================

import { skills } from "../data/skills.js";
import { byId } from "../utils/dom.js";

/**
 * Render all skill cards into #skillsGrid.
 */
export function renderSkills() {
  const grid = byId("skillsGrid");
  if (!grid) return;

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
}
