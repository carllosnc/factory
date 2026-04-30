import React, { useMemo } from 'react';

import {
  StyleSheet,
  Pressable,
  View,
  ViewStyle,
  StyleProp,
} from 'react-native';

import Animated from 'react-native-reanimated';

import {
  Canvas,
  RoundedRect,
  LinearGradient,
  vec,
  Shadow,
} from "@shopify/react-native-skia";

import { rounded, RoundedScale, buttonSizes, ButtonSize, ThemeVariant, colors as baseColors } from '../factory';

import {
  styles as createStyles,
  SHADOW_COLOR,
  LOADING_STRIPE_COLORS,
} from './Button.styles';
import { useButton } from './useButton';
import { useTheme } from '../ThemeContext';
import { Text } from '../Text/Text';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  rounded?: RoundedScale;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  haptic?: boolean;
  loading?: boolean;
  disabled?: boolean;
  variant?: ThemeVariant | 'outline';
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
  const { colors, isDark } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

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

  const isOutline = variant === 'outline';

  const variantColors = useMemo(() => {
    if (isOutline) return [];
    switch (variant) {
      case 'success':
        return isDark ? [baseColors.success.t400, baseColors.success.t700] : [baseColors.success.t500, baseColors.success.t700];
      case 'error':
        return isDark ? [baseColors.error.t400, baseColors.error.t700] : [baseColors.error.t500, baseColors.error.t700];
      case 'base':
        return isDark ? [baseColors.base.t600, baseColors.base.t800] : [baseColors.base.t500, baseColors.base.t700];
      default:
        return isDark ? [baseColors.primary.t400, baseColors.primary.t700] : [baseColors.primary.t500, baseColors.primary.t700];
    }
  }, [variant, isDark, isOutline]);

  const textColor = isOutline ? colors.primary : 'white';

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
        isOutline && {
          borderWidth: 1.5,
          borderColor: colors.border,
          backgroundColor: 'transparent',
        },
        style,
        disabled && { opacity: 0.5 }
      ]}
    >
      <AnimatedView style={[styles.inner, animatedStyle]}>
        {!isOutline && layout.width > 0 && (
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
                colors={variantColors}
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
                    size: sizeConfig.iconSize,
                    color: textColor
                  })
                : leftIcon}
            </View>
          )}
          <Text weight="medium" style={[styles.text, { fontSize: sizeConfig.fontSize, color: textColor }]}>{title}</Text>
          {rightIcon && (
            <View style={styles.rightIconContainer}>
              {React.isValidElement(rightIcon)
                ? React.cloneElement(rightIcon as React.ReactElement<any>, {
                    size: sizeConfig.iconSize,
                    color: textColor
                  })
                : rightIcon}
            </View>
          )}
        </AnimatedView>
      </AnimatedView>
    </Pressable>
  );
};
