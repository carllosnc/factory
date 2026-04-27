import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  LayoutChangeEvent,
  ViewStyle,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
  useDerivedValue,
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import {
  Canvas,
  RoundedRect,
  LinearGradient,
  vec,
  Shadow,
} from "@shopify/react-native-skia";
import { colors, spacing, rounded, RoundedScale, buttonSizes, ButtonSize } from '../factory';
import {
  styles,
  ANIMATION_DURATION,
  BUTTON_SCALE_VALUE,
  SHADOW_COLOR,
  LOADING_STRIPE_COLORS,
  LOADING_STRIPE_DIMENSIONS,
  getVariantColors
} from './Button.styles';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  rounded?: RoundedScale;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  haptic?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'success' | 'error' | 'base';
}

const AnimatedView = Animated.createAnimatedComponent(View);

export const Button = ({
  title,
  onPress,
  style,
  rounded: roundedToken = "full",
  size = "md",
  leftIcon,
  rightIcon,
  haptic = true,
  loading = false,
  variant = 'primary',
}: ButtonProps) => {
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

  const radius = rounded[roundedToken];
  const sizeConfig = buttonSizes[size];

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setLayout({ width, height });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    if (haptic) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    scale.value = withTiming(BUTTON_SCALE_VALUE, { duration: ANIMATION_DURATION.SCALE });
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: ANIMATION_DURATION.SCALE });
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLayout={onLayout}
      style={[
        styles.container,
        {
          borderRadius: radius,
          height: sizeConfig.height,
        },
        style
      ]}
    >
      <AnimatedView style={[styles.inner, animatedStyle]}>
        {layout.width > 0 && (
          <Canvas style={[StyleSheet.absoluteFill, { borderRadius: radius }]}>
            <RoundedRect
              x={0}
              y={0}
              width={layout.width}
              height={layout.height}
              r={radius}
            >
              <LinearGradient
                start={vec(0, 0)}
                end={vec(0, layout.height || 1)}
                colors={getVariantColors(variant)}
              />
              <Shadow
                dx={0}
                dy={4}
                blur={3}
                color={SHADOW_COLOR}
                inner
              />
            </RoundedRect>
            <RoundedRect
              x={0}
              y={0}
              width={layout.width}
              height={layout.height}
              r={radius}
              opacity={loadingOpacity}
            >
              <LinearGradient
                start={stripeStart}
                end={stripeEnd}
                colors={LOADING_STRIPE_COLORS}
                positions={[0, 0.5, 0.5, 1]}
                mode="repeat"
              />
            </RoundedRect>
          </Canvas>
        )}
        <AnimatedView 
          style={[
            styles.content, 
            { paddingHorizontal: sizeConfig.paddingHorizontal },
            contentAnimatedStyle
          ]}
        >
          {leftIcon && (
            <View style={styles.leftIconContainer}>
              {React.isValidElement(leftIcon)
                ? React.cloneElement(leftIcon as React.ReactElement<any>, {
                    size: sizeConfig.iconSize
                  })
                : leftIcon}
            </View>
          )}
          <Text style={[styles.text, { fontSize: sizeConfig.fontSize }]}>{title}</Text>
          {rightIcon && (
            <View style={styles.rightIconContainer}>
              {React.isValidElement(rightIcon)
                ? React.cloneElement(rightIcon as React.ReactElement<any>, {
                    size: sizeConfig.iconSize
                  })
                : rightIcon}
            </View>
          )}
        </AnimatedView>
      </AnimatedView>
    </Pressable>
  );
};

