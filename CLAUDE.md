# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check` - Run Astro type checking
- `pnpm lint` - Run Prettier and ESLint checks
- `pnpm fmt` - Format code with Prettier and fix ESLint issues

## Architecture

This is an Astro-based personal website deployed to Cloudflare Pages.

### Key Structure
- **Blog System**: Markdown posts in `src/blogPosts/` with frontmatter typed in `~type.ts`
- **Dynamic Routes**: Blog posts use `[posts].astro` for dynamic generation
- **Styling**: Uses LightningCSS transformer for CSS processing
- **Deployment**: Configured for Cloudflare Pages via `wrangler.json`

### Blog Post System
- Posts are `.md` files in `src/blogPosts/` with frontmatter matching `BlogPostFrontmatter` type
- Only posts with `published: true` are rendered
- URLs are generated from filename without extension
- All posts use the `BaseLayout` component

### Tooling
- Uses pnpm as package manager (required version 10.8.0+)
- Node.js >=22.0.0 required
- TypeScript with Astro's strict configuration
- ESLint with Astro and JSX a11y plugins
- Prettier with Astro plugin