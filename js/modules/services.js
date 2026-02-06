// ===========================
// SERVICES DATA
// ===========================
// Add or edit service plans here. Each plan needs: name, price, description, features array, icon, and popular flag

const services = [
    {
        name: 'Architectural Plan',
        price: 'Custom Quote',
        description: 'Complete architectural design and planning services',
        features: [
            'Site analysis and planning',
            'Floor plans and elevations',
            'Interior space planning',
            'Up to 3 design revisions',
            'CAD drawings delivery'
        ],
        icon: '📐',
        popular: false
    },
    {
        name: 'Structural Plan',
        price: 'Custom Quote',
        description: 'Comprehensive structural engineering and design',
        features: [
            'Structural analysis',
            'Foundation design',
            'Load calculations',
            'Reinforcement detailing',
            'Up to 3 design revisions',
        ],
        icon: '🏗️',
        popular: false
    },
    {
        name: 'Cost Estimate',
        price: 'Custom Quote',
        description: 'Detailed project cost estimation and BOQ',
        features: [
            'Material quantity takeoff',
            'Bill of Quantities (BOQ)',
            'Cost breakdown analysis',
            'Up to 3 revisions',
            'Market rate comparison'
        ],
        icon: '💰',
        popular: false
    },
];

// ===========================
// RENDER FUNCTION
// ===========================

// Render Services (Home Page)
function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;
    
    servicesGrid.innerHTML = services.map(service => `
        <div class="services-card ${service.popular ? 'popular' : ''}">
            ${service.popular ? '<div class="services-badge">RECOMMENDED</div>' : ''}
            <div class="services-icon">${service.icon}</div>
            <h3 class="services-name">${service.name}</h3>
            <div class="services-price">${service.price}</div>
            <p class="services-description">${service.description}</p>
            <ul class="services-features">
                ${service.features.map(feature => `<li> ${feature}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// ===========================
// INITIALIZATION
// ===========================

// Initialize services when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    
    // Set up scroll animations for service cards
    setTimeout(() => {
        const serviceCards = document.querySelectorAll('.services-card');
        serviceCards.forEach(card => {
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
    module.exports = { services, renderServices };
}