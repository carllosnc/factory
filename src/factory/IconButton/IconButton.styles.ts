import { StyleSheet } from 'react-native';
import { spacing, ThemeColors } from '../factory';

export const iconButtonSizes = {
  sm: {
    size: 40,
    iconSize: 18,
    borderRadius: 12,
  },
  md: {
    size: 56,
    iconSize: 24,
    borderRadius: 16,
  },
  lg: {
    size: 64,
    iconSize: 28,
    borderRadius: 20,
  },
} as const;

export type IconButtonSize = keyof typeof iconButtonSizes;

export const styles = (colors: ThemeColors) => StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    position: 'relative',
  },
  inner: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: spacing.s4,
    fontSize: 12,
    color: colors.foreground,
    fontWeight: '500',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: colors.error,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
    zIndex: 10,
  },
  dotBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: colors.error,
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: colors.background,
    zIndex: 10,
  },
  badgeText: {
    color: colors.foregroundInverted,
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export const ANIMATION_DURATION = {
  SCALE: 100,
};

export const BUTTON_SCALE_VALUE = 0.95;
