import { StyleSheet } from 'react-native';
import { colors, uiColors, spacing, ThemeVariant } from '../factory';

export const styles = StyleSheet.create({
  container: {
    minWidth: 100,
  },
  inner: {
    flex: 1,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: uiColors.common.white,
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  leftIconContainer: {
    marginRight: spacing.s4,
  },
  rightIconContainer: {
    marginLeft: spacing.s4,
  },
});

export const ANIMATION_DURATION = {
  LOADING: 1000,
  FADE: 300,
  SCALE: 100,
};

export const BUTTON_SCALE_VALUE = 0.96;

export const SHADOW_COLOR = "rgba(255, 255, 255, 0.5)";

export const LOADING_STRIPE_COLORS = [
  "rgba(255, 255, 255, 0)",
  "rgba(255, 255, 255, 0)",
  "rgba(255, 255, 255, 0.25)",
  "rgba(255, 255, 255, 0.25)",
];

export const LOADING_STRIPE_DIMENSIONS = {
  OFFSET_MULTIPLIER: 80,
  STRIPE_WIDTH: 40,
  STRIPE_HEIGHT: 40,
};

export const getVariantColors = (variant: ThemeVariant) => {
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
