# Project Instructions for Cursor Agents

## Overview

This is **Hangi Araba**, a web app that helps individual users compare two second-hand cars
and decide which one is more reasonable for them.

The tech stack:

- Next.js (App Router) + TypeScript
- TailwindCSS for styling
- CarQuery API / static CSV as vehicle data source
- No external scraping

---

## General Development Guidelines

- Follow the architecture and naming in `.cursor/rules/core.mdc`.
- Keep code modular: features live under `src/features/<feature>`.
- Use English for code and comments.
- Always explain briefly what a new file does in the PR description.
- Keep components small and functional (React FC).
- Handle all env variables via `.env` files (never commit secrets).

---

## Communication Style

- Respond concisely and technically.
- Provide reasoning for architectural decisions only when relevant.
- Use English for code, Turkish for human explanations.

---

## When asked to "build" something

Assume:

- You should create a TypeScript React component inside `src/features/...`.
- It should use TailwindCSS for layout and styling.
- Dummy data or mock APIs are acceptable for MVP.
- If you create new files, export and organize them clearly.

---

## Testing & Review

- Prefer lightweight unit tests with Jest or Vitest.
- Never merge untested major logic.
- Always respect PR flow: branch → commit → PR → review → merge.

---

## Files to Pay Attention To

- `PRD.md` → Product context and MVP scope.
- `.cursor/rules/core.mdc` → Technical rules.
- `.cursorignore` → AI context exclusions.
- `README.md` → Quick overview for new contributors.

### Frontend Style Expectations

- Write TailwindCSS classes that produce visually balanced, consistent spacing.
- Always consider responsive design (mobile first).
- Before finishing a layout, verify all elements align correctly.
- Favor simplicity over complexity — prefer clear spacing, hierarchy, and readable contrast.
- Avoid repetitive utility classes; group them meaningfully.
- When asked to “design” or “create UI”, think visually, not just structurally.
