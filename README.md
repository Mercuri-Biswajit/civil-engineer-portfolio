# Er. Biswajit Deb Barman — Portfolio Website

**Professional Civil Engineering Portfolio**  
A modern, responsive web portfolio showcasing civil engineering projects, skills, services, and an interactive construction cost calculator.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [Key Components](#key-components)
- [Calculator Module](#calculator-module)
- [Customization Guide](#customization-guide)
- [Performance & SEO](#performance--seo)
- [Browser Support](#browser-support)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Learning Resources](#learning-resources)

---

## 🎯 Overview

This portfolio website is designed for **Er. Biswajit Deb Barman**, a civil engineer specializing in:
- Residential & Commercial Structural Design
- Architectural Planning
- Cost Estimation & BOQ
- AutoCAD 2D & BIM

The site features:
- **4 main pages**: Home, Projects, About, Calculators
- **Interactive calculator**: Building cost estimator with RCC slab calculations
- **Project gallery**: Filterable portfolio with modal details
- **Responsive design**: Mobile-first approach with full accessibility
- **Modern animations**: Scroll-triggered reveals, parallax effects, AOS integration

---

## ✨ Features

### Core Features
- ✅ **Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- ✅ **Interactive Calculator** — Real-time construction cost estimation
- ✅ **Project Gallery** — Filterable portfolio with modal popups
- ✅ **Smooth Animations** — Parallax scrolling, fade-ins, stagger reveals
- ✅ **Accessibility** — ARIA labels, keyboard navigation, focus management
- ✅ **SEO Optimized** — Semantic HTML, meta tags, structured data
- ✅ **Print Friendly** — Optimized print stylesheets

### Technical Features
- ✅ **Modular ES6 Architecture** — Clean separation of concerns
- ✅ **CSS Custom Properties** — Centralized design tokens
- ✅ **Component-Based CSS** — BEM-inspired naming conventions
- ✅ **Progressive Enhancement** — Works without JavaScript
- ✅ **Performance Optimized** — Lazy loading, debouncing, RAF throttling

---

## 📁 Project Structure

```
portfolio/
├── index.html                    # Homepage
├── README.md                     # This file
├── .gitignore                    # Git ignore rules
│
├── pages/                        # Additional pages
│   ├── about.html
│   ├── projects.html
│   └── calculators.html
│
├── assets/                       # Static assets
│   ├── images/                   # Project images, hero images
│   ├── icons/                    # Logo, favicon
│   └── files/                    # Resume PDF
│
├── css/                          # Stylesheets
│   ├── main.css                  # Main stylesheet (imports all)
│   │
│   ├── base/                     # Foundation styles
│   │   ├── variables.css         # CSS custom properties (design tokens)
│   │   └── reset.css             # CSS reset & normalization
│   │
│   ├── layout/                   # Layout components
│   │   ├── header.css            # Navbar styles
│   │   └── footer.css            # Footer styles
│   │
│   ├── components/               # Reusable components
│   │   ├── buttons.css           # Button variants & effects
│   │   ├── hero.css              # Hero section
│   │   ├── skills.css            # Skills grid
│   │   └── services.css          # Services cards
│   │
│   ├── pages/                    # Page-specific styles
│   │   ├── about.css             # About page
│   │   ├── projects.css          # Projects gallery & modal
│   │   └── calculators.css       # Calculator page
│   │
│   └── utilities/                # Helper classes
│       ├── utilities.css         # Section headers, CTAs
│       ├── helpers.css           # Display, spacing, text utilities
│       └── animation.css         # Animation utilities
│
└── js/                           # JavaScript modules
    ├── app.js                    # Entry point (bootstraps everything)
    │
    ├── config/                   # Configuration
    │   └── constants.js          # Global constants & defaults
    │
    ├── data/                     # Data models
    │   └── models.js             # Skills, projects, services, education
    │
    ├── modules/                  # Feature modules
    │   ├── navigation.js         # Navbar & hamburger menu
    │   ├── skills.js             # Skills rendering
    │   ├── services.js           # Services rendering
    │   ├── projects.js           # Projects gallery & modal
    │   ├── education.js          # Education timeline
    │   ├── about.js              # About page orchestration
    │   │
    │   └── calculator/           # Calculator module
    │       ├── index.js          # Calculator initialization
    │       ├── core.js           # Pure calculation functions
    │       └── ui.js             # DOM reads/writes
    │
    └── utils/                    # Utilities
        ├── animations.js         # 14 animation helpers
        ├── dom.js                # 13 DOM utilities
        ├── helpers.js            # 11 general helpers
        └── validation.js         # 12 validation functions
```

---

## 🛠️ Technology Stack

### Core Technologies
- **HTML5** — Semantic markup
- **CSS3** — Modern layouts (Grid, Flexbox)
- **JavaScript (ES6+)** — Modular architecture

### Libraries & Tools
- **AOS (Animate On Scroll)** — Scroll-triggered animations
- **Google Fonts** — Lexend font family
- **No build tools required** — Pure vanilla JS

### CSS Architecture
- **Custom Properties** — Design system tokens
- **BEM-inspired naming** — Component-based approach
- **Mobile-first responsive design**

### JavaScript Architecture
- **ES6 Modules** — Import/export syntax
- **Separation of concerns** — Data → Logic → UI
- **Pure functions** — No side effects in calculations

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript
- (Optional) A local development server

### Installation

1. **Clone or Download** the repository
2. **Open `index.html`** in your browser
   - Or use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js
     npx http-server
     
     # VS Code Live Server extension
     ```
3. **Navigate** to `http://localhost:8000`

That's it! No build process required.

---

## 🏗️ Architecture

### Data Flow

```
User Interaction
      ↓
Event Listener (app.js or module)
      ↓
Read Data (utils/dom.js)
      ↓
Validate Input (utils/validation.js)
      ↓
Process/Calculate (modules/*/core.js)
      ↓
Update DOM (modules/*/ui.js)
      ↓
User Sees Result
```

### Module Organization

**Modules are organized by feature**:
- `modules/skills.js` — Handles everything related to skills
- `modules/calculator/` — Self-contained calculator feature
- `utils/` — Shared utilities used across modules

**Key principle**: Each module is **self-contained** and can be understood independently.

---

## 🧩 Key Components

### 1. Navigation (`js/modules/navigation.js`)

**Purpose**: Handles mobile menu and navbar scroll effects.

**Features**:
- Hamburger menu toggle
- Click-outside-to-close
- ESC key to close
- Focus trap (keyboard accessibility)
- Scroll-based navbar styling

**Usage**:
```javascript
import { initNavigation, initNavbarScroll } from './modules/navigation.js';

initNavigation();      // Wire up hamburger menu
initNavbarScroll();    // Add scroll effects
```

---

### 2. Projects Gallery (`js/modules/projects.js`)

**Purpose**: Renders project cards, handles filtering, and modal popups.

**Data Source**: `js/data/models.js` → `projects` array

**Features**:
- Gallery rendering from data
- Category filtering (All, Residential, Commercial)
- Modal popup with project details
- Keyboard navigation (ESC to close)
- Stagger animations

**Usage**:
```javascript
import { renderProjects, createProjectModal, setupProjectFilter } from './modules/projects.js';

renderProjects();        // Render all projects
createProjectModal();    // Create modal element
setupProjectFilter();    // Wire up filter buttons
```

**Adding a new project**:
1. Open `js/data/models.js`
2. Add new object to `projects` array:
   ```javascript
   {
     id: 5,
     category: "RESIDENTIAL",
     title: "My New Project",
     description: "...",
     tags: ["Tag1", "Tag2"],
     image: "../assets/images/projects/my-new-project.png"
   }
   ```
3. Save → Refresh page

---

### 3. Skills Grid (`js/modules/skills.js`)

**Purpose**: Renders skill cards on homepage and about page.

**Data Source**: `js/data/models.js` → `skills` array

**Features**:
- Icon + Name + Description cards
- Stagger-reveal animations
- Hover effects with mirror shine

**Adding a new skill**:
1. Open `js/data/models.js`
2. Add to `skills` array:
   ```javascript
   {
     icon: "🎨",
     name: "New Skill",
     description: "Description of the skill"
   }
   ```

---

### 4. Services Cards (`js/modules/services.js`)

**Purpose**: Displays service offerings with pricing.

**Data Source**: `js/data/models.js` → `services` array

**Features**:
- Pricing cards
- Feature lists
- "Recommended" badge
- Mirror shimmer effects

---

## 🧮 Calculator Module

### Overview

The calculator is a **self-contained module** in `js/modules/calculator/`:
- `index.js` — Initialization & event binding
- `core.js` — Pure calculation functions (no DOM)
- `ui.js` — DOM reads and writes

### Architecture

```
User enters values
      ↓
ui.js reads form inputs
      ↓
validation.js validates inputs
      ↓
core.js performs calculations
      ↓
ui.js displays results
```

### Key Files

#### `calculator/core.js`
**Pure calculation functions**:
- `calcBuilding()` — Building estimate
- `calcSlab()` — RCC slab estimate

**No DOM access** — Easy to test!

#### `calculator/ui.js`
**DOM interface**:
- `readBuildingInputs()` — Get form values
- `displayBuildingResults()` — Show results
- `resetForm()` — Clear form

#### `calculator/index.js`
**Orchestration**:
- Wires up button clicks
- Calls validation → core → ui
- Exposes functions to global scope for HTML `onclick`

### Configuration

**All calculator constants** are in `js/config/constants.js`:

```javascript
export const MATERIAL_CONSTANTS = {
  cement: 0.4,      // bags per sq.ft
  steel: 4.0,       // kg per sq.ft
  sand: 0.044,      // m³ per sq.ft
  aggregate: 0.088  // m³ per sq.ft
};

export const DEFAULT_MATERIAL_RATES = {
  cement: 420,      // ₹ per bag
  steel: 65,        // ₹ per kg
  sand: 1500,       // ₹ per m³
  aggregate: 1400   // ₹ per m³
};
```

**To update rates**: Edit these values in `constants.js`.

### Adding New Calculations

1. **Add logic to `core.js`**:
   ```javascript
   export function calcFoundation(params) {
     // Your calculation
     return { result1, result2 };
   }
   ```

2. **Add UI functions to `ui.js`**:
   ```javascript
   export function readFoundationInputs() { /* ... */ }
   export function displayFoundationResults(results) { /* ... */ }
   ```

3. **Wire up in `index.js`**:
   ```javascript
   export function runFoundationCalc() {
     const inputs = readFoundationInputs();
     const results = calcFoundation(inputs);
     displayFoundationResults(results);
   }
   
   window.calculateFoundation = runFoundationCalc;
   ```

4. **Add HTML form** in `calculators.html`

---

## 🎨 Customization Guide

### Changing Colors

**All colors** are defined in `css/base/variables.css`:

```css
:root {
  --color-primary: #003366;      /* Navy blue */
  --color-accent: #FF8C00;       /* Orange */
  --color-bg-dark: #F4F4F4;      /* Light gray */
  /* ... */
}
```

**To change the primary color**:
1. Open `css/base/variables.css`
2. Find `--color-primary`
3. Change to your hex code
4. Save → Refresh

**The entire site updates automatically!**

### Changing Fonts

**Current fonts**: Lexend (display & body)

**To change**:
1. Import new font in HTML `<head>`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
   ```

2. Update `css/base/variables.css`:
   ```css
   --font-display: "YourFont", sans-serif;
   --font-body: "YourFont", sans-serif;
   ```

### Adding New Content

#### Adding a New Page

1. **Create HTML file** in `pages/` (copy `about.html` as template)
2. **Update navigation** in all HTML files:
   ```html
   <a href="./pages/yourpage.html" class="nav-link">YOUR PAGE</a>
   ```
3. **Create CSS** if needed: `css/pages/yourpage.css`
4. **Import in `main.css`**:
   ```css
   @import url("./pages/yourpage.css");
   ```

#### Adding a Section to Homepage

1. Add HTML to `index.html`
2. Create CSS in `css/components/` or `css/utilities/`
3. Import in `css/main.css`
4. Add JavaScript if needed in `js/modules/`

---

## ⚡ Performance & SEO

### Performance Optimizations

- **No build tools** — Minimal overhead
- **Lazy loading** — Images load on demand
- **Debouncing** — Scroll events optimized
- **RAF throttling** — Smooth animations
- **Minimal dependencies** — Only AOS library

### SEO Best Practices

✅ Semantic HTML5 elements  
✅ Meta descriptions on every page  
✅ Alt text on all images  
✅ Heading hierarchy (H1 → H6)  
✅ Clean URLs  
✅ Mobile-friendly  
✅ Fast load times  

### Accessibility

✅ ARIA labels  
✅ Keyboard navigation  
✅ Focus management  
✅ High contrast ratios  
✅ Screen reader support  
✅ Reduced motion support  

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

**Not supported**: Internet Explorer

---

## 🚢 Deployment

### Option 1: Static Hosting (Recommended)

**Netlify** (Free):
1. Drag & drop your folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Done!

**Vercel** (Free):
```bash
npm i -g vercel
vercel
```

**GitHub Pages** (Free):
1. Push to GitHub
2. Settings → Pages → Deploy from main branch
3. Access at `username.github.io/repo-name`

### Option 2: Traditional Web Hosting

1. **Upload files** via FTP
2. **Point domain** to hosting
3. **Ensure** `index.html` is in root

---

## 🐛 Troubleshooting

### Calculator Not Working

**Problem**: Clicking "Calculate" does nothing

**Solutions**:
1. Check browser console for errors (F12)
2. Ensure `app.js` is loaded as `type="module"`
3. Verify `window.calculateBuilding` is defined:
   ```javascript
   console.log(typeof window.calculateBuilding); // Should be "function"
   ```

### Animations Not Running

**Problem**: No scroll animations

**Solutions**:
1. Verify AOS is loaded: `console.log(typeof AOS)`
2. Check `initAOS()` is called in `app.js`
3. Ensure elements have `data-aos` attributes

### Mobile Menu Not Opening

**Problem**: Hamburger doesn't work

**Solutions**:
1. Check `initNavigation()` is called
2. Verify IDs: `#hamburger` and `#navMenu`
3. Check CSS: `.nav-menu.active` should show menu

### Images Not Loading

**Problem**: Broken image icons

**Solutions**:
1. Check image paths (relative to HTML file)
2. Verify file exists in `/assets/images/`
3. Check case-sensitivity (Linux servers)

---

## 📚 Learning Resources

### JavaScript ES6 Modules
- [MDN: JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- Understanding `import` and `export`

### CSS Custom Properties
- [MDN: CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- How design tokens work

### CSS Grid & Flexbox
- [CSS Tricks: Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS Tricks: Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Accessibility (a11y)
- [WebAIM: Introduction to Web Accessibility](https://webaim.org/intro/)
- ARIA labels and keyboard navigation

### Animation & UX
- [AOS Library Documentation](https://michalsnik.github.io/aos/)
- Intersection Observer API

---

## 📞 Support

For questions or issues:
1. Check [Troubleshooting](#troubleshooting) section
2. Review inline code comments
3. Check browser console for errors

---

## 📄 License

© 2026 Er. Biswajit Deb Barman. All rights reserved.

---

## 🎓 Credits

**Developed for**: Er. Biswajit Deb Barman  
**Portfolio Type**: Civil Engineering  
**Tech Stack**: HTML5, CSS3, Vanilla JavaScript ES6  
**Animation Library**: AOS (Animate On Scroll)  
**Fonts**: Lexend (Google Fonts)

---

**Last Updated**: February 2026  
**Version**: 1.0.0