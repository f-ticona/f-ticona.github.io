# AGENTS.md

## Commands
- `npm run dev` — start dev server
- `npm run build` — `tsc -b && vite build` (typecheck + build, both must pass)
- `npm run lint` — eslint on all `.ts`/`.tsx` files
- No test framework configured; no `npm test` exists

## Architecture
- Single-page Vite + React + TypeScript portfolio
- Entry: `index.html` → `src/main.tsx` → `src/App.tsx` → `src/pages/HomePage.tsx`
- Sections in `src/sections/`, shared data in `src/data/siteData.ts`
- No routing — single page with anchor links (`#sobre-mi`, `#servicios`, etc.)

## Vite Config
- `base: './'` in `vite.config.ts` — relative paths for GitHub Pages
- `public/favicon.svg` copied to `dist/` automatically by Vite

## Deploy
- GitHub Pages via `.github/workflows/deploy.yml` on push to `main`
- Build output: `dist/` — uploaded as Pages artifact

## Known Issues
- `react-router-dom` is in `dependencies` but unused — dead dependency
- `src/assets/hero.png`, `react.svg`, `vite.svg` are unused template leftovers

## Style
- Tailwind CSS v4 via `@tailwindcss/vite` plugin
- ESLint: `eslint.config.js` extends recommended React + TypeScript rules
