import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Canvas,
  Line,
  Group,
  vec,
} from "@shopify/react-native-skia";
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  useDerivedValue,
} from 'react-native-reanimated';
import { useTheme } from '../ThemeContext';

interface SpinnerProps {
  size?: number;
  color?: string;
  spokes?: number;
}

export const Spinner = ({
  size = 32,
  color,
  spokes = 12,
}: SpinnerProps) => {
  const { colors } = useTheme();
  const progress = useSharedValue(0);
  const spinnerColor = color || colors.foreground;

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: 800,
        easing: Easing.linear
      }),
      -1,
      false
    );
  }, []);

  const center = size / 2;
  const spokeLength = size * 0.18;
  const spokeWidth = size * 0.07;
  const innerRadius = size * 0.25;

  const renderSpokes = () => {
    return Array.from({ length: spokes }).map((_, index) => {
      const angle = (index * (360 / spokes));

      const opacity = useDerivedValue(() => {
        const activeSpoke = Math.floor(progress.value * spokes);
        const distance = (index - activeSpoke + spokes) % spokes;
        return Math.max(0.1, 1 - (distance / (spokes * 0.75)));
      });

      return (
        <Group
          key={index}
          origin={vec(center, center)}
          transform={[{ rotate: (angle * Math.PI) / 180 }]}
        >
          <Line
            p1={vec(center, center - innerRadius)}
            p2={vec(center, center - innerRadius - spokeLength)}
            color={spinnerColor}
            style="stroke"
            strokeWidth={spokeWidth}
            strokeCap="round"
            opacity={opacity}
          />
        </Group>
      );
    });
  };

  return (
    <View style={{ width: size, height: size }}>
      <Canvas style={{ flex: 1 }}>
        {renderSpokes()}
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
