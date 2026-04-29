import { StyleSheet, Platform } from 'react-native';
import { ThemeColors, spacing, rounded } from '../factory';

export const createStyles = (colors: ThemeColors, bottomInset: number = 0) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: colors.surface,
      paddingTop: spacing.s5,
      paddingBottom: spacing.s5 + bottomInset,
      paddingHorizontal: spacing.s4,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    tabSlot: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabItem: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: spacing.s1,
    },
    iconHighlight: {
      width: 48,
      height: 48,
      borderRadius: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      fontSize: 12,
      fontWeight: '600',
      color: colors.muted,
      marginTop: 2,
    },
    activeLabel: {
      color: colors.primary,
    },
    iconContainer: {
      width: 24,
      height: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
