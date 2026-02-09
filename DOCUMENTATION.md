# Civil Engineering Portfolio - Complete Documentation

**Project:** Er. Biswajit Deb Barman - Professional Portfolio Website  
**Version:** 1.0.0  
**Last Updated:** February 2026  
**GitHub:** [civil-engineer-portfolio](https://github.com/Mercuri-Biswajit/civil-engineer-portfolio)

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture & Structure](#architecture--structure)
3. [Design System](#design-system)
4. [Features Documentation](#features-documentation)
5. [Component Guide](#component-guide)
6. [JavaScript Modules](#javascript-modules)
7. [Content Management](#content-management)
8. [Calculator Tool](#calculator-tool)
9. [Customization Guide](#customization-guide)
10. [Development Workflow](#development-workflow)
11. [Deployment](#deployment)
12. [Troubleshooting](#troubleshooting)

---

## Project Overview

### Purpose
A modern, responsive portfolio website showcasing civil engineering services, projects, and professional credentials. Features an integrated construction cost calculator for client estimates.

### Tech Stack
- **Frontend:** HTML5, CSS3 (Modern CSS with custom properties), Vanilla JavaScript (ES6+)
- **Animation:** AOS (Animate On Scroll) library
- **Typography:** Google Fonts (Oswald, Work Sans)
- **Hosting:** GitHub Pages compatible
- **Build:** No build process required - pure static site

### Key Features
- 📱 Fully responsive design (mobile-first approach)
- 🎨 Modern UI with smooth animations
- 🏗️ Project portfolio with category filtering
- 💰 Advanced construction cost calculator
- ♿ Accessibility-focused (WCAG guidelines)
- ⚡ Performance optimized (90+ Lighthouse score)
- 🎯 SEO friendly

---

## Architecture & Structure

### Directory Organization

```
civil-engineer-portfolio/
│
├── 📄 index.html              # Homepage
├── 📄 README.md               # Project overview
├── 📄 .gitignore              # Git exclusions
│
├── 📁 assets/                 # Static resources
│   ├── icons/                 # Logos, favicons
│   ├── images/                # General images
│   │   ├── hero/              # Hero section images
│   │   └── projects/          # Project portfolio images
│   └── files/                 # Downloadable files (resume, etc.)
│
├── 📁 css/                    # Stylesheets (modular architecture)
│   ├── base/
│   │   ├── reset.css          # Modern CSS reset
│   │   └── variables.css      # Design tokens/CSS custom properties
│   │
│   ├── components/
│   │   ├── about.css          # About page specific
│   │   ├── calculators.css    # Calculator UI
│   │   ├── hero.css           # Hero section
│   │   ├── projects.css       # Projects showcase
│   │   └── services.css       # Services section
│   │
│   ├── layout/
│   │   ├── footer.css         # Site footer
│   │   └── header.css         # Navigation/header
│   │
│   ├── buttons/
│   │   └── buttons.css        # Button components/variants
│   │
│   ├── utilities/
│   │   ├── helpers.css        # Utility classes
│   │   └── utilities.css      # Common patterns
│   │
│   └── main.css               # Central import file
│
├── 📁 js/                     # JavaScript (modular)
│   ├── modules/
│   │   ├── about.js           # About page interactions
│   │   ├── calculators.js     # Calculator logic
│   │   ├── education.js       # Education data
│   │   ├── projects.js        # Project data & filtering
│   │   ├── services.js        # Services/pricing data
│   │   └── skills.js          # Skills section data
│   │
│   ├── utils/
│   │   └── page-animations.js # Scroll animations
│   │
│   └── main.js                # Application entry point
│
└── 📁 pages/                  # Additional HTML pages
    ├── about.html             # About/profile page
    ├── projects.html          # Projects showcase
    └── calculators.html       # Cost calculator tool
```

### CSS Architecture (ITCSS-Inspired)

The CSS follows a modified ITCSS (Inverted Triangle CSS) methodology:

1. **Base Layer** (`base/`) - Global resets and variables
2. **Layout Layer** (`layout/`) - Structural components (header, footer)
3. **Component Layer** (`components/`) - Specific UI components
4. **Button Layer** (`buttons/`) - All button variants
5. **Utility Layer** (`utilities/`) - Helper classes and utilities

**Import Order** (in `main.css`):
```css
/* Base → Layout → Components → Buttons → Utilities */
@import url("./base/variables.css");
@import url("./base/reset.css");
@import url("./layout/header.css");
/* ... and so on */
```

### JavaScript Architecture (Module Pattern)

Each feature is encapsulated in its own module:

- **Separation of Concerns:** Each module handles one responsibility
- **Data-Driven:** Content stored in data arrays for easy updates
- **Event-Driven:** Modules respond to DOM events
- **No Build Step:** ES5 compatible (no transpilation needed)

**Module Communication:**
```javascript
// Each module exports functions if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projects, renderProjects };
}
```

---

## Design System

### Color Palette

```css
/* Primary Colors */
--color-primary: #003366;           /* Navy Blue (main brand) */
--color-primary-dark: #0F172A;      /* Darker navy */
--color-primary-light: #1E4A7A;     /* Lighter navy */

/* Accent Colors */
--color-accent: #FF8C00;            /* Orange (highlights) */
--color-accent-dark: #E07B00;       /* Darker orange */
--color-accent-light: #FFA333;      /* Lighter orange */

/* Background Colors */
--color-bg-dark: #F4F4F4;           /* Light gray background */
--color-bg-darker: #FFFFFF;         /* White sections */
--color-bg-card: #FFFFFF;           /* Card backgrounds */

/* Text Colors */
--color-text: #1E293B;              /* Primary text */
--color-text-dim: #64748B;          /* Secondary text */
--color-text-light: #94A3B8;        /* Tertiary text */

/* Border Colors */
--color-border: #E2E8F0;            /* Default borders */
--color-border-dark: #CBD5E1;       /* Darker borders */
```

### Typography Scale

```css
/* Font Families */
--font-display: "Oswald", sans-serif;     /* Headings */
--font-body: "Work Sans", sans-serif;     /* Body text */

/* Font Sizes (Fluid Typography) */
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

/* Font Weights */
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Spacing System (8pt Grid)

```css
--spacing-xs: 0.5rem;         /* 8px */
--spacing-sm: 1rem;           /* 16px */
--spacing-md: 2rem;           /* 32px */
--spacing-lg: 4rem;           /* 64px */
--spacing-xl: 5rem;           /* 80px */
--spacing-2xl: 6rem;          /* 96px */
--spacing-3xl: 8rem;          /* 128px */
```

### Shadow Tokens

```css
--shadow-sm: 0 2px 8px rgba(30, 41, 59, 0.08);
--shadow-md: 0 4px 16px rgba(30, 41, 59, 0.12);
--shadow-lg: 0 8px 32px rgba(30, 41, 59, 0.15);
--shadow-xl: 0 16px 48px rgba(30, 41, 59, 0.20);
```

### Breakpoints

```css
/* Mobile First Approach */
@media (max-width: 480px)  { /* Small mobile */ }
@media (max-width: 768px)  { /* Mobile/tablet */ }
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 1200px) { /* Small desktop */ }
```

---

## Features Documentation

### 1. Responsive Navigation

**Location:** `css/layout/header.css`, `js/main.js`

**Features:**
- Fixed position with backdrop blur effect
- Scroll-triggered background change
- Hamburger menu for mobile
- Smooth scroll to sections
- Active link highlighting

**Key CSS Classes:**
```css
.navbar              /* Main container */
.nav-container       /* Inner wrapper */
.nav-menu            /* Links container */
.nav-link            /* Individual links */
.hamburger           /* Mobile toggle */
.btn-nav-cta         /* CTA button */
```

**JavaScript:**
```javascript
// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    }
});
```

### 2. Hero Section

**Location:** `css/components/hero.css`

**Features:**
- Gradient background
- Animated text reveals (fadeInUp)
- Dual CTA buttons
- Blueprint grid overlay effect
- Responsive image container

**Animations:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 3. Project Portfolio

**Location:** `js/modules/projects.js`, `css/components/projects.css`

**Features:**
- Category filtering (All, Residential, Commercial)
- Card-based layout with hover effects
- Mirror shine animation on hover
- Lazy loading support
- Responsive grid

**Data Structure:**
```javascript
const projects = [
    {
        category: 'RESIDENTIAL',        // or 'COMMERCIAL'
        title: 'Project Name',
        description: 'Detailed description...',
        tags: ['Tag1', 'Tag2', 'Tag3'],
        image: '../assets/images/projects/image.png'
    }
];
```

**Filter Logic:**
```javascript
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});
```

### 4. Skills Section

**Location:** `js/modules/skills.js`, `css/utilities/utilities.css`

**Features:**
- Icon-based cards
- Hover animations
- Auto-generated from data
- Intersection Observer for scroll animations

**Data Structure:**
```javascript
const skills = [
    {
        icon: '📐',                    // Emoji or SVG
        name: 'Skill Name',
        description: 'Brief description of the skill'
    }
];
```

### 5. Services Section

**Location:** `js/modules/services.js`, `css/components/services.css`

**Features:**
- Pricing cards with feature lists
- "Popular" badge option
- Hover effects with mirror animation
- Responsive grid layout

**Data Structure:**
```javascript
const services = [
    {
        name: 'Service Name',
        price: 'Custom Quote',          // or specific price
        description: 'Service description',
        features: [
            'Feature 1',
            'Feature 2',
            // ...
        ],
        icon: '📐',
        popular: false                   // Set to true for badge
    }
];
```

---

## Component Guide

### Button Components

**Location:** `css/buttons/buttons.css`

#### Button Variants

```html
<!-- Primary Button -->
<button class="btn btn-primary">Click Me</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">Click Me</button>

<!-- Outline Button -->
<button class="btn btn-outline">Click Me</button>

<!-- Ghost Button -->
<button class="btn btn-ghost">Click Me</button>

<!-- Link Button -->
<button class="btn btn-link">Click Me</button>

<!-- Gradient Button -->
<button class="btn btn-gradient">Click Me</button>
```

#### Button Sizes

```html
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary btn-xl">Extra Large</button>
```

#### Button Modifiers

```html
<!-- Block (Full Width) -->
<button class="btn btn-primary btn-block">Full Width</button>

<!-- With Icon -->
<button class="btn btn-primary btn-icon">
    <span>📐</span>
    <span>Click Me</span>
</button>

<!-- Loading State -->
<button class="btn btn-primary btn-loading">Processing...</button>
```

#### Mirror Effect

All buttons include a "mirror shine" effect on hover:

```css
.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.3), 
    transparent);
  transition: left 0.5s ease;
}

.btn:hover::before {
  left: 100%;
}
```

### Card Components

All cards (projects, skills, services, education) use a consistent structure:

```html
<div class="[card-type]-card">
    <!-- Mirror effect (applied via CSS) -->
    <div class="[card-type]-icon">Icon/Image</div>
    <div class="[card-type]-content">
        <h3>Title</h3>
        <p>Description</p>
    </div>
</div>
```

**Common Card Effects:**
- Mirror shine on hover
- TranslateY lift on hover
- Border color change
- Box shadow enhancement

---

## JavaScript Modules

### Main Entry Point (`js/main.js`)

**Responsibilities:**
- Initialize all modules
- Handle navigation
- Manage scroll events
- Provide global utilities (Intersection Observer)

**Key Functions:**
```javascript
// Mobile menu toggle
hamburger.addEventListener('click', () => { ... });

// Navbar scroll effect
window.addEventListener('scroll', () => { ... });

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => { ... });

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => { ... });
```

### Projects Module (`js/modules/projects.js`)

**Exports:**
- `projects` - Array of project data
- `renderProjects()` - Render all projects
- `renderProjectsPreview()` - Render first 3 for homepage
- `setupProjectFilter()` - Initialize category filtering

**Usage:**
```javascript
// Add new project
const projects = [
    {
        category: 'RESIDENTIAL',
        title: 'New Project',
        description: '...',
        tags: ['Tag1', 'Tag2'],
        image: 'path/to/image.png'
    },
    // ...
];

// Automatically renders on DOM ready
```

### Skills Module (`js/modules/skills.js`)

**Exports:**
- `skills` - Array of skill data
- `renderSkills()` - Render skills grid

**Usage:**
```javascript
// Add new skill
const skills = [
    {
        icon: '🔧',
        name: 'New Skill',
        description: 'Description...'
    },
    // ...
];
```

### Education Module (`js/modules/education.js`)

**Exports:**
- `education` - Array of education/certification data
- `renderEducation()` - Render education timeline

**Usage:**
```javascript
// Add new education item
const education = [
    {
        year: '2024',
        degree: 'Certification Name',
        school: 'Institution'
    },
    // ...
];
```

### Services Module (`js/modules/services.js`)

**Exports:**
- `services` - Array of service offerings
- `renderServices()` - Render service cards

**Usage:**
```javascript
// Add new service
const services = [
    {
        name: 'Service Name',
        price: 'Custom Quote',
        description: '...',
        features: ['Feature 1', '...'],
        icon: '📐',
        popular: false
    },
    // ...
];
```

### Page Animations Module (`js/utils/page-animations.js`)

**Responsibilities:**
- Initialize AOS library
- Handle hero background animations
- Manage scroll-triggered animations
- Parallax effects

**Key Functions:**
```javascript
initHeroBackground()        // Mouse parallax & twinkling dots
addCardAnimations()         // Stagger animations for cards
initScrollAnimations()      // Intersection Observer setup
```

---

## Calculator Tool

### Overview

**Location:** `pages/calculators.html`, `js/modules/calculators.js`, `css/components/calculators.css`

A professional construction cost estimator with two calculation modes:

1. **Building Estimation** - Complete project cost breakdown
2. **RCC Slab Calculation** - Concrete slab material requirements

### Building Calculator

#### Material Constants (per sq.ft)

```javascript
const MATERIAL_CONSTANTS = {
    cement: 0.4,        // bags per sq.ft
    steel: 4.0,         // kg per sq.ft
    sand: 0.044,        // m³ per sq.ft
    aggregate: 0.088    // m³ per sq.ft
};
```

#### Finishing Quality Rates

```javascript
const FINISHING_RATES = {
    basic: 450,         // ₹ per sq.ft
    standard: 750,      // ₹ per sq.ft
    premium: 1200       // ₹ per sq.ft
};
```

#### Calculation Formula

```javascript
// Material Cost
materialCost = 
    (cement_qty × cement_rate) +
    (steel_qty × steel_rate) +
    (sand_qty × sand_rate) +
    (aggregate_qty × aggregate_rate);

// Labor Cost
laborCost = materialCost × (laborPercent / 100);  // or manual input

// Finishing Cost
finishingCost = area × finishingRate;

// Subtotal
subtotal = materialCost + laborCost + finishingCost;

// Contingency
contingency = subtotal × (contingencyPercent / 100);

// Total
totalCost = subtotal + contingency;
```

#### Input Fields

```html
<!-- Primary Inputs -->
<input id="area" type="number" placeholder="1300">          <!-- Built-up area (sq.ft) -->
<input id="rate" type="number" placeholder="1800">          <!-- Rate per sq.ft -->

<!-- Labor Toggle -->
<input id="laborAuto" type="checkbox" checked>              <!-- Auto % or manual -->
<input id="laborPercent" type="number" value="40">          <!-- Labor % -->
<input id="laborManual" type="number" style="display:none"> <!-- Manual amount -->

<!-- Finishing Quality -->
<select id="finishingQuality">
    <option value="basic">Basic - ₹450/sq.ft</option>
    <option value="standard" selected>Standard - ₹750/sq.ft</option>
    <option value="premium">Premium - ₹1200/sq.ft</option>
</select>

<!-- Contingency -->
<input id="contingency" type="number" value="7">            <!-- Contingency % -->

<!-- Material Rates (Optional - uses defaults if empty) -->
<input id="cementRate" type="number" placeholder="420">     <!-- ₹ per bag -->
<input id="steelRate" type="number" placeholder="65">       <!-- ₹ per kg -->
<input id="sandRate" type="number" placeholder="1500">      <!-- ₹ per m³ -->
<input id="aggregateRate" type="number" placeholder="1400"> <!-- ₹ per m³ -->
```

#### Output Display

```javascript
// Cost Breakdown
totalCost           // Total project cost
materialCost        // Material cost
laborCost           // Labor cost
finishingCost       // Finishing cost
contingencyCost     // Contingency amount

// Material Quantities
cement              // Bags
steel               // Kilograms
sand                // Cubic meters
aggregate           // Cubic meters
```

### RCC Slab Calculator

#### Slab Constants (M20 Grade)

```javascript
const SLAB_CONSTANTS = {
    cementPerCubicMeter: 8,     // bags per m³
    steelPercent: 0.01          // 1% of volume
};
```

#### Calculation Formula

```javascript
// Convert inputs
areaInSqM = slabArea × 0.092903;          // sq.ft to sq.m
thicknessInM = slabThickness × 0.3048;    // ft to m

// Concrete volume
concreteVolume = areaInSqM × thicknessInM;

// Cement required
cementRequired = concreteVolume × 8;       // bags

// Steel required
steelRequired = concreteVolume × 7850 × 0.01;  // kg
// (7850 kg/m³ is density of steel)
```

#### Input Fields

```html
<input id="slabArea" type="number" placeholder="1300">      <!-- Slab area (sq.ft) -->
<input id="slabThickness" type="number" value="0.41">       <!-- Thickness (ft) -->
```

#### Output Display

```javascript
concreteVolume      // m³
cementRequired      // bags
steelRequired       // kg
```

### JavaScript Functions

```javascript
// Main calculation functions
calculateBuilding()     // Calculate building estimate
calculateSlab()         // Calculate slab requirements
resetForm()             // Reset all inputs and outputs

// Helper functions
formatCurrency(amount)          // Format as Indian Rupees
formatNumber(num, decimals)     // Format with locale
toggleLaborInput()              // Switch labor input mode
validateBuildingInputs()        // Validate inputs
validateSlabInputs()            // Validate slab inputs
getDefaultRates()               // Get default material rates

// Display functions
displayBuildingResults(results)  // Show building results
displaySlabResults(results)      // Show slab results
resetBuildingResults()           // Clear building results
resetSlabResults()               // Clear slab results
```

### Calculator UI Structure

```html
<div class="calc-page">
    <main class="calc-main">
        <div class="calc-grid">
            <!-- Left: Input Section -->
            <section class="calc-input-section">
                <!-- Inputs -->
            </section>
            
            <!-- Right: Results Section -->
            <section class="calc-results-section">
                <!-- Building Results Card -->
                <div class="calc-result-card" id="buildingResults">...</div>
                
                <!-- Slab Results Card -->
                <div class="calc-result-card" id="slabResults">...</div>
                
                <!-- Info Card -->
                <div class="calc-info-card">...</div>
            </section>
        </div>
    </main>
</div>
```

---

## Content Management

### Adding a New Project

**File:** `js/modules/projects.js`

```javascript
const projects = [
    // Add this object
    {
        category: 'RESIDENTIAL',  // or 'COMMERCIAL'
        title: 'Your Project Title',
        description: 'Detailed description of the project, design approach, and key features...',
        tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
        image: '../assets/images/projects/your-image.png'
    },
    // Existing projects...
];
```

**Image Requirements:**
- Format: PNG or JPG
- Recommended size: 1200×800px (3:2 ratio)
- Max file size: 500KB (optimize with tools like TinyPNG)
- Location: `assets/images/projects/`

### Adding a New Skill

**File:** `js/modules/skills.js`

```javascript
const skills = [
    // Add this object
    {
        icon: '🔧',  // Emoji or FontAwesome class
        name: 'Skill Name',
        description: 'Brief 1-2 sentence description of the skill'
    },
    // Existing skills...
];
```

### Adding a New Service

**File:** `js/modules/services.js`

```javascript
const services = [
    // Add this object
    {
        name: 'Service Name',
        price: 'Custom Quote',  // or '₹5000'
        description: 'Brief service description',
        features: [
            'Feature or deliverable 1',
            'Feature or deliverable 2',
            'Feature or deliverable 3',
            // Up to 5-6 features recommended
        ],
        icon: '📐',
        popular: false  // Set to true for "RECOMMENDED" badge
    },
    // Existing services...
];
```

### Adding Education/Certification

**File:** `js/modules/education.js`

```javascript
const education = [
    // Add this object
    {
        year: '2024',
        degree: 'Certification or Degree Name',
        school: 'Institution Name'
    },
    // Existing education...
];
```

### Updating Personal Information

#### Contact Details

**Files:** `pages/about.html`, `index.html` (footer)

```html
<!-- About page contact card -->
<a href="mailto:your.email@example.com" class="contact-link">
    <span class="contact-icon">✉️</span>
    <span>your.email@example.com</span>
</a>

<a href="tel:+911234567890" class="contact-link">
    <span class="contact-icon">📱</span>
    <span>+91-1234567890</span>
</a>
```

#### Resume/CV

1. Update file in `assets/files/Biswajit_Deb_Barman__CV.pdf`
2. Update download link filename if changed:

```html
<!-- In all HTML files -->
<a href="./assets/files/YOUR_NEW_CV_NAME.pdf" download class="btn-nav-cta">
    DOWNLOAD RESUME
</a>
```

#### Social Media Links

**Files:** All footer sections

```html
<div class="footer-column">
    <h4>Connect</h4>
    <a href="https://www.linkedin.com/in/your-profile/" target="_blank">LinkedIn</a>
    <a href="https://www.facebook.com/your-profile" target="_blank">Facebook</a>
    <a href="https://www.instagram.com/your-username/" target="_blank">Instagram</a>
</div>
```

---

## Customization Guide

### Changing Brand Colors

**File:** `css/base/variables.css`

```css
:root {
  /* Update these values */
  --color-primary: #YOUR_PRIMARY_COLOR;
  --color-accent: #YOUR_ACCENT_COLOR;
  
  /* Optional: Update derived colors */
  --color-primary-dark: /* darker version */;
  --color-primary-light: /* lighter version */;
}
```

**Color Selection Tips:**
- Use a tool like [Coolors](https://coolors.co/) or [Adobe Color](https://color.adobe.com/)
- Ensure sufficient contrast (WCAG AA minimum: 4.5:1 for text)
- Test on both light and dark backgrounds

### Changing Fonts

#### 1. Select Fonts

Visit [Google Fonts](https://fonts.google.com/) and choose:
- **Display font** (for headings) - Bold, impactful
- **Body font** (for text) - Readable, comfortable

#### 2. Update HTML

**In all HTML files** (`<head>` section):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=YOUR_DISPLAY_FONT:wght@400;600;700&family=YOUR_BODY_FONT:wght@300;400;500&display=swap"
  rel="stylesheet"
/>
```

#### 3. Update CSS Variables

**File:** `css/base/variables.css`

```css
:root {
  --font-display: "YOUR_DISPLAY_FONT", sans-serif;
  --font-body: "YOUR_BODY_FONT", sans-serif;
}
```

### Adjusting Spacing

**File:** `css/base/variables.css`

```css
:root {
  /* Global spacing scale */
  --spacing-xs: 0.5rem;    /* Decrease/increase all by same ratio */
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 5rem;
}
```

### Customizing Animations

#### Disable All Animations (for accessibility)

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }
}
```

#### Adjust Animation Speed

**File:** `css/base/variables.css`

```css
:root {
  --transition-duration: 0.3s;  /* Global animation speed */
  --transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

#### Custom Animation

```css
@keyframes yourAnimationName {
  from { /* start state */ }
  to { /* end state */ }
}

.your-element {
  animation: yourAnimationName 0.6s ease-out;
}
```

### Logo/Branding

#### Replace Logo

1. Create logo files:
   - **Main logo:** 200×60px (PNG, transparent background)
   - **Favicon:** 32×32px (ICO or PNG)

2. Save to `assets/icons/`

3. Update HTML:

```html
<!-- In all HTML files -->
<div class="logo">
  <a href="./index.html">
    <img src="./assets/icons/YOUR_LOGO.png" alt="Your Name" class="logo-img" />
  </a>
</div>

<!-- Favicon -->
<link rel="icon" type="image/png" href="./assets/icons/YOUR_FAVICON.ico" />
```

---

## Development Workflow

### Local Development Setup

#### Option 1: VS Code Live Server (Recommended)

1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"
4. Browser auto-refreshes on save

#### Option 2: Python Simple Server

```bash
# Navigate to project directory
cd civil-engineer-portfolio

# Python 3
python -m http.server 8000

# Open browser to http://localhost:8000
```

#### Option 3: Node.js HTTP Server

```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Open browser to http://localhost:8080
```

### File Organization Best Practices

1. **Images:**
   - Optimize before adding (use TinyPNG, Squoosh, etc.)
   - Use descriptive filenames: `project-residential-2bedroom.png`
   - Maintain aspect ratios (3:2 for projects)

2. **CSS:**
   - One component per file
   - Use BEM naming when applicable
   - Comment complex selectors

3. **JavaScript:**
   - One module per feature
   - Document functions with comments
   - Use consistent naming conventions

### Code Style Guidelines

#### HTML

```html
<!-- Use semantic HTML5 elements -->
<section class="about-section">
  <h2 class="section-title">About Me</h2>
  <p class="section-description">...</p>
</section>

<!-- Accessibility: Always include alt text -->
<img src="image.png" alt="Descriptive text" />

<!-- Use data attributes for JavaScript hooks -->
<button data-filter="residential">Residential</button>
```

#### CSS

```css
/* BEM Naming: block__element--modifier */
.project-card { }
.project-card__title { }
.project-card--featured { }

/* Group related properties */
.element {
  /* Display & Box Model */
  display: flex;
  padding: 1rem;
  
  /* Typography */
  font-size: 1rem;
  color: #000;
  
  /* Visual */
  background: #fff;
  border: 1px solid #ccc;
  
  /* Animation */
  transition: all 0.3s ease;
}
```

#### JavaScript

```javascript
// Use const/let (no var)
const projects = [...];
let currentFilter = 'all';

// Descriptive function names (verb + noun)
function renderProjects() { }
function filterProjectsByCategory(category) { }

// Comment complex logic
// Calculate material cost based on area and rates
const materialCost = calculateMaterialCost(area, rates);

// Consistent formatting
function exampleFunction(param1, param2) {
    if (condition) {
        doSomething();
    }
    
    return result;
}
```

### Testing Checklist

#### Visual Testing

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile devices (iOS Safari, Chrome Mobile)
- [ ] Verify all images load
- [ ] Check responsive breakpoints
- [ ] Verify all links work
- [ ] Test form inputs (calculator)

#### Functional Testing

- [ ] Navigation menu opens/closes
- [ ] Project filtering works
- [ ] Calculator produces correct results
- [ ] Smooth scroll works
- [ ] Download resume link works
- [ ] External links open in new tab

#### Performance Testing

- [ ] Run Lighthouse audit (target 90+)
- [ ] Check image sizes (<500KB each)
- [ ] Verify no console errors
- [ ] Test page load speed

#### Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast meets WCAG AA
- [ ] All images have alt text
- [ ] Focus indicators visible

---

## Deployment

### GitHub Pages Deployment

#### Initial Setup

1. **Create GitHub Repository**
   ```bash
   # In project directory
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin master
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `master` (or `main`)
   - Folder: `/root`
   - Click Save

3. **Access Your Site**
   - URL: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
   - Propagation time: 1-5 minutes

#### Updating Deployed Site

```bash
# Make changes to files
git add .
git commit -m "Update projects section"
git push origin master

# Site updates automatically (may take 1-2 minutes)
```

#### Custom Domain (Optional)

1. Purchase domain (Namecheap, GoDaddy, etc.)

2. Add DNS records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

3. Add CNAME file to repository root:
   ```
   yourdomain.com
   ```

4. In GitHub Settings → Pages:
   - Custom domain: `yourdomain.com`
   - Enforce HTTPS: ✓

### Alternative: Netlify Deployment

#### Option 1: Drag & Drop

1. Create account at [netlify.com](https://www.netlify.com/)
2. Drag project folder onto Netlify drop zone
3. Site deploys instantly

#### Option 2: GitHub Integration

1. Connect Netlify to GitHub account
2. Select repository
3. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/`
4. Auto-deploys on git push

#### Custom Domain on Netlify

1. Domain settings → Add custom domain
2. Update DNS at domain registrar
3. Enable HTTPS (automatic via Let's Encrypt)

### Alternative: Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd civil-engineer-portfolio
vercel

# Follow prompts
```

---

## Troubleshooting

### Common Issues

#### 1. Animations Not Working

**Symptom:** AOS animations don't trigger

**Solutions:**
```javascript
// Check if AOS is initialized
if (typeof AOS !== 'undefined') {
    AOS.init();
    console.log('AOS initialized');
}

// Refresh AOS after dynamic content
AOS.refresh();
```

#### 2. Images Not Loading

**Symptom:** Broken image icons

**Solutions:**
- Verify file paths (case-sensitive on Linux/Mac)
- Check file extensions (.png vs .PNG)
- Ensure images exist in `assets/images/`
- Use relative paths: `../assets/images/file.png`

#### 3. Mobile Menu Not Closing

**Symptom:** Menu stays open after clicking link

**Solution:**
```javascript
// In main.js, add to nav link click handlers
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});
```

#### 4. Calculator Not Calculating

**Symptom:** Results show "₹ --"

**Solutions:**
```javascript
// Add error logging
function calculateBuilding() {
    console.log('Calculate clicked');
    const area = parseFloat(document.getElementById('area').value);
    console.log('Area:', area);
    
    if (!area) {
        console.error('No area entered');
        alert('Please enter built-up area');
        return;
    }
    // ... rest of function
}
```

#### 5. Styles Not Applying

**Symptom:** Page looks unstyled or broken

**Solutions:**
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
- Check browser console for CSS errors
- Verify `main.css` imports all component files
- Check for CSS syntax errors (missing `;` or `}`)

#### 6. GitHub Pages 404 Error

**Symptom:** Repository exists but shows 404

**Solutions:**
- Wait 5-10 minutes for propagation
- Verify Settings → Pages shows "Your site is live at..."
- Check branch name matches deployment setting
- Ensure `index.html` is in repository root

### Browser Console Debugging

**Open Developer Tools:**
- Chrome/Edge: F12 or Ctrl+Shift+I
- Firefox: F12 or Ctrl+Shift+K
- Safari: Cmd+Option+I (enable in Preferences first)

**Common Console Messages:**

```javascript
// Good - Modules loading correctly
✓ Social links initialized
✓ Modules loaded: Skills, Projects, Education, Services
✓ AOS animations initialized

// Bad - Script errors
Uncaught ReferenceError: renderProjects is not defined
// Solution: Check if projects.js is loaded in HTML

// Bad - File not found
Failed to load resource: 404 (Not Found)
// Solution: Check file path and spelling
```

### Performance Optimization

#### Optimize Images

```bash
# Use online tools:
# - TinyPNG: https://tinypng.com/
# - Squoosh: https://squoosh.app/

# Or command line (requires imagemagick):
convert input.png -resize 1200x800 -quality 85 output.png
```

#### Lazy Loading

```html
<!-- Add loading="lazy" to images below fold -->
<img src="image.png" alt="Description" loading="lazy" />
```

#### Minify CSS/JS (Optional)

For production, consider minifying:

```bash
# Install clean-css
npm install -g clean-css-cli

# Minify CSS
cleancss -o main.min.css main.css

# Update HTML
<link rel="stylesheet" href="./css/main.min.css" />
```

---

## Additional Resources

### Learning Resources

- **HTML/CSS:** [MDN Web Docs](https://developer.mozilla.org/)
- **JavaScript:** [JavaScript.info](https://javascript.info/)
- **Responsive Design:** [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- **Accessibility:** [WebAIM](https://webaim.org/)

### Tools & Libraries

- **Icons:** [Font Awesome](https://fontawesome.com/), [Heroicons](https://heroicons.com/)
- **Colors:** [Coolors](https://coolors.co/), [Adobe Color](https://color.adobe.com/)
- **Images:** [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/)
- **Optimization:** [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)

### Testing Tools

- **Lighthouse:** Built into Chrome DevTools
- **PageSpeed Insights:** [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
- **Wave Accessibility:** [https://wave.webaim.org/](https://wave.webaim.org/)
- **Responsive Test:** [http://responsivetesttool.com/](http://responsivetesttool.com/)

---

## Version History

### v1.0.0 (February 2026)
- Initial release
- Homepage with hero section
- Projects showcase with filtering
- About page with education timeline
- Services section with pricing
- Construction cost calculator
- Fully responsive design
- AOS animations
- Modular CSS/JS architecture

---

## Contributing

This is a personal portfolio project, but suggestions are welcome!

**To suggest improvements:**
1. Open an issue on GitHub
2. Describe the enhancement or bug
3. Include screenshots if relevant

---

## License

This project is open source under the MIT License.

**MIT License Summary:**
- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Private use
- ⚠️ Include original license
- ⚠️ No liability/warranty

---

## Contact & Support

**Er. Biswajit Deb Barman**

- 📧 Email: biswajitdebbarman.civil@gmail.com
- 📱 Phone: +91-7602120054
- 💼 LinkedIn: [linkedin.com/in/biswajit-deb-barman](https://www.linkedin.com/in/biswajit-deb-barman/)
- 📘 Facebook: [facebook.com/profile](https://www.facebook.com/profile.php?id=61585030424249)
- 📷 Instagram: [@biswajit.deb.barman](https://www.instagram.com/biswajit.deb.barman/)

---

**Last Updated:** February 9, 2026  
**Documentation Version:** 1.0.0

---

*Building the future, one structure at a time.* 🏗️