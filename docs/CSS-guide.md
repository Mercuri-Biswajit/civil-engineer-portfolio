# CSS Architecture Guide

This document explains how the CSS is organized and how to work with the design system.

---

## 📊 Overview

The CSS follows a **component-based architecture** with these principles:

1. **Design Tokens** — Centralized variables for consistency
2. **Mobile-First** — Start small, scale up
3. **BEM-inspired naming** — Clear, predictable class names
4. **Separation of concerns** — Base, Layout, Components, Pages, Utilities
5. **Progressive enhancement** — Works without JavaScript

---

## 🗂️ File Structure

```
css/
├── main.css              # Main import file
│
├── base/                 # Foundation
│   ├── variables.css     # Design tokens (colors, spacing, etc.)
│   └── reset.css         # CSS reset & normalization
│
├── layout/               # Page structure
│   ├── header.css        # Navigation & navbar
│   └── footer.css        # Footer
│
├── components/           # Reusable UI components
│   ├── buttons.css       # All button styles
│   ├── hero.css          # Hero section
│   ├── skills.css        # Skills grid
│   └── services.css      # Service cards
│
├── pages/                # Page-specific styles
│   ├── about.css         # About page
│   ├── projects.css      # Projects gallery
│   └── calculators.css   # Calculator page
│
└── utilities/            # Helper classes
    ├── utilities.css     # Section headers, CTAs
    ├── helpers.css       # Display, spacing, text
    └── animation.css     # Animation utilities
```

---

## 🎨 Design System (CSS Variables)

### Location
All design tokens are in `css/base/variables.css`

### Why Use CSS Variables?

**Before** (hard-coded values):
```css
.button {
  background: #003366;  /* What is this color? */
  padding: 1rem 2rem;   /* Magic numbers */
}
```

**After** (design tokens):
```css
.button {
  background: var(--color-primary);      /* Clear meaning */
  padding: var(--spacing-sm) var(--spacing-md);  /* Consistent */
}
```

**Benefits**:
- ✅ Change once, update everywhere
- ✅ Self-documenting code
- ✅ Easier maintenance
- ✅ Consistent spacing/colors

---

## 🎨 Color System

### Primary Colors
```css
--color-primary: #003366;        /* Navy blue - main brand */
--color-primary-dark: #0F172A;   /* Darker navy */
--color-primary-light: #1E4A7A;  /* Lighter navy */
```

**Usage**:
- Headers, buttons, links, icons
- Professional, trustworthy feel

### Accent Colors
```css
--color-accent: #FF8C00;         /* Orange - highlights */
--color-accent-dark: #E07B00;    /* Darker orange */
--color-accent-light: #FFA333;   /* Lighter orange */
```

**Usage**:
- Call-to-action buttons
- Hover states
- Important highlights

### Background Colors
```css
--color-bg-dark: #F4F4F4;        /* Light gray background */
--color-bg-darker: #FFFFFF;      /* White background */
--color-bg-card: #FFFFFF;        /* Card background */
```

### Text Colors
```css
--color-text: #1E293B;           /* Main text */
--color-text-dim: #64748B;       /* Secondary text */
--color-text-light: #94A3B8;     /* Tertiary text */
--color-text-white: #FFFFFF;     /* White text */
```

### Border Colors
```css
--color-border: #E2E8F0;         /* Standard border */
--color-border-dark: #CBD5E1;    /* Darker border */
--color-border-light: #F1F5F9;   /* Lighter border */
```

### State Colors
```css
--color-success: #10B981;        /* Green - success */
--color-warning: #F59E0B;        /* Yellow - warning */
--color-error: #EF4444;          /* Red - error */
--color-info: #3B82F6;           /* Blue - info */
```

---

## 📏 Spacing System

### Spacing Scale
```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 2rem;      /* 32px */
--spacing-lg: 4rem;      /* 64px */
--spacing-xl: 5rem;      /* 80px */
--spacing-2xl: 6rem;     /* 96px */
--spacing-3xl: 8rem;     /* 128px */
```

**Usage**:
```css
.section {
  padding: var(--spacing-xl) 0;    /* 80px top/bottom */
}

.card {
  margin-bottom: var(--spacing-md);  /* 32px gap */
}
```

### Gap Scale (for Flexbox/Grid)
```css
--gap-xs: 0.5rem;        /* 8px */
--gap-sm: 1rem;          /* 16px */
--gap-md: 2rem;          /* 32px */
--gap-lg: 3rem;          /* 48px */
--gap-xl: 4rem;          /* 64px */
```

**Usage**:
```css
.grid {
  display: grid;
  gap: var(--gap-md);    /* 32px gap between items */
}
```

---

## 🔤 Typography System

### Font Families
```css
--font-display: "Lexend", sans-serif;   /* Headers, buttons */
--font-body: "Lexend", sans-serif;      /* Body text */
```

### Font Sizes
```css
--font-size-xs: 0.75rem;      /* 12px */
--font-size-sm: 0.875rem;     /* 14px */
--font-size-base: 1rem;       /* 16px */
--font-size-lg: 1.125rem;     /* 18px */
--font-size-xl: 1.25rem;      /* 20px */
--font-size-2xl: 1.5rem;      /* 24px */
--font-size-3xl: 1.875rem;    /* 30px */
--font-size-4xl: 2.25rem;     /* 36px */
--font-size-5xl: 3rem;        /* 48px */
--font-size-6xl: 4rem;        /* 64px */
```

### Font Weights
```css
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Line Heights
```css
--line-height-tight: 1.25;      /* Headings */
--line-height-normal: 1.5;      /* Body */
--line-height-relaxed: 1.6;     /* Comfortable reading */
--line-height-loose: 1.8;       /* Very spacious */
```

**Usage**:
```css
h1 {
  font-family: var(--font-display);
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}

p {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
}
```

---

## 🎭 Effects

### Transitions
```css
--transition-duration: 0.3s;
--transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
--transition: all var(--transition-duration) var(--transition-timing);
--transition-fast: all 0.15s ease;
--transition-slow: all 0.5s ease;
```

**Usage**:
```css
.button {
  transition: var(--transition);
}

.button:hover {
  transform: translateY(-2px);  /* Smooth animation */
}
```

### Shadows
```css
--shadow-sm: 0 2px 8px rgba(30, 41, 59, 0.08);
--shadow-md: 0 4px 16px rgba(30, 41, 59, 0.12);
--shadow-lg: 0 8px 32px rgba(30, 41, 59, 0.15);
--shadow-xl: 0 16px 48px rgba(30, 41, 59, 0.20);
```

**Usage**:
```css
.card {
  box-shadow: var(--shadow-sm);
}

.card:hover {
  box-shadow: var(--shadow-md);
}
```

### Border Radius
```css
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-2xl: 16px;
--radius-full: 9999px;     /* Perfect circle/pill */
```

---

## 🏗️ Layout System

### Container
```css
.container {
  max-width: var(--container-max-width);  /* 1300px */
  margin: 0 auto;
  padding: 0 var(--container-padding);    /* 2rem */
}
```

### Responsive Breakpoints

**Mobile-first approach**:
```css
/* Base styles (mobile) */
.grid {
  grid-template-columns: 1fr;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Standard breakpoints**:
- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large Desktop**: 1025px+

---

## 🧩 Component Patterns

### 1. Card Component

**HTML**:
```html
<div class="skill-card">
  <div class="skill-icon">📐</div>
  <h3 class="skill-name">AutoCAD 2D</h3>
  <p class="skill-description">Proficient in AutoCAD...</p>
</div>
```

**CSS** (`css/components/skills.css`):
```css
.skill-card {
  /* Layout */
  padding: 2rem;
  
  /* Appearance */
  background: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  
  /* Effects */
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}
```

**Learning point**: Group related properties (layout, appearance, effects)

---

### 2. Button Component

**HTML**:
```html
<button class="btn btn-primary">Click Me</button>
```

**CSS** (`css/components/buttons.css`):
```css
/* Base button */
.btn {
  padding: 1rem 2rem;
  font-family: var(--font-display);
  font-weight: var(--font-weight-semibold);
  border-radius: 30px;
  cursor: pointer;
  transition: var(--transition);
}

/* Primary variant */
.btn-primary {
  background: var(--color-primary);
  color: #ffffff;
  border: 2px solid var(--color-primary);
}

.btn-primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

**Learning point**: Base class + modifier classes

---

### 3. Section Header Pattern

**HTML**:
```html
<div class="section-header">
  <span class="section-number">01</span>
  <h2 class="section-title">SOFTWARE EXPERTISE</h2>
</div>
```

**CSS** (`css/utilities/utilities.css`):
```css
.section-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
}

.section-number {
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-primary);
  opacity: 0.2;
}

.section-title {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}
```

---

## 🎨 Special Effects

### 1. Mirror/Shimmer Effect

**What it does**: Creates a light reflection that sweeps across elements on hover.

**CSS**:
```css
.card {
  position: relative;
  overflow: hidden;
}

/* Create the mirror effect */
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.4), 
    transparent);
  transition: left 0.6s ease;
  z-index: 1;
  pointer-events: none;
}

/* Trigger on hover */
.card:hover::before {
  left: 100%;
}

/* Ensure content is above effect */
.card > * {
  position: relative;
  z-index: 2;
}
```

**Where used**:
- `.skill-card`
- `.services-card`
- `.education-item`
- `.btn`

---

### 2. Stagger Animation

**What it does**: Cards appear one after another with a delay.

**CSS**:
```css
.card {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.card.animated {
  opacity: 1;
  transform: translateY(0);
}
```

**JavaScript** (triggered by Intersection Observer):
```javascript
cards.forEach((card, index) => {
  setTimeout(() => {
    card.classList.add('animated');
  }, index * 100);  // 100ms delay between each
});
```

---

### 3. Parallax Effect

**What it does**: Elements move at different speeds on scroll.

**CSS**:
```css
.page-header {
  position: relative;
  transition: transform 0.3s ease;
}
```

**JavaScript**:
```javascript
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  pageHeader.style.transform = `translateY(${scrolled * 0.5}px)`;
});
```

---

## 📱 Responsive Design Patterns

### Mobile-First Media Queries

**Start with mobile styles**, then add larger screens:

```css
/* Mobile (default) */
.grid {
  grid-template-columns: 1fr;
}

/* Tablet */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Common Responsive Patterns

**1. Stack on mobile, row on desktop**:
```css
.flex-container {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .flex-container {
    flex-direction: row;
  }
}
```

**2. Full width on mobile, constrained on desktop**:
```css
.card {
  width: 100%;
}

@media (min-width: 768px) {
  .card {
    width: 50%;
  }
}
```

**3. Hide/show based on screen size**:
```css
.mobile-only {
  display: block;
}

.desktop-only {
  display: none;
}

@media (min-width: 768px) {
  .mobile-only {
    display: none;
  }
  
  .desktop-only {
    display: block;
  }
}
```

---

## 🎯 Naming Conventions

### BEM-Inspired Pattern

**Block Element Modifier**:
```
.block {}
.block__element {}
.block--modifier {}
```

**Examples**:
```css
/* Block */
.project-card {}

/* Elements */
.project-card__image {}
.project-card__title {}
.project-card__description {}

/* Modifiers */
.project-card--featured {}
.project-card--large {}
```

**When to use**:
- **Block** — Standalone component (`.skill-card`, `.btn`)
- **Element** — Part of a component (`.card__header`, `.btn__icon`)
- **Modifier** — Variant of a component (`.btn--primary`, `.card--large`)

---

## 🔧 Utility Classes

### Display
```css
.hidden { display: none !important; }
.visible { display: block !important; }
.flex { display: flex; }
.grid { display: grid; }
```

### Spacing
```css
.m-0 { margin: 0; }
.p-0 { padding: 0; }
.mt-md { margin-top: var(--spacing-md); }
.mb-lg { margin-bottom: var(--spacing-lg); }
```

### Text
```css
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
.font-bold { font-weight: var(--font-weight-bold); }
.text-primary { color: var(--color-primary); }
```

### Borders
```css
.border { border: 1px solid var(--color-border); }
.rounded { border-radius: var(--radius-md); }
.rounded-full { border-radius: var(--radius-full); }
```

---

## 📋 CSS Organization Best Practices

### 1. Order Properties Logically

**Recommended order**:
```css
.element {
  /* Position */
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  
  /* Display & Box Model */
  display: flex;
  width: 100%;
  height: auto;
  padding: 1rem;
  margin: 0 auto;
  
  /* Typography */
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  color: var(--color-text);
  
  /* Visual */
  background: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  
  /* Animation */
  transition: var(--transition);
  transform: scale(1);
}
```

### 2. Use Comments to Organize

```css
/* ===========================
   SECTION NAME
   Description of what this section does
   =========================== */

/* Subsection */
.component {}

/* Another subsection */
.another-component {}
```

### 3. One Selector Per Line
```css
/* Good */
.btn,
.button,
.cta {
  /* styles */
}

/* Bad */
.btn, .button, .cta { /* styles */ }
```

### 4. Avoid Over-Specificity
```css
/* Bad - too specific */
div.container > div.row > div.col > p.text {
  color: red;
}

/* Good */
.text {
  color: red;
}
```

---

## 🎨 Customization Examples

### Example 1: Change Primary Color

**File**: `css/base/variables.css`

```css
:root {
  /* Change this */
  --color-primary: #003366;
  
  /* To this */
  --color-primary: #1E88E5;  /* New blue */
}
```

**Result**: All buttons, links, headers update automatically!

---

### Example 2: Adjust Spacing

```css
:root {
  /* Increase overall spacing */
  --spacing-xl: 7rem;  /* Was 5rem */
}
```

**Result**: All sections using `--spacing-xl` get more padding.

---

### Example 3: Change Font

**1. Import new font** (in HTML `<head>`):
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

**2. Update variables**:
```css
:root {
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

---

## 🐛 Common CSS Issues & Fixes

### Issue 1: Element Not Showing

**Check**:
1. `display: none` or `opacity: 0`?
2. `z-index` too low?
3. Parent has `overflow: hidden`?
4. Element positioned off-screen?

---

### Issue 2: Hover Effect Not Working

**Check**:
1. `pointer-events: none` on element?
2. Another element covering it?
3. `:hover` specificity too low?

---

### Issue 3: Layout Breaking on Mobile

**Check**:
1. Using fixed widths instead of percentages?
2. Missing `max-width: 100%` on images?
3. Forgetting mobile-first media queries?

---

## 💡 Pro Tips

1. **Use CSS custom properties** for anything that repeats
2. **Mobile-first** is easier than desktop-first
3. **Avoid `!important`** — increases specificity debt
4. **Test on real devices** — simulators aren't enough
5. **Use flexbox for 1D layouts** (row or column)
6. **Use grid for 2D layouts** (rows and columns)
7. **Comment your "why"** not your "what"
8. **Keep selectors short** — 3 levels max
9. **Group related properties** for readability
10. **Use shorthand carefully** — explicit is often clearer

---

## 📚 Learning Resources

- **Flexbox**: [CSS Tricks Complete Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- **Grid**: [CSS Tricks Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- **Custom Properties**: [MDN Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- **BEM Methodology**: [getbem.com](http://getbem.com/)

---

**Remember**: Good CSS is maintainable CSS. Use design tokens, keep it organized, and write code that future-you will thank you for!