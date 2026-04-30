import React, { useMemo, useState, useEffect } from 'react';
import { View, Pressable, LayoutChangeEvent } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

import { createStyles } from './Tabs.styles';
import { useTheme } from '../ThemeContext';
import { Text } from '../Text/Text';

export interface TabsProps {
  tabs: string[];
  activeTab: number;
  onChange: (index: number) => void;
}

export const Tabs = ({
  tabs,
  activeTab,
  onChange,
}: TabsProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const [containerWidth, setContainerWidth] = useState(0);
  const indicatorWidth = containerWidth > 0 ? (containerWidth - 8) / tabs.length : 0; // 8 is padding * 2

  const animatedIndex = useSharedValue(activeTab);

  useEffect(() => {
    animatedIndex.value = withSpring(activeTab, {
      damping: 20,
      stiffness: 150,
      mass: 0.5,
    });
  }, [activeTab]);

  const onLayout = (event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  const indicatorStyle = useAnimatedStyle(() => {
    if (containerWidth === 0) return { opacity: 0 };

    const currentPos = animatedIndex.value;
    const targetPos = activeTab;
    
    // Morph effect: stretch the indicator based on distance from target
    const distance = Math.abs(currentPos - targetPos);
    const stretch = distance * (indicatorWidth * 0.4); // Stretch up to 40% of width
    
    // Determine direction to adjust translateX
    // If currentPos < targetPos, we are moving right, so we keep the left edge fixed while stretching
    const isMovingRight = currentPos < targetPos;

    return {
      width: indicatorWidth + stretch,
      transform: [
        {
          translateX: isMovingRight 
            ? currentPos * indicatorWidth + 4 
            : currentPos * indicatorWidth + 4 - stretch
        }
      ],
      opacity: 1,
    };
  }, [containerWidth, activeTab, indicatorWidth]);

  const handlePress = (index: number) => {
    if (index !== activeTab) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onChange(index);
    }
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      {containerWidth > 0 && (
        <Animated.View style={[styles.indicator, indicatorStyle]} />
      )}
      {tabs.map((tab, index) => (
        <Pressable
          key={tab}
          style={styles.tab}
          onPress={() => handlePress(index)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === index && styles.activeTabText
            ]}
          >
            {tab}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};
