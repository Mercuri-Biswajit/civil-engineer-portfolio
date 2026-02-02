// ===========================
// BLOG POSTS DATA
// ===========================
// Add or edit blog posts here. Each post needs: date, category, title, excerpt, and icon

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
    },
    {
        date: 'Dec 10, 2025',
        category: 'TECHNOLOGY',
        title: 'AI in Structural Analysis',
        excerpt: 'How artificial intelligence and machine learning are enhancing structural design optimization and safety...',
        icon: '🤖'
    },
    {
        date: 'Dec 5, 2025',
        category: 'INNOVATION',
        title: 'Smart Cities Infrastructure',
        excerpt: 'The role of IoT and smart sensors in creating intelligent, responsive urban infrastructure systems...',
        icon: '🏙️'
    }
];

// ===========================
// RENDER FUNCTIONS
// ===========================

// Render All Blog Posts (Blog Page)
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

// ===========================
// FILTER FUNCTIONALITY
// ===========================

// Filter Blog Posts by Category
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
// NEWSLETTER FORM
// ===========================

// Newsletter Form Handler
function setupNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        // INSTRUCTIONS: Replace this alert with your actual email service integration
        // Popular options: Mailchimp, ConvertKit, EmailJS, or custom backend
        alert(`Thank you for subscribing with ${email}! (This is a demo - connect to your email service)`);
        
        e.target.reset();
    });
}

// ===========================
// INITIALIZATION
// ===========================

// Initialize blog functionality when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();
    renderBlogPreview();
    setupBlogFilter();
    setupNewsletterForm();
    
    // Set up scroll animations for blog cards
    setTimeout(() => {
        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            
            // Use intersection observer if available on main script
            if (typeof observer !== 'undefined') {
                observer.observe(card);
            }
        });
    }, 100);
});

// Export functions for use in other scripts (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        blogPosts,
        renderBlogPosts,
        renderBlogPreview,
        setupBlogFilter
    };
}