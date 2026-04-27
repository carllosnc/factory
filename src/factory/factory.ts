export const colors = {
  primary: {
    50: '#f5f7ff',
    100: '#ebf0ff',
    200: '#dce4ff',
    300: '#c2d0ff',
    400: '#9fb3ff',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  },

  success: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
    950: '#022c22',
  },

  error: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
    950: '#4c0519',
  },

  base: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },

  // Semantic Tokens
  common: {
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
  },

  theme: {
    background: '#ffffff',
    foreground: '#0f172a',
    surface: '#f8fafc',
    border: '#e2e8f0',
    muted: '#94a3b8',
  },

  dark: {
    background: '#020617',
    foreground: '#f8fafc',
    surface: '#0f172a',
    border: '#1e293b',
    muted: '#64748b',
  }
} as const;

export const spacing = {
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
  40: 160,
  48: 192,
  56: 224,
  64: 256,
} as const;

export const buttonSizes = {
  sm: {
    height: 36,
    paddingHorizontal: spacing[4],
    fontSize: 14,
    iconSize: 16,
  },
  md: {
    height: 52,
    paddingHorizontal: spacing[6],
    fontSize: 16,
    iconSize: 20,
  },
  lg: {
    height: 64,
    paddingHorizontal: spacing[8],
    fontSize: 18,
    iconSize: 24,
  },
} as const;

export const rounded = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  '3xl': 32,
  full: 9999,
} as const;

/**
 * Helper types for ease of use
 */
export type ColorScale = keyof typeof colors.primary;
export type SpacingScale = keyof typeof spacing;
export type ButtonSize = keyof typeof buttonSizes;
export type RoundedScale = keyof typeof rounded;
export type ColorToken = typeof colors;
