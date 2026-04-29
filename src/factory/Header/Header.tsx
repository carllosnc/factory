import React, { useMemo } from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import {
  Canvas,
  Rect,
  LinearGradient,
  vec,
} from "@shopify/react-native-skia";
import { styles as createStyles } from './Header.styles';
import { useHeader } from './useHeader';
import { useTheme } from '../ThemeContext';
import { colors as baseColors } from '../factory';

interface HeaderProps {
  title: string;
  onBackPress?: () => void;
  actions?: { icon: React.ReactNode; onPress: () => void }[];
  tabs?: string[];
  activeTab?: string;
  onTabPress?: (tab: string) => void;
  statusBarStyle?: 'light' | 'dark' | 'auto' | 'inverted';
  statusBarTranslucent?: boolean;
}

export const Header = ({
  title,
  onBackPress,
  actions = [],
  tabs = [],
  activeTab,
  onTabPress,
  statusBarStyle = 'light',
  statusBarTranslucent = true,
}: HeaderProps) => {
  const { colors, isDark } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const { layout, scrollViewRef, onLayout, onTabLayout } = useHeader(activeTab);

  const gradientColors = useMemo(() => {
    // We use a slightly deeper gradient for the header
    return isDark 
      ? [baseColors.primary.t600, baseColors.primary.t900]
      : [baseColors.primary.t500, baseColors.primary.t700];
  }, [isDark]);

  return (
    <View style={styles.container} onLayout={onLayout}>
      <StatusBar style={statusBarStyle} translucent={statusBarTranslucent} />
      {layout.width > 0 && (
        <Canvas style={StyleSheet.absoluteFill}>
          <Rect x={0} y={0} width={layout.width} height={layout.height}>
            <LinearGradient
              start={vec(0, 0)}
              end={vec(0, layout.height)}
              colors={gradientColors}
            />
          </Rect>
        </Canvas>
      )}
      <View style={styles.inner}>
        <View style={styles.topSection}>
          <View style={styles.titleContainer}>
            {onBackPress && (
              <Pressable
                onPress={onBackPress}
                testID="header-back-button"
                style={({ pressed }) => [
                  styles.backButton,
                  { opacity: pressed ? 0.7 : 1 }
                ]}
              >
                <Feather name="chevron-left" size={24} color="white" />
              </Pressable>
            )}
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
          </View>
          <View style={styles.actions}>
            {actions.map((action, index) => (
              <Pressable
                key={index}
                onPress={action.onPress}
                style={({ pressed }) => [
                  styles.actionButton,
                  { opacity: pressed ? 0.7 : 1 }
                ]}
              >
                {action.icon}
              </Pressable>
            ))}
          </View>
        </View>

        {tabs.length > 0 && (
          <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabScroll}
          >
            <View style={styles.tabList}>
              {tabs.map((tab) => (
                <Pressable
                  key={tab}
                  onPress={() => onTabPress?.(tab)}
                  testID={`tab-${tab}`}
                  onLayout={(e) => {
                    onTabLayout(tab, e.nativeEvent.layout.x, e.nativeEvent.layout.width);
                  }}
                  style={({ pressed }) => [
                    styles.tab,
                    activeTab === tab && styles.activeTab,
                    { opacity: pressed ? 0.8 : 1 }
                  ]}
                >
                  <Text style={styles.tabText}>{tab}</Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};
