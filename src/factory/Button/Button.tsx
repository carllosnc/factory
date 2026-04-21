import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  LayoutChangeEvent,
  ViewStyle,
} from 'react-native';
import {
  Canvas,
  RoundedRect,
  LinearGradient,
  vec,
  Shadow
} from "@shopify/react-native-skia";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import { colors, spacing, rounded, RoundedScale, buttonSizes, ButtonSize } from '../factory';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  rounded?: RoundedScale;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  haptic?: boolean;
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
  haptic = true
}: ButtonProps) => {
  const [layout, setLayout] = useState({ width: 0, height: 0 });
  const scale = useSharedValue(1);

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
    scale.value = withTiming(0.96, { duration: 100 });
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 100 });
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
                end={vec(0, layout.height)}
                colors={[colors.slate[700], colors.common.black]}
              />
              <Shadow
                dx={0}
                dy={4}
                blur={3}
                color="rgba(255, 255, 255, 0.5)"
                inner
              />
            </RoundedRect>
          </Canvas>
        )}
        <View style={[styles.content, { paddingHorizontal: sizeConfig.paddingHorizontal }]}>
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
        </View>
      </AnimatedView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 100,
  },
  inner: {
    flex: 1,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.common.white,
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  leftIconContainer: {
    marginRight: spacing[2],
  },
  rightIconContainer: {
    marginLeft: spacing[2],
  },
});
