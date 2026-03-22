# AGENTS.md - lukaspitrik.cz

This file contains guidelines for AI agents working in this repository.

## Project Overview

- **Type**: Astro 6 website (lukaspitrik.cz)
- **Location**: `dimensional-disk/`
- **Framework**: Astro 6.0.5
- **Node**: >= 22.12.0
- **TypeScript**: Strict mode (`astro/tsconfigs/strict`)

## Build Commands

All commands run from the `dimensional-disk/` directory:

```bash
# Development
npm run dev          # Start dev server at localhost:4321

# Production
npm run build        # Build to ./dist/
npm run preview      # Preview production build locally

# Astro CLI
npm run astro ...    # Run any Astro command
npm run astro check  # Type-check the project
npm run astro add    # Add integrations
```

### Testing

No test framework is currently configured. If adding tests in the future:

```bash
# Single test file (if Vitest added)
npx vitest run src/components/Button.test.ts

# Watch mode
npx vitest src/
```

## Code Style

### File Organization

```
src/
├── components/     # Reusable .astro components
├── layouts/        # Page layouts
├── pages/          # Routes (file-based routing)
├── assets/         # Images, SVGs, fonts
└── styles/         # Global styles (if added)
```

### Astro Components (.astro)

Use the standard Astro component structure:

```astro
---
// Frontmatter: imports, props, logic
import Layout from '../layouts/Layout.astro';
import Card from './Card.astro';

interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!-- Template -->
<div class="container">
  <h1>{title}</h1>
  <slot /> <!-- Content projection -->
</div>

<!-- Scoped styles -->
<style>
  .container {
    padding: 1rem;
  }
</style>
```

### TypeScript

- Always define explicit types for component props
- Use `interface` for object types, `type` for unions/primitives
- No `any` types — strict mode enforced

```typescript
// Good
interface Props {
  title: string;
  count?: number;
  status: 'active' | 'inactive';
}

// Avoid
const props: any = {};
```

### Imports

- Use relative paths for local imports
- Group imports: external → internal → relative
- Always import images/assets using `src` property when needed

```typescript
import Layout from '../layouts/Layout.astro';
import Button from './Button.astro';
import logo from '../assets/logo.svg';
```

### CSS

- Use scoped `<style>` blocks in Astro components
- Prefer CSS custom properties for theming
- Use `rem` for sizing, `px` only for borders/shadows
- Mobile-first responsive design

```astro
<style>
  .card {
    padding: var(--spacing-md);
    border-radius: 8px;
    background: var(--color-bg);
  }
  
  @media (max-width: 768px) {
    .card {
      padding: var(--spacing-sm);
    }
  }
</style>
```

### Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Components | PascalCase | `UserProfile.astro` |
| Props | camelCase | `isActive`, `userId` |
| CSS classes | kebab-case | `.hero-section` |
| Constants | SCREAMING_SNAKE | `MAX_ITEMS` |
| Variables | camelCase | `itemCount` |

### Error Handling

- Use try/catch for async operations
- Provide fallback values where sensible
- Never leave empty catch blocks

```typescript
try {
  const data = await fetchData();
} catch (error) {
  console.error('Failed to fetch:', error);
  return null; // or fallback value
}
```

## Git Workflow

- Commit messages: descriptive, imperative mood
- Keep commits focused (one feature/fix per commit)
- Run `npm run build` before committing to verify no build errors

## VS Code Setup

Recommended extensions (already in `.vscode/extensions.json`):

- `astro-build.astro-vscode` — Astro language support

## Common Tasks

### Add a new page

1. Create file in `src/pages/` (e.g., `about.astro`)
2. Import a layout: `import Layout from '../layouts/Layout.astro';`
3. Wrap content: `<Layout><h1>About</h1></Layout>`

### Add a component

1. Create in `src/components/` (e.g., `Header.astro`)
2. Import where needed
3. Props defined in frontmatter with interface

### Add dependencies

```bash
cd dimensional-disk
npm install <package>
```

### Run Astro CLI commands

```bash
cd dimensional-disk
npm run astro add tailwind  # Add Tailwind
npm run astro add mdx       # Add MDX support
npm run astro sync          # Regenerate types
```

## Performance Notes

- Use `loading="lazy"` for below-fold images
- Use `fetchpriority="high"` for hero images
- Prefer SVG over raster images where possible
- Use Astro's built-in image optimization when adding images
