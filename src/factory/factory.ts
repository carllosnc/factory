export const colors = {
  primary: {
    t50: '#eff6ff',
    t100: '#dbeafe',
    t200: '#bfdbfe',
    t300: '#93c5fd',
    t400: '#60a5fa',
    t500: '#3b82f6',
    t600: '#2563eb',
    t700: '#1d4ed8',
    t800: '#1e40af',
    t900: '#1e3a8a',
    t950: '#172554',
  },

  success: {
    t50: '#ecfdf5',
    t100: '#d1fae5',
    t200: '#a7f3d0',
    t300: '#6ee7b7',
    t400: '#34d399',
    t500: '#10b981',
    t600: '#059669',
    t700: '#047857',
    t800: '#065f46',
    t900: '#064e3b',
    t950: '#022c22',
  },

  error: {
    t50: '#fff1f2',
    t100: '#ffe4e6',
    t200: '#fecdd3',
    t300: '#fda4af',
    t400: '#fb7185',
    t500: '#f43f5e',
    t600: '#e11d48',
    t700: '#be123c',
    t800: '#9f1239',
    t900: '#881337',
    t950: '#4c0519',
  },

  base: {
    t50: '#f8fafc',
    t100: '#f1f5f9',
    t200: '#e2e8f0',
    t300: '#cbd5e1',
    t400: '#94a3b8',
    t500: '#64748b',
    t600: '#475569',
    t700: '#334155',
    t800: '#1e293b',
    t900: '#0f172a',
    t950: '#020617',
  },
} as const;

export const uiColors = {
  common: {
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
  },

  theme: {
    background: colors.base.t200,
    foreground: colors.base.t800,
    surface: colors.base.t50,
    surfaceVariant: colors.base.t200,
    border: colors.base.t300,
    muted: colors.base.t500,
    primary: colors.primary.t600,
    success: colors.success.t600,
    error: colors.error.t600,
    white: '#ffffff',
  },

  dark: {
    background: colors.base.t900,
    foreground: colors.base.t50,
    surface: colors.base.t800,
    surfaceVariant: colors.base.t700,
    border: colors.base.t700,
    muted: colors.base.t400,
    primary: colors.primary.t500,
    success: colors.success.t500,
    error: colors.error.t500,
    white: '#ffffff',
  }
} as const;

export const spacing = {
  s1: 0,
  s2: 2,
  s3: 4,
  s4: 6,
  s5: 8,
  s6: 12,
  s7: 16,
  s8: 20,
  s9: 24,
  s10: 32,
  s11: 40,
  s12: 48,
  s13: 64,
  s14: 80,
  s15: 96,
  s16: 128,
  s17: 160,
  s18: 192,
  s19: 224,
  s20: 256,
} as const;

export const buttonSizes = {
  sm: {
    height: 36,
    paddingHorizontal: spacing.s4,
    fontSize: 14,
    iconSize: 16,
  },
  md: {
    height: 52,
    paddingHorizontal: spacing.s6,
    fontSize: 16,
    iconSize: 20,
  },
  lg: {
    height: 64,
    paddingHorizontal: spacing.s8,
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
  xl2: 24,
  xl3: 32,
  full: 9999,
} as const;

export const typography = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  xl2: 24,
  xl3: 30,
  xl4: 36,
  xl5: 48,
  xl6: 60,
  xl7: 72,
  xl8: 96,
  xl9: 128,
} as const;

type ColorScale = keyof typeof colors.primary;
type SpacingScale = keyof typeof spacing;
type ButtonSize = keyof typeof buttonSizes;
type RoundedScale = keyof typeof rounded;
type TypographyScale = keyof typeof typography;
type ColorToken = typeof colors;
type UiColorToken = typeof uiColors;
type ThemeVariant = keyof typeof colors;
type ThemeColors = typeof uiColors.theme | typeof uiColors.dark;

export type {
  ColorScale,
  SpacingScale,
  ButtonSize,
  RoundedScale,
  TypographyScale,
  ColorToken,
  UiColorToken,
  ThemeVariant,
  ThemeColors,
};
