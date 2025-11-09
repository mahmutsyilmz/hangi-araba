/**
 * Utility functions for the application
 */

/**
 * Combines class names conditionally
 * Useful for TailwindCSS class merging
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

