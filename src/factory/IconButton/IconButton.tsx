import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ViewStyle,
  TextStyle,
  LayoutChangeEvent,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  Canvas,
  RoundedRect,
  LinearGradient,
  vec,
  Shadow,
} from "@shopify/react-native-skia";
import * as Haptics from 'expo-haptics';
import { styles, BUTTON_SCALE_VALUE, SHADOW_COLOR, getVariantColors, ANIMATION_DURATION } from './IconButton.styles';

interface IconButtonProps {
  icon: React.ReactNode;
  label?: string;
  badge?: number | boolean;
  onPress?: () => void;
  variant?: 'primary' | 'success' | 'error' | 'base';
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  haptic?: boolean;
}

const AnimatedView = Animated.createAnimatedComponent(View);

export const IconButton = ({
  icon,
  label,
  badge,
  onPress,
  variant = 'base',
  style,
  containerStyle,
  labelStyle,
  haptic = true,
}: IconButtonProps) => {
  const [layout, setLayout] = useState({ width: 0, height: 0 });
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setLayout({ width, height });
  };

  const handlePressIn = () => {
    scale.value = withTiming(BUTTON_SCALE_VALUE, { duration: ANIMATION_DURATION.SCALE });
    if (haptic) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: ANIMATION_DURATION.SCALE });
  };

  const renderBadge = () => {
    if (!badge) return null;

    if (typeof badge === 'number') {
      return (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge > 99 ? '99+' : badge}</Text>
        </View>
      );
    }

    if (badge === true) {
      return <View style={styles.dotBadge} />;
    }

    return null;
  };

  const radius = 16; // Matches styles.container.borderRadius

  return (
    <View style={[styles.root, style]}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onLayout={onLayout}
        style={[styles.container, containerStyle]}
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
            </Canvas>
          )}
          <View style={styles.iconContainer}>
            {React.isValidElement(icon)
              ? React.cloneElement(icon as React.ReactElement<any>, {
                  color: 'white' // Icons in solid buttons should be white
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
