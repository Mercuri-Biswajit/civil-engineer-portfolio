// ===========================
// EDUCATION MODULE
// Renders the education timeline on the About page.
// Data lives in data/models.js.
// ===========================

import { education } from "../data/education.js";
import { byId } from "../utils/dom.js";

/**
 * Render all education items into #educationTimeline.
 */
export function renderEducation() {
  const timeline = byId("educationTimeline");
  if (!timeline) return;

  timeline.innerHTML = education
    .map(
      ({ year, degree, school }) => `
        <div class="education-item">
            <div class="education-icon">🎓</div>
            <div>
                <div class="education-year">${year}</div>
                <h4 class="education-degree">${degree}</h4>
                <p class="education-school">${school}</p>
            </div>
        </div>`,
    )
    .join("");
}
