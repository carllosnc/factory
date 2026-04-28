import React from 'react';
import {
  Text,
  View,
  Pressable,
  ViewStyle,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { styles } from './ListTile.styles';

export interface ListTileProps {
  title: string;
  subtitle?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  divider?: boolean;
  disabled?: boolean;
  iconWrapper?: boolean;
}

export interface ListTileGroupProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const ListTileGroup = ({ children, style }: ListTileGroupProps) => {
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
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        {subtitle && (
          <Text style={styles.subtitle} numberOfLines={2}>{subtitle}</Text>
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
