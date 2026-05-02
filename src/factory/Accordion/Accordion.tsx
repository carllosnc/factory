import React, { useMemo, useState } from 'react';
import {
  View,
  Pressable,
  ViewStyle,
  StyleProp,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolate,
  Extrapolate,
  Easing,
} from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';

import { createStyles } from './Accordion.styles';
import { Text } from '../Text/Text';
import { useTheme } from '../ThemeContext';

export interface AccordionProps {
  title: string;
  subtitle?: string;
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
  initiallyExpanded?: boolean;
  onToggle?: (expanded: boolean) => void;
  style?: StyleProp<ViewStyle>;
  divider?: boolean;
  disabled?: boolean;
  iconWrapper?: boolean;
}

export interface AccordionGroupProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const AccordionGroup = ({ children, style }: AccordionGroupProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={[styles.groupContainer, style]}>
      {children}
    </View>
  );
};

export const Accordion = ({
  title,
  subtitle,
  leftIcon,
  children,
  initiallyExpanded = false,
  onToggle,
  style,
  divider = false,
  disabled = false,
  iconWrapper = false,
}: AccordionProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [expanded, setExpanded] = useState(initiallyExpanded);
  const [contentHeight, setContentHeight] = useState(0);

  const progress = useSharedValue(initiallyExpanded ? 1 : 0);

  const toggle = () => {
    if (disabled) return;

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const newValue = !expanded;
    setExpanded(newValue);

    progress.value = withSpring(newValue ? 1 : 0, {
      damping: 25,
      stiffness: 350,
      mass: 0.6,
      overshootClamping: true,
    });

    onToggle?.(newValue);
  };

  const bodyStyle = useAnimatedStyle(() => {
    return {
      height: progress.value * contentHeight,
      opacity: interpolate(
        progress.value,
        [0, 0.4, 1],
        [0, 0, 1],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          translateY: interpolate(
            progress.value,
            [0, 1],
            [-12, 0],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const arrowStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(
            progress.value,
            [0, 1],
            [0, 180],
            Extrapolate.CLAMP
          )}deg`,
        },
      ],
    };
  });

  return (
    <View style={[styles.container, divider && styles.divider, style]}>
      <Pressable
        onPress={toggle}
        disabled={disabled}
        style={({ pressed }) => [
          styles.header,
          pressed && { opacity: 0.7 },
        ]}
      >
        {leftIcon && (
          <View style={[styles.leftIconContainer, iconWrapper && styles.iconWrapper]}>
            {leftIcon}
          </View>
        )}
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          {subtitle && (
            <Text style={styles.subtitle} numberOfLines={2}>{subtitle}</Text>
          )}
        </View>
        <Animated.View style={[styles.rightIconContainer, arrowStyle]}>
          <Feather name="chevron-down" size={20} color={colors.muted} />
        </Animated.View>
      </Pressable>

      <Animated.View style={[styles.expandContainer, bodyStyle]}>
        <View
          onLayout={(e) => {
            setContentHeight(e.nativeEvent.layout.height);
          }}
          style={styles.expandContent}
        >
          {children}
        </View>
      </Animated.View>
    </View>
  );
};
