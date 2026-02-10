// ===========================
// NAVIGATION MODULE
// Hamburger toggle, scroll effect,
// keyboard accessibility, focus trap
// ===========================

import { NAVBAR } from "../config/constants.js";
import { qs, qsa } from "../utils/dom.js";
import { rafThrottle } from "../utils/helpers.js";

// ===========================
// HAMBURGER / MOBILE MENU
// ===========================

/**
 * Wire up the mobile hamburger button and overlay-close behaviour.
 */
export function initNavigation() {
  const hamburger = qs("#hamburger");
  const navMenu = qs("#navMenu");
  if (!hamburger || !navMenu) return;

  // Toggle open / close
  hamburger.addEventListener("click", () => _toggleMenu(hamburger, navMenu));

  // Close when a nav link is clicked
  qsa(".nav-link", navMenu).forEach((link) => {
    link.addEventListener("click", () => _closeMenu(hamburger, navMenu));
  });

  // Close when clicking outside the menu
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      _closeMenu(hamburger, navMenu);
    }
  });

  // ESC key closes menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") _closeMenu(hamburger, navMenu);
  });

  // Focus trap inside open menu
  navMenu.addEventListener("keydown", (e) => {
    if (e.key !== "Tab" || !navMenu.classList.contains("active")) return;
    const focusable = qsa("a, button", navMenu);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

/**
 * Change navbar background & shadow on scroll.
 */
export function initNavbarScroll() {
  const navbar = qs(".navbar");
  if (!navbar) return;

  const onScroll = rafThrottle(() => {
    if (window.scrollY > NAVBAR.scrollThreshold) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.05)";
    }
  });

  window.addEventListener("scroll", onScroll, { passive: true });
}

// ===========================
// PRIVATE HELPERS
// ===========================

function _toggleMenu(hamburger, navMenu) {
  const isOpen = navMenu.classList.contains("active");
  isOpen ? _closeMenu(hamburger, navMenu) : _openMenu(hamburger, navMenu);
}

function _openMenu(hamburger, navMenu) {
  hamburger.classList.add("active");
  navMenu.classList.add("active");
  document.body.classList.add("nav-open");
}

function _closeMenu(hamburger, navMenu) {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  document.body.classList.remove("nav-open");
}
