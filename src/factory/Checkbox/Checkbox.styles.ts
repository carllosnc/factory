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
    checkboxBase: {
      width: 24,
      height: 24,
      borderRadius: 6,
      borderWidth: 2,
      borderColor: colors.border,
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkboxChecked: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    radioBase: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: colors.border,
      justifyContent: 'center',
      alignItems: 'center',
    },
    radioChecked: {
      borderColor: colors.primary,
    },
    radioInner: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: colors.primary,
    },
    divider: {
      borderBottomWidth: 1.2,
      borderBottomColor: colors.border,
    },
  });
};
