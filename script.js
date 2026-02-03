// ===========================
// MAIN NAVIGATION & COMMON FUNCTIONS
// ===========================
// This file contains navigation, scroll effects, and intersection observer
// Individual content is managed in separate files:
// - skills.js (Skills section)
// - projects.js (Projects section)
// - education.js (Education section)
// - pricing.js (Pricing section)
// - blog.js (Blog section)

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

// Contact Form Handler with EmailJS
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'SENDING...';
        submitBtn.disabled = true;
        
        // Send email using EmailJS
        emailjs.sendForm(
            'service_8oaz2r4',      // Replace with your Service ID
            'template_shnekuq',     // Replace with your Template ID
            contactForm
        )
        .then(() => {
            // Success
            alert('✅ Thank you! Your message has been sent successfully. I will get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        })
        .catch((error) => {
            // Error
            console.error('EmailJS Error:', error);
            alert('❌ Oops! Something went wrong. Please try again or contact me directly via email.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    });
}

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