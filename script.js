// ===========================
// DATA ARRAYS - EDIT THESE TO UPDATE YOUR PORTFOLIO
// ===========================

// SKILLS DATA
const skills = [
    {
        icon: '🏗️',
        name: 'Structural Design',
        description: 'Expert in designing safe and efficient structural systems for buildings and infrastructure'
    },
    {
        icon: '📐',
        name: 'AutoCAD 2D',
        description: 'Proficient in AutoCAD, Revit, and Building Information Modeling for precise technical drawings'
    },
    {
        icon: '🔬',
        name: 'Materials Analysis',
        description: 'Deep understanding of construction materials, their properties, and optimal applications'
    },
    {
        icon: '🌱',
        name: 'Sustainable Design',
        description: 'Committed to eco-friendly practices and LEED certification standards'
    },
    {
        icon: '🌱',
        name: 'BOQ',
        description: 'Detailed BOQ with BBS'
    },
];

// PROJECTS DATA
const projects = [
    {
        category: 'RESIDENTIAL',
        title: 'Green Valley Housing Complex',
        description: 'Designed foundation and structural systems for a 200-unit sustainable housing development with rainwater harvesting and energy-efficient features.',
        tags: ['Sustainable', 'Multi-Unit', 'Foundation Design'],
        image: './images/G-Floor_Model_28_x_41__foot.png'
    },
    {
        category: 'COMMERCIAL',
        title: 'Tech Campus Development',
        description: 'Structural engineering for a modern 15-story office complex with open floor plans, seismic considerations, and smart building integration.',
        tags: ['High-Rise', 'Seismic Design', 'Smart Building'],
        image: './images/G-Floor_Model_28_x_41__foot.png'
    },
];

// EDUCATION DATA
const education = [
    {
        year: '2016 - 2020',
        degree: 'B. Tech in Civil Engineering',
        school: 'Surendra Institute of Engineering and Management'
    },
    {
        year: '2022',
        degree: 'Professional AutoCAD',
        school: 'Udemy'
    },
    {
        year: '2025',
        degree: 'Vastu Sastra',
        school: 'PTS CAD'
    }
];

// BLOG POSTS DATA
const blogPosts = [
    {
        date: 'Jan 15, 2026',
        category: 'SUSTAINABILITY',
        title: 'The Future of Green Infrastructure',
        excerpt: 'Exploring innovative sustainable practices in modern civil engineering and their impact on urban development...',
        icon: '🌿'
    },
    {
        date: 'Jan 10, 2026',
        category: 'TECHNOLOGY',
        title: 'BIM Revolution in Construction',
        excerpt: 'How Building Information Modeling is transforming the way we design, build, and maintain infrastructure projects...',
        icon: '🏗️'
    },
    {
        date: 'Jan 5, 2026',
        category: 'ANALYSIS',
        title: 'Seismic Design Considerations',
        excerpt: 'Essential guidelines for earthquake-resistant structures in high-risk zones and latest code updates...',
        icon: '📊'
    },
    {
        date: 'Dec 28, 2025',
        category: 'MATERIALS',
        title: 'Advanced Concrete Technologies',
        excerpt: 'Latest developments in self-healing concrete, ultra-high performance concrete, and sustainable alternatives...',
        icon: '🧱'
    },
    {
        date: 'Dec 20, 2025',
        category: 'INNOVATION',
        title: '3D Printing in Construction',
        excerpt: 'Exploring how additive manufacturing is revolutionizing the construction industry with faster build times...',
        icon: '🖨️'
    },
    {
        date: 'Dec 15, 2025',
        category: 'SUSTAINABILITY',
        title: 'Carbon Neutral Buildings',
        excerpt: 'Strategies and technologies for achieving net-zero carbon emissions in modern building design...',
        icon: '♻️'
    }
];

// PRICING DATA
const pricing = [
    {
        name: 'Architectural Plan',
        price: 'Custom Quote',
        description: 'Complete architectural design and planning services',
        features: [
            'Site analysis and planning',
            'Floor plans and elevations',
            '3D visualization',
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
// RENDER FUNCTIONS
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

// Render Education (About Page)
function renderEducation() {
    const educationTimeline = document.getElementById('educationTimeline');
    if (!educationTimeline) return;
    
    educationTimeline.innerHTML = education.map(edu => `
        <div class="education-item">
            <div class="education-year">${edu.year}</div>
            <h4 class="education-degree">${edu.degree}</h4>
            <p class="education-school">${edu.school}</p>
        </div>
    `).join('');
}

// Render Blog Posts (Blog Page)
function renderBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;
    
    blogGrid.innerHTML = blogPosts.map(post => `
        <div class="blog-card" data-category="${post.category}">
            <div class="blog-image">${post.icon}</div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-date">${post.date}</span>
                    <span>•</span>
                    <span class="blog-category">${post.category}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#" class="blog-read-more">READ MORE →</a>
            </div>
        </div>
    `).join('');
}

// Render Blog Preview (Home Page - First 3)
function renderBlogPreview() {
    const blogPreview = document.getElementById('blogPreview');
    if (!blogPreview) return;
    
    const topPosts = blogPosts.slice(0, 3);
    blogPreview.innerHTML = topPosts.map(post => `
        <div class="blog-card">
            <div class="blog-image">${post.icon}</div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-date">${post.date}</span>
                    <span>•</span>
                    <span class="blog-category">${post.category}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="blog.html" class="blog-read-more">READ MORE →</a>
            </div>
        </div>
    `).join('');
}

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

// Filter Blog Posts
function setupBlogFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    
    if (filterButtons.length === 0 || blogCards.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter blog posts
            blogCards.forEach(card => {
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
// NAVIGATION & INTERACTIONS
// ===========================

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
    }
});

// Newsletter Form Handler
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with ${email}! (This is a demo - connect to your email service)`);
        e.target.reset();
    });
}

// ===========================
// SCROLL ANIMATIONS
// ===========================

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Render content based on current page
    renderSkills();
    renderProjectsPreview();
    renderProjects();
    renderEducation();
    renderBlogPosts();
    renderBlogPreview();
    renderPricing();
    
    // Setup filters
    setupProjectFilter();
    setupBlogFilter();
    
    // Set up scroll animations for cards
    setTimeout(() => {
        const cards = document.querySelectorAll('.skill-card, .project-card, .blog-card, .stat-card, .pricing-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(card);
        });
    }, 100);
});
