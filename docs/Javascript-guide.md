# JavaScript Module Architecture Guide

This document explains how the JavaScript code is organized and how different modules work together.

---

## 📊 Overview

The JavaScript is organized into **modules** following these principles:

1. **Separation of Concerns** — Data, logic, and UI are separate
2. **Single Responsibility** — Each module does one thing well
3. **Pure Functions** — Calculations have no side effects
4. **Reusability** — Utilities can be used anywhere

---

## 🗂️ Module Categories

### 1. Entry Point
**File**: `js/app.js`

**Purpose**: Bootstrap all modules when the page loads.

**What it does**:
- Initializes navigation
- Starts animations
- Renders content (skills, projects, services)
- Sets up page-specific features

**Key code**:
```javascript
document.addEventListener('DOMContentLoaded', () => {
    // Always run
    initNavigation();
    initAOS();
    
    // Page-specific
    if (document.getElementById('skillsGrid')) {
        renderSkills();
    }
    
    if (document.querySelector('.calc-page')) {
        initCalculator();
    }
});
```

**Learning point**: This is the **only** file that directly attaches to `DOMContentLoaded`. All other code is imported here.

---

### 2. Configuration
**File**: `js/config/constants.js`

**Purpose**: Single source of truth for all configuration values.

**Contains**:
- Site metadata (name, email, social links)
- Calculator constants (material rates, conversion factors)
- Animation settings
- Default values

**Why this matters**:
- Change a value once, it updates everywhere
- Easy to maintain
- No "magic numbers" scattered in code

**Example**:
```javascript
// Instead of writing 0.4 everywhere in calculator code:
export const MATERIAL_CONSTANTS = {
  cement: 0.4,  // bags per sq.ft
};

// Now in your code:
import { MATERIAL_CONSTANTS } from '../config/constants.js';
const cementNeeded = area * MATERIAL_CONSTANTS.cement;
```

---

### 3. Data Models
**File**: `js/data/models.js`

**Purpose**: Store all content data in one place.

**Contains**:
- Skills array
- Projects array
- Services array
- Education array

**Why separate data from rendering?**
- **Easy to update** — Change content without touching code
- **Reusable** — Same data can be rendered differently on different pages
- **Translation-ready** — Easy to add multiple languages later

**Example**:
```javascript
export const skills = [
  {
    icon: "📐",
    name: "AutoCAD 2D",
    description: "Proficient in AutoCAD..."
  },
  // ...
];
```

**How it's used**:
```javascript
// In js/modules/skills.js
import { skills } from '../data/models.js';

export function renderSkills() {
  const html = skills.map(skill => `
    <div class="skill-card">
      <div class="skill-icon">${skill.icon}</div>
      <h3>${skill.name}</h3>
      <p>${skill.description}</p>
    </div>
  `).join('');
  
  document.getElementById('skillsGrid').innerHTML = html;
}
```

---

### 4. Feature Modules

These are the main feature modules that handle specific parts of the site.

#### Navigation (`js/modules/navigation.js`)

**Exports**:
- `initNavigation()` — Sets up hamburger menu
- `initNavbarScroll()` — Adds scroll effects

**Key features**:
- Mobile menu toggle
- Click-outside-to-close
- ESC key handler
- Focus trap for accessibility
- Scroll-based styling

**Learning point**: See how event delegation works:
```javascript
// Close menu when clicking a link
navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => closeMenu());
});
```

---

#### Skills (`js/modules/skills.js`)

**Exports**:
- `renderSkills()` — Renders skill cards

**Data source**: `js/data/models.js`

**Simple pattern**:
```javascript
import { skills } from '../data/models.js';
import { byId } from '../utils/dom.js';

export function renderSkills() {
  const grid = byId('skillsGrid');
  if (!grid) return;  // Guard clause
  
  grid.innerHTML = skills
    .map(skill => /* HTML template */)
    .join('');
}
```

**Learning points**:
- **Guard clause** — Exit early if element doesn't exist
- **Array.map()** — Transform data into HTML
- **Template literals** — Embed variables in strings

---

#### Projects (`js/modules/projects.js`)

**Exports**:
- `renderProjects()` — Full gallery
- `renderProjectsPreview()` — First 4 projects only
- `createProjectModal()` — Creates modal element
- `openProjectModal(id)` — Opens modal
- `closeProjectModal()` — Closes modal
- `setupProjectFilter()` — Filter by category

**More complex** because it handles:
- Rendering
- Filtering
- Modal interaction
- Keyboard navigation

**Pattern to study**:
```javascript
// Private helper function (not exported)
function _cardHTML(project) {
  return `<div>...</div>`;
}

// Public function (exported)
export function renderProjects() {
  const html = projects.map(p => _cardHTML(p)).join('');
  // ...
}
```

**Learning point**: Use `_privateFunction` naming to indicate internal helpers.

---

#### Calculator (`js/modules/calculator/`)

This is a **sub-module** with three files:

**File structure**:
```
calculator/
├── index.js    # Orchestration & initialization
├── core.js     # Pure calculation functions
└── ui.js       # DOM reads and writes
```

**Why three files?**
- **Separation of concerns**
- **Testability** — `core.js` has no DOM, easy to test
- **Clarity** — Each file has a clear purpose

##### `calculator/core.js`

**Pure calculation functions**:
```javascript
export function calcBuilding({
  area,
  rate,
  laborAuto,
  // ...
}) {
  // Calculate materials
  const materials = {
    cement: area * MATERIAL_CONSTANTS.cement,
    steel: area * MATERIAL_CONSTANTS.steel,
    // ...
  };
  
  // Calculate costs
  const materialCost = /* ... */;
  const laborCost = /* ... */;
  
  return {
    totalCost,
    materialCost,
    laborCost,
    materials
  };
}
```

**Key principles**:
- **No side effects** — Doesn't modify anything outside itself
- **Deterministic** — Same inputs = same outputs
- **Zero DOM access** — Doesn't read or write to page
- **Returns data** — Caller decides what to do with it

##### `calculator/ui.js`

**DOM interface functions**:
```javascript
export function readBuildingInputs() {
  return {
    area: safeFloat(byId('area')?.value, 0),
    rate: safeFloat(byId('rate')?.value, 0),
    // ...
  };
}

export function displayBuildingResults(results) {
  byId('totalCost').textContent = formatCurrency(results.totalCost);
  byId('cement').textContent = `${formatNumber(results.materials.cement)} bags`;
  // ...
}
```

**Key principles**:
- **Read** user inputs from form
- **Write** results to DOM
- **No calculations** — Just I/O

##### `calculator/index.js`

**Orchestrates the flow**:
```javascript
export function runBuildingCalc() {
  // 1. Read from UI
  const inputs = readBuildingInputs();
  
  // 2. Validate
  if (!validateBuildingInputs(inputs.area, inputs.rate)) return;
  
  // 3. Calculate
  const results = calcBuilding(inputs);
  
  // 4. Display
  displayBuildingResults(results);
}

// Expose to global for HTML onclick
window.calculateBuilding = runBuildingCalc;
```

**Learning point**: This is the **glue** that connects everything.

---

### 5. Utilities

Reusable helper functions used across the project.

#### DOM Utilities (`js/utils/dom.js`)

**13 helper functions** for DOM manipulation:

```javascript
// Shorthand querySelector
export function qs(selector, ctx = document) {
  return ctx.querySelector(selector);
}

// Get element by ID
export function byId(id) {
  return document.getElementById(id);
}

// Show element
export function show(el, display = 'block') {
  if (!el) return;
  el.style.display = display;
}

// Hide element
export function hide(el) {
  if (!el) return;
  el.style.display = 'none';
}
```

**Why?**
- **Less typing** — `qs('.btn')` vs `document.querySelector('.btn')`
- **Null safety** — `show()` checks if element exists
- **Consistency** — Same patterns everywhere

---

#### General Helpers (`js/utils/helpers.js`)

**11 utility functions**:

```javascript
// Format currency
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
}

// Safe float parsing
export function safeFloat(value, fallback = 0) {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n : fallback;
}

// Debounce function calls
export function debounce(fn, wait = 250) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}
```

**When to use**:
- **formatCurrency** — Displaying ₹ amounts
- **safeFloat** — Reading user inputs safely
- **debounce** — Optimizing scroll/resize handlers

---

#### Validation (`js/utils/validation.js`)

**12 validation functions**:

```javascript
// Validate email format
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Check if value is in range
export function isInRange(value, min, max) {
  const n = parseFloat(value);
  return Number.isFinite(n) && n >= min && n <= max;
}

// Calculator-specific
export function validateBuildingInputs(area, rate) {
  if (!isPositiveNumber(area)) {
    alert('Please enter valid area');
    return false;
  }
  if (!isPositiveNumber(rate)) {
    alert('Please enter valid rate');
    return false;
  }
  return true;
}
```

**Pattern**: All validators return `true`/`false`.

---

#### Animations (`js/utils/animations.js`)

**14 animation functions**:

```javascript
// Initialize AOS library
export function initAOS() {
  if (typeof AOS === 'undefined') return;
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true
  });
}

// Stagger-reveal cards as they enter viewport
export function initSkillCardAnimations(ctx = document) {
  const cards = qsa('.skill-card', ctx);
  
  // Hide initially
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
  });
  
  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = cards.indexOf(entry.target);
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 80);
      }
    });
  });
  
  cards.forEach(card => observer.observe(card));
}
```

**Learning point**: Intersection Observer is a powerful API for scroll-based animations.

---

## 🔄 Data Flow Example

Let's trace a complete user action through the modules:

### User clicks "Calculate Estimate" button

**1. HTML** (`calculators.html`):
```html
<button onclick="calculateBuilding()">Calculate Estimate</button>
```

**2. Global function** (exposed by `calculator/index.js`):
```javascript
window.calculateBuilding = runBuildingCalc;
```

**3. Orchestration** (`calculator/index.js`):
```javascript
export function runBuildingCalc() {
  const inputs = readBuildingInputs();  // → ui.js
  if (!validateBuildingInputs(inputs.area, inputs.rate)) return;  // → validation.js
  const results = calcBuilding(inputs);  // → core.js
  displayBuildingResults(results);  // → ui.js
}
```

**4. Read inputs** (`calculator/ui.js`):
```javascript
export function readBuildingInputs() {
  return {
    area: safeFloat(byId('area')?.value, 0),  // → helpers.js, dom.js
    rate: safeFloat(byId('rate')?.value, 0),
    // ...
  };
}
```

**5. Validate** (`utils/validation.js`):
```javascript
export function validateBuildingInputs(area, rate) {
  if (!isPositiveNumber(area)) {  // → helpers.js
    alert('Invalid area');
    return false;
  }
  // ...
  return true;
}
```

**6. Calculate** (`calculator/core.js`):
```javascript
export function calcBuilding(params) {
  // Pure calculation
  const materials = {
    cement: params.area * MATERIAL_CONSTANTS.cement,  // → constants.js
    // ...
  };
  
  const totalCost = /* calculation */;
  
  return { totalCost, materials };
}
```

**7. Display** (`calculator/ui.js`):
```javascript
export function displayBuildingResults(results) {
  byId('totalCost').textContent = formatCurrency(results.totalCost);  // → helpers.js, dom.js
  // ...
}
```

**Flow diagram**:
```
User clicks button
      ↓
HTML onclick → window.calculateBuilding()
      ↓
calculator/index.js → runBuildingCalc()
      ↓
calculator/ui.js → readBuildingInputs()
      ↓
utils/validation.js → validateBuildingInputs()
      ↓
calculator/core.js → calcBuilding()
      ↓
calculator/ui.js → displayBuildingResults()
      ↓
User sees results
```

---

## 🎯 Key Patterns to Learn

### 1. Module Pattern

**Export functions**:
```javascript
// skills.js
export function renderSkills() { /* ... */ }
export function updateSkill(id) { /* ... */ }
```

**Import in another file**:
```javascript
// app.js
import { renderSkills } from './modules/skills.js';
renderSkills();
```

---

### 2. Guard Clauses

**Exit early** if conditions aren't met:
```javascript
export function renderProjects() {
  const grid = byId('projectsGrid');
  if (!grid) return;  // Guard clause
  
  // Rest of function only runs if grid exists
  grid.innerHTML = /* ... */;
}
```

---

### 3. Array Methods

**Transform data** with `map()`, `filter()`, `find()`:

```javascript
// Transform array into HTML
const html = projects.map(p => `<div>${p.title}</div>`).join('');

// Filter by category
const residential = projects.filter(p => p.category === 'RESIDENTIAL');

// Find one item
const project = projects.find(p => p.id === 5);
```

---

### 4. Template Literals

**Embed variables** in strings:
```javascript
const name = "Biswajit";
const greeting = `Hello, ${name}!`;

const html = `
  <div class="card">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  </div>
`;
```

---

### 5. Optional Chaining

**Safe property access**:
```javascript
// Old way
const value = element ? element.value : '';

// New way
const value = element?.value || '';
```

---

### 6. Nullish Coalescing

**Provide defaults**:
```javascript
// Use value if it exists, otherwise use default
const rate = userRate ?? 1800;
```

---

## 🧪 Testing Mental Model

Even without a testing framework, you can **mentally test** your functions:

### Pure Function Test
```javascript
// calcBuilding is pure - same inputs, same outputs
const result1 = calcBuilding({ area: 1000, rate: 1800 });
const result2 = calcBuilding({ area: 1000, rate: 1800 });
// result1 === result2 (always!)
```

### Side Effects Test
```javascript
// Does this function modify anything outside itself?
// If NO → Pure function ✅
// If YES → Side effect ⚠️
```

### DOM Test
```javascript
// Can I test this without a browser?
// If YES → Good separation ✅
// If NO → Consider refactoring
```

---

## 📚 Further Learning

### Recommended Reading Order

1. **Start with `app.js`** — See how everything connects
2. **Read `data/models.js`** — Understand the data structure
3. **Study `modules/skills.js`** — Simplest module
4. **Move to `modules/projects.js`** — More complex
5. **Deep dive `calculator/`** — Best practices pattern
6. **Explore `utils/`** — Reusable helpers

### Concepts to Master

- **ES6 Modules** — import/export
- **Array methods** — map, filter, find, reduce
- **DOM manipulation** — querySelector, innerHTML
- **Event handling** — addEventListener
- **Async patterns** — Understanding the event loop
- **Functional programming** — Pure functions, immutability

---

## 💡 Pro Tips

1. **Always use guard clauses** at the start of functions
2. **Keep functions small** — One thing per function
3. **Name things clearly** — `renderProjects()` not `doStuff()`
4. **Comment the "why"** not the "what"
5. **Use constants** instead of magic numbers
6. **Group related code** in the same module
7. **Test in the browser console** as you build

---

**Remember**: Good code is code that's easy to understand and change. These patterns help achieve that!