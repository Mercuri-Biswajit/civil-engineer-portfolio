# Customization Guide

Complete guide to customizing every aspect of your portfolio website.

## Table of Contents
1. [Content Customization](#content-customization)
2. [Visual Customization](#visual-customization)
3. [Layout Customization](#layout-customization)
4. [Advanced Customization](#advanced-customization)

---

## Content Customization

### 1. Hero Section (Homepage)

**File:** `index.html`

**Edit title and description:**
```html
<div class="hero-content">
  <div class="hero-label">CIVIL ENGINEER | YOUR NAME</div>
  <h1 class="hero-title">
    <span class="line">PROFESSIONAL</span>
    <span class="line">YOUR PROFESSION</span>
    <span class="line highlight">SERVICES</span>
  </h1>
  <p class="hero-description">
    Your custom description goes here...
  </p>
</div>
```

### 2. Skills Section

**File:** `scripts/skills.js`

**Add or edit skills:**
```javascript
const skills = [
    {
        icon: '📐',              // Any emoji
        name: 'Skill Name',
        description: 'Detailed description of your skill and expertise in this area.'
    },
    {
        icon: '🏗️',
        name: 'Another Skill',
        description: 'Another skill description...'
    },
];
```

**Icon ideas:**
- Technical: 📐 🔧 ⚙️ 💻 📊 📈
- Design: 🎨 ✏️ 🖌️ 📝
- Construction: 🏗️ 🏢 🏠 🏭
- Environment: 🌱 ♻️ 🌍

### 3. Projects Section

**File:** `scripts/projects.js`

**Full project template:**
```javascript
{
    category: 'RESIDENTIAL',  // or 'COMMERCIAL'
    title: 'Project Name',
    description: 'Comprehensive description including:
                  - Project scope and objectives
                  - Key features and highlights
                  - Dimensions and specifications
                  - Unique challenges solved
                  - Technologies/methods used',
    tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
    image: '../assets/projects_images/project-name.png'
}
```

**Tag suggestions:**
- Types: Residential Planning, Commercial Design, Mixed-Use
- Features: RCC Structure, Open Plan, Energy Efficient
- Scope: New Construction, Renovation, Extension
- Specialties: Structural Analysis, Vastu Compliant, Smart Home

### 4. Services/Pricing Section

**File:** `scripts/pricing.js`

**Full service template:**
```javascript
{
    name: 'Service Name',
    price: 'Custom Quote',  // or specific price like '₹10,000'
    description: 'Brief 1-2 sentence description of the service',
    features: [
        'Feature or deliverable 1',
        'Feature or deliverable 2',
        'Feature or deliverable 3',
        'Feature or deliverable 4',
        'Feature or deliverable 5'
    ],
    icon: '📐',
    popular: false  // Set to true to highlight as recommended
}
```

**Setting a popular service:**
```javascript
popular: true  // This adds a "RECOMMENDED" badge and highlights the card
```

### 5. Education Section

**File:** `scripts/education.js`

```javascript
const education = [
    {
        year: '2024',
        degree: 'Full Degree Name (e.g., M.Tech in Structural Engineering)',
        school: 'Full Institution Name with Location'
    },
    {
        year: '2020',
        degree: 'B.Tech Civil Engineering',
        school: 'University Name, City, State'
    },
];
```

### 6. About Page Content

**File:** `pages/about.html`

**Professional Summary:**
```html
<p class="about-text">
  Replace this paragraph with your professional summary.
  Include your experience, specializations, and what makes you unique.
  Keep it concise but informative - 2-3 paragraphs maximum.
</p>
```

**Core Skills:**
```html
<div class="competency-item">
  <span class="competency-icon">📐</span>
  <span class="competency-name">Your Skill Name</span>
</div>
```

**Contact Information:**
```html
<a href="mailto:your@email.com" class="contact-link">
  <span class="contact-icon">✉️</span>
  <span>your@email.com</span>
</a>
```

---

## Visual Customization

### 1. Color Scheme

**File:** `style.css`

**Complete color variables:**
```css
:root {
  /* Primary Colors */
  --color-primary: #1E293B;        /* Main brand color */
  --color-primary-dark: #0F172A;   /* Darker shade for hover */
  
  /* Accent Colors */
  --color-accent: #64748B;         /* Secondary color */
  
  /* Background Colors */
  --color-bg-dark: #F5F7FA;        /* Light gray background */
  --color-bg-darker: #FFFFFF;      /* White sections */
  --color-bg-card: #FFFFFF;        /* Card backgrounds */
  
  /* Text Colors */
  --color-text: #1E293B;           /* Main text */
  --color-text-dim: #64748B;       /* Lighter text */
  
  /* Border Colors */
  --color-border: #E2E8F0;         /* Borders and dividers */
}
```

**Applying a new color scheme:**

Example - Blue & Orange:
```css
:root {
  --color-primary: #2563EB;        /* Blue */
  --color-primary-dark: #1E40AF;   /* Dark Blue */
  --color-accent: #F97316;         /* Orange */
  --color-bg-dark: #F0F9FF;        /* Light Blue */
  --color-bg-darker: #FFFFFF;
  --color-bg-card: #FFFFFF;
  --color-text: #1E293B;
  --color-text-dim: #64748B;
  --color-border: #DBEAFE;
}
```

Example - Green & Purple:
```css
:root {
  --color-primary: #059669;        /* Green */
  --color-primary-dark: #047857;   /* Dark Green */
  --color-accent: #7C3AED;         /* Purple */
  --color-bg-dark: #ECFDF5;        /* Light Green */
  --color-bg-darker: #FFFFFF;
  --color-bg-card: #FFFFFF;
  --color-text: #1E293B;
  --color-text-dim: #64748B;
  --color-border: #D1FAE5;
}
```

### 2. Typography

**File:** `style.css`

**Font variables:**
```css
:root {
  --font-display: "Oswald", sans-serif;     /* Headings */
  --font-body: "Work Sans", sans-serif;     /* Body text */
}
```

**Recommended Google Font combinations:**

**Professional:**
```css
--font-display: "Roboto", sans-serif;
--font-body: "Open Sans", sans-serif;
```

**Modern:**
```css
--font-display: "Montserrat", sans-serif;
--font-body: "Lato", sans-serif;
```

**Elegant:**
```css
--font-display: "Playfair Display", serif;
--font-body: "Source Sans Pro", sans-serif;
```

**Bold:**
```css
--font-display: "Bebas Neue", cursive;
--font-body: "Nunito", sans-serif;
```

**Don't forget to update the Google Fonts link in HTML:**
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

### 3. Spacing

**File:** `style.css`

```css
:root {
  --spacing-xs: 0.5rem;   /* 8px */
  --spacing-sm: 1rem;     /* 16px */
  --spacing-md: 2rem;     /* 32px */
  --spacing-lg: 4rem;     /* 64px */
  --spacing-xl: 5rem;     /* 80px */
}
```

**Increase spacing for a more airy design:**
```css
:root {
  --spacing-xs: 0.75rem;
  --spacing-sm: 1.5rem;
  --spacing-md: 3rem;
  --spacing-lg: 6rem;
  --spacing-xl: 8rem;
}
```

### 4. Shadows & Effects

**File:** `style.css`

```css
:root {
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow-sm: 0 2px 8px rgba(30, 41, 59, 0.08);
  --shadow-md: 0 4px 16px rgba(30, 41, 59, 0.12);
  --shadow-lg: 0 8px 32px rgba(30, 41, 59, 0.15);
}
```

**Softer shadows:**
```css
:root {
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.10);
}
```

**Stronger shadows:**
```css
:root {
  --shadow-sm: 0 4px 12px rgba(30, 41, 59, 0.12);
  --shadow-md: 0 8px 24px rgba(30, 41, 59, 0.18);
  --shadow-lg: 0 16px 48px rgba(30, 41, 59, 0.25);
}
```

---

## Layout Customization

### 1. Navigation Bar

**File:** `css/header.css`

**Change navbar height:**
```css
.nav-container {
  padding: 1rem 2rem;  /* Increase for taller navbar */
}
```

**Make navbar transparent:**
```css
.navbar {
  background: transparent;
  backdrop-filter: none;
}
```

**Sticky vs Fixed navbar:**
```css
/* Current (fixed) */
.navbar {
  position: fixed;
}

/* Change to sticky */
.navbar {
  position: sticky;
  top: 0;
}
```

### 2. Hero Section Layout

**File:** `css/components/hero.css`

**Change grid ratio:**
```css
.hero .container {
  grid-template-columns: 1.2fr 1fr;  /* Current: text larger than image */
  grid-template-columns: 1fr 1fr;    /* Equal split */
  grid-template-columns: 1fr 1.5fr;  /* Image larger than text */
}
```

**Full-width hero (no image):**
```css
.hero .container {
  grid-template-columns: 1fr;
  text-align: center;
}

.hero-visual {
  display: none;
}
```

### 3. Projects Grid

**File:** `css/components/projects.css`

**Change grid columns:**
```css
.projects-grid {
  /* Current: Auto-fit based on 320px minimum */
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  
  /* Fixed 2 columns */
  grid-template-columns: repeat(2, 1fr);
  
  /* Fixed 3 columns */
  grid-template-columns: repeat(3, 1fr);
  
  /* Fixed 4 columns for wide screens */
  grid-template-columns: repeat(4, 1fr);
}
```

**Change card aspect ratio:**
```css
.project-image-real {
  height: 280px;      /* Current */
  height: 200px;      /* Shorter */
  height: 400px;      /* Taller */
  aspect-ratio: 16/9; /* Maintain ratio */
}
```

### 4. Footer

**File:** `css/footer.css`

**Change footer layout:**
```css
.footer-content {
  /* Current: 2 columns */
  grid-template-columns: 1.5fr 1fr;
  
  /* 3 equal columns */
  grid-template-columns: repeat(3, 1fr);
  
  /* Single column */
  grid-template-columns: 1fr;
}
```

---

## Advanced Customization

### 1. Adding New Sections

**Example: Adding a Testimonials Section**

**Step 1:** Create data file `scripts/testimonials.js`
```javascript
const testimonials = [
    {
        name: 'Client Name',
        role: 'Company/Position',
        text: 'Testimonial text here...',
        image: '../assets/images/client.jpg'
    },
];
```

**Step 2:** Add HTML to `index.html`
```html
<section class="testimonials">
  <div class="container">
    <div class="section-header">
      <span class="section-number">06</span>
      <h2 class="section-title">TESTIMONIALS</h2>
    </div>
    <div id="testimonialsGrid"></div>
  </div>
</section>
```

**Step 3:** Create CSS in `css/components/`
```css
.testimonials {
  padding: var(--spacing-xl) 0;
  background: var(--color-bg-dark);
}
```

**Step 4:** Link script in HTML
```html
<script src="./scripts/testimonials.js" defer></script>
```

### 2. Adding Animations

**File:** `css/utilities.css`

**Custom animation:**
```css
@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slideInFromLeft 0.6s ease-out;
}
```

**Apply to elements:**
```html
<div class="skill-card animate-slide-in">
  <!-- content -->
</div>
```

### 3. Custom Buttons

**File:** `css/utilities.css`

**Add new button style:**
```css
.btn-custom {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  transition: var(--transition);
}

.btn-custom:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
}
```

### 4. Dark Mode Toggle

**Step 1:** Add variables for dark mode
```css
:root[data-theme="dark"] {
  --color-bg-dark: #1E293B;
  --color-bg-darker: #0F172A;
  --color-bg-card: #334155;
  --color-text: #F1F5F9;
  --color-text-dim: #94A3B8;
  --color-border: #475569;
}
```

**Step 2:** Add toggle button to navbar
```html
<button id="themeToggle" class="theme-toggle">🌙</button>
```

**Step 3:** Add JavaScript
```javascript
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
```

### 5. Smooth Scroll

**Add to `script.js`:**
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
```

---

## Mobile Responsiveness

### Breakpoints Used

```css
/* Small phones */
@media (max-width: 480px) { }

/* Tablets and large phones */
@media (max-width: 768px) { }

/* Tablets landscape and small laptops */
@media (max-width: 1024px) { }
```

### Testing Responsive Design

1. **Browser DevTools:**
   - Press `F12`
   - Click device toolbar icon
   - Select different device sizes

2. **Real devices:**
   - Test on actual phone/tablet
   - Use your local server IP

3. **Online tools:**
   - Responsinator.com
   - Browserstack.com

---

## Performance Optimization

### 1. Image Optimization

**Before upload:**
- Resize to appropriate dimensions
- Compress using TinyPNG.com or Squoosh.app
- Use WebP format when possible

**In HTML:**
```html
<img src="image.jpg" loading="lazy" alt="Description">
```

### 2. Minify CSS/JS

**Online tools:**
- CSSMinifier.com
- JSCompress.com

**Or use build tools:**
```bash
npm install -g clean-css-cli uglify-js
cleancss -o style.min.css style.css
uglifyjs script.js -o script.min.js
```

### 3. Enable Caching

**Add to `.htaccess` (if using Apache):**
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## Tips & Best Practices

✅ **Always test after changes** - Check in browser after every modification  
✅ **Keep backups** - Save a copy before major changes  
✅ **Use meaningful names** - Name files and classes clearly  
✅ **Comment your code** - Add comments for complex sections  
✅ **Stay consistent** - Use same naming conventions throughout  
✅ **Mobile first** - Always test responsive design  
✅ **Optimize images** - Compress before uploading  
✅ **Version control** - Use Git to track changes  

---

**Need more help?** Check `SETUP_GUIDE.md` or contact support!