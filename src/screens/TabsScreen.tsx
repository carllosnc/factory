import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, spacing, colors } from '../factory';

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
          
          {/* Example items based on active tab */}
          {[1, 2, 3, 4, 5].map((item) => (
            <View key={item} style={styles.itemCard}>
              <View style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <View style={styles.itemTitlePlaceholder} />
                <View style={styles.itemPricePlaceholder} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme.background,
  },
  content: {
    padding: spacing[6],
  },
  contentPlaceholder: {
    gap: spacing[6],
  },
  tabInfo: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.theme.foreground,
  },
  placeholderText: {
    fontSize: 15,
    color: colors.theme.muted,
    lineHeight: 22,
  },
  itemCard: {
    flexDirection: 'row',
    padding: spacing[4],
    backgroundColor: '#f1f5f9',
    borderRadius: 16,
    gap: spacing[4],
  },
  itemImage: {
    width: 80,
    height: 80,
    backgroundColor: '#e2e8f0',
    borderRadius: 12,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
    gap: spacing[2],
  },
  itemTitlePlaceholder: {
    width: '70%',
    height: 16,
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
  },
  itemPricePlaceholder: {
    width: '30%',
    height: 14,
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
  },
});
