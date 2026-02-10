// PROJECTS DATA
const projects = [
  {
    id: 1,
    category: "RESIDENTIAL",
    title: "G-Floor Residential Layout",
    description:
      "Architectural and structural layout planning for a G-floor residential unit measuring approximately 41 ft × 28 ft. The plan includes two bedrooms, a combined living and dining area, and an integrated staircase block for future vertical expansion. The design follows an RCC framed structure with clearly defined room zoning, efficient circulation, and adequate natural light and ventilation.",
    tags: [
      "Residential Planning",
      "G-Floor Design",
      "RCC Structure",
      "Staircase Block",
      "Compact Housing",
    ],
    image: "../assets/images/projects/G-Floor_Model_28_x_41__foot.png",
  },
  {
    id: 2,
    category: "COMMERCIAL",
    title: "Warehouse cum Residential Building (G+1)",
    description:
      "Planning and structural layout design for a G+1 mixed-use building measuring approximately 57 ft × 47 ft. The ground floor is designed as a large open-span warehouse with an RCC framed structure and integrated staircase block, allowing efficient storage and movement. The first floor accommodates a complete residential unit comprising multiple bedrooms, living and dining areas, kitchen, bathrooms, and verandas. The design ensures functional separation between commercial and residential use while maintaining structural continuity and future adaptability.",
    tags: [
      "Mixed-Use Building",
      "Warehouse Design",
      "G+1 Residential",
      "RCC Frame Structure",
      "Open Span Planning",
    ],
    image:
      "../assets/images/projects/Warehouse_cum_Residential_(G+1)_57_x_47_foot.png",
  },
  {
    id: 3,
    category: "COMMERCIAL",
    title: "Warehouse cum Residential Building",
    description:
      "Structural and space planning for a mixed-use building measuring approximately 46 ft × 30 ft, combining a large open-span warehouse area on the lower level with a dedicated residential access core. The layout includes an RCC framed structure with optimized column placement, a staircase block for vertical circulation, and clear segregation between storage and residential functions to ensure safety, usability, and future adaptability.",
    tags: [
      "Mixed-Use Building",
      "Warehouse Design",
      "Residential Structure",
      "RCC Frame",
      "Staircase Block",
    ],
    image:
      "../assets/images/projects/Warehouse_cum_Residential_46_x_30_foot.png",
  },
  {
    id: 4,
    category: "RESIDENTIAL",
    title: "Ground Floor Residential Layout",
    description:
      "Architectural and structural layout planning for a ground floor residential unit measuring approximately 28 ft × 41 ft. The plan comprises three bedrooms, a central living and dining area, and an integrated staircase block for vertical circulation. Designed with an RCC framed structure, the layout ensures efficient room zoning, smooth internal movement, and adequate natural light and ventilation through well-placed openings.",
    tags: [
      "Residential Planning",
      "Ground Floor Design",
      "RCC Frame Structure",
      "Staircase Block",
      "Compact Housing",
    ],
    image: "../assets/images/projects/Ground_Floor_28_x_41_foot.png",
  },
];

// ===========================
// RENDER FUNCTIONS
// ===========================

// Render Projects Gallery (Homepage - First 3)
function renderProjectsPreview() {
  const projectsPreview = document.getElementById("projectsPreview");
  if (!projectsPreview) return;

  const topProjects = projects.slice(0, 4);
  projectsPreview.innerHTML = topProjects
    .map(
      (project) => `
        <div class="project-card" data-project-id="${project.id}">
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
        </div>
    `,
    )
    .join("");

  // Add click event listeners
  attachProjectClickHandlers();
}

// Render All Projects Gallery (Projects Page)
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <div class="project-card" data-category="${project.category}" data-project-id="${project.id}">
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
        </div>
    `,
    )
    .join("");

  // Add click event listeners
  attachProjectClickHandlers();
}

// ===========================
// MODAL FUNCTIONALITY
// ===========================

// Create Modal Element
function createProjectModal() {
  // Check if modal already exists
  if (document.getElementById("projectModal")) return;

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
        </div>
    `;

  document.body.appendChild(modal);

  // Close modal on click outside or close button
  modal.addEventListener("click", (e) => {
    if (
      e.target === modal ||
      e.target.classList.contains("project-modal-close")
    ) {
      closeProjectModal();
    }
  });

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
    }
  });
}

// Open Project Modal
function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("projectModal");
  if (!modal) {
    createProjectModal();
  }

  const modalElement = document.getElementById("projectModal");

  // Populate modal content
  modalElement.querySelector(".project-modal-image").src = project.image;
  modalElement.querySelector(".project-modal-image").alt = project.title;
  modalElement.querySelector(".project-modal-category").textContent =
    project.category;
  modalElement.querySelector(".project-modal-title").textContent =
    project.title;
  modalElement.querySelector(".project-modal-description").textContent =
    project.description;

  // Populate tags
  const tagsContainer = modalElement.querySelector(".project-modal-tags");
  tagsContainer.innerHTML = project.tags
    .map((tag) => `<span class="project-modal-tag">${tag}</span>`)
    .join("");

  // Show modal
  modalElement.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close Project Modal
function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Attach Click Handlers to Project Cards
function attachProjectClickHandlers() {
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = parseInt(card.getAttribute("data-project-id"));
      openProjectModal(projectId);
    });
  });
}

// ===========================
// FILTER FUNCTIONALITY
// ===========================

// Filter Projects
function setupProjectFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (filterButtons.length === 0) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter projects with animation
      projectCards.forEach((card, index) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          setTimeout(() => {
            card.classList.remove("hidden");
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";

            setTimeout(() => {
              card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, 50);
          }, index * 50);
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}

// ===========================
// INITIALIZATION
// ===========================

// Initialize projects when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Render projects
  renderProjectsPreview();
  renderProjects();

  // Create modal
  createProjectModal();

  // Setup filters
  setupProjectFilter();

  // Set up scroll animations for project cards
  setTimeout(() => {
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";

      setTimeout(() => {
        card.style.transition =
          "opacity 0.6s ease-out, transform 0.6s ease-out";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 100);
    });
  }, 100);
});

// ===========================
// EXPORT FOR MODULE USAGE
// ===========================

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    projects,
    renderProjects,
    renderProjectsPreview,
    setupProjectFilter,
    openProjectModal,
    closeProjectModal,
  };
}
