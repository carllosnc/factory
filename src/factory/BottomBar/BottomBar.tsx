import React, { useMemo, useState } from 'react';
import { View, Pressable, LayoutChangeEvent } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
  interpolateColor,
  useDerivedValue,
} from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyles } from './BottomBar.styles';
import { useTheme } from '../ThemeContext';
import { spacing } from '../factory';

const AnimatedFeather = Animated.createAnimatedComponent(Feather);

export interface TabItem {
  id: string;
  label: string;
  icon: keyof typeof Feather.glyphMap;
}

export interface BottomBarProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
}

const TabButton = ({
  tab,
  isActive,
  onPress,
  colors,
  styles
}: {
  tab: TabItem;
  isActive: boolean;
  onPress: () => void;
  colors: any;
  styles: any;
}) => {
  const progress = useDerivedValue(() => {
    return withSpring(isActive ? 1 : 0, {
      damping: 20,
      stiffness: 150,
      mass: 0.5,
    });
  });

  const iconStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        progress.value,
        [0, 0.9, 1],
        [colors.muted, colors.muted, colors.onPrimary]
      ),
    };
  });

  const labelStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        progress.value,
        [0, 0.9, 1],
        [colors.muted, colors.muted, colors.primary]
      ),
    };
  });

  return (
    <Pressable onPress={onPress} style={styles.tabSlot}>
      <View style={styles.tabItem}>
        <View style={{ width: 44, height: 44, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.iconContainer}>
            <AnimatedFeather
              name={tab.icon}
              size={20}
              style={iconStyle}
            />
          </View>
        </View>

        <Animated.Text
          numberOfLines={1}
          style={[styles.label, labelStyle]}
        >
          {tab.label}
        </Animated.Text>
      </View>
    </Pressable>
  );
};

export const BottomBar = ({
  tabs,
  activeTab,
  onChange,
}: BottomBarProps) => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(colors, insets.bottom), [colors, insets.bottom]);

  const [containerWidth, setContainerWidth] = useState(0);
  const activeIndex = tabs.findIndex(t => t.id === activeTab);

  // Precise layout calculations
  const horizontalPadding = spacing.s4;
  const availableWidth = containerWidth - (horizontalPadding * 2.1);
  const slotWidth = availableWidth / tabs.length;

  const onLayout = (event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  const sliderStyle = useAnimatedStyle(() => {
    if (containerWidth === 0) return { opacity: 0 };

    const targetX = horizontalPadding + (activeIndex * slotWidth) + (slotWidth / 2) - 20;

    return {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: colors.primary,
      position: 'absolute',
      top: spacing.s5 + 2, // Centered vertically on the 44px icon container
      transform: [
        { translateX: withSpring(targetX) },
      ],
      opacity: 1,
    };
  }, [containerWidth, activeIndex, slotWidth]);

  const handlePress = (id: string) => {
    if (id !== activeTab) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onChange(id);
    }
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      {containerWidth > 0 && (
        <Animated.View style={sliderStyle} />
      )}
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          tab={tab}
          isActive={activeTab === tab.id}
          onPress={() => handlePress(tab.id)}
          colors={colors}
          styles={styles}
        />
      ))}
    </View>
  );
};
