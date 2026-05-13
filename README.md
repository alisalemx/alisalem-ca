# alisalem.ca

Single-page personal site for [alisalem.ca](https://alisalem.ca), built with Astro and deployed to Cloudflare Pages.

## Development

```sh
npm install
npm run dev
```

The site has no runtime environment dependencies. Keep `.env` files and Cloudflare secrets out of the repo.

## Scripts

- `npm run dev` starts the local Astro dev server.
- `npm run build` builds the static site to `dist/`.
- `npm run preview` previews the production build locally.

There are no lint, format, or test scripts in this repo. Use `npm run build` as the main verification step.

## Project Structure

- `src/pages/index.astro` is the only page. It imports profile data from `src/content/profile.md`.
- `src/layouts/BaseLayout.astro` provides the document shell, Google Fonts, and global stylesheet.
- `src/content/profile.md` is the source of truth for name, title, summary, links, and work history.
- `src/styles/global.css` contains the Tailwind v4 entrypoint, theme tokens, base styles, and component classes.
- `public/as-logo.svg` is the favicon and logo asset.

## Editing Content

Most content changes should happen in `src/content/profile.md`. Role descriptions support plain `description` strings or `descriptionHtml` when inline links are needed.

Use folded YAML scalars for longer copy:

```yaml
description: >-
  Longer role copy can wrap across lines without changing how it renders.
```

The page intentionally keeps the structure focused on the intro/contact links and Experience section, with no standalone About section.

## Styling Notes

This project uses Tailwind CSS v4 through `@tailwindcss/vite`. There is no `tailwind.config.js`; theme values and component layers live in `src/styles/global.css`.

SVG icons from `@phosphor-icons/core` are imported as raw strings with `?raw`, then adjusted in Astro using string replacement. Treat them as raw SVG markup rather than framework components.

Text links are underlined by default and use the animated gradient color on hover/focus via `.gradient-link`, matching the contact icon hover behavior.

## Deployment

The site is deployed to Cloudflare Pages from the `main` branch.
