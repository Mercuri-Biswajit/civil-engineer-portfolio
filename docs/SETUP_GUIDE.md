# Setup Guide

This guide will help you set up and customize your portfolio website.

## Table of Contents
1. [Initial Setup](#initial-setup)
2. [Customizing Content](#customizing-content)
3. [Updating Personal Information](#updating-personal-information)
4. [Adding Projects](#adding-projects)
5. [Styling Guide](#styling-guide)
6. [Deployment](#deployment)

---

## Initial Setup

### 1. Download the Project

**Option A: Clone from GitHub**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

**Option B: Download ZIP**
- Download the ZIP file
- Extract to your desired location
- Open the folder in your code editor

### 2. Test Locally

**Method 1: Simple Double-Click**
- Double-click `index.html` to open in your browser
- Navigate between pages using the menu

**Method 2: Using Python (Recommended)**
```bash
# Navigate to project folder
cd path/to/portfolio

# Python 3
python -m http.server 8000

# Open browser and go to: http://localhost:8000
```

**Method 3: Using VS Code Live Server**
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Site will open automatically in browser

### 3. File Structure Overview

```
Your Project/
├── index.html              ← Homepage
├── pages/
│   ├── projects.html       ← Projects page
│   └── about.html          ← About page
├── css/                    ← All styling files
├── scripts/                ← JavaScript data files
└── assets/                 ← Images, PDFs, logos
```

---

## Customizing Content

### Edit Personal Information

**Location:** `index.html` and `pages/about.html`

**Find and replace:**
```html
<!-- Name -->
Er. Biswajit Deb Barman → Your Name

<!-- Title -->
CIVIL ENGINEER → Your Title

<!-- Contact Info -->
biswajitdebbarman@gmail.com → your@email.com
+91-7602120054 → Your Phone
```

### Update Resume/CV

**Location:** `assets/pdf/`

1. Delete `Biswajit_Deb_Barman__CV.pdf`
2. Add your resume PDF
3. Update all references in HTML files:

```html
<!-- Find this: -->
href="./assets/pdf/Biswajit_Deb_Barman__CV.pdf"

<!-- Replace with: -->
href="./assets/pdf/Your_Resume_Name.pdf"
```

### Change Logo

**Location:** `assets/logo/`

1. Add your logo (PNG format recommended)
2. Update in all HTML files:

```html
<!-- Find: -->
src="./assets/logo/My__Logo.png"

<!-- Replace with: -->
src="./assets/logo/your_logo.png"
```

---

## Updating Personal Information

### Social Media Links

**Files to edit:** All HTML files (index.html, pages/projects.html, pages/about.html)

**Find in footer section:**
```html
<a href="https://www.linkedin.com/in/biswajit-deb-barman/" target="_blank">LinkedIn</a>
<a href="https://www.facebook.com/profile.php?id=61585030424249" target="_blank">Facebook</a>
<a href="https://www.instagram.com/biswajit.deb.barman/" target="_blank">Instagram</a>
```

**Replace with your URLs**

### About Me Section

**File:** `pages/about.html`

**Find section:**
```html
<h3 class="about-subtitle">Professional Summary</h3>
<p class="about-description">
  <!-- Edit this text with your summary -->
</p>
```

**Replace with your bio and professional summary**

---

## Adding Projects

**File:** `scripts/projects.js`

### Step 1: Add Project Image

1. Save your project image to `assets/projects_images/`
2. Recommended format: PNG or JPG
3. Recommended size: 1200x800px

### Step 2: Add Project Data

Open `scripts/projects.js` and add to the `projects` array:

```javascript
const projects = [
    // Existing projects...
    
    // Your new project
    {
        category: 'RESIDENTIAL',  // Options: 'RESIDENTIAL' or 'COMMERCIAL'
        title: 'Your Project Title',
        description: 'Detailed description of your project. Include dimensions, features, and key highlights.',
        tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'],
        image: '../assets/projects_images/your-project-image.png'
    },
];
```

### Step 3: Test

1. Refresh the homepage
2. Check "Featured Work" section (shows first 3 projects)
3. Go to Projects page
4. Test filter buttons
5. Verify image displays correctly

---

## Styling Guide

### Changing Colors

**File:** `style.css`

**Find the `:root` section:**
```css
:root {
  --color-primary: #1E293B;        /* Main navy blue */
  --color-primary-dark: #0F172A;   /* Darker navy */
  --color-accent: #64748B;         /* Gray accent */
  --color-bg-dark: #F5F7FA;        /* Light background */
}
```

**Change to your colors:**
```css
:root {
  --color-primary: #YOUR_COLOR;
  --color-accent: #YOUR_COLOR;
  /* etc. */
}
```

**💡 Tip:** Use a color picker tool or websites like [Coolors.co](https://coolors.co/) to choose a color scheme.

### Changing Fonts

**Step 1:** Choose fonts from [Google Fonts](https://fonts.google.com/)

**Step 2:** Update in all HTML files:
```html
<!-- Find: -->
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Work+Sans:wght@300;400;500&display=swap" rel="stylesheet">

<!-- Replace with your fonts -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

**Step 3:** Update CSS variables:
```css
:root {
  --font-display: "YourFont", sans-serif;
  --font-body: "YourFont", sans-serif;
}
```

---

## Deployment

### Option 1: GitHub Pages (Free)

**Step 1:** Create GitHub account and repository

**Step 2:** Upload files
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

**Step 3:** Enable GitHub Pages
1. Go to repository → Settings
2. Click "Pages" in sidebar
3. Source: Select "main" branch
4. Folder: Select "/ (root)"
5. Click "Save"

**Step 4:** Access your site
- URL: `https://yourusername.github.io/portfolio`
- Wait 2-3 minutes for deployment

### Option 2: Netlify (Free)

**Step 1:** Create account at [Netlify.com](https://www.netlify.com/)

**Step 2:** Deploy
- Method A: Drag and drop your project folder
- Method B: Connect GitHub repository

**Step 3:** Configure
- Site name: Choose custom name
- Domain: Get free subdomain or use custom domain

### Option 3: Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd path/to/portfolio
vercel

# Follow prompts
```

---

## Updating Education

**File:** `scripts/education.js`

```javascript
const education = [
    {
        year: '2024',
        degree: 'Your Degree Name',
        school: 'Your School/University'
    },
    // Add more...
];
```

---

## Updating Skills

**File:** `scripts/skills.js`

```javascript
const skills = [
    {
        icon: '📐',  // Use any emoji
        name: 'Skill Name',
        description: 'Description of this skill'
    },
    // Add more...
];
```

**💡 Emoji Resources:**
- [Emojipedia](https://emojipedia.org/)
- [Get Emoji](https://getemoji.com/)

---

## Updating Services/Pricing

**File:** `scripts/pricing.js`

```javascript
const pricing = [
    {
        name: 'Service Name',
        price: 'Custom Quote',  // or '₹5,000' etc.
        description: 'Brief service description',
        features: [
            'Feature 1',
            'Feature 2',
            'Feature 3'
        ],
        icon: '📐',
        popular: false  // Set true to highlight
    },
];
```

---

## Troubleshooting

### Images not showing?
- Check file path is correct
- Check image file exists in folder
- Check file extension (.png, .jpg)
- Use lowercase filenames

### Styles not updating?
- Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Check CSS file is linked correctly

### JavaScript not working?
- Check console for errors: `F12` → Console tab
- Verify script file paths
- Check for syntax errors

---

## Support

If you need help:
1. Check this documentation
2. Review code comments
3. Check browser console for errors
4. Contact: biswajitdebbarman@gmail.com

---

## Tips for Success

✅ **Keep backups** - Always save a copy before major changes  
✅ **Test locally** - Always test before deploying  
✅ **Use version control** - Commit changes regularly with Git  
✅ **Optimize images** - Compress images before uploading  
✅ **Mobile first** - Always test on mobile devices  
✅ **SEO matters** - Use descriptive titles and alt tags  

---

**Happy Customizing! 🚀**