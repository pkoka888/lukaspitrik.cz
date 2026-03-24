# lukaspitrik.cz

Personal website built with Astro 6, featuring a modern, performant frontend with Tailwind CSS styling.

## Requirements

- **Node.js**: >= 22.12.0
- **npm**: Latest version

## Quick Start

```bash
cd dimensional-disk
npm install
npm run dev
```

The development server will start at `http://localhost:4321`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro <cmd>` | Run any Astro CLI command |
| `npm run test` | Run all tests (Vitest + Playwright) |
| `npm run lint` | Run Astro type checking |

## Project Structure

```
dimensional-disk/
├── public/                  # Static assets (favicon, robots.txt, etc.)
├── src/
│   ├── assets/              # Images, SVGs, fonts
│   ├── components/          # Reusable Astro components
│   │   ├── Hero.astro       # Hero section component
│   │   ├── ImageCard.astro # Image card component
│   │   ├── Nav.astro        # Navigation component
│   │   ├── Section.astro    # Section wrapper component
│   │   └── Welcome.astro   # Welcome component
│   ├── layouts/             # Page layouts
│   │   ├── BaseLayout.astro # Base layout template
│   │   └── Layout.astro     # Main layout
│   ├── pages/               # File-based routing
│   │   └── index.astro      # Homepage
│   ├── styles/              # Global styles
│   │   └── input.css        # Tailwind input file
│   └── tests/               # Test files
│       ├── e2e.spec.ts      # Playwright E2E tests
│       ├── Hero.test.ts     # Hero component tests
│       ├── ImageCard.test.ts # ImageCard tests
│       ├── Nav.test.ts      # Nav component tests
│       └── Section.test.ts  # Section tests
├── astro.config.mjs         # Astro configuration
├── tailwind.config.cjs      # Tailwind CSS configuration
├── postcss.config.cjs       # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── playwright.config.ts     # Playwright configuration
└── package.json            # Project dependencies
```

## Testing

### Run All Tests

```bash
npm run test
```

This executes:
1. **Unit Tests** (Vitest): Component rendering tests
2. **E2E Tests** (Playwright): End-to-end browser tests

### Run Tests Separately

```bash
# Vitest unit tests only
npx vitest run

# Playwright E2E tests only
npx playwright test
```

### Test Configuration

- **Vitest**: Configured via `vitest.config.ts` (uses Astro testing utilities)
- **Playwright**: Browsers tested: Chrome, Firefox
  - Viewport: 1280x720
  - Timeout: 30s per test
  - Video recording on first retry

## Type Checking

```bash
npm run lint
```

Runs Astro's type checker with strict TypeScript mode enabled.

## Building for Production

```bash
npm run build
```

The built output is generated in the `dist/` directory, ready for deployment.

## Deployment

The project is configured with:
- **Site URL**: https://lukaspitrik.cz
- **Sitemap**: Automatically generated at `/sitemap-index.xml`

### Deployment Options

#### Static Hosting (Recommended)

Deploy the `dist/` folder to any static hosting service:

- **Netlify**: Drag & drop `dist/` or connect GitHub repo
- **Vercel**: `npx vercel deploy dist/`
- **GitHub Pages**: Use Astro's GitHub Actions workflow

#### Example: Netlify CLI

```bash
npm run build
npx netlify deploy --prod --dir=dist
```

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | Astro 6.0.5 |
| Styling | Tailwind CSS 3.4 |
| TypeScript | Strict mode |
| Testing | Vitest + Playwright |
| SEO | @astrojs/sitemap |

## Adding New Features

### Add a New Page

1. Create file in `src/pages/` (e.g., `about.astro`)
2. Import a layout
3. Add content

```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout>
  <h1>About</h1>
</Layout>
```

### Add a Component

1. Create in `src/components/` (e.g., `MyComponent.astro`)
2. Define props with TypeScript interface
3. Import and use in pages

### Add Dependencies

```bash
cd dimensional-disk
npm install <package>
npm run astro add <integration>
```

## Performance Best Practices

- Use `loading="lazy"` for below-fold images
- Use `fetchpriority="high"` for hero images
- Prefer SVG over raster images where possible
- Enable prefetching for internal links (configured in astro.config.mjs)

## License

MIT
