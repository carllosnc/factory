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
} from "@shopify/react-native-skia";

import { rounded, RoundedScale, buttonSizes, ButtonSize, ThemeVariant, colors as baseColors } from '../factory';

import {
  styles as createStyles,
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
  variant?: 'primary' | 'base' | 'info' | 'success' | 'error' | 'danger' | 'outline';
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

  const variantColor = useMemo(() => {
    if (isOutline) return 'transparent';
    switch (variant) {
      case 'success':
        return isDark ? baseColors.success.t900 : baseColors.success.t600;
      case 'error':
      case 'danger':
        return isDark ? baseColors.error.t900 : baseColors.error.t600;
      case 'info':
        return isDark ? baseColors.primary.t900 : baseColors.primary.t600;
      case 'base':
        return isDark ? baseColors.base.t700 : baseColors.base.t500;
      case 'primary':
      default:
        return isDark ? baseColors.primary.t500 : baseColors.primary.t600;
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
              color={variantColor}
            />
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
