# Md Ibrahim Khalil - Personal Portfolio

A clean, SEO-optimized portfolio website built with pure HTML, CSS, and JavaScript.

## About

This is my personal portfolio website showcasing my work as a Software Engineer and Data Engineer. The site is built without any frameworks or build tools, making it simple to maintain and fast to load.

## Project Structure

```
/
├── index.html              # Home/About page
├── education.html          # Education background
├── experience.html         # Professional experience
├── projects.html           # Projects & Skills
├── css/
│   ├── main.css           # Main stylesheet
│   └── academicons.min.css # Academic icons
├── js/
│   └── main.js            # Vanilla JavaScript
├── images/
│   ├── ibrahim.png        # Profile photo
│   ├── security-in-LLM.webp # Hero image
│   └── favicon.ico        # Site favicon
├── files/
│   └── ibrahim_khalil_cv_ac.pdf # CV/Resume
├── robots.txt             # SEO: Search engine directives
├── sitemap.xml            # SEO: Site structure
├── .nojekyll              # GitHub Pages: Disable Jekyll
└── README.md              # This file
```

## Features

- ✨ Clean, professional design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Fast loading (no heavy frameworks)
- 🔍 SEO optimized with meta tags, Open Graph, Twitter Cards, and Schema.org structured data
- ♿ Accessible (semantic HTML5, ARIA attributes)
- 🎨 Modern CSS (Grid, Flexbox, Custom Properties)
- 💻 Vanilla JavaScript (no jQuery or other libraries)

## Sections

1. **Home** - Introduction, research interests, and call-to-action
2. **Education** - Academic background and achievements
3. **Experience** - Industry, research, and teaching experience
4. **Projects** - Academic, professional, and personal projects with integrated skills section
5. **CV** - Downloadable resume in PDF format

## Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid, Flexbox, and CSS Custom Properties
- **Vanilla JavaScript** - No frameworks, just plain JS
- **Font Awesome 6** - Icon library (CDN)
- **Academicons** - Academic icons for research profiles

## Local Development

No build process required! Simply serve the files with any HTTP server.

### Using Python

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

### Using Node.js

```bash
npx http-server -p 8000
```

### Using PHP

```bash
php -S localhost:8000
```

## Deployment

The site is automatically deployed to GitHub Pages from the `master` branch.

**Live Site**: https://m-ibrahim-khalil.github.io

### Deployment Process

1. Make changes to HTML, CSS, or JS files
2. Test locally using any HTTP server
3. Commit and push to the `master` branch
4. GitHub Pages automatically deploys (1-2 minutes)

## SEO

The site is fully optimized for search engines:

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card tags
- ✅ Schema.org structured data (Person schema)
- ✅ Sitemap.xml for search engine indexing
- ✅ Robots.txt for crawler directives
- ✅ Semantic HTML5 markup
- ✅ Mobile-friendly and responsive
- ✅ Fast loading times

## Updating Content

### Adding New Experience

1. Open `experience.html`
2. Locate the relevant section (Industry, Research, or Teaching)
3. Copy an existing `<article class="archive__item">` block
4. Update the content with your new experience
5. Save and push to GitHub

### Adding New Projects

1. Open `projects.html`
2. Locate the relevant section (Academic, Professional, or Personal)
3. Copy an existing project article
4. Update with your project details
5. Save and push to GitHub

### Updating Skills

1. Open `projects.html`
2. Scroll to the Skills section
3. Update the relevant skill categories
4. Save and push to GitHub

### Updating CV

1. Replace `/files/ibrahim_khalil_cv_ac.pdf` with your new CV
2. Keep the same filename or update the link in the navigation on all HTML pages
3. Commit and push to GitHub

## Updating the Sitemap

When you add or remove pages, update `sitemap.xml`:

1. Open `sitemap.xml`
2. Add or remove `<url>` entries
3. Update `<lastmod>` dates
4. Save and push to GitHub
5. Submit updated sitemap to Google Search Console

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Performance Score: 95+
- Lighthouse Accessibility Score: 95+
- Lighthouse Best Practices Score: 95+
- Lighthouse SEO Score: 100

## Contact

- **Email**: bsse1009@iit.du.ac.bd
- **GitHub**: [@m-ibrahim-khalil](https://github.com/m-ibrahim-khalil)
- **LinkedIn**: [ibrahim-khalil-89a250168](https://www.linkedin.com/in/ibrahim-khalil-89a250168)
- **Medium**: [@bsse1009](https://medium.com/@bsse1009)

## License

© 2025 Md Ibrahim Khalil. All rights reserved.

---

Built with HTML, CSS, and JavaScript. No frameworks, just craftsmanship.
