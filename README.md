# Estudio Paulucci Lahusen - New Web

Static site for the modernized EPL website. Built as plain HTML + Tailwind CDN
and a shared CSS layer in `assets/site.css`.

## Structure
- `index.html` home
- `el-estudio.html`
- `contable.html`
- `impositivo.html`
- `asesoramiento-laboral.html`
- `iniciando-negocios.html`
- `contacto.html`
- `assets/site.css` global styles (tokens, nav, cards, animations)
- `assets/logo.png` original logo

## How to work on the site (for agents)
- Keep it static: no build step, no JS unless requested.
- Reuse design tokens in `assets/site.css` (`--sand`, `--ink`, `--jade`, `--copper`).
- Nav uses `<details>` for the Servicios submenu; no JS.
- Use Tailwind utility classes for layout and spacing. Prefer consistent spacing
  around sections (look for `py-16`, `pb-16`, `mt-10`).
- Keep all text in Spanish (Argentina). Avoid new stock imagery unless asked.

## Local preview
Open any HTML file directly in the browser. No build required.

## Deploy (GitHub Pages)
Repo root is the site root. Pages setting should point to `main / (root)`.

