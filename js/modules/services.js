// ===========================
// SERVICES MODULE
// Renders service plan cards on the home page.
// Data lives in data/models.js.
// ===========================

import { services } from "../data/services.js";
import { byId } from "../utils/dom.js";

/**
 * Render all service cards into #servicesGrid.
 */
export function renderServices() {
  const grid = byId("servicesGrid");
  if (!grid) return;

  grid.innerHTML = services
    .map(
      ({ name, price, description, features, icon, popular }) => `
        <div class="services-card ${popular ? "popular" : ""}">
            ${popular ? '<div class="services-badge">RECOMMENDED</div>' : ""}
            <div class="services-icon">${icon}</div>
            <h3 class="services-name">${name}</h3>
            <div class="services-price">${price}</div>
            <p class="services-description">${description}</p>
            <ul class="services-features">
                ${features.map((f) => `<li>${f}</li>`).join("")}
            </ul>
        </div>`,
    )
    .join("");
}
