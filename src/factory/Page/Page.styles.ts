import { StyleSheet } from 'react-native';
import { ThemeColors } from '../factory';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
