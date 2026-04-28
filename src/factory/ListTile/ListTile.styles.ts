import { StyleSheet } from 'react-native';
import { uiColors, colors, spacing } from '../factory';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.s5,
    paddingHorizontal: spacing.s4,
    backgroundColor: uiColors.theme.background,
  },
  groupContainer: {
    backgroundColor: uiColors.theme.background,
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
    marginTop: spacing.s0_5,
  },
  leftIconContainer: {
    marginRight: spacing.s3,
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
    marginLeft: spacing.s3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    borderBottomWidth: 1.2,
    borderBottomColor: uiColors.theme.border,
  },
});
