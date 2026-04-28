import { StyleSheet } from 'react-native';
import { uiColors, spacing } from '../factory';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: uiColors.theme.border,
  },
  textContainer: {
    marginHorizontal: spacing.s4,
  },
  horizontal: {
    height: 1,
    width: '100%',
    backgroundColor: uiColors.theme.border,
  },
  vertical: {
    width: 1,
    height: '100%',
    backgroundColor: uiColors.theme.border,
  },
});
