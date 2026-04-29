import { StyleSheet } from 'react-native';
import { spacing, ThemeColors } from '../factory';

export const createStyles = (colors: ThemeColors) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: spacing.s7,
      paddingHorizontal: spacing.s7,
      backgroundColor: colors.surface,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      marginRight: spacing.s6,
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
      color: colors.foreground,
    },
    subtitle: {
      fontSize: 14,
      color: colors.muted,
      marginTop: spacing.s2,
    },
    switchBase: {
      width: 44,
      height: 24,
      borderRadius: 12,
      padding: 2,
      justifyContent: 'center',
    },
    switchThumb: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    divider: {
      borderBottomWidth: 1.2,
      borderBottomColor: colors.border,
    },
  });
};
