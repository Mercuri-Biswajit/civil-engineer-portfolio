// ===========================
// APP.JS — ENTRY POINT
// Bootstraps all modules.
// One <script type="module" src="app.js"> per HTML page.
// ===========================

// ---- Navigation (every page) ----
import { initNavigation, initNavbarScroll } from './modules/navigation.js';

// ---- Animations (every page) ----
import {
    initAOS,
    initHeroBackground,
    initHeaderParallax,
    initScrollAnimations,
    initSmoothAnchors,
    initResizeHandler,
    initReducedMotion,
    addCardAnimations,
    initSkillCardAnimations,
    initServiceCardAnimations,
    initProjectCardAnimations,
} from './utils/animations.js';

// ---- Page modules ----
import { renderSkills }           from './modules/skills.js';
import { renderServices }         from './modules/services.js';
import {
    renderProjects,
    renderProjectsPreview,
    createProjectModal,
    setupProjectFilter,
} from './modules/projects.js';
import { initAboutPage }          from './modules/about.js';
import { initCalculator }         from './modules/calculator/index.js';

// ===========================
// BOOT
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // ── Always ──────────────────────────────────────────
    initNavigation();
    initNavbarScroll();
    initAOS();
    initHeroBackground();
    initSmoothAnchors();
    initResizeHandler();
    initReducedMotion();

    // ── Home page — Skills ───────────────────────────────
    // Render first, THEN immediately wire the stagger-reveal observer.
    // Do NOT defer with setTimeout — cards must exist before observer attaches.
    if (document.getElementById('skillsGrid')) {
        renderSkills();
        initSkillCardAnimations();
    }

    // ── Home page — Projects preview ─────────────────────
    if (document.getElementById('projectsPreview')) {
        renderProjectsPreview();
        createProjectModal();
        setTimeout(initProjectCardAnimations, 100);
    }

    // ── Home page — Services ─────────────────────────────
    if (document.getElementById('servicesGrid')) {
        renderServices();
        initServiceCardAnimations();
    }

    // ── Projects page ─────────────────────────────────────
    if (document.getElementById('projectsGrid')) {
        renderProjects();
        createProjectModal();
        setupProjectFilter();
        initHeaderParallax();
        setTimeout(initProjectCardAnimations, 100);
    }

    // ── About page ────────────────────────────────────────
    if (document.querySelector('.about-page')) {
        initAboutPage();
    }

    // ── Calculator page ───────────────────────────────────
    if (document.querySelector('.calc-page')) {
        initCalculator();
    }

    // ── Shared scroll animations ──────────────────────────
    initScrollAnimations();
    setTimeout(addCardAnimations, 200);

    // ── Dev log ───────────────────────────────────────────
    console.log(
        '%c🚀 Portfolio Loaded',
        'color: #003366; font-size: 15px; font-weight: bold;',
    );
});

// ===========================
// GLOBAL ERROR HANDLING
// ===========================

window.addEventListener('error', (e) => {
    console.error('Uncaught error:', e.error);
});
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled rejection:', e.reason);
});