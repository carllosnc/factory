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
    background: colors.base.t50,
    foreground: colors.base.t800,
    surface: colors.base.t50,
    border: colors.base.t300,
    muted: colors.base.t500,
  },

  dark: {
    background: colors.base.t900,
    foreground: colors.base.t50,
    surface: colors.base.t900,
    border: colors.base.t200,
    muted: colors.base.t400,
  }
} as const;

export const spacing = {
  s0: 0,
  s0_5: 2,
  s1: 4,
  s1_5: 6,
  s2: 8,
  s3: 12,
  s4: 16,
  s5: 20,
  s6: 24,
  s8: 32,
  s10: 40,
  s12: 48,
  s16: 64,
  s20: 80,
  s24: 96,
  s32: 128,
  s40: 160,
  s48: 192,
  s56: 224,
  s64: 256,
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
  '2xl': 24,
  '3xl': 32,
  full: 9999,
} as const;

export type ColorScale = keyof typeof colors.primary;
export type SpacingScale = keyof typeof spacing;
export type ButtonSize = keyof typeof buttonSizes;
export type RoundedScale = keyof typeof rounded;
export type ColorToken = typeof colors;
