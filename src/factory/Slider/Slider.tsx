import React, { useMemo } from 'react';
import { View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  Canvas,
  Rect,
  Group,
  rect,
  rrect,
} from '@shopify/react-native-skia';

import { createStyles } from './Slider.styles';
import { useTheme } from '../ThemeContext';
import { useSlider } from './useSlider';

export interface SliderProps {
  min?: number;
  max?: number;
  value?: number;
  onValueChange?: (value: number) => void;
  step?: number;
}

export const Slider = ({
  min = 0,
  max = 100,
  value = 0,
  onValueChange,
  step = 1,
}: SliderProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const {
    width,
    translateX,
    isPressed,
    onLayout,
    gesture,
  } = useSlider({ min, max, value, step, onValueChange });

  const thumbStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value - 4 }, // 4 is half of thumb width (8)
      { scaleY: withSpring(isPressed.value ? 1.2 : 1) }
    ],
  }));

  const activeTrackWidth = useDerivedValue(() => translateX.value);

  const clipPath = useDerivedValue(() => {
    return rrect(rect(0, 0, width, 8), 4, 4);
  });

  return (
    <GestureDetector gesture={gesture}>
      <View style={styles.container} onLayout={onLayout} testID="slider">
        <Canvas style={styles.trackContainer}>
          <Group clip={clipPath}>
            {/* Inactive Track */}
            <Rect
              x={0}
              y={0}
              width={width}
              height={8}
              color={colors.surfaceIntense}
            />
            {/* Active Track */}
            <Rect
              x={0}
              y={0}
              width={activeTrackWidth}
              height={8}
              color={colors.primary}
            />
          </Group>
        </Canvas>

        {/* Thumb */}
        <Animated.View style={[styles.thumb, thumbStyle]} />
      </View>
    </GestureDetector>
  );
};
