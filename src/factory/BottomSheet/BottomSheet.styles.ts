import { StyleSheet, Dimensions } from 'react-native';
import { spacing, ThemeColors, rounded } from '../factory';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1000,
  },
  sheet: {
    height: SCREEN_HEIGHT * 0.5,
    width: '100%',
    backgroundColor: colors.surface,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: rounded.xl2,
    borderTopRightRadius: rounded.xl2,
    zIndex: 1001,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 20,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: colors.border,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: spacing.s5,
    marginBottom: spacing.s3,
  },
  content: {
    flex: 1,
    padding: spacing.s7,
  },
});
