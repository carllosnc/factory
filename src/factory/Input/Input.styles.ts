import { StyleSheet } from 'react-native';
import { spacing, ThemeColors } from '../factory';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    marginBottom: spacing.s7,
    gap: spacing.s3,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.muted,
    marginLeft: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    backgroundColor: colors.surface,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: colors.border,
    paddingHorizontal: spacing.s7,
  },
  inputContainerFocused: {
    borderColor: colors.primary,
  },
  inputContainerError: {
    borderColor: colors.error,
  },
  iconContainer: {
    marginRight: spacing.s6,
  },
  input: {
    flex: 1,
    height: '100%',
    color: colors.foreground,
    fontSize: 14,
    padding: 0, // Remove default padding on Android
  },
  errorText: {
    fontSize: 12,
    color: colors.error,
    marginTop: 2,
    marginLeft: 2,
  },
});
