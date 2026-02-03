# Civil Engineer Portfolio Website

A modern, multi-page portfolio website with a bold blue and dark theme, specifically designed for civil engineers to showcase their work, skills, and expertise.

## 🌟 Features

- **4 Separate Pages**: Home, Projects, About, and Blog
- **Single Stylesheet**: One `styles.css` file for all pages
- **Easy Content Updates**: All content managed through simple arrays in `script.js`
- **Bold Modern Design**: Eye-catching blue theme with smooth animations
- **Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- **Interactive Filters**: Filter projects and blog posts by category
- **Professional Layout**: Clean, organized sections with clear hierarchy

## 📁 File Structure

```
portfolio/
├── index.html          - Home page with hero, skills, and stats
├── projects.html       - Full project showcase with filtering
├── about.html          - About, education, and contact info
├── blog.html          - Blog posts with category filters
├── styles.css         - Complete styling for all pages
└── script.js          - Data and functionality for all pages
```

## 🚀 Quick Start

1. **Download all 6 files** to a single folder
2. **Open `index.html`** in your web browser
3. **Navigate** between pages using the top menu
4. **Start customizing** - follow the UPDATE-GUIDE.md

## 📄 Page Overview

### Home Page (index.html)
- Hero section with bold headline
- Core expertise (skills) showcase
- Quick statistics
- Featured projects preview
- **Pricing section with 4 service plans**
- **Blog preview (latest 3 posts)**
- Call-to-action buttons

### Projects Page (projects.html)
- Complete project portfolio
- Category filtering (Infrastructure, Residential, Commercial, etc.)
- Project cards with descriptions and tags
- Professional project showcase

### About Page (about.html)
- Professional summary
- Core competencies grid
- Education timeline
- Quick stats sidebar
- Contact information
- Resume download button

### Blog Page (blog.html)
- Blog post grid
- Category filtering
- Newsletter signup section
- Article previews with read more links

## 🎨 Design Features

- **Color Scheme**: Professional blue (#0A84FF) on dark backgrounds
- **Typography**: Oswald (headings) + Work Sans (body)
- **Animations**: Smooth fade-ins and hover effects
- **Modern Layout**: Grid-based responsive design
- **Blueprint Elements**: Engineering-inspired visual details

## ✏️ Easy Customization

### Update Your Content (script.js)

All your content is stored in easy-to-edit arrays:

```javascript
// Add/remove skills
const skills = [
    {
        icon: '🏗️',
        name: 'Structural Design',
        description: 'Your description here'
    },
    // Add more...
];

// Add/remove projects
const projects = [
    {
        category: 'INFRASTRUCTURE',
        title: 'Your Project',
        description: 'Project details...',
        tags: ['Tag1', 'Tag2'],
        icon: '🌉'
    },
    // Add more...
];
```

### Change Colors (styles.css)

```css
:root {
    --color-primary: #0A84FF;  /* Change to your color */
    --color-accent: #00D4FF;   /* Accent color */
    /* More variables... */
}
```

### Update Personal Info (HTML files)

- Logo and branding
- Hero section text
- About section content
- Contact information
- Social media links

## 🎯 What You Can Update

✅ Skills and expertise  
✅ Projects and portfolio items  
✅ Education and certifications  
✅ Blog posts and articles  
✅ **Pricing plans and rates**  
✅ Colors and fonts  
✅ Contact information  
✅ Social media links  
✅ Statistics and numbers  
✅ All text content  

## 📱 Responsive Design

The website automatically adapts to:
- **Desktop** (>1024px): Full layout
- **Tablet** (768-1024px): Adjusted grids
- **Mobile** (<768px): Stacked layout with hamburger menu

## 🌐 Publishing Options

### GitHub Pages (FREE)
1. Create repo: `yourusername.github.io`
2. Upload all files
3. Access at: `https://yourusername.github.io`

### Netlify (FREE)
1. Sign up at netlify.com
2. Drag folder to deploy
3. Get URL: `yourname.netlify.app`

### Custom Domain
Connect your own domain (e.g., `www.yourname.com`) to either service above

## 🛠️ Technologies

- **HTML5** - Structure and content
- **CSS3** - Styling with variables and animations
- **Vanilla JavaScript** - No frameworks needed!
- **Google Fonts** - Oswald & Work Sans

## 📖 Documentation

See **UPDATE-GUIDE.md** for:
- Detailed step-by-step instructions
- Code examples for every feature
- Troubleshooting guide
- Publishing instructions
- Advanced customizations

## ✅ Quick Checklist

Before publishing:
- [ ] Update all personal information
- [ ] Add your real projects
- [ ] Update education and certifications
- [ ] Change colors to match your brand
- [ ] Add contact information and social links
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Proofread all content

## 💡 Key Benefits

1. **Professional**: Modern design that stands out
2. **Easy to Update**: No coding knowledge required for content updates
3. **Organized**: Separate pages for different content types
4. **Single CSS**: One file to manage all styles
5. **Fast Loading**: Optimized code, no heavy frameworks
6. **Mobile-First**: Great experience on all devices

## 🎓 Perfect For

- Civil Engineers
- Structural Engineers
- Construction Managers
- Infrastructure Specialists
- Engineering Students
- Anyone in the civil engineering field

## 🔄 Updating Workflow

1. Open `script.js`
2. Find the relevant array (skills, projects, education, or blogPosts)
3. Add/edit/remove items
4. Save and refresh your browser
5. That's it!

---

## 🚀 Get Started Now!

1. Download all files
2. Open `index.html` to preview
3. Open `UPDATE-GUIDE.md` for detailed instructions
4. Start customizing with your information
5. Publish and share!

**Built with 💙 for Civil Engineers**

Need help? Check the UPDATE-GUIDE.md for detailed instructions and troubleshooting!
