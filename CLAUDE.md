# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Node.js requirement

Astro 5 requires **Node 18+**. The system has Node 12 installed at `C:\Program Files\nodejs\`. Use Cursor's bundled Node 22 instead:

```bash
# Path to Node 22 (Cursor's bundled binary)
CURSOR_NODE="C:\Users\Jules\AppData\Local\Programs\cursor\resources\app\resources\helpers\node.exe"

# Install dependencies
"$CURSOR_NODE" "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install

# Dev server (http://localhost:4321)
"$CURSOR_NODE" node_modules/astro/astro.js dev

# Production build → dist/
"$CURSOR_NODE" node_modules/astro/astro.js build

# Preview the production build
"$CURSOR_NODE" node_modules/astro/astro.js preview
```

**Recommended fix**: Download and install Node 20 LTS from https://nodejs.org to replace the system Node, after which `npm run dev` / `npm run build` will work directly.

## Stack

- **Astro 5** — static site generator, pages in `src/pages/`, components in `src/components/`
- **Tailwind CSS 3** — via `@astrojs/tailwind`; config in `tailwind.config.mjs`
- **vite-plugin-pwa** — generates service worker and web app manifest at build time; configured in `astro.config.mjs`
- **TypeScript** — strict mode; path aliases (`@/*`, `@components/*`, `@data/*`, `@layouts/*`) defined in `tsconfig.json`

## Architecture

Single-page personal portfolio. All content lives in **`src/data/profile.ts`** — edit this file to update any site content without touching components.

```
src/
  data/profile.ts        ← all content (name, experience, education, skills, etc.)
  layouts/BaseLayout.astro  ← HTML shell; registers PWA service worker + scroll-reveal observer
  components/
    Nav.astro            ← sticky, blur-backdrop nav with mobile hamburger
    Hero.astro           ← full-height hero with animated entrance
    About.astro          ← summary + quick stats derived from profile data
    Experience.astro     ← timeline; each item maps an ExperienceItem
    Education.astro      ← cards; each item maps an EducationItem
    Skills.astro         ← grouped tag clouds from SkillGroup[]
    Contact.astro        ← email CTA + social links
    Footer.astro         ← copyright + built-with links
  pages/index.astro      ← assembles all sections; this is the only page
  styles/global.css      ← Tailwind directives + [data-reveal] animation utilities
public/
  favicon.svg            ← JC monogram (replace with real icon if desired)
  icon.svg               ← PWA icon (replace with 192px + 512px PNGs for full compatibility)
```

## Scroll-reveal animations

`BaseLayout.astro` runs an `IntersectionObserver` that adds `.is-visible` to any element with `data-reveal`. Stagger delays use `data-reveal-delay="1"` through `"5"` (0.1 s increments), defined in `global.css`.

## PWA notes

`vite-plugin-pwa` auto-generates the service worker and injects the manifest link during `astro build`. The SVG icon in `public/icon.svg` works in modern browsers; for full cross-platform PWA support, add `icon-192.png` and `icon-512.png` to `public/` and reference them in the `icons` array in `astro.config.mjs`.

## Filling in content

Open `src/data/profile.ts` and replace all placeholder strings. The TypeScript interfaces (`ExperienceItem`, `EducationItem`, `SkillGroup`) document every available field.
