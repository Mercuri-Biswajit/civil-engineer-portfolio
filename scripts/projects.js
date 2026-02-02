// PROJECTS DATA
const projects = [
    {
        category: 'RESIDENTIAL',
        title: 'Green Valley Housing Complex',
        description: 'Designed foundation and structural systems for a 200-unit sustainable housing development with rainwater harvesting and energy-efficient features.',
        tags: ['Sustainable', 'Multi-Unit', 'Foundation Design'],
        image: '../images/G-Floor_Model_28_x_41__foot.png'
    },
    {
        category: 'COMMERCIAL',
        title: 'Tech Campus Development',
        description: 'Structural engineering for a modern 15-story office complex with open floor plans, seismic considerations, and smart building integration.',
        tags: ['High-Rise', 'Seismic Design', 'Smart Building'],
        image: '../images/G-Floor_Model_28_x_41__foot.png'
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