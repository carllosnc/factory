import React, { useState, useMemo } from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  ViewStyle,
  TextStyle,
  LayoutChangeEvent,
  StyleProp,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  Canvas,
  RoundedRect,
} from "@shopify/react-native-skia";
import * as Haptics from 'expo-haptics';
import { styles as createStyles, BUTTON_SCALE_VALUE, ANIMATION_DURATION, iconButtonSizes, IconButtonSize } from './IconButton.styles';
import { useTheme } from '../ThemeContext';
import { Text } from '../Text/Text';
import { colors as baseColors } from '../factory';

interface IconButtonProps {
  icon: React.ReactNode;
  label?: string;
  badge?: number | boolean;
  onPress?: () => void;
  variant?: 'primary' | 'success' | 'error' | 'base' | 'info' | 'danger' | 'outline';
  size?: IconButtonSize;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  haptic?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const AnimatedView = Animated.createAnimatedComponent(View);

export const IconButton = ({
  icon,
  label,
  badge,
  onPress,
  variant = 'base',
  size = 'md',
  style,
  containerStyle,
  labelStyle,
  haptic = true,
  disabled = false,
  loading = false,
}: IconButtonProps) => {
  const { colors, isDark } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [layout, setLayout] = useState({ width: 0, height: 0 });
  const scale = useSharedValue(1);

  const sizeConfig = iconButtonSizes[size];
  const radius = sizeConfig.borderRadius;
  const isOutline = variant === 'outline';

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setLayout({ width, height });
  };

  const handlePressIn = () => {
    if (disabled || loading) return;
    scale.value = withTiming(BUTTON_SCALE_VALUE, { duration: ANIMATION_DURATION.SCALE });
    if (haptic) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: ANIMATION_DURATION.SCALE });
  };

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

  const textColor = isOutline ? colors.primary : colors.foregroundInverted;

  const renderBadge = () => {
    if (!badge || loading) return null;

    if (typeof badge === 'number') {
      const isMultiChar = badge > 9;
      return (
        <View style={[
          styles.badge,
          isMultiChar && { borderRadius: 10, paddingHorizontal: 4 }
        ]}>
          <Text style={styles.badgeText}>{badge > 99 ? '99+' : badge}</Text>
        </View>
      );
    }

    if (badge === true) {
      return <View style={styles.dotBadge} />;
    }

    return null;
  };

  return (
    <View style={[styles.root, style]}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onLayout={onLayout}
        disabled={disabled || loading}
        style={[
          styles.container,
          {
            width: sizeConfig.size,
            height: sizeConfig.size,
            borderRadius: radius,
          },
          isOutline && {
            borderWidth: 1.5,
            borderColor: colors.border,
            backgroundColor: 'transparent',
          },
          disabled && { opacity: 0.5 },
          containerStyle
        ]}
      >
        <AnimatedView style={[styles.inner, { borderRadius: radius }, animatedStyle]}>
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
            </Canvas>
          )}
          <View style={styles.iconContainer}>
            {React.isValidElement(icon)
              ? React.cloneElement(icon as React.ReactElement<any>, {
                  size: sizeConfig.iconSize,
                  color: textColor
                })
              : icon}
          </View>
        </AnimatedView>
        {renderBadge()}
      </Pressable>
      {label && (
        <Text style={[styles.label, labelStyle]}>
          {label}
        </Text>
      )}
    </View>
  );
};
