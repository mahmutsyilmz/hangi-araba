/**
 * Application constants
 * Default values and assumptions used throughout the app
 */

/**
 * Default fuel prices (TL per liter)
 * These are assumptions and should be configurable
 */
export const DEFAULT_FUEL_PRICES = {
  gasoline: 45.0, // Benzin (TL/L)
  diesel: 42.0, // Dizel (TL/L)
  lpg: 28.0, // LPG (TL/L)
  electric: 0.0, // Elektrik (TL/kWh) - TODO: Add kWh price
} as const;

/**
 * Average annual kilometers assumption
 * Used when user doesn't provide this information
 */
export const DEFAULT_ANNUAL_KM = 15000;

/**
 * Default city/highway usage ratio
 * Used when user doesn't specify usage type
 */
export const DEFAULT_USAGE_RATIO = {
  city: 70, // Percentage
  highway: 30, // Percentage
} as const;

/**
 * Fuel type labels (Turkish)
 */
export const FUEL_TYPE_LABELS = {
  gasoline: "Benzin",
  diesel: "Dizel",
  lpg: "LPG",
  hybrid: "Hibrit",
  electric: "Elektrik",
} as const;

/**
 * Transmission type labels (Turkish)
 */
export const TRANSMISSION_TYPE_LABELS = {
  manual: "Manuel",
  automatic: "Otomatik",
  cvt: "CVT",
  dct: "DCT/DSG",
} as const;

/**
 * Body type labels (Turkish)
 */
export const BODY_TYPE_LABELS = {
  sedan: "Sedan",
  hatchback: "Hatchback",
  suv: "SUV",
  coupe: "Coupe",
  wagon: "Station Wagon",
  pickup: "Pickup",
  van: "Van",
} as const;

