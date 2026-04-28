import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, ListTile, ListTileGroup, spacing, colors, uiColors } from '../factory';
import { Ionicons } from '@expo/vector-icons';

const CATEGORIES = ['All', 'Electronics', 'Clothing', 'Home', 'Garden', 'Toys', 'Sports', 'Books'];

export const TabsScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('All');

  return (
    <View style={styles.container}>
      <Header
        title="Products"
        onBackPress={() => navigation.goBack()}
        tabs={CATEGORIES}
        activeTab={activeTab}
        onTabPress={setActiveTab}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.contentPlaceholder}>
          <Text style={styles.tabInfo}>Active Category: {activeTab}</Text>
          <Text style={styles.placeholderText}>
            This screen demonstrates the smooth tab navigation built into the premium Header component.
          </Text>

          {/* Example items using ListTile */}
          <ListTileGroup>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <ListTile
                key={item}
                title={`Item ${item}`}
                subtitle={`Description for item ${item} in ${activeTab}`}
                leftIcon={<Ionicons name="cube-outline" size={24} color={uiColors.theme.foreground} />}
                iconWrapper
                rightIcon={<Ionicons name="chevron-forward" size={20} color={uiColors.theme.muted} />}
                divider={index !== 4}
                onPress={() => console.log(`Pressed item ${item}`)}
              />
            ))}
          </ListTileGroup>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: uiColors.theme.background,
  },
  content: {
    padding: spacing.s7,
  },
  contentPlaceholder: {
    gap: spacing.s9,
  },
  tabInfo: {
    fontSize: 20,
    fontWeight: '700',
    color: uiColors.theme.foreground,
  },
  placeholderText: {
    fontSize: 15,
    color: uiColors.theme.muted,
    lineHeight: 22,
  },
});
