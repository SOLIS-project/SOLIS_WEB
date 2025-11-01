# SOLIS Website Deployment Checklist

Use this checklist to ensure your website is properly configured before going live.

## ✅ Pre-Deployment Checklist

### 1. Images
- [ ] Replace `logo.png` with actual SOLIS logo
- [ ] Replace `logo1.png` with EU/Horizon Europe logo
- [ ] Replace `hero_project.jpg` with project hero image
- [ ] Replace all team/workshop photos (or use placeholders temporarily)
- [ ] Optimize all images (compress to <500KB each)
- [ ] Verify all images have proper alt text in HTML

### 2. Contact Form
- [ ] Create a Formspree account (free at formspree.io)
- [ ] Create a new form in Formspree
- [ ] Copy your form endpoint ID
- [ ] Update `contact.html` line 96 with your Formspree ID
- [ ] Test the contact form after deployment

### 3. Content Updates
- [ ] Review all text content for accuracy
- [ ] Update project grant number (currently shown as [Grant Number])
- [ ] Verify partner information is correct
- [ ] Check all email addresses work
- [ ] Verify social media links point to correct accounts
- [ ] Update "Coming Soon" or placeholder content

### 4. Links
- [ ] Verify GitHub organization URL is correct
- [ ] Verify Zenodo community URL is correct
- [ ] Test all partner website links
- [ ] Check all internal navigation links work
- [ ] Verify external links open in new tabs

### 5. SEO & Metadata
- [ ] Verify page titles are descriptive
- [ ] Check meta descriptions on all pages
- [ ] Ensure proper heading hierarchy (H1, H2, H3)
- [ ] Add Open Graph tags (optional but recommended)

## 🚀 Deployment Steps

### Step 1: Create GitHub Repository
- [ ] Log in to GitHub
- [ ] Create new public repository named "SOLIS-website"
- [ ] Do NOT initialize with README

### Step 2: Upload Files
Choose ONE method:

**Method A: Web Interface (Easiest)**
- [ ] Click "uploading an existing file"
- [ ] Drag and drop ALL files and folders
- [ ] Commit changes

**Method B: Command Line**
```bash
cd SOLIS-website
git init
git add .
git commit -m "Initial SOLIS website"
git remote add origin https://github.com/YOUR-USERNAME/SOLIS-website.git
git branch -M main
git push -u origin main
```
- [ ] Complete git setup

### Step 3: Enable GitHub Pages
- [ ] Go to repository Settings
- [ ] Click "Pages" in left sidebar
- [ ] Source: Select "main" branch
- [ ] Folder: Select "/ (root)"
- [ ] Click Save
- [ ] Wait 1-2 minutes for deployment

### Step 4: Verify Deployment
- [ ] Visit `https://YOUR-USERNAME.github.io/SOLIS-website/`
- [ ] Check homepage loads correctly
- [ ] Test navigation between all pages
- [ ] Verify images display properly
- [ ] Test mobile responsiveness
- [ ] Try dark mode toggle
- [ ] Test contact form submission

## 🧪 Post-Deployment Testing

### Functionality Tests
- [ ] Mobile menu works on small screens
- [ ] All navigation links work
- [ ] Dark mode toggle functions correctly
- [ ] Scroll-to-top button appears when scrolling
- [ ] Contact form validates input
- [ ] External links open in new tabs
- [ ] Social media links work

### Cross-Browser Testing
- [ ] Test in Chrome/Edge
- [ ] Test in Firefox
- [ ] Test in Safari (if available)
- [ ] Test on mobile devices

### Performance Checks
- [ ] Page loads in under 3 seconds
- [ ] Images load properly
- [ ] No console errors in browser DevTools
- [ ] Lighthouse score >90 (optional but good to check)

## 📱 Optional Enhancements

### After Initial Deployment
- [ ] Set up custom domain (if desired)
- [ ] Add Google Analytics (if needed)
- [ ] Create a favicon
- [ ] Add Open Graph images for social sharing
- [ ] Set up 404 error page
- [ ] Add sitemap.xml for SEO

### Custom Domain Setup (Optional)
If you want to use a custom domain like `solis-project.eu`:

1. Buy domain from registrar (Namecheap, GoDaddy, etc.)
2. In GitHub repo Settings → Pages → Custom domain
3. Enter your domain name
4. In your DNS provider, add these records:
   - Type: A, Host: @, Value: 185.199.108.153
   - Type: A, Host: @, Value: 185.199.109.153
   - Type: A, Host: @, Value: 185.199.110.153
   - Type: A, Host: @, Value: 185.199.111.153
   - Type: CNAME, Host: www, Value: YOUR-USERNAME.github.io
5. Wait 24-48 hours for DNS propagation

## 🐛 Troubleshooting

### Site Not Loading
- Check GitHub Pages is enabled in Settings
- Verify branch is set to "main"
- Wait a few minutes - deployment isn't instant
- Check repository is public

### Images Not Showing
- Verify image files are in `assets/img/` folder
- Check file names match exactly (case-sensitive)
- Ensure images were uploaded to GitHub
- Check browser console for 404 errors

### Formspree Not Working
- Verify you updated the form endpoint
- Check Formspree form is active
- Test form submission
- Check spam folder for confirmation email

### Styles Not Loading
- Verify `assets/css/style.css` exists
- Check for typos in HTML link tags
- Clear browser cache
- Check browser console for errors

### Mobile Menu Not Working
- Verify `assets/js/main.js` is loading
- Check browser console for JavaScript errors
- Test in different browsers

## 📧 Need Help?

If you encounter issues:
1. Check the README.md file
2. Review the HTML files for comments
3. Contact: zacharie.jehl@upc.edu

## ✨ Success!

Once all items are checked, your SOLIS website is live and ready!

Share the URL with your consortium and stakeholders:
`https://YOUR-USERNAME.github.io/SOLIS-website/`

Remember to:
- Update content regularly
- Add news items about project activities
- Share publications as they're released
- Keep the Resources page current

---

**Last Updated:** November 2024
**Website Version:** 1.0
