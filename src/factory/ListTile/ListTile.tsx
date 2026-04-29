import React, { useMemo } from 'react';
import {
  View,
  Pressable,
  ViewStyle,
  StyleProp,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { createStyles } from './ListTile.styles';
import { Text } from '../Text/Text';
import { useTheme } from '../ThemeContext';

export interface ListTileProps {
  title: string;
  subtitle?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  divider?: boolean;
  disabled?: boolean;
  iconWrapper?: boolean;
}

export interface ListTileGroupProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const ListTileGroup = ({ children, style }: ListTileGroupProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={[styles.groupContainer, style]}>
      {children}
    </View>
  );
};

export interface ListTileIconProps {
  children: React.ReactNode;
  wrapper?: boolean;
  position?: 'left' | 'right';
}

export const ListTileIcon = ({ children, wrapper = false, position = 'left' }: ListTileIconProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={[
      position === 'left' ? styles.leftIconContainer : styles.rightIconContainer,
      wrapper && styles.iconWrapper
    ]}>
      {children}
    </View>
  );
};

export const ListTile = ({
  title,
  subtitle,
  leftIcon,
  rightIcon,
  onPress,
  style,
  divider = false,
  disabled = false,
  iconWrapper = false,
}: ListTileProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const translateX = useSharedValue(0);

  const handlePressIn = () => {
    if (!disabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      translateX.value = withTiming(8, { duration: 100 });
    }
  };

  const handlePressOut = () => {
    if (!disabled) {
      translateX.value = withTiming(0, { duration: 150 });
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      testID="list-tile"
    >
      {({ pressed }) => (
        <Animated.View
          style={[
            styles.container,
            divider && styles.divider,
            disabled && { opacity: 0.5 },
            pressed && !disabled && { opacity: 0.7 },
            style,
            animatedStyle,
          ]}
        >
      {leftIcon && (
        <ListTileIcon wrapper={iconWrapper} position="left">
          {leftIcon}
        </ListTileIcon>
      )}
      <View style={styles.content}>
        <Text weight="semibold" numberOfLines={1}>{title}</Text>
        {subtitle && (
          <Text color="muted" size="sm" numberOfLines={2}>{subtitle}</Text>
        )}
      </View>
      {rightIcon && (
        <ListTileIcon position="right">
          {rightIcon}
        </ListTileIcon>
      )}
        </Animated.View>
      )}
    </Pressable>
  );
};
