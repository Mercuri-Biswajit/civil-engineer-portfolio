# CIVIL ENGINEER PORTFOLIO - COMPLETE UPDATE GUIDE

## 📁 File Structure

```
portfolio/
├── index.html          (Home page)
├── projects.html       (Projects page)
├── about.html          (About/Education page)
├── blog.html          (Blog page)
├── styles.css         (Single stylesheet for ALL pages)
└── script.js          (JavaScript for ALL pages)
```

## 🎯 Quick Start Guide

### 1. Download all files to a single folder
All pages share the same CSS and JavaScript files, so keep them together!

### 2. Open any HTML file in your browser
- **index.html** - Start here (home page)
- Click navigation links to view other pages
- All pages work together seamlessly

## 📝 UPDATING YOUR CONTENT

### ALL content updates happen in `script.js`

Open `script.js` and you'll find these data arrays at the top:
- `skills` - Your technical skills
- `projects` - Your engineering projects
- `education` - Your degrees and certifications
- `blogPosts` - Your blog articles

---

## 🛠️ STEP-BY-STEP: UPDATING SKILLS

**Location:** `script.js` - Lines 7-40

### To Add a New Skill:

```javascript
{
    icon: '🔧',              // Choose an emoji icon
    name: 'Skill Name',      // Your skill title
    description: 'Brief description of your expertise in this area'
}
```

### Example - Adding "Geotechnical Analysis":

```javascript
const skills = [
    {
        icon: '⛰️',
        name: 'Geotechnical Analysis',
        description: 'Expert in soil mechanics, foundation design, and site investigation techniques'
    },
    // ... your other skills ...
];
```

### To Remove a Skill:
Simply delete the entire block (including the curly braces and comma)

### Emoji Icon Suggestions:
- 🏗️ Construction/Building
- 📐 Design/CAD
- 🔬 Testing/Lab Work
- 💻 Software/Tech
- 🌱 Sustainability
- 📊 Analysis/Data
- 🛠️ Tools/Equipment
- ⚙️ Engineering/Mechanical

---

## 🏗️ STEP-BY-STEP: UPDATING PROJECTS

**Location:** `script.js` - Lines 43-95

### To Add a New Project:

```javascript
{
    category: 'INFRASTRUCTURE',        // Type of project (affects filtering)
    title: 'Project Name',             // Project title
    description: 'Detailed description of the project, your role, and impact',
    tags: ['Tag1', 'Tag2', 'Tag3'],   // Related technologies/methods
    icon: '🌉'                         // Visual icon for the project
}
```

### Complete Example:

```javascript
{
    category: 'WATER RESOURCES',
    title: 'Coastal Protection System',
    description: 'Designed and implemented a comprehensive coastal erosion prevention system including seawalls, breakwaters, and beach nourishment strategies protecting 5km of coastline.',
    tags: ['Coastal Engineering', 'Erosion Control', 'Environmental'],
    icon: '🌊'
}
```

### Available Categories (for filtering):
- INFRASTRUCTURE
- RESIDENTIAL
- COMMERCIAL
- TRANSPORTATION
- INDUSTRIAL
- WATER RESOURCES (add this if needed)

### To Add a New Category:
1. Add projects with the new category name
2. Update filter buttons in `projects.html` (Line 52):
```html
<button class="filter-btn" data-filter="WATER RESOURCES">WATER RESOURCES</button>
```

---

## 🎓 STEP-BY-STEP: UPDATING EDUCATION

**Location:** `script.js` - Lines 98-119

### To Add Education/Certification:

```javascript
{
    year: '2020 - 2024',              // Year or year range
    degree: 'Degree/Certification',    // Full title
    school: 'Institution Name'         // Where you got it
}
```

### Examples:

```javascript
// Bachelor's Degree
{
    year: '2016 - 2020',
    degree: 'Bachelor of Science in Civil Engineering',
    school: 'State University'
}

// Professional Certification
{
    year: '2023',
    degree: 'Project Management Professional (PMP)',
    school: 'Project Management Institute'
}

// Online Course
{
    year: '2024',
    degree: 'Advanced Structural Analysis Certificate',
    school: 'Online Engineering Academy'
}
```

---

## 📰 STEP-BY-STEP: UPDATING BLOG POSTS

**Location:** `script.js` - Lines 122-165

### To Add a Blog Post:

```javascript
{
    date: 'Feb 1, 2026',              // Publication date
    category: 'TECHNOLOGY',            // Post category (for filtering)
    title: 'Your Blog Post Title',     // Main heading
    excerpt: 'Brief summary or first paragraph of your post...',
    icon: '📝'                         // Visual icon
}
```

### Complete Example:

```javascript
{
    date: 'Feb 15, 2026',
    category: 'INNOVATION',
    title: 'AI in Structural Design: The Next Frontier',
    excerpt: 'Exploring how artificial intelligence and machine learning are revolutionizing structural optimization, load analysis, and design automation in modern civil engineering...',
    icon: '🤖'
}
```

### Available Categories:
- TECHNOLOGY
- SUSTAINABILITY
- ANALYSIS
- MATERIALS
- INNOVATION

### To Add a New Blog Category:
Update filter buttons in `blog.html` (Line 51):
```html
<button class="filter-btn" data-filter="INNOVATION">INNOVATION</button>
```

---

## 💰 STEP-BY-STEP: UPDATING PRICING

**Location:** `script.js` - After blog posts data (around line 170)

### To Edit Pricing Plans:

```javascript
{
    name: 'Plan Name',
    price: 'Your Price or Custom Quote',
    description: 'Brief description of the plan',
    features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Up to 3 design revisions'
    ],
    icon: '📐',
    popular: false  // Set to true for recommended plan
}
```

### Current Pricing Structure:

The portfolio includes 4 pricing plans:
1. **Architectural Plan** - Site planning, floor plans, 3D visualization
2. **Structural Plan** - Structural analysis, foundation design, reinforcement
3. **Cost Estimate** - Material quantities, BOQ, cost breakdown
4. **Complete Package** - All services combined (marked as popular/recommended)

### To Change Prices:

Replace `'Custom Quote'` with your actual price:
```javascript
price: '₹15,000'
```

### To Add/Remove Features:

Simply edit the features array:
```javascript
features: [
    'Your feature 1',
    'Your feature 2',
    'New feature 3',
    'Up to 3 design revisions'
]
```

### Important Note About Additional Designs:

At the bottom of the pricing section, there's a note about additional designs:
```
Each plan includes up to 3 design revisions. 
Additional designs are available at ₹1,000 per design.
```

To change this rate, update in `index.html` (around line 133):
```html
<p><strong>Note:</strong> Each plan includes up to 3 design revisions. Additional designs are available at ₹1,000 per design.</p>
```

---

## 🎨 CUSTOMIZING YOUR WEBSITE

### CHANGING COLORS

**Location:** `styles.css` - Lines 1-15

```css
:root {
    /* Main Colors - Change these! */
    --color-primary: #0A84FF;       /* Primary blue */
    --color-primary-dark: #0066CC;  /* Darker blue */
    --color-accent: #00D4FF;        /* Accent cyan */
    
    /* Background Colors */
    --color-bg-dark: #0A0E27;       /* Main background */
    --color-bg-darker: #060920;     /* Darker sections */
    --color-bg-card: #131835;       /* Cards background */
}
```

### Color Scheme Ideas:

**Professional Blue** (Current):
```css
--color-primary: #0A84FF;
--color-accent: #00D4FF;
```

**Engineering Orange**:
```css
--color-primary: #FF6B35;
--color-accent: #FFB800;
```

**Tech Green**:
```css
--color-primary: #00D084;
--color-accent: #00FFB3;
```

**Modern Purple**:
```css
--color-primary: #6C5CE7;
--color-accent: #A29BFE;
```

---

### CHANGING FONTS

**Location:** 
1. `index.html` (and all other HTML files) - Line 10
2. `styles.css` - Lines 14-15

**Step 1:** Visit [Google Fonts](https://fonts.google.com) and choose your fonts

**Step 2:** Copy the import code and replace in ALL HTML files:

```html
<!-- OLD -->
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Work+Sans:wght@300;400;500&display=swap" rel="stylesheet">

<!-- NEW (example with Roboto and Montserrat) -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
```

**Step 3:** Update CSS variables in `styles.css`:

```css
--font-display: 'Montserrat', sans-serif;  /* For headings */
--font-body: 'Roboto', sans-serif;         /* For body text */
```

---

## 📄 CUSTOMIZING INDIVIDUAL PAGES

### HOME PAGE (index.html)

**Hero Section** (Lines 38-54):
```html
<div class="hero-label">YOUR TITLE</div>
<h1 class="hero-title">
    <span class="line">YOUR</span>
    <span class="line">CUSTOM</span>
    <span class="line highlight">HEADLINE</span>
</h1>
<p class="hero-description">
    Your personal tagline or mission statement
</p>
```

**Statistics** (Lines 78-93):
```html
<div class="stat-number">5+</div>          <!-- Change number -->
<div class="stat-label">Years Experience</div>  <!-- Change label -->
```

---

### PROJECTS PAGE (projects.html)

**Page Header** (Lines 34-43):
- Update the introduction text
- Change the description

**Filter Categories** (Lines 48-55):
- Add or remove category filter buttons
- Make sure they match your project categories in `script.js`

---

### ABOUT PAGE (about.html)

**Professional Summary** (Lines 48-58):
Replace the entire paragraph with your own background

**Core Competencies** (Rendered by JavaScript):
These come from a hardcoded section. To change them, edit `about.html` directly (Lines 60-83)

**Contact Information** (Lines 108-121):
```html
<a href="mailto:YOUR_EMAIL@example.com" class="contact-link">
    <span class="contact-icon">✉️</span>
    <span>YOUR_EMAIL@example.com</span>
</a>
```

Update:
- Email address
- Phone number
- Location

**Statistics Sidebar** (Lines 93-107):
Change numbers to match your experience

**Download Resume Button** (Line 125):
```html
<a href="path/to/your-resume.pdf" class="btn btn-primary btn-block">DOWNLOAD CV</a>
```

---

### BLOG PAGE (blog.html)

**Newsletter Section** (Lines 70-82):
- Update the heading and description
- The form is currently just a demo - connect it to your email service

---

## 🔗 UPDATING LINKS & SOCIAL MEDIA

### Navigation Logo (All Pages)
In each HTML file (Lines 17-19):
```html
<div class="logo">
    <span class="logo-icon">⬡</span>
    <span class="logo-text">YOUR NAME</span>  <!-- Change this -->
</div>
```

### Footer Social Links (All Pages)
Around Lines 130-140 in each HTML file:
```html
<div class="footer-column">
    <h4>Connect</h4>
    <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
    <a href="mailto:your.email@example.com" target="_blank">Email</a>
    <a href="https://github.com/yourprofile" target="_blank">GitHub</a>
</div>
```

Add more social links:
```html
<a href="https://twitter.com/yourhandle" target="_blank">Twitter</a>
<a href="https://instagram.com/yourhandle" target="_blank">Instagram</a>
```

---

## 🖼️ ADDING REAL IMAGES

### Currently using emoji icons. To use real images:

**For Projects:**

1. Save your images in the same folder (e.g., `bridge-project.jpg`)

2. In `script.js`, update the project object:
```javascript
{
    category: 'INFRASTRUCTURE',
    title: 'Bridge Project',
    description: '...',
    tags: ['...'],
    image: 'bridge-project.jpg'  // Add this instead of icon
}
```

3. Update the render function in `script.js` (around Line 195):
```javascript
// Find this line:
<div class="project-image">${project.icon}</div>

// Replace with:
<img src="${project.image}" alt="${project.title}" style="width: 100%; height: 280px; object-fit: cover;">
```

**Same process for blog post images!**

---

## 📱 MOBILE RESPONSIVENESS

The site is already fully responsive! It automatically adjusts for:
- **Desktop**: Full layout with all features
- **Tablet**: Adjusted grid layouts
- **Mobile**: Hamburger menu, stacked sections

Test by:
1. Opening in browser
2. Press F12 (Developer Tools)
3. Click device toolbar icon
4. Try different screen sizes

---

## 🚀 PUBLISHING YOUR WEBSITE

### Option 1: GitHub Pages (FREE & EASY)

1. Create account at [github.com](https://github.com)
2. Create new repository named `yourusername.github.io`
3. Upload all your files
4. Visit `https://yourusername.github.io`

### Option 2: Netlify (FREE)

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free
3. Drag your folder into Netlify
4. Get instant URL: `yourname.netlify.app`
5. Optional: Connect custom domain

### Option 3: Your Own Domain

1. Buy domain (Google Domains, Namecheap, etc.)
2. Use GitHub Pages or Netlify
3. Point your domain to the service
4. Professional URL: `www.yourname.com`

---

## 🛠️ TROUBLESHOOTING

### Problem: Pages not linking correctly
**Solution:** Make sure all files are in the same folder. Links in navigation should be:
```html
<a href="index.html">HOME</a>
<a href="projects.html">PROJECTS</a>
<a href="about.html">ABOUT</a>
<a href="blog.html">BLOG</a>
```

### Problem: Styles not loading
**Solution:** Ensure `styles.css` is in the same folder and each HTML file has:
```html
<link rel="stylesheet" href="styles.css">
```

### Problem: Content not showing
**Solution:** 
1. Open browser console (F12)
2. Look for JavaScript errors
3. Check that `script.js` is in the same folder
4. Verify array syntax (commas, brackets)

### Problem: Filter buttons not working
**Solution:** Make sure category names in `script.js` EXACTLY match the data-filter values in HTML:
```html
<!-- In HTML -->
<button data-filter="INFRASTRUCTURE">

<!-- In JavaScript -->
category: 'INFRASTRUCTURE',  // Must match exactly
```

### Problem: Mobile menu not working
**Solution:** Check that IDs match in HTML:
```html
<div class="hamburger" id="hamburger">
<div class="nav-menu" id="navMenu">
```

---

## ✅ PRE-LAUNCH CHECKLIST

Before publishing, verify:

**Content:**
- [ ] All personal information updated
- [ ] Real project details added
- [ ] Education/certifications current
- [ ] Contact information correct
- [ ] Social media links work

**Design:**
- [ ] Colors match your brand
- [ ] Fonts are readable
- [ ] All images load properly
- [ ] Logo/branding updated

**Functionality:**
- [ ] All navigation links work
- [ ] Filter buttons work on Projects page
- [ ] Filter buttons work on Blog page
- [ ] Mobile menu opens/closes
- [ ] Forms work (if applicable)

**Testing:**
- [ ] Tested on desktop
- [ ] Tested on tablet
- [ ] Tested on mobile
- [ ] Tested in Chrome
- [ ] Tested in Firefox/Safari
- [ ] All external links open in new tab

**SEO & Meta:**
- [ ] Page titles updated
- [ ] Add meta descriptions (optional)
- [ ] Add favicon (optional)

---

## 💡 ADVANCED CUSTOMIZATIONS

### Add a Contact Form

In `about.html`, add after line 125:
```html
<div class="contact-card">
    <h3>Send Message</h3>
    <form id="contactForm">
        <input type="text" placeholder="Name" required>
        <input type="email" placeholder="Email" required>
        <textarea placeholder="Message" rows="4" required></textarea>
        <button type="submit" class="btn btn-primary btn-block">SEND</button>
    </form>
</div>
```

### Add Smooth Scroll Effect

Already included! Just make sure links start with `#` for same-page sections.

### Add Google Analytics

Add before closing `</head>` in all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

---

## 📚 HELPFUL RESOURCES

- **HTML/CSS Reference**: [MDN Web Docs](https://developer.mozilla.org)
- **JavaScript Guide**: [JavaScript.info](https://javascript.info)
- **Color Schemes**: [Coolors.co](https://coolors.co)
- **Google Fonts**: [fonts.google.com](https://fonts.google.com)
- **Icons**: [Emojipedia](https://emojipedia.org) or [Font Awesome](https://fontawesome.com)
- **Images**: [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com)

---

## 🎯 NEXT STEPS

1. **Update all content** in `script.js` with your real information
2. **Customize colors** in `styles.css` to match your brand
3. **Add your contact info** in all HTML footer sections
4. **Test everything** on different devices
5. **Publish** using GitHub Pages or Netlify
6. **Share** your new portfolio!

---

**Questions?** Remember to:
- Check the browser console for errors (F12)
- Verify file names and paths are correct
- Make sure all files are in the same folder
- Test one change at a time

**Good luck with your portfolio! 🚀**
