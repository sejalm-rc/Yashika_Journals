# Yashika Publications — React + Vite + Tailwind Website

A fully responsive, production-ready website for **Yashika Publications**, built with React, Vite, Tailwind CSS, React Router DOM and Framer Motion — matching the provided UI reference designs (homepage, about, authors, journals, reviewers, resources, services, contact).

## Tech Stack
- **React 19** + **Vite** (fast dev/build tooling)
- **Tailwind CSS v3** (utility-first styling, no inline CSS)
- **React Router DOM v6** (SPA routing with active link highlighting)
- **Framer Motion** (fade-up animations, hover effects, page transitions)
- **React Icons** (icon set for cards, features, footer, etc.)

## Folder Structure
```
yashika-publications/
├── public/
│   └── _redirects              # Netlify SPA fallback rule
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   └── logo2.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── SectionTitle.jsx
│   │   └── PageTransition.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Authors.jsx
│   │   ├── Journals.jsx
│   │   ├── Reviewers.jsx
│   │   ├── Resources.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vercel.json                 # Vercel SPA rewrite rule
└── package.json
```

## 1. Installation

```bash
npm install
```

If starting from a bare Vite scaffold, the key packages to add are:
```bash
npm install react-router-dom framer-motion react-icons
npm install -D tailwindcss@3 postcss autoprefixer
```

## 2. Run Locally

```bash
npm run dev
```
Visit `http://localhost:5173`

## 3. Build for Production

```bash
npm run build
```
Output is generated in the `dist/` folder.

## 4. Preview Production Build

```bash
npm run preview
```

## 5. Deployment (Fixes Refresh 404)

Because this is a React Router **SPA**, refreshing on a route like `/about` will 404 on most static hosts unless configured. This project already includes:

- **`public/_redirects`** → for Netlify (`/*  /index.html  200`)
- **`vercel.json`** → for Vercel (rewrites all routes to `index.html`)

For **GitHub Pages**, add a `404.html` that redirects to `index.html`, or use `HashRouter` instead of `BrowserRouter`.

For **Apache**, add a `.htaccess`:
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

For **Nginx**:
```
location / {
  try_files $uri $uri/ /index.html;
}
```

## Design Notes
- **Colors:** Navy (`#0b1d3a`) primary, Teal (`#0fb5ba`) accent, Amber (`#f5a623`) CTA highlight.
- **Font:** Poppins (loaded via Google Fonts in `index.css`).
- **Animations:** fade-up on scroll (Framer Motion `whileInView`), card hover lift + shadow, button hover scale, nav link underline animation, image/icon hover scale, and page transition fade on route change.
- **Reusable components:** `Button`, `SectionTitle`, `Navbar`, `Footer`, `PageTransition` used consistently across all 8 pages for a cohesive design system.
