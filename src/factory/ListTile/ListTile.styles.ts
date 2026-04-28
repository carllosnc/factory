import { StyleSheet } from 'react-native';
import { uiColors, colors, spacing } from '../factory';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.s8,
    paddingHorizontal: spacing.s7,
    backgroundColor: uiColors.theme.surface,
  },
  groupContainer: {
    backgroundColor: uiColors.theme.surface,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: uiColors.theme.border,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: uiColors.theme.foreground,
  },
  subtitle: {
    fontSize: 14,
    color: uiColors.theme.muted,
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
    backgroundColor: colors.base.t200,
  },
  rightIconContainer: {
    marginLeft: spacing.s6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    borderBottomWidth: 1.2,
    borderBottomColor: uiColors.theme.border,
  },
});
