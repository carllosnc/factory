import React, { useMemo, useState } from 'react';
import { View, LayoutChangeEvent } from 'react-native';
import {
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  runOnJS,
  clamp
} from 'react-native-reanimated';
import {
  Canvas,
  Rect,
  Group,
  rect,
  rrect,
} from '@shopify/react-native-skia';
import * as Haptics from 'expo-haptics';

import { createStyles } from './Slider.styles';
import { useTheme } from '../ThemeContext';

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

  const [width, setWidth] = useState(0);
  const translateX = useSharedValue(0);
  const isPressed = useSharedValue(false);

  const startX = useSharedValue(0);

  // Synchronize internal value with prop
  React.useEffect(() => {
    if (width > 0 && !isPressed.value) {
      const percentage = (value - min) / (max - min);
      translateX.value = percentage * width;
    }
  }, [value, width, min, max]);

  const onLayout = (event: LayoutChangeEvent) => {
    const w = event.nativeEvent.layout.width;
    setWidth(w);
    const percentage = (value - min) / (max - min);
    translateX.value = percentage * w;
  };

  const derivedValue = useDerivedValue(() => {
    if (width === 0) return min;
    const percentage = translateX.value / width;
    const rawValue = min + percentage * (max - min);
    const steppedValue = Math.round(rawValue / step) * step;
    return clamp(steppedValue, min, max);
  });

  const handleValueChange = (v: number) => {
    onValueChange?.(v);
  };

  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
      startX.value = translateX.value;
      runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Light);
    })
    .onUpdate((event) => {
      translateX.value = clamp(startX.value + event.translationX, 0, width);
      runOnJS(handleValueChange)(derivedValue.value);
    })
    .onEnd(() => {
      isPressed.value = false;
    });

  const tapGesture = Gesture.Tap()
    .onBegin((event) => {
      isPressed.value = true;
      translateX.value = clamp(event.x, 0, width);
      runOnJS(handleValueChange)(derivedValue.value);
      runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Light);
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  const composed = Gesture.Exclusive(gesture, tapGesture);

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
    <GestureDetector gesture={composed}>
      <View style={styles.container} onLayout={onLayout}>
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
