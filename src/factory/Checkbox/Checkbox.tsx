import React, { useMemo } from 'react';
import {
  View,
  Pressable,
  ViewStyle,
  StyleProp,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import Animated, { 
  useAnimatedStyle, 
  withTiming, 
  useSharedValue,
  interpolateColor
} from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';

import { createStyles } from './Checkbox.styles';
import { Text } from '../Text/Text';
import { useTheme } from '../ThemeContext';

export interface CheckboxProps {
  title: string;
  subtitle?: string;
  checked: boolean;
  onValueChange: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
  divider?: boolean;
  disabled?: boolean;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Checkbox = ({
  title,
  subtitle,
  checked,
  onValueChange,
  style,
  divider = false,
  disabled = false,
}: CheckboxProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  
  const handlePress = () => {
    if (!disabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onValueChange(!checked);
    }
  };

  const checkScale = useSharedValue(checked ? 1 : 0);

  React.useEffect(() => {
    checkScale.value = withTiming(checked ? 1 : 0, { duration: 50 });
  }, [checked]);

  const animatedCheckStyle = useAnimatedStyle(() => ({
    transform: [{ scale: checkScale.value }],
    opacity: checkScale.value,
  }));

  const animatedBoxStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      checkScale.value,
      [0, 1],
      ['transparent', colors.primary]
    );
    const borderColor = interpolateColor(
      checkScale.value,
      [0, 1],
      [colors.border, colors.primary]
    );

    return {
      backgroundColor,
      borderColor,
    };
  });

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      testID="checkbox-tile"
    >
      {({ pressed }) => (
        <View
          style={[
            styles.container,
            divider && styles.divider,
            disabled && { opacity: 0.5 },
            pressed && !disabled && { opacity: 0.7 },
            style,
          ]}
        >
          <View style={styles.content}>
            <Text weight="semibold" numberOfLines={1}>{title}</Text>
            {subtitle && (
              <Text color="muted" size="sm" numberOfLines={2}>{subtitle}</Text>
            )}
          </View>
          
          <Animated.View style={[styles.checkboxBase, animatedBoxStyle]}>
            <Animated.View style={animatedCheckStyle}>
              <Feather name="check" size={16} color="white" />
            </Animated.View>
          </Animated.View>
        </View>
      )}
    </Pressable>
  );
};
