// ===========================
// PAGE ANIMATIONS MODULE
// Shared animations for all pages
// ===========================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 50,
      disable: function() {
        // Disable on mobile if reduced motion is preferred
        return window.innerWidth < 768 && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }
    });
  }

  // Initialize hero background animations
  initHeroBackground();
  
  // Add stagger animations to cards
  addCardAnimations();
  
  // Initialize scroll-triggered animations
  initScrollAnimations();
});

// ===========================
// HERO BACKGROUND ANIMATIONS
// ===========================

function initHeroBackground() {
  // Add parallax effect to shapes
  const shapes = document.querySelectorAll('.animated-shape');
  
  if (shapes.length > 0) {
    window.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        shape.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  }
  
  // Add twinkling effect to dots
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    setInterval(() => {
      dot.style.opacity = Math.random() * 0.6 + 0.2;
    }, 2000 + (index * 500));
  });
}

// ===========================
// CARD ANIMATIONS
// ===========================

function addCardAnimations() {
  // Add AOS to all cards with stagger effect
  const allCards = document.querySelectorAll('.project-card, .skill-card, .services-card, .education-item, .competency-item');
  
  allCards.forEach((card, index) => {
    // Add AOS attributes if not already set
    if (!card.hasAttribute('data-aos')) {
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', ((index % 6) * 100).toString());
      card.setAttribute('data-aos-duration', '600');
    }
  });
  
  // Refresh AOS to recognize dynamically added attributes
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

// ===========================
// SCROLL ANIMATIONS
// ===========================

function initScrollAnimations() {
  // Observe sections for scroll-based animations
  const sections = document.querySelectorAll('section');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}

// ===========================
// PARALLAX EFFECT (SUBTLE)
// ===========================

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const pageHeader = document.querySelector('.page-header');
  
  if (pageHeader && scrolled < 800) {
    // Parallax for the entire header
    const parallaxSpeed = 0.5;
    pageHeader.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    
    // Fade out as scrolling
    const opacity = Math.max(0, 1 - (scrolled / 800));
    pageHeader.style.opacity = opacity;
    
    // Move animated shapes at different speeds
    const shapes = pageHeader.querySelectorAll('.animated-shape');
    shapes.forEach((shape, index) => {
      const speed = 0.2 + (index * 0.1);
      shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    // Move grid slower
    const grid = pageHeader.querySelector('.animated-grid');
    if (grid) {
      grid.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * 0.1}px)`;
    }
  }
});

// ===========================
// SMOOTH SCROLLING FOR ANCHORS
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ===========================
// ACCESSIBILITY
// ===========================

// Respect prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
  // Disable complex animations
  document.documentElement.style.setProperty('--transition-duration', '0.1s');
  
  // Reinitialize AOS with minimal animation
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 0,
      once: true,
      disable: true
    });
  }
}

// ===========================
// WINDOW RESIZE HANDLER
// ===========================

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    // Refresh AOS on resize
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, 250);
});

// ===========================
// CONSOLE LOG
// ===========================

console.log('%c✨ Page Animations Loaded', 'color: #1E293B; font-size: 14px; font-weight: bold;');