import { View, ViewStyle, StyleProp } from 'react-native';
import { styles } from './Divider.styles';
import { spacing, SpacingScale } from '../factory';
import { Text } from '../Text/Text';
import { useTheme } from '../ThemeContext';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  spacing?: SpacingScale;
  /** @deprecated Use spacing instead */
  size?: SpacingScale;
  style?: StyleProp<ViewStyle>;
  color?: string;
  thickness?: number;
  text?: string;
  textColor?: string;
}

export const Divider = ({
  orientation = 'horizontal',
  spacing: spacingProp,
  size,
  style,
  color,
  thickness,
  text,
  textColor,
}: DividerProps) => {
  const { colors } = useTheme();
  const isHorizontal = orientation === 'horizontal';
  const finalSpacing = spacingProp || size;

  const lineStyle: ViewStyle = {
    backgroundColor: color || colors.border,
    ...(thickness && (isHorizontal ? { height: thickness } : { width: thickness })),
  };

  const containerStyle: ViewStyle = {
    ...(finalSpacing && (isHorizontal
      ? { marginVertical: spacing[finalSpacing] }
      : { marginHorizontal: spacing[finalSpacing] }
    )),
  };

  if (isHorizontal && text) {
    return (
      <View testID="divider" style={[styles.container, containerStyle, style]}>
        <View style={[styles.line, lineStyle]} />
        <View style={styles.textContainer}>
          <Text size="sm" color={textColor} muted={!textColor} weight="medium">{text}</Text>
        </View>
        <View style={[styles.line, lineStyle]} />
      </View>
    );
  }

  return (
    <View
      testID="divider"
      style={[
        isHorizontal ? styles.horizontal : styles.vertical,
        lineStyle,
        containerStyle,
        style
      ]}
    />
  );
};
