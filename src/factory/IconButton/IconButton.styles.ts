import { StyleSheet } from 'react-native';
import { colors, uiColors, spacing } from '../factory';

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: 56,
    height: 56,
    borderRadius: 16,
    position: 'relative',
  },
  inner: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: spacing.s1_5,
    fontSize: 12,
    color: colors.base.t800,
    fontWeight: '500',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: colors.error.t500,
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: colors.base.t50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
    zIndex: 10,
  },
  dotBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: colors.error.t500,
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: colors.base.t50,
    zIndex: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
});

export const ANIMATION_DURATION = {
  SCALE: 100,
};

export const BUTTON_SCALE_VALUE = 0.95;

export const SHADOW_COLOR = "rgba(255, 255, 255, 0.5)";

export const getVariantColors = (variant: 'primary' | 'success' | 'error' | 'base') => {
  switch (variant) {
    case 'success':
      return [colors.success.t500, colors.success.t800];
    case 'error':
      return [colors.error.t500, colors.error.t800];
    case 'base':
      return [colors.base.t500, colors.base.t800];
    default:
      return [colors.primary.t500, colors.primary.t800];
  }
};
