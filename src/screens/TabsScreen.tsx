import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, ListTile, ListTileGroup, spacing, Text, useTheme, Page } from '../factory';
import { Feather } from '@expo/vector-icons';

const CATEGORIES = ['All', 'Electronics', 'Clothing', 'Home', 'Garden', 'Toys', 'Sports', 'Books'];

export const TabsScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('All');
  const { colors } = useTheme();

  return (
    <Page
      scrollable
      contentContainerStyle={styles.content}
      header={
        <Header
          title="Products"
          onBackPress={() => navigation.goBack()}
          tabs={CATEGORIES}
          activeTab={activeTab}
          onTabPress={setActiveTab}
        />
      }
    >
      <View style={styles.contentPlaceholder}>
        <Text size="xl" weight="bold" style={{ color: colors.foreground }}>Active Category: {activeTab}</Text>
        <Text style={{ color: colors.muted, lineHeight: 22 }}>
          This screen demonstrates the smooth tab navigation built into the premium Header component.
        </Text>

        {/* Example items using ListTile */}
        <ListTileGroup>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <ListTile
              key={item}
              title={`Item ${item}`}
              subtitle={`Description for item ${item} in ${activeTab}`}
              leftIcon={<Feather name="box" size={20} color={colors.foreground} />}
              iconWrapper
              rightIcon={<Feather name="chevron-right" size={18} color={colors.muted} />}
              divider={index !== 4}
              onPress={() => console.log(`Pressed item ${item}`)}
            />
          ))}
        </ListTileGroup>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: spacing.s7,
  },
  contentPlaceholder: {
    gap: spacing.s9,
  },
});
