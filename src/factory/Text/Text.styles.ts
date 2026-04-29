import { StyleSheet } from 'react-native';
import { typography, uiColors, colors } from '../factory';

export const styles = StyleSheet.create({
  // Sizes
  xs: { fontSize: typography.xs },
  sm: { fontSize: typography.sm },
  base: { fontSize: typography.base },
  lg: { fontSize: typography.lg },
  xl: { fontSize: typography.xl },
  xl2: { fontSize: typography.xl2 },
  xl3: { fontSize: typography.xl3 },
  xl4: { fontSize: typography.xl4 },
  xl5: { fontSize: typography.xl5 },
  xl6: { fontSize: typography.xl6 },
  xl7: { fontSize: typography.xl7 },
  xl8: { fontSize: typography.xl8 },
  xl9: { fontSize: typography.xl9 },

  // Weights
  thin: { fontWeight: '100' },
  extralight: { fontWeight: '200' },
  light: { fontWeight: '300' },
  normal: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  semibold: { fontWeight: '600' },
  bold: { fontWeight: '700' },
  extrabold: { fontWeight: '800' },
  black: { fontWeight: '900' },

  // Colors
  foreground: { color: uiColors.theme.foreground },
  muted: { color: uiColors.theme.muted },
  primary: { color: colors.primary.t500 },
  success: { color: colors.success.t500 },
  error: { color: colors.error.t500 },
  accent: { color: uiColors.theme.accent },
});
