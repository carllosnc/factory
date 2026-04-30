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
  interpolateColor,
  withSpring
} from 'react-native-reanimated';

import { createStyles } from './Switch.styles';
import { Text } from '../Text/Text';
import { useTheme } from '../ThemeContext';

export interface SwitchProps {
  title: string;
  subtitle?: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
  divider?: boolean;
  disabled?: boolean;
}

export const Switch = ({
  title,
  subtitle,
  value,
  onValueChange,
  style,
  divider = false,
  disabled = false,
}: SwitchProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  
  const handlePress = () => {
    if (!disabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onValueChange(!value);
    }
  };

  const switchValue = useSharedValue(value ? 1 : 0);

  React.useEffect(() => {
    switchValue.value = withTiming(value ? 1 : 0, { duration: 50 });
  }, [value]);

  const animatedTrackStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      switchValue.value,
      [0, 1],
      [colors.border, colors.primary]
    );

    return {
      backgroundColor,
    };
  });

  const animatedThumbStyle = useAnimatedStyle(() => ({
    transform: [{ 
      translateX: withTiming(switchValue.value * 20, {
        duration: 50,
      }) 
    }],
  }));

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      testID="switch-tile"
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
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            {subtitle && (
              <Text style={styles.subtitle} numberOfLines={2}>{subtitle}</Text>
            )}
          </View>

          <Animated.View style={[styles.switchBase, animatedTrackStyle]}>
            <Animated.View style={[
              styles.switchThumb,
              animatedThumbStyle,
              disabled && { shadowOpacity: 0, elevation: 0 }
            ]} />
          </Animated.View>
        </View>
      )}
    </Pressable>
  );
};
