// ===========================
// PROJECTS MODULE
// Gallery render, modal, filter.
// Data lives in data/models.js.
// ===========================

import { projects } from "../data/models.js";
import { byId, qs, qsa } from "../utils/dom.js";

// ===========================
// RENDER — HOME PREVIEW (4 cards)
// ===========================

export function renderProjectsPreview() {
  const container = byId("projectsPreview");
  if (!container) return;

  container.innerHTML = projects
    .slice(0, 4)
    .map((p) => _cardHTML(p))
    .join("");

  _attachCardHandlers(container);
}

// ===========================
// RENDER — FULL GALLERY
// ===========================

export function renderProjects() {
  const grid = byId("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projects.map((p) => _cardHTML(p, true)).join("");

  _attachCardHandlers(grid);
}

// ===========================
// MODAL
// ===========================

export function createProjectModal() {
  if (byId("projectModal")) return;

  const modal = document.createElement("div");
  modal.id = "projectModal";
  modal.className = "project-modal";
  modal.innerHTML = `
        <div class="project-modal-content">
            <button class="project-modal-close" aria-label="Close modal">&times;</button>
            <img src="" alt="" class="project-modal-image">
            <div class="project-modal-body">
                <div class="project-modal-header">
                    <div class="project-modal-category"></div>
                    <h2 class="project-modal-title"></h2>
                </div>
                <p class="project-modal-description"></p>
                <div class="project-modal-tags"></div>
            </div>
        </div>`;
  document.body.appendChild(modal);

  modal.addEventListener("click", (e) => {
    if (
      e.target === modal ||
      e.target.classList.contains("project-modal-close")
    ) {
      closeProjectModal();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });
}

export function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  if (!byId("projectModal")) createProjectModal();
  const modal = byId("projectModal");

  modal.querySelector(".project-modal-image").src = project.image;
  modal.querySelector(".project-modal-image").alt = project.title;
  modal.querySelector(".project-modal-category").textContent = project.category;
  modal.querySelector(".project-modal-title").textContent = project.title;
  modal.querySelector(".project-modal-description").textContent =
    project.description;
  modal.querySelector(".project-modal-tags").innerHTML = project.tags
    .map((t) => `<span class="project-modal-tag">${t}</span>`)
    .join("");

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

export function closeProjectModal() {
  const modal = byId("projectModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ===========================
// FILTER
// ===========================

export function setupProjectFilter() {
  const filterBtns = qsa(".filter-btn");
  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      qsa(".project-card").forEach((card, i) => {
        const match =
          filter === "all" || card.getAttribute("data-category") === filter;
        if (match) {
          setTimeout(() => {
            card.classList.remove("hidden");
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";
            setTimeout(() => {
              card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, 50);
          }, i * 50);
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}

// ===========================
// PRIVATE HELPERS
// ===========================

function _cardHTML(project, withCategory = false) {
  return `
        <div class="project-card"
             data-project-id="${project.id}"
             ${withCategory ? `data-category="${project.category}"` : ""}>
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-image-real">
                <div class="project-image-overlay">
                    <div class="project-gallery-info">
                        <div class="project-category">${project.category}</div>
                        <h3 class="project-title">${project.title}</h3>
                    </div>
                </div>
            </div>
            <div class="project-view-hint">Click to view details</div>
        </div>`;
}

function _attachCardHandlers(ctx) {
  qsa(".project-card", ctx).forEach((card) => {
    card.addEventListener("click", () => {
      openProjectModal(parseInt(card.getAttribute("data-project-id"), 10));
    });
  });
}
