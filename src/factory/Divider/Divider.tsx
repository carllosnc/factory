import React from 'react';
import { View, ViewStyle } from 'react-native';
import { styles } from './Divider.styles';
import { spacing, SpacingScale } from '../factory';
import { Text } from '../Text/Text';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  size?: SpacingScale;
  style?: ViewStyle | ViewStyle[];
  color?: string;
  thickness?: number;
  text?: string;
}

export const Divider = ({
  orientation = 'horizontal',
  size,
  style,
  color,
  thickness,
  text,
}: DividerProps) => {
  const isHorizontal = orientation === 'horizontal';
  
  const lineStyle: ViewStyle = {
    ...(color && { backgroundColor: color }),
    ...(thickness && (isHorizontal ? { height: thickness } : { width: thickness })),
  };

  const containerStyle: ViewStyle = {
    ...(size && (isHorizontal 
      ? { marginVertical: spacing[size] } 
      : { marginHorizontal: spacing[size] }
    )),
  };

  if (isHorizontal && text) {
    return (
      <View style={[styles.container, containerStyle, style]}>
        <View style={[styles.line, lineStyle]} />
        <View style={styles.textContainer}>
          <Text size="sm" color="muted" weight="medium">{text}</Text>
        </View>
        <View style={[styles.line, lineStyle]} />
      </View>
    );
  }

  return (
    <View 
      style={[
        isHorizontal ? styles.horizontal : styles.vertical,
        lineStyle,
        containerStyle,
        style
      ]} 
    />
  );
};
