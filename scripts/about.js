// ===========================
// ABOUT PAGE ANIMATIONS
// ===========================

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS library
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100,
    delay: 50,
    disable: function() {
      // Disable on mobile if needed
      return window.innerWidth < 768 && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
  });

  // Initialize hero background animations
  initHeroBackground();

  // Add stagger animation to education items after they're rendered
  setTimeout(addEducationAnimations, 100);
  
  // Add hover effects
  addInteractiveEffects();
  
  // Initialize scroll-triggered counters if any
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
// EDUCATION ITEMS ANIMATION
// ===========================

function addEducationAnimations() {
  const educationItems = document.querySelectorAll('.education-item');
  
  educationItems.forEach((item, index) => {
    // Add AOS attributes dynamically
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-delay', (index * 100).toString());
    item.setAttribute('data-aos-duration', '600');
    
    // Add hover scale effect
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(8px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(6px) scale(1)';
    });
  });
  
  // Refresh AOS to recognize dynamically added attributes
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

// ===========================
// INTERACTIVE EFFECTS
// ===========================

function addInteractiveEffects() {
  // Enhanced competency item interactions
  const competencyItems = document.querySelectorAll('.competency-item');
  
  competencyItems.forEach(item => {
    item.addEventListener('click', function() {
      // Add a quick pulse effect on click
      this.style.animation = 'none';
      setTimeout(() => {
        this.style.animation = '';
      }, 10);
    });
  });
  
  // Contact link animations
  const contactLinks = document.querySelectorAll('.contact-link');
  
  contactLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.contact-icon');
      if (icon) {
        icon.style.transform = 'scale(1.2) rotate(10deg)';
        icon.style.transition = 'transform 0.3s ease';
      }
    });
    
    link.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.contact-icon');
      if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
      }
    });
  });
}

// ===========================
// SCROLL ANIMATIONS
// ===========================

function initScrollAnimations() {
  // Observe sections for scroll-based animations
  const sections = document.querySelectorAll('.about-section');
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
        
        // Add stagger effect to children
        const children = entry.target.querySelectorAll('.competency-item, .education-item');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          }, index * 50);
        });
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
// PERFORMANCE OPTIMIZATION
// ===========================

// Throttle scroll events
let scrollTimeout;
let lastScrollTime = 0;

window.addEventListener('scroll', () => {
  const now = Date.now();
  if (now - lastScrollTime > 100) {
    lastScrollTime = now;
    
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
      // Scroll-dependent animations here
    });
  }
}, { passive: true });

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

// Listen for changes in motion preference
prefersReducedMotion.addEventListener('change', () => {
  if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--transition-duration', '0.1s');
  } else {
    document.documentElement.style.setProperty('--transition-duration', '0.3s');
  }
});

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

console.log('%c✨ About Page Animations Loaded', 'color: #1E293B; font-size: 14px; font-weight: bold;');
console.log('%c📍 Working with education.js and skills.js', 'color: #64748B; font-size: 12px;');