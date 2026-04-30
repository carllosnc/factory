import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, ListTile, ListTileGroup, spacing, Text, useTheme, Page, Tabs, BottomSheet, Button } from '../factory';
import { Feather } from '@expo/vector-icons';

const CATEGORIES = ['All', 'Electronics', 'Clothing', 'Home', 'Garden', 'Toys', 'Sports', 'Books'];

export const TabsScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('All');
  const [isSheetOpen, setIsSheetOpen] = useState(false);
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

        <Button 
          variant="primary" 
          title="Open Bottom Sheet" 
          onPress={() => setIsSheetOpen(true)} 
        />

        <View>
          <Text size="lg" weight="bold" style={{ color: colors.foreground, marginBottom: spacing.s5 }}>Segmented Control</Text>
          <Tabs 
            tabs={['First', 'Second', 'Third']} 
            activeTab={['First', 'Second', 'Third'].indexOf(activeTab) !== -1 ? ['First', 'Second', 'Third'].indexOf(activeTab) : 0} 
            onChange={(index) => setActiveTab(['First', 'Second', 'Third'][index])} 
          />
        </View>

        {/* Example items using ListTile */}
        <ListTileGroup>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <ListTile
              key={item}
              title={`Item this is another text to show the behavior in the code ${item}`}
              subtitle={`Description for item ${item} in ${activeTab}`}
              leftIcon={<Feather name="box" size={20} color={colors.foreground} />}
              iconWrapper
              rightIcon={<Feather name="chevron-right" size={18} color={colors.muted} />}
              divider={index !== 4}
              badge={index === 0 ? 'New' : index === 1 ? 5 : undefined}
              onPress={() => setIsSheetOpen(true)}
            />
          ))}
        </ListTileGroup>

        <BottomSheet 
          isOpen={isSheetOpen} 
          onClose={() => setIsSheetOpen(false)}
        >
          <View style={{ gap: spacing.s7 }}>
            <Text size="xl" weight="bold">Bottom Sheet Content</Text>
            <Text color="muted">
              This is a premium Bottom Sheet with a blurred overlay, smooth spring animations, and drag-to-dismiss support.
            </Text>
            <ListTileGroup>
              <ListTile 
                title="Option 1" 
                leftIcon={<Feather name="settings" size={20} />} 
                onPress={() => setIsSheetOpen(false)}
              />
              <ListTile 
                title="Option 2" 
                leftIcon={<Feather name="share" size={20} />} 
                onPress={() => setIsSheetOpen(false)}
              />
            </ListTileGroup>
            <Button 
              variant="outline" 
              title="Close" 
              onPress={() => setIsSheetOpen(false)} 
            />
          </View>
        </BottomSheet>
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
