# TechPulse — Technology News & Blog

TechPulse is a responsive technology news and blog website built with **HTML, TypeScript, Vite, and Tailwind CSS**.

It provides technology content in a simple and easy-to-read design.

## 1. Main Features

- Home page with hero section and latest articles
- Technology News page
- Technology Blog page
- Technology Categories page
- Responsive layout for desktop, tablet, and mobile
- Light/Dark mode
- Tailwind CSS styling
- SEO-ready page metadata
- Open Graph and Twitter metadata
- JSON-LD structured data
- `robots.txt`
- XML sitemap
- Custom 404 page
- Vercel-ready production build

## 2. Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Main TechPulse landing page |
| News | `pages/news.html` | Technology news |
| Blog | `pages/blog.html` | Technology guides and articles |
| Categories | `pages/categories.html` | Browse technology topics |

## 3. Technology Stack

- HTML5
- TypeScript
- Vite
- Tailwind CSS v4
- Material Icons
- Google Fonts/Material Icons CDN

## 4. Project Structure

```text
techpulse-news-blog/
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── vercel.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── main.ts
│   ├── style.css
│   ├── theme.js
│   └── assets/
├── pages/
│   ├── news.html
│   ├── blog.html
│   ├── categories.html
│   └── imag/
├── image/
└── Article page/
```

## 5. Run the Project Locally

Install Node.js LTS first.

Open a terminal in the project folder:

```bash
npm install
npm run dev
```

Then open the local Vite address shown in the terminal, normally:

```text
http://localhost:5173/
```

## 6. Test the Production Build

Run:

```bash
npm run build
```

Vite creates the production website inside:

```text
dist/
```

To test the production build locally:

```bash
npm run preview
```

## 7. Deploy to Vercel

### Method A — GitHub

1. Push this project to GitHub.
2. Open Vercel.
3. Select **Add New → Project**.
4. Import the GitHub repository.
5. Vercel should detect Vite.
6. Confirm:
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Click **Deploy**.

### Method B — Vercel CLI

Install the Vercel CLI:

```bash
npm install -g vercel
```

Login:

```bash
vercel login
```

Deploy:

```bash
vercel
```

For a production deployment:

```bash
vercel --prod
```

## 8. Important: Update Your Real Domain

The SEO files currently use this deployment URL:

```text
https://techpulse-news-blog.vercel.app
```

If Vercel gives you a different URL, or you connect a custom domain, update the URL in:

- `robots.txt`
- `sitemap.xml`
- `index.html`
- `pages/news.html`
- `pages/blog.html`
- `pages/categories.html`

Search for:

```text
https://techpulse-news-blog.vercel.app
```

and replace it with your real website URL.

Example:

```text
https://yourdomain.com
```

Do not leave the example URL after connecting your real domain.

## 9. SEO Setup

### 9.1 Page Titles

Each important page has a unique title.

Examples:

- `TechPulse | Technology News & Insights`
- `TechPulse News | Latest Technology News`
- `TechPulse Blog | Easy Technology Guides`
- `TechPulse Categories | Explore Technology Topics`

A unique title helps search engines understand what each page is about.

### 9.2 Meta Descriptions

Each page has a description explaining its content.

Example:

```html
<meta name="description"
      content="TechPulse brings technology news, AI, gadgets, software, cybersecurity, programming, and emerging technology in a simple, easy-to-read format.">
```

Keep descriptions useful and natural. Avoid repeating keywords unnaturally.

### 9.3 Canonical URLs

Each main page includes a canonical URL:

```html
<link rel="canonical" href="https://yourdomain.com/">
```

Canonical URLs help search engines understand the preferred URL when similar pages exist.

### 9.4 Robots.txt

`robots.txt` tells search engine crawlers which parts of the site they may crawl.

Current file:

```text
robots.txt
```

It allows normal crawling and points crawlers to the sitemap.

### 9.5 XML Sitemap

`sitemap.xml` lists the main public pages.

Current pages:

- Home
- News
- Blog
- Categories

After deployment, submit:

```text
https://yourdomain.com/sitemap.xml
```

to Google Search Console.

### 9.6 Open Graph

Open Graph metadata helps when a page is shared on social platforms.

Example:

```html
<meta property="og:type" content="website">
<meta property="og:title" content="TechPulse | Technology News & Insights">
<meta property="og:description" content="Technology news, articles, guides, and insights.">
<meta property="og:url" content="https://yourdomain.com/">
```

For an even better social preview, add a real share image later:

```html
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">
```

Recommended image size:

```text
1200 × 630 px
```

### 9.7 Twitter/X Card

The pages also contain Twitter/X card metadata so shared pages can have a richer preview.

### 9.8 Structured Data

The pages include JSON-LD using Schema.org `WebSite` data.

This gives search engines structured information about TechPulse.

As the project grows, individual article pages should also use `Article` or `NewsArticle` structured data with:

- headline
- description
- image
- author
- datePublished
- dateModified
- mainEntityOfPage

## 10. SEO Checklist Before Launch

### Technical SEO

- [ ] Website uses HTTPS
- [ ] All main pages load successfully
- [ ] Mobile layout works
- [ ] No broken internal links
- [ ] `robots.txt` works
- [ ] `sitemap.xml` works
- [ ] Canonical URLs use the real domain
- [ ] 404 page works
- [ ] Favicon works
- [ ] Production build succeeds

### On-Page SEO

- [ ] Every page has a unique `<title>`
- [ ] Every important page has a meta description
- [ ] Headings use a logical structure
- [ ] Images have useful `alt` text
- [ ] Links have meaningful text
- [ ] Content is original and useful
- [ ] Important pages are reachable from navigation

### Performance

- [ ] Compress large images
- [ ] Use modern image formats such as WebP when possible
- [ ] Avoid unnecessary JavaScript
- [ ] Test mobile loading speed
- [ ] Avoid very large images above the fold
- [ ] Test with Google PageSpeed Insights

## 11. Google Search Console

After deploying:

1. Open Google Search Console.
2. Add your domain or URL-prefix property.
3. Verify ownership.
4. Submit the sitemap:

```text
https://yourdomain.com/sitemap.xml
```

5. Use URL Inspection for the home page.
6. Request indexing when appropriate.
7. Check indexing and page experience reports.

## 12. SEO Content Rules for Future Articles

For every new article:

1. Use one clear main topic.
2. Write a unique page title.
3. Write a useful meta description.
4. Use one clear `<h1>`.
5. Use `<h2>` for major sections.
6. Add descriptive image `alt` text.
7. Add author and publication date.
8. Add related internal links.
9. Use a clean URL.
10. Add Article/NewsArticle JSON-LD when the article is published as a standalone page.

Example URL:

```text
/pages/articles/ai-agents-2026.html
```

## 13. Recommended Article SEO Structure

```html
<title>AI Agents in 2026: What You Need to Know | TechPulse</title>

<meta
  name="description"
  content="Learn what AI agents are, how they work, and where they may be used in modern technology."
>

<link
  rel="canonical"
  href="https://yourdomain.com/pages/articles/ai-agents-2026.html"
>
```

The page should then contain:

```html
<h1>AI Agents in 2026: What You Need to Know</h1>

<h2>What Are AI Agents?</h2>

<h2>How AI Agents Work</h2>

<h2>Common Uses</h2>

<h2>Conclusion</h2>
```

## 14. Important SEO Note About Images

Some project pages currently use images hosted on external websites.

For production, it is better to store important website images in your own project or a trusted image CDN.

This gives you better control over:

- image availability
- image optimization
- `alt` text
- loading speed
- social sharing images

## 15. Git Workflow

Recommended workflow for the team:

```bash
git checkout main
git pull origin main
git checkout -b feature/your-task
```

After making changes:

```bash
git add .
git commit -m "Add SEO and hosting configuration"
git push -u origin feature/your-task
```

Then create a Pull Request into `main`.

## 16. Useful Commands

Install dependencies:

```bash
npm install
```

Development:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Preview production:

```bash
npm run preview
```

## 17. Final Deployment Checklist

Before submitting or presenting the project:

```text
[ ] npm install
[ ] npm run build
[ ] Test every page
[ ] Test navigation
[ ] Test light/dark mode
[ ] Test mobile layout
[ ] Check image loading
[ ] Check 404 page
[ ] Check robots.txt
[ ] Check sitemap.xml
[ ] Replace example domain with real domain
[ ] Deploy to Vercel
[ ] Add site to Google Search Console
[ ] Submit sitemap
```

## 18. Project Goal

**TechPulse — Stay Updated. Stay Smart.**

The goal is to provide technology information in a clean, simple, responsive, and easy-to-read website for students, developers, IT professionals, technology fans, and general users.
