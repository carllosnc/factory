import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, ListTile, ListTileGroup, spacing, Text, useTheme, Page, Tabs, typography } from '../factory';
import { Feather } from '@expo/vector-icons';

const CATEGORIES = ['All', 'Electronics', 'Clothing', 'Home', 'Garden', 'Toys', 'Sports', 'Books'];

export const TabsScreen = () => {
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSegment, setActiveSegment] = useState(0);
  const { colors } = useTheme();

  return (
    <Page
      scrollable
      contentContainerStyle={styles.content}
      header={
        <Header
          title="Tabs Showcase"
          onBackPress={() => navigation.goBack()}
          tabs={CATEGORIES}
          activeTab={activeCategory}
          onTabPress={setActiveCategory}
        />
      }
    >
      <View style={styles.contentPlaceholder}>
        <View style={styles.section}>
          <Text variant="h2">Header Tabs</Text>
          <Text muted>
            Smooth, scrollable tabs integrated directly into the Header component. Perfect for top-level navigation.
          </Text>
          <View style={[styles.activeDisplay, { backgroundColor: colors.surface || 'rgba(255, 255, 255, 0.05)', borderColor: colors.border || 'rgba(255, 255, 255, 0.1)' }]}>
            <Text weight="semibold" size="lg">
              Selected: <Text color={colors.primary}>{activeCategory}</Text>
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text variant="h2">Segmented Control</Text>
          <Text muted>
            A premium Skia-powered segmented control for switching between views or filtering content.
          </Text>
          <Tabs 
            tabs={['Daily', 'Weekly', 'Monthly']} 
            activeTab={activeSegment} 
            onChange={setActiveSegment} 
          />
        </View>

        <View style={styles.section}>
          <Text variant="h2">Interactive List</Text>
          <ListTileGroup>
            {[1, 2, 3].map((item, index) => (
              <ListTile
                key={item}
                title={`Product Item ${item}`}
                subtitle={`Showing results for ${activeCategory} (${['Daily', 'Weekly', 'Monthly'][activeSegment]})`}
                leftIcon={<Feather name="package" size={20} color={colors.foreground} />}
                iconWrapper
                rightIcon={<Feather name="chevron-right" size={18} color={colors.muted} />}
                divider={index !== 2}
              />
            ))}
          </ListTileGroup>
        </View>
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
  section: {
    gap: spacing.s3,
  },
  activeDisplay: {
    padding: spacing.s4,
    borderRadius: 12,
    borderWidth: 1,
  },
});
