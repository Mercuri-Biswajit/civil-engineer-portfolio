# Deployment Guide

Complete guide to deploying your portfolio website to various hosting platforms.

## Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [GitHub Pages](#github-pages-free)
3. [Netlify](#netlify-free)
4. [Vercel](#vercel-free)
5. [Traditional Hosting](#traditional-hosting-cpanel)
6. [Custom Domain Setup](#custom-domain-setup)
7. [Post-Deployment](#post-deployment)

---

## Pre-Deployment Checklist

Before deploying, make sure:

### ✅ Content Review
- [ ] All personal information updated
- [ ] Resume/CV file uploaded and linked correctly
- [ ] All project images added
- [ ] Social media links are correct
- [ ] Contact information is accurate
- [ ] No placeholder text remaining

### ✅ Technical Check
- [ ] Test all pages (Home, Projects, About)
- [ ] Test all navigation links
- [ ] Test all external links open in new tab
- [ ] Test mobile responsiveness
- [ ] Check browser console for errors (F12)
- [ ] All images load correctly
- [ ] Forms work (if you added any)

### ✅ SEO & Performance
- [ ] Page titles are descriptive
- [ ] Meta descriptions added
- [ ] Images have alt text
- [ ] Favicon added (optional)
- [ ] Images optimized/compressed

### ✅ Final Touches
- [ ] Test in multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on actual mobile device
- [ ] Spell check all content
- [ ] Remove any test/debug code

---

## GitHub Pages (Free)

**Best for:** Simple static sites, portfolio projects  
**Cost:** Free  
**Custom domain:** Yes (free)  
**SSL:** Yes (automatic)

### Method 1: Using GitHub Desktop (Easiest)

**Step 1: Create GitHub Account**
1. Go to [github.com](https://github.com)
2. Sign up for free account
3. Verify your email

**Step 2: Download GitHub Desktop**
1. Download from [desktop.github.com](https://desktop.github.com)
2. Install and sign in
3. Complete setup wizard

**Step 3: Create Repository**
1. Click "Create New Repository"
2. Name: `portfolio` (or `yourusername.github.io`)
3. Description: "My Professional Portfolio"
4. Choose location: Select your project folder
5. Click "Create Repository"

**Step 4: Publish**
1. Click "Publish repository"
2. Uncheck "Keep this code private" (unless you have Pro)
3. Click "Publish repository"

**Step 5: Enable GitHub Pages**
1. Go to your repository on github.com
2. Click "Settings"
3. Click "Pages" in left sidebar
4. Source: Select "main" branch
5. Folder: "/ (root)"
6. Click "Save"
7. Wait 2-3 minutes

**Step 6: Access Your Site**
- URL: `https://yourusername.github.io/portfolio`
- Or if repo name is `yourusername.github.io`: `https://yourusername.github.io`

### Method 2: Using Command Line

```bash
# Navigate to your project
cd path/to/portfolio

# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit"

# Create repository on github.com first, then:
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

Then follow Step 5 from Method 1.

### Updating Your Site

**Using GitHub Desktop:**
1. Make changes to your files
2. GitHub Desktop will show changes
3. Add commit message (e.g., "Updated projects")
4. Click "Commit to main"
5. Click "Push origin"
6. Changes live in 1-2 minutes

**Using Command Line:**
```bash
git add .
git commit -m "Your update message"
git push
```

---

## Netlify (Free)

**Best for:** Easy deployment with instant previews  
**Cost:** Free (100GB bandwidth/month)  
**Custom domain:** Yes  
**SSL:** Yes (automatic)

### Method 1: Drag & Drop (Easiest)

**Step 1: Create Account**
1. Go to [netlify.com](https://www.netlify.com)
2. Sign up (can use GitHub account)

**Step 2: Deploy**
1. Click "Add new site" → "Deploy manually"
2. Drag your entire project folder to the upload area
3. Wait for deployment (30-60 seconds)
4. Done! Your site is live

**Step 3: Get Your URL**
- Default: `random-name-123.netlify.app`
- Change: Site settings → Site details → Change site name

### Method 2: Connect GitHub

**Step 1:** Push code to GitHub (see GitHub Pages section)

**Step 2:** Connect Repository
1. Go to Netlify
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Authorize Netlify
5. Select your repository
6. Click "Deploy site"

**Benefits:**
- Auto-deploy when you push to GitHub
- Preview deployments for branches
- Rollback to previous versions

---

## Vercel (Free)

**Best for:** Next-level performance and DX  
**Cost:** Free (100GB bandwidth)  
**Custom domain:** Yes  
**SSL:** Yes (automatic)

### Using Vercel Dashboard

1. Push to GitHub first
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your repository
5. Click "Deploy"

---

## Post-Deployment

### Test Everything

**Basic Tests:**
- [ ] Homepage loads correctly
- [ ] All internal links work
- [ ] All external links open in new tabs
- [ ] Mobile responsive
- [ ] Images all load

**Performance Tests:**
- PageSpeed Insights: [web.dev/measure](https://web.dev/measure)

### Submit to Search Engines

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property (your domain)
3. Verify ownership

---

**Congratulations on deploying your portfolio! 🎉**