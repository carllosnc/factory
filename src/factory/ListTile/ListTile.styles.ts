import { StyleSheet } from 'react-native';
import { spacing, ThemeColors } from '../factory';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.s7,
    paddingHorizontal: spacing.s7,
    backgroundColor: colors.surface,
  },
  groupContainer: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
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
  leftIconContainer: {
    marginRight: spacing.s6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: colors.surfaceVariant,
  },
  rightIconContainer: {
    marginLeft: spacing.s6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    borderBottomWidth: 1.2,
    borderBottomColor: colors.border,
  },
  badgeContainer: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s3,
    borderRadius: 99,
    marginLeft: spacing.s5,
  },
  badgeText: {
    color: colors.onPrimary,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
