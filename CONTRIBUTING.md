# Contributing to Hangi Araba

Thank you for your interest in contributing to **Hangi Araba**! This document provides guidelines and instructions for contributing to the project.

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- Git
- A code editor (VS Code recommended)

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/hangi-araba.git
   cd hangi-araba/hangi-araba-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

5. Add your CarQuery API key to `.env`:
   ```
   CARQUERY_API_KEY=your_api_key_here
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Workflow

### Branch Naming

Follow the conventional branch naming:
- `feat/` - New features
- `fix/` - Bug fixes
- `chore/` - Maintenance tasks
- `docs/` - Documentation updates

Examples:
- `feat/profile-form`
- `fix/vehicle-selection-bug`
- `chore/update-dependencies`

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(profile): add annual km input validation
fix(vehicle): fix dropdown loading state
docs(readme): update setup instructions
```

### Pull Request Process

1. **Create a branch** from `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes** following the project guidelines:
   - Follow the architecture in `ARCHITECTURE.md`
   - Use TypeScript for all new code
   - Follow the code style (Prettier + ESLint)
   - Write clear, descriptive commit messages
   - Keep PRs small and focused (one feature per PR)

3. **Test your changes**:
   ```bash
   npm run build
   npm run lint
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat(scope): your commit message"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feat/your-feature-name
   ```

6. **Create a Pull Request** on GitHub:
   - Use a clear, descriptive title
   - Describe what changes you made and why
   - Reference any related issues
   - Wait for review and address feedback

## Code Guidelines

### TypeScript

- Use TypeScript for all new code
- Define types in `src/types/` directory
- Avoid `any` type; use proper types or `unknown`
- Use interfaces for object shapes, types for unions/intersections

### React Components

- Use functional components with TypeScript
- Keep components small and focused
- Use PascalCase for component names
- Place components in `src/features/<feature>/` or `src/components/`
- Export components from `index.ts` files

### Styling

- Use TailwindCSS for all styling
- Follow mobile-first responsive design
- Use design system colors and spacing (see `src/lib/design-system.md`)
- Avoid inline styles unless necessary

### File Structure

- Features live under `src/features/<feature>/`
- Shared components in `src/components/`
- Utilities in `src/lib/`
- Types in `src/types/`
- Hooks in `src/hooks/`

### Code Style

- Use English for code and comments
- Use Turkish for user-facing text
- Follow Prettier formatting (auto-formatted on commit)
- Follow ESLint rules
- Keep functions small and focused
- Add JSDoc comments for complex functions

## Testing

- Write unit tests for complex logic
- Test components with user interactions
- Ensure all tests pass before submitting PR
- Aim for good test coverage on critical paths

## Documentation

- Update README.md if you add new setup steps
- Update ARCHITECTURE.md if you change the folder structure
- Add JSDoc comments for public APIs
- Update PRD.md if you change product behavior

## Questions?

If you have questions or need help:
- Check existing documentation (`README.md`, `ARCHITECTURE.md`, `PRD.md`)
- Open an issue for discussion
- Ask in PR comments

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow the project's technical guidelines

Thank you for contributing! 🚀

