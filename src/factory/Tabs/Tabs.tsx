import React, { useMemo, useState } from 'react';
import { View, Pressable, LayoutChangeEvent } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
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

  const onLayout = (event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  const indicatorStyle = useAnimatedStyle(() => {
    if (containerWidth === 0) return { opacity: 0 };

    return {
      width: indicatorWidth,
      transform: [
        {
          translateX: withTiming(activeTab * indicatorWidth + 4, {
            duration: 120,
          })
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
