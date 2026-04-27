import React, { useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
  useDerivedValue,
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import { vec } from "@shopify/react-native-skia";
import {
  ANIMATION_DURATION,
  BUTTON_SCALE_VALUE,
  LOADING_STRIPE_DIMENSIONS
} from './Button.styles';

export const useButton = (loading: boolean, haptic: boolean) => {
  const [layout, setLayout] = useState({ width: 0, height: 0 });
  const scale = useSharedValue(1);
  const loadingValue = useSharedValue(0);

  React.useEffect(() => {
    if (loading) {
      loadingValue.value = withRepeat(
        withTiming(1, { duration: ANIMATION_DURATION.LOADING, easing: Easing.linear }),
        -1,
        false
      );
    } else {
      loadingValue.value = withTiming(0);
    }
  }, [loading]);

  const stripeOffset = useDerivedValue(() => loadingValue.value * LOADING_STRIPE_DIMENSIONS.OFFSET_MULTIPLIER);
  const stripeStart = useDerivedValue(() => vec(stripeOffset.value, 0));
  const stripeEnd = useDerivedValue(() => vec(stripeOffset.value + LOADING_STRIPE_DIMENSIONS.STRIPE_WIDTH, LOADING_STRIPE_DIMENSIONS.STRIPE_HEIGHT));
  const loadingOpacity = useDerivedValue(() => withTiming(loading ? 1 : 0, { duration: ANIMATION_DURATION.FADE }));
  const contentOpacity = useDerivedValue(() => withTiming(loading ? 0.7 : 1, { duration: ANIMATION_DURATION.FADE }));

  const contentAnimatedStyle = useAnimatedStyle(() => ({
    opacity: contentOpacity.value,
  }));

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setLayout({ width, height });
  };

  const handlePressIn = () => {
    if (haptic) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    scale.value = withTiming(BUTTON_SCALE_VALUE, { duration: ANIMATION_DURATION.SCALE });
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: ANIMATION_DURATION.SCALE });
  };

  return {
    layout,
    loadingOpacity,
    stripeStart,
    stripeEnd,
    contentAnimatedStyle,
    animatedStyle,
    onLayout,
    handlePressIn,
    handlePressOut,
  };
};
