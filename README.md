# Er. Biswajit Deb Barman - Portfolio Website

![Portfolio Banner](./assets/images/Hero_Image_Civil_Engineer.png)

## 📋 Overview

Professional portfolio website for **Er. Biswajit Deb Barman**, a Civil Engineer specializing in structural design, architectural planning, and cost estimation services in West Bengal, India.

**Live Website:** [Your Website URL]

## 🚀 Features

- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Project Showcase** - Filterable gallery of residential and commercial projects
- **Service Listings** - Detailed information about architectural, structural, and cost estimation services
- **Interactive Elements** - Smooth scroll animations and hover effects
- **Fast Loading** - Optimized assets and performance
- **SEO Optimized** - Meta tags and semantic HTML for better search visibility

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Vanilla JS for interactivity
- **Google Fonts** - Oswald & Work Sans typography

### Libraries
- **AOS (Animate On Scroll)** - Scroll animations on About page

## 📁 Project Structure

```
portfolio/
├── index.html                 # Homepage
├── style.css                  # Main CSS file (imports all other CSS)
├── script.js                  # Main JavaScript file
│
├── pages/
│   ├── projects.html          # Projects showcase page
│   └── about.html             # About me page
│
├── css/
│   ├── header.css             # Navigation styles
│   ├── footer.css             # Footer styles
│   ├── utilities.css          # Utility classes and reusable styles
│   └── components/
│       ├── hero.css           # Hero section styles
│       ├── projects.css       # Projects section styles
│       └── about.css          # About page styles
│
├── scripts/
│   ├── skills.js              # Skills section data and rendering
│   ├── projects.js            # Projects data and filtering
│   ├── education.js           # Education timeline
│   ├── pricing.js             # Services pricing/information
│   └── about.js               # About page animations
│
├── assets/
│   ├── images/                # General images
│   ├── projects_images/       # Project portfolio images
│   ├── logo/                  # Logo files
│   └── pdf/                   # Resume and documents
│
└── README.md                  # This file
```

## 🎨 Design System

### Color Palette
- **Primary:** #1E293B (Navy Blue)
- **Primary Dark:** #0F172A
- **Accent:** #64748B (Slate Gray)
- **Background:** #F5F7FA (Light Gray)
- **Text:** #1E293B
- **Text Dim:** #64748B
- **Border:** #E2E8F0

### Typography
- **Display Font:** Oswald (Headings)
- **Body Font:** Work Sans (Content)

## 📝 Content Management

### Adding New Projects

Edit `scripts/projects.js`:

```javascript
const projects = [
    {
        category: 'RESIDENTIAL', // or 'COMMERCIAL'
        title: 'Your Project Title',
        description: 'Detailed project description...',
        tags: ['Tag1', 'Tag2', 'Tag3'],
        image: '../assets/projects_images/your-image.png'
    },
    // Add more projects...
];
```

### Adding New Skills

Edit `scripts/skills.js`:

```javascript
const skills = [
    {
        icon: '📐',
        name: 'Skill Name',
        description: 'Skill description...'
    },
    // Add more skills...
];
```

### Updating Education

Edit `scripts/education.js`:

```javascript
const education = [
    {
        year: '2024',
        degree: 'Degree Name',
        school: 'Institution Name'
    },
    // Add more education...
];
```

### Updating Services

Edit `scripts/pricing.js`:

```javascript
const pricing = [
    {
        name: 'Service Name',
        price: 'Custom Quote',
        description: 'Service description...',
        features: ['Feature 1', 'Feature 2'],
        icon: '📐',
        popular: false
    },
    // Add more services...
];
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using VS Code Live Server extension
   Right-click on index.html → "Open with Live Server"
   ```

3. **Start editing**
   - Customize content in JavaScript data files
   - Modify styles in CSS files
   - Update personal information

## 🌐 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select branch (usually `main`) and folder (`/root`)
4. Click Save
5. Your site will be live at `https://yourusername.github.io/portfolio`

### Netlify
1. Create account at [Netlify](https://www.netlify.com/)
2. Drag and drop your project folder
3. Site will be live instantly

### Vercel
```bash
npm i -g vercel
vercel
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- Lighthouse Score: 90+ (Performance)
- Mobile-friendly design
- Optimized images
- Minimal dependencies

## 🔧 Customization

### Changing Colors
Edit CSS variables in `style.css`:

```css
:root {
  --color-primary: #1E293B;
  --color-accent: #64748B;
  /* ... modify colors ... */
}
```

### Changing Fonts
Update Google Fonts link in HTML files:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update CSS variables:

```css
:root {
  --font-display: "YourFont", sans-serif;
  --font-body: "YourFont", sans-serif;
}
```

## 📧 Contact

**Er. Biswajit Deb Barman**
- Email: biswajitdebbarman@gmail.com
- Phone: +91-7602120054
- Location: Chanditala, Raiganj, Uttar Dinajpur, West Bengal, India
- LinkedIn: [linkedin.com/in/biswajit-deb-barman](https://www.linkedin.com/in/biswajit-deb-barman/)
- Facebook: [facebook.com/profile](https://www.facebook.com/profile.php?id=61585030424249)
- Instagram: [@biswajit.deb.barman](https://www.instagram.com/biswajit.deb.barman/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Google Fonts for typography
- AOS library for scroll animations
- Inspiration from modern portfolio designs

## 📝 To-Do / Future Improvements

- [ ] Add contact form with backend integration
- [ ] Add blog section
- [ ] Implement dark mode toggle
- [ ] Add testimonials section
- [ ] Optimize images (convert to WebP)
- [ ] Add more projects to portfolio
- [ ] Implement analytics (Google Analytics)
- [ ] Add loading animations
- [ ] Create a sitemap
- [ ] Add multilingual support

## 🐛 Known Issues

- None currently reported

## 📊 Version History

- **v1.0.0** (Feb 2026) - Initial release
  - Homepage with hero section
  - Projects showcase page
  - About page
  - Responsive design
  - Smooth animations

---

**Made with ❤️ by Er. Biswajit Deb Barman**

*Building the future, one structure at a time.*