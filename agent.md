# Agent Guide: Rithwik Foods

This document serves as the technical source of truth for AI agents maintaining this repository.

## 🏗️ Architecture
The project is a static site (HTML/CSS/JS) designed for maximum performance and SEO visibility.

### Key Files
- `index.html`: Main landing page (Hero, Mission, Values).
- `collection.html`: Product catalog with dynamic filtering.
- `style.css`: Central design system using CSS variables.
- `main.js`: Search logic, scroll animations, and mobile interactions.

## 🎨 Design Tokens (`style.css`)
Agents MUST use the following variables to maintain brand consistency:
- `--color-primary`: `#22c55e` (Brand Green)
- `--color-secondary`: `#15803d`
- `--color-accent`: `#f59e0b` (Warm Gold)
- `--color-background`: `#f8fafc`

## 🚀 Deployment Pipeline
- **Source**: GitHub (`main` branch).
- **Hosting**: Vercel.
- **Workflow**: Pushing to `main` triggers an automatic production build on Vercel.

## ⚠️ Important Constraints
1. **No Frameworks**: Keep logic in Vanilla JS to avoid dependency bloat.
2. **Mobile UI**: The bottom navigation bar was explicitly removed. Do not re-add it.
3. **WhatsApp**: The contact number is fixed to `+91 95381 64120`.

---
*Last Updated: 2026-05-11*
