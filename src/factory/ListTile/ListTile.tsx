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
  badge?: string | number | React.ReactNode;
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
  badge,
}: ListTileProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const translateX = useSharedValue(0);

  const handlePress = () => {
    if (!disabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      translateX.value = withTiming(8, { duration: 100 }, () => {
        translateX.value = withTiming(0, { duration: 150 });
      });
      onPress?.();
    }
  };

  const handlePressIn = () => {
    // No animation on press in
  };

  const handlePressOut = () => {
    // No animation on press out
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const renderBadge = () => {
    if (!badge) return null;

    if (typeof badge === 'string' || typeof badge === 'number') {
      return (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      );
    }

    return badge;
  };

  return (
    <Pressable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      testID="list-tile"
    >
      {({ pressed }) => (
        <View
          style={[
            styles.container,
            divider && styles.divider,
            disabled && { opacity: 0.5 },
            style,
          ]}
        >
          <Animated.View
            style={[
              { flexDirection: 'row', alignItems: 'center', flex: 1 },
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
            {renderBadge()}
            {rightIcon && (
              <ListTileIcon position="right">
                {rightIcon}
              </ListTileIcon>
            )}
          </Animated.View>
        </View>
      )}
    </Pressable>
  );
};
