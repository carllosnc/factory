import React, { useEffect } from 'react';
import { View } from 'react-native';
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
  type SharedValue,
} from 'react-native-reanimated';
import { useTheme } from '../ThemeContext';

interface SpinnerProps {
  size?: number;
  color?: string;
  spokes?: number;
}

interface SpinnerSpokeProps {
  index: number;
  spokes: number;
  center: number;
  innerRadius: number;
  spokeLength: number;
  spokeWidth: number;
  spinnerColor: string;
  progress: SharedValue<number>;
}

const SpinnerSpoke = ({
  index,
  spokes,
  center,
  innerRadius,
  spokeLength,
  spokeWidth,
  spinnerColor,
  progress,
}: SpinnerSpokeProps) => {
  const angle = index * (360 / spokes);

  const opacity = useDerivedValue(() => {
    const activeSpoke = Math.floor(progress.value * spokes);
    const distance = (index - activeSpoke + spokes) % spokes;
    return Math.max(0.1, 1 - (distance / (spokes * 0.75)));
  });

  return (
    <Group
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
};

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

  return (
    <View
      style={{ width: size, height: size }}
      accessible
      accessibilityRole="progressbar"
      accessibilityLabel="Loading"
    >
      <Canvas style={{ flex: 1 }}>
        {Array.from({ length: spokes }).map((_, index) => (
          <SpinnerSpoke
            key={index}
            index={index}
            spokes={spokes}
            center={center}
            innerRadius={innerRadius}
            spokeLength={spokeLength}
            spokeWidth={spokeWidth}
            spinnerColor={spinnerColor}
            progress={progress}
          />
        ))}
      </Canvas>
    </View>
  );
};
