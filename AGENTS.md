# Dryza - Agent Context

## Project Summary

Dryza is a corporate marketing website for architectural ceiling panels and
decorative anti-moisture wall/ceiling solutions. The project is built with
Astro and Tailwind CSS, targeting a static site output.

## Current Stack

- Astro 6
- Tailwind CSS 4 through `@tailwindcss/vite`
- TypeScript strict config via `astro/tsconfigs/strict`
- pnpm workspace setup
- Static build output in `dist/`

## Commands

- Install dependencies: `pnpm install`
- Development server: `pnpm dev`
- Production build: `pnpm build`
- Preview build: `pnpm preview`

On Windows PowerShell, use `pnpm.cmd ...` if script execution policy blocks
`pnpm.ps1`.

## Project Structure

- `src/pages/`: Astro routes. Currently only `index.astro`.
- `src/layouts/`: Global layouts. `MainLayout.astro` imports global CSS and
  sets Spanish language metadata.
- `src/styles/`: Global CSS. Currently only imports Tailwind.
- `src/features/`: Intended feature modules, currently placeholder only.
- `src/shared/ui/`: Intended shared UI components, currently placeholder only.
- `src/shared/layout/`: Intended shared layout components, currently placeholder only.
- `src/assets/`: Intended local image/icon assets, currently placeholder only.
- `public/`: Static public assets, currently favicon files.

## Current State

- `src/pages/index.astro` is still the default Astro starter markup:
  standalone HTML, `lang="en"`, title `Astro`, and an `h1` with `Astro`.
- `src/layouts/MainLayout.astro` exists but is not used by `index.astro` yet.
- Tailwind is configured correctly through Vite and imported in
  `src/styles/global.css`.
- `pnpm.cmd build` succeeds and produces one static page.
- The README describes the intended architecture but currently has encoding
  artifacts when displayed in PowerShell.
- Git may report "dubious ownership" inside the Codex sandbox because the repo
  owner differs from the sandbox user.

## Conventions To Follow

- Prefer Astro components and static rendering unless interactivity is needed.
- Use `MainLayout.astro` for pages so metadata, favicon links, language, and
  global CSS stay centralized.
- Keep product/page sections as feature modules under `src/features/` once the
  homepage grows.
- Put reusable primitives such as buttons, containers, cards, badges, and
  navigation pieces under `src/shared/ui/` or `src/shared/layout/`.
- Keep global CSS minimal: Tailwind import, design tokens, base typography, and
  true global resets only.
- Use Spanish as the primary site language unless the content strategy changes.
- Avoid unrelated refactors while building the first version.

## Recommended Next Step

Replace the starter `index.astro` with a real Dryza homepage that uses
`MainLayout.astro`. Start with a focused one-page structure:

1. Header/navigation.
2. Hero section with Dryza positioning and primary CTA.
3. Product/value sections for ceiling panels and revestimientos.
4. Benefits: anti-humidity, decorative finish, installation, maintenance.
5. Gallery or product collection area.
6. Contact/quote CTA.

After the first homepage pass, extract repeated UI into `src/shared` and larger
sections into `src/features`.
