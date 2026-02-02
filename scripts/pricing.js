// ===========================
// PRICING DATA
// ===========================
// Add or edit pricing plans here. Each plan needs: name, price, description, features array, icon, and popular flag

const pricing = [
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
            'Engineer stamped drawings'
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
            'Labor cost estimation',
            'Bill of Quantities (BOQ)',
            'Cost breakdown analysis',
            'Up to 3 revisions',
            'Market rate comparison'
        ],
        icon: '💰',
        popular: false
    },
    {
        name: 'Complete Package',
        price: 'Best Value',
        description: 'All-inclusive design and estimation services',
        features: [
            'Architectural planning',
            'Structural design',
            'Complete cost estimate',
            'Project timeline',
            'Up to 3 design revisions',
            'All documentation',
            'Priority support'
        ],
        icon: '⭐',
        popular: true
    }
];

// ===========================
// RENDER FUNCTION
// ===========================

// Render Pricing (Home Page)
function renderPricing() {
    const pricingGrid = document.getElementById('pricingGrid');
    if (!pricingGrid) return;
    
    pricingGrid.innerHTML = pricing.map(plan => `
        <div class="pricing-card ${plan.popular ? 'popular' : ''}">
            ${plan.popular ? '<div class="pricing-badge">RECOMMENDED</div>' : ''}
            <div class="pricing-icon">${plan.icon}</div>
            <h3 class="pricing-name">${plan.name}</h3>
            <div class="pricing-price">${plan.price}</div>
            <p class="pricing-description">${plan.description}</p>
            <ul class="pricing-features">
                ${plan.features.map(feature => `<li>✓ ${feature}</li>`).join('')}
            </ul>
            <a href="#" class="btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-block">GET QUOTE</a>
        </div>
    `).join('');
}

// ===========================
// INITIALIZATION
// ===========================

// Initialize pricing when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderPricing();
    
    // Set up scroll animations for pricing cards
    setTimeout(() => {
        const pricingCards = document.querySelectorAll('.pricing-card');
        pricingCards.forEach(card => {
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
    module.exports = { pricing, renderPricing };
}