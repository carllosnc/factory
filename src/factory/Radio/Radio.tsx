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

import { createStyles } from '../Checkbox/Checkbox.styles';
import { Text } from '../Text/Text';
import { useTheme } from '../ThemeContext';

export interface RadioProps {
  title: string;
  subtitle?: string;
  selected: boolean;
  onSelect: () => void;
  style?: StyleProp<ViewStyle>;
  divider?: boolean;
  disabled?: boolean;
}

export const Radio = ({
  title,
  subtitle,
  selected,
  onSelect,
  style,
  divider = false,
  disabled = false,
}: RadioProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  
  const handlePress = () => {
    if (!disabled && !selected) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onSelect();
    }
  };

  const selectedValue = useSharedValue(selected ? 1 : 0);

  React.useEffect(() => {
    selectedValue.value = withTiming(selected ? 1 : 0, { duration: 50 });
  }, [selected]);

  const animatedInnerStyle = useAnimatedStyle(() => ({
    transform: [{ scale: selectedValue.value }],
    opacity: selectedValue.value,
  }));

  const animatedOuterStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      selectedValue.value,
      [0, 1],
      [colors.border, colors.primary]
    );

    return {
      borderColor,
    };
  });

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      testID="radio-tile"
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
          
          <Animated.View style={[styles.radioBase, animatedOuterStyle]}>
            <Animated.View style={[styles.radioInner, animatedInnerStyle]} />
          </Animated.View>
        </View>
      )}
    </Pressable>
  );
};
