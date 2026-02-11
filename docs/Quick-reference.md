# Quick Reference Guide

Common tasks and how to accomplish them quickly.

---

## 🎯 Content Updates

### Add a New Project

**File**: `js/data/models.js`

**Steps**:
1. Add image to `assets/images/projects/`
2. Open `js/data/models.js`
3. Add to `projects` array:
   ```javascript
   {
     id: 5,  // Next number
     category: "RESIDENTIAL",  // or "COMMERCIAL"
     title: "Project Name",
     description: "Full description of the project...",
     tags: ["Tag1", "Tag2", "Tag3"],
     image: "../assets/images/projects/your-image.png"
   }
   ```
4. Save and refresh

---

### Add a New Skill

**File**: `js/data/models.js`

**Steps**:
1. Find an emoji icon at [emojipedia.org](https://emojipedia.org)
2. Add to `skills` array:
   ```javascript
   {
     icon: "🎨",
     name: "Skill Name",
     description: "Description of the skill"
   }
   ```
3. Save and refresh

---

### Update Service Pricing

**File**: `js/data/models.js`

**Steps**:
1. Find the service in `services` array
2. Update the `price` field:
   ```javascript
   {
     name: "Structural Plan",
     price: "₹2,500",  // Change this
     // ...
   }
   ```

---

### Add Education/Certification

**File**: `js/data/models.js`

**Steps**:
1. Add to `education` array:
   ```javascript
   {
     year: "2024",
     degree: "Certificate Name",
     school: "Institution Name"
   }
   ```

---

## 🎨 Design Updates

### Change Primary Color

**File**: `css/base/variables.css`

**Find and change**:
```css
--color-primary: #003366;  /* Change this hex code */
```

**Common color schemes**:
- **Blue**: `#1E88E5`
- **Green**: `#10B981`
- **Purple**: `#8B5CF6`
- **Red**: `#EF4444`

---

### Change Accent Color

**File**: `css/base/variables.css`

```css
--color-accent: #FF8C00;  /* Change this */
```

---

### Change Font

**Step 1**: Import font in HTML files (in `<head>`):
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

**Step 2**: Update `css/base/variables.css`:
```css
--font-display: "Inter", sans-serif;
--font-body: "Inter", sans-serif;
```

**Popular fonts**:
- **Inter**: Modern, clean
- **Roboto**: Professional
- **Poppins**: Friendly, rounded
- **Montserrat**: Geometric, strong
- **Open Sans**: Neutral, readable

---

### Increase/Decrease Spacing

**File**: `css/base/variables.css`

```css
/* Make sections more spacious */
--spacing-xl: 7rem;  /* Was 5rem */

/* Or more compact */
--spacing-xl: 4rem;
```

---

### Change Button Style

**File**: `css/components/buttons.css`

**Make buttons more rounded**:
```css
.btn {
  border-radius: 50px;  /* Was 30px */
}
```

**Make buttons rectangular**:
```css
.btn {
  border-radius: 6px;  /* Was 30px */
}
```

---

## 🧮 Calculator Updates

### Update Material Rates (Defaults)

**File**: `js/config/constants.js`

```javascript
export const DEFAULT_MATERIAL_RATES = {
  cement: 450,      // Was 420
  steel: 70,        // Was 65
  sand: 1600,       // Was 1500
  aggregate: 1500   // Was 1400
};
```

---

### Update Material Consumption Rates

**File**: `js/config/constants.js`

```javascript
export const MATERIAL_CONSTANTS = {
  cement: 0.45,     // Was 0.4 bags per sq.ft
  steel: 4.5,       // Was 4.0 kg per sq.ft
  sand: 0.05,       // Was 0.044 m³ per sq.ft
  aggregate: 0.1    // Was 0.088 m³ per sq.ft
};
```

---

### Add New Finishing Quality Option

**File**: `js/config/constants.js`

**Step 1**: Add rate:
```javascript
export const FINISHING_RATES = {
  basic: 450,
  standard: 750,
  premium: 1200,
  luxury: 2000  // New option
};
```

**Step 2**: Update HTML (`pages/calculators.html`):
```html
<select id="finishingQuality">
  <option value="basic">Basic — ₹450/sq.ft</option>
  <option value="standard" selected>Standard — ₹750/sq.ft</option>
  <option value="premium">Premium — ₹1200/sq.ft</option>
  <option value="luxury">Luxury — ₹2000/sq.ft</option>
</select>
```

---

## 📱 Contact Information

### Update Email

**Files to change**:
1. `js/config/constants.js`:
   ```javascript
   export const SITE = {
     email: "newemail@example.com",
     // ...
   }
   ```

2. All HTML files with email links:
   ```html
   <a href="mailto:newemail@example.com">...</a>
   ```

---

### Update Phone Number

**Files to change**:
1. `js/config/constants.js`:
   ```javascript
   export const SITE = {
     phone: "+91-1234567890",
     // ...
   }
   ```

2. All HTML files with phone links:
   ```html
   <a href="tel:+911234567890">+91-1234567890</a>
   ```

---

### Update Social Media Links

**File**: `js/config/constants.js`

```javascript
export const SITE = {
  linkedin: "https://linkedin.com/in/your-profile",
  facebook: "https://facebook.com/your-page",
  instagram: "https://instagram.com/your-profile"
}
```

**Also update** footer links in all HTML files:
```html
<a href="https://linkedin.com/in/your-profile" target="_blank">LinkedIn</a>
```

---

## 🖼️ Image Updates

### Replace Hero Image

1. Add new image to `assets/images/hero/`
2. Update `index.html`:
   ```html
   <img src="./assets/images/hero/new-hero.png" alt="..." class="hero-image">
   ```

---

### Replace Project Image

1. Add new image to `assets/images/projects/`
2. Update `js/data/models.js`:
   ```javascript
   {
     id: 1,
     image: "../assets/images/projects/new-project-image.png",
     // ...
   }
   ```

---

### Replace Logo

1. Replace `assets/icons/My__Logo.png` with your new logo
2. Keep the same filename OR update all references in HTML

---

### Update Favicon

Replace `assets/icons/favicon.ico` with your new favicon.

---

## 📄 Text Content

### Update Homepage Hero Text

**File**: `index.html`

```html
<h1 class="hero-title">
  <span class="line">YOUR FIRST LINE</span>
  <span class="line">YOUR SECOND LINE</span>
  <span class="line highlight">YOUR HIGHLIGHTED LINE</span>
</h1>
<p class="hero-description">
  Your new description text
</p>
```

---

### Update About Me Summary

**File**: `index.html` (scroll to About Me section)

```html
<p class="about-description">
  Your updated professional summary...
</p>
```

---

### Update Footer Copyright

**All HTML files**:
```html
<div class="footer-bottom">
  <p>&copy; 2026 Your Name. All rights reserved.</p>
</div>
```

---

## 🔧 Technical Updates

### Add Google Analytics

**All HTML files** (in `<head>`):
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

---

### Add Meta Description

**Each HTML file** (in `<head>`):
```html
<meta name="description" content="Your page description for SEO">
```

---

### Change Page Title

**Each HTML file** (in `<head>`):
```html
<title>Your New Page Title | Your Name</title>
```

---

## 🎞️ Animation Updates

### Disable All Animations

**File**: `css/base/variables.css`

```css
:root {
  --transition-duration: 0.01s;  /* Was 0.3s */
}
```

Or add to any HTML file:
```css
<style>
* {
  animation: none !important;
  transition: none !important;
}
</style>
```

---

### Change Animation Speed

**File**: `js/config/constants.js`

```javascript
export const AOS_CONFIG = {
  duration: 1200,  // Was 800 (in milliseconds)
  // ...
};
```

---

### Change Stagger Delay

**File**: `js/utils/animations.js`

Find the stagger function and change delay:
```javascript
setTimeout(() => {
  card.style.opacity = '1';
  card.style.transform = 'translateY(0)';
}, index * 150);  // Was 80ms
```

---

## 📊 Common Debugging

### Check if JavaScript is Loading

**Browser Console** (F12):
```javascript
console.log('App loaded:', typeof initNavigation);
// Should print: "App loaded: function"
```

---

### Check if CSS is Loading

**Browser Console**:
```javascript
getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
// Should print: " #003366"
```

---

### Reset Calculator Defaults

**File**: `js/config/constants.js`

```javascript
export const CALCULATOR_DEFAULTS = {
  laborPercent: 40,
  contingency: 7,
  slabThickness: 0.41,
  finishingQuality: "standard"
};
```

---

## 🚀 Before Publishing

### Checklist

- [ ] Test all pages on mobile
- [ ] Test all links (nav, footer, buttons)
- [ ] Verify all images load
- [ ] Check calculator works
- [ ] Test project modal
- [ ] Verify contact info is correct
- [ ] Update resume PDF
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Check console for errors (F12)
- [ ] Validate HTML at [validator.w3.org](https://validator.w3.org)
- [ ] Test with slow 3G connection
- [ ] Check accessibility (keyboard navigation)

---

## 📞 Need Help?

### Debug Steps

1. **Open Browser Console** (F12)
2. **Look for red errors**
3. **Check Network tab** for failed requests
4. **Verify file paths** are correct
5. **Check spelling** in variable names
6. **Clear browser cache** (Ctrl+Shift+R)

### Common Error Messages

**"Cannot read property of undefined"**
→ Element doesn't exist, check ID/selector

**"Failed to load resource"**
→ File path is wrong, check spelling/location

**"Unexpected token"**
→ Syntax error, check for missing commas/brackets

---

## 💡 Pro Tips

1. **Always test locally** before deploying
2. **Keep backups** of working code
3. **Change one thing at a time** to isolate issues
4. **Use browser DevTools** to experiment with CSS
5. **Comment out code** to test if something is causing issues
6. **Google the error message** for quick solutions
7. **Check file permissions** if files won't save
8. **Use "Inspect Element"** to see applied styles
9. **Test on real mobile devices** when possible
10. **Keep this guide handy** for quick reference!

---

**Remember**: Most issues are typos or file path problems. Check those first!