// PROJECTS DATA
const projects = [
    {
        category: 'RESIDENTIAL',
        title: 'G-Floor Residential Layout',
        description: 'Architectural and structural layout planning for a G-floor residential unit measuring approximately 41 ft × 28 ft. The plan includes two bedrooms, a combined living and dining area, and an integrated staircase block for future vertical expansion. The design follows an RCC framed structure with clearly defined room zoning, efficient circulation, and adequate natural light and ventilation.',
        tags: ['Residential Planning', 'G-Floor Design', 'RCC Structure', 'Staircase Block', 'Compact Housing'],
        image: '../../assets/images/projects/G-Floor_Model_28_x_41__foot.png'
    },
    {
        category: 'COMMERCIAL',
        title: 'Warehouse cum Residential Building (G+1)',
        description: 'Planning and structural layout design for a G+1 mixed-use building measuring approximately 57 ft × 47 ft. The ground floor is designed as a large open-span warehouse with an RCC framed structure and integrated staircase block, allowing efficient storage and movement. The first floor accommodates a complete residential unit comprising multiple bedrooms, living and dining areas, kitchen, bathrooms, and verandas. The design ensures functional separation between commercial and residential use while maintaining structural continuity and future adaptability.',
        tags: ['Mixed-Use Building', 'Warehouse Design', 'G+1 Residential', 'RCC Frame Structure', 'Open Span Planning'],
        image: '../../assets/images/projects/Warehouse_cum_Residential_(G+1)_57_x_47_foot.png'
    },
    {
        category: 'COMMERCIAL',
        title: 'Warehouse cum Residential Building',
        description: 'Structural and space planning for a mixed-use building measuring approximately 46 ft × 30 ft, combining a large open-span warehouse area on the lower level with a dedicated residential access core. The layout includes an RCC framed structure with optimized column placement, a staircase block for vertical circulation, and clear segregation between storage and residential functions to ensure safety, usability, and future adaptability.',
        tags: ['Mixed-Use Building', 'Warehouse Design', 'Residential Structure', 'RCC Frame', 'Staircase Block'],
        image: '../../assets/images/projects/Warehouse_cum_Residential_46_x_30_foot.png'
    },
    {
        category: 'RESIDENTIAL',
        title: 'Ground Floor Residential Layout',
        description: 'Architectural and structural layout planning for a ground floor residential unit measuring approximately 28 ft × 41 ft. The plan comprises three bedrooms, a central living and dining area, and an integrated staircase block for vertical circulation. Designed with an RCC framed structure, the layout ensures efficient room zoning, smooth internal movement, and adequate natural light and ventilation through well-placed openings.',
        tags: ['Residential Planning', 'Ground Floor Design', 'RCC Frame Structure', 'Staircase Block', 'Compact Housing'],
        image: '../../assets/images/projects/Ground_Floor_28_x_41_foot.png'
    },
];


// Render Projects Preview (Home Page - First 3)
function renderProjectsPreview() {
    const projectsPreview = document.getElementById('projectsPreview');
    if (!projectsPreview) return;

    const topProjects = projects.slice(0, 3);
    projectsPreview.innerHTML = topProjects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image-real">
            <div class="project-content">
                <div class="project-category">${project.category}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Render All Projects (Projects Page)
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" data-category="${project.category}">
            <img src="${project.image}" alt="${project.title}" class="project-image-real">
            <div class="project-content">
                <div class="project-category">${project.category}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}


// ===========================
// FILTER FUNCTIONALITY
// ===========================

// Filter Projects
function setupProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ===========================
// INITIALIZATION
// ===========================

// Initialize projects when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderProjectsPreview();
    renderProjects();
    setupProjectFilter();

    // Set up scroll animations for project cards
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

            // Use intersection observer if available from main script
            if (typeof observer !== 'undefined') {
                observer.observe(card);
            }
        });
    }, 100);
});

// Export for use in other scripts (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        projects,
        renderProjects,
        renderProjectsPreview,
        setupProjectFilter
    };
}