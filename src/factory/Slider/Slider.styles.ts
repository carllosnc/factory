import { StyleSheet } from 'react-native';
import { ThemeColors, spacing, rounded } from '../factory';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 32,
      justifyContent: 'center',
    },
    trackContainer: {
      height: 8,
      width: '100%',
      borderRadius: 100,
      overflow: 'hidden',
      flexDirection: 'row',
    },
    activeTrack: {
      height: '100%',
      backgroundColor: colors.primary,
    },
    thumb: {
      position: 'absolute',
      width: 8,
      height: 20,
      backgroundColor: colors.accent,
      borderRadius: 100,
      top: 6, // (32 - 20) / 2
    },
  });
