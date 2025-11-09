# Architecture Documentation

This document describes the architecture and folder structure of the **Hangi Araba** project.

## Overview

**Hangi Araba** is a Next.js 16 application built with TypeScript, TailwindCSS, and the App Router. The project follows a feature-based architecture with clear separation of concerns.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **State Management**: Context API (or Zustand - to be decided)
- **API**: CarQuery API
- **Code Quality**: ESLint, Prettier, Husky, lint-staged

## Project Structure

```
hangi-araba-app/
├── .cursor/              # Cursor IDE rules
│   └── rules/
│       └── core.mdc      # Project rules
├── .husky/               # Git hooks
│   └── pre-commit        # Pre-commit hook
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles & design system
│   ├── components/       # Shared components
│   │   ├── layout/       # Layout components (Header, Footer, etc.)
│   │   └── ui/           # UI primitives (Button, Input, Select, etc.)
│   ├── features/         # Feature modules
│   │   ├── profile/      # User profile feature
│   │   ├── vehicle-selection/  # Vehicle selection feature
│   │   ├── comparison/    # Comparison feature
│   │   ├── results/       # Results display feature
│   │   └── sharing/      # Sharing feature
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utilities and helpers
│   │   ├── utils.ts      # General utilities (cn helper, etc.)
│   │   ├── constants.ts  # App constants (fuel prices, labels, etc.)
│   │   └── design-system.md  # Design system documentation
│   ├── store/            # State management (Context/Zustand)
│   └── types/            # TypeScript type definitions
│       ├── vehicle.ts     # Vehicle types
│       ├── profile.ts     # Profile types
│       └── comparison.ts  # Comparison types
├── .env.example          # Environment variables template
├── .prettierrc           # Prettier configuration
├── .prettierignore       # Prettier ignore patterns
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── AGENTS.md              # AI agent instructions
├── ARCHITECTURE.md        # This file
├── CONTRIBUTING.md        # Contribution guidelines
├── PRD.md                 # Product requirements document
├── README.md              # Project overview
└── ROADMAP.md             # Development roadmap
```

## Folder Details

### `src/app/`

Next.js App Router pages and layouts. Each route corresponds to a folder/file in this directory.

- `layout.tsx`: Root layout with fonts and metadata
- `page.tsx`: Home page
- `globals.css`: Global styles, design system, CSS variables

### `src/components/`

Shared, reusable components used across multiple features.

#### `components/layout/`

Layout components:
- `Header`: Site header/navigation
- `Footer`: Site footer
- `Container`: Content wrapper
- `Section`: Section wrapper

#### `components/ui/`

UI primitive components:
- `Button`: Button component with variants
- `Input`: Text input component
- `Select`: Dropdown select component
- `Card`: Card container component
- `Badge`: Badge/label component
- `Alert`: Alert/notification component
- `Loading`: Loading spinner/skeleton component

### `src/features/`

Feature modules. Each feature is self-contained with its own components, hooks, and logic.

#### `features/profile/`

User profile feature:
- Profile form components
- Profile state management
- Profile validation logic

#### `features/vehicle-selection/`

Vehicle selection feature:
- Vehicle selector components
- Dropdown components (brand, model, year, trim)
- Vehicle selection state management

#### `features/comparison/`

Comparison feature:
- Comparison logic
- Comparison state management
- Comparison utilities

#### `features/results/`

Results display feature:
- Results page components
- Score cards
- Comparison table
- Decision banner

#### `features/sharing/`

Sharing feature:
- Share button component
- URL generation logic
- PDF export functionality

### `src/hooks/`

Custom React hooks:
- `useProfile`: Profile state hook
- `useVehicleSelection`: Vehicle selection hook
- `useComparison`: Comparison logic hook
- `useMediaQuery`: Responsive hook

### `src/lib/`

Utility functions and constants:
- `utils.ts`: General utilities (cn helper, formatters, etc.)
- `constants.ts`: App constants (default values, labels, etc.)
- `design-system.md`: Design system documentation

### `src/store/`

State management:
- Context providers (or Zustand stores)
- Global state logic

### `src/types/`

TypeScript type definitions:
- `vehicle.ts`: Vehicle-related types
- `profile.ts`: Profile-related types
- `comparison.ts`: Comparison-related types

## Design System

The design system is defined in `src/app/globals.css` using CSS variables and TailwindCSS v4's `@theme` directive.

### Colors

- **Primary**: Soft blue (50-950 scale)
- **Secondary**: Soft gray (50-950 scale)
- **Accent**: Soft green (50-950 scale)
- **Neutral**: Gray scale (50-950 scale)
- **Semantic**: success, warning, error, info

### Typography

- Font sizes: xs (12px) to 6xl (60px)
- Font weights: light (300) to extrabold (800)
- Line heights: none (1) to loose (2)
- Mobile-first responsive scaling

### Spacing

Consistent spacing scale: 0, 1 (4px), 2 (8px), 3 (12px), 4 (16px), 6 (24px), 8 (32px), 12 (48px), 16 (64px), 20 (80px), 24 (96px)

See `src/lib/design-system.md` for detailed documentation.

## State Management

Currently using Context API for state management. May migrate to Zustand in the future for better performance and developer experience.

### State Structure

- **Profile State**: User profile data (annual km, usage type, preferences)
- **Vehicle Selection State**: Selected vehicles (A and B)
- **Comparison State**: Comparison results and scores

## API Integration

### CarQuery API

- API client in `src/lib/api/carquery.ts` (to be created)
- Service functions in `src/services/vehicleService.ts` (to be created)
- Error handling and retry logic
- Caching strategy (React Query or SWR)

## Routing

Using Next.js App Router:
- `/`: Home page
- `/profile`: Profile setup (to be created)
- `/compare`: Comparison page (to be created)
- `/results`: Results page (to be created)
- `/share/[id]`: Shared comparison page (to be created)

## Environment Variables

See `.env.example` for required environment variables:
- `CARQUERY_API_KEY`: CarQuery API key

## Build & Deployment

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Start**: `npm start`
- **Lint**: `npm run lint`
- **Format**: `npm run format`

## Code Quality

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **lint-staged**: Pre-commit linting/formatting

## Future Considerations

- Add unit tests (Jest/Vitest)
- Add E2E tests (Playwright/Cypress)
- Add Storybook for component documentation
- Add performance monitoring
- Add error tracking (Sentry)

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [CarQuery API Documentation](https://www.carqueryapi.com/)

