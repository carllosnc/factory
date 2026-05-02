import React, { useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import {
  Gesture,
} from 'react-native-gesture-handler';
import {
  useSharedValue,
  useDerivedValue,
  runOnJS,
  clamp
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

interface UseSliderProps {
  min: number;
  max: number;
  value: number;
  step: number;
  onValueChange?: (value: number) => void;
}

export const useSlider = ({
  min,
  max,
  value,
  step,
  onValueChange,
}: UseSliderProps) => {
  const [width, setWidth] = useState(0);
  const translateX = useSharedValue(0);
  const isPressed = useSharedValue(false);
  const startX = useSharedValue(0);

  // Synchronize internal value with prop
  React.useLayoutEffect(() => {
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

  const composedGesture = Gesture.Exclusive(gesture, tapGesture);

  return {
    width,
    translateX,
    isPressed,
    onLayout,
    gesture: composedGesture,
  };
};
