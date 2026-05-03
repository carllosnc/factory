import { StyleSheet } from 'react-native';
import { spacing, ThemeColors } from '../factory';

export const styles = (colors: ThemeColors) => StyleSheet.create({
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
    marginTop: spacing.s4,
    fontSize: 12,
    color: colors.foreground,
    fontWeight: '500',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: colors.error,
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
    zIndex: 10,
  },
  dotBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: colors.error,
    width: 18,
    height: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.surface,
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
