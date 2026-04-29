import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, spacing, useTheme, Page, BottomBar, TabItem, Text } from '../factory';

const TABS: TabItem[] = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'heart', label: 'Likes', icon: 'heart' },
  { id: 'cart', label: 'Cart', icon: 'shopping-bag' },
  { id: 'profile', label: 'User', icon: 'user' },
];

export const BottomBarScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('home');
  const { colors } = useTheme();

  return (
    <Page
      header={
        <Header
          title="Bottom Navigation"
          onBackPress={() => navigation.goBack()}
        />
      }
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text size="xl" weight="bold" style={{ color: colors.foreground }}>
            Active Tab: {activeTab.toUpperCase()}
          </Text>
          <Text style={{ color: colors.muted, textAlign: 'center', marginTop: spacing.s5 }}>
            The bottom bar is now fixed at the bottom of the screen with safe area support and no margins.
          </Text>
        </View>

        <BottomBar
          tabs={TABS}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.s8,
    paddingBottom: 100, // Make space for the fixed bar
  },
});
