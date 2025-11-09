# Hangi Araba

**Hangi Araba** (Which Car) is a web application that helps users compare two second-hand cars and decide which one is more reasonable for them based on their personal usage profile.

## Overview

This application allows users to:
- Set up their personal profile (annual kilometers, usage type, preferences)
- Select two vehicles to compare
- Get a detailed comparison with scores and recommendations
- Share comparison results via URL or PDF

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
- **API**: [CarQuery API](https://www.carqueryapi.com/)
- **Code Quality**: ESLint, Prettier, Husky, lint-staged

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- CarQuery API key ([Get one here](https://www.carqueryapi.com/))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mahmutsyilmz/hangi-araba.git
   cd hangi-araba/hangi-araba-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Add your CarQuery API key to `.env`:
   ```
   CARQUERY_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Shared components
│   ├── layout/       # Layout components
│   └── ui/           # UI primitives
├── features/         # Feature modules
│   ├── profile/
│   ├── vehicle-selection/
│   ├── comparison/
│   ├── results/
│   └── sharing/
├── hooks/            # Custom React hooks
├── lib/              # Utilities and constants
├── store/            # State management
└── types/            # TypeScript types
```

For detailed architecture documentation, see [ARCHITECTURE.md](./ARCHITECTURE.md).

## Design System

The project uses a comprehensive design system with:
- **Colors**: Primary (soft blue), Secondary (soft gray), Accent (soft green), Neutral scales
- **Typography**: Responsive font sizes, weights, and line heights
- **Spacing**: Consistent spacing scale (4px base unit)
- **Dark Mode**: Supported via CSS variables

See `src/lib/design-system.md` for detailed documentation.

## Development Guidelines

- Follow the architecture in `ARCHITECTURE.md`
- Use TypeScript for all new code
- Follow the code style (Prettier + ESLint)
- Write clear, descriptive commit messages
- Keep PRs small and focused

For detailed contribution guidelines, see [CONTRIBUTING.md](./CONTRIBUTING.md).

## Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) - Project architecture and folder structure
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines
- [PRD.md](./PRD.md) - Product requirements document
- [ROADMAP.md](./ROADMAP.md) - Development roadmap
- [AGENTS.md](./AGENTS.md) - AI agent instructions

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for the complete development roadmap.

Current phase: **Faz 0** - Project Setup & Infrastructure

## License

See [LICENSE](./LICENSE) file for details.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## Support

For questions or issues:
- Open an issue on GitHub
- Check the documentation files
- Review the PRD for product context

---

Built with ❤️ using Next.js and TypeScript
