// ===========================
// SKILLS DATA
// ===========================
// Add or edit skills here. Each skill needs: icon (emoji), name, and description

const skills = [
    {
        icon: '📐',
        name: 'AutoCAD 2D',
        description: 'Proficient in AutoCAD, Revit, and Building Information Modeling for precise technical drawings'
    },
    {
        icon: '🏗️',
        name: 'Structural Design',
        description: 'Expert in designing safe and efficient structural systems for buildings and infrastructure'
    },
    {
        icon: '🔬',
        name: 'Materials Analysis',
        description: 'Deep understanding of construction materials, their properties, and optimal applications'
    },
    {
        icon: '⚙️',
        name: 'Cost Estimation',
        description: 'Accurate budget planning and material quantity surveying for projects'
    },
    {
        icon: '🌱',
        name: 'Sustainable Design',
        description: 'Committed to eco-friendly practices and LEED certification standards'
    },
];

// ===========================
// RENDER FUNCTION
// ===========================

// Render Skills (Home Page)
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = skills.map(skill => `
        <div class="skill-card">
            <div class="skill-icon">${skill.icon}</div>
            <h3 class="skill-name">${skill.name}</h3>
            <p class="skill-description">${skill.description}</p>
        </div>
    `).join('');
}

// ===========================
// INITIALIZATION
// ===========================

// Initialize skills when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    
    // Set up scroll animations for skill cards
    setTimeout(() => {
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach(card => {
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
    module.exports = { skills, renderSkills };
}