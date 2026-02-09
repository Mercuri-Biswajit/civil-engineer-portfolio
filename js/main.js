// ===========================
// MAIN.JS - ENTRY POINT
// ===========================
// This file is the main entry point and imports all other modules
// Only main.js needs to be linked in HTML files

// ===========================
// IMPORT ALL MODULES
// ===========================
// Note: In a production environment, you'd use ES6 modules or a bundler
// For now, we're using script tags in order, but this documents the structure

// Core modules loaded via script tags in this order:
// 1. links.js - Social links configuration
// 2. skills.js - Skills data and rendering
// 3. projects.js - Projects data and rendering
// 4. education.js - Education data and rendering
// 5. services.js - Services data and rendering
// 6. page-animations.js - Animation utilities
// 7. main.js - This file (initialization)

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
        document.body.classList.toggle('nav-open');
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('nav-open');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    });
}

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
    }
});

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
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===========================
// INITIALIZE ALL MODULES
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🚀 Portfolio Website Initialized', 'color: #003366; font-size: 16px; font-weight: bold;');
    

    // Log loaded modules
    const modules = [];
    if (typeof renderSkills === 'function') modules.push('Skills');
    if (typeof renderProjects === 'function') modules.push('Projects');
    if (typeof renderEducation === 'function') modules.push('Education');
    if (typeof renderServices === 'function') modules.push('Services');

    if (modules.length > 0) {
        console.log(`%c✓ Modules loaded: ${modules.join(', ')}`, 'color: #10B981; font-size: 12px;');
    }

    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            delay: 50
        });
        console.log('%c✓ AOS animations initialized', 'color: #10B981; font-size: 12px;');
    }

    console.log('%c✨ All systems ready!', 'color: #003366; font-size: 14px; font-weight: bold;');
});

// ===========================
// ACCESSIBILITY
// ===========================

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    }
});

// Focus trap for mobile menu when open
if (navMenu) {
    navMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && navMenu.classList.contains('active')) {
            const focusableElements = navMenu.querySelectorAll('a, button');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
}

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================

// Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
        // Scroll-dependent code here
    });
}, { passive: true });

// ===========================
// ERROR HANDLING
// ===========================

// Global error handler
window.addEventListener('error', (e) => {
    console.error('Error caught:', e.error);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// ===========================
// EXPORT FOR TESTING
// ===========================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        observer,
        observerOptions
    };
}