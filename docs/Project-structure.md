# Project Structure Documentation

Complete reference for understanding the file organization and how files relate to each other.

---

## 🗂️ Complete File Tree

```
portfolio/
│
├── 📄 index.html                     # Homepage (entry point)
├── 📄 README.md                      # Main documentation (you are here)
├── 📄 .gitignore                     # Files to ignore in version control
│
├── 📁 pages/                         # Additional pages
│   ├── about.html                    # About page
│   ├── projects.html                 # Projects gallery page
│   └── calculators.html              # Calculator page
│
├── 📁 assets/                        # Static assets
│   ├── 📁 images/
│   │   ├── 📁 hero/                  # Hero section images
│   │   │   └── Hero_Image_Civil_Engineer.png
│   │   └── 📁 projects/              # Project portfolio images
│   │       ├── G-Floor_Model_28_x_41__foot.png
│   │       ├── Warehouse_cum_Residential_(G+1)_57_x_47_foot.png
│   │       ├── Warehouse_cum_Residential_46_x_30_foot.png
│   │       └── Ground_Floor_28_x_41_foot.png
│   │
│   ├── 📁 icons/
│   │   ├── My__Logo.png              # Site logo
│   │   └── favicon.ico               # Browser tab icon
│   │
│   └── 📁 files/
│       └── Biswajit_Deb_Barman__CV.pdf  # Resume download
│
├── 📁 css/                           # All stylesheets
│   ├── 📄 main.css                   # Main CSS (imports all others)
│   │
│   ├── 📁 base/                      # Foundation styles
│   │   ├── variables.css             # Design tokens (colors, spacing, etc.)
│   │   └── reset.css                 # CSS reset & normalization
│   │
│   ├── 📁 layout/                    # Page structure
│   │   ├── header.css                # Navigation & navbar
│   │   └── footer.css                # Footer
│   │
│   ├── 📁 components/                # Reusable UI components
│   │   ├── buttons.css               # Button styles & variants
│   │   ├── hero.css                  # Hero section
│   │   ├── skills.css                # Skills grid cards
│   │   └── services.css              # Service offering cards
│   │
│   ├── 📁 pages/                     # Page-specific styles
│   │   ├── about.css                 # About page
│   │   ├── projects.css              # Projects gallery & modal
│   │   └── calculators.css           # Calculator page
│   │
│   └── 📁 utilities/                 # Helper classes
│       ├── utilities.css             # Section headers, CTAs
│       ├── helpers.css               # Display, spacing, text
│       └── animation.css             # Animation utilities
│
└── 📁 js/                            # JavaScript modules
    ├── 📄 app.js                     # Entry point (bootstraps everything)
   │
    ├── 📁 config/                    # Configuration
    │   └── constants.js              # Global constants & defaults
    │
    ├── 📁 data/                      # Data models
    │   └── models.js                 # Skills, projects, services, education
    │
    ├── 📁 modules/                   # Feature modules
    │   ├── navigation.js             # Navbar & hamburger menu
    │   ├── skills.js                 # Skills rendering
    │   ├── services.js               # Services rendering
    │   ├── projects.js               # Projects gallery & modal
    │   ├── education.js              # Education timeline
    │   ├── about.js                  # About page orchestration
    │   │
    │   └── 📁 calculator/            # Calculator feature
    │       ├── index.js              # Initialization
    │       ├── core.js               # Pure calculation functions
    │       └── ui.js                 # DOM interface
    │
    └── 📁 utils/                     # Utilities
        ├── animations.js             # 14 animation helpers
        ├── dom.js                    # 13 DOM utilities
        ├── helpers.js                # 11 general helpers
        └── validation.js             # 12 validation functions
```

---

## 📄 HTML Files

### index.html
**Purpose**: Homepage  
**Sections**:
- Hero (main banner)
- Skills grid
- Projects preview (4 cards)
- Services
- About me teaser

**Dependencies**:
- `css/main.css`
- `js/app.js`
- AOS library (CDN)

**Key IDs**:
- `#navMenu` - Navigation menu
- `#hamburger` - Mobile menu button
- `#skillsGrid` - Skills container
- `#projectsPreview` - Projects preview
- `#servicesGrid` - Services container

---

### pages/about.html
**Purpose**: About page  
**Sections**:
- Page header with animated background
- Skills grid (reused from homepage)
- Education timeline
- Professional summary
- Contact card

**Dependencies**:
- `css/main.css`
- `js/app.js`
- AOS library (CDN)

**Key IDs**:
- `#aboutSkillsGrid` - Skills container
- `#educationTimeline` - Education items

---

### pages/projects.html
**Purpose**: Full projects gallery  
**Sections**:
- Page header
- Filter buttons
- Projects grid (all projects)
- Modal popup

**Dependencies**:
- `css/main.css`
- `js/app.js`
- AOS library (CDN)

**Key IDs**:
- `#projectsGrid` - Projects container
- `#projectModal` - Modal (created dynamically)

**Filter attributes**:
- `data-filter="all"` - Show all
- `data-filter="RESIDENTIAL"` - Filter residential
- `data-filter="COMMERCIAL"` - Filter commercial

---

### pages/calculators.html
**Purpose**: Construction cost calculator  
**Sections**:
- Calculator input form
- Building estimate results
- RCC slab results
- Methodology info card

**Dependencies**:
- `css/main.css`
- `js/app.js`

**Key IDs** (Inputs):
- `#area` - Built-up area
- `#rate` - Rate per sq.ft
- `#laborPercent` - Labor percentage
- `#laborManual` - Manual labor cost
- `#finishingQuality` - Finishing dropdown
- `#contingency` - Contingency %
- `#cementRate` - Cement rate
- `#steelRate` - Steel rate
- `#sandRate` - Sand rate
- `#aggregateRate` - Aggregate rate
- `#slabArea` - Slab area
- `#slabThickness` - Slab thickness

**Key IDs** (Results):
- `#totalCost` - Total project cost
- `#displayMaterialCost` - Material cost
- `#displayLaborCost` - Labor cost
- `#displayFinishingCost` - Finishing cost
- `#displayContingency` - Contingency
- `#cement`, `#steel`, `#sand`, `#aggregate` - Material quantities
- `#slabConcrete`, `#slabCement`, `#slabSteel` - Slab results

---

## 🎨 CSS Files

### Base Layer

#### variables.css
**Purpose**: Design system tokens  
**Contains**:
- Color palette
- Typography scale
- Spacing system
- Effects (shadows, transitions)
- Z-index scale

**Why important**: Change once, update everywhere

---

#### reset.css
**Purpose**: Normalize browser defaults  
**Contains**:
- Box sizing reset
- Margin/padding reset
- Form element normalization
- Accessibility defaults

---

### Layout Layer

#### header.css
**Purpose**: Navigation styles  
**Contains**:
- Fixed navbar
- Logo
- Nav links
- Hamburger menu
- Mobile menu overlay
- Scroll effects

**Key classes**:
- `.navbar` - Main container
- `.nav-menu` - Links container
- `.nav-link` - Individual links
- `.hamburger` - Mobile button
- `.btn-nav-cta` - Download resume button

---

#### footer.css
**Purpose**: Footer styles  
**Contains**:
- Footer layout
- Logo
- Navigation links
- Social links
- Copyright

**Key classes**:
- `.footer` - Main container
- `.footer-brand` - Logo section
- `.footer-links` - Link columns
- `.footer-social` - Social icons

---

### Components Layer

#### buttons.css
**Purpose**: All button variants  
**Contains**:
- Base button styles
- Primary/secondary/outline variants
- Size modifiers (sm, lg, xl)
- Loading state
- Icon buttons
- Mirror effect

**Key classes**:
- `.btn` - Base button
- `.btn-primary` - Primary style
- `.btn-secondary` - Secondary style
- `.btn-outline` - Outline style
- `.btn-sm`, `.btn-lg` - Size variants

---

#### hero.css
**Purpose**: Homepage hero section  
**Contains**:
- Hero layout (grid)
- Hero background gradient
- Hero text animations
- Hero image container
- Blueprint grid effect

**Key classes**:
- `.hero` - Main container
- `.hero-background` - Background layer
- `.hero-content` - Text content
- `.hero-visual` - Image side
- `.blueprint-grid` - Animated grid

---

#### skills.css
**Purpose**: Skills grid cards  
**Contains**:
- Grid layout
- Card design
- Hover effects
- Icon styles

**Key classes**:
- `.skills-grid` - Grid container
- `.skill-card` - Individual card
- `.skill-icon` - Icon
- `.skill-name` - Title
- `.skill-description` - Text

---

#### services.css
**Purpose**: Service offering cards  
**Contains**:
- Card grid
- Pricing display
- Feature lists
- Popular badge
- Mirror effect

**Key classes**:
- `.services-grid` - Grid container
- `.services-card` - Individual card
- `.services-badge` - "Recommended" badge
- `.services-features` - Feature list

---

### Pages Layer

#### about.css
**Purpose**: About page styles  
**Contains**:
- About page layout
- Education timeline
- Contact card
- Animated background shapes
- Highlight items

**Key classes**:
- `.about-page` - Main container
- `.education-timeline` - Timeline container
- `.education-item` - Timeline entry
- `.contact-card` - Contact info card
- `.animated-shape` - Background animation

---

#### projects.css
**Purpose**: Projects gallery & modal  
**Contains**:
- Gallery grid
- Project cards
- Modal popup
- Filter buttons
- Loading states

**Key classes**:
- `.projects-grid` - Grid container
- `.project-card` - Gallery card
- `.project-modal` - Modal overlay
- `.project-modal-content` - Modal content
- `.filter-btn` - Category filters

---

#### calculators.css
**Purpose**: Calculator page  
**Contains**:
- Calculator-specific design tokens
- Input/output layouts
- Result cards
- Button styles
- Responsive grid

**Key classes**:
- `.calc-page` - Page wrapper
- `.calc-input-section` - Left panel
- `.calc-results-section` - Right panel
- `.calc-input-primary` - Main inputs
- `.calc-result-card` - Result containers

---

### Utilities Layer

#### utilities.css
**Purpose**: Reusable patterns  
**Contains**:
- Section headers
- Testimonials
- CTAs
- Contact forms

**Key classes**:
- `.section-header` - Section title
- `.section-number` - Big number
- `.section-title` - Title text

---

#### helpers.css
**Purpose**: Utility classes  
**Contains**:
- Display (flex, grid, hidden)
- Spacing (margin, padding)
- Text (alignment, weight, color)
- Borders
- Shadows

**Key classes**:
- `.flex`, `.grid` - Layout
- `.hidden`, `.visible` - Visibility
- `.text-center`, `.text-left` - Alignment
- `.mt-md`, `.mb-lg` - Margins
- `.rounded`, `.shadow` - Effects

---

#### animation.css
**Purpose**: Animation utilities  
**Contains**:
- Scroll animations
- Loading states
- Fade/slide effects
- Reduced motion support

**Key classes**:
- `.fade-in`, `.fade-in-up` - Fade animations
- `.slide-in-left` - Slide animation
- `.loading-spinner` - Loading state

---

## 📜 JavaScript Files

### Entry Point

#### app.js
**Purpose**: Bootstrap application  
**What it does**:
1. Waits for DOM ready
2. Initializes navigation
3. Starts animations
4. Renders content (skills, projects, services)
5. Sets up page-specific features

**Imports**: All modules  
**Exports**: None (entry point)

---

### Configuration

#### config/constants.js
**Purpose**: Single source of truth  
**Exports**:
- `SITE` - Contact info, social links
- `MATERIAL_CONSTANTS` - Material consumption rates
- `DEFAULT_MATERIAL_RATES` - Default prices
- `FINISHING_RATES` - Finishing quality prices
- `SLAB_CONSTANTS` - RCC slab calculations
- `CONVERSIONS` - Unit conversions
- `CALCULATOR_DEFAULTS` - Default form values
- `AOS_CONFIG` - Animation settings
- `NAVBAR` - Navbar settings

---

### Data

#### data/models.js
**Purpose**: Content data  
**Exports**:
- `skills` - Skills array
- `projects` - Projects array
- `services` - Services array
- `education` - Education array

**Structure**:
```javascript
export const skills = [
  { icon, name, description },
  // ...
];

export const projects = [
  { id, category, title, description, tags, image },
  // ...
];
```

---

### Modules

#### modules/navigation.js
**Purpose**: Navigation behavior  
**Exports**:
- `initNavigation()` - Setup hamburger menu
- `initNavbarScroll()` - Scroll effects

**Events handled**:
- Click on hamburger
- Click on nav links
- Click outside menu
- ESC key press
- Window scroll

---

#### modules/skills.js
**Purpose**: Render skills  
**Exports**:
- `renderSkills()` - Render skill cards

**Uses**:
- `skills` from `data/models.js`
- `byId()` from `utils/dom.js`

---

#### modules/services.js
**Purpose**: Render services  
**Exports**:
- `renderServices()` - Render service cards

**Uses**:
- `services` from `data/models.js`
- `byId()` from `utils/dom.js`

---

#### modules/projects.js
**Purpose**: Projects gallery  
**Exports**:
- `renderProjects()` - Full gallery
- `renderProjectsPreview()` - First 4 only
- `createProjectModal()` - Create modal
- `openProjectModal(id)` - Show project
- `closeProjectModal()` - Hide modal
- `setupProjectFilter()` - Filter buttons

**Uses**:
- `projects` from `data/models.js`
- DOM utilities

---

#### modules/education.js
**Purpose**: Education timeline  
**Exports**:
- `renderEducation()` - Render timeline

**Uses**:
- `education` from `data/models.js`
- `byId()` from `utils/dom.js`

---

#### modules/about.js
**Purpose**: About page orchestration  
**Exports**:
- `initAboutPage()` - Initialize page

**Coordinates**:
- Education rendering
- Skills rendering
- Animations
- Contact effects

---

#### modules/calculator/index.js
**Purpose**: Calculator initialization  
**Exports**:
- `initCalculator()` - Setup calculator
- `runBuildingCalc()` - Building estimate
- `runSlabCalc()` - Slab estimate
- `resetForm()` - Clear form
- `syncLaborToggle()` - Toggle labor input

**Exposes to global**:
- `window.calculateBuilding`
- `window.calculateSlab`
- `window.resetForm`
- `window.toggleLaborInput`

---

#### modules/calculator/core.js
**Purpose**: Pure calculations  
**Exports**:
- `calcBuilding(params)` - Building estimate
- `calcSlab(area, thickness)` - Slab estimate

**Uses**: Constants from `config/constants.js`  
**Zero DOM access** - Easy to test!

---

#### modules/calculator/ui.js
**Purpose**: Calculator UI  
**Exports**:
- `readBuildingInputs()` - Get form values
- `readSlabInputs()` - Get slab values
- `displayBuildingResults(results)` - Show results
- `displaySlabResults(results)` - Show slab results
- `resetForm()` - Clear form
- `syncLaborToggle()` - Toggle visibility

---

### Utilities

#### utils/animations.js
**Purpose**: Animation helpers  
**Exports** (14 functions):
- `initAOS()` - Initialize AOS
- `refreshAOS()` - Refresh after DOM changes
- `initHeroBackground()` - Mouse parallax
- `initHeaderParallax()` - Scroll parallax
- `addCardAnimations()` - AOS attributes
- `addEducationAnimations()` - Education items
- `initScrollAnimations()` - Section observer
- `initSkillCardAnimations()` - Skill stagger
- `initServiceCardAnimations()` - Service stagger
- `initProjectCardAnimations()` - Project stagger
- `addCompetencyEffects()` - Competency hover
- `addContactLinkEffects()` - Contact hover
- `initSmoothAnchors()` - Smooth scroll
- `initResizeHandler()` - Window resize
- `initReducedMotion()` - Accessibility

---

#### utils/dom.js
**Purpose**: DOM utilities  
**Exports** (13 functions):
- `qs(selector)` - querySelector
- `qsa(selector)` - querySelectorAll
- `byId(id)` - getElementById
- `createElement(tag, attrs, html)` - Create element
- `setAttrs(el, attrs)` - Set attributes
- `addClass(el, ...classes)` - Add classes
- `removeClass(el, ...classes)` - Remove classes
- `toggleClass(el, cls)` - Toggle class
- `setHTML(el, html)` - Set innerHTML
- `setText(el, text)` - Set textContent
- `show(el, display)` - Show element
- `hide(el)` - Hide element
- `scrollTo(target, offset)` - Smooth scroll

---

#### utils/helpers.js
**Purpose**: General utilities  
**Exports** (11 functions):
- `formatCurrency(amount)` - Format as ₹
- `formatNumber(number, decimals)` - Format number
- `debounce(fn, wait)` - Debounce function
- `rafThrottle(fn)` - RAF throttle
- `clamp(value, min, max)` - Clamp value
- `lerp(a, b, t)` - Linear interpolation
- `toPercent(value, decimals)` - To percentage
- `capitalize(str)` - Capitalize string
- `isPositiveNumber(value)` - Check positive
- `safeFloat(value, fallback)` - Safe parse
- `uid(prefix)` - Generate unique ID

---

#### utils/validation.js
**Purpose**: Input validation  
**Exports** (12 functions):
- `isNonEmptyString(value)` - Check string
- `isInRange(value, min, max)` - Check range
- `isNonNegative(value)` - Check ≥ 0
- `isPositiveInteger(value)` - Check integer
- `isValidEmail(email)` - Email format
- `isValidIndianPhone(phone)` - Phone format
- `validateBuildingInputs(area, rate)` - Building validation
- `validateSlabInputs(area, thickness)` - Slab validation
- `isValidLaborPercent(value)` - Labor %
- `isValidContingency(value)` - Contingency %
- `isValidMaterialRate(value)` - Material rate
- `isValidSlabThickness(value)` - Slab thickness

---

## 🔗 File Dependencies

### Homepage Flow
```
index.html
    ↓ imports
css/main.css
    ↓ imports
css/base/variables.css
css/base/reset.css
css/layout/header.css
css/components/hero.css
css/components/skills.css
    ↓
index.html
    ↓ imports
js/app.js
    ↓ imports
js/modules/navigation.js
js/modules/skills.js
js/modules/projects.js
    ↓ uses
js/data/models.js
js/utils/dom.js
```

### Calculator Flow
```
calculators.html
    ↓ imports
css/pages/calculators.css
js/app.js
    ↓ imports
js/modules/calculator/index.js
    ↓ imports
js/modules/calculator/core.js
js/modules/calculator/ui.js
    ↓ uses
js/config/constants.js
js/utils/validation.js
js/utils/helpers.js
js/utils/dom.js
```

---

## 📝 Naming Conventions

### Files
- **HTML**: `lowercase.html`
- **CSS**: `lowercase.css`
- **JS**: `camelCase.js`
- **Images**: `Title_Case_With_Underscores.png`

### CSS Classes
- **BEM-inspired**: `.block__element--modifier`
- **Utility**: `.prefix-value` (e.g., `.mt-md`)

### JavaScript
- **Functions**: `camelCase()`
- **Constants**: `UPPER_SNAKE_CASE`
- **Variables**: `camelCase`
- **Private**: `_prefixedCamelCase()`

---

## 🎯 What Goes Where?

### New Content Data
→ `js/data/models.js`

### New Colors/Spacing
→ `css/base/variables.css`

### New Calculator Constants
→ `js/config/constants.js`

### New Component Styles
→ `css/components/yourcomponent.css`

### New Page Styles
→ `css/pages/yourpage.css`

### New Utility Functions
→ `js/utils/helpers.js` or new file in `js/utils/`

### New Feature Module
→ `js/modules/yourfeature.js`

---

## 💡 Pro Tips

1. **Before editing**: Know which file to change
2. **Use search**: Ctrl+F to find where something is defined
3. **Follow patterns**: Look at existing code
4. **Keep structure**: Don't move files without updating imports
5. **Comment changes**: Explain why, not what
6. **Test locally**: After every change
7. **One change at a time**: Easier to debug

---

**Remember**: Good organization makes maintenance easy. Everything has its place!