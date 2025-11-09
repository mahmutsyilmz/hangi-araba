# Design System Documentation

## Color Palette

### Primary Colors (Soft Blue)

- Used for primary actions, links, and important elements
- Range: `primary-50` (lightest) to `primary-950` (darkest)
- Default: `primary-600` for primary buttons and links

### Secondary Colors (Soft Gray)

- Used for secondary elements, borders, and backgrounds
- Range: `secondary-50` to `secondary-950`
- Default: `secondary-500` for secondary text

### Accent Colors (Soft Green)

- Used for success states and positive feedback
- Range: `accent-50` to `accent-950`
- Default: `accent-600` for success messages

### Neutral Colors

- Used for text, borders, and subtle backgrounds
- Range: `neutral-50` to `neutral-950`
- Default: `neutral-900` for primary text, `neutral-500` for secondary text

### Semantic Colors

- `success`: Green for success states
- `warning`: Amber for warnings
- `error`: Red for errors
- `info`: Blue for informational messages

## Typography

### Font Sizes (Mobile First)

- `xs`: 12px
- `sm`: 14px
- `base`: 16px (default)
- `lg`: 18px
- `xl`: 20px
- `2xl`: 24px
- `3xl`: 30px
- `4xl`: 36px
- `5xl`: 48px
- `6xl`: 60px

### Font Weights

- `light`: 300
- `normal`: 400 (default)
- `medium`: 500
- `semibold`: 600
- `bold`: 700
- `extrabold`: 800

### Line Heights

- `none`: 1
- `tight`: 1.25
- `snug`: 1.375
- `normal`: 1.5 (default)
- `relaxed`: 1.625
- `loose`: 2

## Spacing Scale

Consistent spacing using Tailwind's default scale:

- `0`: 0px
- `1`: 4px
- `2`: 8px
- `3`: 12px
- `4`: 16px
- `5`: 20px
- `6`: 24px
- `8`: 32px
- `10`: 40px
- `12`: 48px
- `16`: 64px
- `20`: 80px
- `24`: 96px

## Border Radius

- `none`: 0
- `sm`: 2px
- `base`: 4px
- `md`: 6px
- `lg`: 8px
- `xl`: 12px
- `2xl`: 16px
- `3xl`: 24px
- `full`: 9999px (for pills/circles)

## Shadows

Soft, minimal shadows:

- `sm`: Subtle shadow for cards
- `base`: Default shadow
- `md`: Medium shadow
- `lg`: Large shadow
- `xl`: Extra large shadow

## Breakpoints (Mobile First)

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Dark Mode

Dark mode is supported via CSS variables and `prefers-color-scheme: dark`.
The `.dark` class is available for manual dark mode toggle in the future.

## Usage Examples

### Colors

```tsx
// Primary button
<button className="bg-primary-600 text-white hover:bg-primary-700">
  Click me
</button>

// Secondary text
<p className="text-secondary-600">Secondary text</p>

// Success message
<div className="bg-accent-50 text-accent-900 border border-accent-200">
  Success!
</div>
```

### Typography

```tsx
// Heading hierarchy
<h1 className="text-4xl font-bold">Heading 1</h1>
<h2 className="text-3xl font-semibold">Heading 2</h2>
<h3 className="text-2xl font-semibold">Heading 3</h3>

// Body text
<p className="text-base leading-relaxed">Body text</p>
```

### Spacing

```tsx
// Card with consistent spacing
<div className="p-6 space-y-4">
  <h2 className="mb-4">Title</h2>
  <p>Content</p>
</div>
```

### Responsive

```tsx
// Mobile first responsive design
<div className="p-4 md:p-6 lg:p-8">
  <h1 className="text-3xl md:text-4xl lg:text-5xl">Responsive Heading</h1>
</div>
```
