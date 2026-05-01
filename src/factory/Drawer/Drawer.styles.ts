import { StyleSheet, Dimensions } from 'react-native';
import { spacing, ThemeColors, rounded } from '../factory';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const DRAWER_WIDTH = SCREEN_WIDTH * 0.82;

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1000,
  },
  drawer: {
    width: DRAWER_WIDTH,
    height: '100%',
    backgroundColor: colors.surface,
    position: 'absolute',
    top: 0,
    zIndex: 1001,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 24,
  },
  drawerLeft: {
    left: 0,
  },
  drawerRight: {
    right: 0,
  },
  content: {
    flex: 1,
    padding: spacing.s7,
  },
});
