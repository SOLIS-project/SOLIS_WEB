# SOLIS Project Website

Official website for the **SOLIS (Solar Cells-Inspired Inorganic Semiconductor Synaptic Systems for Low Energy Edge Computing and Visual Learning)** project.

This is a static website built with plain HTML, CSS, and JavaScript - no build tools or frameworks required!

## 🌐 Live Site

Visit the live website at: `https://SOLIS-project.github.io/SOLIS-website/`

## 📋 About This Website

The SOLIS website showcases:
- Project objectives and methodology
- International consortium partners
- Latest news and secondment activities
- Research publications and conference presentations
- Open-source resources and datasets
- Contact information and collaboration opportunities

## 🚀 Quick Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in
2. Click the **+** icon in the top right → **New repository**
3. Name it `SOLIS-website` (or any name you prefer)
4. Make it **Public**
5. Do NOT initialize with README, .gitignore, or license
6. Click **Create repository**

### Step 2: Upload Files

**Option A: Using GitHub Web Interface (Easiest)**

1. In your new repository, click **uploading an existing file**
2. Drag and drop ALL the website files and folders
3. Scroll down and click **Commit changes**

**Option B: Using Git Command Line**

```bash
# Navigate to the website folder
cd path/to/SOLIS-website

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial SOLIS website"

# Add remote (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/SOLIS-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings** (top menu)
2. Scroll down to **Pages** (left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes

Your site will be live at: `https://YOUR-USERNAME.github.io/SOLIS-website/`

## 📁 File Structure

```
SOLIS-website/
│
├── index.html              # Homepage
├── about.html              # Project information
├── partners.html           # Consortium members
├── news.html               # Latest updates
├── publications.html       # Research outputs
├── resources.html          # Open-source tools
├── contact.html            # Contact form
│
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── img/               # Images (add your images here)
│       ├── logo.png
│       ├── logo1.png
│       ├── hero_project.jpg
│       ├── team_upc.jpg
│       ├── team_uniliv.jpg
│       ├── wp_workshops.jpg
│       └── downloads_placeholder.jpg
│
└── README.md              # This file
```

## 🖼️ Adding Images

Replace the placeholder images in `assets/img/` with your actual project images:

1. `logo.png` - SOLIS project logo (transparent background recommended)
2. `logo1.png` - European Union flag/logo
3. `hero_project.jpg` - Homepage hero background image
4. `team_upc.jpg` - Team/lab photo for news items
5. `team_uniliv.jpg` - Team/lab photo for news items
6. `wp_workshops.jpg` - Workshop/meeting photo
7. `downloads_placeholder.jpg` - Generic image for resources

Recommended image sizes:
- Logos: 200-500px width, PNG with transparency
- Hero: 1920x1080px, JPG (high quality)
- Team photos: 800-1200px width, JPG
- Keep file sizes under 500KB when possible

## ⚙️ Customization

### Update Contact Form

The contact form uses [Formspree](https://formspree.io) - a free service for static site forms:

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your form endpoint
4. In `contact.html`, replace `your-form-id` on line 96:

```html
<form action="https://formspree.io/f/YOUR-ACTUAL-FORM-ID" method="POST">
```

### Change Colors

Edit `assets/css/style.css` at the top (lines 5-13) to change the color scheme:

```css
:root {
  --primary-color: #002b5c;      /* Deep blue */
  --secondary-color: #0066cc;    /* Lighter blue */
  --accent-color: #ffb800;       /* Yellow/gold */
  /* ... */
}
```

### Update Content

All content is in the HTML files - simply open them in a text editor and modify as needed. No special tools required!

## ✨ Features

- ✅ **Fully responsive** - works on desktop, tablet, and mobile
- ✅ **Dark mode toggle** - automatic theme switching
- ✅ **Accessible** - WCAG compliant with proper alt text and ARIA labels
- ✅ **Fast loading** - no external dependencies
- ✅ **SEO optimized** - proper meta tags and semantic HTML
- ✅ **Print friendly** - special print styles included

## 🔧 Technical Details

**Technologies Used:**
- Plain HTML5
- CSS3 (CSS Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- No frameworks or build tools

**Browser Support:**
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers

## 🛠️ Local Development

To view the website locally:

1. Simply open `index.html` in your web browser
2. Or use a local server (optional):

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have it)
npx serve
```

Then visit `http://localhost:8000`

## 📝 Maintenance

### Updating Content

1. Edit the HTML files directly
2. Save changes
3. Commit and push to GitHub:

```bash
git add .
git commit -m "Update content"
git push
```

Changes appear on the live site within 1-2 minutes.

### Adding News Items

1. Open `news.html`
2. Find the `<div class="content-list">` section
3. Copy an existing `<article class="list-item">...</article>` block
4. Paste above the others (for newest first)
5. Update the content
6. Save and push to GitHub

### Adding Publications

Same process as news - edit `publications.html` and add new entries.

## 🤝 Contributing

This is an open project! Feel free to:
- Report issues
- Suggest improvements
- Submit pull requests
- Share feedback

## 📄 License

This website template is provided as-is for the SOLIS project. Content is © SOLIS Consortium 2024.

## 💡 Support

For technical issues with the website:
- Open an issue on GitHub
- Contact: zacharie.jehl@upc.edu

For questions about the SOLIS project:
- Visit the Contact page on the website
- Email: zacharie.jehl@upc.edu

## 🎓 Credits

Website created for the SOLIS project, funded by the European Union's Horizon Europe research and innovation programme under Marie Skłodowska-Curie Actions (MSCA) Staff Exchange.

---

**Note:** This website requires no installation, no dependencies, and no build process. Just upload to GitHub and it works! 🚀
