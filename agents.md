# Void Presentation Website — Agent Guide

This document gives AI and human collaborators the context they need to work safely and efficiently inside the Void Presentation Website workspace.

## Project Snapshot
- **Stack:** Next.js 16 (App Router, Turbopack dev server), React, TypeScript, Tailwind-style utility classes (defined in `globals.css`), hosted under `web/`.
- **Runtime:** Node 20 via the portable binary at `node-portable/node-v20.18.0-win-x64`. Using the bundled `npm.cmd` avoids PowerShell execution policy issues.
- **Purpose:** Marketing/presentation site for the VOID installation, emphasizing a single rich landing page (`src/app/page.tsx`) with descriptive content, imagery, and CTAs.

## Repository Layout
- `web/` – Next.js app (sources, configs, build scripts).
- `fonts/`, `img/`, `video/` – raw collateral used for design; optimized copies live in `web/public/`.
- `node-portable/` – self-contained Node 20 distribution with npm/corepack binaries.
- `void_figma_raw.json` – design reference export.

Inside `web/`:
- `src/app/page.tsx` – the only page; client component exporting `<Home/>`.
- `src/app/globals.css` – Tailwind base import plus custom tokens (colors, typographic utility classes, hatch backgrounds, mobile overrides).
- `public/` – static assets served by Next.js (`/img`, `/fonts`, `/video`).
- Config files: `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`.

## Development Workflow
1. **Install deps:** `cd web && ..\node-portable\node-v20.18.0-win-x64\npm.cmd install`
2. **Run dev server:** `..\node-portable\node-v20.18.0-win-x64\npm.cmd run dev`
   - Serves on `http://localhost:3000`.
   - Next.js may warn about multiple lockfiles; the current setup is intentional (root-level `package-lock.json` can be ignored or removed once dependencies are centralized).
3. **Build:** `..\node-portable\node-v20.18.0-win-x64\npm.cmd run build`
4. **Lint:** `..\node-portable\node-v20.18.0-win-x64\npm.cmd run lint`

> ⚠️ PowerShell blocks the global `npm` shim by default (`npm.ps1 cannot be loaded`). Always call the portable `npm.cmd` to bypass this.

## Page Architecture (`src/app/page.tsx`)
- Declared as `"use client"` to leverage hooks (`useState`, `useEffect`, `useRef`).
- **Dynamic heights:** `newsPanelMaxHeight` syncs the scrollable news list with the height of the “Find us” card using `ResizeObserver`.
- **Structured sections:**
  - Header, disclaimer, version row.
  - Hero split with schema image and textual “Functional Overview” + “Philosophy” lists (driven by local `functionalPoints`, `philosophyPoints` arrays).
  - Operational diagram (`/img/tech-diagram.png`).
  - Influences text block sharing a column with the social “Find us” panel and news feed.
  - Bottom split: newsletter form + spectacle poster, progress report graphic.
  - Footer with logo badge.
- **Assets:** All pulled from `public/img` and `public/video`; fonts referenced in CSS with `@font-face`.

## Styling Notes
- Utility classes mirror Tailwind naming (`text-[36px]`, `border-b-[4px]`, etc.). When adding new UI, prefer consistent custom tokens (`text-void-blue`, `bg-void-ivory`, `p-text`, `font-display`).
- Responsive tweaks rely on bespoke classes defined in `globals.css` (e.g., `.hide-mobile`, `.mobile-no-right-border`).
- Images use `next/image` for optimization; remember to add new assets under `public/`.

## Known Quirks & Tasks
- **Turbopack root warning:** Next.js picks the parent directory because another `package-lock.json` exists at `C:\Users\Alin Rudolf Iosa\`. If this becomes noisy, set `turbopack.root` in `next.config.ts` to `"./web"` or remove the extra lockfile.
- **Single-page focus:** Navigation/state management is minimal. If you introduce additional routes, update `app/layout.tsx` and ensure global styles still apply.
- **No backend:** Any data capture (e.g., newsletter form) is currently non-functional. Implement API routes or integrate with a service before enabling submissions.

## How to Extend Safely
- Reuse existing arrays for textual lists to keep content centralized.
- When adding sections that rely on equal heights or scrolling behavior, follow the pattern in `newsPanelMaxHeight` (Refs + `ResizeObserver` + cleanup).
- Keep typography consistent—large numeric pixel values are deliberate to match the Figma design.
- Before importing new fonts, drop files into `public/fonts`, update `globals.css`, and verify the `next/font` pipeline if needed.

## Deployment Thoughts
- No deployment workflow is scripted yet. For Vercel/GitHub deploys, ensure environment uses Node 20.
- Media assets are heavy; consider generating optimized versions if build sizes grow.

## Contact & Ownership
- Branding references “TTOU SYSTEMS” and the VOID installation. Keep voice aligned with the current copy (bleak techno-poetic tone).
- For external links (`Find us`, news list), placeholders currently point to `#`. Replace with real URLs when available.

Use this guide whenever you modify the site or onboard another agent: it captures the non-obvious constraints and conventions that keep the VOID experience coherent.


