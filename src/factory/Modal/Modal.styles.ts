import { StyleSheet } from 'react-native';
import { ThemeColors, spacing, rounded } from '../factory';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: spacing.s7,
    },
    modalContainer: {
      backgroundColor: colors.surface,
      borderRadius: rounded.xl,
      width: '100%',
      maxWidth: 400,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.1,
      shadowRadius: 20,
      elevation: 5,
    },
    header: {
      paddingHorizontal: spacing.s7,
      paddingTop: spacing.s7,
      paddingBottom: spacing.s5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.foreground,
    },
    closeButton: {
      padding: spacing.s2,
    },
    content: {
      paddingHorizontal: spacing.s7,
      paddingBottom: spacing.s7,
    },
    description: {
      fontSize: 16,
      color: colors.muted,
      marginBottom: spacing.s4,
    },
    footer: {
      padding: spacing.s7,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: spacing.s4,
    },
  });
