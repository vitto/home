# Vittorio's Portfolio

A personal portfolio website showcasing design system architecture and UX design work, built with Astro, Tailwind CSS, and Web Components.

## Features

- **Modern Stack**: Built with Astro for optimal performance and Tailwind CSS for styling
- **Web Components**: Uses Magma design system components
- **GitHub Pages**: Automated deployment via GitHub Actions
- **Development Standards**: Prettier configured for consistent code formatting

## Projects Showcased

- [Magma Design System](https://github.com/magma-design-system/magma) - Design system based on StencilJS
- [Maggioli Design System Styles](https://github.com/maggioli-design-system/styles)
- [Iconsauce](https://github.com/iconsauce) - SVG icon library similar to Tailwind

## Development

### Prerequisites

- Node.js 20 or higher
- npm

### Setup

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Format Code

```bash
npm run format
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

### Configuration

Before deploying, make sure to:

1. **Update `astro.config.mjs`**: 
   - Set the `site` URL to match your GitHub Pages URL (e.g., `https://yourusername.github.io`)
   - Adjust the `base` path if your site is not at the root (currently set to `/home` for a project page)

2. **Update social links**: Edit `src/components/Footer.astro` with your actual LinkedIn, GitHub, and resume URLs

3. **Enable GitHub Pages**: In your repository settings, go to Pages and select "GitHub Actions" as the source

## Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── CategoryCards.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── .github/
│   └── workflows/
│       └── deploy.yml
└── package.json
```

## Technologies

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Prettier](https://prettier.io/) - Code formatter

