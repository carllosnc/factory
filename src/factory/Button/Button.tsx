import React from 'react';

import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ViewStyle,
} from 'react-native';

import Animated from 'react-native-reanimated';

import {
  Canvas,
  RoundedRect,
  LinearGradient,
  vec,
  Shadow,
} from "@shopify/react-native-skia";

import { rounded, RoundedScale, buttonSizes, ButtonSize, ThemeVariant } from '../factory';

import {
  styles,
  SHADOW_COLOR,
  LOADING_STRIPE_COLORS,
  getVariantColors
} from './Button.styles';
import { useButton } from './useButton';

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
  disabled?: boolean;
  variant?: ThemeVariant;
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
  disabled = false,
  variant = 'primary',
}: ButtonProps) => {
  const {
    layout,
    loadingOpacity,
    stripeStart,
    stripeEnd,
    contentAnimatedStyle,
    animatedStyle,
    onLayout,
    handlePressIn,
    handlePressOut,
  } = useButton(loading, haptic);

  const radius = rounded[roundedToken];
  const sizeConfig = buttonSizes[size];

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLayout={onLayout}
      disabled={disabled || loading}
      style={[
        styles.container,
        {
          borderRadius: radius,
          height: sizeConfig.height,
        },
        style,
        disabled && { opacity: 0.5 }
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

