import { StyleSheet } from 'react-native';
import { ThemeColors, spacing, rounded } from '../factory';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: colors.surfaceVariant,
      borderRadius: rounded.full,
      padding: spacing.s3,
      position: 'relative',
      height: 40,
      alignItems: 'center',
    },
    indicator: {
      position: 'absolute',
      backgroundColor: colors.surface,
      borderRadius: rounded.full,
      height: 32,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    tab: {
      flex: 1,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    tabText: {
      fontSize: 13,
      fontWeight: '600',
      color: colors.foreground,
    },
    activeTabText: {
      color: colors.foreground,
    },
  });
