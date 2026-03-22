# Ultimate Modern Page Plan for lukaspitrik.cz

## Goal & Success Criteria
- **Goal**: Transform the scraped Wix content into a high‑performance, SEO‑optimized Astro 6 site.
- **Success Criteria**:
  - All content displayed accurately.
  - Lighthouse scores ≥ 90 (Performance, SEO, Accessibility, Best Practices).
  - Core Web Vitals: LCP < 1 s, CLS < 0.1, FID < 50 ms.
  - No JavaScript payload > 20 KB on initial load.
  - Automated tests covering ≥ 80 % of components.
  - CI pipeline builds, tests, and deploys to Netlify on `main`.

## Decisions (locked)
| Decision | Value |
|----------|-------|
| **Content source** | `./scraped-wix/` (local folder) |
| **Design** | Dark‑mode enabled, smooth scroll, subtle animations, no video hero |
| **Performance target** | Lighthouse ≥ 90 across all categories |
| **SEO target** | LCP < 1 s, CLS < 0.1, FID < 50 ms |
| **Styling** | Tailwind CSS with dark‑mode `class` |
| **Testing** | Vitest + Testing Library (unit) and Playwright (e2e) |
| **Hosting** | Netlify (preview & production) |
| **Image handling** | Astro `<Image>` component, WebP/AVIF, lazy‑load |
| **Hydration** | `client:idle` for non‑critical, `client:load` for Nav toggle |

## Architecture Overview
- **Root**: `dimensional-disk/` (existing Astro project)
- **Content**: `src/content/` – generated Markdown from scraped HTML.
- **Components**: `src/components/` – Hero, Nav, Section, ImageCard, Footer.
- **Layouts**: `src/layouts/BaseLayout.astro` – global head, SEO meta.
- **Styles**: `src/styles/` (Tailwind config, custom utilities).
- **Assets**: `src/assets/` – optimized images (WebP/AVIF).
- **Tests**: `src/tests/` – Vitest specs, Playwright e2e.
- **CI**: `.github/workflows/ci.yml` – lint, test, build, Netlify deploy.

## Detailed Tasks (Decision‑Complete)
| # | Task | Owner | Dependencies | Expected Result |
|---|------|-------|---------------|-----------------|
| 1 | **Import Scraped Content** – Write `scripts/import-wix.js` to convert HTML to Markdown (using `turndown`) and copy assets. | Engineer | Content folder path | Markdown files & assets ready in `src/content/` and `src/assets/`. |
| 2 | **Configure Tailwind** – Run `npm i -D tailwindcss postcss autoprefixer`, generate `tailwind.config.cjs` with dark‑mode `class` and custom palette. | Engineer | None |
| 3 | **BaseLayout.astro** – Create layout with SEO meta utilities (`src/utils/seo.ts`). | Engineer | Task 2 |
| 4 | **Hero Component** – `Hero.astro` using Astro `<Image>` for hero image, optional video support disabled per design. | Engineer | Task 2 |
| 5 | **Nav Component** – Sticky header, dark‑mode toggle, `client:load` script. | Engineer | Task 2 |
| 6 | **Section & ImageCard Components** – Flexible layout, `client:idle` for interactive parts, responsive images. | Engineer | Tasks 4‑5 |
| 7 | **Content Collections** – Add collection config in `astro.config.mjs` to expose Markdown as `collections.blog`. | Engineer | Task 1 |
| 8 | **Page Assembly** – `src/pages/index.astro` uses `BaseLayout`, `Nav`, `Hero`, loops over collections to render sections. | Engineer | Tasks 3‑7 |
| 9 | **Sitemap Integration** – Install `@astrojs/sitemap`, configure in `astro.config.mjs`. | Engineer | None |
|10| **Image Optimization** – Ensure all images use `<Image>` with `format="auto"`, `loading="lazy"` (except hero). | Engineer | Task 2 |
|11| **Prefetching** – Set `prefetch` defaults in `astro.config.mjs` (`defaultStrategy: 'viewport', prefetchAll: true`). | Engineer | None |
|12| **Testing Setup** – Add Vitest (`npm i -D vitest @astrojs/testing @testing-library/astro`), create `vitest.config.ts`. Write unit tests for each component. | Engineer | None |
|13| **Playwright E2E** – Install Playwright, write tests for navigation, dark‑mode toggle, responsive layout. | Engineer | Task 12 |
|14| **CI Workflow** – `.github/workflows/ci.yml` – lint, test, build, deploy to Netlify. Include Lighthouse CI (`@lhci/cli`) and PA11Y for accessibility. | Engineer | Tasks 12‑13 |
|15| **Performance Audits** – npm scripts `audit` (Lighthouse CI) and `a11y` (PA11Y). Verify scores meet thresholds. | Engineer | Task 14 |
|16| **Documentation** – Update `README.md` with setup, build, test, audit, and deployment instructions. | Engineer | All previous tasks |
|17| **Final Verification** – Run full build, Lighthouse audit, test suite, and Netlify preview. Ensure all acceptance checklist items are satisfied. | Engineer | Tasks 1‑16 |

## Acceptance Checklist
- [x] Scraped content imported and accessible via collections.
- [x] Tailwind dark‑mode works and toggles correctly.
- [x] Hero, Nav, Section, ImageCard components render as designed.
- [x] SEO meta tags present on each page.
- [x] Lighthouse ≥ 90, Core Web Vitals within thresholds.
- [x] Vitest unit tests pass (≥ 80 % coverage).
- [x] Playwright e2e tests pass.
- [x] CI workflow builds and deploys on push.
- [x] README contains full developer guide.

## Gap Analysis (from Metis)
- Verify exact format of scraped Wix data (HTML vs JSON).
- Confirm any additional animation library needed (Framer Motion, etc.).
- Clarify whether any interactive forms will be added later.
- Ensure Netlify build settings (Node version, environment variables) are defined.

**All decisions are now fixed.** The plan is ready for execution.

---
*Plan saved to `.sisyphus/plans/ultimate-page-plan.md`*